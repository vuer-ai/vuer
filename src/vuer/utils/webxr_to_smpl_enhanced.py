#!/usr/bin/env python3
"""
WebXR to SMPL Enhanced Converter

Enhanced optimization-based converter with SMPLify-X inspired improvements:
- Joint angle limits (physical plausibility)
- Multi-stage optimization (coarse to fine)
- Better initialization from rotations
- Adaptive weight scheduling

Author: Claude
Date: 2024-12-18
"""

import json
import numpy as np
from typing import Dict, List, Tuple, Optional
from pathlib import Path

try:
    import torch
    import torch.nn as nn
    import torch.optim as optim
    TORCH_AVAILABLE = True
except ImportError:
    TORCH_AVAILABLE = False
    print("⚠️  PyTorch not available. Install with: pip install torch")

try:
    from smplx import SMPL, SMPLX
    SMPLX_AVAILABLE = True
except ImportError:
    SMPLX_AVAILABLE = False
    print("⚠️  SMPLX not available. Install with: pip install smplx")

try:
    from scipy.spatial.transform import Rotation as R
    SCIPY_AVAILABLE = True
except ImportError:
    SCIPY_AVAILABLE = False
    print("⚠️  SciPy not available. Install with: pip install scipy")


# SMPL skeleton hierarchy
SMPL_PARENTS = [
    -1, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    9, 9, 12, 13, 14, 16, 17, 18, 19, 20, 21
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

# Joint angle limits (in radians) - physical constraints
# Format: {joint_idx: (min_angle, max_angle)}
JOINT_ANGLE_LIMITS = {
    # Elbows: can only bend forward, ~0-150 degrees
    18: (-0.1, 2.6),  # L_Elbow
    19: (-0.1, 2.6),  # R_Elbow

    # Knees: can only bend backward, ~0-150 degrees
    4: (-0.1, 2.6),   # L_Knee
    5: (-0.1, 2.6),   # R_Knee

    # Shoulders: wide range but not unlimited
    16: (-2.0, 2.0),  # L_Shoulder
    17: (-2.0, 2.0),  # R_Shoulder

    # Neck: limited rotation
    12: (-1.0, 1.0),  # Neck

    # Spine joints: moderate flexibility
    3: (-0.5, 0.5),   # Spine1
    6: (-0.5, 0.5),   # Spine2
    9: (-0.5, 0.5),   # Spine3
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
                    matrix[12],  # x
                    matrix[13],  # y
                    matrix[14],  # z
                ])

    return positions


def extract_rotations_from_webxr(webxr_frame: Dict) -> List[Optional[R]]:
    """Extract joint rotations from WebXR frame."""
    if not SCIPY_AVAILABLE:
        raise ImportError("SciPy is required for rotation extraction")

    rotations = [None] * 24

    for joint_name, smpl_idx in WEBXR_TO_SMPL_MAPPING.items():
        if joint_name in webxr_frame and webxr_frame[joint_name] is not None:
            joint_data = webxr_frame[joint_name]
            if 'matrix' in joint_data and len(joint_data['matrix']) >= 16:
                matrix = joint_data['matrix']

                # Extract 3x3 rotation matrix
                rot_matrix = np.array([
                    [matrix[0], matrix[4], matrix[8]],
                    [matrix[1], matrix[5], matrix[9]],
                    [matrix[2], matrix[6], matrix[10]]
                ])

                rotations[smpl_idx] = R.from_matrix(rot_matrix)

    return rotations


def world_to_local_rotations(world_rotations: List[Optional[R]]) -> np.ndarray:
    """Convert world-space rotations to local-space rotations."""
    local_rots = np.zeros((23, 3))

    for i in range(1, 24):
        if world_rotations[i] is None:
            continue

        parent_idx = SMPL_PARENTS[i]

        if parent_idx == -1:
            local_rots[i-1] = world_rotations[i].as_rotvec()
        elif world_rotations[parent_idx] is None:
            local_rots[i-1] = world_rotations[i].as_rotvec()
        else:
            # local = parent^-1 * world
            parent_rot_inv = world_rotations[parent_idx].inv()
            local_rot = parent_rot_inv * world_rotations[i]
            local_rots[i-1] = local_rot.as_rotvec()

    return local_rots


