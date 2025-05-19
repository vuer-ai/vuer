
# Showing Point Clouds Programmatically and Fast💨

This example shows you two ways to load a point cloud. In the first example, you serve the point cloud as an `ply` file, and have the webclient read directly from your file system. This approach, however can be a bit slow, and won't work with point cloud data that are updated at real time. In the second example, you load the point cloud into python and then send the parsed vertices and the color information via the `PointCloud` component.

We apply a few tricks to make the point cloud transmit faster. See the [Why is it so much faster?](#why-is-it-so-much-faster) section for more details.

You should expect to see a scene that looks like the following:
![pointcloud](figures/pointcloud.png)

The second point cloud should load **significantly** faster than the first one, due to its smaller size. We use half-precision for the vertices, and Uint8 for the colors. This cuts the overall size by half.

## Why is it so much faster?

```{admonition} Why is it so much faster?
:class: tip
We accelerate point cloud view by using a custom, half-precision format for the vertices, and Uint8 for the colors. This cuts the overall size by half.

Alternative is to use compression algorithms designed specifically for geometric data (such as [Draco](https://google.github.io/draco/), or just simple LZ4 (or LZW). For depth images, LZW tend to work well due to near-by pixels being highly correlated.
```

```python
from asyncio import sleep
from pathlib import Path

import numpy as np
import open3d as o3d

from vuer import Vuer
from vuer.events import Set
from vuer.schemas import DefaultScene, Ply, PointCloud

assets_folder = Path(__file__).parent / "../../../assets"
test_file = "static_3d/porsche.ply"

# trimesh has issue loading large point clouds.
pcd = o3d.io.read_point_cloud(str(assets_folder / test_file))

app = Vuer(static_root=assets_folder)


@app.spawn(start=True)
async def main(proxy):
    proxy @ Set(
        DefaultScene(
            Ply(
                src="http://localhost:8012/static/" + test_file,
                size=0.008,
                position=[0, 0, 5],
            ),
            PointCloud(
                key="pointcloud",
                vertices=np.array(pcd.points),
                colors=np.array(pcd.colors),
                position=[0, 0, 0],
                size=0.008,
            ),
            # y-up
            up=[0, 1, 0],
        ),
    )

    while True:
        await sleep(1)
```
