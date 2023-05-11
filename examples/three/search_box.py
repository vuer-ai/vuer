import json
from time import sleep

import numpy as np

from tassa import Tassa
from tassa.events import Set, Update, Frame, END
from tassa.schemas import (
    Scene,
    Ply,
    Gripper,
    SkeletalGripper,
    CameraHelper,
    Html,
    Text,
    Image,
    group,
    Glb,
    Pivot,
    div,
    Paragraph, InputBox,
)

from tqdm import tqdm


def colmap_to_three(m):
    """Converts a 3x4 colmap camera matrix to a 4x4 three.js camera matrix."""
    matrix = np.array(m).reshape(4, 4)
    return matrix.T.flatten().tolist()


doc = Tassa(
    ws="ws://localhost:8013",
    # uri="http://localhost:8000/tassa",
    # uri="http://localhost:8000/demos/vqn-dash/three",
    uri="http://dash.ml/demos/vqn-dash/three",
    reconnect=True,
    debug=True,
)

dataset = f"/Users/ge/datasets/rooms/ei_stairway_v1"
# from ml_logger import logger

with open(dataset + "/transforms.json", "r") as f:
    transforms = json.load(f)
    # print(transforms)
poses = sorted(transforms["frames"], key=lambda x: x["file_path"])


# doc = Tassa(reconnect=True)
# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    scene = Scene(
        # CameraHelper(fov=75, far=20, aspect=1.6, position=[0, 1, 1], rotation=[0, 0, 0], helper=True, default=False),
        Ply(
            src="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/orange/mask_in.ply",
            position=[0, 0.4, 0],
            rotation=[-0.5 * np.pi, 0, -0.5 * np.pi],
        ),
        group(key="cameras"),
        htmlChildren=[
            div(
                InputBox(
                    style={
                        "margin": "auto 100px",
                        "borderRadius": "7px",
                        "position": "relative",
                    }, key="search-bar",
                ),
                div(style={"position": "relative"}, key="output-box"),
                key="HUD",
                style=dict(
                    position="absolute",
                    left=0,
                    top=0,
                    minWidth="10px",
                    minHeight="10px",
                    backgroundColor="white",
                    zIndex=10000000,
                ),
            )
        ],
        style={"width": "100vw", "height": "900px"},
        cameras=[],
    )

    event = yield Frame(Set(scene))

    sleep(2.0)

    while True:
        from ml_logger import logger

        # this is not working.
        event = yield Update(div(
            Paragraph(f"Current frame: {logger.now()}"),
            Paragraph(f"""
            
            Event type: {event.etype}
            
            """) if event.value else Paragraph(event.etype),
            Paragraph(f"""
            
            Event value: {event.value}

            """) if event.value else Paragraph(event.etype),
            key="output-box",
        ),
        )
        print('hey')
        sleep(0.01)

        if event == "TERMINAL":
            break
