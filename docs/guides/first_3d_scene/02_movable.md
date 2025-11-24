
# Movable - Interactive Grab and Move

## Overview

`Movable` wraps any component to make it grabbable and movable with VR controllers or mouse. Perfect for interactive manipulation in VR/AR environments.

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Movable, Box

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Movable(
            Box(args=[0.3, 0.3, 0.3], color="red", key="box"),
            position=[0, 1, 0],
            key="movable-box",
        ),
    )
    
    await session.forever()
```

## Parameters

```python
Movable(
    # Child component(s)
    ...,  # Any 3D component(s)
    
    # Transform
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=[sx, sy, sz],
    
    # Visual
    showFrame=False,  # Show coordinate frame
    
    # Interaction
    key="unique-id",
)
```

## Detecting Movement

Listen to `OBJECT_MOVE` events to track position:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Movable, Gripper

app = Vuer()

@app.add_handler("OBJECT_MOVE")
async def on_move(event, session: VuerSession):
    print(f"Moved {event.value['key']}: position={event.value['position']}")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Movable(
            Gripper(key="gripper"),
            position=[0, 1, 0],
            key="movable-gripper",
        ),
    )
    
    await session.forever()
```

**Event structure:**
```python
{
    "key": "movable-gripper",
    "position": [x, y, z],
    "rotation": [rx, ry, rz, rw],  # Quaternion
}
```

## With Coordinate Frame

Show XYZ axes for debugging:

```python
Movable(
    Gripper(key="gripper"),
    position=[0, 1, 0],
    showFrame=True,  # Red=X, Green=Y, Blue=Z
    key="debug-movable",
)
```

## Wrapping Multiple Objects

```python
from vuer.schemas import Movable, Box, Sphere

Movable(
    Box(args=[0.3, 0.3, 0.3], color="red", position=[0, 0, 0], key="box"),
    Sphere(args=[0.15], color="blue", position=[0.3, 0, 0], key="sphere"),
    
    position=[0, 1, 0],
    key="group",
)
```

## Animated + Interactive

Combine programmatic animation with user interaction:

```python
import numpy as np
from asyncio import sleep

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        # Static movable
        Movable(Gripper(key="static"), position=[0, 1, 0], key="static"),
    )
    
    # Animated movable
    for i in range(10000):
        x = np.sin(i / 60) * 0.5
        y = np.cos(i / 60) * 0.5
        
        session.upsert @ Movable(
            Gripper(key="animated-gripper"),
            position=[x, y, 0],
            key="animated",
        )
        
        await sleep(0.016)
```

## With URDF Robots

From the [URDF example](../../examples/03_urdf):

```python
from vuer.schemas import DefaultScene, Movable, Urdf

session.set @ DefaultScene(
    Movable(
        Urdf(
            src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf",
            jointValues={},
            rotation=[3.14, 0, 0],
            key="rover",
        ),
        position=[0, 0, 0.15],
        showFrame=True,
        key="movable-rover",
    ),
    grid=True,
)
```

## VR/AR Controls

**VR Controllers:**
- Point at object
- Pull trigger to grab
- Move controller to reposition
- Release trigger to drop

**Mouse (Desktop):**
- Click and drag to move in XZ plane
- Shift + drag to move in Y axis
- Ctrl + drag to rotate

## Tips

1. **Use descriptive keys**: Helps identify objects in events
2. **showFrame for debugging**: Visualize object orientation
3. **Combine with Gripper**: Common pattern for robot tools
4. **Listen to OBJECT_MOVE**: Track user manipulations

## Next Steps

- [Gripper](02_gripper) - Robot gripper visualization
- [Urdf](02_urdf) - Robot models
- [Camera Control](04_camera_control) - Navigate the scene
