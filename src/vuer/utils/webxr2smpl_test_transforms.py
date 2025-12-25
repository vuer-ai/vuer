"""
WebXR to SMPL Converter - Multiple Coordinate Transform Tests

This file contains multiple variants of coordinate transformations to test.
Run each variant and check which one produces correct visualization.

Usage:
    python webxr2smpl_test_transforms.py --variant 1 input.json output.json
"""

import json
import numpy as np
from typing import Dict, List
from scipy.spatial.transform import Rotation as R
import argparse


# SMPL skeleton hierarchy (parent indices)
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
    """Extract joint positions from WebXR frame."""
    positions = np.zeros((24, 3))

    for joint_name, smpl_idx in WEBXR_TO_SMPL_MAPPING.items():
        if joint_name in webxr_frame and webxr_frame[joint_name] is not None:
            joint_data = webxr_frame[joint_name]
            if 'matrix' in joint_data and len(joint_data['matrix']) >= 16:
                matrix = joint_data['matrix']
                positions[smpl_idx] = np.array([
                    matrix[12],
                    matrix[13],
                    matrix[14],
                ])

    return positions


def extract_global_rotations_from_webxr(webxr_frame: Dict) -> np.ndarray:
    """Extract joint rotation matrices from WebXR frame."""
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
    """Convert rotation matrix to axis-angle representation."""
    r = R.from_matrix(rotation_matrix)
    return r.as_rotvec()


def compute_local_rotations(global_rotations: np.ndarray,
                            parents: List[int]) -> np.ndarray:
    """Convert global rotations to local rotations."""
    local_rotations = np.zeros_like(global_rotations)

    for i in range(len(parents)):
        if parents[i] == -1:
            local_rotations[i] = global_rotations[i]
        else:
            parent_idx = parents[i]
            parent_rot_inv = global_rotations[parent_idx].T
            local_rotations[i] = parent_rot_inv @ global_rotations[i]

    return local_rotations


# ============================================================================
# COORDINATE TRANSFORMATION VARIANTS
# ============================================================================

