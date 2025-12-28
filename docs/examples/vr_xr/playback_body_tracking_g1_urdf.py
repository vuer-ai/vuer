"""
Playback script for body tracking recordings with Unitree G1 URDF model.
Loads recorded body poses and animates them on the G1 humanoid robot.

This script loads the G1 URDF from the unitree_model repository and applies
body tracking data to animate the robot's joints.
"""

from params_proto import EnvVar
from tqdm import tqdm

from vuer import Vuer, VuerSession
from vuer.schemas import Urdf, CoordsMarker, group, Html, Group
from asyncio import sleep
import dotvar.auto_load  # noqa

import json
from pathlib import Path
import numpy as np
from scipy.spatial.transform import Rotation

RECORDING_PATH = Path("body_tracking_recording.json")
FPS = 30  # Playback frequency (must match recording frequency)

# G1 URDF file (local copy from unitree_ros repository)
G1_URDF_PATH = "g1_description/g1_29dof_rev_1_0.urdf"

# G1 has 29 joints: 6 per leg (12), 3 waist, 7 per arm (14)
# Lower body (indices 0-11): left leg (0-5), right leg (6-11)
# Torso (indices 12-14): waist yaw, roll, pitch
# Upper body (indices 15-28): left arm (15-21), right arm (22-28)

# Mapping from WebXR body tracking joints to G1 URDF joint names with axis specification
# Format: "mocap_joint": ("g1_urdf_joint_name", angle_component)
# angle_component: 0=x-axis (roll), 1=y-axis (pitch), 2=z-axis (yaw)
# Uses joint names from g1_29dof_rev_1_0.urdf
G1_JOINT_MAPPING = {
    # Legs
    "left-upper-leg": ("left_hip_pitch_joint", 1),      # y-axis (pitch)
    "left-lower-leg": ("left_knee_joint", 1),           # y-axis (pitch)
    "left-foot-ankle": ("left_ankle_pitch_joint", 1),   # y-axis (pitch)
    "right-upper-leg": ("right_hip_pitch_joint", 1),
    "right-lower-leg": ("right_knee_joint", 1),
    "right-foot-ankle": ("right_ankle_pitch_joint", 1),
    # Waist
    "hips": ("waist_yaw_joint", 2),        # z-axis (yaw)
    "spine-lower": ("waist_roll_joint", 0),  # x-axis (roll)
    "spine-middle": ("waist_pitch_joint", 1),  # y-axis (pitch)
    # Arms
    "left-shoulder": ("left_shoulder_pitch_joint", 1),  # y-axis (pitch)
    "left-arm-upper": ("left_shoulder_yaw_joint", 2),  # z-axis (yaw)
    "left-arm-lower": ("left_elbow_joint", 1),  # y-axis (pitch)
    "right-shoulder": ("right_shoulder_pitch_joint", 1),
    "right-arm-upper": ("right_shoulder_yaw_joint", 2),
    "right-arm-lower": ("right_elbow_joint", 1),
}


def matrix_to_position_quaternion(mat16):
    """
    Extract position (x, y, z) and quaternion (x, y, z, w) from 4x4 matrix.

    Args:
        mat16: Flat array of 16 values representing a 4x4 transformation matrix

    Returns:
        tuple: (position[3], quaternion[4])
    """
    # Convert to 4x4 matrix
    mat4x4 = np.array(mat16).reshape(4, 4)

    # Extract translation (position)
    position = mat4x4[:3, 3]

    # Extract rotation matrix and convert to quaternion
    rotation_matrix = mat4x4[:3, :3]
    rotation = Rotation.from_matrix(rotation_matrix)
    quaternion = rotation.as_quat()  # Returns [x, y, z, w]

    return position, quaternion


