#!/usr/bin/env python3
"""
WebXR Motion Data Collector

This script collects raw WebXR body tracking data from VR devices
and saves it to JSON files for later conversion to SMPL format.

Key features:
- Uses XRBody API for complete body tracking (83 joints including hands)
- VR mode detection - waits for valid data before recording
- Optional environment mesh collection
- No synchronization issues (single API source)

Usage:
    python collect_motion_data.py --session-name recording1 --duration 10 --collect-mesh

Requirements:
    - VR headset with body tracking support (e.g., Meta Quest 3)
    - SSL proxy (ngrok or localtunnel) for HTTPS
    - WebXR Body Tracking enabled in browser flags
"""

import os
import json
import asyncio
import atexit
import signal
import time
from datetime import datetime
from pathlib import Path
from typing import List, Dict, Any, Optional
import argparse

from vuer import Vuer, VuerSession
from vuer.schemas import Bodies, WebXRMesh

# Constants
DEFAULT_FPS = 30
DEFAULT_PORT = 8012
VR_DETECTION_TIMEOUT = 300  # 5 minutes in seconds
PROGRESS_REPORT_INTERVAL = 30  # Report progress every N frames


class BodiesDataCollectorV2:
    """Collects WebXR body tracking data and saves to JSON"""

    def __init__(
        self,
        output_dir: str = "motion_data",
        session_name: str = None,
        collect_mesh: bool = False
    ):
        # Convert to absolute path from project root
        if not Path(output_dir).is_absolute():
            # Find project root (look for pyproject.toml or setup.py)
            current = Path(__file__).resolve()
            project_root = None
            for parent in current.parents:
                if (parent / "pyproject.toml").exists() or (parent / "setup.py").exists():
                    project_root = parent
                    break
            if project_root:
                self.output_dir = project_root / output_dir
            else:
                self.output_dir = Path(output_dir).resolve()
        else:
            self.output_dir = Path(output_dir)

        self.output_dir.mkdir(parents=True, exist_ok=True)

        # Generate session name if not provided
        if session_name is None:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            session_name = f"session_{timestamp}"

        self.session_name = session_name
        self.output_file = self.output_dir / f"{session_name}.json"

        # Storage for collected frames
        self.frames: List[Dict[str, Any]] = []
        self.start_time = None
        self.recording = False
        self.waiting_for_data = False
        self.fps = 30

        # Auto-stop support
        self.duration = None
        self.duration_task = None
        self.recording_started_event = None  # Will be set by create_collector_app

        # Environment mesh collection
        self.collect_mesh = collect_mesh
        self.environment_mesh_snapshot: Optional[Dict[str, Any]] = None

        print(f"Output file: {self.output_file}")
        if self.collect_mesh:
            print(f"Environment mesh: enabled")

    def add_frame(self, bodies_data: Dict[str, Any], timestamp: float = None):
        """Add a frame to the recording"""
        # VR detection - wait for valid data before starting
        if self.waiting_for_data:
            # Check if we have any actual tracking data
            has_data = bool(bodies_data and any(v is not None for v in bodies_data.values()))

            if has_data:
                # Got valid data! Start recording now
                self.waiting_for_data = False
                self.recording = True
                self.start_time = datetime.now()
                print(f"Recording started at {self.start_time.strftime('%H:%M:%S')}")

                # Signal the timer task to start
                if self.recording_started_event:
                    self.recording_started_event.set()
            else:
                # Still waiting for valid data, don't add empty frames
                return

        if not self.recording:
            return

        frame = {}

        # Convert bodies_data to serializable format
        for joint_name, joint_data in bodies_data.items():
            if joint_data and "matrix" in joint_data:
                matrix = joint_data["matrix"]
                # Convert to list if it's a numpy array or similar
                if hasattr(matrix, 'tolist'):
                    matrix = matrix.tolist()
                elif not isinstance(matrix, list):
                    matrix = list(matrix)

                frame[joint_name] = {
                    "matrix": matrix
                }

        # Only add non-empty frames
        if frame:
            self.frames.append(frame)

            # Print progress
            if len(self.frames) % 30 == 0:
                elapsed = len(self.frames) / self.fps
                print(f"Recording: {len(self.frames)} frames ({elapsed:.1f}s)")

    def update_environment_mesh(self, mesh_data: Dict[str, Any]):
        """
        Update environment mesh snapshot

        Args:
            mesh_data: Mesh data from WebXRMesh component
                {
                    "meshes": [
                        {
                            "vertices": Float32Array,
                            "indices": Uint32Array,
                            "semanticLabel": str,
                            "matrix": [16 floats]
                        }
                    ]
                }
        """
        if not self.collect_mesh:
            return

        # Convert mesh data to serializable format
        serializable_meshes = []
        for mesh in mesh_data.get("meshes", []):
            # Convert typed arrays to lists
            vertices = mesh.get("vertices", [])
            indices = mesh.get("indices", [])

            if hasattr(vertices, 'tolist'):
                vertices = vertices.tolist()
            elif not isinstance(vertices, list):
                vertices = list(vertices)

            if hasattr(indices, 'tolist'):
                indices = indices.tolist()
            elif not isinstance(indices, list):
                indices = list(indices)

            serializable_meshes.append({
                "vertices": vertices,
                "indices": indices,
                "semanticLabel": mesh.get("semanticLabel"),
                "matrix": mesh.get("matrix", [])
            })

        self.environment_mesh_snapshot = {
            "meshes": serializable_meshes,
            "timestamp": datetime.now().isoformat(),
            "mesh_count": len(serializable_meshes)
        }

        # Print update notification
        print(f"Environment mesh: {len(serializable_meshes)} meshes")

    def start_recording(self, wait_for_data: bool = True):
        """
        Start recording frames

        Args:
            wait_for_data: If True, wait for VR mode to be detected before recording
        """
        if wait_for_data:
            self.waiting_for_data = True
        else:
            self.recording = True
            self.start_time = datetime.now()
            self.frames.clear()

    def stop_recording(self):
        """Stop recording and save to file"""
        if not self.recording:
            return

        self.recording = False
        end_time = datetime.now()
        duration = (end_time - self.start_time).total_seconds()

        print(f"Recording stopped: {len(self.frames)} frames in {duration:.2f}s")

        # If we have a target duration, trim frames to exact count
        if self.duration is not None:
            target_frames = int(self.duration * self.fps)
            if len(self.frames) > target_frames:
                extra_frames = len(self.frames) - target_frames
                self.frames = self.frames[:target_frames]

        self.save()

    def auto_save_on_exit(self):
        """Auto-save when program exits (called by atexit)"""
        if self.recording and len(self.frames) > 0:
            print("Auto-saving...")
            self.recording = False
            self.save()

    def save(self):
        """Save collected frames to JSON file"""
        if not self.frames:
            print("No frames recorded")
            return

        # Count joint types in first frame for statistics
        first_frame = self.frames[0]
        body_joints = sum(1 for k in first_frame.keys() if 'hand' not in k)
        hand_joints = sum(1 for k in first_frame.keys() if 'hand' in k)

        data = {
            "session_name": self.session_name,
            "data_source": "xrBody",  # Indicates all data comes from XRBody API
            "has_hand_gestures": False,  # XRBody doesn't provide gesture states
            "fps": self.fps,
            "frame_count": len(self.frames),
            "duration": len(self.frames) / self.fps,
            "timestamp": self.start_time.isoformat() if self.start_time else None,
            "joint_stats": {
                "total": len(first_frame),
                "body": body_joints,
                "hand": hand_joints
            },
            "frames": self.frames
        }

        # Add environment mesh if collected
        if self.environment_mesh_snapshot:
            data["environment_mesh_snapshot"] = self.environment_mesh_snapshot

        # Save to JSON
        with open(self.output_file, 'w') as f:
            json.dump(data, f, indent=2)

        file_size = os.path.getsize(self.output_file) / 1024 / 1024  # MB
        print(f"Saved: {self.output_file} ({file_size:.2f} MB, {len(self.frames)} frames, {len(self.frames) / self.fps:.2f}s)")


