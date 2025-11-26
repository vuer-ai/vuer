
# Ply - Stanford PLY File Loader

## Overview

The `Ply` component loads point clouds from PLY (Polygon File Format) files. PLY is a standard format for 3D scanning and point cloud storage.

![PLY Point Cloud](../../examples/figures/pointcloud_ply.png)

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Ply

app = Vuer(static_root="assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    # Set tone mapping for better colors
    session.set @ Scene(toneMappingExposure=0.4)
    
    session.upsert @ Ply(
        src="http://localhost:8012/static/pointcloud.ply",
        size=0.008,
        rotation=[-1.57, 0, -1.57],  # Adjust orientation
        key="ply-cloud",
    )
    
    await session.forever()
```

## Parameters

```python
Ply(
    src="url/to/file.ply",    # URL to PLY file
    size=0.01,                 # Point size
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=[sx, sy, sz],
    key="unique-id",
)
```

## Adjusting Colors with Tone Mapping

Point clouds can look desaturated. Use tone mapping to improve appearance:

```python
from vuer.schemas import Scene, Ply

session.set @ Scene(
    toneMappingExposure=0.4,  # Lower = darker, more saturated
    
    Ply(src="scan.ply", size=0.008, key="scan"),
)
```

💡 **Tip**: Point cloud rendering doesn't depend on environment lighting, but tone mapping affects final appearance.

## Common Orientations

Different software exports with different coordinate systems:

```python
import numpy as np

# Default (Z-up)
rotation=[0, 0, 0]

# Y-up (common in Blender)
rotation=[-np.pi/2, 0, 0]

# PixelNeRF style
rotation=[-np.pi/2, 0, -np.pi/2]
```

## Serving Local Files

```python
import os
from vuer import Vuer, VuerSession
from vuer.schemas import Ply

app = Vuer(static_root=os.getcwd() + "/assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.upsert @ Ply(
        src="http://localhost:8012/static/scans/room.ply",
        size=0.005,
        key="room",
    )
    
    await session.forever()
```

## Creating PLY from Code

```python
import numpy as np

def save_ply(vertices, colors, filename):
    """Save point cloud as binary PLY."""
    with open(filename, 'wb') as f:
        header = f"""ply
format binary_little_endian 1.0
element vertex {len(vertices)}
property float x
property float y
property float z
property uchar red
property uchar green
property uchar blue
end_header
"""
        f.write(header.encode('ascii'))
        
        for i in range(len(vertices)):
            f.write(vertices[i].astype(np.float32).tobytes())
            f.write(colors[i].astype(np.uint8).tobytes())

# Generate point cloud
vertices = np.random.randn(1000, 3).astype(np.float32)
colors = np.random.randint(0, 255, (1000, 3), dtype=np.uint8)
save_ply(vertices, colors, "output.ply")
```

## Converting Formats

**From PCD:**
```python
import open3d as o3d

pcd = o3d.io.read_point_cloud("input.pcd")
o3d.io.write_point_cloud("output.ply", pcd)
```

**From Depth Image:**
```python
import open3d as o3d
import numpy as np

def depth_to_ply(depth, rgb, intrinsics, output_path):
    depth_o3d = o3d.geometry.Image(depth.astype(np.float32))
    rgb_o3d = o3d.geometry.Image(rgb.astype(np.uint8))
    
    rgbd = o3d.geometry.RGBDImage.create_from_color_and_depth(
        rgb_o3d, depth_o3d, depth_scale=1.0, depth_trunc=10.0
    )
    
    pcd = o3d.geometry.PointCloud.create_from_rgbd_image(rgbd, intrinsics)
    o3d.io.write_point_cloud(output_path, pcd)
```

## Desaturated Colors

**Problem**: Point cloud looks washed out or gray.

**Solutions**:
1. Lower tone mapping: `toneMappingExposure=0.3`
2. Check camera exposure when capturing
3. Post-process colors before saving

## Performance

For real-time updates, use [PointCloud](02_pointcloud) instead:

| Feature | Ply | PointCloud |
|---------|-----|------------|
| Loading | Slow (HTTP) | Fast (WebSocket) |
| Updates | Static | Real-time |
| Use case | Pre-made assets | Live sensors |

## Next Steps

- [PointCloud](02_pointcloud) - For real-time updates
- [Pcd](02_pcd) - Alternative format
