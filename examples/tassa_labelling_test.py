import uuid

import numpy as np

from tassa import Tassa
from tassa.events import Set, Update
from tassa.schemas import Page, Header1, Paragraph, ImageCls, Text, InputBox, Slider, ImageUpload, Button, \
    Scene, Pcd, Ply, Glb, PointCloud, div, Gripper

doc = Tassa("ws://localhost:8012")


# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    page = Page(
        Scene(
            Ply(url="https://escher.ge.ngrok.io/files/william/debug/jansen/label.ply", rotation=[-.5 * np.pi, 0, 0],
                movable=True, key="orange"),
            Gripper(movable=True, handleOffset=[0, .2, 0], pinchWidth=1, skeleton=False, key="gripper"),
            style={"width": "100vw", "height": "900px"}
        )
    )
    event = yield Set(page)
    while not event == "TERMINAL":
        if event == "UPLOAD":
            event = yield Update(ImageCls(data=event.value, key="alan_img"))
        else:
            print(vars(event))
            res = Paragraph(str(vars(event)), key=str(uuid.uuid4())[-10:])
            print(res.serialize())
            event = yield Update(res)
