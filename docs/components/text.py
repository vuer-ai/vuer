import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Text

The `Text` component renders 2D text in 3D space using SDF (Signed Distance Field) rendering.
This is ideal for:
- Creating labels and annotations
- Building HUD elements
- Displaying readable text from any distance
- Adding captions to 3D objects

## Basic Usage

A minimal example that creates 2D text in 3D space:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Text, OrbitControls

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Text(
                "Hello World!",
                key="label",
                color="green",
                fontSize=0.15,
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

### Basic Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the text |
| `children` | str | - | The text content to render |
| `color` | str | - | Text color (hex or named color) |
| `fontSize` | float | - | Font size in world units |
| `position` | list | `[0,0,0]` | Text position in world coordinates |
| `rotation` | list | `[0,0,0]` | Text rotation (Euler angles) |
| `scale` | float | `1` | Text scale multiplier |

### Typography Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `font` | str | - | Font URL or name |
| `fontWeight` | int/str | - | Font weight (number or 'bold', 'normal', etc.) |
| `fontStyle` | str | - | Font style: 'italic' or 'normal' |
| `characters` | str | - | Restrict character set for glyph generation |

### Layout Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `maxWidth` | float | - | Maximum width before text wrapping |
| `lineHeight` | float | - | Line height as a multiple of fontSize |
| `letterSpacing` | float | - | Additional spacing between letters |
| `textAlign` | str | - | Text alignment: 'left', 'right', 'center', 'justify' |
| `anchorX` | float/str | - | Horizontal anchor: number or 'left', 'center', 'right' |
| `anchorY` | float/str | - | Vertical anchor: 'top', 'top-baseline', 'middle', 'bottom-baseline', 'bottom' |
| `direction` | str | - | Text direction: 'auto', 'ltr', or 'rtl' |
| `overflowWrap` | str | - | Wrapping behavior: 'normal' or 'break-word' |
| `whiteSpace` | str | - | White space handling: 'normal', 'overflowWrap', 'nowrap' |

### Styling Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `fillOpacity` | float | - | Fill opacity (0-1) |
| `clipRect` | list | - | Clipping rectangle [minX, minY, maxX, maxY] |
| `depthOffset` | float | - | Z-offset to avoid z-fighting |

### Outline Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `outlineWidth` | float/str | - | Outline width (number or string like '2px') |
| `outlineOffsetX` | float/str | - | Outline X offset |
| `outlineOffsetY` | float/str | - | Outline Y offset |
| `outlineBlur` | float/str | - | Outline blur radius |
| `outlineColor` | str | - | Outline color |
| `outlineOpacity` | float | - | Outline opacity (0-1) |

### Stroke Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `strokeWidth` | float/str | - | Stroke width (number or string) |
| `strokeColor` | str | - | Stroke color |
| `strokeOpacity` | float | - | Stroke opacity (0-1) |

### Advanced Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `sdfGlyphSize` | int | - | SDF glyph size for rendering quality |
| `debugSDF` | bool | - | Show SDF debug overlay |
| `glyphGeometryDetail` | int | - | Level of detail for glyph geometry |

## Learn More

For detailed examples of using `Text`, see:

- [3D Text Tutorial](../examples/visualization/3d_text.md) - Complete text rendering guide
"""

doc.flush()
