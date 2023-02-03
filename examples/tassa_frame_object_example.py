import uuid
from time import sleep

import numpy as np

from tassa import Tassa
from tassa.events import Set, Update, Frame
from tassa.schemas import Page, Header1, Paragraph, ImageCls, Text, InputBox, Slider, ImageUpload, Button, \
    Scene, Pcd, Ply, Glb, PointCloud, div, Gripper

doc = Tassa("ws://localhost:8012", reconnect=True, debug=True)


# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    from PIL import Image
    # image = Image.open("test.jpg")

    page = Page(
        Scene(
            Ply(url="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/orange/mask_in.ply", position=[0.2, 0, -2], rotation=[0, 0, 0]),
            Gripper(movable=True, position=[0, .2, 0], pinchWidth=1, skeleton=False, key="gripper", axes=True),
            style={"width": "100vw", "height": "900px"}
        )
    )

    i = 0
    event = yield Frame(Set(page))
    while event != "TERMINAL":
        phase = 2 * np.pi * i / 50
        event = yield Frame(Update(
            Gripper(movable=True, position=[0.2 * np.sin(phase), .2, 0.2 * np.cos(phase)], pinchWidth=1, skeleton=False, key="gripper",
                    axes=True),
            style={"width": "100vw", "height": "900px"}, key='alan'
        ))
        sleep(0.016)
        i += 1
