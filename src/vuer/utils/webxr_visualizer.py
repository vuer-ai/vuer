#!/usr/bin/env python3
import json
import asyncio
import logging
import argparse
import numpy as np
from typing import Dict, List, Optional, Tuple
from vuer import Vuer, VuerSession
from vuer.schemas import PointCloud, TriMesh, Scene, VideoPlane, ImagePlane, Frustum
from vuer.schemas.drei_components import Line

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def get_joint_matrix(frame: Dict, joint_name: str) -> Optional[List]:
    """
    Get joint transformation matrix from frame (flat format only).

    Args:
        frame: Frame data with flat joint structure
        joint_name: Name of the joint (WebXR format, e.g., 'hips', 'left-hand-thumb-tip')

    Returns:
        4x4 transformation matrix as list, or None if not found
    """
    joint_data = frame.get(joint_name)
    return joint_data['matrix'] if joint_data and 'matrix' in joint_data else None

# Body skeleton connections (same as motion-with-mesh-debug page)
BODY_CONNECTIONS = [
    ['hips', 'spine-lower'],
    ['spine-lower', 'spine-middle'],
    ['spine-middle', 'spine-upper'],
    ['spine-upper', 'chest'],
    ['chest', 'neck'],
    ['neck', 'head'],

    # Left leg
    ['hips', 'left-upper-leg'],
    ['left-upper-leg', 'left-lower-leg'],
    ['left-lower-leg', 'left-foot-ankle'],
    ['left-foot-ankle', 'left-foot-subtalar'],
    ['left-foot-subtalar', 'left-foot-transverse'],
    ['left-foot-transverse', 'left-foot-ball'],

    # Right leg
    ['hips', 'right-upper-leg'],
    ['right-upper-leg', 'right-lower-leg'],
    ['right-lower-leg', 'right-foot-ankle'],
    ['right-foot-ankle', 'right-foot-subtalar'],
    ['right-foot-subtalar', 'right-foot-transverse'],
    ['right-foot-transverse', 'right-foot-ball'],

    # Left arm
    ['chest', 'left-shoulder'],
    ['left-shoulder', 'left-arm-upper'],
    ['left-arm-upper', 'left-arm-lower'],
    ['left-arm-lower', 'left-hand-wrist-twist'],

    # Right arm
    ['chest', 'right-shoulder'],
    ['right-shoulder', 'right-arm-upper'],
    ['right-arm-upper', 'right-arm-lower'],
    ['right-arm-lower', 'right-hand-wrist-twist'],
]

# Hand skeleton connections (for XRBody hand joints)
# Note: XRBody uses simplified names without '-finger' suffix, and 'little' instead of 'pinky'
HAND_CONNECTIONS = [
    # Wrist structure (XRBody specific)
    ['wrist-twist', 'palm'],

    # Thumb - connects from palm (XRBody uses palm as base, not wrist)
    ['palm', 'thumb-metacarpal'],
    ['thumb-metacarpal', 'thumb-phalanx-proximal'],
    ['thumb-phalanx-proximal', 'thumb-phalanx-distal'],
    ['thumb-phalanx-distal', 'thumb-tip'],

    # Index finger (XRBody uses 'index' not 'index-finger')
    ['palm', 'index-metacarpal'],
    ['index-metacarpal', 'index-phalanx-proximal'],
    ['index-phalanx-proximal', 'index-phalanx-intermediate'],
    ['index-phalanx-intermediate', 'index-phalanx-distal'],
    ['index-phalanx-distal', 'index-tip'],

    # Middle finger (XRBody uses 'middle' not 'middle-finger')
    ['palm', 'middle-metacarpal'],
    ['middle-metacarpal', 'middle-phalanx-proximal'],
    ['middle-phalanx-proximal', 'middle-phalanx-intermediate'],
    ['middle-phalanx-intermediate', 'middle-phalanx-distal'],
    ['middle-phalanx-distal', 'middle-tip'],

    # Ring finger (XRBody uses 'ring' not 'ring-finger')
    ['palm', 'ring-metacarpal'],
    ['ring-metacarpal', 'ring-phalanx-proximal'],
    ['ring-phalanx-proximal', 'ring-phalanx-intermediate'],
    ['ring-phalanx-intermediate', 'ring-phalanx-distal'],
    ['ring-phalanx-distal', 'ring-tip'],

    # Little finger (XRBody uses 'little' not 'pinky-finger')
    ['palm', 'little-metacarpal'],
    ['little-metacarpal', 'little-phalanx-proximal'],
    ['little-phalanx-proximal', 'little-phalanx-intermediate'],
    ['little-phalanx-intermediate', 'little-phalanx-distal'],
    ['little-phalanx-distal', 'little-tip'],
]


