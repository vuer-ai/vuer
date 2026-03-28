"""
SceneStoreRTC Example — Orbiting Sphere around a Box

Demonstrates how to use SceneStoreRTC (backed by vuer_rtc) for
CRDT-based real-time collaborative scene management. The scene contains:

  - A static box at the center
  - A sphere that continuously orbits around the box

Architecture:
  - SceneStoreRTC hooks into the existing Vuer event system via add_handler.
  - All CRDT events share a single etype (RTC) and are dispatched by mtype:
      mtype: "state"     — full snapshot + journal (sent on subscribe)
      mtype: "crdt"      — server-originated CRDT message (Python commit)
      mtype: "broadcast" — forwarded CRDT message from another client
      mtype: "ack"       — acknowledgment of a client message
  - Each new VuerSession calls store.subscribe(session) to receive current
    state and future updates.
  - The animation loop runs once globally, NOT per-session.

Wire protocol (browser):
  - Server -> Client: {etype: "RTC", data: {mtype: "crdt", msg: {...}}}
  - Client -> Server: {etype: "RTC", value: {mtype: "crdt", msg: {...}}}

Run:
    python docs/examples/scene_store_rtc_example.py
"""

import asyncio
import math

from vuer import Vuer, VuerSession
from vuer.schemas import (
    Box, Grid, HemisphereLightStage, Plane, SceneCamera, SceneCameraControl, Sphere,
)
from vuer.scene_rtc import SceneStoreRTC

app = Vuer()
store = SceneStoreRTC(app)

# ------------------------------------------------------------------
# Pre-populate the scene (before any clients connect)
# ------------------------------------------------------------------

# Each insert_node() call commits immediately — node.insert ops for the
# same parent share the key:path "scene:children", so they cannot be
# batched into a single commit via edit_batch().
store.insert_node(Grid(key="grid"))
store.insert_node(HemisphereLightStage(key="light-stage"))
store.insert_node(SceneCamera(key="SceneCamera", position=[0, 5, 10]))
store.insert_node(SceneCameraControl(key="SceneCameraControl", makeDefault=True))
store.insert_node(
    Plane(
        key="ground", args=[10, 10], rotation=[-math.pi / 2, 0, 0],
        materialType="standard", material={"color": "#444444"},
    )
)
store.insert_node(
    Box(
        key="box", args=[1, 1, 1], position=[0, 0.5, 0],
        materialType="standard", material={"color": "#e74c3c"},
    )
)
store.insert_node(
    Sphere(
        key="sphere", args=[0.4, 32, 32], position=[3, 1, 0],
        materialType="standard", material={"color": "#3498db"},
    )
)


# ------------------------------------------------------------------
# Animation loop — runs once globally as a background task
# ------------------------------------------------------------------

_orbit_started = False


async def orbit_loop():
    """Update the sphere position. Runs exactly once."""
    t = 0.0
    radius = 3.0
    speed = 1.0

    while True:
        x = radius * math.cos(t * speed)
        z = radius * math.sin(t * speed)
        y = 1.0 + 0.5 * math.sin(t * speed * 2)

        store.set_property("sphere", "position", "vector3.set", [x, y, z])

        t += 0.05
        await asyncio.sleep(0.03)


# ------------------------------------------------------------------
# Per-session handler — subscribe and start the animation once
# ------------------------------------------------------------------

@app.spawn(start=True)
async def main(session: VuerSession):
    global _orbit_started

    # Subscribe — auto-unsubscribes when session disconnects
    async with store.subscribe(session):
        # Start the animation loop once (first client triggers it)
        if not _orbit_started:
            _orbit_started = True
            asyncio.get_running_loop().create_task(orbit_loop())

        # Keep session alive
        while True:
            await asyncio.sleep(1.0)
