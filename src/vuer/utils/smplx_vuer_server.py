#!/usr/bin/env python3
"""
SMPL-X Visualization Server

Loads SMPL-X motion sequence and renders animated mesh using Vuer.

Usage:
    python smplx_vuer_server.py \
        --smplx-sequence smplx_data/motion_sequence.json \
        --smplx-model path/to/SMPLX_NEUTRAL.npz

Features:
    - Full body mesh with hands
    - Real-time animation playback
    - Adjustable FPS
    - GPU acceleration support
"""

import json
import asyncio
import logging
import argparse
import time
import numpy as np
import torch
import smplx
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from vuer import Vuer, VuerSession
from vuer.schemas import TriMesh, Scene, VideoPlane, Frustum

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def create_environment_mesh_elements(mesh_snapshot: Dict) -> List[TriMesh]:
    """
    Create environment mesh elements from snapshot data.

    Args:
        mesh_snapshot: Environment mesh snapshot with 'meshes' list

    Returns:
        List of TriMesh elements
    """
    elements = []

    if not mesh_snapshot or 'meshes' not in mesh_snapshot:
        return elements

    meshes = mesh_snapshot['meshes']
    logger.info(f"Creating {len(meshes)} environment mesh elements")

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

        # Add filled mesh with transparency
        elements.append(TriMesh(
            key=f"environment_mesh_fill_{i}",
            vertices=vertices.astype(np.float32),
            faces=indices.astype(np.uint32),
            position=[0.0, 0.0, 0.0],
            rotation=[0.0, 0.0, 0.0],
            color=fill_color,
            materialType="basic",
            wireframe=False,
            opacity=0.15,
            material={"alphaTest": 0, "depthWrite": False},
            renderOrder=-10,
        ))

        # Add wireframe overlay
        elements.append(TriMesh(
            key=f"environment_mesh_wire_{i}",
            vertices=vertices.astype(np.float32),
            faces=indices.astype(np.uint32),
            position=[0.0, 0.0, 0.0],
            rotation=[0.0, 0.0, 0.0],
            color=wire_color,
            materialType="basic",
            wireframe=True,
            opacity=0.5,
            material={"alphaTest": 0, "depthWrite": False},
            renderOrder=-9,
        ))

    return elements


def to_tensor(array, device: torch.device) -> torch.Tensor:
    """Convert numpy array to torch tensor with batch dimension."""
    return torch.from_numpy(np.array(array)).float().unsqueeze(0).to(device)


