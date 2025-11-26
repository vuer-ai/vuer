
# PointCloud - Direct Point Cloud Rendering

## Overview

`PointCloud` renders point clouds directly from numpy arrays with optimized performance for real-time visualization. Unlike file loaders (Ply/Pcd), it gives you frame-by-frame control with half-precision encoding for faster transmission.

![Point Cloud Visualization](../../examples/figures/pointcloud.png)

**Key advantages:**
- **Real-time updates**: Animate at 30-60 FPS
- **2x faster transmission**: Half-precision floats and uint8 colors
- **No file I/O**: Direct from numpy arrays

## Basic Usage

```python
import numpy as np
import open3d as o3d
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, PointCloud

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    # Load point cloud with Open3D
    pcd = o3d.io.read_point_cloud("porsche.ply")
    
    session.set @ DefaultScene(
        PointCloud(
            vertices=np.array(pcd.points),
            colors=np.array(pcd.colors),
            position=[0, 0, 0],
            size=0.008,
            key="pointcloud",
        ),
        up=[0, 1, 0],
    )
    
    await session.forever()
```

## Parameters

```python
PointCloud(
    vertices=np.ndarray,      # (N, 3) float32 - XYZ coordinates
    colors=np.ndarray,        # (N, 3) float32 (0-1) or uint8 (0-255) - RGB colors
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=[sx, sy, sz],
    size=0.01,                # Point size in world units
    key="unique-id",
)
```

## Color Formats

**Float32 (0-1 range):**
```python
colors = np.array(pcd.colors, dtype=np.float32)  # From Open3D
```

**Uint8 (0-255 range) - Recommended for performance:**
```python
colors = (np.array(pcd.colors) * 255).astype(np.uint8)
```

💡 **Performance tip**: uint8 colors reduce bandwidth by 75%!

## Real-Time Animation

```python
import numpy as np
from asyncio import sleep
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, PointCloud

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    # Generate point cloud
    num_points = 5000
    base_vertices = np.random.randn(num_points, 3).astype(np.float32)
    
    session.set @ DefaultScene(
        PointCloud(
            vertices=base_vertices,
            colors=np.ones((num_points, 3), dtype=np.float32) * [0.2, 0.6, 1.0],
            size=0.02,
            key="animated",
        ),
    )
    
    # Animate with wave effect
    t = 0
    while True:
        t += 0.1
        vertices = base_vertices.copy()
        vertices[:, 1] += 0.5 * np.sin(vertices[:, 0] * 3 + t)
        
        session.upsert @ PointCloud(
            vertices=vertices,
            colors=np.ones((num_points, 3), dtype=np.float32) * [0.2, 0.6, 1.0],
            size=0.02,
            key="animated",
        )
        
        await sleep(0.033)  # ~30 FPS
```

## Why So Fast?

PointCloud uses optimized encoding:
- **Half-precision vertices**: 16-bit floats (50% smaller)
- **Uint8 colors**: 8-bit per channel (75% smaller)
- **Binary WebSocket**: No JSON overhead

**Result**: Up to 60% smaller payloads compared to standard encoding!

## Comparison: PointCloud vs Ply

From the [pointcloud example](../../examples/02_pointcloud):

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Ply, PointCloud
import open3d as o3d

app = Vuer(static_root="assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    pcd = o3d.io.read_point_cloud("assets/porsche.ply")
    
    session.set @ DefaultScene(
        # Method 1: Load from file (slower)
        Ply(
            src="http://localhost:8012/static/porsche.ply",
            size=0.008,
            position=[0, 0, 5],
        ),
        
        # Method 2: Direct rendering (faster)
        PointCloud(
            vertices=np.array(pcd.points),
            colors=np.array(pcd.colors),
            position=[0, 0, 0],
            size=0.008,
            key="pointcloud",
        ),
        
        up=[0, 1, 0],
    )
    
    await session.forever()
```

The PointCloud on the right loads **significantly faster** due to optimized encoding.

## Depth Sensor Example

Convert RGB-D camera data to point cloud:

```python
import numpy as np

def depth_to_pointcloud(depth, rgb, fx, fy, cx, cy):
    """Convert depth image to point cloud."""
    h, w = depth.shape
    u, v = np.meshgrid(np.arange(w), np.arange(h))
    
    z = depth
    x = (u - cx) * z / fx
    y = (v - cy) * z / fy
    
    vertices = np.stack([x, y, z], axis=-1).reshape(-1, 3)
    colors = rgb.reshape(-1, 3)
    
    # Filter invalid points
    valid = (z.flatten() > 0) & (z.flatten() < 10)
    return vertices[valid].astype(np.float32), colors[valid].astype(np.uint8)

# Use camera intrinsics
fx, fy = 525.0, 525.0
cx, cy = 319.5, 239.5

vertices, colors = depth_to_pointcloud(depth, rgb, fx, fy, cx, cy)

PointCloud(vertices=vertices, colors=colors, size=0.005, key="depth-cloud")
```

## Performance Tips

1. **Use uint8 colors**:
   ```python
   colors = (colors_float * 255).astype(np.uint8)
   ```

2. **Downsample large clouds**:
   ```python
   vertices = vertices[::5]  # Keep every 5th point
   colors = colors[::5]
   ```

3. **Limit update frequency**:
   ```python
   await sleep(0.033)  # 30 FPS
   ```

## Next Steps

- [Ply](02_ply) - Load PLY files directly
- [Pcd](02_pcd) - Load PCD files directly  
- [TriMesh](02_trimesh) - Mesh-based visualization
