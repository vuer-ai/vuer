import json
import uuid

import numpy as np

from tassa import Tassa
from tassa.events import Set, Update
from tassa.schemas import Page, Header1, Paragraph, ImageCls, Text, InputBox, Slider, ImageUpload, Button, \
    Scene, Pcd, Ply, Glb, PointCloud, div, Gripper, Pivot, Movable

doc = Tassa("ws://localhost:8012", reconnect=True)


# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    page = Page(
        Scene(
            Movable(
                Ply(src="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/orange/mask_in.ply",
                    rotation=[-.5 * np.pi, 0, -.5 * np.pi], position=[-.0, 1.8, 0], key="orange"),
            ),
            style={"width": "100vw", "height": "900px"}
        )
    )
    event = yield Set(page)
    while not event == "TERMINAL":
        if event == "UPLOAD":
            event = yield Update(ImageCls(data=event.value, key="alan_img"))
        else:
            print(vars(event))
            # append the results to a json file
            with open("output.json", "a") as f:
                # json.dumps (vars(event))
                f.write(json.dumps(vars(event)))
                f.write("\n")
                f.flush()
            res = Paragraph(str(vars(event)), key=str(uuid.uuid4())[-10:])
            # print(res.serialize())
            event = yield Update(res)
