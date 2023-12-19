# Visualizing Camera Frustums

You can programmatically insert camera frustums into the scene. Here
we stress-test vuer by inserting 1728 frustums.

![_static/12_camera.jpg](_static/12_camera.jpg)

Simply run the following script:

```python
from vuer import Vuer
from vuer.schemas import DefaultScene, Frustum

n, N = 12, 12 ** 3

app = Vuer()

@app.spawn(start=True)
async def main(ws):
    app.set @ DefaultScene(
        *[
            Frustum(
                key=f"frustum-{i}",
                scale=10,
                showImagePlane=True,
                showFrustum=False,
                showFocalPlane=False,
                position=[i % n, (i // n) % n, (i // n**2) % n],
                rotation=[0.5 * 3.14, 0, 0],
            )
            for i in range(N)
        ]
    )
```