def build_joint_hierarchy():
    """
    Build parent-child hierarchy for WebXR whole body tracking joints.

    Returns:
        dict: Maps joint name to parent joint name (root has None as parent)
    """
    hierarchy = {
        # Root
        "hips": None,
        # Spine
        "chest": "hips",
        "neck": "chest",
        "head": "neck",
        # Left arm
        "left-shoulder": "chest",
        "left-scapula": "left-shoulder",
        "left-arm-upper": "left-shoulder",
        "left-arm-lower": "left-arm-upper",
        "left-hand-wrist-twist": "left-arm-lower",
        "left-hand-wrist": "left-hand-wrist-twist",
        "left-hand-palm": "left-hand-wrist",
        # Left hand digits
        "left-hand-thumb-metacarpal": "left-hand-palm",
        "left-hand-thumb-phalanx-proximal": "left-hand-thumb-metacarpal",
        "left-hand-thumb-phalanx-distal": "left-hand-thumb-phalanx-proximal",
        "left-hand-thumb-tip": "left-hand-thumb-phalanx-distal",
        "left-hand-index-metacarpal": "left-hand-palm",
        "left-hand-index-phalanx-proximal": "left-hand-index-metacarpal",
        "left-hand-index-phalanx-intermediate": "left-hand-index-phalanx-proximal",
        "left-hand-index-phalanx-distal": "left-hand-index-phalanx-intermediate",
        "left-hand-index-tip": "left-hand-index-phalanx-distal",
        "left-hand-middle-metacarpal": "left-hand-palm",
        "left-hand-middle-phalanx-proximal": "left-hand-middle-metacarpal",
        "left-hand-middle-phalanx-intermediate": "left-hand-middle-phalanx-proximal",
        "left-hand-middle-phalanx-distal": "left-hand-middle-phalanx-intermediate",
        "left-hand-middle-tip": "left-hand-middle-phalanx-distal",
        "left-hand-ring-metacarpal": "left-hand-palm",
        "left-hand-ring-phalanx-proximal": "left-hand-ring-metacarpal",
        "left-hand-ring-phalanx-intermediate": "left-hand-ring-phalanx-proximal",
        "left-hand-ring-phalanx-distal": "left-hand-ring-phalanx-intermediate",
        "left-hand-ring-tip": "left-hand-ring-phalanx-distal",
        "left-hand-little-metacarpal": "left-hand-palm",
        "left-hand-little-phalanx-proximal": "left-hand-little-metacarpal",
        "left-hand-little-phalanx-intermediate": "left-hand-little-phalanx-proximal",
        "left-hand-little-phalanx-distal": "left-hand-little-phalanx-intermediate",
        "left-hand-little-tip": "left-hand-little-phalanx-distal",
        # Right arm
        "right-shoulder": "chest",
        "right-scapula": "right-shoulder",
        "right-arm-upper": "right-shoulder",
        "right-arm-lower": "right-arm-upper",
        "right-hand-wrist-twist": "right-arm-lower",
        "right-hand-wrist": "right-hand-wrist-twist",
        "right-hand-palm": "right-hand-wrist",
        # Right hand digits
        "right-hand-thumb-metacarpal": "right-hand-palm",
        "right-hand-thumb-phalanx-proximal": "right-hand-thumb-metacarpal",
        "right-hand-thumb-phalanx-distal": "right-hand-thumb-phalanx-proximal",
        "right-hand-thumb-tip": "right-hand-thumb-phalanx-distal",
        "right-hand-index-metacarpal": "right-hand-palm",
        "right-hand-index-phalanx-proximal": "right-hand-index-metacarpal",
        "right-hand-index-phalanx-intermediate": "right-hand-index-phalanx-proximal",
        "right-hand-index-phalanx-distal": "right-hand-index-phalanx-intermediate",
        "right-hand-index-tip": "right-hand-index-phalanx-distal",
        "right-hand-middle-metacarpal": "right-hand-palm",
        "right-hand-middle-phalanx-proximal": "right-hand-middle-metacarpal",
        "right-hand-middle-phalanx-intermediate": "right-hand-middle-phalanx-proximal",
        "right-hand-middle-phalanx-distal": "right-hand-middle-phalanx-intermediate",
        "right-hand-middle-tip": "right-hand-middle-phalanx-distal",
        "right-hand-ring-metacarpal": "right-hand-palm",
        "right-hand-ring-phalanx-proximal": "right-hand-ring-metacarpal",
        "right-hand-ring-phalanx-intermediate": "right-hand-ring-phalanx-proximal",
        "right-hand-ring-phalanx-distal": "right-hand-ring-phalanx-intermediate",
        "right-hand-ring-tip": "right-hand-ring-phalanx-distal",
        "right-hand-little-metacarpal": "right-hand-palm",
        "right-hand-little-phalanx-proximal": "right-hand-little-metacarpal",
        "right-hand-little-phalanx-intermediate": "right-hand-little-phalanx-proximal",
        "right-hand-little-phalanx-distal": "right-hand-little-phalanx-intermediate",
        "right-hand-little-tip": "right-hand-little-phalanx-distal",
        # Legs
        "left-upper-leg": "hips",
        "left-lower-leg": "left-upper-leg",
        "left-foot-ankle-twist": "left-lower-leg",
        "left-foot-ankle": "left-foot-ankle-twist",
        "left-foot-subtalar": "left-foot-ankle",
        "left-foot-transverse": "left-foot-subtalar",
        "left-foot-ball": "left-foot-transverse",
        "right-upper-leg": "hips",
        "right-lower-leg": "right-upper-leg",
        "right-foot-ankle-twist": "right-lower-leg",
        "right-foot-ankle": "right-foot-ankle-twist",
        "right-foot-subtalar": "right-foot-ankle",
        "right-foot-transverse": "right-foot-subtalar",
        "right-foot-ball": "right-foot-transverse",
    }
    return hierarchy