def extract_position_from_matrix(matrix: List[float]) -> np.ndarray:
    """Extract position from WebXR column-major matrix."""
    if not matrix or len(matrix) < 16:
        return None
    return np.array([matrix[12], matrix[13], matrix[14]], dtype=np.float32)


def create_body_skeleton_elements(frame: Dict):
    """
    Create body skeleton as unified point cloud and line segments (flat format only).

    Args:
        frame: Frame data with flat joint structure
    """
    elements = []

    # Extract positions from body joints
    # Include wrist-twist joints (they're part of the arm, even though name contains "hand")
    positions = {}

    # Get all body joint names from BODY_CONNECTIONS
    body_joint_names = set()
    for joint1, joint2 in BODY_CONNECTIONS:
        # Exclude hand joints, but keep wrist-twist (it's the arm endpoint)
        if 'hand' not in joint1 or 'wrist-twist' in joint1:
            body_joint_names.add(joint1)
        if 'hand' not in joint2 or 'wrist-twist' in joint2:
            body_joint_names.add(joint2)

    for joint_name in body_joint_names:
        matrix = get_joint_matrix(frame, joint_name)
        if matrix:
            pos = extract_position_from_matrix(matrix)
            if pos is not None:
                positions[joint_name] = pos

    if not positions:
        return elements

    # Create joints as a single point cloud
    joint_positions = []
    joint_colors = []
    for joint_name, pos in positions.items():
        joint_positions.append(pos)
        # Hips in red, others in blue
        if joint_name == "hips":
            joint_colors.append([1.0, 0.27, 0.27])  # #ff4444
        else:
            joint_colors.append([0.27, 0.53, 1.0])  # #4488ff

    elements.append(PointCloud(
        key="body_joints",
        vertices=np.array(joint_positions, dtype=np.float32),
        colors=np.array(joint_colors, dtype=np.float32),
        size=0.03,  # Increased from 0.015 (2x larger)
    ))

    # Create bone connections as line segments
    bone_points = []
    for joint1, joint2 in BODY_CONNECTIONS:
        if joint1 in positions and joint2 in positions:
            bone_points.append([
                float(positions[joint1][0]),
                float(positions[joint1][1]),
                float(positions[joint1][2])
            ])
            bone_points.append([
                float(positions[joint2][0]),
                float(positions[joint2][1]),
                float(positions[joint2][2])
            ])

    if bone_points:
        elements.append(Line(
            key="body_bones",
            points=bone_points,
            segments=True,  # Render as line segments
            color="#aaaaaa",
            lineWidth=3,
        ))

    return elements


