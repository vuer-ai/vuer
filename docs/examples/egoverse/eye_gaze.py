"""Eye gaze visualizer.

Note: Aria's gaze depth is "vergence depth" — the binocular convergence
estimate, not the actual distance to the fixation target. It is often
very short (~0.1-0.5m) and can be unreliable. The gaze direction
(yaw/pitch) is generally more accurate than the depth.
"""

import numpy as np
from vuer.schemas import Sphere, Line

from .utils import gaze_to_3d, align_poses
from .visualizer import Visualizer


class EyeGazeVisualizer(Visualizer):
    """Shows a green sphere at the gaze endpoint and a line from head to gaze."""

    required_keys = ["obs_eye_gaze", "obs_head_pose"]

    def __init__(self, zarr_store, total_frames, T_align):
        self.eye_gaze = np.array(zarr_store["obs_eye_gaze"][:total_frames])
        head_pose = np.array(zarr_store["obs_head_pose"][:total_frames])
        self.head_pose = align_poses(head_pose, T_align)

    def get_elements(self, frame_idx):
        gaze = self.eye_gaze[frame_idx]
        if gaze[0] == -100:  # no valid gaze estimate
            return []
        gaze_pt = gaze_to_3d(gaze[0], gaze[1], gaze[2], self.head_pose[frame_idx])
        head_pos = self.head_pose[frame_idx, :3].tolist()

        return [
            Sphere(
                args=[0.008, 8, 8],
                position=gaze_pt.tolist(),
                color="#00ff00",
                material={"depthTest": False},
                renderOrder=100,
                key="gaze",
            ),
            Line(
                points=[head_pos, gaze_pt.tolist()],
                color="#00ff00",
                lineWidth=1,
                depthTest=False,
                renderOrder=99,
                key="gaze_line",
            ),
        ]
