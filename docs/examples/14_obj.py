from pathlib import Path

from cmx import doc

doc @ """
# Plane Primitive

This example shows you how to construct a plane and have it visible on both sides.

We pass in `Plane.material.side=2` to the `Plane` constructor to make it visible on both sides.

"""

with doc:
    from asyncio import sleep

    from vuer import Vuer
    from vuer.events import Set
    from vuer.schemas import DefaultScene, Obj

    app = Vuer(static_root=f"{Path(__file__).parent}/../../assets/file_loaders/stairs_v1")

    # use `start=True` to start the app immediately
    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Obj(
                src="http://localhost:8012/static/textured.obj",
                mtl="http://localhost:8012/static/textured.mtl",
                # wireframe=True,
                # color="#ff0000",
            ),
            up=[0, 1, 0],
        )
        image = await session.grab_render()
        doc.image(image, width=600)

        session.set @ DefaultScene(
            Obj(
                src="http://localhost:8012/static/textured.obj",
                mtl="http://localhost:8012/static/textured.mtl",
                wireframe=True,
                # color="#ff0000",
            ),
            up=[0, 1, 0],
        )
        image = await session.grab_render()
        doc.image(image, width=600)

        session.set @ DefaultScene(
            Obj(
                src="http://localhost:8012/static/textured.obj",
                mtl="http://localhost:8012/static/textured.mtl",
                wireframe=True,
                # color="#ff0000",
            ),
            up=[0, 1, 0],
        )
        image = await session.grab_render()
        doc.image(image, width=600)

        doc.flush()

        while True:
            await sleep(1.0)

doc.flush()