def create_collector_app(
    output_dir: str = "motion_data",
    session_name: str = None,
    duration: int = None,
    fps: int = 30,
    collect_mesh: bool = False
):
    """
    Create a Vuer app for collecting body tracking data

    Args:
        output_dir: Directory to save collected data
        session_name: Name of the recording session
        duration: Auto-stop after this many seconds (None = manual stop)
        fps: Frames per second for data collection
        collect_mesh: Enable environment mesh collection
    """
    app = Vuer()
    collector = BodiesDataCollectorV2(output_dir, session_name, collect_mesh)
    collector.fps = fps
    collector.duration = duration  # Store duration in collector

    # Create event for precise timing
    recording_started_event = asyncio.Event()
    collector.recording_started_event = recording_started_event

    # Debug: print configuration
    print(f"   Session: {session_name if session_name else 'auto-generated'}")
    print(f"   Duration: {duration}s" if duration else "   Duration: unlimited (manual stop)")
    print(f"   FPS: {fps}")
    print(f"   Mesh collection: {'enabled' if collect_mesh else 'disabled'}")
    print()

    # Create auto-stop timer task
    async def auto_stop_timer():
        """Background task to auto-stop recording after duration"""
        if collector.duration is None:
            return

        # Wait for recording to start (using Event for precise timing)
        await recording_started_event.wait()

        # Use actual time for precision
        import time
        start_time = time.time()
        end_time = start_time + collector.duration

        while time.time() < end_time and collector.recording:
            await asyncio.sleep(0.1)  # Check every 100ms for precision

        # Stop recording if still running
        if collector.recording:
            collector.stop_recording()
            await asyncio.sleep(1)
            os._exit(0)

    # Register auto-save on exit
    atexit.register(collector.auto_save_on_exit)

    # Handle Ctrl+C gracefully
    def signal_handler(signum, frame):
        collector.auto_save_on_exit()
        exit(0)

    signal.signal(signal.SIGINT, signal_handler)

    @app.add_handler("BODY_TRACKING_MOVE")
    async def on_body_move(event, session):
        """Handle incoming body tracking data"""
        if event.value:
            timestamp = getattr(event, 'ts', None)
            collector.add_frame(event.value, timestamp)

    @app.add_handler("WEBXR_MESH_UPDATE")
    async def on_mesh_update(event, session):
        """Handle environment mesh updates"""
        if event.value and collector.collect_mesh:
            try:
                # Convert event.value to plain Python dict
                value = event.value
                if not isinstance(value, dict):
                    value = json.loads(json.dumps(value, default=str))

                collector.update_environment_mesh(value)
            except Exception as e:
                print(f"Error processing mesh: {e}")

    @app.spawn(start=True)
    async def main(session: VuerSession):
        """Setup the scene with Bodies component"""
        print(f"Session connected: {session}")

        # Add Bodies component
        session.upsert(
            Bodies(
                key="body_tracking",
                stream=True,
                fps=fps,
                hideIndicate=False,
                showFrame=True,
                frameScale=0.02,
            ),
            to="children",
        )

        # Add WebXRMesh component if mesh collection is enabled
        if collector.collect_mesh:
            session.upsert(
                WebXRMesh(
                    key="environment_mesh",
                    autoUpdate=True,
                ),
                to="children",
            )

        # Start auto-stop timer in background (if duration is set)
        timer_task = asyncio.create_task(auto_stop_timer())

        # Always start with VR detection (wait for valid data)
        await asyncio.sleep(1)  # Small delay for UI to render
        collector.start_recording(wait_for_data=True)

        # Wait for recording to start (VR detected) with timeout
        print("Waiting for VR mode...")
        wait_timeout = 300  # 5 minutes
        waited = 0
        while collector.waiting_for_data and waited < wait_timeout:
            await asyncio.sleep(1)
            waited += 1

        if collector.waiting_for_data:
            print("Timeout: No VR data received")
            while True:
                await asyncio.sleep(1)
            return

        if not collector.recording:
            print("Recording not started")
            while True:
                await asyncio.sleep(1)
            return

        print("Recording...")

        # Wait for recording to complete (either auto-stop or manual)
        while collector.recording:
            await asyncio.sleep(1)


    return app


