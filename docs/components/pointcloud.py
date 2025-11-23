import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# PointCloud

The `PointCloud` component displays point cloud data directly from vertex and color arrays.
This is ideal for:
- Real-time point cloud streaming from sensors (LiDAR, depth cameras)
- Visualizing 3D scan data
- Displaying particle systems
- Animating point cloud sequences

## Basic Usage

A minimal example that creates a point cloud from numpy arrays:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    import numpy as np
    from vuer import Vuer
    from vuer.schemas import DefaultScene, PointCloud, OrbitControls

    # Create random point cloud
    n_points = 1000
    vertices = np.random.randn(n_points, 3).astype(np.float32)
    colors = np.random.rand(n_points, 3).astype(np.float32)

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            PointCloud(
                key="pointcloud",
                vertices=vertices,
                colors=colors,
                size=0.02,
            ),
            bgChildren=[
                OrbitControls(key="OrbitControls")
            ],
        )

        while True:
            await asyncio.sleep(1.0)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the point cloud |
| `vertices` | ndarray | - | Nx3 array of point positions |
| `colors` | ndarray | - | Nx3 array of RGB colors (0-1 range) |
| `size` | float | `0.01` | Point size |
| `position` | list | `[0,0,0]` | Point cloud position in world coordinates |
| `rotation` | list | `[0,0,0]` | Point cloud rotation (Euler angles) |
| `scale` | float/list | `1` | Uniform or per-axis scale |

## Performance Optimization

Vuer uses a custom half-precision format for vertices and Uint8 for colors, cutting the overall data size by half compared to standard formats.

For even better compression, consider:
- **Draco**: Geometric compression for point clouds
- **LZ4**: General-purpose compression for streaming
- **LZW**: Good for depth images due to spatial correlation

## Learn More

For detailed examples of using `PointCloud`, see:

- [Showing Point Clouds](../examples/point_clouds/pointcloud.md) - Programmatic point cloud display
- [Point Cloud Animation](../examples/point_clouds/animation.md) - Animating point cloud sequences
- [Loading PLY Files](../examples/point_clouds/pointcloud_ply.md) - Loading from PLY format
- [Loading PCD Files](../examples/point_clouds/pointcloud_pcd.md) - Loading from PCD format
"""

doc.flush()
