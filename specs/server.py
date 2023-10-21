from asyncio import sleep
from datetime import datetime

import numpy as np
from pandas import DataFrame

from vuer import Vuer
from vuer.events import Set, Update, Frame
from vuer.schemas import Scene, Ply, Gripper, SkeletalGripper, Movable, Urdf

doc = Vuer(
    "ws://localhost:8012",
    domain="https://dash.ml/demos/vqn-dash/three",
    reconnect=True,
    debug=True,
    static_root="/Users/ge/mit/cmx-python/examples/three/gabe_go1/"
)

joint_mapping = {
    0: "FL_hip",
    1: "FL_thigh",
    2: "FL_calf",
    3: "FR_hip",
    4: "FR_thigh",
    5: "FR_calf",
    6: "RL_hip",
    7: "RL_thigh",
    8: "RL_calf",
    9: "RR_hip",
    10: "RR_thigh",
    11: "RR_calf",
}


def row2dict(row):
    return {joint_mapping[i] + "_joint": float(row[i]) for i in range(12) if i is not None}


import pickle

with open("log.pkl", "rb") as f:
    cfg, traj = pickle.load(f)['hardware_closed_loop']
    df = DataFrame(traj[:-1])

    df_joint = np.concatenate(df['joint_pos_target'].values)


@doc.bind(start=True)
async def show_heatmap():
    scene = Scene(
        Urdf(
            key="go1",
            src=f"http://localhost:8012/static/urdf/go1.urdf?ts={datetime.now()}",
            auto_redraw=True,
            jointValues={
                "FL_calf_joint": -1.5707963268,
                "FL_hip_joint": 0.0,
                "FL_thigh_joint": 0.7853981634,
                "FR_calf_joint": -1.5707963268,
                "FR_hip_joint": -0.0,
                "FR_thigh_joint": 0.7853981634,
                "RL_calf_joint": -1.5707963268,
                "RL_hip_joint": 0.0,
                "RL_thigh_joint": 0.7853981634,
                "RR_calf_joint": -1.5707963268,
                "RR_hip_joint": -0.0,
                "RR_thigh_joint": 0.7853981634
            },
            position=[0, 0.4, 0],
            rotation=[-0.5 * np.pi, 0, -0.5 * np.pi],
        ),
        style={"width": "100vw", "height": "900px"},
    )

    i = 0
    event = yield Set(scene)
    # print(vars(event))
    while event != "TERMINAL":
        i += 1
        phase = 0.1 * np.pi * i / 50
        pinch = 0.033 * (i % 30)
        position = [0.2 * np.sin(phase), .2, 0.2 * np.cos(phase)]
        jointValues = row2dict(df_joint[i % len(df_joint)])
        print(jointValues)

        event = yield Frame(
            Update(
                Urdf(
                    key="go1",
                    src="http://localhost:8012/static/gabe_go1/urdf/go1.urdf",
                    auto_redraw=True,
                    jointValues=jointValues,
                ),
            )
        )

        await sleep(0.02)