def create_hand_skeleton_elements(frame: Dict, hand_side: str):
    """
    Create hand skeleton as unified point cloud and line segments (flat format only).

    Args:
        frame: Frame data with flat joint structure
        hand_side: 'left' or 'right'
    """
    elements = []

    # Extract positions from hand joints
    # XRBody hand joint names (simplified, without '-finger' suffix)
    positions = {}
    hand_joint_names = [
        'wrist-twist', 'palm', 'wrist',
        'thumb-metacarpal', 'thumb-phalanx-proximal', 'thumb-phalanx-distal', 'thumb-tip',
        'index-metacarpal', 'index-phalanx-proximal', 'index-phalanx-intermediate',
        'index-phalanx-distal', 'index-tip',
        'middle-metacarpal', 'middle-phalanx-proximal', 'middle-phalanx-intermediate',
        'middle-phalanx-distal', 'middle-tip',
        'ring-metacarpal', 'ring-phalanx-proximal', 'ring-phalanx-intermediate',
        'ring-phalanx-distal', 'ring-tip',
        'little-metacarpal', 'little-phalanx-proximal', 'little-phalanx-intermediate',
        'little-phalanx-distal', 'little-tip'
    ]

    for joint_name in hand_joint_names:
        full_joint_name = f"{hand_side}-hand-{joint_name}"
        matrix = get_joint_matrix(frame, full_joint_name)
        if matrix and len(matrix) >= 16:
            pos = extract_position_from_matrix(matrix)
            if pos is not None:
                positions[joint_name] = pos

    if not positions:
        return elements

    # Color based on hand side
    if hand_side == "left":
        joint_color_rgb = [1.0, 0.42, 0.42]  # #ff6b6b
        bone_color = "#ff9999"
    else:
        joint_color_rgb = [0.32, 0.81, 0.40]  # #51cf66
        bone_color = "#88ff88"

    # Create joints as a single point cloud
    joint_positions = []
    joint_colors = []
    for pos in positions.values():
        joint_positions.append(pos)
        joint_colors.append(joint_color_rgb)

    elements.append(PointCloud(
        key=f"{hand_side}_hand_joints",
        vertices=np.array(joint_positions, dtype=np.float32),
        colors=np.array(joint_colors, dtype=np.float32),
        size=0.016,  # Increased from 0.008 (2x larger)
    ))

    # Create bone connections as line segments
    bone_points = []
    for joint1, joint2 in HAND_CONNECTIONS:
        if joint1 in positions and joint2 in positions:
            bone_points.append([
                float(positions[joint1][0]),
                float(positions[joint1][1]),
                float(positions[joint1][2])
            ])
            bone_points.append([
                float(positions[joint2][0]),
                float(positions[joint2][1]),
                float(positions[joint2][2])
            ])

    if bone_points:
        elements.append(Line(
            key=f"{hand_side}_hand_bones",
            points=bone_points,
            segments=True,  # Render as line segments
            color=bone_color,
            lineWidth=2,
        ))

    # Note: Connection from arm to hand is handled by BODY_CONNECTIONS
    # (arm-lower -> wrist-twist) and HAND_CONNECTIONS (wrist-twist -> palm)
    # No additional connection needed here

    return elements


def create_head_frustum(frame: Dict):
    """
    Create camera frustum at head position to represent video capture viewpoint (flat format only).

    Args:
        frame: Frame data with flat joint structure
    """
    from scipy.spatial.transform import Rotation as R

    matrix = get_joint_matrix(frame, 'head')
    if not matrix or len(matrix) < 16:
        return None

    position = (matrix[12], matrix[13], matrix[14])

    # Convert column-major matrix to 4x4 numpy array
    mat4x4 = np.array(matrix, dtype=np.float32).reshape(4, 4, order='F')

    # WebXR head joint uses non-standard axis mapping:
    # Col 0: Down, Col 1: Forward, Col 2: Right
    # Remap to Three.js convention (X: Right, Y: Up, Z: Back)
    threejs_matrix = np.zeros((3, 3), dtype=np.float32)
    threejs_matrix[:, 0] = mat4x4[:3, 2]   # Right = WebXR Z
    threejs_matrix[:, 1] = -mat4x4[:3, 0]  # Up = -WebXR X
    threejs_matrix[:, 2] = -mat4x4[:3, 1]  # Back = -WebXR Y

    # Convert to Euler angles
    r = R.from_matrix(threejs_matrix)
    rotation = tuple(r.as_euler('xyz', degrees=False))

    frustum = Frustum(
        key="head_camera_frustum",
        position=position,
        rotation=rotation,
        aspect=16/9,
        fov=60,
        near=0.05,
        far=0.1,
        scale=0.01,
        showFrustum=True,
        showFocalPlane=False,
        colorFrustum="#ffaa00",
    )

    return frustum