def main():
    parser = argparse.ArgumentParser(
        description="Collect WebXR body tracking data from VR devices (Enhanced V2)"
    )
    parser.add_argument(
        "--session-name",
        type=str,
        default=None,
        help="Name for this recording session (default: auto-generated timestamp)"
    )
    parser.add_argument(
        "--output-dir",
        type=str,
        default="motion_data",
        help="Directory to save collected data (default: motion_data)"
    )
    parser.add_argument(
        "--duration",
        type=int,
        default=None,
        help="Auto-stop after N seconds of recording (optional)"
    )
    parser.add_argument(
        "--fps",
        type=int,
        default=30,
        help="Frames per second for data collection (default: 30)"
    )
    parser.add_argument(
        "--port",
        type=int,
        default=8012,
        help="Server port (default: 8012)"
    )
    parser.add_argument(
        "--collect-mesh",
        action="store_true",
        help="Enable environment mesh collection"
    )

    args = parser.parse_args()

    print(f"Server: http://localhost:{args.port}")
    if args.collect_mesh:
        print("Environment mesh: enabled")

    # Create and run the app
    app = create_collector_app(
        output_dir=args.output_dir,
        session_name=args.session_name,
        duration=args.duration,
        fps=args.fps,
        collect_mesh=args.collect_mesh
    )

    app.run(port=args.port)


if __name__ == "__main__":
    main()
