from cmx import doc
import os
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# Procedural Rendering (Async)

Our RPC implementation is very performant. This also support non-blocking, multi-session 
rendering. To test this, you can fire up a few identical browser sessions.
"""

with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from asyncio import sleep
    from io import BytesIO

    import numpy as np
    import PIL.Image as PImage

    from vuer import Vuer, VuerSession
    from vuer.schemas import (
        Sphere,
        DefaultScene,
        Plane,
    )

    app = Vuer()

    @app.spawn(start=True)
    async def show_heatmap(sess: VuerSession):
        sess.set @ DefaultScene(
            Plane(
                key="ground-plane",
                args=[10, 10, 10],
                position=[0, 0, 0],
                rotation=[0, 0, 0],
                materialType="depth",
                material=dict(color="green", side=2),
            ),
            Sphere(
                key="sphere",
                args=[0.1, 200, 200],
                position=[0.2, 0, 0.1],
                rotation=[0, 0, 0],
                materialType="depth",
                outlines=dict(angle=0, thickness=0.002, color="white"),
            ),
            # hide the helper to only render the objects.
            show_helper=False,
        )

        i = 0
        while True:
            i += 1
            h = 0.25 - (0.00866 * (i % 120 - 60)) ** 2
            position = [0.2, 0.0, 0.1 + h]
            # phase = 2 * np.pi * i / 240
            # position = [0.15 + 0.25 * np.sin(phase), 0.1, 0.2 * np.cos(phase)]
            sess.update @ Sphere(
                key="sphere",
                args=[0.1, 20, 20],
                position=position,
                rotation=[0, 0, 0],
                materialType="depth",
            )

            if i == 0:
                await sleep(1.0)

            # this try/catch for timeout is important, because the first RPC
            #   tends to timeout due to the frontend not having enough time to
            #   finish loading the scene.
            try:
                response = await sess.grab_render(quality=0.95, downsample=1)

                import cv2

                # add you render saving logic here.
                buff = response.value["frame"]

                pil_image = PImage.open(BytesIO(buff))
                img = np.array(pil_image)

                # reverse the channel order for open-cv
                img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
                cv2.imshow("frame", img_bgr)
                if cv2.waitKey(1) == ord("q"):
                    exit()

            except asyncio.TimeoutError as e:
                print("render grab timed out.")


doc.flush()