def create_environment_mesh_elements(mesh_snapshot: Dict):
    """Create environment mesh elements in wireframe mode."""
    elements = []

    if not mesh_snapshot or 'meshes' not in mesh_snapshot:
        return elements

    meshes = mesh_snapshot['meshes']
    logger.info(f"Creating {len(meshes)} environment meshes (fill + wireframe)")

    for i, mesh in enumerate(meshes):
        vertices = np.array(mesh['vertices'], dtype=np.float32)
        indices = np.array(mesh['indices'], dtype=np.uint32)
        matrix = mesh.get('matrix')
        semantic_label = mesh.get('semanticLabel', '')

        # Reshape to (N, 3) and (F, 3)
        if len(vertices.shape) == 1:
            vertices = vertices.reshape(-1, 3)
        if len(indices.shape) == 1:
            indices = indices.reshape(-1, 3)

        # Transform vertices using matrix (column-major 4x4)
        if matrix and len(matrix) == 16:
            transform = np.array(matrix, dtype=np.float32).reshape(4, 4, order='F')
            vertices_homo = np.hstack([vertices, np.ones((vertices.shape[0], 1))])
            vertices_transformed = vertices_homo @ transform.T
            vertices = vertices_transformed[:, :3] / vertices_transformed[:, 3:4]

        # Desaturated colors based on semantic label
        label_lower = semantic_label.lower()
        if 'screen' in label_lower:
            fill_color = "#e8d4d4"  # Very light desaturated red
            wire_color = "#b89898"  # Darker wireframe
        elif 'table' in label_lower:
            fill_color = "#d4e8d4"  # Very light desaturated green
            wire_color = "#98b898"  # Darker wireframe
        elif 'global' in label_lower:
            fill_color = "#d4dce8"  # Very light desaturated blue
            wire_color = "#98a8b8"  # Darker wireframe
        else:
            fill_color = "#e0e0e0"  # Very light gray
            wire_color = "#a0a0a0"  # Darker gray wireframe

        # Add filled mesh with high transparency (subtle fill)
        # Use basic material which handles transparency better
        # material dict with depthWrite:false and alphaTest:0 for proper transparency
        elements.append(TriMesh(
            key=f"environment_mesh_fill_{i}",
            vertices=vertices.astype(np.float32),
            faces=indices.astype(np.uint32),
            position=[0.0, 0.0, 0.0],
            rotation=[0.0, 0.0, 0.0],
            color=fill_color,
            materialType="basic",  # Basic material for better transparency
            wireframe=False,
            opacity=0.2,  # Subtle fill
            material={"alphaTest": 0, "depthWrite": False},  # Proper transparency settings
            renderOrder=-10,  # Render before video and skeleton
        ))

        # Add wireframe overlay for structure (more visible)
        elements.append(TriMesh(
            key=f"environment_mesh_wire_{i}",
            vertices=vertices.astype(np.float32),
            faces=indices.astype(np.uint32),
            position=[0.0, 0.0, 0.0],
            rotation=[0.0, 0.0, 0.0],
            color=wire_color,
            materialType="basic",  # Basic material for better transparency
            wireframe=True,
            opacity=0.5,  # Semi-transparent wireframe
            material={"alphaTest": 0, "depthWrite": False},
            renderOrder=-9,  # Render after fill but before skeleton
        ))

    return elements


