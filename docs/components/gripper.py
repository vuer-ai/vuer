import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Gripper

The `Gripper` component renders a robot gripper/hand visualization.
This is ideal for:
- Visualizing end-effector poses
- Creating teleoperation interfaces
- Displaying grasp targets
- Building interactive manipulation demos

![](figures/gripper.png)

## Basic Usage

A minimal example that creates a gripper:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer
    from vuer.schemas import DefaultScene, Gripper, OrbitControls

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            Gripper(
                key="gripper",
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

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the gripper |
| `position` | list | `[0,0,0]` | Gripper position in world coordinates |
| `rotation` | list | `[0,0,0]` | Gripper rotation (Euler angles) |
| `scale` | float/list | `1` | Gripper scale |

## With Movable

Wrap the gripper in a `Movable` component to make it draggable:

```python
from vuer.schemas import Movable, Gripper

Movable(
    Gripper(key="gripper"),
    key="movable-gripper",
    position=[0, 0.5, 0],
)
```

## Related Components

| Component | Purpose |
|-----------|---------|
| [Movable](movable.md) | Make gripper draggable |
| [Hands](hands.md) | WebXR hand tracking |

## Learn More

For detailed examples of using `Gripper`, see:

- [Movable Grippers](../examples/interaction/movable.md) - Interactive gripper controls
"""

doc.flush()
