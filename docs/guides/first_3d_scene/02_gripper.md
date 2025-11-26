
# Gripper - Robot Gripper Visualization

## Overview

`Gripper` displays a 3D robot gripper model, commonly used with `Movable` for interactive manipulation. Perfect for teleoperation and robot control interfaces.

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Gripper

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Gripper(
            position=[0, 1, 0],
            rotation=[0, 0, 0],
            key="gripper",
        ),
    )
    
    await session.forever()
```

## Parameters

```python
Gripper(
    # Transform
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=[sx, sy, sz],
    
    # Interaction
    key="unique-id",
)
```

## With Movable

Most common pattern - make gripper interactive:

```python
from vuer.schemas import DefaultScene, Movable, Gripper

session.set @ DefaultScene(
    Movable(
        Gripper(key="gripper"),
        position=[0, 1, 0],
        showFrame=True,  # Show coordinate axes
        key="movable-gripper",
    ),
)
```

## Multiple Grippers

```python
from vuer.schemas import DefaultScene, Movable, Gripper

session.set @ DefaultScene(
    # Left gripper
    Movable(
        Gripper(key="left-gripper"),
        position=[-0.5, 1, 0],
        key="left",
    ),
    
    # Right gripper
    Movable(
        Gripper(key="right-gripper"),
        position=[0.5, 1, 0],
        key="right",
    ),
)
```

## Tracking Gripper Position

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Movable, Gripper

app = Vuer()

@app.add_handler("OBJECT_MOVE")
async def on_gripper_move(event, session: VuerSession):
    if event.value['key'] == "movable-gripper":
        pos = event.value['position']
        print(f"Gripper at: x={pos[0]:.2f}, y={pos[1]:.2f}, z={pos[2]:.2f}")

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

## Animated Gripper

```python
import numpy as np
from asyncio import sleep

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene()
    
    for i in range(10000):
        # Circular motion
        x = np.sin(i / 60) * 0.5
        y = np.cos(i / 60) * 0.5
        
        session.upsert @ Movable(
            Gripper(key="gripper"),
            position=[x, y, 0],
            key="animated-gripper",
        )
        
        await sleep(0.016)  # 60 FPS
```

## With Robot Arm

Combine with URDF for complete robot visualization:

```python
from vuer.schemas import DefaultScene, Urdf, Movable, Gripper

session.set @ DefaultScene(
    # Robot arm
    Urdf(
        src="robot_arm.urdf",
        jointValues={"joint1": 0.5, "joint2": 1.0},
        position=[0, 0, 0],
        key="arm",
    ),
    
    # End effector gripper
    Movable(
        Gripper(key="gripper"),
        position=[0.5, 1.5, 0.3],  # At end effector position
        key="end-effector",
    ),
)
```

## VR Teleoperation Pattern

```python
@app.add_handler("OBJECT_MOVE")
async def on_move(event, session: VuerSession):
    if event.value['key'] == "vr-gripper":
        # Send gripper pose to robot
        position = event.value['position']
        rotation = event.value['rotation']  # Quaternion
        
        # Your robot control code here
        robot.set_end_effector_pose(position, rotation)

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Movable(
            Gripper(key="gripper"),
            position=[0, 1, 0],
            showFrame=True,
            key="vr-gripper",
        ),
    )
```

## Styling

The gripper model is built-in and comes with default appearance. For custom gripper models, use `Glb` or `Urdf` components instead.

## Tips

1. **Always use with Movable**: Gripper alone is static
2. **showFrame=True**: Helps visualize orientation in VR
3. **Track OBJECT_MOVE events**: For teleoperation
4. **Multiple grippers**: Common in dual-arm robots

## Next Steps

- [Movable](02_movable) - Make objects interactive
- [Urdf](02_urdf) - Full robot models
- [Glb](02_glb) - Custom gripper models