class EnhancedSMPLOptimizer:
    """
    Enhanced SMPL optimizer with SMPLify-X inspired improvements.

    Improvements over basic optimizer:
    - Joint angle limits for physical plausibility
    - Multi-stage optimization (coarse to fine)
    - Better initialization using rotation data
    - Adaptive weight scheduling
    """

    def __init__(self,
                 model_folder: str,
                 gender: str = 'neutral',
                 device: str = 'cpu'):
        if not TORCH_AVAILABLE:
            raise ImportError("PyTorch is required")
        if not SMPLX_AVAILABLE:
            raise ImportError("SMPLX is required")

        self.device = torch.device(device)

        # Load SMPL model
        self.smpl = SMPL(
            model_path=model_folder,
            gender=gender,
            batch_size=1,
            create_transl=False
        ).to(self.device)

        print(f"✅ Loaded Enhanced SMPL optimizer: {gender}")

    def angle_limit_loss(self, body_pose: torch.Tensor) -> torch.Tensor:
        """
        Compute loss for joint angles exceeding physical limits.

        This encourages poses to stay within reasonable joint angle ranges.
        """
        body_pose_reshaped = body_pose.reshape(23, 3)
        limit_loss = torch.tensor(0.0, device=self.device)

        for joint_idx, (min_angle, max_angle) in JOINT_ANGLE_LIMITS.items():
            if joint_idx == 0:
                continue  # Skip root

            # Get angle magnitude for this joint
            joint_pose = body_pose_reshaped[joint_idx - 1]
            angle_magnitude = torch.norm(joint_pose)

            # Penalize if outside limits
            if angle_magnitude < min_angle:
                limit_loss += (min_angle - angle_magnitude) ** 2
            elif angle_magnitude > max_angle:
                limit_loss += (angle_magnitude - max_angle) ** 2

        return limit_loss

    def fit_frame_multistage(self,
                            target_keypoints: np.ndarray,
                            target_rotations: Optional[np.ndarray] = None,
                            init_pose: Optional[np.ndarray] = None,
                            verbose: bool = False) -> Dict:
        """
        Multi-stage optimization inspired by SMPLify-X.

        Stage 1: Coarse alignment (focus on position, low iterations)
        Stage 2: Fine-tuning (balance position and rotation)
        Stage 3: Final refinement (high precision)
        """

        # Convert to torch
        target_keypoints_torch = torch.tensor(
            target_keypoints,
            dtype=torch.float32,
            device=self.device
        )

        target_rotations_torch = None
        if target_rotations is not None:
            target_rotations_torch = torch.tensor(
                target_rotations,
                dtype=torch.float32,
                device=self.device
            )

        # Better initialization using rotation data
        if init_pose is None and target_rotations is not None:
            init_pose = target_rotations.flatten()
        if init_pose is None:
            init_pose = np.zeros(69)

        # Extract root
        root_translation = target_keypoints[0].copy()
        centered_keypoints = target_keypoints - root_translation
        target_keypoints_torch = torch.tensor(
            centered_keypoints,
            dtype=torch.float32,
            device=self.device
        )

        # Initialize parameters
        global_orient = torch.zeros(1, 3, dtype=torch.float32, device=self.device, requires_grad=True)
        body_pose = torch.tensor(
            init_pose.reshape(1, 69),
            dtype=torch.float32,
            device=self.device,
            requires_grad=True
        )
        betas = torch.zeros(1, 10, dtype=torch.float32, device=self.device, requires_grad=True)

        # STAGE 1: Coarse alignment
        if verbose:
            print("  Stage 1: Coarse alignment...")

        optimizer = optim.Adam([global_orient, body_pose, betas], lr=0.02)
        stage1_iters = 30

        for iter in range(stage1_iters):
            optimizer.zero_grad()

            smpl_output = self.smpl(
                betas=betas,
                body_pose=body_pose,
                global_orient=global_orient,
                return_verts=False
            )
            pred_keypoints = smpl_output.joints[0, :24]

            # Stage 1: Focus on position only
            keypoint_loss = torch.mean((pred_keypoints - target_keypoints_torch) ** 2)
            pose_prior = torch.mean(body_pose ** 2)

            total_loss = keypoint_loss + 0.01 * pose_prior

            total_loss.backward()
            optimizer.step()

        # STAGE 2: Fine-tuning with rotation
        if verbose:
            print("  Stage 2: Fine-tuning with rotation...")

        optimizer = optim.Adam([global_orient, body_pose, betas], lr=0.01)
        stage2_iters = 50

        for iter in range(stage2_iters):
            optimizer.zero_grad()

            smpl_output = self.smpl(
                betas=betas,
                body_pose=body_pose,
                global_orient=global_orient,
                return_verts=False
            )
            pred_keypoints = smpl_output.joints[0, :24]

            keypoint_loss = torch.mean((pred_keypoints - target_keypoints_torch) ** 2)

            # Rotation loss (if available)
            rotation_loss = torch.tensor(0.0, device=self.device)
            if target_rotations_torch is not None:
                body_pose_reshaped = body_pose.reshape(23, 3)
                rotation_loss = torch.mean((body_pose_reshaped - target_rotations_torch) ** 2)

            # Angle limit loss (NEW!)
            angle_loss = self.angle_limit_loss(body_pose)

            pose_prior = torch.mean(body_pose ** 2)
            shape_prior = torch.mean(betas ** 2)

            total_loss = (
                keypoint_loss +
                0.8 * rotation_loss +    # High weight for rotation
                0.1 * angle_loss +       # Physical constraints
                0.05 * pose_prior +
                0.01 * shape_prior
            )

            total_loss.backward()
            optimizer.step()

        # STAGE 3: Final refinement
        if verbose:
            print("  Stage 3: Final refinement...")

        optimizer = optim.Adam([global_orient, body_pose, betas], lr=0.005)
        stage3_iters = 30

        best_loss = float('inf')
        best_params = None

        for iter in range(stage3_iters):
            optimizer.zero_grad()

            smpl_output = self.smpl(
                betas=betas,
                body_pose=body_pose,
                global_orient=global_orient,
                return_verts=False
            )
            pred_keypoints = smpl_output.joints[0, :24]

            keypoint_loss = torch.mean((pred_keypoints - target_keypoints_torch) ** 2)

            rotation_loss = torch.tensor(0.0, device=self.device)
            if target_rotations_torch is not None:
                body_pose_reshaped = body_pose.reshape(23, 3)
                rotation_loss = torch.mean((body_pose_reshaped - target_rotations_torch) ** 2)

            angle_loss = self.angle_limit_loss(body_pose)
            pose_prior = torch.mean(body_pose ** 2)
            shape_prior = torch.mean(betas ** 2)

            total_loss = (
                keypoint_loss +
                1.0 * rotation_loss +     # Even higher in final stage
                0.15 * angle_loss +
                0.1 * pose_prior +
                0.01 * shape_prior
            )

            total_loss.backward()
            optimizer.step()

            # Track best
            if total_loss.item() < best_loss:
                best_loss = total_loss.item()
                best_params = {
                    'global_orient': global_orient.detach().cpu().numpy()[0].tolist(),
                    'body_pose': body_pose.detach().cpu().numpy()[0].tolist(),
                    'betas': betas.detach().cpu().numpy()[0].tolist(),
                    'translation': root_translation.tolist()
                }

            if verbose and iter % 10 == 0:
                print(f"    Iter {iter}: Loss = {total_loss.item():.6f} "
                      f"(kpt: {keypoint_loss.item():.6f}, "
                      f"rot: {rotation_loss.item():.6f}, "
                      f"angle: {angle_loss.item():.6f})")

        if verbose:
            print(f"  ✅ Converged: Final loss = {best_loss:.6f}")

        return best_params


