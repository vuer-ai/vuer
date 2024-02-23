
# Serving URDF Files Locally (MIT Mini Cheetah)

This tutorial shows you how to serve a URDF file locally. We will use the MIT Mini Cheetah 
robot as an example. At the end of this tutorial, you should be able to see the robot in the 
following view:

![MIT Mini Cheetah](figures/mini_cheetah.png)

Before you start, let's first download the URDF file from [here](https://github.com/geyang/unitree-go1-setup-guide/raw/main/robots/mini_cheetah).

```shell
mkdir -p assets/mini_cheetah/meshes
cd "assets/mini_cheetah" && wget -O "mini_cheetah.urdf" https://github.com/geyang/unitree-go1-setup-guide/raw/main/robots/mini_cheetah/mini_cheetah.urdf
cd "meshes"
wget -O "mini_abad.obj" https://github.com/geyang/unitree-go1-setup-guide/raw/main/robots/mini_cheetah/meshes/mini_abad.obj
wget -O "mini_body.obj" https://github.com/geyang/unitree-go1-setup-guide/raw/main/robots/mini_cheetah/meshes/mini_body.obj
wget -O "mini_lower_link.obj" https://github.com/geyang/unitree-go1-setup-guide/raw/main/robots/mini_cheetah/meshes/mini_lower_link.obj
wget -O "mini_upper_link.obj" https://github.com/geyang/unitree-go1-setup-guide/raw/main/robots/mini_cheetah/meshes/mini_upper_link.obj
```

You should have the following directory structure:
```shell
├── meshes
│   ├── mini_abad.obj
│   ├── mini_body.obj
│   ├── mini_lower_link.obj
│   └── mini_upper_link.obj
└── mini_cheetah.urdf

2 directories, 5 files
```

```python
import math
from asyncio import sleep

from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Urdf, Movable, PointLight, AmbientLight, Obj

pi = 3.1415

app = Vuer(static_root="assets/mini_cheetah")

@app.spawn(start=True)
async def main(app: VuerSession):
    # Note: you can only use `set` operator with Scene objects. This is a special operator.
    app.set @ Scene(
        rawChildren=[
            AmbientLight(intensity=1),
            Movable(PointLight(intensity=1), position=[0, 0, 2]),
            Movable(PointLight(intensity=3), position=[0, 1, 2]),
        ],
        grid=True,
        up=[0, 0, 1]
    )
    await sleep(0.1)

    i = 0
    while True:
        app.upsert @ Urdf(
            src="http://localhost:8012/static/mini_cheetah.urdf",
            jointValues={
                "FL_hip_joint": -0.2,
                "RL_hip_joint": -0.2,
                "FR_hip_joint": 0.2,
                "RR_hip_joint": 0.2,
                "FL_thigh_joint": -0.25 * pi,
                "RL_thigh_joint": -0.25 * pi,
                "FR_thigh_joint": 0.5 * math.sin(i * 0.1) - 1.3,
                "RR_thigh_joint": -0.25 * pi,
                "FL_calf_joint": 0.5 * pi,
                "RL_calf_joint": 0.5 * pi,
                "FR_calf_joint": -0.5 * math.sin(i * 0.1) + 0.6 * pi,
                "RR_calf_joint": 0.5 * pi,
            },
            position=[0, 0, 0.295],
            key="robot",
        )
        await sleep(0.016)
        i += 1
```

Now, if your script runs correctly, the robot should show up in the following view:

<iframe src="https://vuer.ai/?ws=ws%3A%2F%2Flocalhost%3A8012&reconnect=0&scene=3gAIqGNoaWxkcmVukd4ABahjaGlsZHJlbpHeAAWoY2hpbGRyZW6Qo3RhZ6RVcmRmo2tleaVyb2JvdKNzcmPZLmh0dHA6Ly9sb2NhbGhvc3Q6ODAxMi9zdGF0aWMvbWluaV9jaGVldGFoLnVyZGaram9pbnRWYWx1ZXPeAAysRkxfaGlwX2pvaW50y7%2FJmZmgAAAArFJMX2hpcF9qb2ludMu%2FyZmZoAAAAKxGUl9oaXBfam9pbnTLP8mZmaAAAACsUlJfaGlwX2pvaW50yz%2FJmZmgAAAArkZMX3RoaWdoX2pvaW50y7%2FpIcrAAAAArlJMX3RoaWdoX2pvaW50y7%2FpIcrAAAAArkZSX3RoaWdoX2pvaW50y7%2F6Up4gAAAArlJSX3RoaWdoX2pvaW50y7%2FpIcrAAAAArUZMX2NhbGZfam9pbnTLP%2FkhysAAAACtUkxfY2FsZl9qb2ludMs%2F%2BSHKwAAAAK1GUl9jYWxmX2pvaW50y0AB1y8gAAAArVJSX2NhbGZfam9pbnTLP%2FkhysAAAACjdGFnp01vdmFibGWja2V5oTaocG9zaXRpb26TAADLP9MzM0AAAAClc2NhbGXLP9mZmaAAAACjdGFnpVNjZW5lo2tleaIxMKJ1cJMAAAGkZ3JpZMOrcmF3Q2hpbGRyZW6S3gAEqGNoaWxkcmVukKN0YWesQW1iaWVudExpZ2h0o2tlebVkZWZhdWx0X2FtYmllbnRfbGlnaHSpaW50ZW5zaXR5Ad4ABahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5uWRlZmF1bHRfZGlyZWN0aW9uYWxfbGlnaHSpaW50ZW5zaXR5AaZoZWxwZXLDrGh0bWxDaGlsZHJlbpCqYmdDaGlsZHJlbpPeAAOoY2hpbGRyZW6Qo3RhZ6pHcmFiUmVuZGVyo2tleaE33gADqGNoaWxkcmVukKN0YWevUG9pbnRlckNvbnRyb2xzo2tleaE43gADqGNoaWxkcmVukKN0YWekR3JpZKNrZXmhOQ%3D%3D" width="100%" height="600px" frameborder="0"></iframe>
