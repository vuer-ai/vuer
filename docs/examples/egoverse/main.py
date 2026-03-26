"""EgoVerse Zarr Episode Visualization with Vuer.

Visualizes all available data modalities from an EgoVerse Zarr episode
in an interactive 3D scene. Automatically detects which visualizers to
activate based on the keys present in the Zarr store.

Usage:
    python -m docs.examples.egoverse.main [--zarr-path PATH]
"""

from __future__ import annotations

import argparse
from asyncio import sleep
from pathlib import Path

import numpy as np
import zarr

from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene

from .ee_trajectory import EETrajectoryVisualizer
from .eye_gaze import EyeGazeVisualizer
from .gripper import GripperVisualizer
from .hand_skeleton import HandSkeletonVisualizer
from .head_pose import HeadPoseVisualizer
from .rgb import RGBVisualizer
from .utils import compute_gravity_alignment
from .visualizer import create_active_visualizers

# All registered visualizer classes — add new ones here
ALL_VISUALIZERS = [
    RGBVisualizer,
    HandSkeletonVisualizer,
    EETrajectoryVisualizer,
    # HeadPoseVisualizer — removed: PerspectiveCamera frustum already shows head pose
    EyeGazeVisualizer,
    GripperVisualizer,
]

# Default path to the downloaded Zarr episode
DEFAULT_ZARR_PATH = str(
    Path(__file__).resolve().parent.parent.parent.parent.parent
    / "EgoVerse/data/2025-10-13-03-55-42-588000"
)


def main():
    parser = argparse.ArgumentParser(description="EgoVerse Zarr Visualization")
    parser.add_argument(
        "--zarr-path",
        default=DEFAULT_ZARR_PATH,
        help="Path to the Zarr episode directory",
    )
    args = parser.parse_args()

    z = zarr.open(args.zarr_path, mode="r")
    total_frames = z.attrs.get("total_frames", z["images.front_1"].shape[0])
    fps = z.attrs.get("fps", 30)
    embodiment = z.attrs.get("embodiment", "unknown")

    print(f"Episode: {z.attrs.get('task_name', '?')} | {embodiment} | {total_frames} frames @ {fps}fps")
    print(f"Zarr keys: {sorted(z.keys())}")

    # Compute gravity alignment from head poses
    head_poses = np.array(z["obs_head_pose"][:total_frames])
    T_align = compute_gravity_alignment(head_poses)
    print("Gravity alignment computed.")

    print("Activating visualizers:")
    visualizers = create_active_visualizers(ALL_VISUALIZERS, z, total_frames, T_align)

    if not visualizers:
        print("No visualizers could be activated. Check the Zarr keys.")
        return

    app = Vuer(free_port=True)

    @app.spawn(start=True)
    async def run(session: VuerSession):
        session.set @ DefaultScene(up=[0, 1, 0], grid=True)

        for frame_idx in range(total_frames):
            # Collect all elements from all visualizers, then send in one
            # batched upsert — 1 WebSocket message per frame instead of N.
            elements = []
            for viz in visualizers:
                elements.extend(viz.get_elements(frame_idx))
            if elements:
                session.upsert @ elements
            await sleep(1 / fps)


if __name__ == "__main__":
    main()