def create_head_frustum(joints: np.ndarray, global_orient: np.ndarray) -> Frustum:
    """
    Create camera frustum at head position.

    Args:
        joints: Joint positions array from SMPL-X (N, 3)
        global_orient: Global orientation (3,) in axis-angle format

    Returns:
        Frustum element
    """
    from scipy.spatial.transform import Rotation as R
    import math

    # SMPL-X joint 15 is the head
    head_position = joints[15].tolist()

    # Convert axis-angle (rotvec) to rotation object
    r = R.from_rotvec(global_orient)

    # Convert to Euler angles (XYZ order, same as Three.js default)
    euler = r.as_euler('xyz', degrees=False)

    # Apply Y-axis correction to align with camera forward direction
    # SMPL-X forward may differ from Three.js camera forward (-Z)
    y_correction = math.pi
    rotation = (euler[0], euler[1] + y_correction, euler[2])

    return Frustum(
        key="head_camera_frustum",
        position=head_position,
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


class SMPLXVuerServer:
    """SMPL-X visualization server using Vuer."""

    def __init__(self, smplx_model_path: str, device: str = "cpu", video_file: str = None, static_base_url: str = None):
        """
        Initialize SMPL-X server.

        Args:
            smplx_model_path: Path to SMPL-X model file (.npz or .pkl)
            device: Device to run computation on ('cpu' or 'cuda')
            video_file: Path to video file (relative to public directory)
            static_base_url: Base URL for static files (e.g. http://localhost:8012)
        """
        self.device = torch.device(device)
        self.video_file = video_file
        self.static_base_url = static_base_url
        logger.info(f"Using device: {self.device}")

        # Load SMPL-X model
        model_path = Path(smplx_model_path)
        if not model_path.exists():
            raise FileNotFoundError(f"SMPL-X model not found: {smplx_model_path}")

        # Determine gender from filename
        gender = 'neutral'
        if 'male' in model_path.name.lower() and 'female' not in model_path.name.lower():
            gender = 'male'
        elif 'female' in model_path.name.lower():
            gender = 'female'
        logger.info(f"Loading SMPL-X model: {model_path} (gender: {gender})")

        # Get model directory (smplx.create expects parent of 'smplx' folder)
        # e.g., if model is 'smpl_models/smplx/SMPLX_NEUTRAL.npz'
        # we need to pass 'smpl_models/' so it can find 'smpl_models/smplx/'
        model_dir = str(model_path.parent.parent)

        # Create SMPL-X model
        self.smplx_model = smplx.create(
            model_path=model_dir,
            model_type='smplx',
            gender=gender,
            num_betas=10,
            use_pca=False,           # Use full hand pose (not PCA)
            flat_hand_mean=True,     # Flat hand as default pose
            batch_size=1,
            create_transl=False,
        ).to(self.device)

        logger.info(f"SMPL-X loaded successfully")
        logger.info(f"  Vertices: {self.smplx_model.get_num_verts()}")
        logger.info(f"  Faces: {self.smplx_model.faces.shape[0]}")

        # Cache faces (convert to uint32 for vuer)
        self.faces = self.smplx_model.faces.astype(np.uint32)

        # Sequence data
        self.sequence: Optional[List[Dict]] = None
        self.fps: int = 30
        self.current_frame: int = 0

        # Environment mesh data
        self.environment_mesh: Optional[Dict] = None

        # Mesh cache for performance
        self.mesh_cache: Optional[List[Dict]] = None

        # Log video configuration
        if self.video_file:
            logger.info(f"Video file: {self.video_file}")
        if self.static_base_url:
            logger.info(f"Static file base URL: {self.static_base_url}")

    def load_sequence(self, sequence_path: str, fps: Optional[int] = None):
        """
        Load SMPL-X sequence from JSON file.

        Args:
            sequence_path: Path to SMPL-X parameters JSON file
            fps: Override FPS (if None, uses value from file)
        """
        logger.info(f"Loading SMPL-X sequence: {sequence_path}")

        with open(sequence_path, 'r') as f:
            data = json.load(f)

        self.sequence = data['frames']
        self.fps = fps if fps is not None else data.get('fps', 30)
        self.current_frame = 0

        # Load environment mesh if present
        if 'environment_mesh_snapshot' in data:
            self.environment_mesh = data['environment_mesh_snapshot']
            mesh_count = self.environment_mesh.get('mesh_count', 0)
            logger.info(f"🗺️  Environment mesh: {mesh_count} meshes found")
        else:
            self.environment_mesh = None
            logger.info(f"ℹ️  No environment mesh data")

        logger.info(f"✅ Loaded {len(self.sequence)} frames")
        logger.info(f"   FPS: {self.fps}")
        logger.info(f"   Duration: {data.get('duration', len(self.sequence) / self.fps):.2f}s")

    def precompute_meshes(self):
        """Precompute all mesh data for smooth playback."""
        if not self.sequence:
            logger.warning("No sequence loaded, skipping mesh precomputation")
            return

        logger.info(f"🔄 Precomputing {len(self.sequence)} frames for smooth playback...")
        self.mesh_cache = []

        start_time = time.time()

        # Dynamic progress reporting (every 5% or at least every 30 frames)
        progress_interval = max(30, len(self.sequence) // 20)

        for i, frame_params in enumerate(self.sequence):
            if i > 0 and i % progress_interval == 0:
                elapsed = time.time() - start_time
                rate = i / elapsed
                remaining = (len(self.sequence) - i) / rate
                logger.info(f"  Progress: {100*i/len(self.sequence):.1f}% ({i}/{len(self.sequence)}) - ETA: {remaining:.1f}s")

            mesh_data = self.compute_mesh(frame_params)
            self.mesh_cache.append(mesh_data)

        elapsed = time.time() - start_time
        logger.info(f"✅ Precomputation complete in {elapsed:.1f}s ({len(self.sequence)/elapsed:.1f} fps)")

    def compute_mesh(self, frame_params: Dict) -> Dict:
        """
        Compute SMPL-X mesh from parameters.

        Args:
            frame_params: Dictionary with SMPL-X parameters
                - body_pose: (63,)
                - left_hand_pose: (45,)
                - right_hand_pose: (45,)
                - global_orient: (3,)
                - transl: (3,)
                - betas: (10,)
                - jaw_pose: (3,)
                - leye_pose: (3,)
                - reye_pose: (3,)

        Returns:
            Dict with 'vertices' (N, 3) float16 and 'faces' (F, 3) uint32
        """
        # Convert parameters to torch tensors
        body_pose = to_tensor(frame_params['body_pose'], self.device)
        left_hand_pose = to_tensor(frame_params['left_hand_pose'], self.device)
        right_hand_pose = to_tensor(frame_params['right_hand_pose'], self.device)
        global_orient = to_tensor(frame_params['global_orient'], self.device)
        transl = to_tensor(frame_params['transl'], self.device)
        betas = to_tensor(frame_params.get('betas', np.zeros(10)), self.device)
        jaw_pose = to_tensor(frame_params.get('jaw_pose', np.zeros(3)), self.device)
        leye_pose = to_tensor(frame_params.get('leye_pose', np.zeros(3)), self.device)
        reye_pose = to_tensor(frame_params.get('reye_pose', np.zeros(3)), self.device)

        # Forward pass through SMPL-X
        with torch.no_grad():
            output = self.smplx_model(
                body_pose=body_pose,
                left_hand_pose=left_hand_pose,
                right_hand_pose=right_hand_pose,
                global_orient=global_orient,
                transl=transl,
                betas=betas,
                jaw_pose=jaw_pose,
                leye_pose=leye_pose,
                reye_pose=reye_pose,
                return_verts=True
            )

        # Get vertices
        vertices = output.vertices[0].cpu().numpy()

        # Get joints (includes head joint at index 15)
        joints = output.joints[0].cpu().numpy()

        # Convert to float16 for efficiency
        vertices_f16 = vertices.astype(np.float16)

        return {
            'vertices': vertices_f16,
            'faces': self.faces,
            'joints': joints,  # Full precision for joints
            'global_orient': frame_params['global_orient']  # Store for frustum rotation
        }

    async def animation_loop(self, session: VuerSession):
        """Main animation loop - continuously updates mesh."""
        # Prepare static file URLs
        def make_static_url(path):
            """Construct static file URL based on configuration."""
            # Ensure path starts with /static/
            if not path.startswith('/static/'):
                path = f'/static{path}'

            # If static_base_url is provided, use full URL (for cross-origin access)
            # Otherwise use relative path (for same-origin access)
            if self.static_base_url:
                return f"{self.static_base_url}{path}"
            return path

        # Video configuration
        video_element = None
        if self.video_file:
            video_src = make_static_url(self.video_file)
            video_aspect = 16 / 9
            video_height = 0.85

            # Create video element once (will be updated only at loop restart)
            video_element = VideoPlane(
                key="smplx_recording_video",
                src=video_src,
                height=video_height,
                aspect=video_aspect,
                anchor="bottom-right",
                distanceToCamera=2.0,
                autoplay=True,
                loop=False,
                depthTest=False,
                depthWrite=False,
                renderOrder=100,  # High renderOrder to render on top
            )

            logger.info(f"Video playback initialized")
            logger.info(f"  Source: {video_src}")
            logger.info(f"  Size: {video_height}h x {video_height * video_aspect:.2f}w (aspect={video_aspect:.2f})")
            logger.info(f"  Position: bottom-right corner")
            logger.info(f"  Auto-restart at loop to prevent drift")

        if not self.sequence:
            logger.warning("No sequence loaded, showing T-pose")

            # Show T-pose (all zeros)
            mesh_data = self.compute_mesh({
                'body_pose': np.zeros(63),
                'left_hand_pose': np.zeros(45),
                'right_hand_pose': np.zeros(45),
                'global_orient': np.zeros(3),
                'transl': np.array([0, 0.9, 0]),
                'betas': np.zeros(10),
                'jaw_pose': np.zeros(3),
                'leye_pose': np.zeros(3),
                'reye_pose': np.zeros(3),
            })

            session.upsert @ TriMesh(
                key="smplx",
                vertices=mesh_data['vertices'],
                faces=mesh_data['faces'],
                position=[0, 0, 0],
                rotation=[0, 0, 0],
                color="#5aadff",
                materialType="standard",
                wireframe=False,
            )

            # Keep session alive
            while True:
                await asyncio.sleep(1.0)

        # Animation loop
        frame_duration = 1.0 / self.fps
        logger.info(f"🎬 Starting animation at {self.fps} FPS")
        logger.info(f"   Total frames: {len(self.sequence)}")
        logger.info(f"   Duration: {len(self.sequence) / self.fps:.2f}s")

        # Create environment mesh elements for this session
        env_mesh_elements = None
        if self.environment_mesh:
            env_mesh_elements = create_environment_mesh_elements(self.environment_mesh)
            logger.info(f"✅ Environment mesh elements created ({len(env_mesh_elements)} elements)")

        # FPS tracking (session-specific)
        fps_check_start = time.time()
        current_frame = 0  # Session-specific frame counter
        fps_check_interval = 30  # Check FPS every N frames

        while True:
            # Record frame start time for precise timing
            frame_start = time.time()

            # Log actual FPS periodically
            if current_frame > 0 and current_frame % fps_check_interval == 0:
                elapsed = time.time() - fps_check_start
                actual_fps = fps_check_interval / elapsed
                logger.info(f"Frame {current_frame}/{len(self.sequence)} - Actual FPS: {actual_fps:.2f}")
                fps_check_start = time.time()

            frame_params = self.sequence[current_frame]

            # Collect all elements for this frame
            frame_elements = []

            # Add video element (update with seekTime on frame 0, keep playing on other frames)
            if video_element:
                if current_frame == 0:
                    # Update video with seekTime to restart playback
                    video_with_seek = VideoPlane(
                        key="smplx_recording_video",
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
                        renderOrder=100,
                    )
                    frame_elements.append(video_with_seek)
                else:
                    # Include video element without seekTime (continues playing)
                    frame_elements.append(video_element)

            # Add environment meshes (if available)
            if env_mesh_elements:
                frame_elements.extend(env_mesh_elements)

            # Get mesh data (from cache if available)
            if self.mesh_cache:
                mesh_data = self.mesh_cache[current_frame]
            else:
                mesh_data = self.compute_mesh(frame_params)

            # Add SMPL-X mesh
            frame_elements.append(TriMesh(
                key="smplx",
                vertices=mesh_data['vertices'],
                faces=mesh_data['faces'],
                position=[0, 0, 0],
                rotation=[0, 0, 0],
                color="#5aadff",
                materialType="standard",
                wireframe=False,
            ))

            # Add head frustum to show camera viewpoint
            frustum = create_head_frustum(
                joints=mesh_data['joints'],
                global_orient=mesh_data['global_orient']
            )
            frame_elements.append(frustum)

            # Update entire scene at once (like webxr_visualizer)
            session.set @ Scene(*frame_elements)

            # Advance to next frame (loop)
            current_frame = (current_frame + 1) % len(self.sequence)
            if current_frame == 0:
                logger.info(f"Animation loop completed, restarting from frame 0")

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


def main():
    parser = argparse.ArgumentParser(
        description='SMPL-X Visualization Server',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Visualize SMPL-X motion sequence
  python smplx_vuer_server.py \
      --smplx-sequence smplx_data/motion_sequence.json \
      --smplx-model path/to/SMPLX_NEUTRAL.npz

  # With synchronized video playback
  python smplx_vuer_server.py \
      --smplx-sequence smplx_data/motion_sequence.json \
      --smplx-model path/to/SMPLX_NEUTRAL.npz \
      --video /static/videos/recording.mp4 \
      --static-url http://localhost:8012

  # Custom FPS and port
  python smplx_vuer_server.py \
      --smplx-sequence smplx_data/motion_sequence.json \
      --smplx-model path/to/SMPLX_NEUTRAL.npz \
      --fps 60 \
      --port 8013

  # Use GPU acceleration
  python smplx_vuer_server.py \
      --smplx-sequence smplx_data/motion_sequence.json \
      --smplx-model path/to/SMPLX_NEUTRAL.npz \
      --device cuda
        """
    )

    parser.add_argument(
        '--smplx-sequence',
        type=str,
        required=True,
        help='SMPL-X parameters JSON file'
    )
    parser.add_argument(
        '--smplx-model',
        type=str,
        required=True,
        help='SMPL-X model file (.npz or .pkl)'
    )
    parser.add_argument(
        '--fps',
        type=int,
        default=None,
        help='Playback FPS (default: use value from sequence file)'
    )
    parser.add_argument(
        '--port',
        type=int,
        default=8012,
        help='Server port (default: 8012)'
    )
    parser.add_argument(
        '--device',
        type=str,
        default='cpu',
        choices=['cpu', 'cuda'],
        help='Device for computation (default: cpu)'
    )
    parser.add_argument(
        '--video',
        type=str,
        default=None,
        help='Video file path (e.g., /static/videos/recording.mp4)'
    )
    parser.add_argument(
        '--static-url',
        type=str,
        default=None,
        help='Static file base URL (e.g., http://localhost:8012)'
    )

    args = parser.parse_args()

    # Validate files
    if not Path(args.smplx_sequence).exists():
        logger.error(f"❌ SMPL-X sequence not found: {args.smplx_sequence}")
        return 1

    if not Path(args.smplx_model).exists():
        logger.error(f"❌ SMPL-X model not found: {args.smplx_model}")
        return 1

    print("=" * 60)
    print("SMPL-X Visualization Server")
    print("=" * 60)
    print(f"Sequence: {args.smplx_sequence}")
    print(f"Model:    {args.smplx_model}")
    print(f"Port:     {args.port}")
    print(f"Device:   {args.device}")
    if args.video:
        print(f"Video:    {args.video}")
        if args.static_url:
            print(f"Static URL: {args.static_url}")
    print()

    # Create server
    try:
        server = SMPLXVuerServer(
            smplx_model_path=args.smplx_model,
            device=args.device,
            video_file=args.video,
            static_base_url=args.static_url
        )
    except Exception as e:
        logger.error(f"❌ Error loading SMPL-X model: {e}")
        return 1

    # Load sequence
    try:
        server.load_sequence(args.smplx_sequence, fps=args.fps)
    except Exception as e:
        logger.error(f"❌ Error loading sequence: {e}")
        return 1

    # Create Vuer app with static file serving
    # Get the vuer package's public directory (same as webxr_visualizer)
    import vuer
    vuer_package_dir = Path(vuer.__file__).parent.parent.parent  # Go up to vuer root
    static_root = vuer_package_dir / "public"

    logger.info(f"Static file root: {static_root}")
    if args.video and static_root.exists():
        video_file_path = static_root / args.video.lstrip('/')
        if video_file_path.exists():
            logger.info(f"✅ Video file found: {video_file_path}")
        else:
            logger.warning(f"⚠️  Video file not found: {video_file_path}")
    else:
        if args.video:
            logger.warning(f"⚠️  Static root does not exist: {static_root}")

    if not static_root.exists():
        logger.error(f"❌ Static root directory not found: {static_root}")
        logger.error(f"   Please check the vuer installation")
        return 1

    app = Vuer(static_root=str(static_root))

    @app.spawn(start=True)
    async def main_scene(session: VuerSession):
        print()
        print("=" * 60)
        print(f"🚀 Server running on http://localhost:{args.port}")
        print(f"📱 Open in browser to view animation")
        print()
        print("Controls:")
        print("  - Mouse drag: Rotate camera")
        print("  - Mouse wheel: Zoom")
        print("  - Right click + drag: Pan")
        print()
        print("Press Ctrl+C to stop")
        print("=" * 60)
        print()

        # Add UI info panel
        mesh_info = ""
        if server.environment_mesh:
            mesh_count = server.environment_mesh.get('mesh_count', 0)
            mesh_info = f"""
                <strong>Environment:</strong> {mesh_count} meshes <br/>
            """

        session.upsert @ f"""
        <div style="position: absolute; top: 20px; left: 20px;
                    background: rgba(0,0,0,0.8); color: white;
                    padding: 20px; border-radius: 10px; font-family: monospace;
                    font-size: 14px;">
            <h2 style="margin-top: 0;">🎬 SMPL-X Animation</h2>
            <div style="margin-top: 10px;">
                <strong>Frames:</strong> {len(server.sequence)} <br/>
                <strong>FPS:</strong> {server.fps} <br/>
                <strong>Duration:</strong> {len(server.sequence) / server.fps:.2f}s <br/>
                {mesh_info}
            </div>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #444;">
                <div style="font-size: 12px; color: #aaa;">
                    • Blue mesh: SMPL-X body + hands <br/>
                    • Gray mesh: Environment <br/>
                    • Animation loops automatically
                </div>
            </div>
        </div>
        """

        # Precompute all meshes for smooth playback
        server.precompute_meshes()

        # Start animation loop
        await server.animation_loop(session)

    # Run server
    try:
        app.run(port=args.port)
    except KeyboardInterrupt:
        print("\n👋 Server stopped")
        return 0


if __name__ == '__main__':
    exit(main())
