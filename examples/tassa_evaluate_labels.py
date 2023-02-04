import json
import os
import uuid
from datetime import datetime

import numpy as np

from tassa import Tassa
from tassa.events import Set, Update
from tassa.schemas import Page, Paragraph, Scene, Pcd, Ply, Glb, PointCloud, div, Gripper

doc = Tassa("ws://localhost:8013", debug=True, reconnect=True)

label_file = "/Users/jansenwong/workspace/ei-csail/cmx-python/examples/output/2023-02-03_20-27-51/default.jsonl"

labels = []




@doc.bind(start=True)
def show_labels():
    # read file, read each line as json
    global labels
    with open(label_file, "r") as f:
        global labels
        lines = f.readlines()
        labels = [json.loads(line) for line in lines]

    # construct a skeleton gripper for each label
    grippers = [Gripper(skeleton=True, movable=False, pinchWidth=1, handleOffset=[0, .2, 0], position=label["position"],
                        rotation=label["rotation"],
                        key=str(uuid.uuid4())[-10:]) for label in labels]

    page = Page(
        Scene(
            Ply(url="https://escher.ge.ngrok.io/files/william/debug/jansen/label.ply",
                rotation=[-.5 * np.pi, 0, -.5 * np.pi], position=[0, 1.5, 0], key="orange"),
            *grippers,
            style={"width": "100vw", "height": "900px"}
        )
    )

    # visualize ply using open3d

    event = yield Set(page)
    while not event == "TERMINAL":
        print(vars(event))
        res = Paragraph(str(vars(event)), key=str(uuid.uuid4())[-10:])
        event = yield Update(res)
