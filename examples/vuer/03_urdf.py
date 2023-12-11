"""

Setup: Run the following in the terminal
```shell
cd examples/vuer/assets/robots
make
```
"""
from asyncio import sleep
from pathlib import Path

import numpy as np
import trimesh

from vuer import Vuer
from vuer.events import Set
from vuer.schemas import Obj, DefaultScene, Urdf, Movable

if __name__ == "__main__":
    assets_folder = Path(__file__).parent / "../../assets"
    test_file = "static_3d/armadillo_midres.obj"

    mesh = trimesh.load_mesh(assets_folder / test_file)
    assert isinstance(mesh, trimesh.Trimesh)
    mesh.apply_scale(0.1)

    # from trimesh import util
    with open(assets_folder / test_file, "rb") as f:
        data = f.read()
        text = trimesh.util.decode_text(data)

    app = Vuer(static_root=assets_folder)

    @app.spawn
    async def main(ws):
        app @ Set(
            DefaultScene(
                Movable(
                    Urdf(
                        src="http://localhost:8012/static/robots/mini_cheetah/mini_cheetah.urdf",
                        jointValues={
                            "FL_hip_joint": -0.2,
                            "RL_hip_joint": -0.2,
                            "FR_hip_joint": 0.2,
                            "RR_hip_joint": 0.2,
                            "FL_thigh_joint": -0.25 * np.pi,
                            "RL_thigh_joint": -0.25 * np.pi,
                            "FR_thigh_joint": -1.3,
                            "RR_thigh_joint": -0.25 * np.pi,
                            "FL_calf_joint": 0.5 * np.pi,
                            "RL_calf_joint": 0.5 * np.pi,
                            "FR_calf_joint": 0.6 * np.pi,
                            "RR_calf_joint": 0.5 * np.pi,
                        },
                        position=[0, 0.3, 0],
                        rotation=[-np.pi / 2, 0, -np.pi / 2],
                    ),
                ),
            ),
        )

        i = 0
        while True:
            i += 1
            await sleep(16)

    app.run()
