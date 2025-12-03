import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Grid

The `Grid` component (Ground Grid Plane) displays a ground reference grid for spatial orientation. It's included by default in `DefaultScene` to help visualize the ground plane and provide spatial reference.

This is ideal for:
- Providing ground plane reference
- Spatial orientation in 3D scenes
- Debugging object placement
- Visualizing scale and distance

## Basic Usage

A minimal example that creates a scene with a grid:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from vuer import Vuer
    from vuer.schemas import Scene, Grid, OrbitControls

    app = Vuer()

    @app.spawn(start=True)
    async def main(sess):
        sess.set @ Scene(
            # Your objects here

            rawChildren=[Grid(key="grid")],
            grid=True,  # Shorthand for adding Grid
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        await sess.forever()

doc.flush()
