
# Gripper

The `Gripper` component renders a robot gripper/hand visualization.
This is ideal for:
- Visualizing end-effector poses
- Creating teleoperation interfaces
- Displaying grasp targets
- Building interactive manipulation demos

## Basic Usage

A minimal example that creates a gripper:

```python
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
        show_helper=False,
        bgChildren=[
            OrbitControls(key="OrbitControls")
        ],
    )

    while True:
        await asyncio.sleep(1.0)
```


## Learn More

For detailed examples of using `Gripper`, see:

- [Movable Grippers](movable.md) - Interactive gripper controls
