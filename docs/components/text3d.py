import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Text3D

The `Text3D` component renders extruded 3D text using Three.js TextGeometry.
This is ideal for:
- Creating 3D titles and labels
- Building decorative text elements
- Displaying animated text in scenes
- Adding visual emphasis to annotations

## Basic Usage

A minimal example that creates 3D text:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Text3D, MeshNormalMaterial, OrbitControls

    FONT_URL = "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Text3D(
                "Hello Vuer!",
                MeshNormalMaterial(),
                key="title",
                font=FONT_URL,
                size=1.5,
                scale=0.15,
                bevelEnabled=True,
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
| `key` | str | - | Unique identifier for the text |
| `font` | str | - | URL to typeface.json font file |
| `size` | float | `1` | Base text size |
| `scale` | float | `1` | Overall scale multiplier |
| `bevelEnabled` | bool | `False` | Enable beveled (rounded) edges |
| `bevelSize` | float | `0.04` | Bevel size |
| `bevelThickness` | float | `0.1` | Bevel thickness |
| `letterSpacing` | float | `0` | Spacing between letters |
| `position` | list | `[0,0,0]` | Text position in world coordinates |
| `rotation` | list | `[0,0,0]` | Text rotation (Euler angles) |

## Related Components

| Component | Purpose |
|-----------|---------|
| [Text](text.md) | 2D text in 3D space (simpler, faster) |
| [Billboard](billboard.md) | Wrapper to make children always face camera |

## Font Sources

Text3D requires fonts in typeface.json format. Options include:
- Three.js examples: `https://threejs.org/examples/fonts/`
- Font converter: https://gero3.github.io/facetype.js/

## Learn More

For detailed examples of using `Text3D`, see:

- [3D Text Tutorial](../examples/visualization/3d_text.md) - Complete text rendering guide
"""

doc.flush()
