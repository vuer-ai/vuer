"""
WebXR to SMPL Converter - Full IK Implementation

Converts WebXR body tracking data to SMPL parameters with proper inverse kinematics.

Requirements:
    pip install numpy scipy
"""

import json
import numpy as np
from typing import Dict, List, Tuple
from pathlib import Path
from scipy.spatial.transform import Rotation as R


# SMPL skeleton hierarchy (parent indices)
# -1 means root (no parent)
SMPL_PARENTS = [
    -1,  # 0: Pelvis (root)
    0,   # 1: L_Hip
    0,   # 2: R_Hip
    0,   # 3: Spine1
    1,   # 4: L_Knee
    2,   # 5: R_Knee
    3,   # 6: Spine2
    4,   # 7: L_Ankle
    5,   # 8: R_Ankle
    6,   # 9: Spine3
    7,   # 10: L_Foot
    8,   # 11: R_Foot
    9,   # 12: Neck
    9,   # 13: L_Collar
    9,   # 14: R_Collar
    12,  # 15: Head
    13,  # 16: L_Shoulder
    14,  # 17: R_Shoulder
    16,  # 18: L_Elbow
    17,  # 19: R_Elbow
    18,  # 20: L_Wrist
    19,  # 21: R_Wrist
    20,  # 22: L_Hand
    21,  # 23: R_Hand
]

# WebXR to SMPL joint mapping
WEBXR_TO_SMPL_MAPPING = {
    'hips': 0,              # Pelvis (root)
    'left-upper-leg': 1,    # L_Hip
    'right-upper-leg': 2,   # R_Hip
    'spine-lower': 3,       # Spine1
    'left-lower-leg': 4,    # L_Knee
    'right-lower-leg': 5,   # R_Knee
    'spine-middle': 6,      # Spine2
    'left-foot-ankle': 7,   # L_Ankle
    'right-foot-ankle': 8,  # R_Ankle
    'chest': 9,             # Spine3
    'left-foot-ball': 10,   # L_Foot
    'right-foot-ball': 11,  # R_Foot
    'neck': 12,             # Neck
    'left-shoulder': 13,    # L_Collar
    'right-shoulder': 14,   # R_Collar
    'head': 15,             # Head
    'left-upper-arm': 16,   # L_Shoulder
    'right-upper-arm': 17,  # R_Shoulder
    'left-lower-arm': 18,   # L_Elbow
    'right-lower-arm': 19,  # R_Elbow
    'left-hand-wrist': 20,  # L_Wrist
    'right-hand-wrist': 21, # R_Wrist
    'left-hand-middle-metacarpal': 22,  # L_Hand
    'right-hand-middle-metacarpal': 23, # R_Hand
}


def extract_positions_from_webxr(webxr_frame: Dict) -> np.ndarray:
    """
    Extract joint positions from WebXR frame.

    Args:
        webxr_frame: Single frame from WebXR data with joint matrices

    Returns:
        positions: (24, 3) array of joint positions in world space
    """
    positions = np.zeros((24, 3))

    for joint_name, smpl_idx in WEBXR_TO_SMPL_MAPPING.items():
        if joint_name in webxr_frame and webxr_frame[joint_name] is not None:
            joint_data = webxr_frame[joint_name]
            if 'matrix' in joint_data and len(joint_data['matrix']) >= 16:
                # WebXR matrix is column-major, translation at indices [12, 13, 14]
                matrix = joint_data['matrix']
                positions[smpl_idx] = np.array([
                    matrix[12],  # x
                    matrix[13],  # y
                    matrix[14],  # z
                ])

    return positions


def extract_global_rotations_from_webxr(webxr_frame: Dict) -> np.ndarray:
    """
    Extract joint rotation matrices from WebXR frame.

    Args:
        webxr_frame: Single frame from WebXR data with joint matrices

    Returns:
        rotations: (24, 3, 3) array of rotation matrices in world space
    """
    rotations = np.zeros((24, 3, 3))

    for joint_name, smpl_idx in WEBXR_TO_SMPL_MAPPING.items():
        if joint_name in webxr_frame and webxr_frame[joint_name] is not None:
            joint_data = webxr_frame[joint_name]
            if 'matrix' in joint_data and len(joint_data['matrix']) >= 16:
                # WebXR uses column-major 4x4 matrices
                matrix_flat = np.array(joint_data['matrix'])
                # Reshape with Fortran order (column-major)
                matrix_4x4 = matrix_flat.reshape(4, 4, order='F')
                # Extract 3x3 rotation part
                rotations[smpl_idx] = matrix_4x4[:3, :3]

    # Fill missing joints with identity
    for i in range(24):
        if np.allclose(rotations[i], 0):
            rotations[i] = np.eye(3)

    return rotations


