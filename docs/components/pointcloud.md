
# PointCloud

The `PointCloud` component displays point cloud data directly from vertex and color arrays.
This is ideal for:
- Real-time point cloud streaming from sensors (LiDAR, depth cameras)
- Visualizing 3D scan data
- Displaying particle systems
- Animating point cloud sequences

## Basic Usage

A minimal example that creates a point cloud from numpy arrays:

```python
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
        show_helper=False,
        bgChildren=[
            OrbitControls(key="OrbitControls")
        ],
    )

    await session.forever()
```

## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the point cloud |
| `vertices` | ndarray | - | Nx3 array of point positions |
| `colors` | ndarray | - | Nx3 array of RGB colors. Supports two formats: Float32 (0-1 range), or Uint8 (0-255 range, **better performance**) |
| `size` | float | `0.01` | Point size |

## Learn More

For detailed examples of using `PointCloud`, see:

- [Showing Point Clouds](../examples/point_clouds/pointcloud.md) - Programmatic point cloud display
- [Point Cloud Animation](../examples/point_clouds/animation.md) - Animating point cloud sequences
