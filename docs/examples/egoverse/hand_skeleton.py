"""Hand skeleton (keypoints + bone connections) visualizer.

Why manual Line segments instead of vuer-ts HandsView?
-------------------------------------------------------
Vuer's HandsView component expects WebXR hand data: 25 joints per hand,
each represented as a 4x4 transformation matrix (position + orientation),
totaling 25 × 16 = 400 floats per hand.

EgoVerse/Aria hand tracking data differs in three ways:

1. **Joint count**: Aria provides 21 landmarks vs WebXR's 25.
   WebXR includes 4 extra metacarpal joints (one per non-thumb finger)
   that Aria does not track. Aria instead provides a Palm Center point
   (index 20) that WebXR lacks.

2. **Joint ordering**: Aria uses a fingertip-first layout
   (0-4 = five fingertips, 5 = wrist, then per-finger chains),
   while WebXR uses a wrist-first hierarchical layout starting from
   wrist(0), then thumb-metacarpal(1) through pinky-tip(24).
   See utils.py HAND_CONNECTIONS for the full Aria→WebXR mapping.

   Other EgoVerse embodiments (Mecka, Scale) use MediaPipe ordering
   (0=Wrist, 1-4=Thumb, 5-8=Index, ..., 20=PinkyTip), which is
   different from both Aria and WebXR.

3. **Data format**: Aria provides only 3D positions (xyz) per joint,
   not full 6DoF transforms (4x4 matrices) as WebXR does.
   HandsView requires per-joint orientation matrices to render
   correctly oriented box/frame markers at each joint.

Due to these incompatibilities, we draw the hand skeleton directly
using Line segments with the correct bone topology per embodiment,
plus a PointCloud for joint markers at fingertips and wrist.
"""

import numpy as np
from vuer.schemas import Line, PointCloud

from .utils import make_bone_points, align_keypoints, get_hand_topology
from .visualizer import Visualizer


class HandSkeletonVisualizer(Visualizer):
    """Draws left (blue) and right (red) hand skeletons.

    Automatically selects the correct bone topology based on the
    embodiment metadata in the Zarr store (Aria vs MediaPipe ordering).
    """

    required_keys = ["left.obs_keypoints", "right.obs_keypoints"]

    def __init__(self, zarr_store, total_frames, T_align):
        left_kp = np.array(zarr_store["left.obs_keypoints"][:total_frames]).reshape(total_frames, 21, 3)
        right_kp = np.array(zarr_store["right.obs_keypoints"][:total_frames]).reshape(total_frames, 21, 3)
        self.left_kp = align_keypoints(left_kp, T_align)
        self.right_kp = align_keypoints(right_kp, T_align)

        embodiment = zarr_store.attrs.get("embodiment", "unknown")
        self.connections, self.wrist_idx, self.tip_indices = get_hand_topology(embodiment)
        self.marker_indices = self.tip_indices + [self.wrist_idx]

    def _hand_elements(self, keypoints, color, color_rgb, prefix):
        """Return bones + joint markers for one hand."""
        markers = keypoints[self.marker_indices].astype(np.float16)
        colors = np.tile(np.array(color_rgb, dtype=np.uint8), (len(self.marker_indices), 1))
        return [
            Line(
                points=make_bone_points(keypoints, self.connections),
                color=color,
                lineWidth=3,
                segments=True,
                depthTest=False,
                renderOrder=100,
                key=f"{prefix}_bones",
            ),
            PointCloud(
                vertices=markers,
                colors=colors,
                size=0.01,
                key=f"{prefix}_joints",
            ),
        ]

    def get_elements(self, frame_idx):
        return (
            self._hand_elements(self.left_kp[frame_idx], "#4444ff", [68, 68, 255], "left")
            + self._hand_elements(self.right_kp[frame_idx], "#ff4444", [255, 68, 68], "right")
        )
