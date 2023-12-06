from asyncio import sleep

import numpy as np

from vuer import Vuer
from vuer.events import Set, Update, Frame
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
    app.set @ DefaultScene()

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


app.run()
