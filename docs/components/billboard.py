import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Billboard

The `Billboard` component wraps children so they always face the camera.
This is ideal for:
- Creating labels that are always readable
- Building floating UI elements
- Displaying sprites and icons
- Making annotations visible from any angle

![](figures/billboard.png)

## Basic Usage

A minimal example that creates a billboard with text:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Billboard, Text, OrbitControls

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Billboard(
                Text(
                    "I always face you!",
                    key="billboard-text",
                    color="orange",
                    fontSize=0.1,
                ),
                key="billboard",
                position=[0, 0.5, 0],
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
| `key` | str | - | Unique identifier for the billboard |
| `position` | list | `[0,0,0]` | Billboard position in world coordinates |
| `follow` | bool | `True` | Whether to follow camera rotation |
| `lockX` | bool | `False` | Lock rotation on X axis |
| `lockY` | bool | `False` | Lock rotation on Y axis |
| `lockZ` | bool | `False` | Lock rotation on Z axis |

## Related Components

| Component | Purpose |
|-----------|---------|
| `Text` | 2D text (often used inside Billboard) |
| `Text3D` | 3D extruded text |

## Learn More

For detailed examples of using `Billboard`, see:

- [3D Text Tutorial](../examples/visualization/3d_text.md) - Complete text rendering guide
"""

doc.flush()
