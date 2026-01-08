"""
Playback script for body tracking recordings with SMPL model.
Loads recorded body poses and animates them on an SMPL humanoid model.

This script generates animation track data compatible with Three.js
that can be used with the FbxSkeleton or Glb component on the frontend.
"""

from params_proto import EnvVar
from tqdm import tqdm

from vuer import Vuer, VuerSession
from vuer.schemas import Fbx, CoordsMarker, group, Html, Group
from asyncio import sleep
import dotvar.auto_load  # noqa

import json
import yaml
from pathlib import Path
import numpy as np
from scipy.spatial.transform import Rotation

from docs.examples.vr_xr.data_utils import load_tracks

# Load joint name lists from YAML files
_dir = Path(__file__).parent
with open(_dir / "smpl_joint_names.yaml") as f:
    smpl_joint_names = yaml.safe_load(f)
with open(_dir / "webxr_wholebody.yaml") as f:
    webxr_wholebody = yaml.safe_load(f)

FPS = 30  # Playback frequency (must match recording frequency)


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


def build_smpl_hierarchy():
    """
    Build parent-child hierarchy for SMPL joints.

    Returns:
        dict: Maps SMPL joint name to parent joint name (Pelvis has None as parent)
    """
    hierarchy = {
        # Root
        "Pelvis": None,
        # Legs
        "L_Hip": "Pelvis",
        "L_Knee": "L_Hip",
        "L_Ankle": "L_Knee",
        "L_Foot": "L_Ankle",
        "R_Hip": "Pelvis",
        "R_Knee": "R_Hip",
        "R_Ankle": "R_Knee",
        "R_Foot": "R_Ankle",
        # Spine
        "Spine1": "Pelvis",
        "Spine2": "Spine1",
        "Spine3": "Spine2",
        # Head
        "Neck": "Spine3",
        "Head": "Neck",
        # Left arm
        "L_Collar": "Spine3",
        "L_Shoulder": "L_Collar",
        "L_Elbow": "L_Shoulder",
        "L_Wrist": "L_Elbow",
        "L_Hand": "L_Wrist",
        # Right arm
        "R_Collar": "Spine3",
        "R_Shoulder": "R_Collar",
        "R_Elbow": "R_Shoulder",
        "R_Wrist": "R_Elbow",
        "R_Hand": "R_Wrist",
    }
    return hierarchy


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


def create_animation_tracks_from_frames(frames, mocap_joint_names, smpl_joint_names, fps=30):
    """
    Create animation track data from mocap frames using SMPL joint mapping with matrix transformations.

    Maps mocap body tracking joints to SMPL skeleton with Pelvis as root, computing relative
    transformations for each joint in the SMPL hierarchy.

    Args:
        frames: Array of shape (num_frames, num_joints * 16) with transformation matrices
        mocap_joint_names: List of mocap joint names from recording (WebXR tracking)
        smpl_joint_names: List of SMPL joint names (with .position or .quaternion suffix)
        fps: Frames per second (default 30)

    Returns:
        dict: Animation track data compatible with Three.js AnimationClip
    """
    num_frames = frames.shape[0]
    duration = (num_frames - 1) / fps if num_frames > 0 else 0

    # SMPL FBX model joint name prefix
    SMPL_PREFIX = "m_mosh_cmu88_8806_"

    # Build SMPL hierarchy
    smpl_hierarchy = build_smpl_hierarchy()

    # Create mapping from mocap joint name to index
    mocap_joint_name_to_idx = {name: idx for idx, name in enumerate(mocap_joint_names)}

    # Create time array
    times = np.arange(num_frames) / fps

    # Initialize tracks dictionary
    track_data = {}

    # Mapping from mocap (WebXR) joints to SMPL joint names
    mocap_to_smpl = {
        "hips": "Pelvis",
        "chest": "Spine3",
        "neck": "Neck",
        "head": "Head",
        "left-shoulder": "L_Collar",
        "left-arm-upper": "L_Shoulder",
        "left-arm-lower": "L_Elbow",
        "left-hand-wrist": "L_Wrist",
        "left-hand-palm": "L_Hand",
        "right-shoulder": "R_Collar",
        "right-arm-upper": "R_Shoulder",
        "right-arm-lower": "R_Elbow",
        "right-hand-wrist": "R_Wrist",
        "right-hand-palm": "R_Hand",
        "left-upper-leg": "L_Hip",
        "left-lower-leg": "L_Knee",
        "left-foot-ankle": "L_Ankle",
        "left-foot-ball": "L_Foot",
        "right-upper-leg": "R_Hip",
        "right-lower-leg": "R_Knee",
        "right-foot-ankle": "R_Ankle",
        "right-foot-ball": "R_Foot",
    }

    # Build reverse mapping: SMPL joint -> mocap joint
    smpl_to_mocap = {v: k for k, v in mocap_to_smpl.items()}

    # Build SMPL hierarchy for each joint to find parent in SMPL space
    smpl_joint_parent_mocap = {}
    for smpl_joint, smpl_parent in smpl_hierarchy.items():
        if smpl_joint in smpl_to_mocap:
            mocap_joint = smpl_to_mocap[smpl_joint]
            # Find parent in SMPL hierarchy
            if smpl_parent is not None:
                mocap_parent = smpl_to_mocap.get(smpl_parent)
                smpl_joint_parent_mocap[mocap_joint] = mocap_parent
            else:
                smpl_joint_parent_mocap[mocap_joint] = None

    # Process each frame
    for frame_idx in range(num_frames):
        frame = frames[frame_idx]

        # Build dictionary of joint transforms for this frame
        mocap_joint_transforms = {}
        for joint_idx, joint_name in enumerate(mocap_joint_names):
            mat16 = frame[joint_idx * 16 : (joint_idx + 1) * 16]
            mocap_joint_transforms[joint_name] = np.array(mat16).reshape(4, 4)

        # Process each SMPL joint
        for mocap_joint, smpl_joint in mocap_to_smpl.items():
            if mocap_joint not in mocap_joint_name_to_idx:
                continue

            # Get parent in SMPL hierarchy
            smpl_parent = smpl_hierarchy[smpl_joint]
            mocap_parent = smpl_to_mocap.get(smpl_parent) if smpl_parent else None

            if mocap_parent is None:
                # Pelvis (root): extract world position and quaternion
                position, quaternion = matrix_to_position_quaternion(
                    mocap_joint_transforms[mocap_joint].flatten()
                )

                # Position track
                pos_track_key = f"{SMPL_PREFIX}{smpl_joint}.position"
                if pos_track_key not in track_data:
                    track_data[pos_track_key] = {"type": "vector3", "values": []}
                track_data[pos_track_key]["values"].extend(position.tolist())

                # Quaternion track
                quat_track_key = f"{SMPL_PREFIX}{smpl_joint}.quaternion"
                if quat_track_key not in track_data:
                    track_data[quat_track_key] = {"type": "quaternion", "values": []}
                track_data[quat_track_key]["values"].extend(quaternion.tolist())
            else:
                # Non-root joint: compute relative quaternion in parent's local frame
                if mocap_parent not in mocap_joint_name_to_idx:
                    continue

                parent_transform = mocap_joint_transforms[mocap_parent]
                child_transform = mocap_joint_transforms[mocap_joint]

                relative_quat = compute_relative_quaternion(
                    parent_transform.flatten(),
                    child_transform.flatten(),
                )

                # Quaternion track (relative rotation)
                quat_track_key = f"{SMPL_PREFIX}{smpl_joint}.quaternion"
                if quat_track_key not in track_data:
                    track_data[quat_track_key] = {"type": "quaternion", "values": []}
                track_data[quat_track_key]["values"].extend(relative_quat.tolist())

    # Convert track_data to Three.js animation format
    tracks = []
    for track_key, track_info in track_data.items():
        tracks.append(
            {
                "name": track_key,
                "type": track_info["type"],
                "times": times.tolist(),
                "values": track_info["values"],
            }
        )

    return {"name": "body_tracking_animation", "fps": fps, "duration": float(duration), "tracks": tracks}


