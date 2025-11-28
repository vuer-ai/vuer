import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Splat

The `Splat` component renders 3D Gaussian Splatting scenes. This is ideal for:
- Displaying photorealistic 3D captures
- Viewing NeRF-like scene reconstructions
- Creating immersive VR environments
- Visualizing 3D scans with high fidelity

## Basic Usage

A minimal example that loads a 3D Gaussian Splat from a URL:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Splat

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Splat(
                key="splat",
                src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat",
                scale=0.5,
                position=[0, 1.5, 0],
            ),
            showGrid=False,
        )

        while True:
            await asyncio.sleep(1.0)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the splat |
| `src` | str | - | URL or path to the .splat file |
| `position` | list | `[0,0,0]` | Splat position in world coordinates |
| `rotation` | list | `[0,0,0]` | Splat rotation (Euler angles) |
| `scale` | float/list | `1` | Uniform or per-axis scale |

## Splat Variants

Vuer supports multiple Gaussian Splatting implementations:

| Component | Description | Use Case |
|-----------|-------------|----------|
| `Splat` | Standard .splat format | General purpose, static scenes |
| `LumaSplats` | LumaAI implementation | VR-optimized rendering |
| `SparkSplats` | SparkMesh renderer | Alternative rendering engine |

## Learn More

For detailed examples of using `Splat`, see:

- [3D Gaussian Splatting](../examples/gaussian_splatting/gaussian_splats.md) - Basic splat rendering
- [Gaussian Splats in VR](../examples/gaussian_splatting/gaussian_splats_vr.md) - VR-optimized viewing
- [OpenAI Sora Demo](../examples/gaussian_splatting/openai_sora.md) - Advanced splat scenes
- [SparkSplats](../examples/gaussian_splatting/spark.md) - Alternative renderer
"""

doc.flush()
