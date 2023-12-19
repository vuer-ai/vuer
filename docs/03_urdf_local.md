# Using URDF Files Locally

This example shows you how to load a URDF file from your local file system. Here is what you should expect to see:

![_static/03_urdf_local.jpg](_static/03_urdf_local.jpg)


Fist, run the following in the terminal to download the URDF files:
```shell
cd examples/vuer/assets/robots
make
```

```python
from vuer import Vuer
from vuer.schemas import DefaultScene, Urdf, Movable

pi = 3.1415

app = Vuer(static_root=Path(__file__).parent / "../../assets")


@app.spawn(start=True)
async def main(ws):
    app.set @ DefaultScene(
        Movable(
            Urdf(
                src="http://localhost:8012/static/robots/mini_cheetah/mini_cheetah.urdf",
                jointValues={
                    "FL_hip_joint": -0.2,
                    "RL_hip_joint": -0.2,
                    "FR_hip_joint": 0.2,
                    "RR_hip_joint": 0.2,
                    "FL_thigh_joint": -0.25 * pi,
                    "RL_thigh_joint": -0.25 * pi,
                    "FR_thigh_joint": -1.3,
                    "RR_thigh_joint": -0.25 * pi,
                    "FL_calf_joint": 0.5 * pi,
                    "RL_calf_joint": 0.5 * pi,
                    "FR_calf_joint": 0.6 * pi,
                    "RR_calf_joint": 0.5 * pi,
                },
            ),
            position=[0, 0, 0.3],
            scale=0.4
        ),
        grid=True,
    )

    await save_doc()
```


<iframe src="http://vuer.ai/?background=131416,fff&scene=3gAIqGNoaWxkcmVukd4ABahjaGlsZHJlbpHeAAWoY2hpbGRyZW6Qo3RhZ6RVcmRmo2tleaExo3NyY9lCaHR0cDovL2xvY2FsaG9zdDo4MDEyL3N0YXRpYy9yb2JvdHMvbWluaV9jaGVldGFoL21pbmlfY2hlZXRhaC51cmRmq2pvaW50VmFsdWVz3gAMrEZMX2hpcF9qb2ludMu%2FyZmZoAAAAKxSTF9oaXBfam9pbnTLv8mZmaAAAACsRlJfaGlwX2pvaW50yz%2FJmZmgAAAArFJSX2hpcF9qb2ludMs%2FyZmZoAAAAK5GTF90aGlnaF9qb2ludMu%2F6SHKwAAAAK5STF90aGlnaF9qb2ludMu%2F6SHKwAAAAK5GUl90aGlnaF9qb2ludMu%2F9MzMwAAAAK5SUl90aGlnaF9qb2ludMu%2F6SHKwAAAAK1GTF9jYWxmX2pvaW50yz%2F5IcrAAAAArVJMX2NhbGZfam9pbnTLP%2FkhysAAAACtRlJfY2FsZl9qb2ludMs%2F%2FiiM4AAAAK1SUl9jYWxmX2pvaW50yz%2F5IcrAAAAAo3RhZ6dNb3ZhYmxlo2tleaEyqHBvc2l0aW9ukwAAyz%2FTMzNAAAAApXNjYWxlyz%2FZmZmgAAAAo3RhZ6VTY2VuZaNrZXmhM6J1cJMAAAGkZ3JpZMOrcmF3Q2hpbGRyZW6S3gAEqGNoaWxkcmVukKN0YWesQW1iaWVudExpZ2h0o2tlebVkZWZhdWx0X2FtYmllbnRfbGlnaHSpaW50ZW5zaXR5Ad4ABahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5uWRlZmF1bHRfZGlyZWN0aW9uYWxfbGlnaHSpaW50ZW5zaXR5AaZoZWxwZXLDrGh0bWxDaGlsZHJlbpCyYmFja2dyb3VuZENoaWxkcmVukA%3D%3D" width="100%" height="400px" frameborder="0"></iframe>
