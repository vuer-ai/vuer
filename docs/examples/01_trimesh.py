import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", None)


doc @ """
# Trimesh

This example shows you how to load mesh files in various ways, and how to update the mesh in real-time.

![](figures/trimesh.png)
"""
# Need to use this hack to make the code works for python < 3.9
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    from pathlib import Path

    import numpy as np
    import trimesh

    from vuer import Vuer
    from vuer.events import Set
    from vuer.schemas import Obj, DefaultScene, TriMesh, SceneBackground

    assets_folder = Path(__file__).parent / "../../../assets"
    test_file = "static_3d/armadillo_midres.obj"

    mesh = trimesh.load_mesh(assets_folder / test_file)
    assert isinstance(mesh, trimesh.Trimesh)
    mesh.apply_scale(0.1)

    # from trimesh import util
    with open(assets_folder / test_file, "rb") as f:
        data = f.read()
        text = trimesh.util.decode_text(data)

    app = Vuer(static_root=assets_folder)

    print(f"Loaded mesh with {mesh.vertices.shape} vertices and {mesh.faces.shape} faces")


    # use `start=True` to start the app immediately
    @app.spawn(start=True)
    async def main(session):

        session @ Set(
            DefaultScene(
                SceneBackground(),
                Obj(
                    key="src-loader",
                    src="http://localhost:8012/static/" + test_file,
                    position=[3, 0, 0],
                ),
                Obj(key="buff-loader", buff=data, position=[1, 0, 0], scale=0.3),
                Obj(
                    key="text-loader",
                    text=text,
                    position=[1, 0, 1],
                    scale=0.3,
                ),
                TriMesh(
                    key="trimesh",
                    vertices=np.array(mesh.vertices),
                    faces=np.array(mesh.faces),
                    position=[0, 0, 0],
                    color="#23aaff",
                    materialType="depth",
                ),
                TriMesh(
                    key="wireframe",
                    vertices=np.array(mesh.vertices),
                    faces=np.array(mesh.faces),
                    wireframe=True,
                    position=[-0.3, 0, 0],
                    color="yellow",
                ),
                # y-up
                up=[0, 1, 0],
            ),
        )

        i = 0
        while True:
            i += 1
            x, z = 0.3 * np.sin(i / 10), 0.3 * np.cos(i / 10)
            session.update @ TriMesh(
                key="trimesh",
                vertices=np.array(mesh.vertices),
                faces=np.array(mesh.faces),
                position=[x, 0, z],
                color="#23aaff",
            )
            await sleep(0.016)
