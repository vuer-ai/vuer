
# Collecting Renders from a Virtual Camera

![grab_render_virtual_camera](figures/grab_render_virtual_camera.png)

This tutorial builds on [Replaying Camera Movements](move_camera.md) and shows
you how to programmatically capture rendered frames from a virtual camera.

In the previous tutorial, we used the `CAMERA_VIEW` event handler with `stream="frame"`
to collect rendered images. While this approach works, it offers limited control over
when frames are captured. This tutorial introduces the synchronous `grab_render` RPC API,
which gives you precise control over frame capture timing.

This tutorial will teach you how to:
- Use `stream="ondemand"` mode for on-demand rendering
- Capture frames synchronously using `grab_render()`
- Render and retrieve depth maps

**Prerequisites:** Run the [Recording Camera Movements](record_camera_movement.md) tutorial first to generate
the `assets/camera_movement.pkl` file.


## Understanding Stream Modes

The `CameraView` component supports three streaming modes:

| Mode | Description | Use Case |
|------|-------------|----------|
| `frame` | Streams every rendered frame | Real-time monitoring |
| `time` | Streams at fixed time intervals | Periodic sampling |
| `ondemand` | Only renders when requested | Precise control, data collection |

For data collection and synchronous workflows, `stream="ondemand"` is recommended
because it only renders frames when you explicitly request them via `grab_render()`.


## Step 1: Load Camera Trajectory and Set Up Imports

First, we load the recorded camera matrices from the previous tutorial.

```python
import cv2
import numpy as np
from asyncio import sleep, TimeoutError
from io import BytesIO
from PIL import Image as PImage

from ml_logger import ML_Logger
from pandas import DataFrame

logger = ML_Logger(root=os.getcwd(), prefix="assets")

# Load the recorded camera movement data
matrices = logger.load_pkl("camera_movement.pkl")
matrices = DataFrame(matrices)["matrix"].values.tolist()
```

## Step 2: Create the Scene with On-Demand Rendering

We set up a scene with `stream="ondemand"` mode. The key difference from the
previous tutorial is that no frames are transmitted until we explicitly call
`grab_render()`.

```{admonition} Depth Rendering
:class: tip
Set `renderDepth=True` to also capture depth maps. The depth data will be
available in the `depthFrame` field of the response.
```

```python
from vuer import Vuer
from vuer.schemas import Sphere, DefaultScene, CameraView

app = Vuer(queries=dict(grid=False))

@app.spawn(start=True)
async def main(proxy):
    # Set up the initial scene with on-demand rendering
    proxy.set @ DefaultScene(
        Sphere(key="sphere"),
        rawChildren=[
            CameraView(
                fov=50,
                width=320,
                height=240,
                key="ego",
                position=[-0.5, 1.25, 0.5],
                rotation=[-0.4 * np.pi, -0.1 * np.pi, 0.15 + np.pi],
                stream="ondemand",  # Key difference: only render when requested
                fps=30,
                near=0.45,
                far=1.8,
                renderDepth=True,  # Enable depth rendering
                showFrustum=True,
                downsample=1,
                distanceToCamera=2,
            ),
        ],
    )
    await sleep(0.0)

    # Animation loop: update scene and grab renders synchronously
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
                materialType="standard",
                material={"roughness": 0.5, "metalness": 0.5, "color": "red"},
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
                renderDepth=True,
                showFrustum=True,
                downsample=1,
                distanceToCamera=2,
                movable=False,
            ),
        ]
        await sleep(0.0)

        # Synchronously request a render from the virtual camera
        try:
            result = await proxy.grab_render(downsample=1, key="ego")
            print("\rRender received with keys:", list(result.value.keys()), end="")

            # Process RGB frame
            rgb_frame = result.value["frame"]
            rgb_pil = PImage.open(BytesIO(rgb_frame))
            rgb_img = np.array(rgb_pil)
            rgb_bgr = cv2.cvtColor(rgb_img, cv2.COLOR_RGB2BGR)

            # Process depth frame
            depth_frame = result.value["depthFrame"]
            depth_pil = PImage.open(BytesIO(depth_frame))
            depth_img = np.array(depth_pil)
            # Convert grayscale depth to BGR for side-by-side display
            if len(depth_img.shape) == 2:
                depth_bgr = cv2.cvtColor(depth_img, cv2.COLOR_GRAY2BGR)
            else:
                depth_bgr = cv2.cvtColor(depth_img, cv2.COLOR_RGB2BGR)

            # Display RGB and depth frames side by side
            combined = np.hstack([rgb_bgr, depth_bgr])
            cv2.imshow("RGB (left) | Depth (right)", combined)
            if cv2.waitKey(1) == ord("q"):
                exit()

        except TimeoutError:
            print("Render request timed out.")
```

## Step 3: Running the Tutorial

Paste the code into `grab_render_virtual_camera.py` and run:

```bash
python grab_render_virtual_camera.py
```

Open the URL printed in the terminal (usually `https://vuer.ai`).

You should see the camera moving through the recorded trajectory while capturing
frames on-demand. An OpenCV window will display both the RGB and depth frames
side by side. Press 'q' to quit.

## Comparison with Event-Based Approach

| Approach | Method | Control | Best For |
|----------|--------|---------|----------|
| Event-based | `CAMERA_VIEW` handler | Passive, receives all frames | Real-time streaming |
| On-demand | `grab_render()` | Active, request specific frames | Data collection, synchronous workflows |

The `grab_render()` approach is particularly useful when you need to:
- Ensure a frame is captured at a specific point in your simulation
- Synchronize frame capture with other operations
- Avoid processing unnecessary frames
