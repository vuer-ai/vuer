from pathlib import Path

from cmx import doc

doc @ """
# Plane Primitive

![obj files](figures/object_files/obj_files.png)

This example shows you how to construct a plane and have it visible on both sides.

We pass in `Plane.material.side=2` to the `Plane` constructor to make it visible on both sides.

```shell
mkdir -p assets
wget https://github.com/vuer-ai/assets/raw/main/file_loaders/stairs_v1/textured.obj?download= -O assets/textured.obj
wget https://github.com/vuer-ai/assets/raw/main/file_loaders/stairs_v1/textured.mtl?download= -O assets/textured.mtl
wget https://github.com/vuer-ai/assets/raw/main/file_loaders/stairs_v1/textured_0_YV3hq55a.jpg?download= -O assets/textured_0_YV3hq55a.jpg
```

This should produce the following file tree:
```
assets
├── textured.mtl
├── textured.obj
└── textured_0_YV3hq55a.jpg

1 directory, 3 files
```

We first setup the vuer app:
"""

with doc:
    from asyncio import sleep

    from vuer import Vuer
    from vuer.events import Set, ClientEvent
    from vuer.schemas import DefaultScene, Obj

    app = Vuer(static_root=f"{Path(__file__).parent}/assets")

doc @ """
## Detecting when the assets has been loaded

Sometimes the 3D assets we want to load can be very large (in the hundreds of MBs). In that case, we want to know when the assets has been loaded so that we can start the simulation and the rendering.

To do so, simply bind a function to the `LOAD` event, which is emitted if
1. the component has been loaded
2. the `onLoad` attribute is set to a non-empty string.
"""

with doc:

    @app.add_handler("LOAD")
    async def onLoad(event: ClientEvent, _):
        print(f"mesh has been loaded: {event.value}")

doc @ """
This should print out the following message:
```
mesh has been loaded: textured stairs are loaded
mesh has been loaded: wireframe stairs are loaded
mesh has been loaded: red stairs are loaded
```

Now to setup the scene, we can bind the main function:
"""
with doc, doc.skip:
    # use `start=True` to start the app immediately
    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Obj(
                src="http://localhost:8012/static/textured.obj",
                mtl="http://localhost:8012/static/textured.mtl",
                position=[-4.5, 1.5, -3.5],
                # This component emits a `LOAD` event when the mesh is loaded.
                # this also extends to other 3D asset components.
                onLoad="textured stairs are loaded",
            ),
            up=[0, 1, 0],
        )

        session.add @ Obj(
            src="http://localhost:8012/static/textured.obj",
            # you can omit this. See the red stairs below.
            mtl="http://localhost:8012/static/textured.mtl",
            wireframe=True,
            position=[0, 1.5, 0],
            onLoad="wireframe stairs are loaded",
        )

        session.add @ Obj(
            src="http://localhost:8012/static/textured.obj",
            wireframe=True,
            color="#ff0000",
            position=[4.5, 1.5, 3.5],
            onLoad="red stairs are loaded",
        )

        while True:
            await sleep(1.0)


doc @ """

Optionally you can omit the material (`mtl`) file. In that case only the mesh will be loaded.

![wireframe](figures/object_files/wireframe.png)

![textured](figures/object_files/textured_mesh.png)

![colored mesh](figures/object_files/colored_mesh.png)
"""

doc.flush()