def rotation_matrix_to_axis_angle(rotation_matrix: np.ndarray) -> np.ndarray:
    """
    Convert rotation matrix to axis-angle representation.

    Args:
        rotation_matrix: (3, 3) rotation matrix

    Returns:
        axis_angle: (3,) axis-angle vector (rotation axis * angle in radians)
    """
    r = R.from_matrix(rotation_matrix)
    return r.as_rotvec()


def align_coordinate_system(rotation: np.ndarray,
                           from_system: str = "webxr",
                           to_system: str = "smpl") -> np.ndarray:
    """
    Align coordinate systems between WebXR and SMPL.

    WebXR coordinate system: Y-up, right-handed
    SMPL coordinate system: Y-up, right-handed

    However, WebXR bodies are lying down in the coordinate system,
    so we need to rotate 90° around X-axis to make them stand upright.

    Args:
        rotation: (3, 3) rotation matrix
        from_system: Source coordinate system
        to_system: Target coordinate system

    Returns:
        aligned_rotation: (3, 3) aligned rotation matrix
    """
    # Rotate 90° around X-axis to convert from WebXR's lying-down pose to standing pose
    # Tested with test_coordinate_fix.py - V4 was the winner
    rot_x_90 = R.from_euler('x', 90, degrees=True).as_matrix()
    return rot_x_90 @ rotation


def compute_local_rotations(global_rotations: np.ndarray,
                            parents: List[int]) -> np.ndarray:
    """
    Convert global (world-space) rotations to local (parent-relative) rotations.

    For each joint:
        R_local[i] = R_global[parent[i]]^T @ R_global[i]

    Args:
        global_rotations: (24, 3, 3) global rotation matrices
        parents: List of parent indices for each joint

    Returns:
        local_rotations: (24, 3, 3) local rotation matrices
    """
    local_rotations = np.zeros_like(global_rotations)

    for i in range(len(parents)):
        if parents[i] == -1:
            # Root joint: local rotation = global rotation
            local_rotations[i] = global_rotations[i]
        else:
            # Child joint: R_local = R_parent^T @ R_global
            parent_idx = parents[i]
            parent_rot_inv = global_rotations[parent_idx].T
            local_rotations[i] = parent_rot_inv @ global_rotations[i]

    return local_rotations


def convert_webxr_frame_to_smpl(webxr_frame: Dict) -> Dict:
    """
    Convert a single WebXR frame to SMPL parameters using full IK.

    Steps:
    1. Extract global positions and rotations from WebXR
    2. Align coordinate systems (WebXR → SMPL)
    3. Compute local (parent-relative) rotations
    4. Convert rotation matrices to axis-angle format
    5. Extract root translation and orientation
    6. Format as SMPL parameters

    Args:
        webxr_frame: Single frame from WebXR data

    Returns:
        smpl_params: Dict with keys:
            - body_pose: (69,) joint rotations (23 joints × 3)
            - global_orient: (3,) root rotation
            - translation: (3,) root position
            - betas: (10,) shape parameters (zeros)
    """
    # Step 1: Extract global data
    positions = extract_positions_from_webxr(webxr_frame)
    global_rotations = extract_global_rotations_from_webxr(webxr_frame)

    # Step 2: Align coordinate systems
    aligned_rotations = np.zeros_like(global_rotations)
    for i in range(24):
        aligned_rotations[i] = align_coordinate_system(global_rotations[i])

    # Step 3: Compute local rotations
    local_rotations = compute_local_rotations(aligned_rotations, SMPL_PARENTS)

    # Step 4: Convert to axis-angle
    axis_angles = np.zeros((24, 3))
    for i in range(24):
        axis_angles[i] = rotation_matrix_to_axis_angle(local_rotations[i])

    # Step 5: Extract root parameters (joint 0 = pelvis)
    global_orient = axis_angles[0]  # Root orientation
    translation = positions[0]      # Root position

    # Step 6: Body pose (joints 1-23, flattened)
    body_pose = axis_angles[1:].flatten()  # (23, 3) → (69,)

    # Step 7: Shape parameters (default zeros)
    betas = np.zeros(10)

    return {
        'body_pose': body_pose.tolist(),
        'global_orient': global_orient.tolist(),
        'translation': translation.tolist(),
        'betas': betas.tolist()
    }


