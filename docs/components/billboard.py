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

## Basic Usage

A minimal example that creates a billboard with text:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from vuer import Vuer, VuerSession
    from vuer.schemas import DefaultScene, Billboard, Text, OrbitControls

    app = Vuer()

    @app.spawn(start=True)
    async def main(sess: VuerSession):
        sess.set @ DefaultScene(
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
            show_helper=False,
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        await sess.forever()

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `follow` | bool | `True` | Whether to follow camera rotation |
| `lockX` | bool | `False` | Lock rotation on X axis |
| `lockY` | bool | `False` | Lock rotation on Y axis |
| `lockZ` | bool | `False` | Lock rotation on Z axis |

## Learn More

For detailed examples of using `Billboard`, see:

- [3D Text Tutorial](../examples/visualization/3d_text.md) - Complete text rendering guide
"""

doc.flush()
