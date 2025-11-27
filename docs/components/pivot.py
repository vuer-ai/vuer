import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Pivot - Custom Rotation Pivot

The `Pivot` component changes the rotation center for objects, allowing rotation around custom points instead of the object's origin.

This is ideal for:
- Door hinges and rotating panels
- Clock hands and rotating indicators
- Planetary motion and orbits
- Any rotation around a custom point

## Basic Example

This example demonstrates the core purpose of Pivot: making objects orbit around a custom point.
It shows three objects rotating around a central pivot point - like planets orbiting a sun.
Without Pivot, objects would spin in place around their own centers.
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Pivot, Box, Sphere, OrbitControls

    app = Vuer()


    @app.spawn(start=True)
    async def main(sess):
        # Create scene with multiple pivoted objects
        sess.set @ DefaultScene(
            # Central marker at pivot point
            Sphere(position=[0, 0, 0], args=[0.2], key="center-marker"),

            # Box orbiting around center (like a door hinge)
            Pivot(
                Box(position=[2, 0, 0], args=[0.5, 0.5, 0.5], key="box"),
                position=[0, 0, 0],  # Pivot at center
                rotation=[0, 0, 0],  # Will be animated
                key="pivot-box",
            ),

            # Sphere orbiting at different radius (like a planet)
            Pivot(
                Sphere(position=[3, 0, 0], args=[0.3], key="sphere"),
                position=[0, 0, 0],  # Same pivot point
                rotation=[0, 0, 0],  # Will be animated
                key="pivot-sphere",
            ),

            bgChildren=[OrbitControls(key="OrbitControls")],
        )

        # Animate both objects orbiting around the pivot
        angle = 0
        while True:
            # Box orbits slowly
            sess.update @ Pivot(
                rotation=[0, angle, 0],
                key="pivot-box",
            )

            # Sphere orbits faster
            sess.update @ Pivot(
                rotation=[0, angle * 2, 0],
                key="pivot-sphere",
            )

            angle += 0.02
            await asyncio.sleep(0.016)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the pivot |
| `position` | list | `[0,0,0]` | Pivot point location (center of rotation) |
| `rotation` | list | `[0,0,0]` | Rotation around pivot point |

## How It Works

**Without Pivot:** Objects rotate around their own center
```python
Box(position=[2, 0, 0], rotation=[0, angle, 0], key="box")
# Box spins in place at position [2, 0, 0]
```

**With Pivot:** Objects orbit around a custom point
```python
Pivot(
    Box(position=[2, 0, 0], key="box"),
    position=[0, 0, 0],  # Pivot point
    rotation=[0, angle, 0],
    key="pivot",
)
# Box orbits around [0, 0, 0] while staying 2 units away
```

"""

doc.flush()
