from params_proto import EnvVar

from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Bodies, WebXRMesh
from asyncio import sleep
import dotvar.auto_load  # noqa

import json
from pathlib import Path
from typing import Dict, Any, List, Optional


OUT_PATH = Path("body_tracking_recording.json")

class BodyRecorder:
    """
    Records BODY_TRACKING_MOVE events into:
      - joint_names: stable order used for flattening
      - frames: list of flat arrays, each of length (J*16)
    """
    def __init__(
            self,
            out_path: Path,
            save_every_n_frames: int = 60,
    ):
        self.out_path = out_path
        self.save_every_n_frames = save_every_n_frames

        self.joint_names: Optional[List[str]] = None
        self.frames: List[List[float]] = []
        self._frame_count = 0

    def _infer_joint_order(self, bodies_dict: Dict[str, Any]) -> List[str]:
        # Stable, deterministic order. If you have a known list, put it here instead.
        return sorted(bodies_dict.keys())

    def add_frame(self, event_value: Dict[str, Any], ts: Optional[float] = None):
        """
        event_value is BodiesData:
          { jointName: { matrix: Float32Array-like (len 16, column-major) }, ... }
        """
        if not event_value:
            return

        if self.joint_names is None:
            self.joint_names = self._infer_joint_order(event_value)
            print(f"[recorder] inferred {len(self.joint_names)} joints")

        flat: List[float] = []
        missing = 0

        for jn in self.joint_names:
            jd = event_value.get(jn)
            m = None if jd is None else jd.get("matrix")

            if m is None or len(m) != 16:
                missing += 1
                flat.extend([float("nan")] * 16)
            else:
                flat.extend([float(x) for x in m])

        # store the flat array per frame
        self.frames.append(flat)
        self._frame_count += 1

        if missing:
            print(f"[recorder] warning: {missing} joints missing this frame")

        if self._frame_count % self.save_every_n_frames == 0:
            self.save()

    def save(self):
        payload = {
            "joint_names": self.joint_names,
            "frames": self.frames,
        }
        self.out_path.write_text(json.dumps(payload), encoding="utf-8")
        print(f"[recorder] saved {len(self.frames)} frames -> {self.out_path}")

recorder = BodyRecorder(
    out_path=OUT_PATH,
    save_every_n_frames=60,
)

app = Vuer(
    domain="192.168.2.141",
    cors="https://192.168.2.141:8012",
    # SSL/TLS configuration (all None = HTTP mode)
    cert=EnvVar("SSL_CERT", default=None).get(),  # Path to SSL certificate file
    key=EnvVar("SSL_KEY", default=None).get(), # Path to SSL private key file
    ca_cert=EnvVar("SSL_CA_CERT", default=None).get(),  # Path to CA certificate for client verification
    host="0.0.0.0",
    port=8012
)

from pprint import pprint

pprint(vars(app))

@app.add_handler("BODY_TRACKING_MOVE")
async def on_body_move(event, session):
    """
    Handle incoming BODY_TRACKING_MOVE events from the client.
    event.value should be a BodiesData dictionary:
      { jointName: { matrix: Float32Array-like, ... }, ... }
    """
    print(f"BODY_TRACKING_MOVE: key={event.key} ts={getattr(event, 'ts', None)}")

    # Record the body tracking frame
    recorder.add_frame(event.value, ts=getattr(event, 'ts', None))

    # Example: print only the first joint to avoid large output
    if event.value:
        first_joint, first_data = next(iter(event.value.items()))
        print(
            first_joint,
            "matrix_len=",
            len(first_data.get("matrix", [])) if first_data else None,
        )

@app.add_handler("WEBXR_MESH_UPDATE")
async def handle_mesh_update(event, session):
    print("\n[WEBXR_MESH_UPDATE] Handler called")
    print(f"Event key: {event.key}")
    print(f"Full event value type: {type(event.value)}")

    meshes = event.value.get('meshes', []) if isinstance(event.value, dict) else []
    print(f"Meshes count: {len(meshes)}")

    if not meshes:
        print("WARNING: No meshes in event value!")
        print(f"Event value keys: {event.value.keys() if isinstance(event.value, dict) else 'Not a dict'}")
        return

    for i, mesh in enumerate(meshes):
        vertices = mesh.get('vertices', [])
        matrix = mesh.get('matrix', [])
        semantic = mesh.get('semanticLabel', 'unknown')
        num_vertices = len(vertices) // 3 if vertices else 0

        print(f"\nMesh {i}:")
        print(f"  Semantic: {semantic}")
        print(f"  Vertices: {num_vertices}")
        print(f"  Matrix: {matrix}")

        # Print sample vertex positions to debug coordinate space
        if num_vertices > 0:
            print(f"  First vertex: [{vertices[0]:.3f}, {vertices[1]:.3f}, {vertices[2]:.3f}]")
            x_coords = [vertices[j] for j in range(0, len(vertices), 3)]
            y_coords = [vertices[j] for j in range(1, len(vertices), 3)]
            z_coords = [vertices[j] for j in range(2, len(vertices), 3)]
            print(f"  Bounds: x=[{min(x_coords):.2f}, {max(x_coords):.2f}], "
                  f"y=[{min(y_coords):.2f}, {max(y_coords):.2f}], "
                  f"z=[{min(z_coords):.2f}, {max(z_coords):.2f}]")

@app.spawn(start=True)
async def main(session: VuerSession):
    """
    Add the Bodies element to the scene and start streaming body tracking data.
    """
    print("=" * 60)
    print("Server: Client connected, waiting for WebXR mesh updates...")
    print("=" * 60)

    # # Set the scene with WebXRMesh (disable all default components)
    session.set(Scene(
        children=[
            WebXRMesh(
                key="webxr-mesh",
                autoUpdate=True,   # Enable auto-update (default)
                opacity=0.15,      # Semi-transparent
            ),
        ],
        bgChildren=[],  # No background children (empty scene)
    ))


    session.upsert(Bodies(
        key="body_tracking",  # Optional unique identifier (default: "body_tracking")
        stream=True,  # Must be True to start streaming data
        fps=30,  # Send data at 30 frames per second
        hideIndicate=False,  # Hide joint indicators in the scene but still stream data
        showFrame=False,  # Display coordinate frames at each joint
        frameScale=0.02,  # Scale of the coordinate frames or markers
    ))

    # Keep the session alive - mesh updates will be handled by the WEBXR_MESH_UPDATE handler
    while True:
        await sleep(5)
