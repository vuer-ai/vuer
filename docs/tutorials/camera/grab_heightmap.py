from io import BytesIO

import cv2
from cmx import doc
from PIL import Image as PImage

doc @ """
# Collecting The Height Map of the Scene Using an Orthographic Camera

"""
with doc:
    from asyncio import sleep, TimeoutError

    import numpy as np

    from vuer import Vuer, VuerSession
    from vuer.events import ClientEvent
    from vuer.schemas import Sphere, DefaultScene, CameraView, Plane

    app = Vuer(queries=dict(grid=False))

doc @ """
In the past we use the "CAMERA_VIEW" event to collect the rendered image. This is only supported
in the stream="frame" or stream="time" mode. Since these modes offer little control for the backend,
we offer the synchronous `grab_render` RPC api. This api is only available in the stream="ondemand"

## Frame and Time mode

This should not print anything because we set the `CameraView` to stream="ondemand" mode.
"""
with doc, doc.skip:

    @app.add_handler("CAMERA_VIEW")
    async def collect_render(event: ClientEvent, sess: VuerSession):
        global counter
        print("return render event with keys: [", end="")
        print(*event.value.keys(), sep=", ", end="]\r")


doc @ """
## Render `ondemand`

This is the version you should use. It does not render for transmittion
unless requested. 

A `session.grab_render(key)` rps call will return the rendered image. Use the `renderDepth` flag to request the depth map. See below:

```{admonition} Depth Rendering
The `renderDepth` flag should be set to `True` to render the depth map.
```
"""
with doc:
    # We don't auto start the vuer app because we need to bind a handler.
    @app.spawn(start=True)
    async def show_heatmap(proxy):
        proxy.set @ DefaultScene(
            Sphere(key="sphere"),
            Plane(args=[5, 5, 2, 2], key="ground"),
            rawChildren=[
                CameraView(
                    ctype="orthographic",
                    fov=50,
                    width=320,
                    height=240,
                    key="ego",
                    position=[0, 0, 2],
                    rotation=[0, 0, -0.5 * np.pi],
                    stream="ondemand",
                    fps=30,
                    near=0.45,
                    far=2.2,
                    renderDepth=True,
                    showFrustum=True,
                    downsample=1,
                    distanceToCamera=2,
                    # dpr=1,
                ),
            ],
            # hide the helper to only render the objects.
            show_helper=False,
        )
        await sleep(0.0)

        i = 0
        while True:
            i += 1
            h = 0.25 - (0.00866 * (i % 120 - 60)) ** 2
            position = [0.2, 0.0, 0.1 + h]

            proxy.update @ Sphere(
                key="sphere",
                args=[0.1, 20, 20],
                position=position,
                rotation=[0, 0, 0],
                materialType="standard",
                material={"roughness": 0.5, "metalness": 0.5, "color": "red"},
            )
            await sleep(0.0)
            try:
                result = await proxy.grab_render(downsample=1, key="ego")
                print("\ryou render came back with keys: [", end="")
                print(*result.value.keys(), sep=", ", end="]")

                frame = result.value["depthFrame"] or result.value["frame"]
                pil_image = PImage.open(BytesIO(frame))
                img = np.array(pil_image)
                img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
                cv2.imshow("monitor", img_bgr)
                if cv2.waitKey(1) == ord("q"):
                    exit()

            except TimeoutError:
                print("timed out.")


doc.flush()
