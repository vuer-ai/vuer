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
    from vuer.schemas import DefaultScene, Movable, Gripper, Sphere, OrbitControls

    app = Vuer()

    @app.add_handler("OBJECT_MOVE")
    async def handler(event, session):
        print(f"Movement Event: key-{event.key}", event.value)

    @app.spawn(start=True)
    async def main(session: VuerSession):
        session.set @ DefaultScene(
            Movable(
                Gripper(key="gripper"),
                Sphere(args=[0.15], position=[0.3, 0, 0], key="sphere"),
                key="movable-gripper",
                position=[0, 0.5, 0],
            ),
            bgChildren=[OrbitControls(key="OrbitControls")]
        )

        while True:
            await asyncio.sleep(1.0)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the movable wrapper |
| `offset` | list | `[0,0,0]` | Optional [x, y, z] offset from the position |
| `position` | list | `[0,1,-1]` | Initial [x, y, z] position in world coordinates |
| `quaternion` | list | - | Optional [x, y, z, w] quaternion rotation |
| `rotation` | list | - | Optional [x, y, z] Euler rotation |
| `scale` | float/list | `0.1` | Float or [x, y, z] scale factor |
| `handle` | float/list | - | Optional handle size (overrides scale for handle geometry) |
| `showFrame` | bool | `True` | Show coordinate frame visualization |
| `wireframe` | bool | `False` | Enable wireframe rendering |
| `localRotation` | bool | `False` | Use local rotation instead of world rotation |


```{admonition} Detecting Movement
:class: info
Listen to the `OBJECT_MOVE` event to track object movements:

**Event structure:**
```python
{
    "key": "movable-gripper",
    "position": [x, y, z],
    "rotation": [rx, ry, rz, rw],  # Quaternion
}
```

"""

doc.flush()
