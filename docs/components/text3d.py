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
    from vuer import Vuer, VuerSession
    from vuer.schemas import DefaultScene, Text3D, MeshNormalMaterial, OrbitControls

    FONT_URL = "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"

    app = Vuer()

    @app.spawn(start=True)
    async def main(sess: VuerSession):
        sess.set @ DefaultScene(
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

        await sess.forever()

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `font` | str | - | URL to typeface.json font file or JSON object with font data |
| `smooth` | float | - | Merges vertices with tolerance and calls computeVertexNormals for smoother appearance |
| `lineHeight` | float | `0` | Line height in threejs units |
| `letterSpacing` | float | `1` | Letter spacing factor |

```{admonition} Note
:class: info
Additional THREE.TextGeometry parameters (like `size`, `height`, `bevelEnabled`, `bevelSize`, `bevelThickness`, etc.) can be passed as `**kwargs` and will be forwarded to the underlying TextGeometry.```
```

```{admonition} Font Sources
:class: info
Text3D requires fonts in typeface.json format. Options include:
- Three.js examples: `https://threejs.org/examples/fonts/`
- Font converter: `https://gero3.github.io/facetype.js/`

**Tip:** If you face display issues, try checking "Reverse font direction" in the typeface conversion tool.
```

## Learn More

For detailed examples of using `Text3D`, see:

- [3D Text Tutorial](../examples/visualization/3d_text.md) - Complete text rendering guide
"""

doc.flush()
