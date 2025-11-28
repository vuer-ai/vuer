
# An Unitree Go1 and 3D Mesh of a Stair Way

This tutorial shows you how to setup a scene with the following components:
1. A Unitree Go1 robot
2. A 3D mesh of a stair way
3. A fog effect that makes the part of the scene that is far away darker in color.
4. Fixtures of two movable lights. One [AmbientLight](https://threejs.org/docs/#api/en/lights/AmbientLight) and one [PointLight](https://threejs.org/docs/#api/en/lights/PointLight).

![Unitree Go1 Robot in front of a flight of stairs](figures/go1_stairs.png)

```python
import os
import math
from asyncio import sleep

from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Urdf, Movable, PointLight, AmbientLight, Obj, Plane, Fog

pi = 3.1415

app = Vuer(static_root=os.getcwd() + "/../../../assets")

@app.spawn(start=True)
async def main(app: VuerSession):
    # Note: you can only use `set` operator with Scene objects. This is a special operator.
    app.set @ Scene(
        rawChildren=[
            Plane(
                args=[100, 100],
                position=[0, 0, -0.15],
                rotation=[0, 0, 0],
                key="ground",
                materialType="standard",
                material={"color": "#eee"},
            ),
            Fog(color="black", near="3", far="7"),
            AmbientLight(intensity=1),
            Movable(PointLight(intensity=1), position=[0, 0, 2]),
            Movable(PointLight(intensity=3), position=[0, 1, 2]),
        ],
        up=[0, 0, 1],
    )
    await sleep(0.1)

    app.upsert @ Obj(
        src="http://localhost:8012/static/robots/stairway/textured.obj",
        mtl="http://localhost:8012/static/robots/stairway/textured.mtl",
        position=[1.5, -3, 0.727],
        rotation=[3.1415 / 2, 0, 0],
        key="scene",
    )

    i = 0
    while True:
        app.upsert @ Urdf(
            src="http://localhost:8012/static/robots/go1/urdf/go1.urdf",
            jointValues={
                "FL_hip_joint": -0.1,
                "RL_hip_joint": -0.1,
                "FR_hip_joint": 0.1,
                "RR_hip_joint": 0.1,
                "FL_thigh_joint": 0.785,
                "RL_thigh_joint": 0.785,
                "FR_thigh_joint": 0.785 - 0.25 * math.sin(i * 0.1),
                "RR_thigh_joint": 0.785,
                "FL_calf_joint": -1.57,
                "RL_calf_joint": -1.57,
                "FR_calf_joint": -2 + 0.5 * math.sin(i * 0.1),
                "RR_calf_joint": -1.57,
            },
            position=[0, 0, 0.33],
            key="robot",
        )
        await sleep(0.016)
        i += 1
```
