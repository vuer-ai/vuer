"""
Playback script for body tracking recordings.
Loads recorded body poses and animates them in the 3D scene.

This script also generates animation track data compatible with Three.js
that can be used with the FbxSkeleton component on the frontend.
"""

from params_proto import EnvVar
from tqdm import tqdm

from vuer import Vuer, VuerSession
from vuer.schemas import Fbx, CoordsMarker, group, Html, Group
from asyncio import sleep
import dotvar.auto_load  # noqa

import json
from pathlib import Path
import numpy as np
from scipy.spatial.transform import Rotation

RECORDING_PATH = Path("body_tracking_recording.json")
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


def create_animation_tracks_from_frames(frames, joint_names, fbx_joint_names, fps=30):
    """
    Create animation track data from recorded body tracking frames using relative rotations.

    Args:
        frames: Array of shape (num_frames, num_joints * 16) with transformation matrices
        joint_names: List of joint names from recording
        fbx_joint_names: List of FBX joint names (with .position or .quaternion suffix)
        fps: Frames per second (default 30)

    Returns:
        dict: Animation track data compatible with Three.js AnimationClip
    """
    num_frames = frames.shape[0]
    duration = (num_frames - 1) / fps if num_frames > 0 else 0

    # Build joint hierarchy
    hierarchy = build_joint_hierarchy()

    # Create mapping from mocap joint name to index
    joint_name_to_idx = {name: idx for idx, name in enumerate(joint_names)}

    # Create time array
    times = np.arange(num_frames) / fps

    # Initialize tracks dictionary: key -> [values_list]
    track_data = {}

    # Process each frame
    for frame_idx in range(num_frames):
        frame = frames[frame_idx]

        # Build dictionary of joint transforms for this frame
        joint_transforms = {}
        for joint_idx, joint_name in enumerate(joint_names):
            mat16 = frame[joint_idx * 16 : (joint_idx + 1) * 16]
            joint_transforms[joint_name] = np.array(mat16).reshape(4, 4)

        # Process each joint
        for joint_name in joint_names:
            if joint_name not in hierarchy:
                continue

            parent_name = hierarchy[joint_name]

            # Get the FBX joint name (simple mapping: use joint_name as-is for now)
            fbx_base_name = joint_name

            if parent_name is None:
                # Root joint (hips): extract world position and quaternion
                position, quaternion = matrix_to_position_quaternion(
                    joint_transforms[joint_name].flatten()
                )

                # Position track (only for hips)
                pos_track_key = f"{fbx_base_name}.position"
                if pos_track_key not in track_data:
                    track_data[pos_track_key] = {"type": "vector3", "values": []}
                track_data[pos_track_key]["values"].extend(position.tolist())

                # Quaternion track
                quat_track_key = f"{fbx_base_name}.quaternion"
                if quat_track_key not in track_data:
                    track_data[quat_track_key] = {"type": "quaternion", "values": []}
                track_data[quat_track_key]["values"].extend(quaternion.tolist())
            else:
                # Non-root joint: compute relative quaternion in parent's local frame
                parent_transform = joint_transforms[parent_name]
                child_transform = joint_transforms[joint_name]

                relative_quat = compute_relative_quaternion(
                    parent_transform.flatten(),
                    child_transform.flatten(),
                )

                # Quaternion track (relative rotation)
                quat_track_key = f"{fbx_base_name}.quaternion"
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

