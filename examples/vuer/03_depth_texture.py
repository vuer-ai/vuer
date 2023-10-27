from asyncio import sleep

import numpy as np

from vuer import Vuer
from vuer.events import Set, Update, Frame
from vuer.schemas import Scene, Ply, Gripper, SkeletalGripper, Movable, Box, Sphere, group

doc = Vuer(
    # domain="ws://localhost:8012",
    domain="https://dash.ml/vuer",
    queries=dict(
        reconnect=True,
        grid=False,
        backgroundColor="black",
    ),
    # debug=True,
)


@doc.bind(start=True)
async def show_heatmap():
    scene = Scene(
        group(
            Box(
                key="box",
                args=[0.2, 0.2, 0.2],
                position=[0, 0.1, 0],
                rotation=[0, 0, 0],
                materialType="depth",
                outlines=dict(angle=0, thickness=0.005, color="white"),
            ),
            Sphere(
                key="sphere",
                args=[0.1, 200, 200],
                position=[0.2, 0.1, 0],
                rotation=[0, 0, 0],
                materialType="depth",
                outlines=dict(angle=0, thickness=0.001, color="white"),
            ),
            key="group",
        )
    )

    i = 0
    event = yield Set(scene)
    print(vars(event))
    while event != "TERMINAL":
        i += 1
        phase = 2 * np.pi * i / 240
        # # position = [0.1 + 0.5 * np.sin(phase), 0, 0.5 * np.cos(phase)]
        # # h = 1 - ((t % 120 + 60) / 60) ** 2
        # h = 0.6
        position = [0.2, 0.1, 0]
        event = yield Frame(
            Update(
                Sphere(key="sphere", args=[0.1, 20, 20], position=position, rotation=[0, 0, 0], materialType="depth", ),
            )
        )

        await sleep(0.006)
