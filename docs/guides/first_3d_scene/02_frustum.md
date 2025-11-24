# Frustum - Camera View Volume

## Overview

`Frustum` visualizes a camera's view volume (frustum), showing what a camera can see. Essential for debugging camera positions and understanding view coverage.

![Camera Frustums](../../examples/figures/12_camera.jpg)

## Basic Usage

From the [camera frustum example](../../examples/12_camera):

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Frustum

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Frustum(
            position=[0, 1, 0],
            rotation=[0.5 * 3.14, 0, 0],
            scale=1.0,
            showImagePlane=True,
            showFrustum=True,
            showFocalPlane=False,
            key="frustum",
        ),
    )

    await session.forever()
```

## Parameters

```python
Frustum(
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=1.0,               # Overall size
    fov=50,                  # Field of view (degrees)
    aspect=1.33,             # Aspect ratio (width/height)
    showImagePlane=True,     # Show image plane at far distance
    showFrustum=True,        # Show frustum edges
    showFocalPlane=False,    # Show focal plane
    key="unique-id",
)
```

## Display Options

- **showImagePlane** - Rectangle showing where image is captured
- **showFrustum** - Pyramid edges showing view volume
- **showFocalPlane** - Plane at focal distance

## Use Cases

- **Camera placement** - Visualize coverage before capturing
- **Multi-camera systems** - Debug overlapping views
- **Robotics** - Show sensor fields of view
- **Scene planning** - Understand what cameras will see

## Multiple Frustums

```python
session.set @ DefaultScene(
    # Top-down camera
    Frustum(position=[0, 5, 0], rotation=[-3.14/2, 0, 0], key="top"),

    # Front camera
    Frustum(position=[0, 1, 3], rotation=[0, 3.14, 0], key="front"),

    # Side camera
    Frustum(position=[3, 1, 0], rotation=[0, 3.14/2, 0], key="side"),
)
```

## Next Steps

- [CameraView](02_camera_view) - Actual rendering camera
- [Camera Control](../04_camera_control) - Full camera tutorial
