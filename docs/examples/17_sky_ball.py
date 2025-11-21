from cmx import doc
import os
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# Showing 360 Views with a Sky Ball

This example requires a equirectangular image (shown below), which is then
mapped to a sphere as a texture. 

![equirectangular image](figures/farm_house.jpg)

Place the `[farm_house.jpg](figures/farm_house.jpg)` in the path pointed to
by the `static_root` argument of the `Vuer` class. The vuer front end will
try to load from the url `http://localhost:8012/static/farm_house.jpg`.

Here is the expected result:
![marker light](figures/17_sky_ball.png)
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    import numpy as np

    from vuer import Vuer, VuerSession
    from vuer.schemas import DefaultScene, Sphere

    app = Vuer(static_root="figures")

    n = 10
    N = 1000

    sphere = Sphere(
        args=[1, 32, 32],
        materialType="standard",
        material={"map": "http://localhost:8012/static/farm_house.jpg", "side": 1},
        position=[0, 0, 0],
        rotation=[0.5 * np.pi, 0, 0],
    )

    @app.spawn(start=True)
    async def main(proxy: VuerSession):
        proxy.set @ DefaultScene(sphere)

        # keep the main session alive.
        while True:
            await sleep(10)


doc.flush()
