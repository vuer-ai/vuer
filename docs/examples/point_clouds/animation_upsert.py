import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Point Cloud Animation (Upsert)

> **Warning**: This example is still under construction.

This example demonstrates how to animate point clouds using Vuer's `TimelineControls`
and the session-based `proxy.upsert` method. Unlike the global `app.update` approach,
this method targets a specific client session.

Key concepts:
- Using `proxy.upsert` (via `VuerSession`) to update a specific client
- Starting with an empty `DefaultScene` and dynamically adding components
- Handling `TIMELINE_STEP` events to synchronize animations
- Displaying multiple point clouds with different colors and positions

## Code Example
"""

with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio

    import numpy as np
    import open3d as o3d

    from vuer import Vuer, VuerSession
    from vuer.events import ClientEvent
    from vuer.schemas import DefaultScene, PointCloud, TimelineControls

    mesh = o3d.io.read_triangle_mesh("assets/suzanne.ply")
    vertices = np.asarray(mesh.vertices)
    faces = np.asarray(mesh.triangles)

    app = Vuer()

    infill = np.load("assets/suzanne_infill_good_traj.npy")
    surface_infill = np.load("assets/suzanne_surface_fill_only.npy")

    @app.spawn
    async def main(proxy):
        proxy.set @ DefaultScene()

        while True:
            await asyncio.sleep(1.0)

    async def frame_handle(e: ClientEvent, proxy: VuerSession):
        print("frame handle")

        step = e.value["step"]
        step = step % len(infill)

        proxy.upsert(
            TimelineControls(end=len(infill), step=step, speed=1.0, paused=False, key="timeline"),
            PointCloud(key="infill", vertices=infill[step], position=[0, 0, 0], color="red"),
            PointCloud(
                key="surface",
                vertices=surface_infill[step],
                position=[0.8, 0, 0],
                color="green",
            ),
        )
        print("updated the scene")


    app.add_handler("TIMELINE_STEP", frame_handle)
    app.start()

doc.flush()
