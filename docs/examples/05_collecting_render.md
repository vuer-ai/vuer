
# Collecting Render

This example requires saving and loading data from the local disk. We
collected these camera pose data from the previous example. If you are
missing these files, can go back to the previous example to generate
the `*.pkl` files.

## Loading Camera Trajectory Data

Let's first instantiate a local ML-Logger instance. To install `ml-logger`:

```shell
conda install pandas pycurl
pip install ml-logger functional_notations
```

```python
from ml_logger import ML_Logger
from pandas import DataFrame

logger = ML_Logger(
    root=os.path.join(os.getcwd(), "..", "..", ".."), prefix="assets"
)

matrices = logger.load_pkl("metrics.pkl")
matrices = DataFrame(matrices)["matrix"].values.tolist()
```

```python
Out[1]: ML_Logger(root="/some/logging/prefix/path/../../..", 
                  prefix="assets")
```

```python
from asyncio import sleep
from io import BytesIO

import numpy as np
import PIL.Image as PImage

from vuer import Vuer, VuerSession
from vuer.events import ClientEvent
from vuer.schemas import Box, Sphere, DefaultScene, CameraView, Plane

app = Vuer()

# We don't auto start the vuer app because we need to bind a handler.
@app.spawn
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
                distanceToCamera=2,
                # dpr=1,
            ),
        ],
        # hide the helper to only render the objects.
        grid=False,
        show_helper=False,
    )

    proxy.add @ Box(
        key="box",
        args=[0.2, 0.2, 0.2],
        position=[0, 0, 0.1],
        rotation=[0, 0, 0],
        materialType="depth",
        material=dict(color="green"),
        outlines=dict(angle=0, thickness=0.005, color="white"),
    )

    proxy.add @ Plane(
        key="ground-plane",
        args=[10, 10, 10],
        position=[0, 0, -0.01],
        rotation=[0, 0, 0],
        materialType="depth",
        material=dict(color="green", side=2),
    )

    (
        proxy.add
        @ Sphere(
            key="sphere",
            args=[0.1, 200, 200],
            position=[0.2, 0, 0.1],
            rotation=[0, 0, 0],
            materialType="depth",
            outlines=dict(angle=0, thickness=0.002, color="white"),
        ),
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
                stream="frame",
                fps=30,
                near=0.45,
                far=1.8,
                showFrustum=True,
                downsample=1,
                distanceToCamera=2,
                movable=False,
                # dpr=1,
            ),
        ]

        await sleep(0.014)
```


```{admonition} The code below is also needed!
Remember to add the `app.start()` at the end to launch the vuer session!
all of the code snippets in this example, including the ones below, are
parts of the script.
```

## Binding the Camera Movement Handler

We can now add a handler function to collect the camera movement.


```python
counter = 0

@app.add_handler("CAMERA_VIEW")
async def collect_render(event: ClientEvent, sess: VuerSession):
    global counter
    import cv2

    # add you render saving logic here.
    counter += 1
    if counter % 1 == 0:
        value = event.value

        buff = value["frame"]
        pil_image = PImage.open(BytesIO(buff))
        img = np.array(pil_image)
        img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        cv2.imshow("frame", img_bgr)
        if cv2.waitKey(1) == ord("q"):
            exit()
```


```{admonition} OpenCV waitKey blocks the event loop!
When you use with a UVC Camera, the `cv2.waitKey` call
could block the entire event loop. This could cause the
script to pause. 
```

## How To Collect Camera Movement

here is a simple example for logging the camera movement. 

```{admonition} Alternative Syntax
You can also bind to those handler functions via

    app.add_handler("CAMERA_VIEW", collect_render)
    app.add_handler("CAMERA_MOVE", track_movement)

```


```python
@app.add_handler("CAMERA_MOVE")
async def track_movement(event: ClientEvent, sess: VuerSession):
    # only intercept the ego camera.
    if event.key != "ego":
        return
    print("camera moved", event.value["matrix"])
    logger.log(**event.value, flush=True, silent=True)
```

## Starting the Vuer Server

Now finally, you can start the vuer app:

```python
app.start()
```
