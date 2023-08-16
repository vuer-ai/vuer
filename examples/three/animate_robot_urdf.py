from asyncio import sleep
from datetime import datetime

import numpy as np

from tassa import Tassa
from tassa.events import Set, Update, Frame
from tassa.schemas import Scene, Ply, Gripper, SkeletalGripper, Movable, Urdf

doc = Tassa(
    "ws://localhost:8012",
    uri="https://dash.ml/demos/vqn-dash/three",
    reconnect=True,
    debug=True,
)


@doc.bind(start=True)
async def show_heatmap():
    scene = Scene(
        Urdf(
            key="go1",
            src=f"http://localhost:8012/local/gabe_go1/urdf/go1.urdf?ts={datetime.now()}",
            auto_redraw=True,
            jointValues={
                "FR_calf_joint": 0,
                "FL_calf_joint": 0,
                "RR_calf_joint": 0,
                "RL_calf_joint": 0,
            },
            position=[0, 0.4, 0],
            rotation=[-0.5 * np.pi, 0, -0.5 * np.pi],
        ),
        style={"width": "100vw", "height": "900px"},
    )

    i = 0
    event = yield Frame(Set(scene))
    print(vars(event))
    while event != "TERMINAL":
        i += 1
        phase = 0.1 * np.pi * i / 50
        pinch = 0.033 * (i % 30)
        position = [0.2 * np.sin(phase), .2, 0.2 * np.cos(phase)]
        event = yield Frame(
            Update(
                Urdf(
                    key="go1",
                    src="http://localhost:8012/local/gabe_go1/urdf/go1.urdf",
                    auto_redraw=True,
                    jointValues={
                        "FR_calf_joint": -1.5 * np.sin(phase),
                        "FL_calf_joint": -1.5 * np.sin(phase + 0.5 * np.pi),
                        "RR_calf_joint": -1.5 + 1 * np.sin(phase),
                        "RL_calf_joint": -1.5 + 1 * np.sin(phase + 0.5 * np.pi),
                    },
                ),
            )
        )

        await sleep(0.0166)