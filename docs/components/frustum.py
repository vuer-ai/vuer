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
            show_helper=False,
            up=[0, 0, 1],
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        await sess.forever()

doc @ """
## Key Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | str | Unique identifier for the frustum |
| `position` | tuple[float, float, float] | Position of the frustum in 3D space |
| `rotation` | tuple[float, float, float] | Rotation of the frustum (Euler angles) |
| `matrix` | tuple[float, ...] | 16-element transformation matrix (overrides position and rotation) |
| `aspect` | float | Aspect ratio (width/height) of the camera |
| `focus` | float | Focus distance |
| `fov` | float | Vertical field of view in degrees |
| `near` | float | Near clipping plane distance |
| `far` | float | Far clipping plane distance |
| `scale` | float | Scale factor for the frustum visualization |
| `upScale` | float | Scale factor for the up direction indicator |
| `focalLength` | float | Focal length of the camera |
| `showUp` | bool | Whether to show the up direction indicator |
| `showFrustum` | bool | Whether to show the frustum wireframe |
| `showFocalPlane` | bool | Whether to show the focal plane |
| `showImagePlane` | bool | Whether to show the image plane |
| `src` | str | Source image to display on the image plane |
| `colorOrigin` | ColorRepresentation | Color of the camera origin marker |
| `colorFrustum` | ColorRepresentation | Color of the frustum wireframe |
| `colorCone` | ColorRepresentation | Color of the cone |
| `colorFocalPlane` | ColorRepresentation | Color of the focal plane |
| `colorUp` | ColorRepresentation | Color of the up direction indicator |
| `colorTarget` | ColorRepresentation | Color of the target marker |
| `colorCross` | ColorRepresentation | Color of the cross marker |

## Learn More

- [Spline Frustum](../examples/spline_frustum.md) - Animated camera paths
"""

doc.flush()
