"""RGB image visualizer using PerspectiveCamera with Image child."""

import math

import numpy as np
from vuer.schemas import PerspectiveCamera, Image

from .utils import decode_jpeg, pose_to_camera_position_euler, align_poses
from .visualizer import Visualizer

# Aria camera intrinsics (from EgoVerse egomimicUtils.py, undistorted 640x480)
_FY = 133.25430222 * 2  # 266.5086 pixels
_IMG_W = 640
_IMG_H = 480
_ASPECT = _IMG_W / _IMG_H
_VFOV_RAD = 2 * math.atan(_IMG_H / 2 / _FY)
_VFOV_DEG = math.degrees(_VFOV_RAD)  # ~84°

# Image plane placement
_PLANE_DIST = 0.3  # distance from camera along -Z
_PLANE_HEIGHT = 2 * _PLANE_DIST * math.tan(_VFOV_RAD / 2)  # fills the frustum exactly


class RGBVisualizer(Visualizer):
    """Displays a virtual camera at the head pose with RGB image on its image plane."""

    required_keys = ["images.front_1", "obs_head_pose"]

    def __init__(self, zarr_store, total_frames, T_align):
        self.images = []
        for i in range(total_frames):
            self.images.append(decode_jpeg(zarr_store["images.front_1"][i]))
        head_pose = np.array(zarr_store["obs_head_pose"][:total_frames])
        self.head_pose = align_poses(head_pose, T_align)

    def get_elements(self, frame_idx):
        position, euler = pose_to_camera_position_euler(self.head_pose[frame_idx])

        return [PerspectiveCamera(
            Image(
                src=self.images[frame_idx],
                position=[0, 0, -_PLANE_DIST],
                aspect=_ASPECT,
                height=_PLANE_HEIGHT,
                key="rgb_img",
            ),
            position=position,
            rotation=euler,
            fov=_VFOV_DEG,
            aspect=_ASPECT,
            near=0.01,
            far=1.0,
            showFrustum=True,
            previewInScene=False,
            previewInOverlay=True,
            key="ego_camera",
        )]
