
# Point Cloud Animation (Upsert)


```python
import asyncio
from pathlib import Path

import numpy as np
import open3d as o3d

from vuer import Vuer
from vuer.events import Set, ClientEvent
from vuer.schemas import DefaultScene, TriMesh, PointCloud, TimelineControls

mesh = o3d.io.read_triangle_mesh("assets/suzanne.ply")
vertices = np.asarray(mesh.vertices)
faces = np.asarray(mesh.triangles)

app = Vuer()

infill = np.load("assets/suzanne_infill_good_traj.npy")
surface_infill = np.load("assets/suzanne_surface_fill_only.npy")

@app.spawn
async def main(proxy):
    app.set @ DefaultScene()

    while True:
        await asyncio.sleep(1.0)

async def frame_handle(e: ClientEvent, _):
    print("frame handle")

    step = e.value["step"]
    step = step % len(infill)

    app.upsert @ [
        TimelineControls(end=len(infill), step=step, speed=1.0, paused=False, key="timeline"),
        PointCloud(key="infill", vertices=infill[step], position=[0, 0, 0], color="red"),
        PointCloud(
            key="surface",
            vertices=surface_infill[step],
            position=[0.8, 0, 0],
            color="green",
        ),
    ]
    print("updated the scene")
```
