#!/usr/bin/env python3
import json
import asyncio
import logging
import numpy as np
from typing import Dict, List, Optional
from params_proto import proto
from vuer import Vuer, VuerSession
from vuer.schemas import PointCloud

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# WebXR joint names in a logical order for visualization
JOINT_NAMES = [
    'hips',
    'spine-lower',
    'spine-middle',
    'spine-upper',
    'chest',
    'neck',
    'head',
    'left-shoulder',
    'left-upper-arm',
    'left-lower-arm',
    'left-hand-wrist',
    'left-hand-thumb-metacarpal',
    'left-hand-thumb-phalanx-proximal',
    'left-hand-thumb-phalanx-distal',
    'left-hand-thumb-tip',
    'left-hand-index-metacarpal',
    'left-hand-index-phalanx-proximal',
    'left-hand-index-phalanx-intermediate',
    'left-hand-index-phalanx-distal',
    'left-hand-index-tip',
    'left-hand-middle-metacarpal',
    'left-hand-middle-phalanx-proximal',
    'left-hand-middle-phalanx-intermediate',
    'left-hand-middle-phalanx-distal',
    'left-hand-middle-tip',
    'right-shoulder',
    'right-upper-arm',
    'right-lower-arm',
    'right-hand-wrist',
    'left-upper-leg',
    'left-lower-leg',
    'left-foot-ankle',
    'left-foot-ball',
    'left-foot-toes',
    'right-upper-leg',
    'right-lower-leg',
    'right-foot-ankle',
    'right-foot-ball',
    'right-foot-toes',
]

def get_joint_color(joint_name: str) -> List[float]:
    # Color scheme for different body parts
    JOINT_COLORS = {
        'head': [1.0, 0.2, 0.2],  # Red
        'torso': [0.2, 1.0, 0.2],  # Green
        'left_arm': [0.2, 0.2, 1.0],  # Blue
        'right_arm': [1.0, 1.0, 0.2],  # Yellow
        'left_leg': [1.0, 0.2, 1.0],  # Magenta
        'right_leg': [0.2, 1.0, 1.0],  # Cyan
    }


    """Get color for a joint based on body part."""
    if 'head' in joint_name or 'neck' in joint_name:
        return JOINT_COLORS['head']
    elif 'left-arm' in joint_name or 'left-hand' in joint_name or 'left-shoulder' in joint_name or 'left-scapula' in joint_name:
        return JOINT_COLORS['left_arm']
    elif 'right-arm' in joint_name or 'right-hand' in joint_name or 'right-shoulder' in joint_name or 'right-scapula' in joint_name:
        return JOINT_COLORS['right_arm']
    elif 'left-upper-leg' in joint_name or 'left-lower-leg' in joint_name or 'left-foot' in joint_name:
        return JOINT_COLORS['left_leg']
    elif 'right-upper-leg' in joint_name or 'right-lower-leg' in joint_name or 'right-foot' in joint_name:
        return JOINT_COLORS['right_leg']
    else:
        return JOINT_COLORS['torso']


def extract_positions_from_frame(frame: Dict) -> tuple[np.ndarray, np.ndarray]:
    """
    Extract joint positions and colors from a WebXR frame.

    Args:
        frame: Single frame from WebXR data with joint matrices

    Returns:
        positions: (N, 3) array of joint positions
        colors: (N, 3) array of RGB colors for each joint
    """
    positions = []
    colors = []

    # Iterate through ALL joints in the frame (not just a predefined list)
    for joint_name, joint_data in frame.items():
        if joint_data is not None and isinstance(joint_data, dict):
            if 'matrix' in joint_data and len(joint_data['matrix']) >= 16:
                # WebXR matrix is column-major, translation at indices [12, 13, 14]
                matrix = joint_data['matrix']
                position = np.array([
                    matrix[12],  # x
                    matrix[13],  # y
                    matrix[14],  # z
                ])
                positions.append(position)
                colors.append(get_joint_color(joint_name))

    if not positions:
        return np.zeros((0, 3)), np.zeros((0, 3))

    return np.array(positions, dtype=np.float32), np.array(colors, dtype=np.float32)


class WebXRVisualizer:
    """Visualizes WebXR body tracking data as point clouds."""

    def __init__(self, webxr_file: str, playback_fps: Optional[int] = None):
        """
        Initialize WebXR visualizer.

        Args:
            webxr_file: Path to WebXR JSON file
            playback_fps: Playback FPS (if None, uses original FPS)
        """
        logger.info(f"Loading WebXR data from: {webxr_file}")
        with open(webxr_file, 'r') as f:
            self.data = json.load(f)

        self.frames = self.data['frames']
        self.original_fps = self.data.get('fps', 30)
        self.playback_fps = playback_fps if playback_fps is not None else self.original_fps
        self.current_frame = 0

        logger.info(f"Loaded {self.frames} frames")
        logger.info(f"Original FPS: {self.original_fps}")
        logger.info(f"Playback FPS: {self.playback_fps}")
        logger.info(f"Duration: {self.data.get('duration', 'unknown')}s")

    async def animation_loop(self, session: VuerSession):
        """Main animation loop - displays frames as point clouds."""
        if not self.frames:
            logger.warning("No frames to display")
            return

        frame_duration = 1.0 / self.playback_fps
        total_frames = len(self.frames)

        logger.info(f"Starting animation loop at {self.playback_fps} FPS")
        logger.info(f"Total frames: {total_frames}")
        logger.info(f"Duration: {total_frames / self.playback_fps:.2f}s")

        while True:
            frame = self.frames[self.current_frame]

            # Extract positions and colors
            positions, colors = extract_positions_from_frame(frame)

            if len(positions) > 0:
                # Log progress every 30 frames
                if self.current_frame % 30 == 0:
                    logger.info(f"Frame {self.current_frame}/{total_frames} - Displaying {len(positions)} joints")
                # Update point cloud
                session.upsert @ PointCloud(
                    key="webxr_joints",
                    vertices=positions,
                    colors=colors,
                    size=0.1,  # Point size in meters
                    position=[0, 0, 0],
                    scale=5,
                )

            else:
                logger.warning(f"Frame {self.current_frame} has no valid joints")

            self.current_frame = (self.current_frame + 1) % total_frames

            await asyncio.sleep(frame_duration)


@proto.prefix
class Args:
    """WebXR Data Visualizer Arguments"""
    input: str = "/Users/yanbinghan/fortyfive/vuer/bodies_data/session_20251216_162658.json"
    """Input WebXR JSON file path"""
    fps: int = None
    """Playback FPS (default: use original FPS from file)"""

if __name__ == '__main__':
    logger.info("WebXR Data Visualizer")
    visualizer = WebXRVisualizer(
        webxr_file=Args.input,
        playback_fps=Args.fps
    )

    app = Vuer()

    @app.spawn(start=True)
    async def main(session: VuerSession):
        # Start animation loop
        await visualizer.animation_loop(session)
