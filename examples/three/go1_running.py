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
    uri="https://dash.ml/demos/vqn-dash/three",
    reconnect=True,
    debug=True,
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


@doc.bind(start=True)
async def go1_running():

    scene = Scene(
        Urdf(
            key="go1",
            src="http://localhost:8012/local/gabe_go1/urdf/go1.urdf",
            auto_redraw=True,
            jointValues=DEFAULT_POS,
        ),
        group(key="playground"),
    )

    event = yield Frame(Set(scene))
    assert event == "NULL", "Frame event returns NULL under sync mode"

    i = 0
    while event != "TERMINAL":
        i += 1

        jointValues = df.iloc[i % len(df)].to_dict()
        position = jointValues.pop("base_position")
        rotation = jointValues.pop("base_rotation")

        # jointValues = {k: jointValues[k] + DEFAULT_POS[k] for k in DEFAULT_POS}

        event = yield Frame(
            Update(
                Urdf(
                    key="go1",
                    src="http://localhost:8012/local/gabe_go1/urdf/go1.urdf",
                    position=position,
                    rotation=rotation,
                    auto_redraw=True,
                    jointValues=jointValues,
                ),
                group(key="playground"),
            )
        )
