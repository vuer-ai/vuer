import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Center - Auto-Center Objects

The `Center` component automatically centers its child objects at the origin, calculating the bounding box and adjusting position accordingly. Useful for imported models with off-center geometry.

This is ideal for:
- Centering imported models with off-center origins
- Consistent positioning across different models
- Ensuring rotation around visual center
- Comparing models side-by-side

## Basic Example

This example demonstrates the core purpose of Center: automatically aligning models at the origin.
It loads three models side-by-side - two centered and one not centered - so you can see the difference.
Centered models align at their visual center, making comparison and rotation more intuitive.
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    import os
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Center, Glb, OrbitControls

    app = Vuer(static_root=os.getcwd() + "/../../../assets")
    glb_file = "static_3d/dragon.glb"


    @app.spawn(start=True)
    async def main(sess):
        sess.set @ DefaultScene(
            # Left: Model WITHOUT Center (may be off-center)
            Glb(
                src="http://localhost:8012/static/" + glb_file,
                position=[-3, 0, 0],
                scale=0.8,
                key="model-left",
            ),

            # Center: Model WITH Center (automatically centered)
            Center(
                Glb(src="http://localhost:8012/static/" + glb_file, key="model-center-inner"),
                position=[0, 0, 0],
                scale=0.8,
                key="model-center",
            ),

            # Right: Centered model with rotation
            Center(
                Glb(src="http://localhost:8012/static/" + glb_file, key="model-right-inner"),
                position=[3, 0, 0],
                rotation=[0, 0, 0],  # Will be animated
                scale=0.8,
                key="model-right",
            ),

            bgChildren=[OrbitControls(key="OrbitControls")],
        )

        # Animate the right model rotating around its visual center
        angle = 0
        while True:
            sess.update @ Center(
                rotation=[0, angle, 0],
                key="model-right",
            )

            angle += 0.02
            await asyncio.sleep(0.016)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the center component |
| `position` | list | `[0,0,0]` | Position after centering |
| `rotation` | list | `[0,0,0]` | Rotation around centered origin |
| `scale` | float/list | `1` | Uniform or per-axis scale |

## How It Works

1. **Calculate bounding box** - Find min/max extents of all geometry
2. **Compute center** - Calculate center point of bounding box
3. **Apply offset** - Translate object so center aligns with origin

**Result:** Models with off-center origins are automatically aligned at their visual center.

"""

doc.flush()
