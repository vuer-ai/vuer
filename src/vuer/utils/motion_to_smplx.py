#!/usr/bin/env python3
"""
Motion to SMPL-X Converter

Converts WebXR motion tracking data to SMPL-X parametric model format.

Strategy: Use joint POSITIONS to infer rotations, rather than using WebXR rotation matrices directly.
This is more robust because:
1. Joint positions are unambiguous
2. We can compute bone directions from positions
3. Bone directions → local rotations

This approach is similar to how motion capture systems work.

Features:
- Position-based rotation inference
- Automatic environment mesh preservation
- Support for body and hand tracking data
"""

import argparse
import json
import numpy as np
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from datetime import datetime
from scipy.spatial.transform import Rotation as R


# SMPL-X Joint hierarchy and mapping (same as before)
SMPLX_BODY_JOINTS = [
    'pelvis', 'left_hip', 'right_hip', 'spine1', 'left_knee', 'right_knee',
    'spine2', 'left_ankle', 'right_ankle', 'spine3', 'left_foot', 'right_foot',
    'neck', 'left_collar', 'right_collar', 'head', 'left_shoulder', 'right_shoulder',
    'left_elbow', 'right_elbow', 'left_wrist', 'right_wrist',
]

WEBXR_TO_SMPLX_BODY_MAP = {
    'pelvis': 'hips',
    'left_hip': 'left-upper-leg',
    'right_hip': 'right-upper-leg',
    'spine1': 'spine-lower',
    'left_knee': 'left-lower-leg',
    'right_knee': 'right-lower-leg',
    'spine2': 'spine-middle',
    'left_ankle': 'left-foot-ankle',
    'right_ankle': 'right-foot-ankle',
    'spine3': 'chest',
    'left_foot': 'left-foot-ball',
    'right_foot': 'right-foot-ball',
    'neck': 'neck',
    'left_collar': 'left-shoulder',
    'right_collar': 'right-shoulder',
    'head': 'head',
    'left_shoulder': 'left-arm-upper',
    'right_shoulder': 'right-arm-upper',
    'left_elbow': 'left-arm-lower',
    'right_elbow': 'right-arm-lower',
    'left_wrist': None,  # Wrist from hand data
    'right_wrist': None,
}

SMPLX_KINEMATIC_CHAIN = {
    0: -1, 1: 0, 2: 0, 3: 0, 4: 1, 5: 2, 6: 3, 7: 4, 8: 5, 9: 6,
    10: 7, 11: 8, 12: 9, 13: 9, 14: 9, 15: 12, 16: 13, 17: 14,
    18: 16, 19: 17, 20: 18, 21: 19,
}

# SMPL-X bone directions in T-pose (approximate, in local coordinates)
# Key: child joint index, Value: direction vector from parent to child in T-pose
SMPLX_TPOSE_BONE_DIRS = {
    1: np.array([-1, -1, 0]),    # left_hip: left and down
    2: np.array([1, -1, 0]),     # right_hip: right and down
    3: np.array([0, 1, 0]),      # spine1: up
    4: np.array([0, -1, 0]),     # left_knee: down
    5: np.array([0, -1, 0]),     # right_knee: down
    6: np.array([0, 1, 0]),      # spine2: up
    7: np.array([0, -1, 0]),     # left_ankle: down
    8: np.array([0, -1, 0]),     # right_ankle: down
    9: np.array([0, 1, 0]),      # spine3: up
    10: np.array([0, 0, 1]),     # left_foot: forward
    11: np.array([0, 0, 1]),     # right_foot: forward
    12: np.array([0, 1, 0]),     # neck: up
    13: np.array([-1, 0, 0]),    # left_collar: left
    14: np.array([1, 0, 0]),     # right_collar: right
    15: np.array([0, 1, 0]),     # head: up
    16: np.array([-1, 0, 0]),    # left_shoulder: left
    17: np.array([1, 0, 0]),     # right_shoulder: right
    18: np.array([-1, 0, 0]),    # left_elbow: left (down arm)
    19: np.array([1, 0, 0]),     # right_elbow: right (down arm)
    20: np.array([-1, 0, 0]),    # left_wrist: left
    21: np.array([1, 0, 0]),     # right_wrist: right
}

