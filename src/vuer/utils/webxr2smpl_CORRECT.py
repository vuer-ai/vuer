"""
WebXR to SMPL Converter - CORRECT VERSION

KEY INSIGHT: WebXR matrices are ALREADY in local space (parent-relative)!
We should NOT compute local rotations - just use them directly with coordinate transform.

WebXR joint frame convention:
  -Y axis: perpendicular to skin surface (pointing INTO body)
  -Z axis: along bone AWAY from joint
  X axis: perpendicular to both (right-hand rule)

SMPL needs:
  - body_pose: local rotations in axis-angle format
  - We just need to transform from WebXR's coordinate convention to SMPL's
"""

import json
import numpy as np
from typing import Dict
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
    """Extract joint positions (for root translation only)."""
    positions = np.zeros((24, 3))
    for joint_name, smpl_idx in WEBXR_TO_SMPL_MAPPING.items():
        if joint_name in webxr_frame and webxr_frame[joint_name] is not None:
            joint_data = webxr_frame[joint_name]
            if 'matrix' in joint_data and len(joint_data['matrix']) >= 16:
                matrix = joint_data['matrix']
                positions[smpl_idx] = np.array([matrix[12], matrix[13], matrix[14]])
    return positions


def extract_local_rotations_from_webxr(webxr_frame: Dict) -> np.ndarray:
    """
    Extract rotation matrices from WebXR.
    These are ALREADY LOCAL (parent-relative) rotations!
    """
    rotations = np.zeros((24, 3, 3))
    for joint_name, smpl_idx in WEBXR_TO_SMPL_MAPPING.items():
        if joint_name in webxr_frame:
            joint_data = webxr_frame[joint_name]
            if joint_data is not None and 'matrix' in joint_data and len(joint_data['matrix']) >= 16:
                matrix_flat = np.array(joint_data['matrix'])
                # WebXR uses column-major matrices
                matrix_4x4 = matrix_flat.reshape(4, 4, order='F')
                rotations[smpl_idx] = matrix_4x4[:3, :3]
    return rotations


def rotation_matrix_to_axis_angle(rotation_matrix: np.ndarray) -> np.ndarray:
    """Convert rotation matrix to axis-angle representation."""
    r = R.from_matrix(rotation_matrix)
    return r.as_rotvec()


def convert_webxr_frame_to_smpl_variant(webxr_frame: Dict, variant: int = 0) -> Dict:
    """
    Convert WebXR frame to SMPL parameters.

    Since WebXR matrices are already local, we:
    1. Extract positions and rotations
    2. Apply coordinate transform
    3. Convert rotations to axis-angle
    4. Done!
    """
    # Extract data
    positions = extract_positions_from_webxr(webxr_frame)
    local_rotations = extract_local_rotations_from_webxr(webxr_frame)

    # Apply coordinate transform based on variant
    if variant == 1:
        # Variant 1: Flip X
        positions[:, 0] = -positions[:, 0]
        flip_x = np.array([[-1, 0, 0], [0, 1, 0], [0, 0, 1]])
        for i in range(24):
            local_rotations[i] = flip_x @ local_rotations[i] @ flip_x.T

    elif variant == 2:
        # Variant 2: Flip Z
        positions[:, 2] = -positions[:, 2]
        flip_z = np.array([[1, 0, 0], [0, 1, 0], [0, 0, -1]])
        for i in range(24):
            local_rotations[i] = flip_z @ local_rotations[i] @ flip_z.T

    elif variant == 3:
        # Variant 3: Flip X and Z
        positions[:, 0] = -positions[:, 0]
        positions[:, 2] = -positions[:, 2]
        flip_xz = np.array([[-1, 0, 0], [0, 1, 0], [0, 0, -1]])
        for i in range(24):
            local_rotations[i] = flip_xz @ local_rotations[i] @ flip_xz.T

    elif variant == 4:
        # Variant 4: Swap Y and Z
        positions = positions[:, [0, 2, 1]]
        positions[:, 2] = -positions[:, 2]
        swap_yz = np.array([[1, 0, 0], [0, 0, 1], [0, -1, 0]])
        for i in range(24):
            local_rotations[i] = swap_yz @ local_rotations[i] @ swap_yz.T

    elif variant == 5:
        # Variant 5: Flip X + Swap Y and Z
        positions[:, 0] = -positions[:, 0]
        positions = positions[:, [0, 2, 1]]
        positions[:, 2] = -positions[:, 2]
        transform = np.array([[-1, 0, 0], [0, 0, 1], [0, -1, 0]])
        for i in range(24):
            local_rotations[i] = transform @ local_rotations[i] @ transform.T

    elif variant == 6:
        # Variant 6: Transpose rotations
        for i in range(24):
            local_rotations[i] = local_rotations[i].T

    elif variant == 7:
        # Variant 7: Flip X + Transpose
        positions[:, 0] = -positions[:, 0]
        flip_x = np.array([[-1, 0, 0], [0, 1, 0], [0, 0, 1]])
        for i in range(24):
            local_rotations[i] = flip_x @ local_rotations[i].T @ flip_x.T

    # Convert to axis-angle
    axis_angles = np.zeros((24, 3))
    for i in range(24):
        axis_angles[i] = rotation_matrix_to_axis_angle(local_rotations[i])

    # Extract SMPL parameters
    global_orient = axis_angles[0]  # Root rotation
    translation = positions[0]       # Root position
    body_pose = axis_angles[1:].flatten()  # All other joints
    betas = np.zeros(10)

    return {
        'body_pose': body_pose.tolist(),
        'global_orient': global_orient.tolist(),
        'translation': translation.tolist(),
        'betas': betas.tolist()
    }