def transform_variant_0(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 0: NO TRANSFORMATION (baseline)
    - Direct pass-through
    - This is the current broken implementation
    """
    return positions.copy(), rotations.copy()


def transform_variant_1(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 1: FLIP X-AXIS
    - Mirror positions and rotations across YZ plane
    - WebXR: -X is left, SMPL: +X is left
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Flip X positions
    positions_out[:, 0] = -positions_out[:, 0]

    # Transform rotations: mirror across YZ plane
    # Flip matrix: diag([-1, 1, 1])
    flip_x = np.array([[-1, 0, 0], [0, 1, 0], [0, 0, 1]])
    for i in range(24):
        rotations_out[i] = flip_x @ rotations_out[i] @ flip_x.T

    return positions_out, rotations_out


def transform_variant_2(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 2: FLIP Z-AXIS
    - Mirror across XY plane
    - Might be needed if forward/backward is inverted
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Flip Z positions
    positions_out[:, 2] = -positions_out[:, 2]

    # Transform rotations
    flip_z = np.array([[1, 0, 0], [0, 1, 0], [0, 0, -1]])
    for i in range(24):
        rotations_out[i] = flip_z @ rotations_out[i] @ flip_z.T

    return positions_out, rotations_out


def transform_variant_3(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 3: FLIP X AND Z
    - Mirror both horizontal axes
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Flip X and Z
    positions_out[:, 0] = -positions_out[:, 0]
    positions_out[:, 2] = -positions_out[:, 2]

    # Transform rotations
    flip_xz = np.array([[-1, 0, 0], [0, 1, 0], [0, 0, -1]])
    for i in range(24):
        rotations_out[i] = flip_xz @ rotations_out[i] @ flip_xz.T

    return positions_out, rotations_out


def transform_variant_4(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 4: SWAP Y AND Z (Y-up to Z-up)
    - If SMPL actually uses Z-up instead of Y-up
    - Transformation: (x, y, z) -> (x, z, -y)
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Swap Y and Z, negate new Z
    positions_out = positions[:, [0, 2, 1]]
    positions_out[:, 2] = -positions_out[:, 2]

    # Transform rotations
    swap_yz = np.array([[1, 0, 0], [0, 0, 1], [0, -1, 0]])
    for i in range(24):
        rotations_out[i] = swap_yz @ rotations[i] @ swap_yz.T

    return positions_out, rotations_out


def transform_variant_5(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 5: FLIP X + SWAP Y AND Z
    - Combination of flipping X and swapping Y/Z
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # First flip X
    positions_out[:, 0] = -positions_out[:, 0]

    # Then swap Y and Z
    positions_out = positions_out[:, [0, 2, 1]]
    positions_out[:, 2] = -positions_out[:, 2]

    # Combined transformation
    transform = np.array([[-1, 0, 0], [0, 0, 1], [0, -1, 0]])
    for i in range(24):
        rotations_out[i] = transform @ rotations[i] @ transform.T

    return positions_out, rotations_out


def transform_variant_6(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 6: TRANSPOSE ROTATION MATRICES
    - If WebXR matrices are row-major instead of column-major
    - This would mean we're reading them wrong
    """
    positions_out = positions.copy()
    rotations_out = np.transpose(rotations, (0, 2, 1))  # Transpose each 3x3

    return positions_out, rotations_out


def transform_variant_7(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 7: TRANSPOSE + FLIP X
    - Combination of transposing matrices and flipping X
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Flip X
    positions_out[:, 0] = -positions_out[:, 0]

    # Transpose rotations then apply flip
    flip_x = np.array([[-1, 0, 0], [0, 1, 0], [0, 0, 1]])
    for i in range(24):
        rotations_out[i] = flip_x @ rotations[i].T @ flip_x.T

    return positions_out, rotations_out


def transform_variant_8(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 8: ROTATE 180° AROUND Y-AXIS
    - If coordinate systems face opposite directions
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Rotation 180° around Y: flips X and Z
    positions_out[:, 0] = -positions_out[:, 0]
    positions_out[:, 2] = -positions_out[:, 2]

    # Apply rotation to matrices
    rot_180_y = np.array([[-1, 0, 0], [0, 1, 0], [0, 0, -1]])
    for i in range(24):
        rotations_out[i] = rot_180_y @ rotations[i] @ rot_180_y.T

    return positions_out, rotations_out


def transform_variant_9(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 9: NEGATE ROTATION MATRICES (inverse all rotations)
    - If WebXR uses opposite rotation direction
    """
    positions_out = positions.copy()
    rotations_out = np.transpose(rotations, (0, 2, 1))  # R^-1 = R^T for rotation matrices

    return positions_out, rotations_out


def transform_variant_10(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 10: FLIP X + TRANSPOSE ROTATIONS
    - WebXR might be row-major AND have flipped X
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Flip X positions
    positions_out[:, 0] = -positions_out[:, 0]

    # Transpose rotations
    rotations_out = np.transpose(rotations, (0, 2, 1))

    # Then apply flip
    flip_x = np.array([[-1, 0, 0], [0, 1, 0], [0, 0, 1]])
    for i in range(24):
        rotations_out[i] = flip_x @ rotations_out[i] @ flip_x.T

    return positions_out, rotations_out


def transform_variant_11(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 11: SWAP X AND Y
    - (x, y, z) -> (y, x, z)
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Swap X and Y
    positions_out = positions[:, [1, 0, 2]]

    # Transform rotations
    swap_xy = np.array([[0, 1, 0], [1, 0, 0], [0, 0, 1]])
    for i in range(24):
        rotations_out[i] = swap_xy @ rotations[i] @ swap_xy.T

    return positions_out, rotations_out


def transform_variant_12(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 12: SWAP X AND Z
    - (x, y, z) -> (z, y, x)
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Swap X and Z
    positions_out = positions[:, [2, 1, 0]]

    # Transform rotations
    swap_xz = np.array([[0, 0, 1], [0, 1, 0], [1, 0, 0]])
    for i in range(24):
        rotations_out[i] = swap_xz @ rotations[i] @ swap_xz.T

    return positions_out, rotations_out


def transform_variant_13(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 13: CYCLIC PERMUTATION (x,y,z) -> (y,z,x)
    - Rotate coordinate system 120°
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Cyclic permutation
    positions_out = positions[:, [1, 2, 0]]

    # Transform rotations
    permute = np.array([[0, 0, 1], [1, 0, 0], [0, 1, 0]])
    for i in range(24):
        rotations_out[i] = permute @ rotations[i] @ permute.T

    return positions_out, rotations_out


def transform_variant_14(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 14: CYCLIC PERMUTATION (x,y,z) -> (z,x,y)
    - Rotate coordinate system -120°
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Cyclic permutation
    positions_out = positions[:, [2, 0, 1]]

    # Transform rotations
    permute = np.array([[0, 1, 0], [0, 0, 1], [1, 0, 0]])
    for i in range(24):
        rotations_out[i] = permute @ rotations[i] @ permute.T

    return positions_out, rotations_out


def transform_variant_15(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 15: SWAP X AND Y + FLIP Z
    - (x, y, z) -> (y, x, -z)
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Swap X and Y, flip Z
    positions_out = positions[:, [1, 0, 2]]
    positions_out[:, 2] = -positions_out[:, 2]

    # Transform rotations
    transform = np.array([[0, 1, 0], [1, 0, 0], [0, 0, -1]])
    for i in range(24):
        rotations_out[i] = transform @ rotations[i] @ transform.T

    return positions_out, rotations_out


def transform_variant_16(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 16: SWAP X AND Z + FLIP Y
    - (x, y, z) -> (z, -y, x)
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Swap X and Z, flip Y
    positions_out = positions[:, [2, 1, 0]]
    positions_out[:, 1] = -positions_out[:, 1]

    # Transform rotations
    transform = np.array([[0, 0, 1], [0, -1, 0], [1, 0, 0]])
    for i in range(24):
        rotations_out[i] = transform @ rotations[i] @ transform.T

    return positions_out, rotations_out


def transform_variant_17(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 17: 90° ROTATION AROUND Z
    - (x, y, z) -> (-y, x, z)
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # 90° rotation around Z
    temp_x = -positions[:, 1]
    temp_y = positions[:, 0]
    positions_out[:, 0] = temp_x
    positions_out[:, 1] = temp_y

    # Transform rotations
    rot_z_90 = np.array([[0, -1, 0], [1, 0, 0], [0, 0, 1]])
    for i in range(24):
        rotations_out[i] = rot_z_90 @ rotations[i] @ rot_z_90.T

    return positions_out, rotations_out


def transform_variant_18(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 18: -90° ROTATION AROUND Z
    - (x, y, z) -> (y, -x, z)
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # -90° rotation around Z
    temp_x = positions[:, 1]
    temp_y = -positions[:, 0]
    positions_out[:, 0] = temp_x
    positions_out[:, 1] = temp_y

    # Transform rotations
    rot_z_neg90 = np.array([[0, 1, 0], [-1, 0, 0], [0, 0, 1]])
    for i in range(24):
        rotations_out[i] = rot_z_neg90 @ rotations[i] @ rot_z_neg90.T

    return positions_out, rotations_out


def transform_variant_19(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 19: 180° ROTATION AROUND Z
    - (x, y, z) -> (-x, -y, z)
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # 180° rotation around Z
    positions_out[:, 0] = -positions[:, 0]
    positions_out[:, 1] = -positions[:, 1]

    # Transform rotations
    rot_z_180 = np.array([[-1, 0, 0], [0, -1, 0], [0, 0, 1]])
    for i in range(24):
        rotations_out[i] = rot_z_180 @ rotations[i] @ rot_z_180.T

    return positions_out, rotations_out


def transform_variant_20(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 20: 90° ROTATION AROUND Y
    - (x, y, z) -> (z, y, -x)
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # 90° rotation around Y
    temp_x = positions[:, 2]
    temp_z = -positions[:, 0]
    positions_out[:, 0] = temp_x
    positions_out[:, 2] = temp_z

    # Transform rotations
    rot_y_90 = np.array([[0, 0, -1], [0, 1, 0], [1, 0, 0]])
    for i in range(24):
        rotations_out[i] = rot_y_90 @ rotations[i] @ rot_y_90.T

    return positions_out, rotations_out


def transform_variant_21(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 21: USE ROTATION INVERSE (R^T)
    - Apply transpose of rotation matrices
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Use inverse rotations
    for i in range(24):
        rotations_out[i] = rotations[i].T

    return positions_out, rotations_out


def transform_variant_22(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 22: NEGATE ROTATION MATRICES
    - R -> -R (invert rotation direction)
    """
    positions_out = positions.copy()
    rotations_out = -rotations.copy()

    return positions_out, rotations_out


def transform_variant_23(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 23: DETERMINANT CORRECTION
    - Fix matrices with negative determinant
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    for i in range(24):
        det = np.linalg.det(rotations[i])
        if det < 0:
            # Flip one axis to correct determinant
            rotations_out[i] = rotations[i] @ np.array([[-1, 0, 0], [0, 1, 0], [0, 0, 1]])

    return positions_out, rotations_out


def transform_variant_24(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 24: ROW-MAJOR EXTRACTION
    - Extract rotation as row-major instead of column-major
    """
    # Need to re-extract from source data - this variant requires special handling
    # For now, return transposed as approximation
    positions_out = positions.copy()
    rotations_out = np.transpose(rotations, (0, 2, 1))

    return positions_out, rotations_out


def transform_variant_25(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 25: CONJUGATE ROTATIONS
    - Apply both R^T before and after
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    flip_x = np.array([[-1, 0, 0], [0, 1, 0], [0, 0, 1]])
    for i in range(24):
        rotations_out[i] = rotations[i].T @ flip_x @ rotations[i]

    return positions_out, rotations_out


def transform_variant_26(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 26: FLIP Y-AXIS
    - Mirror across XZ plane
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Flip Y positions
    positions_out[:, 1] = -positions_out[:, 1]

    # Transform rotations
    flip_y = np.array([[1, 0, 0], [0, -1, 0], [0, 0, 1]])
    for i in range(24):
        rotations_out[i] = flip_y @ rotations_out[i] @ flip_y.T

    return positions_out, rotations_out


def transform_variant_27(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 27: FLIP X AND Y
    - Mirror both X and Y axes
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Flip X and Y
    positions_out[:, 0] = -positions_out[:, 0]
    positions_out[:, 1] = -positions_out[:, 1]

    # Transform rotations
    flip_xy = np.array([[-1, 0, 0], [0, -1, 0], [0, 0, 1]])
    for i in range(24):
        rotations_out[i] = flip_xy @ rotations_out[i] @ flip_xy.T

    return positions_out, rotations_out


def transform_variant_28(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 28: FLIP Y AND Z
    - Mirror Y and Z axes
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # Flip Y and Z
    positions_out[:, 1] = -positions_out[:, 1]
    positions_out[:, 2] = -positions_out[:, 2]

    # Transform rotations
    flip_yz = np.array([[1, 0, 0], [0, -1, 0], [0, 0, -1]])
    for i in range(24):
        rotations_out[i] = flip_yz @ rotations_out[i] @ flip_yz.T

    return positions_out, rotations_out


def transform_variant_29(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 29: FLIP ALL AXES
    - (x, y, z) -> (-x, -y, -z)
    """
    positions_out = -positions.copy()
    rotations_out = rotations.copy()

    # Transform rotations
    flip_all = np.array([[-1, 0, 0], [0, -1, 0], [0, 0, -1]])
    for i in range(24):
        rotations_out[i] = flip_all @ rotations_out[i] @ flip_all.T

    return positions_out, rotations_out


def transform_variant_30(positions: np.ndarray, rotations: np.ndarray) -> tuple:
    """
    Variant 30: -90° ROTATION AROUND Y
    - (x, y, z) -> (-z, y, x)
    """
    positions_out = positions.copy()
    rotations_out = rotations.copy()

    # -90° rotation around Y
    temp_x = -positions[:, 2]
    temp_z = positions[:, 0]
    positions_out[:, 0] = temp_x
    positions_out[:, 2] = temp_z

    # Transform rotations
    rot_y_neg90 = np.array([[0, 0, 1], [0, 1, 0], [-1, 0, 0]])
    for i in range(24):
        rotations_out[i] = rot_y_neg90 @ rotations[i] @ rot_y_neg90.T

    return positions_out, rotations_out


# Mapping of variant numbers to functions
TRANSFORM_VARIANTS = {
    0: transform_variant_0,
    1: transform_variant_1,
    2: transform_variant_2,
    3: transform_variant_3,
    4: transform_variant_4,
    5: transform_variant_5,
    6: transform_variant_6,
    7: transform_variant_7,
    8: transform_variant_8,
    9: transform_variant_9,
    10: transform_variant_10,
    11: transform_variant_11,
    12: transform_variant_12,
    13: transform_variant_13,
    14: transform_variant_14,
    15: transform_variant_15,
    16: transform_variant_16,
    17: transform_variant_17,
    18: transform_variant_18,
    19: transform_variant_19,
    20: transform_variant_20,
    21: transform_variant_21,
    22: transform_variant_22,
    23: transform_variant_23,
    24: transform_variant_24,
    25: transform_variant_25,
    26: transform_variant_26,
    27: transform_variant_27,
    28: transform_variant_28,
    29: transform_variant_29,
    30: transform_variant_30,
}


def convert_webxr_frame_to_smpl(webxr_frame: Dict, variant: int = 0) -> Dict:
    """Convert a single WebXR frame to SMPL parameters with specified transform variant."""

    # Step 1: Extract global data
    positions = extract_positions_from_webxr(webxr_frame)
    global_rotations = extract_global_rotations_from_webxr(webxr_frame)

    # Step 2: Apply coordinate transformation (VARIANT SELECTION)
    transform_func = TRANSFORM_VARIANTS.get(variant, transform_variant_0)
    positions, global_rotations = transform_func(positions, global_rotations)

    # Step 3: Compute local rotations
    local_rotations = compute_local_rotations(global_rotations, SMPL_PARENTS)

    # Step 4: Convert to axis-angle
    axis_angles = np.zeros((24, 3))
    for i in range(24):
        axis_angles[i] = rotation_matrix_to_axis_angle(local_rotations[i])

    # Step 5: Extract root parameters
    global_orient = axis_angles[0]
    translation = positions[0]

    # Step 6: Body pose
    body_pose = axis_angles[1:].flatten()

    # Step 7: Shape parameters
    betas = np.zeros(10)

    return {
        'body_pose': body_pose.tolist(),
        'global_orient': global_orient.tolist(),
        'translation': translation.tolist(),
        'betas': betas.tolist()
    }


def convert_webxr_to_smpl(webxr_file: str, output_file: str, variant: int = 0):
    """Convert WebXR tracking data to SMPL parameters using specified variant."""

    with open(webxr_file, 'r') as f:
        webxr_data = json.load(f)

    frames = webxr_data['frames']
    fps = webxr_data.get('fps', 30)

    print(f"🔄 Converting {len(frames)} frames using VARIANT {variant}")
    print(f"   Transform: {TRANSFORM_VARIANTS[variant].__doc__.split('Variant')[1].split('-')[1].strip()}")
    print(f"   FPS: {fps}")
    print(f"   Input: {webxr_file}")
    print(f"   Output: {output_file}")

    smpl_frames = []

    for i, frame in enumerate(frames):
        if i % 30 == 0 or i == len(frames) - 1:
            print(f"  📊 Processing frame {i+1}/{len(frames)}...")
        smpl_params = convert_webxr_frame_to_smpl(frame, variant=variant)
        smpl_frames.append(smpl_params)

    output_data = {
        'fps': fps,
        'frames': smpl_frames,
        'variant': variant,  # Record which variant was used
    }

    with open(output_file, 'w') as f:
        json.dump(output_data, f, indent=2)

    print(f"✅ Saved {len(smpl_frames)} frames to: {output_file}")
    print(f"   Duration: {len(smpl_frames) / fps:.2f}s")
    print(f"   Variant used: {variant}")


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Test different coordinate transformations for WebXR to SMPL conversion',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=f"""
Available variants:
{chr(10).join(f'  {k}: {v.__doc__.strip().split(chr(10))[0]}' for k, v in TRANSFORM_VARIANTS.items())}

Example usage:
  # Test variant 1 (flip X-axis)
  python webxr2smpl_test_transforms.py --variant 1 input.json output_v1.json

  # Test all variants
  for i in {{0..10}}; do
    python webxr2smpl_test_transforms.py --variant $i input.json output_v$i.json
  done
        """
    )

    parser.add_argument('input', help='Input WebXR JSON file')
    parser.add_argument('output', help='Output SMPL JSON file')
    parser.add_argument('--variant', type=int, default=1,
                       help='Coordinate transformation variant to use (0-10, default: 1)')

    args = parser.parse_args()

    if args.variant not in TRANSFORM_VARIANTS:
        print(f"❌ Error: Invalid variant {args.variant}. Must be 0-{len(TRANSFORM_VARIANTS)-1}")
        exit(1)

    convert_webxr_to_smpl(args.input, args.output, variant=args.variant)
