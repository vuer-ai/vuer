from vuer.schemas import Splat

# // https://twitter.com/alexcarliera
cakewalk = "https://huggingface.co/cakewalk/splat-data/resolve/main"
# // https://twitter.com/dylan_ebert_
dylanebert = "https://huggingface.co/datasets/dylanebert/3dgs/resolve/main/kitchen"

"""
<Splat alphaTest={0.1} src={`${cakewalk}/nike.splat`} scale={0.5} position={[ 0, 1.6, 2 ]}/>
<Splat alphaTest={0.1} src={`${cakewalk}/nike.splat`} scale={0.5} position={[ 0, 1.6, -1.5 ]}
     rotation={[ Math.PI, 0, Math.PI ]}/>
<Splat alphaTest={0.1} src={`${cakewalk}/plush.splat`} scale={0.5} position={[ -1.5, 1.6, 1 ]}/>
<Splat src={`${dylanebert}/kitchen-7k.splat`} position={[ 0, 0.25, 0 ]}/>
"""

from pathlib import Path

import numpy as np

# import numpy as np
import trimesh

from vuer import Vuer
from vuer.events import Set
from vuer.schemas import DefaultScene
from asyncio import sleep

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

    print(
        "Loaded mesh with ",
        mesh.vertices.shape,
        "vertices and",
        mesh.faces.shape,
        "faces",
    )

    @app.spawn
    async def main(ws):
        app @ Set(
            DefaultScene(
                Splat(
                    alphaTest=0.1,
                    src=f"{cakewalk}/nike.splat",
                    scale=0.5,
                    position=[0, 1.6, 2],
                    key="moving",
                ),
                Splat(
                    alphaTest=0.1,
                    src=f"{cakewalk}/nike.splat",
                    scale=0.5,
                    position=[0, 1.6, -1.5],
                    rotation=[np.pi, 0, np.pi],
                ),
                Splat(
                    alphaTest=0.1,
                    src=f"{cakewalk}/plush.splat",
                    scale=0.5,
                    position=[-1.5, 1.6, 1],
                ),
                Splat(
                    alphaTest=0.1,
                    src=f"{dylanebert}/kitchen-7k.splat",
                    scale=0.5,
                    position=[0, 0.25, 0],
                ),
            ),
        )
        print("object is sent")

        i = 0
        while True:
            i += 1
            x, z = 0.3 * np.sin(i / 5), 0.3 * np.cos(i / 5)
            app.update @ Splat(
                alphaTest=0.1,
                src=f"{cakewalk}/nike.splat",
                scale=0.5,
                key="moving",
                position=[x, 0, z],
            )
            await sleep(0.016)

    app.run()
