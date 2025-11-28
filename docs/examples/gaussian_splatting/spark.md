
# SplatMesh(sparkjs)

This example demonstrates how to display SplatMesh in Vuer using the SparkSplats component.

<iframe src="https://vuer.ai/?background=131416,fff&collapseMenu=true&scene=https://docs.vuer.ai/en/latest/_static/live_demo/spark/scene.json" width="100%" height="400px" frameborder="0"></iframe>


```python
from asyncio import sleep

from vuer import Vuer, VuerSession
from vuer.schemas import SparkSplats

app = Vuer(static_root=f"{Path(__file__).parent}/../_static/live_demo/spark")

# use `start=True` to start the app immediately
@app.spawn(start=True)
async def main(session: VuerSession):
    session.upsert(
        SparkSplats(
            key="spark-splats",
            src="http://localhost:8012/static/butterfly.spz",
            position=[0, 0.2, 0],
            rotation=[0, 0, 3.14],
            scale=0.5,
        ),
    )

    while True:
        await sleep(1)
```
