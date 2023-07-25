from time import sleep

import imageio.v3 as iio
import numpy as np

from tassa import Tassa
from tassa.events import Set, Update, Frame
from tassa.schemas import (
    Scene,
    Image,
    group,
    div,
)


def colmap_to_three(m):
    """Converts a 3x4 colmap camera matrix to a 4x4 three.js camera matrix."""
    matrix = np.array(m).reshape(4, 4)
    return matrix.T.flatten().tolist()


doc = Tassa(
    ws="ws://localhost:8013",
    uri="http://dash.ml/demos/vqn-dash/three",
    reconnect=True,
    debug=True,
)


@doc.bind(start=True)
def show_heatmap():
    print("reading stuff")
    frames = list(iio.imread("fisheye.mp4"))

    scene = Scene(
        group(key="cameras"),
        htmlChildren=[
            div(
                Image(src="", key="video", width=100, height=100, style={"left": 0, "top": 0}),
                key="HUD",
                style=dict(
                    position="absolute",
                    left=0,
                    top=0,
                    minWidth="900px",
                    minHeight="600px",
                    backgroundColor="white",
                    zIndex=10000000,
                ),
            )
        ],
        style={"width": "100vw", "height": "900px"},
        cameras=[],
    )

    event = yield Frame(Set(scene))

    while True:
        for idx, frame in enumerate(frames):
            print("iterating through the frames")
            small = frame[::-10, ::10, :]
            event = yield Frame(
                Update(
                    Image(small, width="900px", height="600.px", key="video", style={"position": "absolute", "left": 100, "top": 100}),
                )
            )
            sleep(0.005)

        if event == "TERMINAL":
            print('Got Termination event from client')
            break
