
# Group

The `Group` component (Grouping Objects) organizes multiple objects together, applying transforms (position, rotation, scale) to all children at once. Essential for managing complex hierarchies and coordinated movement.

This is ideal for:
- Applying a single transform to multiple objects
- Moving/rotating/scaling objects together as a unit
- Creating object hierarchies
- Building reusable composite structures

## Basic Example

This example shows the core purpose of Group: transforming multiple objects together.
The group contains a box and sphere. When we animate the group's rotation,
both objects rotate together around the group's origin.

```python
import asyncio
from vuer import Vuer
from vuer.schemas import DefaultScene, Group, Box, Sphere, OrbitControls

app = Vuer()


@app.spawn(start=True)
async def main(sess):
    # Create a group with multiple objects
    sess.set @ DefaultScene(
        Group(
            Box(position=[1, 0, 0], args=[1, 1, 1], key="box"),
            Sphere(position=[-1, 0, 0], args=[0.3], key="sphere"),

            # Group transform applies to BOTH objects
            position=[0, 1, 0],
            rotation=[0, 0, 0],
            scale=1.0,
            key="my-group",
        ),
        bgChildren=[OrbitControls(key="OrbitControls")],
    )

    # Animate the entire group
    angle = 0
    while True:
        # Update group rotation - both box and sphere rotate together
        sess.update @ Group(
            rotation=[0, angle, 0],
            key="my-group",
        )

        angle += 0.02
        await asyncio.sleep(0.016)
```


## How It Works

When you apply a transform to a Group:
1. Each child keeps its **local position/rotation/scale** relative to the group
2. The group's transform is applied to **all children together**
3. Final position = group transform @ child local transform

**Example:** A box at `[1, 0, 0]` inside a group at `[5, 0, 0]` → final position: `[6, 0, 0]`