def load_webxr_data(filepath: str) -> Dict:
    """
    Load WebXR tracking data from JSON file.

    Args:
        filepath: Path to WebXR JSON file

    Returns:
        WebXR data dictionary with 'frames' and 'fps'
    """
    with open(filepath, 'r') as f:
        return json.load(f)


def save_smpl_sequence(filepath: str, frames: List[Dict], fps: int = 30, metadata: Dict = None):
    """
    Save SMPL parameter sequence to JSON file.

    Args:
        filepath: Output JSON file path
        frames: List of SMPL parameter dicts
        fps: Frames per second
        metadata: Optional metadata dict
    """
    output_data = {
        'fps': fps,
        'frames': frames,
    }

    if metadata:
        output_data['metadata'] = metadata

    with open(filepath, 'w') as f:
        json.dump(output_data, f, indent=2)

    print(f"✅ Saved {len(frames)} frames to: {filepath}")


def convert_webxr_to_smpl(webxr_file: str, output_file: str, method: str = "full_ik"):
    """
    Convert WebXR tracking data to SMPL parameters.

    Args:
        webxr_file: Path to input WebXR JSON file
        output_file: Path to output SMPL JSON file
        method: Conversion method:
                - "full_ik": Full inverse kinematics (default)
                - "position_only": Simple position extraction (T-pose)
    """
    # Load WebXR data
    webxr_data = load_webxr_data(webxr_file)
    frames = webxr_data['frames']
    fps = webxr_data.get('fps', 30)

    print(f"🔄 Converting {len(frames)} frames using method: {method}")
    print(f"   FPS: {fps}")
    print(f"   Input: {webxr_file}")
    print(f"   Output: {output_file}")
    print()

    smpl_frames = []

    for i, frame in enumerate(frames):
        if i % 30 == 0 or i == len(frames) - 1:
            print(f"  📊 Processing frame {i+1}/{len(frames)}...")

        if method == "full_ik":
            # Full IK conversion
            smpl_params = convert_webxr_frame_to_smpl(frame)
            smpl_frames.append(smpl_params)

        elif method == "position_only":
            # Simple position-only conversion (T-pose)
            positions = extract_positions_from_webxr(frame)
            translation = positions[0]  # Hips position

            smpl_frames.append({
                'body_pose': np.zeros(69).tolist(),
                'global_orient': np.zeros(3).tolist(),
                'translation': translation.tolist(),
                'betas': np.zeros(10).tolist()
            })
        else:
            raise ValueError(f"Unknown conversion method: {method}")

    # Save output
    metadata = {
        'source': 'webxr',
        'method': method,
        'converter_version': '2.0',
        'note': 'Full IK conversion with coordinate alignment and local rotation computation.'
    }

    save_smpl_sequence(output_file, smpl_frames, fps=fps, metadata=metadata)

    print()
    print(f"✅ Conversion complete!")
    print(f"   Total frames: {len(smpl_frames)}")
    print(f"   Duration: {len(smpl_frames) / fps:.2f} seconds")


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(
        description='Convert WebXR tracking data to SMPL format with full IK',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Full IK conversion (recommended)
  python webxr_to_smpl.py input.json output.json

  # Simple position-only (T-pose)
  python webxr_to_smpl.py input.json output.json --method position_only
        """
    )

    parser.add_argument('input', help='Input WebXR JSON file')
    parser.add_argument('output', help='Output SMPL JSON file')
    parser.add_argument('--method',
                       choices=['full_ik', 'position_only'],
                       default='full_ik',
                       help='Conversion method (default: full_ik)')

    args = parser.parse_args()

    convert_webxr_to_smpl(args.input, args.output, method=args.method)