def compute_relative_quaternion(parent_mat16, child_mat16):
    """
    Compute relative quaternion between parent and child in parent's local frame.

    Args:
        parent_mat16: Parent's 4x4 transformation matrix (flat array of 16 values)
        child_mat16: Child's 4x4 transformation matrix (flat array of 16 values)

    Returns:
        np.array: Quaternion [x, y, z, w] in parent's local frame
    """
    parent_mat = np.array(parent_mat16).reshape(4, 4)
    child_mat = np.array(child_mat16).reshape(4, 4)

    # Compute relative transform: parent_inverse @ child
    parent_inv = np.linalg.inv(parent_mat)
    relative_mat = parent_inv @ child_mat

    # Extract rotation and convert to quaternion
    rotation = Rotation.from_matrix(relative_mat[:3, :3])
    quaternion = rotation.as_quat()  # Returns [x, y, z, w]

    return quaternion


def quaternion_to_euler_angles(quat):
    """
    Convert quaternion to Euler angles around x, y, z axes.

    Args:
        quat: Quaternion as [x, y, z, w]

    Returns:
        tuple: (angle_x, angle_y, angle_z) in radians
    """
    # Convert quaternion to Euler angles
    rotation = Rotation.from_quat(quat)
    euler = rotation.as_euler('xyz')  # Get angles around x, y, z axes
    return tuple(float(angle) for angle in euler)


