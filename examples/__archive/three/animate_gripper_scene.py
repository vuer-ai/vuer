from asyncio import sleep

import numpy as np

from vuer import Vuer
from vuer.events import Set, Update, Frame
from vuer.schemas import Scene, Ply, Gripper, SkeletalGripper, Movable

doc = Vuer(
    # domain="ws://localhost:8012",
    # domain="https://dash.ml/demos/vqn-dash/three",
    # reconnect=True,
    # debug=True,
)


@doc.bind(start=True)
async def show_heatmap():
    scene = Scene(
        Ply(
            src="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences"
                "/2023-01-20_23-08-27/orange/mask_in.ply",
            position=[0, 0.4, 0], rotation=[-0.5 * np.pi, 0, -0.5 * np.pi]
        ),
        Movable(
            Gripper(pinchWidth=0.04, skeleton=False, axes=True, position=[0, .2, 0], key='gripper'),
        ),
        SkeletalGripper(movable=True, pinchWidth=0.04, position=[0, .2, 0], key='skeleton'),
        style={"width": "100vw", "height": "900px"},
    )

    i = 0
    event = yield Set(scene)
    print(vars(event))
    while event != "TERMINAL":
        i += 1
        phase = 2 * np.pi * i / 50
        pinch = 0.033 * (i % 30)
        # position = [0.2 * np.sin(phase), .2, 0.2 * np.cos(phase)]
        event = yield Frame(Update(
            Gripper(pinchWidth=0.04 * (1 - pinch), axes=True, position=[0, 0.2, 0], key="gripper"),
        ))
        event = yield Frame(Update(
            SkeletalGripper(pinchWidth=0.04 * (1 - pinch), axes=True, position=[-0.2, 0.2, 0], key="skeleton"),
        ))

        await sleep(0.0166)
