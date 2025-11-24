# CameraView - Virtual Camera

## Overview

`CameraView` creates a virtual camera for off-screen rendering, perfect for security camera views, picture-in-picture displays, or collecting rendered images for machine learning.

![Virtual Camera](../../tutorials/camera/figures/grab_render_virtual_camera.png)

## Basic Usage

From the [virtual camera tutorial](../../tutorials/camera/grab_render_virtual_camera):

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, CameraView, Sphere

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Sphere(key="sphere"),
        rawChildren=[
            CameraView(
                width=320,
                height=240,
                position=[-0.5, 1.25, 0.5],
                rotation=[-0.4 * 3.14, -0.1 * 3.14, 0.15 + 3.14],
                fov=50,
                stream="30fps",
                key="monitor",
            ),
        ],
    )

    await session.forever()
```

## Parameters

```python
CameraView(
    width=320,              # Render width
    height=240,             # Render height
    position=[x, y, z],     # Camera position
    rotation=[rx, ry, rz],  # Camera orientation
    fov=50,                 # Field of view (degrees)
    stream="30fps",         # Streaming mode
    near=0.1,               # Near clipping plane
    far=100,                # Far clipping plane
    renderDepth=False,      # Render depth map
    showFrustum=True,       # Show camera frustum
    key="unique-id",
)
```

## Streaming Modes

- `"30fps"`, `"60fps"` - Continuous streaming
- `"ondemand"` - Render only when requested via `session.grab_render()`
- `"frame"` - Event-driven per frame

## Grabbing Renders

For on-demand rendering:

```python
session.set @ CameraView(stream="ondemand", renderDepth=True, key="cam")

# Later, grab the render
result = await session.grab_render(key="cam")
frame = result.value["frame"]  # RGB image
depth = result.value["depthFrame"]  # Depth map (if renderDepth=True)
```

## Use Cases

- **Security cameras** - Multiple viewpoints
- **ML data collection** - Rendered images and depth
- **Picture-in-picture** - Mini views in VR
- **Debug views** - See from different angles

## Next Steps

- [Frustum](02_frustum) - Visualize camera view volume
- [Camera Control](../04_camera_control) - Full camera tutorial
