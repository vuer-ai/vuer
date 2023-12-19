
# Visualizing Camera Frustums



```python
from vuer import Vuer
from vuer.schemas import DefaultScene, Frustum

n, N = 5, 125

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
                rotation=[0.5 * 3.142, 0, 0],
            )
            for i in range(N)
        ]
    )
```

![figures/frustum.jpg](figures/frustum.jpg)