def create_g1_joint_values_from_frames(frames, mocap_joint_names, webxr_joint_names):
    """
    Create G1 joint values from body tracking frames.

    Maps mocap body tracking joint data to G1 robot joints and converts quaternions
    to joint angles where applicable.

    Args:
        frames: Array of shape (num_frames, num_mocap_joints * 16) with transformation matrices
        mocap_joint_names: List of mocap joint names from recording
        webxr_joint_names: List of WebXR whole body joint names for mapping

    Returns:
        list: List of dictionaries with G1 joint configurations for each frame
    """
    num_frames = frames.shape[0]
    hierarchy = build_joint_hierarchy()
    mocap_joint_name_to_idx = {name: idx for idx, name in enumerate(mocap_joint_names)}

    g1_joint_configs = []

    for frame_idx in range(num_frames):
        frame = frames[frame_idx]

        # Build dictionary of joint transforms for this frame
        joint_transforms = {}
        for joint_idx, joint_name in enumerate(mocap_joint_names):
            mat16 = frame[joint_idx * 16 : (joint_idx + 1) * 16]
            joint_transforms[joint_name] = np.array(mat16).reshape(4, 4)

        # Create G1 joint configuration
        g1_joints = {}

        for webxr_joint, mapping_tuple in G1_JOINT_MAPPING.items():
            # Skip if we don't have this mocap joint
            if webxr_joint not in mocap_joint_name_to_idx:
                continue

            g1_joint_name, angle_axis = mapping_tuple
            parent_name = hierarchy.get(webxr_joint)

            if parent_name is None or parent_name not in mocap_joint_name_to_idx:
                # Root joint - extract world position
                position, _ = matrix_to_position_quaternion(
                    joint_transforms[webxr_joint].flatten()
                )
                # For root, we could store position if needed (typically not for URDF joints)
            else:
                # Non-root joint - compute relative quaternion in parent's local frame
                parent_transform = joint_transforms[parent_name]
                child_transform = joint_transforms[webxr_joint]

                relative_quat = compute_relative_quaternion(
                    parent_transform.flatten(),
                    child_transform.flatten(),
                )

                # Convert quaternion to Euler angles and extract the appropriate axis
                euler_angles = quaternion_to_euler_angles(relative_quat)
                angle = euler_angles[angle_axis]  # Select the appropriate axis angle in radians
                g1_joints[g1_joint_name] = angle

        g1_joint_configs.append(g1_joints)

    return g1_joint_configs


# WebXR Whole Body tracking joint names (mocap skeleton)
webxr_wholebody = [
    "root",
    "hips",
    "spine-lower",
    "spine-middle",
    "spine-upper",
    "chest",
    "neck",
    "head",
    "left-shoulder",
    "left-scapula",
    "left-arm-upper",
    "left-arm-lower",
    "left-hand-wrist-twist",
    "right-shoulder",
    "right-scapula",
    "right-arm-upper",
    "right-arm-lower",
    "right-hand-wrist-twist",
    "left-hand-palm",
    "left-hand-wrist",
    "left-hand-thumb-metacarpal",
    "left-hand-thumb-phalanx-proximal",
    "left-hand-thumb-phalanx-distal",
    "left-hand-thumb-tip",
    "left-hand-index-metacarpal",
    "left-hand-index-phalanx-proximal",
    "left-hand-index-phalanx-intermediate",
    "left-hand-index-phalanx-distal",
    "left-hand-index-tip",
    "left-hand-middle-metacarpal",
    "left-hand-middle-phalanx-proximal",
    "left-hand-middle-phalanx-intermediate",
    "left-hand-middle-phalanx-distal",
    "left-hand-middle-tip",
    "left-hand-ring-metacarpal",
    "left-hand-ring-phalanx-proximal",
    "left-hand-ring-phalanx-intermediate",
    "left-hand-ring-phalanx-distal",
    "left-hand-ring-tip",
    "left-hand-little-metacarpal",
    "left-hand-little-phalanx-proximal",
    "left-hand-little-phalanx-intermediate",
    "left-hand-little-phalanx-distal",
    "left-hand-little-tip",
    "right-hand-palm",
    "right-hand-wrist",
    "right-hand-thumb-metacarpal",
    "right-hand-thumb-phalanx-proximal",
    "right-hand-thumb-phalanx-distal",
    "right-hand-thumb-tip",
    "right-hand-index-metacarpal",
    "right-hand-index-phalanx-proximal",
    "right-hand-index-phalanx-intermediate",
    "right-hand-index-phalanx-distal",
    "right-hand-index-tip",
    "right-hand-middle-metacarpal",
    "right-hand-middle-phalanx-proximal",
    "right-hand-middle-phalanx-intermediate",
    "right-hand-middle-phalanx-distal",
    "right-hand-middle-tip",
    "right-hand-ring-metacarpal",
    "right-hand-ring-phalanx-proximal",
    "right-hand-ring-phalanx-intermediate",
    "right-hand-ring-phalanx-distal",
    "right-hand-ring-tip",
    "right-hand-little-metacarpal",
    "right-hand-little-phalanx-proximal",
    "right-hand-little-phalanx-intermediate",
    "right-hand-little-phalanx-distal",
    "right-hand-little-tip",
    "left-upper-leg",
    "left-lower-leg",
    "left-foot-ankle-twist",
    "left-foot-ankle",
    "left-foot-subtalar",
    "left-foot-transverse",
    "left-foot-ball",
    "right-upper-leg",
    "right-lower-leg",
    "right-foot-ankle-twist",
    "right-foot-ankle",
    "right-foot-subtalar",
    "right-foot-transverse",
    "right-foot-ball",
]

