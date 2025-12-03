import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# CameraView

The `CameraView` component creates a virtual camera in your scene that can render
images from arbitrary viewpoints. This is essential for:
- Generating synthetic training data for computer vision
- Creating observation inputs for robot learning
- Capturing screenshots and videos of your scene
- Visualizing camera frustums in 3D

```{admonition} Huge Caveat
:class: info
if you use more than 31 virtual cameras, it breaks your mac.
because it overflows the max number of webGL context, and it shuts your computer down!
```

## Basic Usage

A minimal example that creates a virtual camera and displays its frustum:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import numpy as np
    from vuer import Vuer, VuerSession
    from vuer.schemas import DefaultScene, CameraView, Sphere, OrbitControls

    app = Vuer()

    @app.spawn(start=True)
    async def main(sess: VuerSession):
        sess.set @ DefaultScene(
            Sphere(
                key="sphere",
                args=[0.2, 32, 32],
                position=[0, 0, 0.2],
                material={"color": "red"},
            ),
            show_helper=False,
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
                    monitor=True,  # you can disable the camera render on the top left by setting this as false
                ),
            ],
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        await sess.forever()

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | `"ego"` | Unique identifier for the camera |
| `fov` | float | `50` | Vertical field of view of the camera in degrees |
| `width` | int | `320` | Width of the camera image in pixels |
| `height` | int | `240` | Height of the camera image in pixels |
| `position` | List[float] | `[0, 0, 0]` | Position of the camera in world coordinates |
| `rotation` | List[float] | `[0, 0, 0]` | Rotation of the camera (Euler angles) |
| `stream` | str | `"ondemand"` | Stream mode: `"frame"`, `"time"`, or `"ondemand"` |
| `fps` | int | `30` | Frames per second of the camera for streaming modes |
| `near` | float | `0.1` | Near clipping plane distance |
| `far` | float | `20` | Far clipping plane distance |
| `renderDepth` | bool | `True` | Whether to render depth. If set, returns value["depthFrame"] |
| `showFrustum` | bool | `True` | Whether to show the frustum visualization |
| `downsample` | int | `1` | Downsample rate for rendered images |
| `distanceToCamera` | float | `2` | Distance to the camera |
| `monitor` | bool | `True` | Camera Render |

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
"""

doc.flush()
