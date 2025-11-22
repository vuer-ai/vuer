import os
from contextlib import nullcontext

from cmx import doc

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# Loading URDF from the Web

This example demonstrates how to load and display a **URDF** file directly from a URL.
![](figures/urdf.png)

## Code Example
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    from math import pi

    from vuer import Vuer
    from vuer.schemas import DefaultScene, Movable, OrbitControls, Urdf

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            # Movable wrapper allows the user to drag and reposition the robot
            Movable(
                Urdf(
                    # Load URDF directly from a URL
                    src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf",
                    jointValues={},
                    # Rotate to correct orientation (model is upside-down by default)
                    rotation=[pi, 0, 0],
                ),
                position=[0, 0, 0.15],
            ),
            grid=True,
            collapseMenu=True,
            # Z-up coordinate system
            up=[0, 0, 1],
            bgChildren=[
                OrbitControls(key="OrbitControls"),
            ],
        )

        while True:
            await sleep(16)


doc.flush()