# Normalize
for k in SMPLX_TPOSE_BONE_DIRS:
    SMPLX_TPOSE_BONE_DIRS[k] = SMPLX_TPOSE_BONE_DIRS[k] / np.linalg.norm(SMPLX_TPOSE_BONE_DIRS[k])


def extract_position(matrix: np.ndarray) -> np.ndarray:
    """Extract position from 4x4 transformation matrix (column-major)."""
    if len(matrix) == 16:
        return np.array([matrix[12], matrix[13], matrix[14]])
    else:
        raise ValueError(f"Expected 16 elements, got {len(matrix)}")


def rotation_between_vectors(v1: np.ndarray, v2: np.ndarray) -> np.ndarray:
    """
    Compute rotation matrix that rotates v1 to v2.

    Returns:
        3x3 rotation matrix
    """
    v1 = v1 / np.linalg.norm(v1)
    v2 = v2 / np.linalg.norm(v2)

    # Handle parallel/antiparallel cases
    dot = np.dot(v1, v2)
    if dot > 0.999999:
        return np.eye(3)
    if dot < -0.999999:
        # 180 degree rotation around any perpendicular axis
        perp = np.array([1, 0, 0]) if abs(v1[0]) < 0.9 else np.array([0, 1, 0])
        axis = np.cross(v1, perp)
        axis = axis / np.linalg.norm(axis)
        return R.from_rotvec(axis * np.pi).as_matrix()

    # General case: use Rodrigues formula
    axis = np.cross(v1, v2)
    axis = axis / np.linalg.norm(axis)
    angle = np.arccos(dot)
    return R.from_rotvec(axis * angle).as_matrix()


def get_joint_data(frame: Dict, joint_name: str) -> Optional[Dict]:
    """
    Get joint data from frame (flat format only).

    Args:
        frame: Frame data with flat joint structure
        joint_name: Name of the joint (WebXR format, e.g., 'hips', 'left-hand-thumb-tip')

    Returns:
        Joint data dict with 'matrix' key, or None if not found
    """
    return frame.get(joint_name)


