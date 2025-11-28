import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# LumaSplats - Luma AI Gaussian Splats

The `LumaSplats` component is optimized for loading Gaussian splats exported from Luma AI. It provides better performance and loading times compared to standard Splat format.

This is ideal for:
- Loading Luma AI captures directly
- Fast-loading Gaussian splat scenes
- High-quality 3D captures from Luma AI
- Optimized web delivery of splats

## Basic Example

This example shows how to load a Gaussian splat from Luma AI.
You can use either a Luma AI URL directly or an exported file.
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from vuer import Vuer
    from vuer.schemas import DefaultScene, LumaSplats, OrbitControls

    app = Vuer()


    @app.spawn(start=True)
    async def main(sess):
        sess.set @ DefaultScene(
            LumaSplats(
                src="https://lumalabs.ai/capture/your-capture-id",
                position=[0, 0, 0],
                scale=1.0,
                key="luma",
            ),
            bgChildren=[OrbitControls(key="OrbitControls")],
        )

        await sess.forever()

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the splat |
| `src` | str | - | Luma AI URL or exported file path |
| `position` | list | `[0,0,0]` | Model position in world coordinates |
| `rotation` | list | `[0,0,0]` | Model rotation (Euler angles) |
| `scale` | float/list | `1` | Uniform or per-axis scale |

## Luma AI Integration

1. Create a capture on [Luma AI](https://lumalabs.ai/)
2. Export as Gaussian Splat
3. Use the provided URL directly in `src` parameter

## Advantages

**Faster loading:** Optimized format for quick load times

**Better compression:** Smaller file sizes compared to standard splats

**Direct integration:** Use Luma URLs directly without conversion

**High quality:** Maintains the quality of Luma AI captures

## Related Components

| Component | Purpose |
|-----------|---------|
| `Splat` | Standard Gaussian splat format |
| `SparkSplats` | Highly compressed splat format (.spz) |
"""

doc.flush()
