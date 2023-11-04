from asyncio import sleep

import numpy as np

from vuer import Vuer
from vuer.events import Set, Update, Frame, ClientEvent
from vuer.schemas import (
    Scene,
    Ply,
    Gripper,
    SkeletalGripper,
    Movable,
    Box,
    Sphere,
    group,
    DefaultScene,
    CameraView,
)

app = Vuer(
    # domain="ws://localhost:8012",
    domain="https://dash.ml/vuer",
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
                rotation=[-0.35 * np.pi, -0.1 * np.pi, -0.1 * np.pi],
                stream="frame",
                showFrustum=True,
                dpr=1,
            ),
        ],
        # hide the helper to only render the objects.
        show_helper=False,
    )

    app.add @ Box(
        key="box",
        args=[0.2, 0.2, 0.2],
        position=[0, 0.1, 0],
        rotation=[0, 0, 0],
        materialType="phong",
        meterial=dict(color="green"),
        outlines=dict(angle=0, thickness=0.005, color="white"),
    )

    app.add @ Sphere(
        key="sphere",
        args=[0.1, 200, 200],
        position=[0.2, 0.1, 0],
        rotation=[0, 0, 0],
        materialType="standard",
        outlines=dict(angle=0, thickness=0.002, color="white"),
    ),

    i = 0
    while True:
        i += 1
        h = 0.25 - (0.00866 * (i % 120 - 60)) ** 2
        position = [0.2, 0.1 + h, 0]
        # phase = 2 * np.pi * i / 240
        # position = [0.15 + 0.25 * np.sin(phase), 0.1, 0.2 * np.cos(phase)]
        app.update @ Sphere(
            key="sphere",
            args=[0.1, 20, 20],
            position=position,
            rotation=[0, 0, 0],
            materialType="standard",
        ),

        await sleep(0.014)


counter = 0


async def collect_render(event: ClientEvent, _):
    global counter
    # import matplotlib.pyplot as plt
    import cv2

    # add you render saving logic here.
    counter += 1
    if counter % 1 == 0:
        value = event.value
        width = value['width']
        height = value['height']
        dpr = value['dpr']

        img = value['frame']
        img = np.frombuffer(img, np.uint8).reshape(height * dpr, width * dpr, 4)
        # todo: test out the locations of these entries, implement on js side.
        img = img[::-dpr][:, ::dpr]

        img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        cv2.imshow('frame', img_bgr)
        if cv2.waitKey(1) == ord('q'):
            exit()


app.add_handler("RENDER", collect_render)
app.run()
