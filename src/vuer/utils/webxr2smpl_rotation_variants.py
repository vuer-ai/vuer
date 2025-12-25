"""
WebXR to SMPL - Testing Different Rotation Computation Methods

Since variants 4, 5, 14 got the legs on the same side but limbs are still twisted,
this file tests different ways to compute LOCAL rotations.

Each variant combines:
  - Coordinate transform (from variant 4, 5, or 14)
  - Different local rotation computation method
"""

import json
import numpy as np
from typing import Dict, List
from scipy.spatial.transform import Rotation as R
import argparse


SMPL_PARENTS = [
    -1, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8,
    9, 9, 9, 12, 13, 14, 16, 17, 18, 19, 20, 21,
]

WEBXR_TO_SMPL_MAPPING = {
    'hips': 0,
    'left-upper-leg': 1,
    'right-upper-leg': 2,
    'spine-lower': 3,
    'left-lower-leg': 4,
    'right-lower-leg': 5,
    'spine-middle': 6,
    'left-foot-ankle': 7,
    'right-foot-ankle': 8,
    'chest': 9,
    'left-foot-ball': 10,
    'right-foot-ball': 11,
    'neck': 12,
    'left-shoulder': 13,
    'right-shoulder': 14,
    'head': 15,
    'left-arm-upper': 16,
    'right-arm-upper': 17,
    'left-arm-lower': 18,
    'right-arm-lower': 19,
    'left-hand-wrist': 20,
    'right-hand-wrist': 21,
    'left-hand-middle-metacarpal': 22,
    'right-hand-middle-metacarpal': 23,
}


def extract_positions_from_webxr(webxr_frame: Dict) -> np.ndarray:
    positions = np.zeros((24, 3))
    for joint_name, smpl_idx in WEBXR_TO_SMPL_MAPPING.items():
        if joint_name in webxr_frame and webxr_frame[joint_name] is not None:
            joint_data = webxr_frame[joint_name]
            if 'matrix' in joint_data and len(joint_data['matrix']) >= 16:
                matrix = joint_data['matrix']
                positions[smpl_idx] = np.array([matrix[12], matrix[13], matrix[14]])
    return positions


def extract_global_rotations_from_webxr(webxr_frame: Dict) -> np.ndarray:
    rotations = np.zeros((24, 3, 3))
    for joint_name, smpl_idx in WEBXR_TO_SMPL_MAPPING.items():
        if joint_name in webxr_frame:
            joint_data = webxr_frame[joint_name]
            if joint_data is not None and 'matrix' in joint_data and len(joint_data['matrix']) >= 16:
                matrix_flat = np.array(joint_data['matrix'])
                matrix_4x4 = matrix_flat.reshape(4, 4, order='F')
                rotations[smpl_idx] = matrix_4x4[:3, :3]
    return rotations


def rotation_matrix_to_axis_angle(rotation_matrix: np.ndarray) -> np.ndarray:
    r = R.from_matrix(rotation_matrix)
    return r.as_rotvec()


# ===========================================================================
# COORDINATE TRANSFORMS (from working variants 4, 5, 14)
# ===========================================================================