class WebXRVisualizer:
    """Visualizes WebXR body tracking data with skeleton rendering and environment meshes."""

    def __init__(self, webxr_file: str, playback_fps: Optional[int] = None, video_file: str = None, static_base_url: str = None):
        """
        Initialize WebXR visualizer.

        Args:
            webxr_file: Path to WebXR JSON file
            playback_fps: Playback FPS (if None, uses original FPS)
            video_file: Path to video file (relative to public directory)
            static_base_url: Base URL for static files (e.g. http://localhost:8012 when accessing via dev server)
        """
        logger.info(f"Loading WebXR data from: {webxr_file}")
        with open(webxr_file, 'r') as f:
            self.data = json.load(f)

        self.frames = self.data['frames']
        self.original_fps = self.data.get('fps', 30)
        self.playback_fps = playback_fps if playback_fps is not None else self.original_fps
        self.environment_mesh = self.data.get('environment_mesh_snapshot')
        self.video_file = video_file
        self.static_base_url = static_base_url

        logger.info(f"Loaded {len(self.frames)} frames")
        if self.static_base_url:
            logger.info(f"Static file base URL: {self.static_base_url}")
        logger.info(f"Original FPS: {self.original_fps}")
        logger.info(f"Playback FPS: {self.playback_fps}")
        logger.info(f"Duration: {self.data.get('duration', 'unknown')}s")

        if self.environment_mesh:
            mesh_count = self.environment_mesh.get('mesh_count', 0)
            logger.info(f"Environment meshes: {mesh_count} meshes found")

        if self.video_file:
            logger.info(f"Video file: {self.video_file}")

    async def animation_loop(self, session: VuerSession):
        """Main animation loop - displays frames with skeleton rendering."""
        if not self.frames:
            logger.warning("No frames to display")
            return

        # Use session-local current_frame to avoid conflicts when multiple sessions run
        current_frame = 0

        # Create environment mesh elements once (they don't change)
        env_mesh_elements = []
        if self.environment_mesh:
            env_mesh_elements = create_environment_mesh_elements(self.environment_mesh)

        # Prepare static file URLs
        # If static_base_url is provided, prepend it to relative paths
        def make_static_url(path):
            if self.static_base_url and path.startswith("/"):
                return f"{self.static_base_url}{path}"
            return path

        # Video configuration
        video_element = None
        if self.video_file:
            video_src = make_static_url(self.video_file)
            print(video_src)
            video_aspect = 16 / 9
            video_height = 0.85

            # Create video element once (will be updated only at loop restart)
            video_element = VideoPlane(
                key="vr_recording_video",
                src=video_src,
                height=video_height,
                aspect=video_aspect,
                anchor="bottom-right",
                distanceToCamera=2.0,
                autoplay=True,
                loop=False,
                depthTest=False,
                depthWrite=False,
                renderOrder=100,  # High renderOrder to render on top of environment
            )

            logger.info(f"Video playback initialized with src: {video_src}")
            logger.info(f"Video size: {video_height}h x {video_height * video_aspect:.2f}w (aspect={video_aspect:.2f})")
            logger.info(f"Video anchored at viewport bottom-right corner")
            logger.info(f"Video will restart at each animation loop to prevent drift")

        frame_duration = 1.0 / self.playback_fps
        total_frames = len(self.frames)

        logger.info(f"Starting animation loop")
        logger.info(f"  Original FPS: {self.original_fps}")
        logger.info(f"  Playback FPS: {self.playback_fps}")
        logger.info(f"  Total frames: {total_frames}")
        logger.info(f"  Duration: {total_frames / self.playback_fps:.2f}s")
        logger.info(f"  Frame duration: {frame_duration:.4f}s")

        import time
        fps_check_start = time.time()

        while True:
            # Record frame start time for precise timing
            frame_start = time.time()

            frame = self.frames[current_frame]

            # Log actual FPS periodically
            fps_check_interval = 30
            if current_frame > 0 and current_frame % fps_check_interval == 0:
                elapsed = time.time() - fps_check_start
                actual_fps = fps_check_interval / elapsed
                logger.info(f"Frame {current_frame}/{total_frames} - Actual FPS: {actual_fps:.2f}")
                fps_check_start = time.time()

            # Collect all elements for this frame
            frame_elements = []

            # Add video element (only on first frame or when restarting loop)
            # For other frames, video continues playing on its own
            if video_element:
                if current_frame == 0:
                    # Update video with seekTime to restart playback
                    video_with_seek = VideoPlane(
                        key="vr_recording_video",
                        src=video_element.src,
                        height=video_element.height,
                        aspect=video_element.aspect,
                        anchor=video_element.anchor,
                        distanceToCamera=video_element.distanceToCamera,
                        autoplay=True,
                        loop=False,
                        seekTime=0.0,  # Reset to beginning
                        depthTest=False,
                        depthWrite=False,
                        renderOrder=100,  # High renderOrder to render on top of environment
                    )
                    frame_elements.append(video_with_seek)
                else:
                    # Just include the video element without updates
                    frame_elements.append(video_element)

            # Add environment meshes
            frame_elements.extend(env_mesh_elements)

            # Create body skeleton
            frame_elements.extend(create_body_skeleton_elements(frame))

            # Add head frustum to show video capture viewpoint
            head_frustum = create_head_frustum(frame)
            if head_frustum:
                frame_elements.append(head_frustum)

            # Create hand skeletons with connections to body
            frame_elements.extend(create_hand_skeleton_elements(frame, 'left'))
            frame_elements.extend(create_hand_skeleton_elements(frame, 'right'))

            # Update entire scene at once
            session.set @ Scene(*frame_elements)

            # Advance to next frame
            next_frame = (current_frame + 1) % total_frames
            if next_frame == 0:
                logger.info(f"Animation loop completed, restarting from frame 0")
                # Reset FPS measurement on loop restart
                fps_check_start = time.time()
            current_frame = next_frame

            # Maintain target frame rate with precise timing
            frame_end = time.time()
            frame_processing_time = frame_end - frame_start
            sleep_time = frame_duration - frame_processing_time

            # Only sleep if we finished processing faster than target frame duration
            if sleep_time > 0:
                await asyncio.sleep(sleep_time)
            else:
                # Frame processing took longer than target - log warning occasionally
                if current_frame % fps_check_interval == 0:
                    logger.warning(f"Frame processing ({frame_processing_time:.4f}s) exceeded target duration ({frame_duration:.4f}s)")


