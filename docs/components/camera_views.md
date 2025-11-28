
# CameraView

The `CameraView` component creates a virtual camera in your scene that can render
images from arbitrary viewpoints. This is essential for:
- Generating synthetic training data for computer vision
- Creating observation inputs for robot learning
- Capturing screenshots and videos of your scene
- Visualizing camera frustums in 3D

## Basic Usage

A minimal example that creates a virtual camera and displays its frustum:

```python
import asyncio
import numpy as np
from vuer import Vuer
from vuer.schemas import DefaultScene, CameraView, Sphere, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(proxy):
    proxy.set @ DefaultScene(
        Sphere(
            key="sphere",
            args=[0.2, 32, 32],
            position=[0, 0, 0.2],
            material={"color": "red"},
        ),
        rawChildren=[
            CameraView(
                key="ego",
                fov=20,
                far=3,
                width=320,
                height=240,
                position=[1.0, 1.0, 0.5],
                rotation=[-0.3 * np.pi, 0.25 * np.pi, 0],
                showFrustum=True,
            ),
        ],
        bgChildren=[
            OrbitControls(key="OrbitControls")
        ],
    )

    while True:
        await asyncio.sleep(1.0)
```

## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | `"ego"` | Unique identifier for the camera |
| `fov` | float | `50` | Vertical field of view in degrees |
| `width` | int | `320` | Image width in pixels |
| `height` | int | `240` | Image height in pixels |
| `position` | list | `[0,0,0]` | Camera position in world coordinates |
| `rotation` | list | `[0,0,0]` | Camera rotation (Euler angles) |
| `matrix` | list | - | 4x4 transformation matrix (overrides position/rotation) |
| `near` | float | `0.1` | Near clipping plane distance |
| `far` | float | `20` | Far clipping plane distance |
| `showFrustum` | bool | `True` | Whether to visualize the camera frustum |
| `stream` | str | `"ondemand"` | Streaming mode: `"frame"`, `"time"`, or `"ondemand"` |
| `renderDepth` | bool | `True` | Whether to capture depth images |
| `fps` | int | `30` | Target frame rate for streaming modes |
| `downsample` | int | `1` | Downsampling factor for rendered images |

## Streaming Modes

The `stream` parameter controls how the camera sends rendered frames:

| Mode | Description | Use Case |
|------|-------------|----------|
| `"frame"` | Streams every rendered frame via `CAMERA_VIEW` events | Real-time monitoring |
| `"time"` | Streams at fixed time intervals | Periodic sampling |
| `"ondemand"` | Only renders when `grab_render()` is called | Data collection, synchronous workflows |

## Learn More

For detailed tutorials on using `CameraView`, see:

- [Recording Camera Movements](../tutorials/camera/record_camera_movement.md) - Capture camera trajectories interactively
- [Replaying Camera Movements](../tutorials/camera/move_camera.md) - Animate cameras with recorded data
- [Collecting Renders](../tutorials/camera/grab_render_virtual_camera.md) - Capture frames using `grab_render()`
- [Render Queue](../tutorials/camera/render_queue.md) - Scale rendering across multiple sessions
- [Capturing Height Maps](../tutorials/camera/grab_heightmap.md) - Use orthographic cameras for terrain data
