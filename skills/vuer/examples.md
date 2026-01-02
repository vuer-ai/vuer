---
description: Common Vuer patterns and examples
topics: [vuer, examples, patterns, robotics, visualization]
---

# Vuer Examples

## Basic Scene

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Box, Sphere, AmbientLight

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Box(key="box", args=[1, 1, 1], position=[-1, 0.5, 0], color="red"),
        Sphere(key="sphere", args=[0.5], position=[1, 0.5, 0], color="blue"),
    )
    await session.forever()
```

## Animation Loop

```python
import asyncio
import numpy as np

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene()

    t = 0
    while True:
        t += 0.05
        session.upsert @ Box(
            key="animated-box",
            position=[np.sin(t), 0.5, np.cos(t)],
            rotation=[0, t, 0]
        )
        await asyncio.sleep(0.016)  # ~60 FPS
```

## URDF Robot

```python
from vuer.schemas import Urdf

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Urdf(
            key="robot",
            src="/static/robots/panda.urdf",
            jointValues={
                "panda_joint1": 0,
                "panda_joint2": -0.5,
                "panda_joint3": 0,
                "panda_joint4": -2.0,
                "panda_joint5": 0,
                "panda_joint6": 1.5,
                "panda_joint7": 0.7,
            }
        )
    )
    await session.forever()
```

## Point Cloud

```python
import numpy as np
from vuer.schemas import PointCloud

@app.spawn(start=True)
async def main(session: VuerSession):
    # Generate random point cloud
    n_points = 10000
    vertices = np.random.randn(n_points, 3).astype(np.float16) * 2
    colors = (np.random.rand(n_points, 3) * 255).astype(np.uint8)

    session.set @ DefaultScene(
        PointCloud(key="pcd", vertices=vertices, colors=colors, size=0.02)
    )
    await session.forever()
```

## Camera Control

```python
from vuer.schemas import PerspectiveCamera

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        PerspectiveCamera(
            key="main-cam",
            fov=75,
            position=[5, 3, 5],
            makeDefault=True
        ),
        Box(key="box"),
    )
    await session.forever()

# Handle camera events
@app.add_handler("CAMERA_MOVE")
async def on_camera(event, session):
    print(f"Camera: {event.value}")
```

## Interactive Movable

```python
from vuer.schemas import Movable, Box

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Movable(
            key="movable",
            children=[Box(key="box", color="green")],
            position=[0, 0.5, 0]
        )
    )
    await session.forever()

@app.add_handler("OBJECT_MOVE")
async def on_move(event, session):
    print(f"Object moved to: {event.value}")
```

## Dynamic Elements

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene()

    # Add elements dynamically
    for i in range(10):
        session.add @ Sphere(
            key=f"sphere-{i}",
            args=[0.1],
            position=[i * 0.3 - 1.5, 0.5, 0]
        )
        await asyncio.sleep(0.2)

    # Remove some
    await asyncio.sleep(1)
    session.remove @ ["sphere-0", "sphere-1", "sphere-2"]

    await session.forever()
```

## Batch Updates

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene()

    while True:
        positions = compute_positions()  # Your logic

        # Efficient batch update
        session.upsert @ [
            Box(key=f"box-{i}", position=pos)
            for i, pos in enumerate(positions)
        ]
        await asyncio.sleep(0.016)
```

## Frame Capture

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(Box(key="box"))

    await asyncio.sleep(1)  # Wait for render

    render = await session.grab_render(quality=0.9)
    image = render.value  # PIL.Image
    image.save("screenshot.png")

    await session.forever()
```

## Multiple Handlers

```python
@app.add_handler("CAMERA_MOVE")
async def camera_handler(event, session):
    # Log camera position
    pass

@app.add_handler("HAND_MOVE")
async def hand_handler(event, session):
    # Process hand tracking
    pass

@app.add_handler("OBJECT_MOVE")
async def object_handler(event, session):
    # React to object movement
    pass

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Movable(key="movable", children=[Box(key="box")]),
        Hands(key="hands")  # Enable hand tracking
    )
    await session.forever()
```

## Hierarchical Scene

```python
from vuer.schemas import group

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        group(
            key="robot-arm",
            children=[
                Box(key="base", args=[0.5, 0.1, 0.5]),
                group(
                    key="link1",
                    position=[0, 0.1, 0],
                    children=[
                        Cylinder(key="joint1", args=[0.05, 0.05, 0.3]),
                        group(
                            key="link2",
                            position=[0, 0.3, 0],
                            children=[
                                Cylinder(key="joint2", args=[0.05, 0.05, 0.3]),
                            ]
                        )
                    ]
                )
            ]
        )
    )
    await session.forever()
```

## GLB Model

```python
from vuer.schemas import Glb

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Glb(
            key="model",
            src="/static/model.glb",
            scale=0.5,
            position=[0, 0, 0]
        )
    )
    await session.forever()
```
