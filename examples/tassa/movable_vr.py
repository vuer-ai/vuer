import uuid
from time import sleep

import numpy as np

from tassa import Tassa
from tassa.events import Set, Update, Frame, NOOP
from tassa.schemas import Page, Header1, Paragraph, ImageCls, Text, InputBox, Slider, ImageUpload, Button, \
    Scene, Pcd, Ply, Glb, PointCloud, div, Gripper, Pivot, Movable

doc = Tassa(
    "ws://localhost:8012",
    uri="http://localhost:8000/demos/vqn-dash/tassa",
    reconnect=True,
    debug=True,
)

print(f"https://26213613178b.ngrok.io/demos/vqn-dash/tassa?ws=wss://a75892611d04.ngrok.io/feed?reconnect=true")


# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    page = Page(
        Scene(
            Movable(
                Ply(
                    url="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences"
                        "/2023-01-20_23-08-27/orange/mask_in.ply",
                    position=[0, 0.4, 0], rotation=[-0.5 * np.pi, 0, -0.5 * np.pi]
                ),
                key="pointcloud-mover"
            ),
            Movable(
                Gripper(movable=True, pinchWidth=1, skeleton=False, axes=True, position=[0, 0.2, 0], key="gripper", ),
                offset=[0, 0.2, 0], handleOffset=[0, 0.4, 0], key="gripper-mover"
            ),
            style={"width": "100vw", "height": "900px"},
            key='alan',
        )
    )

    i = 0
    event = yield Set(page)
    from pprint import pprint
    print(vars(event))
    while event != "TERMINAL":
        event = yield NOOP
        pprint(vars(event))

"""
{'etype': 'OBJECT_MOVE',
 'key': 'pointcloud-mover',
 'position': [0.1240201599871046, 0.0654767739634874, 0],
 'quaternion': [0, 0, 0, 1],
 'rotation': [0, 0, 0, 'XYZ'],
 'world': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 
           0, 0.1240201599871046, 0.0654767739634874, 0, 1]}
"""