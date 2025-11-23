import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Frustum

The `Frustum` component visualizes camera frustums in 3D space.
This is ideal for:
- Visualizing camera field of view
- Debugging camera placements
- Displaying camera trajectories
- Creating multi-camera visualization setups

![](figures/frustum.jpg)

## Basic Usage

A minimal example that creates a camera frustum:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    from vuer import Vuer, VuerSession
    from vuer.schemas import DefaultScene, Frustum, OrbitControls

    n, N = 12, 12**3

    app = Vuer()

    @app.spawn(start=True)
    async def main(sess: VuerSession):
        sess.set @ DefaultScene(
            *[
                Frustum(
                    key=f"frustum-{i}",
                    scale=10,
                    showImagePlane=True,
                    showFrustum=False,
                    showFocalPlane=False,
                    position=[i % n, (i // n) % n, (i // n**2) % n],
                    rotation=[0.5 * 3.14, 0, 0],
                )
                for i in range(N)
            ],
            up=[0, 0, 1],
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        while True:
            await sleep(0.01)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the frustum |
| `fov` | float | `50` | Vertical field of view in degrees |
| `aspect` | float | `1.33` | Aspect ratio (width/height) |
| `near` | float | `0.1` | Near clipping plane distance |
| `far` | float | `1.0` | Far clipping plane distance |
| `position` | list | `[0,0,0]` | Frustum position (camera origin) |
| `rotation` | list | `[0,0,0]` | Frustum rotation (Euler angles) |
| `scale` | float | `1` | Frustum scale |

## Learn More

- [Spline Frustum](../examples/spline_frustum.md) - Animated camera paths
"""

doc.flush()
