"""Gripper visualizer for robot embodiments (Eva, Aloha)."""

import numpy as np
from vuer.schemas import Gripper

from .utils import pose_to_matrix16, align_poses
from .visualizer import Visualizer


class GripperVisualizer(Visualizer):
    """Shows parallel grippers at left/right EE poses with opening width."""

    required_keys = ["left.gripper", "right.gripper", "left.obs_ee_pose", "right.obs_ee_pose"]

    def __init__(self, zarr_store, total_frames, T_align):
        self.left_grip = np.array(zarr_store["left.gripper"][:total_frames])
        self.right_grip = np.array(zarr_store["right.gripper"][:total_frames])
        left_ee = np.array(zarr_store["left.obs_ee_pose"][:total_frames])
        right_ee = np.array(zarr_store["right.obs_ee_pose"][:total_frames])
        self.left_ee = align_poses(left_ee, T_align)
        self.right_ee = align_poses(right_ee, T_align)

    def get_elements(self, frame_idx):
        return [
            Gripper(
                matrix=pose_to_matrix16(self.left_ee[frame_idx]),
                pinchWidth=float(self.left_grip[frame_idx].item()) * 0.08,
                key="left_gripper",
            ),
            Gripper(
                matrix=pose_to_matrix16(self.right_ee[frame_idx]),
                pinchWidth=float(self.right_grip[frame_idx].item()) * 0.08,
                key="right_gripper",
            ),
        ]
