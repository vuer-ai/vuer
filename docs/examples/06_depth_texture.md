```python
from asyncio import sleep

from vuer import Vuer
from vuer.events import Set, Update
from vuer.schemas import Scene, Box, Sphere, group, SceneBackground

app = Vuer()

@app.spawn
async def show_heatmap(proxy):
    scene = Scene(
        group(
            Box(
                key="box",
                args=[0.2, 0.2, 0.2],
                position=[0, 0.1, 0],
                rotation=[0, 0, 0],
                materialType="normal",
                outlines=dict(angle=0, thickness=0.005, color="white"),
            ),
            Sphere(
                key="sphere",
                args=[0.1, 200, 200],
                position=[0.2, 0.1, 0],
                rotation=[0, 0, 0],
                materialType="depth",
                outlines=dict(angle=0, thickness=0.001, color="white"),
            ),
            key="group",
        )
    )

    proxy @ Set(scene)

    i = 0
    while True:
        i += 1
        h = 1 - (0.0166 * (i % 120 - 60)) ** 2
        position = [0.2, 0.1 + h / 5, 0]
        proxy @ Update(
            Sphere(
                key="sphere",
                args=[0.1, 20, 20],
                position=position,
                rotation=[0, 0, 0],
                materialType="depth",
            ),
        )
        await sleep(0.016)
```

```python
app.add_handler("CAMERA_MOVE", on_camera)
app.run()
```
