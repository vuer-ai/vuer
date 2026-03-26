"""End-effector trajectory visualizer."""

import numpy as np
from vuer.schemas import Line

from .utils import align_positions
from .visualizer import Visualizer


class EETrajectoryVisualizer(Visualizer):
    """Draws cumulative left (blue) and right (red) end-effector paths."""

    required_keys = ["left.obs_ee_pose", "right.obs_ee_pose"]

    def __init__(self, zarr_store, total_frames, T_align):
        left_ee = np.array(zarr_store["left.obs_ee_pose"][:total_frames, :3])
        right_ee = np.array(zarr_store["right.obs_ee_pose"][:total_frames, :3])
        self.left_ee = align_positions(left_ee, T_align)
        self.right_ee = align_positions(right_ee, T_align)

    def get_elements(self, frame_idx):
        if frame_idx < 2:
            return []
        return [
            Line(
                points=self.left_ee[: frame_idx + 1].tolist(),
                color="#9999cc",
                lineWidth=1,
                depthTest=False,
                renderOrder=99,
                key="left_traj",
            ),
            Line(
                points=self.right_ee[: frame_idx + 1].tolist(),
                color="#cc9999",
                lineWidth=1,
                depthTest=False,
                renderOrder=99,
                key="right_traj",
            ),
        ]
