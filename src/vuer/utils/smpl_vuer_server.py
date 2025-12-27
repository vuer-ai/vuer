"""
SMPL Vuer Server - Standard Vuer Architecture

This server uses vuer's standard architecture to stream SMPL mesh data.
Python backend continuously updates mesh using session.upsert @ TriMesh(...).
Frontend uses standard vuer components to receive and render.

Requirements:
    pip install vuer smplx torch numpy

Usage:
    python smpl_vuer_server.py --smpl-model /path/to/SMPL.pkl --smpl-sequence /path/to/sequence.json
"""

import argparse
import asyncio
import json
import numpy as np
from pathlib import Path
from typing import Optional, Dict, List
import logging

try:
    import torch
    import smplx
    SMPLX_AVAILABLE = True
except ImportError:
    print("Error: smplx not installed. Install with: pip install smplx torch")
    SMPLX_AVAILABLE = False
    exit(1)

try:
    from vuer import Vuer, VuerSession
    from vuer.schemas import TriMesh, Scene, Sphere
    VUER_AVAILABLE = True
except ImportError:
    print("Error: vuer not installed. Install with: pip install vuer")
    VUER_AVAILABLE = False
    exit(1)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class SMPLVuerServer:
    """SMPL server using vuer's standard architecture."""

    def __init__(self, smpl_model_path: str, device: str = "cpu"):
        """
        Initialize SMPL Vuer server.

        Args:
            smpl_model_path: Path to SMPL model file (.pkl or .npz)
            device: Device to run computation on ('cpu' or 'cuda')
        """
        self.device = torch.device(device)
        logger.info(f"Using device: {self.device}")

        # Load SMPL model
        model_path = Path(smpl_model_path)
        if not model_path.exists():
            raise FileNotFoundError(f"SMPL model not found: {smpl_model_path}")

        # Determine gender
        gender = 'neutral'
        if 'male' in model_path.name.lower() and 'female' not in model_path.name.lower():
            gender = 'male'
        elif 'female' in model_path.name.lower():
            gender = 'female'

        logger.info(f"Loading SMPL model: {model_path} (gender: {gender})")

        model_dir = str(model_path.parent.parent)

        self.smpl_model = smplx.create(
            model_path=model_dir,
            model_type='smpl',
            gender=gender,
            batch_size=1,
            create_transl=False,
        ).to(self.device)

        logger.info(f"✅ SMPL model loaded: {self.smpl_model.faces.shape[0]} faces, "
                   f"{self.smpl_model.get_num_verts()} vertices")

        # Cache faces (convert to uint32 for vuer)
        self.faces = self.smpl_model.faces.astype(np.uint32)

        # Sequence data
        self.sequence: Optional[List[Dict]] = None
        self.fps: int = 3
        self.current_frame: int = 0

    def load_sequence(self, sequence_path: str):
        """Load SMPL sequence from JSON file."""
        logger.info(f"Loading SMPL sequence: {sequence_path}")
        with open(sequence_path, 'r') as f:
            data = json.load(f)

        self.sequence = data['frames']
        self.fps = data.get('fps', 30)
        self.current_frame = 0

        logger.info(f"✅ Loaded {len(self.sequence)} frames at {self.fps} fps")

    def compute_mesh(self,
                     body_pose: np.ndarray,
                     global_orient: np.ndarray,
                     transl: np.ndarray,
                     betas: Optional[np.ndarray] = None) -> Dict:
        """
        Compute SMPL mesh from parameters.

        Returns:
            Dict with 'vertices' (N, 3) float16 and 'faces' (F, 3) uint32
        """
        # Convert to torch tensors
        body_pose_tensor = torch.from_numpy(body_pose).float().unsqueeze(0).to(self.device)
        global_orient_tensor = torch.from_numpy(global_orient).float().unsqueeze(0).to(self.device)
        transl_tensor = torch.from_numpy(transl).float().unsqueeze(0).to(self.device)

        if betas is not None:
            betas_tensor = torch.from_numpy(betas).float().unsqueeze(0).to(self.device)
        else:
            betas_tensor = torch.zeros(1, 10).to(self.device)

        # Forward pass
        with torch.no_grad():
            output = self.smpl_model(
                body_pose=body_pose_tensor,
                global_orient=global_orient_tensor,
                transl=transl_tensor,
                betas=betas_tensor,
                return_verts=True
            )

        vertices = output.vertices[0].cpu().numpy()

        # Convert to vuer format (float16 for efficiency)
        vertices_f16 = vertices.astype(np.float16)

        return {
            'vertices': vertices_f16,
            'faces': self.faces
        }

    async def animation_loop(self, session: VuerSession):
        """Main animation loop - continuously updates mesh using session.upsert."""
        if not self.sequence:
            logger.warning("No sequence loaded, showing T-pose")
            # Show T-pose
            mesh_data = self.compute_mesh(
                body_pose=np.zeros(69),
                global_orient=np.zeros(3),
                transl=np.array([0, 0, 0]),
                betas=np.zeros(10)
            )

            session.upsert @ TriMesh(
                key="smpl",
                vertices=mesh_data['vertices'],
                faces=mesh_data['faces'],
                position=[0, 0.9, 0],
                rotation=[0, 0, 0],
                color="#5aadff",
                materialType="standard",
                wireframe=False,
            )

            # Keep session alive
            while True:
                await asyncio.sleep(1.0)
            return

        frame_duration = 1.0 / self.fps
        logger.info(f"🎬 Starting animation loop at {self.fps} FPS")

        while True:
            frame = self.sequence[self.current_frame]

            # Compute mesh
            mesh_data = self.compute_mesh(
                body_pose=np.array(frame['body_pose']),
                global_orient=np.array(frame['global_orient']),
                transl=np.array(frame['translation']),
                betas=np.array(frame.get('betas', [0] * 10))
            )

            # Log update details every 30 frames
            if self.current_frame % 30 == 0:
                logger.info(f"📤 Sending frame {self.current_frame}/{len(self.sequence)}")
                logger.info(f"   Vertices shape: {mesh_data['vertices'].shape}")
                logger.info(f"   Vertices range: [{mesh_data['vertices'].min():.3f}, {mesh_data['vertices'].max():.3f}]")

            # UPSERT to update mesh (frontend now supports dynamic vertices update!)
            session.upsert @ TriMesh(
                key="smpl",
                vertices=mesh_data['vertices'],
                faces=mesh_data['faces'],
                position=[0, 0.9, 0],
                rotation=[0, 0, 0],
                color="#5aadff",
                materialType="standard",
                wireframe=False,
            )

            # Advance frame
            self.current_frame = (self.current_frame + 1) % len(self.sequence)

            await asyncio.sleep(frame_duration)


