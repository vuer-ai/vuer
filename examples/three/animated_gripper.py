import math
import uuid
from time import sleep

import numpy as np

from tassa import Tassa
from tassa.events import Set, Update, Frame
from tassa.schemas import Scene, Ply, Gripper, SkeletalGripper, Camera

doc = Tassa(
    "ws://localhost:8012",
    uri="http://localhost:8000/tassa",
    reconnect=True,
    debug=True,
)


# doc = Tassa(reconnect=True)
# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    scene = Scene(
        # Camera(fov=75, far=20, aspect=1.6, position=[0, 1, 1], rotation=[0, 0, 0], helper=True, default=False),
        Ply(
            src="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences"
            "/2023-01-20_23-08-27/orange/mask_in.ply",
            position=[0, 0.4, 0],
            rotation=[-0.5 * np.pi, 0, -0.5 * np.pi],
        ),
        Gripper(pinchWidth=0.04, skeleton=False, axes=True, position=[0, 0.2, 0], key="gripper"),
        SkeletalGripper(movable=True, pinchWidth=0.04, position=[0, 0.2, 0], key="skeleton"),
        # Camera(fov=75, far=20, aspect=1.6),
        style={"width": "100vw", "height": "900px"},
    )

    i = 0
    event = yield Frame(Set(scene))
    print(vars(event))
    while event != "TERMINAL":
        if event == "CAMERA_MOVE":
            print(vars(event))
        i += 1
        pinch = 0.3 * math.sin(2 * np.pi * i / 10)
        # position = [0.2 * np.sin(phase), .2, 0.2 * np.cos(phase)]
        event = yield Frame(
            Update(
                Gripper(pinchWidth=0.04 * (1 - pinch), axes=True, position=[0, 0.2, 0], key="gripper"),
            )
        )
        event = yield Frame(
            Update(
                SkeletalGripper(pinchWidth=0.04 * (1 - pinch), axes=True, position=[-0.2, 0.2, 0], key="skeleton"),
            )
        )
        sleep(0.0166)