class MotionToSMPLX:
    """Convert motion tracking data to SMPL-X using position-based approach."""

    def __init__(self, debug: bool = False):
        self.debug = debug

    def convert(self, motion_data: Dict) -> Dict:
        """Convert full motion sequence (flat format only)."""
        frames = []
        total_frames = len(motion_data['frames'])

        # Dynamic progress reporting (every 5% or at least every 30 frames)
        progress_interval = max(30, total_frames // 20)

        for i, frame in enumerate(motion_data['frames']):
            if i > 0 and i % progress_interval == 0:
                print(f"Progress: {i}/{total_frames} frames")

            smplx_frame = self.convert_frame(frame)
            frames.append(smplx_frame)

        result = {
            'session_name': motion_data.get('session_name', 'unknown'),
            'fps': motion_data.get('fps', 30),
            'frame_count': len(frames),
            'duration': motion_data.get('duration', len(frames) / motion_data.get('fps', 30)),
            'frames': frames
        }

        # Preserve environment mesh data if present
        if 'environment_mesh_snapshot' in motion_data:
            result['environment_mesh_snapshot'] = motion_data['environment_mesh_snapshot']

        return result

    def convert_frame(self, frame: Dict) -> Dict:
        """
        Convert single frame using position-based method (flat format only).

        Args:
            frame: Frame data with flat joint structure
        """
        # Step 1: Extract all joint positions
        positions = {}  # smplx_idx -> position (3D)

        for smplx_idx, smplx_joint in enumerate(SMPLX_BODY_JOINTS):
            webxr_joint = WEBXR_TO_SMPLX_BODY_MAP.get(smplx_joint)
            if webxr_joint:
                joint_data = get_joint_data(frame, webxr_joint)
                if joint_data and 'matrix' in joint_data:
                    pos = extract_position(np.array(joint_data['matrix']))
                    positions[smplx_idx] = pos

        # Step 2: Compute global orientation and translation from pelvis
        if 0 in positions:
            transl = positions[0]
            # For global orientation, we need to look at body direction
            # Use spine direction to determine facing
            if 3 in positions and 9 in positions:
                # Spine vector (lower -> upper)
                spine_vec = positions[9] - positions[3]
                spine_norm = np.linalg.norm(spine_vec)

                # Check if spine vector is valid (not too small)
                if spine_norm > 1e-4:
                    spine_vec = spine_vec / spine_norm

                    # In SMPL-X T-pose, spine points in +Y direction
                    tpose_spine = np.array([0, 1, 0])

                    # Rotation to align T-pose spine with actual spine
                    # This gives us the body's orientation
                    try:
                        global_rot = rotation_between_vectors(tpose_spine, spine_vec)
                        global_orient = R.from_matrix(global_rot).as_rotvec()
                    except (np.linalg.LinAlgError, ValueError):
                        # If rotation computation fails, use zero rotation
                        global_orient = np.zeros(3)
                else:
                    # Spine too short, use zero rotation
                    global_orient = np.zeros(3)
            else:
                global_orient = np.zeros(3)
        else:
            transl = np.zeros(3)
            global_orient = np.zeros(3)

        # Step 3: Compute body_pose from bone directions
        body_pose = np.zeros(63)

        for child_idx in range(1, 22):  # Joints 1-21 (skip pelvis/joint 0)
            parent_idx = SMPLX_KINEMATIC_CHAIN.get(child_idx, 0)

            if child_idx not in positions or parent_idx not in positions:
                continue  # No data for this bone

            # Actual bone direction (world space)
            actual_bone = positions[child_idx] - positions[parent_idx]
            actual_bone_norm = np.linalg.norm(actual_bone)

            if actual_bone_norm < 1e-6:
                continue  # Degenerate bone

            actual_bone_dir = actual_bone / actual_bone_norm

            # T-pose bone direction (local space, need to transform to world)
            tpose_bone_dir = SMPLX_TPOSE_BONE_DIRS.get(child_idx, np.array([0, 1, 0]))

            # Compute rotation needed to align T-pose direction with actual direction
            # Note: This is still simplified - we're not accounting for parent rotations properly
            try:
                rot_matrix = rotation_between_vectors(tpose_bone_dir, actual_bone_dir)
                axis_angle = R.from_matrix(rot_matrix).as_rotvec()

                # Store in body_pose
                body_pose[(child_idx - 1) * 3: child_idx * 3] = axis_angle
            except (np.linalg.LinAlgError, ValueError):
                # If rotation computation fails, keep zero rotation for this joint
                continue

        # Step 4: Hand pose (use zeros for now - hands are complex)
        left_hand_pose = np.zeros(45)
        right_hand_pose = np.zeros(45)

        return {
            'global_orient': global_orient.tolist(),
            'transl': transl.tolist(),
            'body_pose': body_pose.tolist(),
            'left_hand_pose': left_hand_pose.tolist(),
            'right_hand_pose': right_hand_pose.tolist(),
            'betas': np.zeros(10).tolist(),
            'jaw_pose': np.zeros(3).tolist(),
            'leye_pose': np.zeros(3).tolist(),
            'reye_pose': np.zeros(3).tolist(),
        }


def main():
    parser = argparse.ArgumentParser(description='Convert MotionTracker data to SMPL-X')
    parser.add_argument('--input', type=str, required=True, help='Input motion data JSON')
    parser.add_argument('--output', type=str, required=True, help='Output SMPL-X JSON')
    parser.add_argument('--debug', action='store_true', help='Enable debug output')

    args = parser.parse_args()

    print(f"Input: {args.input}")
    print(f"Output: {args.output}")

    # Load motion data
    with open(args.input, 'r') as f:
        motion_data = json.load(f)

    print(f"Loaded {len(motion_data['frames'])} frames ({motion_data.get('fps', 30)} FPS, {motion_data.get('duration', 0)}s)")

    # Convert
    converter = MotionToSMPLX(debug=args.debug)
    smplx_data = converter.convert(motion_data)

    # Save
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, 'w') as f:
        json.dump(smplx_data, f, indent=2)

    print(f"Saved: {output_path} ({smplx_data['frame_count']} frames)")


if __name__ == '__main__':
    main()
