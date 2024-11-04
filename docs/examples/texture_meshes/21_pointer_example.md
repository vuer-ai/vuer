```python
from asyncio import sleep
from pathlib import Path

import numpy as np
from vuer import Vuer, VuerSession
from vuer.events import ClientEvent
from vuer.schemas import Ply, Sphere

assets_folder = Path(__file__).parent / "../../../../assets"
test_file = "static_3d/porsche.ply"

# trimesh has issue loading large point clouds.
app = Vuer(static_root=assets_folder, port=8123)


@app.spawn()
async def main(sess: VuerSession):


    sess.upsert @ Ply(
        src="http://localhost:8123/static/" + test_file,
        size=0.008,
        # position=[0, 0, 5],
        matrix=[1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1],
        key="porsche-1",
    )


    t = np.pi

    while True:
        await sleep(0.016)

        t += 0.01

        sess.upsert @ Ply(
            matrix=[np.sin(t), -np.cos(t), 0, 0, np.cos(t), 0, 1, 0, 0, -np.sin(t), 0, 0, 0, 0, 0, 1],
            key="porsche-1",
        )




@app.add_handler("ADD_MARKER")
async def on_add_marker(event: ClientEvent, sess: VuerSession):
    print(event.value)
    print(">>>", event.key)
    sess.upsert @ Sphere(
        args=[0.1, 32, 32],
        position=[*event.value["position"].values()],
        material={"color": "red"},
        materialType={},
        # key=event.value,
    )


# app.run()
```
