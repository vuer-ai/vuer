
# Point Cloud via Pcd Component

This example shows you how to load `pcd` files.

You should expect to see a scene that looks like the following:
![pointcloud](figures/pointcloud_pcd.png)

```python
import os
from asyncio import sleep

from vuer import Vuer, VuerSession
from vuer.schemas import Pcd

f3rm_ycb_1 = "pointclouds/f3rm_ycb_1.pcd"
f3rm_ycb_2 = "pointclouds/f3rm_ycb_2.pcd"

app = Vuer(static_root=os.getcwd() + "/../../../assets")

@app.spawn(start=True)
async def main(sess: VuerSession):
    sess.upsert @ Pcd(
        src="http://localhost:8012/static/" + f3rm_ycb_1,
        size=0.001
    )
    sess.upsert @ Pcd(
        src="http://localhost:8012/static/" + f3rm_ycb_2,
        size=0.001,
    )

    while True:
        await sleep(1)
```
