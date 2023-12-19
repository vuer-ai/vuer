from asyncio import sleep
from io import BytesIO

import numpy as np
import PIL.Image as PImage

from vuer import Vuer
from vuer.events import ClientEvent
from vuer.schemas import (
    Box,
    Sphere,
    DefaultScene,
    CameraView, Plane,
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
async def show_heatmap(ws):
    app.set @ DefaultScene(
        rawChildren=[
            CameraView(
                fov=50,
                width=320,
                height=240,
                key="ego",
                position=[-0.5, 1.25, 0.5],
                rotation=[-0.4 * np.pi, -0.1 * np.pi, 0.15 + np.pi],
                stream="frame",
                fps=30,
                showFrustum=True,
                downsample=1,
                # dpr=1,
            ),
        ],
        # hide the helper to only render the objects.
        show_helper=False,
    )

    app.add @ Box(
        key="box",
        args=[0.2, 0.2, 0.2],
        position=[0, 0, 0.1],
        rotation=[0, 0, 0],
        materialType="depth",
        meterial=dict(color="green"),
        outlines=dict(angle=0, thickness=0.005, color="white"),
    )

    app.add @ Plane(
        key="ground-plane",
        args=[10, 10, 10],
        position=[0, 0, 0],
        rotation=[0, 0, 0],
        materialType="depth",
        meterial=dict(color="green", side=2),
    )

    app.add @ Sphere(
        key="sphere",
        args=[0.1, 200, 200],
        position=[0.2, 0, 0.1],
        rotation=[0, 0, 0],
        materialType="depth",
        outlines=dict(angle=0, thickness=0.002, color="white"),
    ),

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
        ),

        await sleep(0.014)


counter = 0


async def collect_render(event: ClientEvent, _):
    global counter
    import cv2

    # add you render saving logic here.
    counter += 1
    if counter % 1 == 0:
        value = event.value

        buff = value['frame']
        pil_image = PImage.open(BytesIO(buff))
        img = np.array(pil_image)
        img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        cv2.imshow('frame', img_bgr)
        if cv2.waitKey(1) == ord('q'):
            exit()


app.add_handler("CAMERA_VIEW", collect_render)
app.run()
