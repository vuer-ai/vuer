import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# SceneBackground

The `SceneBackground` component displays images as scene backgrounds.
This is essential for:
- Streaming video from cameras or renderers
- Displaying NeRF or Gaussian Splatting renders
- Creating dynamic backgrounds from image sequences
- Building augmented reality overlays

## Basic Usage

A minimal example that sets a background image:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    import numpy as np
    from vuer import Vuer
    from vuer.schemas import Scene, SceneBackground

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ Scene()

        # Create a simple gradient image
        image = np.zeros((480, 640, 3), dtype=np.uint8)
        image[:, :, 0] = np.linspace(0, 255, 640).astype(np.uint8)
        image[:, :, 2] = np.linspace(255, 0, 640).astype(np.uint8)

        session.upsert(
            SceneBackground(
                image,
                format="jpeg",
                quality=90,
                key="background",
            ),
            to="bgChildren",
        )

        while True:
            await asyncio.sleep(1.0)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the background |
| `format` | str | `"jpeg"` | Image encoding: `"jpeg"`, `"png"`, `"b64jpeg"`, `"b64png"` |
| `quality` | int | `75` | JPEG compression quality (1-100) |
| `interpolate` | bool | `True` | Enable image interpolation |

## Image Formats

| Format | Description | Performance |
|--------|-------------|-------------|
| `"jpeg"` | JPEG encoding | Fast, ~30fps possible |
| `"png"` | PNG encoding | Slower, lossless |
| `"b64jpeg"` | Base64 JPEG | Browser compatible |
| `"b64png"` | Base64 PNG | Lossless, slower |

## Streaming Video

For real-time video streaming, use `"jpeg"` encoding with appropriate quality:

```python
for frame in video_reader:
    session.upsert(
        SceneBackground(
            frame,
            format="jpeg",
            quality=90,
            key="background",
        ),
        to="bgChildren",
    )
    await asyncio.sleep(0.016)  # ~60fps target
```

## Related Components

| Component | Purpose |
|-----------|---------|
| `ImageBackground` | Background with depth for parallax effects |

## Learn More

For detailed examples of using `SceneBackground`, see:

- [Background Image](../examples/background/background_image.md) - Basic background streaming
- [VR HUD](../examples/background/vr_hud.md) - Background in VR contexts
"""

doc.flush()
