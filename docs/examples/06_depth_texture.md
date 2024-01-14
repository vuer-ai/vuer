
# Depth Texture

There are two types of depth: range and metric depth. Range depth is the distance from the camera to the object in the scene. Metric depth is the distance from the camera to the object in the real world. 

I have implemented range depth in the deformable image plane. I will add metric depth soon. Please consider adding a GitHub issueto upvote this feature, or contribute via a PR.

```python
from asyncio import sleep

from vuer import Vuer
from vuer.events import Set, Update
from vuer.schemas import Scene, Box, Sphere, group, SceneBackground

app = Vuer()

@app.spawn(start=True)
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

        proxy.update @ Sphere(
            key="sphere",
            args=[0.1, 20, 20],
            position=position,
            rotation=[0, 0, 0],
            materialType="depth",
        )
        await sleep(0.016)
```
