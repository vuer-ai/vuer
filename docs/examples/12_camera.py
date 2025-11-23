from cmx import doc
from asyncio import sleep
import os
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Visualizing Camera Frustums

You can programmatically insert camera frustums into the scene. Here
we stress-test vuer by inserting 1728 frustums.

![](figures/12_camera.jpg)

## Code Example
"""

with doc, doc.skip if MAKE_DOCS else nullcontext():
    from vuer import Vuer, VuerSession
    from vuer.schemas import DefaultScene, Frustum, OrbitControls

    n, N = 12, 12**3

    app = Vuer()

    @app.spawn(start=True)
    async def main(sess: VuerSession):
        sess.set @ DefaultScene(
            *[
                Frustum(
                    key=f"frustum-{i}",
                    scale=10,
                    showImagePlane=True,
                    showFrustum=False,
                    showFocalPlane=False,
                    position=[i % n, (i // n) % n, (i // n**2) % n],
                    rotation=[0.5 * 3.14, 0, 0],
                )
                for i in range(N)
            ],
            up=[0, 0, 1],
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        while True:
            await sleep(0.01)
