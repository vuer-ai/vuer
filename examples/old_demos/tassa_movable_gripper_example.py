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
                Ply(src="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/orange/mask_in.ply",
                    position=[0, 0.4, 0], rotation=[-0.5 * np.pi, 0, -0.5 * np.pi]),
                offset=[0, -0.2, 0]
            ),
            Movable(
                Gripper(movable=True, pinchWidth=1, skeleton=False, axes=True,
                        position=[0, .0, 0], key="gripper", ),
                offset=[0, .0, 0],
                key="gripper-movable",
            ),
            style={"width": "100vw", "height": "900px"},
            key='alan',
        ),
        Text("hello", key="placeholder"),
    )

    i = 0
    event = yield Frame(Set(page))
    while event != "TERMINAL":
        i += 1
        phase = 2 * np.pi * i / 50
        position = [0.2 * np.sin(phase), .2, 0.2 * np.cos(phase)]
        position_pivot = [0.2 * np.sin(phase), .2, 0.2 * np.cos(phase)]
        event = yield Frame(Update(
            Movable(
                Gripper(movable=True, pinchWidth=1, skeleton=False, axes=True,
                        position=position, key="gripper", ),
                offset=position_pivot,
                annotations=True,
                key="gripper-movable",
            ),
        ))
        sleep(0.0166)
