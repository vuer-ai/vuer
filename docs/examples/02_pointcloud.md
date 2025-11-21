
# Showing Point Clouds Programmatically and Fast💨

This example demonstrates **two methods** for displaying point clouds in Vuer.

![pointcloud](figures/pointcloud.png)

| Method | Component | Use Case |
|--------|-----------|----------|
| PLY file | `Ply(src=...)` | Static files served from disk |
| Programmatic | `PointCloud(vertices=..., colors=...)` | Real-time streaming, dynamic data |


```{admonition} Why is it so much faster?
:class: tip
We accelerate point cloud view by using a custom, half-precision format for the vertices, and Uint8 for the colors. This cuts the overall size by half.
```

```{admonition} Alternative Compression
:class: note
For even better compression, consider geometric compression algorithms like [Draco](https://google.github.io/draco/) or general-purpose algorithms like LZ4. For depth images, LZW works well due to spatial correlation between neighboring pixels.
```

## Code Example

```python
from asyncio import sleep
from pathlib import Path

import numpy as np
import open3d as o3d

from vuer import Vuer
from vuer.events import Set
from vuer.schemas import DefaultScene, Ply, PointCloud, OrbitControls

assets_folder = Path(__file__).parent / "../../../assets"
test_file = "static_3d/porsche.ply"

# Load point cloud using Open3D (better for large files than trimesh)
pcd = o3d.io.read_point_cloud(str(assets_folder / test_file))

app = Vuer(static_root=assets_folder)

@app.spawn(start=True)
async def main(proxy):
    proxy @ Set(
        DefaultScene(
            # Method 1: Load PLY file from static server
            Ply(
                src="http://localhost:8012/static/" + test_file,
                size=0.008,
                position=[0, 0, 5],
            ),
            # Method 2: Send vertices and colors directly via websocket
            PointCloud(
                key="pointcloud",
                vertices=np.array(pcd.points),
                colors=np.array(pcd.colors),
                position=[0, 0, 0],
                size=0.008,
            ),
            up=[0, 1, 0],
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        ),
    )

    while True:
        await sleep(1)
```