def convert_webxr_frame_enhanced(
    webxr_frame: Dict,
    optimizer: EnhancedSMPLOptimizer,
    use_rotations: bool = True,
    verbose: bool = False
) -> Dict:
    """Convert single WebXR frame using enhanced optimizer."""

    # Extract positions
    positions = extract_positions_from_webxr(webxr_frame)

    # Extract and convert rotations
    target_rotations = None
    if use_rotations and SCIPY_AVAILABLE:
        try:
            world_rotations = extract_rotations_from_webxr(webxr_frame)
            target_rotations = world_to_local_rotations(world_rotations)
        except Exception as e:
            if verbose:
                print(f"⚠️  Failed to extract rotations: {e}")

    # Optimize with multi-stage approach
    smpl_params = optimizer.fit_frame_multistage(
        target_keypoints=positions,
        target_rotations=target_rotations,
        verbose=verbose
    )

    return smpl_params


def convert_webxr_to_smpl_enhanced(
    webxr_file: str,
    output_file: str,
    model_folder: str,
    gender: str = 'neutral',
    device: str = 'cpu',
    use_rotations: bool = True,
    verbose: bool = False
):
    """Convert WebXR to SMPL using enhanced optimizer."""

    # Load WebXR data
    with open(webxr_file, 'r') as f:
        webxr_data = json.load(f)

    frames = webxr_data['frames']
    fps = webxr_data.get('fps', 30)

    print(f"🔄 Converting {len(frames)} frames using ENHANCED optimizer")
    print(f"   FPS: {fps}")
    print(f"   Model: SMPL {gender}")
    print(f"   Device: {device}")
    print(f"   Use rotations: {'✅ Yes' if use_rotations else '❌ No'}")
    print(f"   Multi-stage: ✅ Yes (3 stages)")
    print(f"   Angle limits: ✅ Enabled")
    print(f"   Input: {webxr_file}")
    print(f"   Output: {output_file}")
    print()

    # Initialize optimizer
    optimizer = EnhancedSMPLOptimizer(
        model_folder=model_folder,
        gender=gender,
        device=device
    )

    # Convert frames
    smpl_frames = []

    for i, frame in enumerate(frames):
        print(f"📊 Processing frame {i+1}/{len(frames)}...")

        smpl_params = convert_webxr_frame_enhanced(
            webxr_frame=frame,
            optimizer=optimizer,
            use_rotations=use_rotations,
            verbose=verbose
        )

        smpl_frames.append(smpl_params)

    # Save output
    output_data = {
        'fps': fps,
        'frames': smpl_frames,
        'metadata': {
            'source': 'webxr',
            'method': 'enhanced_optimization',
            'converter_version': '4.0',
            'gender': gender,
            'multi_stage': True,
            'angle_limits': True,
            'note': 'Enhanced multi-stage optimization with physical constraints.'
        }
    }

    with open(output_file, 'w') as f:
        json.dump(output_data, f, indent=2)

    print()
    print(f"✅ Conversion complete!")
    print(f"   Total frames: {len(smpl_frames)}")
    print(f"   Duration: {len(smpl_frames) / fps:.2f} seconds")
    print(f"   Saved to: {output_file}")


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(
        description='Convert WebXR to SMPL using ENHANCED optimizer',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Basic usage (multi-stage, angle limits, high rotation weight)
  python webxr_to_smpl_enhanced.py input.json output.json --model_folder ./models/smpl

  # Without rotation constraints (position only)
  python webxr_to_smpl_enhanced.py input.json output.json --model_folder ./models/smpl --no-rotations

  # Verbose output
  python webxr_to_smpl_enhanced.py input.json output.json --model_folder ./models/smpl --verbose
        """
    )

    parser.add_argument('input', help='Input WebXR JSON file')
    parser.add_argument('output', help='Output SMPL JSON file')
    parser.add_argument('--model_folder', required=True, help='Path to SMPL model files')
    parser.add_argument('--gender', choices=['neutral', 'male', 'female'],
                       default='neutral', help='SMPL model gender')
    parser.add_argument('--device', choices=['cpu', 'cuda'], default='cpu',
                       help='PyTorch device')
    parser.add_argument('--no-rotations', action='store_true',
                       help='Disable rotation constraints (only use positions)')
    parser.add_argument('--verbose', action='store_true',
                       help='Print detailed optimization progress')

    args = parser.parse_args()

    convert_webxr_to_smpl_enhanced(
        webxr_file=args.input,
        output_file=args.output,
        model_folder=args.model_folder,
        gender=args.gender,
        device=args.device,
        use_rotations=not args.no_rotations,
        verbose=args.verbose
    )
