import json
from asyncio import sleep

import numpy as np
from pandas import DataFrame, read_json

from tassa import Tassa
from tassa.events import Set, Update, Frame
from tassa.schemas import (
    Scene,
    Ply,
    Gripper,
    SkeletalGripper,
    Movable,
    Urdf,
    Page,
    group,
    Box,
    Capsule,
    Cylinder,
    Plane,
    Sphere,
)

doc = Tassa(
    "ws://localhost:8012",
    # uri="https://dash.ml/demos/vqn-dash/three",
    uri="http://localhost:8000/demos/vqn-dash/three",
    reconnect=True,
    debug=True,
    cors_origin="*"
)

df = read_json("trajectory_log_info.json")
print(df)

DEFAULT_POS = {
    "FL_hip_joint": 0,
    "RL_hip_joint": 0,
    "FR_hip_joint": 0,
    "RR_hip_joint": 0,
    "FL_thigh_joint": np.pi * 0.25,
    "RL_thigh_joint": np.pi * 0.25,
    "FR_thigh_joint": np.pi * 0.25,
    "RR_thigh_joint": np.pi * 0.25,
    "FL_calf_joint": -np.pi / 2,
    "RL_calf_joint": -np.pi / 2,
    "FR_calf_joint": -np.pi / 2,
    "RR_calf_joint": -np.pi / 2,
}


@doc.spawn(start=True)
async def go1_running(*a, **kw):
    print(a, kw)
    i = 0

    scene = Scene(
        # Ply(src="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/orange/mask_in.ply",
        # position=[0.2, 0, -2], rotation=[0, 0, 0]),
        Urdf(
            key="go1",
            src="http://localhost:8012/local/gabe_go1/urdf/go1.urdf",
            auto_redraw=True,
            jointValues=DEFAULT_POS,
        ),
        group(key="playground"),
    )

    event = doc.set @ scene
    while event != "TERMINAL":
        i += 1

        jointValues = df.iloc[i % len(df)].to_dict()

        position = jointValues.pop("base_position")
        rotation = jointValues.pop("base_rotation")

        # jointValues = {k: jointValues[k] + DEFAULT_POS[k] for k in DEFAULT_POS}

        event = doc @ Update(
            Urdf(
                key="go1",
                src="http://localhost:8012/local/gabe_go1/urdf/go1.urdf",
                position=position,
                rotation=rotation,
                auto_redraw=True,
                jointValues=jointValues,
            ),
            group(
                Sphere(hide=False, color="#23aaff", args=[0.1, 16, 16]),
                key="playground",
            ),
        )

        await sleep(1/50.)
