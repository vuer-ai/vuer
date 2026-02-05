
# Replaying Camera Movements

This tutorial shows you how to programmatically control the camera using
previously recorded camera movements. This is the companion tutorial to
[Recording Camera Movements](record_camera_movement.md).

This tutorial will teach you how to:
- Load recorded camera movement data from a pickle file
- Set up a scene with 3D objects (box, plane, sphere)
- Animate the camera by replaying the recorded trajectory
- (Optional) Capture rendered frames from the virtual camera

**Prerequisites:** Run the [Recording Camera Movements](record_camera_movement.md) tutorial first to generate
the `assets/camera_movement.pkl` file.


## Step 1: Load the Recorded Camera Matrices

First, we load the camera matrices that were saved in the previous tutorial.
Each matrix represents a camera pose (position + orientation) at a point in time.

```python
import cv2
from io import BytesIO
import PIL.Image as PImage
from ml_logger import ML_Logger
from pandas import DataFrame

logger = ML_Logger(root=os.getcwd(), prefix="assets")

# Load the recorded camera movement data
matrices = logger.load_pkl("camera_movement.pkl")
# Extract just the matrix column as a list
matrices = DataFrame(matrices)["matrix"].values.tolist()
```

## Step 2: Create the Scene with 3D Objects

We set up a scene with some objects to observe as the camera moves:
- A `Box` in the center
- A `Plane` as the ground
- A `Sphere` that bounces up and down (for visual interest)

The `CameraView` component represents our virtual camera with `showFrustum=True`
to visualize the camera's field of view.

```python
from asyncio import sleep

import numpy as np

from vuer import Vuer, VuerSession
from vuer.events import ClientEvent
from vuer.schemas import Box, CameraView, DefaultScene, Plane, Sphere

app = Vuer()

# We use start=False here because we need to register the CAMERA_VIEW handler
# before starting the app. The app will be started later with app.start().
@app.spawn(start=False)
async def main(proxy):
    # Set up the initial scene with a camera view
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
    )

    # Add a box to the scene
    proxy.add @ Box(
        key="box",
        args=[0.2, 0.2, 0.2],
        position=[0, 0, 0.1],
        rotation=[0, 0, 0],
        materialType="depth",
        material=dict(color="green"),
        outlines=dict(angle=0, thickness=0.005, color="white"),
    )

    # Add a ground plane
    proxy.add @ Plane(
        key="ground-plane",
        args=[10, 10, 10],
        position=[0, 0, -0.01],
        rotation=[0, 0, 0],
        materialType="depth",
        material=dict(color="green", side=2),
    )

    # Add a sphere that will bounce
    proxy.add @ Sphere(
        key="sphere",
        args=[0.1, 200, 200],
        position=[0.2, 0, 0.1],
        rotation=[0, 0, 0],
        materialType="depth",
        outlines=dict(angle=0, thickness=0.002, color="white"),
    )

    await sleep(0.0)

    # Animation loop: replay camera trajectory and animate the sphere
    i = 0
    while True:
        i += 1

        # Calculate bouncing sphere position
        h = 0.25 - (0.00866 * (i % 120 - 60)) ** 2
        position = [0.2, 0.0, 0.1 + h]

        # Update both the sphere position and camera pose
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
                # Use the recorded matrix to set the camera pose
                matrix=matrices[i % len(matrices)],
                stream="frame",
                fps=30,
                near=0.45,
                far=1.8,
                showFrustum=True,
                downsample=1,
                distanceToCamera=2,
                # Disable user interaction since we're controlling programmatically
                movable=False,
            ),
        ]

        await sleep(0.014)
```

## Step 3: Capture Rendered Frames

You can also capture the frames rendered by the virtual camera. This is useful
for generating datasets or recording videos. The handler receives `CAMERA_VIEW`
events containing the rendered frame as a buffer.

```python
counter = 0

async def collect_render(event: ClientEvent, sess: VuerSession):
    global counter
    counter += 1

    # Extract the frame buffer from the event
    value = event.value
    buff = value["frame"]

    # Convert to PIL Image, then to numpy array for OpenCV
    pil_image = PImage.open(BytesIO(buff))
    img = np.array(pil_image)
    img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    # Display the frame (press 'q' to quit)
    cv2.imshow("frame", img_bgr)
    if cv2.waitKey(1) == ord("q"):
        exit()

# Register the handler for camera view events
app.add_handler("CAMERA_VIEW", collect_render)

# Now start the app. This must be called after registering all handlers.
# app.start() is blocking, so it should be the last line in your script.
app.start()
```

## Step 4: Running the Tutorial

Paste the code into `move_camera.py` and run:

```bash
python move_camera.py
```

Open the URL printed in the terminal (usually `https://vuer.ai`).

You should see the camera automatically moving through the recorded trajectory,
while a sphere bounces in the scene. The camera frustum visualization shows
where the virtual camera is looking.