app = Vuer(
    domain="192.168.2.141",
    cors="https://192.168.2.141:3012",
    cert=EnvVar("SSL_CERT", default=None).get(),
    key=EnvVar("SSL_KEY", default=None).get(),
    ca_cert=EnvVar("SSL_CA_CERT", default=None).get(),
    host="0.0.0.0",
    port=8012,
)

# Load recording data from JSONL
df = load_tracks(".data")

# Extract body frames (filter out rows without body data)
body_rows = df[df["body"].notna()]["body"].tolist()
if not body_rows:
    raise ValueError("No body tracking data found in recording")

frames = np.array(body_rows)
joint_names = webxr_wholebody  # Use WebXR joint names
print(f"[playback] Loaded {len(frames)} frames with {frames.shape[1] // 16} joints")


@app.spawn(start=True)
async def main(sess: VuerSession):
    """
    Load the recording and play back body poses on an SMPL model.
    Also generates animation tracks for skeletal animation.
    """

    # Generate animation tracks from recorded frames
    print("[playback] Generating animation tracks for SMPL...")
    animation_tracks = create_animation_tracks_from_frames(frames, joint_names, smpl_joint_names, fps=FPS)

    # Save animation tracks to JSON for reuse
    tracks_output_path = Path("body_tracking_animation_tracks_smpl.json")
    with open(tracks_output_path, "w") as f:
        json.dump(animation_tracks, f, indent=2)
    print(f"[playback] Saved animation tracks to {tracks_output_path}")
    print(f"[playback] Animation duration: {animation_tracks['duration']:.2f}s @ {animation_tracks['fps']} fps")
    print(f"[playback] Number of tracks: {len(animation_tracks['tracks'])}")

    # Load the SMPL model (FBX format)
    # You can host this on a server or use a local path
    smpl_path = "https://192.168.2.141:8012/static/smpl.fbx"

    sess.upsert @ Fbx(
        key="smpl_model",
        src=smpl_path,
        position=[0, 0, 0],
        scale=1.0,
        opacity=0.8,
        animation=animation_tracks,  # Pass animation tracks to Fbx component
    )
    await sleep(0.0)
    print("[playback] Loaded SMPL model with animation tracks")

    print("=" * 60)
    print("Body Tracking Playback - SMPL Model")
    print("=" * 60)

    frame_interval = 1.0 / FPS  # Time between frames in seconds

    # Playback loop
    while True:
        # Wait for next frame
        await sleep(frame_interval)
        # print("\r here")
        # Create a coordinate marker at the joint position with orientation

        # for frame in tqdm(frames, desc="playback"):
        #     sess.upsert @ group(
        #         *[
        #             Group(
        #                 CoordsMarker(
        #                     key=f"joint_{joint_idx:01d}.marker",
        #                     scale=0.075,
        #                 ),
        #                 Html(
        #                     f"{joint_names[joint_idx]}",
        #                     key=f"joint_{joint_idx:01d}.html",
        #                 ),
        #                 key=f"joint_{joint_idx:01d}.group",
        #                 matrix=mat16,
        #             )
        #             for (joint_idx, mat16) in enumerate(frame.reshape(-1, 16))
        #         ],
        #         key="body",
        #     )
        #
        #     await sleep(1 / FPS)

        await sleep(1.0)
