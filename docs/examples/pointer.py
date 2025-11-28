import os
from contextlib import nullcontext

from cmx import doc

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Interactive Pointer and Marker

> **Warning**: This example is still under construction.

This example demonstrates how to create an interactive 3D scene where users
can click on objects to place markers. It shows:

1. Loading and displaying a PLY point cloud (Porsche car model)
3. Handling pointer events to place red sphere markers at click positions

## Code Example
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    from pathlib import Path

    from vuer import Vuer, VuerSession
    from vuer.events import ClientEvent
    from vuer.schemas import Ply, Sphere

    assets_folder = Path(__file__).parent / "../../../assets"
    ply_file = "static_3d/porsche.ply"

    app = Vuer(static_root=assets_folder, port=8123)


    @app.spawn()
    async def main(sess: VuerSession):
        # Load the initial point cloud with a transformation matrix
        sess.upsert @ Ply(
            src="http://localhost:8123/static/" + ply_file,
            size=0.008,
            matrix=[1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1],
            key="porsche",
        )

        while True:
            await sleep(0.016)  # ~60fps


doc @ """
## Marker Event Handler

The `ADD_MARKER` event handler listens for pointer clicks and places a red
sphere at the clicked position. Each marker is a sphere with radius 0.1.
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():

    @app.add_handler("ADD_MARKER")
    async def on_add_marker(event: ClientEvent, sess: VuerSession):
        """Handle ADD_MARKER events by placing a red sphere at the click position."""
        print("Added marker")
        position = list(event.value["position"].values())
        sess.upsert @ Sphere(
            args=[0.1, 32, 32],  # radius, widthSegments, heightSegments
            position=position,
            material={"color": "red"},
        )

    app.start()
