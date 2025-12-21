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
        if joint_name in ['left-scapula', 'right-scapula', 'left-shoulder', 'right-shoulder']:
            continue
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


def compute_projection_plane(positions_3d: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """
    Compute the best-fitting plane for projecting 3D positions to 2D using PCA.
    This should be called once on the first frame to establish the projection plane.

    Args:
        positions_3d: (N, 3) array of 3D positions

    Returns:
        centroid: (3,) centroid of the points
        basis_x: (3,) first principal component (x-axis of 2D plane)
        basis_y: (3,) second principal component (y-axis of 2D plane)
    """
    # Center the points
    centroid = np.mean(positions_3d, axis=0)
    centered = positions_3d - centroid

    # Compute covariance matrix
    cov_matrix = np.cov(centered.T)

    # Find the principal components (eigenvectors)
    eigenvalues, eigenvectors = np.linalg.eigh(cov_matrix)

    # Sort eigenvectors by eigenvalues in descending order
    idx = eigenvalues.argsort()[::-1]
    eigenvectors = eigenvectors[:, idx]

    # Take the first two principal components (the plane with most variance)
    basis_x = eigenvectors[:, 0]
    basis_y = eigenvectors[:, 1]

    return centroid, basis_x, basis_y


def project_3d_to_2d(positions_3d: np.ndarray,
                     centroid: np.ndarray,
                     basis_x: np.ndarray,
                     basis_y: np.ndarray) -> np.ndarray:
    """
    Project 3D positions to 2D using a pre-computed plane.
    This preserves the shape of the human pose in the projection.

    Args:
        positions_3d: (N, 3) array of 3D positions
        centroid: (3,) centroid for centering the points
        basis_x: (3,) first principal component (x-axis of 2D plane)
        basis_y: (3,) second principal component (y-axis of 2D plane)

    Returns:
        positions_2d: (N, 2) array of 2D coordinates on the plane
    """
    if len(positions_3d) == 0:
        return np.zeros((0, 2))

    # Center the points using the reference centroid
    centered = positions_3d - centroid

    # Project 3D points onto the 2D plane
    x_2d = np.dot(centered, basis_x)
    y_2d = np.dot(centered, basis_y)

    positions_2d = np.stack([x_2d, y_2d], axis=1)

    return positions_2d.astype(np.float32)


class WebXRVisualizer:
    """Visualizes WebXR body tracking data as point clouds."""

    def __init__(self, webxr_file: str, playback_fps: Optional[int] = None, mode: str = "3d"):
        """
        Initialize WebXR visualizer.

        Args:
            webxr_file: Path to WebXR JSON file
            playback_fps: Playback FPS (if None, uses original FPS)
            mode: Visualization mode - "3d" or "2d"
        """
        logger.info(f"Loading WebXR data from: {webxr_file}")
        with open(webxr_file, 'r') as f:
            self.data = json.load(f)

        self.frames = self.data['frames']
        self.original_fps = self.data.get('fps', 30)
        self.playback_fps = playback_fps if playback_fps is not None else self.original_fps
        self.current_frame = 0
        self.mode = mode

        # For 2D mode, compute the projection plane from the first frame
        self.projection_centroid = None
        self.projection_basis_x = None
        self.projection_basis_y = None

        if self.mode == "2d" and len(self.frames) > 0:
            # Extract positions from first frame to compute the projection plane
            first_frame = self.frames[0]
            positions_3d, _ = extract_positions_from_frame(first_frame)
            if len(positions_3d) > 0:
                self.projection_centroid, self.projection_basis_x, self.projection_basis_y = \
                    compute_projection_plane(positions_3d)
                logger.info("Computed 2D projection plane from first frame")

        logger.info(f"Loaded {len(self.frames)} frames")
        logger.info(f"Original FPS: {self.original_fps}")
        logger.info(f"Playback FPS: {self.playback_fps}")
        logger.info(f"Visualization mode: {self.mode}")
        logger.info(f"Duration: {self.data.get('duration', 'unknown')}s")

    async def animation_loop(self, session: VuerSession):
        """Main animation loop - displays frames as point clouds or 2D projections."""
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
            positions_3d, colors = extract_positions_from_frame(frame)

            if len(positions_3d) > 0:
                if self.mode == "3d":
                    # 3D visualization using point cloud
                    session.upsert @ PointCloud(
                        key="webxr_joints",
                        vertices=positions_3d,
                        colors=colors,
                        size=0.1,  # Point size in meters
                        position=[0, 0, 0],
                        scale=5,
                    )
                elif self.mode == "2d":
                    # 2D visualization - project to 2D using the pre-computed plane
                    if self.projection_centroid is not None:
                        positions_2d = project_3d_to_2d(
                            positions_3d,
                            self.projection_centroid,
                            self.projection_basis_x,
                            self.projection_basis_y
                        )

                        # Convert 2D positions to 3D with z=0 for PointCloud
                        positions_2d_with_z = np.zeros((len(positions_2d), 3), dtype=np.float32)
                        positions_2d_with_z[:, 0] = positions_2d[:, 0]  # x
                        positions_2d_with_z[:, 1] = positions_2d[:, 1]  # y
                        positions_2d_with_z[:, 2] = 0.0  # z = 0

                        # Render as point cloud
                        session.upsert @ PointCloud(
                            key="webxr_joints_2d",
                            vertices=positions_2d_with_z,
                            colors=colors,
                            size=0.1,  # Point size
                            position=[0, 0, 0],
                            scale=2,
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
    mode: str = "3d"
    """Visualization mode: '3d' for 3D point cloud or '2d' for 2D projection"""

if __name__ == '__main__':
    logger.info("WebXR Data Visualizer")
    visualizer = WebXRVisualizer(
        webxr_file=Args.input,
        playback_fps=Args.fps,
        mode=Args.mode
    )

    app = Vuer()

    @app.spawn(start=True)
    async def main(session: VuerSession):
        # Start animation loop
        await visualizer.animation_loop(session)
