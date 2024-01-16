import os
from contextlib import nullcontext

from cmx import doc

doc @ """
# Collecting Render from a Virtual Camera

![grab_render_virtual_camera](figures/grab_render_virtual_camera.jpg)

This example requires saving and loading data from the local disk. 

Let's first instantiate a local ML-Logger instance.
"""
with doc:
    from ml_logger import ML_Logger
    from pandas import DataFrame

    logger = ML_Logger(root=os.getcwd(), prefix="assets")
    doc.print(logger)

    matrices = logger.load_pkl("metrics.pkl")
    matrices = DataFrame(matrices)["matrix"].values.tolist()

with doc:
    from asyncio import sleep, TimeoutError

    import numpy as np

    from vuer import Vuer, VuerSession
    from vuer.events import ClientEvent
    from vuer.schemas import Box, Sphere, DefaultScene, CameraView, Plane

    app = Vuer(queries=dict(grid=False))

doc @ """
In the past we use the "CAMERA_VIEW" event to collect the rendered image. This is only supported
in the stream="frame" or stream="time" mode. Since these modes offer little control for the backend,
we offer the synchronous `grab_render` RPC api. This api is only available in the stream="ondemand"

**frame and time mode:**

This should not print anything because we set the `CameraView` to stream="ondemand" mode.
"""
with doc, doc.skip:

    @app.add_handler("CAMERA_VIEW")
    async def collect_render(event: ClientEvent, sess: VuerSession):
        global counter
        print("return render event with keys: [", end="")
        print(*event.value.keys(), sep=", ", end="]\r")


doc @ """
**ondemand mode:**
"""
with doc, doc.skip:
    # We don't auto start the vuer app because we need to bind a handler.
    @app.spawn(start=True)
    async def show_heatmap(proxy):
        proxy.set @ DefaultScene(
            Sphere(
                key="sphere",
                args=[0.1, 20, 20],
                position=[0, 0, 0],
                rotation=[0, 0, 0],
                materialType="depth",
            ),
            rawChildren=[
                CameraView(
                    fov=50,
                    width=320,
                    height=240,
                    key="ego",
                    position=[-0.5, 1.25, 0.5],
                    rotation=[-0.4 * np.pi, -0.1 * np.pi, 0.15 + np.pi],
                    stream="ondemand",
                    fps=30,
                    near=0.45,
                    far=1.8,
                    showFrustum=True,
                    downsample=1,
                    distanceToCamera=2
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

            proxy.update @ [
                Sphere(
                    key="sphere",
                    args=[0.1, 20, 20],
                    position=position,
                    rotation=[0, 0, 0],
                    materialType="depth",
                ),
                CameraView(
                    fov=50,
                    width=320,
                    height=240,
                    key="ego",
                    matrix=matrices[i % len(matrices)],
                    stream="ondemand",
                    fps=30,
                    near=0.45,
                    far=1.8,
                    showFrustum=True,
                    downsample=1,
                    distanceToCamera=2,
                    movable=False,
                ),
            ]
            await sleep(0.0)
            try:
                result = await proxy.grab_render(downsample=1, key="ego")
                print("you render came back with keys: [", end="")
                print(*result.value.keys(), sep=", ", end="]\r")
            except TimeoutError:
                print("timed out.")


doc.flush()
