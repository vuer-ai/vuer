import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Box

The `Box` component creates box/cube 3D primitives.
This is ideal for:
- Creating simple 3D objects
- Building debug visualizations
- Representing bounding boxes
- Creating architectural elements

![](figures/box.png)

## Basic Usage

A minimal example that creates a box:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Box, OrbitControls

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Box(
                key="box",
                args=[0.5, 0.5, 0.5],  # width, height, depth
                position=[0, 0.25, 0],
                materialType="normal",
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
| `key` | str | - | Unique identifier for the box |
| `args` | list | `[1, 1, 1]` | [width, height, depth] of the box |
| `position` | list | `[0,0,0]` | Box center position |
| `rotation` | list | `[0,0,0]` | Box rotation (Euler angles) |
| `scale` | float/list | `1` | Box scale |
| `materialType` | str | `"standard"` | Material type: `"standard"`, `"normal"`, `"depth"` |
| `material` | dict | - | Material properties (color, etc.) |
| `outlines` | dict | - | Outline settings (angle, thickness, color) |

## Material Types

| Type | Description |
|------|-------------|
| `"standard"` | Standard PBR material with lighting |
| `"normal"` | Normal-based coloring (rainbow effect) |
| `"depth"` | Depth-based shading |

## Example: Box with Outlines

```python
Box(
    key="outlined-box",
    args=[0.2, 0.2, 0.2],
    position=[0, 0.1, 0],
    materialType="normal",
    outlines=dict(angle=0, thickness=0.005, color="white"),
)
```

## Related Components

| Component | Purpose |
|-----------|---------|
| `Sphere` | Sphere primitive |
| `Plane` | Plane primitive |

## Learn More

For detailed examples of using `Box`, see:

- [Depth Texture](../examples/visualization/depth_texture.md) - Box with depth materials
"""

doc.flush()
