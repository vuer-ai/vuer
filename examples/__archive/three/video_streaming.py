from time import sleep

import imageio.v3 as iio
import numpy as np

from vuer import Vuer
from vuer.events import Set, Update, Frame
from vuer.schemas import (
    Scene,
    Image,
    group,
    div,
)


def colmap_to_three(m):
    """Converts a 3x4 colmap camera matrix to a 4x4 three.js camera matrix."""
    matrix = np.array(m).reshape(4, 4)
    return matrix.T.flatten().tolist()


doc = Vuer(
    uri="ws://localhost:8012",
    domain="http://dash.ml/demos/vqn-dash/three",
    reconnect=True,
    debug=True,
)


@doc.bind(start=True)
def show_heatmap():
    print("reading stuff")
    frames = list(iio.imread("eonhe.mp4"))

    scene = Scene(
        group(key="cameras"),
        htmlChildren=[
            div(
                Image(src="", key="video", style={"left": 0, "top": 0, "margin": 0}),
                key="HUD",
                style=dict(
                    position="absolute",
                    left=0,
                    top=0,
                    minWidth="570px",
                    minHeight="279px",
                    backgroundColor="white",
                    zIndex=10000000,
                ),
            )
        ],
        cameras=[],
    )

    event = yield Set(scene)

    while True:
        for idx, frame in enumerate(frames):
            print("iterating through the frames")
            small = 1 - frame[::10, ::10]
            event = yield Frame(
                Update(
                    Image(small, width="900px", height="600px", key="video", style={"position": "absolute", "left": 0, "top": 0}),
                )
            )
            sleep(0.005)

        if event == "TERMINAL":
            print('Got Termination event from client')
            break