def coord_transform_variant4(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """Variant 4: (x,y,z) -> (x,z,-y)"""
    pos_out = positions.copy()
    rot_out = rotations.copy()

    pos_out = positions[:, [0, 2, 1]]
    pos_out[:, 2] = -pos_out[:, 2]

    transform = np.array([[1, 0, 0], [0, 0, 1], [0, -1, 0]])
    for i in range(24):
        rot_out[i] = transform @ rotations[i] @ transform.T

    return pos_out, rot_out


def coord_transform_variant5(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """Variant 5: (x,y,z) -> (-x,z,-y)"""
    pos_out = positions.copy()
    rot_out = rotations.copy()

    pos_out[:, 0] = -positions[:, 0]
    pos_out = pos_out[:, [0, 2, 1]]
    pos_out[:, 2] = -pos_out[:, 2]

    transform = np.array([[-1, 0, 0], [0, 0, 1], [0, -1, 0]])
    for i in range(24):
        rot_out[i] = transform @ rotations[i] @ transform.T

    return pos_out, rot_out


def coord_transform_variant14(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """Variant 14: (x,y,z) -> (z,x,y)"""
    pos_out = positions.copy()
    rot_out = rotations.copy()

    pos_out = positions[:, [2, 0, 1]]

    permute = np.array([[0, 1, 0], [0, 0, 1], [1, 0, 0]])
    for i in range(24):
        rot_out[i] = permute @ rotations[i] @ permute.T

    return pos_out, rot_out


# ===========================================================================
# ROTATION COMPUTATION METHODS
# ===========================================================================

def compute_local_rotations_method0(global_rotations: np.ndarray, parents: List[int]) -> np.ndarray:
    """METHOD 0 (ORIGINAL): R_local = R_parent^T @ R_global"""
    local_rotations = np.zeros_like(global_rotations)
    for i in range(len(parents)):
        if parents[i] == -1:
            local_rotations[i] = global_rotations[i]
        else:
            parent_idx = parents[i]
            parent_rot_inv = global_rotations[parent_idx].T
            local_rotations[i] = parent_rot_inv @ global_rotations[i]
    return local_rotations


def compute_local_rotations_method1(global_rotations: np.ndarray, parents: List[int]) -> np.ndarray:
    """METHOD 1: R_local = R_global @ R_parent^T (reversed order)"""
    local_rotations = np.zeros_like(global_rotations)
    for i in range(len(parents)):
        if parents[i] == -1:
            local_rotations[i] = global_rotations[i]
        else:
            parent_idx = parents[i]
            parent_rot_inv = global_rotations[parent_idx].T
            local_rotations[i] = global_rotations[i] @ parent_rot_inv
    return local_rotations


def compute_local_rotations_method2(global_rotations: np.ndarray, parents: List[int]) -> np.ndarray:
    """METHOD 2: R_local = R_parent @ R_global^T"""
    local_rotations = np.zeros_like(global_rotations)
    for i in range(len(parents)):
        if parents[i] == -1:
            local_rotations[i] = global_rotations[i]
        else:
            parent_idx = parents[i]
            local_rotations[i] = global_rotations[parent_idx] @ global_rotations[i].T
    return local_rotations


def compute_local_rotations_method3(global_rotations: np.ndarray, parents: List[int]) -> np.ndarray:
    """METHOD 3: R_local = R_global^T @ R_parent"""
    local_rotations = np.zeros_like(global_rotations)
    for i in range(len(parents)):
        if parents[i] == -1:
            local_rotations[i] = global_rotations[i]
        else:
            parent_idx = parents[i]
            local_rotations[i] = global_rotations[i].T @ global_rotations[parent_idx]
    return local_rotations


def compute_local_rotations_method4(global_rotations: np.ndarray, parents: List[int]) -> np.ndarray:
    """METHOD 4: Just transpose each global rotation (ignore parents)"""
    local_rotations = np.zeros_like(global_rotations)
    for i in range(len(parents)):
        local_rotations[i] = global_rotations[i].T
    return local_rotations


def compute_local_rotations_method5(global_rotations: np.ndarray, parents: List[int]) -> np.ndarray:
    """METHOD 5: Use global rotations directly (no local conversion)"""
    return global_rotations.copy()


def compute_local_rotations_method6(global_rotations: np.ndarray, parents: List[int]) -> np.ndarray:
    """METHOD 6: Original method but transpose result"""
    local_rotations = np.zeros_like(global_rotations)
    for i in range(len(parents)):
        if parents[i] == -1:
            local_rotations[i] = global_rotations[i]
        else:
            parent_idx = parents[i]
            parent_rot_inv = global_rotations[parent_idx].T
            local_rotations[i] = parent_rot_inv @ global_rotations[i]

    # Transpose result
    for i in range(24):
        local_rotations[i] = local_rotations[i].T

    return local_rotations


def compute_local_rotations_method7(global_rotations: np.ndarray, parents: List[int]) -> np.ndarray:
    """METHOD 7: Negate axis-angle approach - compute normally then negate"""
    # This is handled in conversion, not here
    return compute_local_rotations_method0(global_rotations, parents)


# Mapping
ROTATION_METHODS = {
    0: compute_local_rotations_method0,
    1: compute_local_rotations_method1,
    2: compute_local_rotations_method2,
    3: compute_local_rotations_method3,
    4: compute_local_rotations_method4,
    5: compute_local_rotations_method5,
    6: compute_local_rotations_method6,
    7: compute_local_rotations_method7,
}

COORD_TRANSFORMS = {
    4: coord_transform_variant4,
    5: coord_transform_variant5,
    14: coord_transform_variant14,
}


def convert_webxr_frame_to_smpl(webxr_frame: Dict, coord_var: int = 4, rot_method: int = 0) -> Dict:
    """
    Convert WebXR frame to SMPL.

    Args:
        coord_var: Coordinate transform variant (4, 5, or 14)
        rot_method: Rotation computation method (0-7)
    """
    # Extract
    positions = extract_positions_from_webxr(webxr_frame)
    global_rotations = extract_global_rotations_from_webxr(webxr_frame)

    # Apply coordinate transform
    coord_func = COORD_TRANSFORMS[coord_var]
    positions, global_rotations = coord_func(positions, global_rotations)

    # Compute local rotations with specified method
    rot_func = ROTATION_METHODS[rot_method]
    local_rotations = rot_func(global_rotations, SMPL_PARENTS)

    # Convert to axis-angle
    axis_angles = np.zeros((24, 3))
    for i in range(24):
        axis_angles[i] = rotation_matrix_to_axis_angle(local_rotations[i])

    # Special handling for method 7: negate axis-angles
    if rot_method == 7:
        axis_angles = -axis_angles

    # Extract parameters
    global_orient = axis_angles[0]
    translation = positions[0]
    body_pose = axis_angles[1:].flatten()
    betas = np.zeros(10)

    return {
        'body_pose': body_pose.tolist(),
        'global_orient': global_orient.tolist(),
        'translation': translation.tolist(),
        'betas': betas.tolist()
    }


def convert_webxr_to_smpl(webxr_file: str, output_file: str, coord_var: int = 4, rot_method: int = 0):
    """Convert WebXR to SMPL with specified transforms."""
    with open(webxr_file, 'r') as f:
        webxr_data = json.load(f)

    frames = webxr_data['frames']
    fps = webxr_data.get('fps', 30)

    print(f"🔄 Converting {len(frames)} frames")
    print(f"   Coordinate transform: Variant {coord_var}")
    print(f"   Rotation method: {rot_method}")
    print(f"   FPS: {fps}")

    smpl_frames = []
    for i, frame in enumerate(frames):
        if i % 30 == 0 or i == len(frames) - 1:
            print(f"  📊 Processing frame {i+1}/{len(frames)}...")
        smpl_params = convert_webxr_frame_to_smpl(frame, coord_var, rot_method)
        smpl_frames.append(smpl_params)

    output_data = {
        'fps': fps,
        'frames': smpl_frames,
        'coord_variant': coord_var,
        'rotation_method': rot_method,
    }

    with open(output_file, 'w') as f:
        json.dump(output_data, f, indent=2)

    print(f"✅ Saved to: {output_file}")


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Test rotation computation methods with working coordinate transforms',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Coordinate transforms (from variants that got legs right):
  4:  (x,y,z) -> (x,z,-y)
  5:  (x,y,z) -> (-x,z,-y)
  14: (x,y,z) -> (z,x,y)

Rotation methods:
  0: R_local = R_parent^T @ R_global (ORIGINAL)
  1: R_local = R_global @ R_parent^T (reversed)
  2: R_local = R_parent @ R_global^T
  3: R_local = R_global^T @ R_parent
  4: R_local = R_global^T (ignore parents)
  5: R_local = R_global (use global directly)
  6: Original method + transpose result
  7: Original method + negate axis-angle

Example:
  python webxr2smpl_rotation_variants.py input.json output.json --coord 4 --method 1
        """
    )

    parser.add_argument('input', help='Input WebXR JSON')
    parser.add_argument('output', help='Output SMPL JSON')
    parser.add_argument('--coord', type=int, choices=[4, 5, 14], default=4,
                       help='Coordinate transform variant (default: 4)')
    parser.add_argument('--method', type=int, choices=range(8), default=0,
                       help='Rotation computation method (default: 0)')

    args = parser.parse_args()

    convert_webxr_to_smpl(args.input, args.output, args.coord, args.method)
