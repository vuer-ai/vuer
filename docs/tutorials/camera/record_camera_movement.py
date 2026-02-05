import os
from contextlib import nullcontext

from cmx import doc

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Recording Camera Movements

Before showing you how to control the camera movement programmatically from Python,
let's first learn how to record camera movements interactively.

This tutorial will teach you how to:
- Set up a logger to save camera movement data
- Create an event handler to capture camera movements
- Configure a scene with a movable camera view

By the end, you'll have a camera movement file saved to `assets/camera_movement.pkl`,
which you can use to replay camera movements programmatically in the next tutorial.
"""

doc @ """
## Step 1: Create the Camera Movement Handler

When you drag the camera in the browser, **Vuer** emits `CAMERA_MOVE` events. We define
an async handler function to capture these events and log them to a pickle file.

The handler receives two arguments:
- `event`: Contains the camera data (position, rotation, matrix)
- `sess`: The current Vuer session (not used here, but available for sending responses)

Then we create the Vuer app and register our handler for `CAMERA_MOVE` events.
The handler must be registered before starting the app.
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import os
    import asyncio
    import numpy as np
    from ml_logger import ML_Logger
    from vuer import Vuer, VuerSession
    from vuer.events import ClientEvent

    # We use `ML_Logger` to save camera movement data to disk. The logger will store
    # each camera position and orientation as you move the camera in the browser.
    logger = ML_Logger(root=os.getcwd(), prefix="assets")

    async def track_movement(event: ClientEvent, sess: VuerSession):
        # Only intercept events from the "ego" camera
        if event.key != "ego":
            return
        print("camera moved", event.value["matrix"])
        # Log the camera matrix and other values to a pickle file
        logger.log(**event.value, flush=True, silent=True, file="camera_movement.pkl")

    app = Vuer()

    # Register the handler to listen for camera movement events
    app.add_handler("CAMERA_MOVE", track_movement)

doc @ """
## Step 2: Set Up the Scene with a CameraView

We create a scene with a `CameraView` component. This renders a virtual camera
that you can move around interactively. 
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from vuer.schemas import DefaultScene, CameraView, OrbitControls

    @app.spawn(start=True)
    async def main(proxy):
        proxy.set @ DefaultScene(
            rawChildren=[
                CameraView(
                    fov=50,
                    width=320,
                    height=240,
                    key="ego",
                    position=[-0.5, 1.25, 0.5],
                    rotation=[-0.4 * np.pi, -0.1 * np.pi, 0.15 + np.pi],
                    stream="frame",
                    fps=30,
                    near=0.45,
                    far=1.8,
                    showFrustum=True,
                    downsample=1,
                    distanceToCamera=2,
                ),
            ],
            grid=False,
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        # Keep the session alive
        while True:
            await asyncio.sleep(1.0)

doc @ """
## Step 3: Running the Tutorial

Paste the code into `record_camera_movement.py` and run:

```bash
python record_camera_movement.py
```

Then open the URL printed in the terminal (usually `https://vuer.ai`).

Move the camera around by dragging in the browser. Each movement will be logged to
`assets/camera_movement.pkl`. You can then load this file in the next tutorial
to replay the camera trajectory programmatically.
"""

doc.flush()
