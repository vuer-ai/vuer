from asyncio import sleep
from datetime import datetime
from requests_futures import requests

import numpy as np
from pandas import DataFrame

from vuer import Vuer
from vuer.events import Set, Update, Frame
from vuer.schemas import Scene, Ply, Gripper, SkeletalGripper, Movable, Urdf


requests.post("localhost:8012/relay", )

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


if __name__ == '__main__':
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
                    src="http://localhost:8012/local/gabe_go1/urdf/go1.urdf",
                    auto_redraw=True,
                    jointValues=jointValues,
                ),
            )
        )

        await sleep(0.02)