# Load recording data
with open("body_tracking_recording.json", "r") as f:
    s = f.read()
    data = json.loads(s)

frames = np.array(data["frames"])
joint_names = data["joint_names"]


app = Vuer(
    domain="192.168.2.141",
    cors="https://192.168.2.141:3012",
    cert=EnvVar("SSL_CERT", default=None).get(),
    key=EnvVar("SSL_KEY", default=None).get(),
    ca_cert=EnvVar("SSL_CA_CERT", default=None).get(),
    host="0.0.0.0",
    port=8012,
)


@app.spawn(start=True)
async def main(sess: VuerSession):
    """
    Load the recording and play back body poses on the G1 robot model.
    """

    # Generate G1 joint configurations from recorded frames
    print("[playback] Generating G1 joint configurations...")
    g1_joint_configs = create_g1_joint_values_from_frames(frames, joint_names, webxr_wholebody)
    print(f"[playback] Generated {len(g1_joint_configs)} joint configurations")

    # Load the G1 URDF model
    print(f"[playback] Loading G1 URDF from {G1_URDF_PATH}")
    sess.upsert @ Urdf(
        key="g1_robot",
        src=G1_URDF_PATH,
        position=[0, 0, 0],
        scale=1.0,
        opacity=0.9,
        workingPath="g1_description/",
        parseVisual=True,
        parseCollision=False,
    )
    await sleep(0.0)
    print("[playback] Loaded G1 URDF model")

    print("=" * 60)
    print("Body Tracking Playback - Unitree G1 Robot")
    print("=" * 60)

    frame_interval = 1.0 / FPS  # Time between frames in seconds

    # Playback loop
    while True:
        # Wait for next frame
        await sleep(frame_interval)
        print("\r here")
        # Create a coordinate marker at the joint position with orientation

        for frame_idx, frame in enumerate(tqdm(frames, desc="playback")):
            # Update G1 joint configuration for this frame
            if frame_idx < len(g1_joint_configs):
                joint_config = g1_joint_configs[frame_idx]

                # Update the URDF with new joint values
                sess.upsert @ Urdf(
                    key="g1_robot",
                    src=G1_URDF_PATH,
                    position=[0, 0, 0],
                    scale=1.0,
                    opacity=0.9,
                    workingPath="g1_description/",
                    jointValues=joint_config,
                    parseVisual=True,
                    parseCollision=False,
                )

            # Create coordinate markers for visualization
            sess.upsert @ group(
                *[
                    Group(
                        CoordsMarker(
                            key=f"joint_{joint_idx:01d}.marker",
                            scale=0.075,
                        ),
                        Html(
                            f"{joint_names[joint_idx]}",
                            key=f"joint_{joint_idx:01d}.html",
                        ),
                        key=f"joint_{joint_idx:01d}.group",
                        matrix=mat16,
                    )
                    for (joint_idx, mat16) in enumerate(frame.reshape(-1, 16))
                ],
                key="body",
            )

            await sleep(1 / FPS)

        await sleep(1.0)
