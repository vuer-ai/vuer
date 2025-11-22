import os
from contextlib import nullcontext
from cmx import doc

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# Plane Primitive

This example shows you how to construct a plane and have it visible on both sides.

We pass in `Plane.material.side=2` to the `Plane` constructor to make it visible on both sides.

"""

with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep

    from vuer import Vuer
    from vuer.events import Set
    from vuer.schemas import DefaultScene, Plane, OrbitControls

    app = Vuer()

    # use `start=True` to start the app immediately
    @app.spawn(start=True)
    async def main(session):
        session @ Set(
            DefaultScene(
                Plane(material=dict(side=2)),
                bgChildren=[
                    OrbitControls(key="OrbitControls")
                ],
            ),
        )

        while True:
            await sleep(1.0)


doc.flush()
