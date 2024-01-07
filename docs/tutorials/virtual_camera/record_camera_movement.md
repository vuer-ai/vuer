
# Recording Camera Movements

Before I show you how to control the camera movement programmatically from the python side,
let me first show you how to record the camera movements. This simple tutorial will produce
a camera movement file in `assets/camera_movement.pkl`. You can then use this file to control
the camera movement programmatically in the next tutorial.


## Collecting User Camera Movement

here is a simple example for logging the camera movement.

```python
import numpy as np

from vuer import Vuer, VuerSession
from vuer.events import ClientEvent
from vuer.schemas import DefaultScene, CameraView
```

# Collecting Render

This example requires saving and loading data from the local disk. 

Let's first instantiate a local ML-Logger instance.

```python
import os
from ml_logger import ML_Logger

logger = ML_Logger(root=os.getcwd(), prefix="assets")
doc.print(logger)

async def track_movement(event: ClientEvent, sess: VuerSession):
    # only intercept the ego camera.
    if event.key != "ego":
        return
    print("camera moved", event.value["matrix"])
    logger.log(**event.value, flush=True, silent=True, file="camera_movement.pkl")

app = Vuer()

app.add_handler("CAMERA_MOVE", track_movement)

# We don't auto start the vuer app because we need to bind a handler.
@app.spawn(start=True)
async def show_heatmap(proxy):
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
                distanceToCamera=2
                # dpr=1,
            ),
        ],
        # hide the helper to only render the objects.
        grid=False,
        show_helper=False,
    )
    while True:
        await asyncio.sleep(1.0)
```

```
ML_Logger(root="/Users/ge/mit/vuer/docs/tutorials/virtual_camera",
          prefix="assets")
```
