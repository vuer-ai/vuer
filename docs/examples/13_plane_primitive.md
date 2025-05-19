
# Plane Primitive

This example shows you how to construct a plane and have it visible on both sides.

We pass in `Plane.material.side=2` to the `Plane` constructor to make it visible on both sides.


```python
from asyncio import sleep

from vuer import Vuer
from vuer.events import Set
from vuer.schemas import DefaultScene, Plane

app = Vuer()

# use `start=True` to start the app immediately
@app.spawn(start=True)
async def main(session):
    session @ Set(
        DefaultScene(
            Plane(material=dict(side=2)),
        ),
    )

    while True:
        await sleep(1.0)
```
