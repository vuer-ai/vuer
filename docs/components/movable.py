import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Movable

The `Movable` component wraps objects to make them draggable and repositionable.
This is essential for:
- Creating interactive robot teleoperation interfaces
- Building drag-and-drop 3D editors
- Allowing users to reposition objects in VR/AR
- Implementing interactive demonstrations

## Basic Usage

A minimal example that creates a draggable gripper:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer, VuerSession
    from vuer.schemas import DefaultScene, Movable, Gripper

    app = Vuer()

    @app.add_handler("OBJECT_MOVE")
    async def handler(event, session):
        print(f"Movement Event: key-{event.key}", event.value)

    @app.spawn(start=True)
    async def main(session: VuerSession):
        session.set @ DefaultScene(
            Movable(
                Gripper(key="gripper"),
                key="movable-gripper",
                position=[0, 0.5, 0],
            ),
        )

        while True:
            await asyncio.sleep(1.0)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the movable wrapper |
| `position` | list | `[0,0,0]` | Initial position in world coordinates |
| `rotation` | list | `[0,0,0]` | Initial rotation (Euler angles) |
| `scale` | float/list | `1` | Scale of the wrapped object |

## Event Handling

Listen to the `OBJECT_MOVE` event to track object movements:

```python
@app.add_handler("OBJECT_MOVE")
async def handler(event, session):
    print(f"Object {event.key} moved to:", event.value)
```

The event value contains the new position and rotation of the movable object.

## Programmatic Updates

You can also update movable positions programmatically:

```python
import numpy as np

for i in range(1000):
    x = np.sin(i / 60) / 2
    y = np.cos(i / 60) / 2
    session.upsert @ Movable(
        Gripper(),
        position=[x, y, 0],
        key="animated-gripper"
    )
    await asyncio.sleep(0.016)
```

## Learn More

For detailed examples of using `Movable`, see:

- [Movable Grippers](../examples/interaction/movable.md) - Interactive gripper controls
- [URDF with Movable](../examples/robotics_urdf/urdf_url.md) - Making robots draggable
"""

doc.flush()