def convert_webxr_to_smpl(webxr_file: str, output_file: str, variant: int = 0):
    """Convert WebXR tracking data to SMPL parameters."""
    with open(webxr_file, 'r') as f:
        webxr_data = json.load(f)

    frames = webxr_data['frames']
    fps = webxr_data.get('fps', 30)

    variant_names = {
        0: "NO TRANSFORM",
        1: "FLIP X",
        2: "FLIP Z",
        3: "FLIP X+Z",
        4: "SWAP Y↔Z",
        5: "FLIP X + SWAP Y↔Z",
        6: "TRANSPOSE ROTATIONS",
        7: "FLIP X + TRANSPOSE",
    }

    print(f"🔄 Converting {len(frames)} frames (CORRECT VERSION)")
    print(f"   Variant {variant}: {variant_names.get(variant, 'UNKNOWN')}")
    print(f"   FPS: {fps}")
    print(f"   Input: {webxr_file}")
    print(f"   Output: {output_file}")

    smpl_frames = []
    for i, frame in enumerate(frames):
        if i % 30 == 0 or i == len(frames) - 1:
            print(f"  📊 Processing frame {i+1}/{len(frames)}...")
        smpl_params = convert_webxr_frame_to_smpl_variant(frame, variant)
        smpl_frames.append(smpl_params)

    output_data = {
        'fps': fps,
        'frames': smpl_frames,
        'variant': variant,
    }

    with open(output_file, 'w') as f:
        json.dump(output_data, f, indent=2)

    print(f"✅ Saved {len(smpl_frames)} frames to: {output_file}")


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Convert WebXR to SMPL (CORRECT - no double local rotation computation)',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
This version recognizes that WebXR matrices are ALREADY in local space.
We just apply coordinate transforms and convert to axis-angle.

Variants:
  0: No transform (baseline)
  1: Flip X
  2: Flip Z
  3: Flip X+Z
  4: Swap Y↔Z
  5: Flip X + Swap Y↔Z
  6: Transpose rotations
  7: Flip X + Transpose

Example:
  python webxr2smpl_CORRECT.py input.json output.json --variant 1
        """
    )

    parser.add_argument('input', help='Input WebXR JSON file')
    parser.add_argument('output', help='Output SMPL JSON file')
    parser.add_argument('--variant', type=int, default=0, choices=range(8),
                       help='Coordinate transform variant (0-7)')

    args = parser.parse_args()

    convert_webxr_to_smpl(args.input, args.output, args.variant)
