import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Plane

The `Plane` component creates flat 2D plane primitives in 3D space.
This is ideal for:
- Creating ground planes and floors
- Building walls and surfaces
- Displaying image textures
- Creating UI panels in 3D

![](figures/plane.png)

## Basic Usage

A minimal example that creates a plane visible on both sides:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Plane, OrbitControls

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Plane(
                material=dict(
                    side=2,  # Render both sides
                    color="blue",  # Set color
                ),
                args=[2, 2],  # 2x2 units
                position=[0, 1, 0],
            ),
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        while True:
            await asyncio.sleep(1.0)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the plane |
| `args` | list | `[1, 1]` | [width, height] of the plane |
| `position` | list | `[0,0,0]` | Plane position in world coordinates |
| `rotation` | list | `[0,0,0]` | Plane rotation (Euler angles) |
| `scale` | float/list | `1` | Plane scale |
| `material` | dict | - | Material properties |

## Material Side Options

The `material.side` parameter controls which sides of the plane are rendered:

| Value | Description |
|-------|-------------|
| `0` | Front side only |
| `1` | Back side only |
| `2` | Both sides (double-sided) |

"""

doc.flush()
