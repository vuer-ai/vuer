import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# ImageBackground

The `ImageBackground` component displays images with depth information for parallax effects.
This is ideal for:
- Creating depth-aware backgrounds
- Displaying stereo images for VR
- Building augmented reality overlays with depth
- Visualizing RGB-D camera feeds

## Basic Usage

A minimal example that creates an image background:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    import numpy as np
    from vuer import Vuer
    from vuer.schemas import DefaultScene, ImageBackground

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        # Create sample RGB image
        rgb = np.zeros((480, 640, 3), dtype=np.uint8)
        rgb[:, :, 0] = 128  # Red channel

        # Create sample depth image
        depth = np.ones((480, 640), dtype=np.float32) * 2.0

        session.set @ DefaultScene(
            rawChildren=[
                ImageBackground(
                    key="background",
                    rgb=rgb,
                    depth=depth,
                    distanceToCamera=2.0,
                ),
            ],
        )

        while True:
            await asyncio.sleep(1.0)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the background |
| `rgb` | ndarray | - | RGB image array (HxWx3) |
| `depth` | ndarray | - | Depth image array (HxW) |
| `distanceToCamera` | float | `1.0` | Base distance from camera |
| `position` | list | `[0,0,0]` | Background position offset |

## Related Components

| Component | Purpose |
|-----------|---------|
| `SceneBackground` | Simple image backgrounds without depth |

## Learn More

For detailed examples of using `ImageBackground`, see:

- [Depth Image](../examples/background/depth_image.md) - Depth-aware backgrounds
- [VR HUD](../examples/background/vr_hud.md) - Stereo image backgrounds
- [3D Movie](../examples/background/3d_movie.md) - Video with depth playback
"""

doc.flush()
