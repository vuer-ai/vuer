import asyncio
from asyncio import sleep
from io import BytesIO

import numpy as np
import PIL.Image as PImage

from vuer import Vuer
from vuer.events import ClientEvent, GrabRender
from vuer.schemas import (
    Box,
    Sphere,
    DefaultScene,
    CameraView,
    Plane,
)

app = Vuer(
    queries=dict(
        reconnect=True,
        grid=False,
        backgroundColor="black",
    ),
    # debug=True,
)


@app.spawn
async def show_heatmap(ws_id):
    app.set @ DefaultScene(
        Plane(
            key="ground-plane",
            args=[10, 10, 10],
            position=[0, 0, 0],
            rotation=[0, 0, 0],
            materialType="depth",
            meterial=dict(color="green", side=2),
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
        app.update @ Sphere(
            key="sphere",
            args=[0.1, 20, 20],
            position=position,
            rotation=[0, 0, 0],
            materialType="depth",
        )

        if i == 0:
            await sleep(1.0)

        try:
            response = await app.grab_render(quality=0.95, downsample=1)

            import cv2

            # add you render saving logic here.
            value = response.value

            buff = value['frame']
            # print(buff)
            pil_image = PImage.open(BytesIO(buff))
            img = np.array(pil_image)
            img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            cv2.imshow('frame', img_bgr)
            if cv2.waitKey(1) == ord('q'):
                exit()

        except asyncio.TimeoutError as e:
            print("render grab timed out.")




counter = 0

# async def collect_render(event: ClientEvent, _):
#     global counter
#     # import matplotlib.pyplot as plt
#     import cv2
#
#     # add you render saving logic here.
#     counter += 1
#     if counter % 1 == 0:
#         value = event.value
#         width = value['width']
#         height = value['height']
#         dpr = value['dpr']
#
#         buff = value['frame']
#         # print(buff)
#         pil_image = PImage.open(BytesIO(buff))
#         img = np.array(pil_image)[::-1]
#         img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
#         cv2.imshow('frame', img_bgr)
#         if cv2.waitKey(1) == ord('q'):
#             exit()


# app.add_handler("RENDER", collect_render)
app.run()
