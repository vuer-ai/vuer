
# Visualizing Camera Frustums

You can programmatically insert camera frustums into the scene. Here
we stress-test vuer by inserting 1728 frustums.

![figures/visualizing_camera_frustums.jpg](figures/visualizing_camera_frustums.jpg)

Simply run the following script:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Frustum

n, N = 12, 12**3

app = Vuer()

@app.spawn(start=True)
async def main(sess: VuerSession):
    sess.set @ DefaultScene(
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

    # # fmt: off
    # await save_doc()
```
