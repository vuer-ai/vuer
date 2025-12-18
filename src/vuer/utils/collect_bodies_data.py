#!/usr/bin/env python3
"""
WebXR Bodies Data Collector

This script collects raw WebXR body tracking data from VR devices
and saves it to JSON files for later conversion to SMPL format.

Usage:
    python collect_bodies_data.py --session-name recording1 --duration 10

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
from datetime import datetime
from pathlib import Path
from typing import List, Dict, Any
import argparse

from vuer import Vuer, VuerSession
from vuer.schemas import Bodies


class BodiesDataCollector:
    """Collects WebXR body tracking data and saves to JSON"""

    def __init__(self, output_dir: str = "bodies_data", session_name: str = None):
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
        self.fps = 30

        print(f"📁 Output directory: {self.output_dir}")
        print(f"📝 Session name: {self.session_name}")
        print(f"💾 Output file: {self.output_file}")

    def add_frame(self, bodies_data: Dict[str, Any], timestamp: float = None):
        """Add a frame to the recording"""
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

            # Print progress more frequently for feedback
            if len(self.frames) == 1:
                print(f"✅ First frame captured! Recording in progress...")
            elif len(self.frames) % 30 == 0:  # Every second at 30fps
                elapsed = len(self.frames) / self.fps
                print(f"⏱️  Recording: {len(self.frames)} frames ({elapsed:.1f}s)")

    def start_recording(self):
        """Start recording frames"""
        self.recording = True
        self.start_time = datetime.now()
        self.frames.clear()
        print(f"🔴 Recording started at {self.start_time.strftime('%H:%M:%S')}")

    def stop_recording(self):
        """Stop recording and save to file"""
        if not self.recording:
            return

        self.recording = False
        end_time = datetime.now()
        duration = (end_time - self.start_time).total_seconds()

        print(f"⏹️  Recording stopped")
        print(f"📊 Collected {len(self.frames)} frames in {duration:.2f}s")

        self.save()

    def auto_save_on_exit(self):
        """Auto-save when program exits (called by atexit)"""
        if self.recording and len(self.frames) > 0:
            print("\n⚠️  Program exiting, auto-saving recorded data...")
            self.recording = False
            self.save()

    def save(self):
        """Save collected frames to JSON file"""
        if not self.frames:
            print("⚠️  No frames to save")
            return

        data = {
            "session_name": self.session_name,
            "fps": self.fps,
            "frame_count": len(self.frames),
            "duration": len(self.frames) / self.fps,
            "timestamp": self.start_time.isoformat() if self.start_time else None,
            "frames": self.frames
        }

        # Save to JSON
        with open(self.output_file, 'w') as f:
            json.dump(data, f, indent=2)

        file_size = os.path.getsize(self.output_file) / 1024 / 1024  # MB
        print(f"✅ Saved to: {self.output_file}")
        print(f"📦 File size: {file_size:.2f} MB")
        print(f"📈 Frames: {len(self.frames)}")
        print(f"⏱️  Duration: {len(self.frames) / self.fps:.2f}s")

        # Print next steps
        print("\n" + "="*60)
        print("🎯 Next steps:")
        print(f"1. Convert to SMPL:")
        print(f"   cd /Users/57block/repository/vuer/vuer")
        print(f"   ./scripts/convert_and_deploy.sh {self.session_name} ik")
        print("="*60 + "\n")


def create_collector_app(
    output_dir: str = "bodies_data",
    session_name: str = None,
    duration: int = None,
    auto_start: bool = False,
    fps: int = 30
):
    """
    Create a Vuer app for collecting body tracking data

    Args:
        output_dir: Directory to save collected data
        session_name: Name of the recording session
        duration: Auto-stop after this many seconds (None = manual stop)
        auto_start: Start recording immediately
        fps: Frames per second for data collection
    """
    app = Vuer()
    collector = BodiesDataCollector(output_dir, session_name)
    collector.fps = fps

    # Register auto-save on exit
    atexit.register(collector.auto_save_on_exit)

    # Handle Ctrl+C gracefully
    def signal_handler(signum, frame):
        print("\n⚠️  Received interrupt signal...")
        collector.auto_save_on_exit()
        exit(0)

    signal.signal(signal.SIGINT, signal_handler)

    @app.add_handler("BODY_TRACKING_MOVE")
    async def on_body_move(event, session):
        """Handle incoming body tracking data"""
        print(f"📥 Received BODY_TRACKING_MOVE event")
        if event.value:
            timestamp = getattr(event, 'ts', None)
            print(f"   ✓ Event has {len(event.value)} joints")
            collector.add_frame(event.value, timestamp)
        else:
            print(f"   ✗ Event value is empty")

    @app.spawn(start=True)
    async def main(session: VuerSession):
        """Setup the scene with Bodies component"""
        print("\n" + "="*60)
        print("🎮 WebXR Bodies Data Collector")
        print("="*60)
        print("\n📱 Instructions:")
        print("  1. Open this URL on your VR headset")
        print("  2. Enter VR mode")
        print("  3. Recording will start automatically after 2 seconds")
        print("  4. Perform your movements")
        print("  5. Press Ctrl+C to stop and save")
        print("\n" + "="*60 + "\n")

        print(f"✅ Session connected: {session}")
        print(f"📡 Waiting for client connection...")

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

        # Add instructions UI
        session.upsert @ """
        <div style="position: absolute; top: 20px; left: 20px;
                    background: rgba(0,0,0,0.7); color: white;
                    padding: 20px; border-radius: 10px; font-family: monospace;">
            <h2>🎬 Body Tracking Recorder</h2>
            <p>Recording will start automatically...</p>
            <p>FPS: {fps}</p>
            <p style="color: #ff6b6b;">Press Ctrl+C to stop</p>
        </div>
        """

        # Wait for VR to initialize, then auto-start recording
        print("⏳ Waiting 2 seconds for VR to initialize...")
        await asyncio.sleep(2)
        collector.start_recording()
        print("🔴 Auto-started recording")
        print("📊 Waiting for body tracking data...")

        # Show recording indicator
        session.upsert @ """
        <div style="position: absolute; top: 20px; left: 20px;
                    background: rgba(255,0,0,0.8); color: white;
                    padding: 20px; border-radius: 10px; font-family: monospace;">
            <h2>🔴 RECORDING</h2>
            <p>FPS: {fps}</p>
            <p style="color: #ffff00;">Press Ctrl+C to stop and save</p>
        </div>
        """

        # Auto-stop if duration specified
        if duration is not None:
            await asyncio.sleep(duration)
            collector.stop_recording()
            print(f"⏹️  Auto-stopped after {duration}s")

            # Show saved indicator
            session.upsert @ """
            <div style="position: absolute; top: 20px; left: 20px;
                        background: rgba(0,255,0,0.8); color: white;
                        padding: 20px; border-radius: 10px; font-family: monospace;">
                <h2>✅ SAVED</h2>
                <p>Recording completed</p>
            </div>
            """
            return

        # Keep the session alive until Ctrl+C
        while True:
            await asyncio.sleep(1)

    return app


def main():
    parser = argparse.ArgumentParser(
        description="Collect WebXR body tracking data from VR devices"
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
        default="bodies_data",
        help="Directory to save collected data (default: bodies_data)"
    )
    parser.add_argument(
        "--duration",
        type=int,
        default=None,
        help="Auto-stop after N seconds (requires --auto-start)"
    )
    parser.add_argument(
        "--auto-start",
        action="store_true",
        help="Start recording automatically (useful with --duration)"
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

    args = parser.parse_args()

    print("\n" + "="*60)
    print("🎮 WebXR Bodies Data Collector")
    print("="*60)
    print(f"🌐 Starting server on port {args.port}...")
    print(f"📡 Waiting for client connection...")
    print("\n📱 Instructions:")
    print(f"  1. Open http://localhost:{args.port} on your VR headset")
    print("     (or use ngrok/localtunnel for HTTPS)")
    print("  2. Enter VR mode")
    print("  3. Recording will start automatically")
    print("\n" + "="*60 + "\n")

    # Create and run the app
    app = create_collector_app(
        output_dir=args.output_dir,
        session_name=args.session_name,
        duration=args.duration,
        auto_start=args.auto_start,
        fps=args.fps
    )

    app.run(port=args.port)


if __name__ == "__main__":
    main()
