from pathlib import Path
import os
from contextlib import nullcontext

from cmx import doc

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# Detecting When Assets Have Been Loaded

![obj files](figures/object_files/obj_files.png)

## Why Track Asset Loading?

3D assets can be very large (hundreds of MBs), and loading them takes time. You often need to know when assets have finished loading so you can:
- Start simulations only after all meshes are ready
- Show loading progress to users
- Trigger animations or other actions upon completion

## How It Works

Vuer provides a simple event-based mechanism:

1. **Set the `onLoad` attribute** on your 3D component with a descriptive string
2. **Register a `LOAD` event handler** that will be called when loading completes

The `onLoad` string you provide will be passed to your handler as `event.value`, allowing you to identify which asset finished loading.

> **Note**: The `onLoad` event works with all 3D asset components in Vuer, not just `Obj`.

## Code Example
"""

with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep

    from vuer import Vuer
    from vuer.events import ClientEvent
    from vuer.schemas import DefaultScene, Obj, OrbitControls

    app = Vuer(static_root=f"{Path(__file__).parent}/../../../assets")

    # Register a handler for the LOAD event
    @app.add_handler("LOAD")
    async def onLoad(event: ClientEvent, _):
        print(f"mesh has been loaded: {event.value}")

    # Set up the scene with multiple Obj components
    # use `start=True` to start the app immediately
    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Obj(
                src="http://localhost:8012/static/file_loaders/stairs_v1/textured.obj",
                mtl="http://localhost:8012/static/file_loaders/stairs_v1/textured.mtl",
                position=[-4.5, 1.5, -3.5],
                # This component emits a `LOAD` event when the mesh is loaded.
                # this also extends to other 3D asset components.
                onLoad="textured stairs are loaded",
            ),
            up=[0, 1, 0],
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        session.add @ Obj(
            src="http://localhost:8012/static/file_loaders/stairs_v1/textured.obj",
            # you can omit this. See the red stairs below.
            mtl="http://localhost:8012/static/file_loaders/stairs_v1/textured.mtl",
            wireframe=True,
            position=[0, 1.5, 0],
            onLoad="wireframe stairs are loaded",
        )

        session.add @ Obj(
            src="http://localhost:8012/static/file_loaders/stairs_v1/textured.obj",
            wireframe=True,
            color="#ff0000",
            position=[4.5, 1.5, 3.5],
            onLoad="red stairs are loaded",
        )

        while True:
            await sleep(1.0)


doc @ """
## Expected Output

When the assets finish loading, the handler prints:
```
mesh has been loaded: textured stairs are loaded
mesh has been loaded: wireframe stairs are loaded
mesh has been loaded: red stairs are loaded
```

![wireframe](figures/object_files/wireframe.png)

![textured](figures/object_files/textured_mesh.png)

![colored mesh](figures/object_files/colored_mesh.png)

"""

doc.flush()
