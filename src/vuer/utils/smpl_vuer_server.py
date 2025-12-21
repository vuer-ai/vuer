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

import asyncio
import json
import logging
import numpy as np
import torch
import smplx
from pathlib import Path
from typing import Optional, Dict, List
from params_proto import proto
from vuer import Vuer, VuerSession
from vuer.schemas import TriMesh

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
        logger.info(f"SMPL loaded: {self.smpl_model.faces.shape[0]} faces, {self.smpl_model.get_num_verts()} vertices")
        self.faces = self.smpl_model.faces.astype(np.uint32)  # Cache faces (convert to uint32 for vuer)

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
        # body_pose should be (69,) -> unsqueeze(0) -> (1, 69)
        # global_orient should be (3,) -> unsqueeze(0) -> (1, 3)
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
            # if self.current_frame % 100 == 0:
            #     logger.info(f"📤 Sending frame {self.current_frame}/{len(self.sequence)}")
            #     logger.info(f"   Vertices shape: {mesh_data['vertices'].shape}")
            #     logger.info(f"   Vertices range: [{mesh_data['vertices'].min():.3f}, {mesh_data['vertices'].max():.3f}]")

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


@proto.cli
def main(
    smpl_model: str = None,
    smpl_sequence: str = None,
    cpu: bool = False,
):
    logger.info("🚀 SMPL Vuer Server - Standard Architecture")

    # Initialize SMPL server
    server = SMPLVuerServer(
        smpl_model_path=smpl_model,
        device='cuda' if torch.cuda.is_available() and not cpu else 'cpu'
    )
    if smpl_sequence:
        logger.info(f"🎬 Sequence: {smpl_sequence}")
        server.load_sequence(smpl_sequence)

    app = Vuer()

    @app.spawn(start=True)
    async def main(session: VuerSession):
        await server.animation_loop(session)

if __name__ == '__main__':
    main()