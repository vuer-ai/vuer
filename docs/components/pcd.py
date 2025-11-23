import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Pcd

The `Pcd` component loads and displays PCD (Point Cloud Data) files.
This is ideal for:
- Loading 3D scan data from sensors
- Displaying point clouds from ROS or PCL pipelines
- Visualizing LiDAR captures
- Loading assets from robotics applications

![pointcloud](figures/pointcloud_pcd.png)

## Basic Usage

A minimal example that loads a PCD file from a URL:
"""

with doc, doc.skip if MAKE_DOCS else nullcontext():
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


doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `src` | str | - | URL to the PCD file |
| `size` | float | `0.01` | Point size |
| `position` | list | `[0,0,0]` | Point cloud position |
| `rotation` | list | `[0,0,0]` | Point cloud rotation |
| `scale` | float/list | `1` | Point cloud scale |

## Related Components

| Component | Purpose |
|-----------|---------|
| `Ply` | Load PLY format point clouds |
| `PointCloud` | Programmatic point clouds from arrays |

## Learn More

For detailed examples of using `Pcd`, see:

- [Loading PCD Files](../examples/point_clouds/pointcloud_pcd.md) - PCD file loading tutorial
- [Point Clouds](../examples/point_clouds/pointcloud.md) - Multiple point cloud methods
"""

doc.flush()
