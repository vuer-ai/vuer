
This example visualizes a large number of coordinates markers.

Live demo: TBD

```python
from asyncio import sleep

from vuer import Vuer
from vuer.schemas import DefaultScene, CoordsMarker

# from trimesh import util
app = Vuer()

n = 10
N = 1000

@app.spawn
async def main(proxy):
    app.set @ DefaultScene(
        *[
            CoordsMarker(
                position=[i % n, (i // n) % n, (i // n**2) % n], scale=0.25
            )
            for i in range(N)
        ]
    )

    i = 0
    while True:
        i += 1
        await sleep(16)
```

```python
app.run()
```
