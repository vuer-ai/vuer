import os
from cmx import doc
from contextlib import nullcontext


MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# Arrows

This example visualizes a red arrow.

![marker light](figures/16_arrow.png)

"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep

    from vuer import Vuer, VuerSession
    from vuer.schemas import DefaultScene, Arrow, OrbitControls

    app = Vuer()

    n = 10
    N = 1000

    arrow = Arrow(
        position=[0, 0.25, 0],
        rotation=[0, -0.5 * 3.14, 0],
        scale=1,
    )

    @app.spawn(start=True)
    async def main(proxy: VuerSession):
        proxy.set @ DefaultScene(
            arrow,
            up=(0, 0, 1),
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        # keep the main session alive.
        while True:
            await sleep(16)


doc.flush()