fbx_joint_names = [
    "mixamorigHips.position",
    "mixamorigHips.quaternion",
    "mixamorigSpine.quaternion",
    "mixamorigSpine1.quaternion",
    "mixamorigSpine2.quaternion",
    "mixamorigNeck.quaternion",
    "mixamorigHead.quaternion",
    "mixamorigLeftShoulder.quaternion",
    "mixamorigLeftArm.quaternion",
    "mixamorigLeftForeArm.quaternion",
    "mixamorigLeftHand.quaternion",
    "mixamorigLeftHandMiddle1.quaternion",
    "mixamorigLeftHandMiddle2.quaternion",
    "mixamorigLeftHandMiddle3.quaternion",
    "mixamorigLeftHandThumb1.quaternion",
    "mixamorigLeftHandThumb2.quaternion",
    "mixamorigLeftHandThumb3.quaternion",
    "mixamorigLeftHandIndex1.quaternion",
    "mixamorigLeftHandIndex2.quaternion",
    "mixamorigLeftHandIndex3.quaternion",
    "mixamorigLeftHandRing1.quaternion",
    "mixamorigLeftHandRing2.quaternion",
    "mixamorigLeftHandRing3.quaternion",
    "mixamorigLeftHandPinky1.quaternion",
    "mixamorigLeftHandPinky2.quaternion",
    "mixamorigLeftHandPinky3.quaternion",
    "mixamorigRightShoulder.quaternion",
    "mixamorigRightArm.quaternion",
    "mixamorigRightForeArm.quaternion",
    "mixamorigRightHand.quaternion",
    "mixamorigRightHandMiddle1.quaternion",
    "mixamorigRightHandMiddle2.quaternion",
    "mixamorigRightHandMiddle3.quaternion",
    "mixamorigRightHandThumb1.quaternion",
    "mixamorigRightHandThumb2.quaternion",
    "mixamorigRightHandThumb3.quaternion",
    "mixamorigRightHandIndex1.quaternion",
    "mixamorigRightHandIndex2.quaternion",
    "mixamorigRightHandIndex3.quaternion",
    "mixamorigRightHandRing1.quaternion",
    "mixamorigRightHandRing2.quaternion",
    "mixamorigRightHandRing3.quaternion",
    "mixamorigRightHandPinky1.quaternion",
    "mixamorigRightHandPinky2.quaternion",
    "mixamorigRightHandPinky3.quaternion",
    "mixamorigRightLeg.quaternion",
    "mixamorigRightFoot.quaternion",
    "mixamorigRightToeBase.quaternion",
    "mixamorigLeftUpLeg.quaternion",
    "mixamorigLeftLeg.quaternion",
    "mixamorigLeftFoot.quaternion",
    "mixamorigLeftToeBase.quaternion",
]

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


@app.spawn(start=True)
async def main(sess: VuerSession):
    """
    Load the recording and play back body poses in the scene.
    Also generates animation tracks for skeletal animation.
    """

    # Generate animation tracks from recorded frames
    print("[playback] Generating animation tracks...")
    animation_tracks = create_animation_tracks_from_frames(frames, joint_names, fbx_joint_names, fps=FPS)

    # Save animation tracks to JSON for reuse
    tracks_output_path = Path("body_tracking_animation_tracks.json")
    with open(tracks_output_path, "w") as f:
        json.dump(animation_tracks, f, indent=2)
    print(f"[playback] Saved animation tracks to {tracks_output_path}")
    print(f"[playback] Animation duration: {animation_tracks['duration']:.2f}s @ {animation_tracks['fps']} fps")
    print(f"[playback] Number of tracks: {len(animation_tracks['tracks'])}")

    # Load the FBX body model
    fbx_path = "https://192.168.2.141:8012/static/samba_dancing.fbx"
    scene_elements = []

    sess.upsert @ Fbx(
        key="samba_dance.fbx",
        src=fbx_path,
        position=[0, 0, 0],
        scale=0.008,
        opacity=0.8,
        # playAnimation=True,
        animation=animation_tracks,  # Pass animation tracks to Fbx component
    )
    await sleep(0.0)
    print("[playback] Loaded body.fbx with animation tracks")

    print("=" * 60)
    print("Body Tracking Playback")
    print("=" * 60)

    frame_interval = 1.0 / FPS  # Time between frames in seconds

    # Playback loop
    while True:
        # Wait for next frame
        await sleep(frame_interval)
        print("\r here")
        # Create a coordinate marker at the joint position with orientation

        for frame in tqdm(frames, desc="playback"):
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
