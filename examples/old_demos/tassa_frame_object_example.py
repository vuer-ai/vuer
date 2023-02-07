import uuid
from time import sleep

import numpy as np

from tassa import Tassa
from tassa.events import Set, Update, Frame
from tassa.schemas import Page, Header1, Paragraph, ImageCls, Text, InputBox, Slider, ImageUpload, Button, \
    Scene, Pcd, Ply, Glb, PointCloud, div, Gripper, Pivot, Movable

doc = Tassa("ws://localhost:8012", reconnect=True, debug=True)


# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    page = Page(
        Scene(
            Movable(
                Ply(url="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/orange/mask_in.ply",
                    position=[0, 0.4, 0], rotation=[-0.5 * np.pi, 0, -0.5 * np.pi]),
                offset=[0, -0.2, 0]
            ),
            Gripper(movable=True, pinchWidth=1, skeleton=False, axes=True,
                    position=[0, .2, 0], key="gripper", ),
            style={"width": "100vw", "height": "900px"},
            key='alan',
        )
    )

    i = 0
    event = yield Frame(Set(page))
    while event != "TERMINAL":
        i += 1
        phase = 2 * np.pi * i / 50
        position = [0.2 * np.sin(phase), .2, 0.2 * np.cos(phase)]
        event = yield Frame(Update(
            Gripper(movable=True, pinchWidth=1, skeleton=False, axes=True,
                    position=position, key="gripper", ),
            style={"width": "100vw", "height": "900px"},
        ))
        sleep(0.0166)
