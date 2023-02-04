import json
import os
import uuid
from datetime import datetime

import numpy as np

from tassa import Tassa
from tassa.events import Set, Update
from tassa.schemas import Page, Header1, Paragraph, ImageCls, Text, InputBox, Slider, ImageUpload, Button, \
    Scene, Pcd, Ply, Glb, PointCloud, div, Gripper

doc = Tassa("ws://localhost:8012", debug=True, reconnect=True)

parent_dir = "output/" + datetime.now().strftime("%Y-%m-%d_%H-%M-%S") + "/"
os.makedirs(parent_dir, exist_ok=True)


@doc.bind(start=True)
def show_heatmap():
    current_filename = 'default.jsonl'

    page = Page(
        Scene(
            # Ply(url="https://escher.ge.ngrok.io/files/william/debug/jansen/label.ply",
            #     rotation=[-.5 * np.pi, 0, -.5 * np.pi], position=[-.0, 1.8, 0], key="orange"),
            Ply(url="https://escher.ge.ngrok.io/files/instant-feature/instant-feature/rss_2023/train_and_distill/view_invariant/2023/02-04/03.49.42/panda/open_ended/caterpillar/train/2023/02-02/18.48.16/distill/analysis/rgb.ply",
                rotation=[-np.pi/2, 0, -np.pi/2], position=[0, 1.8, 0], key="orange"),
            # Ply(url="https://escher.ge.ngrok.io/files/jcw/scratch/2023/02-03/181757/files/gripper.ply", key="red"),
            Gripper(movable=True, rotation=[-np.pi/2, 0, -np.pi/2], position=[0, 1.5, 0], handleOffset=[0, .2, 0], pinchWidth=1, skeleton=False, key="gripper", axes=True),
            style={"width": "100vw", "height": "900px"}
        )
    )
    event = yield Set(page)
    while not event == "TERMINAL":
        if event == "NEW_LABELS":
            # say old results saved to path
            print("Saved to: " + parent_dir + current_filename)
            # prompt for new file name
            current_filename = input("Enter new file name: ") + ".jsonl"
            res = Paragraph(str(vars(event)), key=str(uuid.uuid4())[-10:])
            event = yield Update(res)
        else:
            res = vars(event)
            res['rotation'] = (np.array(res['rotation']) + np.array([0, 0, np.pi])).tolist()
            print(res)
            # append the results to a jsonl file
            with open(parent_dir + current_filename, "a") as f:
                f.write(json.dumps(res) + '\n')
            res = Paragraph(str(vars(event)), key=str(uuid.uuid4())[-10:])
            event = yield Update(res)
