"""Head pose (coordinate axes) visualizer."""

import numpy as np
from vuer.schemas import CoordsMarker

from .utils import pose_to_matrix16, align_poses
from .visualizer import Visualizer


class HeadPoseVisualizer(Visualizer):
    """Shows XYZ coordinate axes at the head position and orientation."""

    required_keys = ["obs_head_pose"]

    def __init__(self, zarr_store, total_frames, T_align):
        head_pose = np.array(zarr_store["obs_head_pose"][:total_frames])
        self.head_pose = align_poses(head_pose, T_align)

    def update(self, session, frame_idx):
        session.upsert @ CoordsMarker(
            matrix=pose_to_matrix16(self.head_pose[frame_idx]),
            scale=0.05,
            key="head",
        )