def create_app(args) -> Vuer:
    """Create and configure vuer app."""
    app = Vuer()

    # Initialize SMPL server
    server = SMPLVuerServer(
        smpl_model_path=args.smpl_model,
        device='cuda' if torch.cuda.is_available() and not args.cpu else 'cpu'
    )

    if args.smpl_sequence:
        server.load_sequence(args.smpl_sequence)

    @app.spawn(start=True)
    async def main(session: VuerSession):
        """Main session handler."""
        logger.info("🔌 Client connected")

        try:
            # Initialize scene with ground reference
            logger.info("Initializing scene...")
            session.set @ Scene(
                Sphere(
                    key="ground_marker",
                    args=[0.05, 16, 16],
                    position=[0, 0, 0],
                    color="#ff0000",
                ),
                up=[0, 1, 0],
                show_helper=True,
            )
            logger.info("✅ Scene initialized")

            # Start animation loop
            logger.info("Starting animation loop...")
            await server.animation_loop(session)
        except Exception as e:
            logger.error(f"❌ Error in main session: {e}")
            import traceback
            traceback.print_exc()

    return app


if __name__ == '__main__':
    import sys

    if not SMPLX_AVAILABLE or not VUER_AVAILABLE:
        exit(1)

    # Parse custom arguments before vuer's parser
    custom_args = {}
    remaining_args = []
    i = 1
    while i < len(sys.argv):
        arg = sys.argv[i]
        if arg == '--smpl-model' and i + 1 < len(sys.argv):
            custom_args['smpl_model'] = sys.argv[i + 1]
            i += 2
        elif arg == '--smpl-sequence' and i + 1 < len(sys.argv):
            custom_args['smpl_sequence'] = sys.argv[i + 1]
            i += 2
        elif arg == '--cpu':
            custom_args['cpu'] = True
            i += 1
        else:
            remaining_args.append(arg)
            i += 1

    # Replace sys.argv for vuer's parser
    sys.argv = [sys.argv[0]] + remaining_args

    # Validate required arguments
    if 'smpl_model' not in custom_args:
        logger.error("Error: --smpl-model is required")
        logger.info("Usage:")
        logger.info("  python smpl_vuer_server.py --smpl-model /path/to/SMPL.pkl [--smpl-sequence /path/to/sequence.json] [--cpu] [--Vuer.port 8012]")
        exit(1)

    # Create args object
    class Args:
        pass
    args = Args()
    args.smpl_model = custom_args['smpl_model']
    args.smpl_sequence = custom_args.get('smpl_sequence')
    args.cpu = custom_args.get('cpu', False)

    logger.info("="*60)
    logger.info("🚀 SMPL Vuer Server - Standard Architecture")
    logger.info("="*60)
    logger.info(f"📦 SMPL Model: {args.smpl_model}")
    if args.smpl_sequence:
        logger.info(f"🎬 Sequence: {args.smpl_sequence}")
    logger.info("="*60)

    # Create and start app (vuer will handle --Vuer.host and --Vuer.port)
    app = create_app(args)
    app.run()