if __name__ == '__main__':
    # Parse command-line arguments
    parser = argparse.ArgumentParser(description="WebXR Data Visualizer with Skeleton and Environment Mesh")
    parser.add_argument(
        "--input",
        type=str,
        required=True,
        help="Input WebXR JSON file path"
    )
    parser.add_argument(
        "--fps",
        type=int,
        default=None,
        help="Playback FPS (default: use original FPS from file)"
    )
    parser.add_argument(
        "--video",
        type=str,
        default=None,
        help="Video file path (Vuer serves static files at /static endpoint)"
    )
    parser.add_argument(
        "--static_url",
        type=str,
        default=None,
        help="Base URL for static files (e.g. http://localhost:8012 when accessing via dev server)"
    )
    args = parser.parse_args()

    logger.info("WebXR Data Visualizer with Skeleton and Environment Mesh")

    # Use http://localhost:8012 as base URL when accessing via dev server
    # Override with args.static_url if provided
    static_url = args.static_url if args.static_url else "http://localhost:8012"
    logger.info(f"args.static_url = {args.static_url}")
    logger.info(f"Using static_base_url = {static_url}")

    visualizer = WebXRVisualizer(
        webxr_file=args.input,
        playback_fps=args.fps,
        video_file=args.video,
        static_base_url=static_url,
    )

    # Create Vuer app with static file serving
    # For recorded data playback (not live WebXR), HTTP is sufficient and avoids certificate issues
    # Determine static root from vuer package location
    import vuer as vuer_module
    from pathlib import Path as PathLib
    vuer_package_dir = PathLib(vuer_module.__file__).parent.parent.parent
    static_root = vuer_package_dir / "public"

    logger.info("Starting server in HTTP mode (for recorded data playback)")
    logger.info(f"Static root: {static_root}")
    logger.info("Access via: http://localhost:8012")
    app = Vuer(static_root=str(static_root))

    @app.spawn(start=True)
    async def main(session: VuerSession):
        # Start animation loop
        await visualizer.animation_loop(session)
