
# Pcd - Point Cloud Data File Loader

## Overview

The `Pcd` component loads point clouds from PCD (Point Cloud Data) files, the native format of the Point Cloud Library (PCL). Widely used in robotics and ROS.

![PCD Point Cloud](../../examples/figures/pointcloud_pcd.png)

## Basic Usage

```python
import os
from vuer import Vuer, VuerSession
from vuer.schemas import Pcd

app = Vuer(static_root=os.getcwd() + "/assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.upsert @ Pcd(
        src="http://localhost:8012/static/scan.pcd",
        size=0.001,
        key="pcd-cloud",
    )
    
    await session.forever()
```

## Parameters

```python
Pcd(
    src="url/to/file.pcd",    # URL to PCD file
    size=0.01,                 # Point size
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=[sx, sy, sz],
    key="unique-id",
)
```

## Multiple PCD Files

Example from [pointcloud_pcd](../../examples/02_pointcloud_pcd):

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Pcd

app = Vuer(static_root="assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.upsert @ Pcd(
        src="http://localhost:8012/static/f3rm_ycb_1.pcd",
        size=0.001,
        key="scan1",
    )
    
    session.upsert @ Pcd(
        src="http://localhost:8012/static/f3rm_ycb_2.pcd",
        size=0.001,
        key="scan2",
    )
    
    await session.forever()
```

## ROS Integration

### Save ROS PointCloud2 as PCD

```python
#!/usr/bin/env python3
import rospy
from sensor_msgs.msg import PointCloud2
import sensor_msgs.point_cloud2 as pc2
import open3d as o3d
import numpy as np

def callback(msg):
    # Extract points
    points = []
    for p in pc2.read_points(msg, field_names=("x", "y", "z"), skip_nans=True):
        points.append([p[0], p[1], p[2]])
    
    # Save as PCD
    pcd = o3d.geometry.PointCloud()
    pcd.points = o3d.utility.Vector3dVector(np.array(points))
    o3d.io.write_point_cloud("output.pcd", pcd)
    rospy.loginfo("Saved PCD file")

rospy.init_node('pcd_saver')
rospy.Subscriber('/camera/depth/points', PointCloud2, callback)
rospy.spin()
```

## Converting Formats

**PCD to PLY:**
```python
import open3d as o3d

pcd = o3d.io.read_point_cloud("input.pcd")
o3d.io.write_point_cloud("output.ply", pcd)
```

**PLY to PCD:**
```python
import open3d as o3d

pcd = o3d.io.read_point_cloud("input.ply")
o3d.io.write_point_cloud("output.pcd", pcd, write_ascii=False)
```

**NumPy to PCD:**
```python
import open3d as o3d
import numpy as np

vertices = np.random.randn(1000, 3).astype(np.float32)
colors = np.random.rand(1000, 3).astype(np.float32)

pcd = o3d.geometry.PointCloud()
pcd.points = o3d.utility.Vector3dVector(vertices)
pcd.colors = o3d.utility.Vector3dVector(colors)
o3d.io.write_point_cloud("output.pcd", pcd)
```

## PCD File Format

### Binary (Recommended)
```
# .PCD v0.7 - Point Cloud Data file format
VERSION 0.7
FIELDS x y z rgb
SIZE 4 4 4 4
TYPE F F F U
COUNT 1 1 1 1
WIDTH 100000
HEIGHT 1
POINTS 100000
DATA binary
<binary data>
```

### ASCII (Debugging)
```
# .PCD v0.7
VERSION 0.7
FIELDS x y z rgb
SIZE 4 4 4 4
TYPE F F F U
COUNT 1 1 1 1
WIDTH 100
HEIGHT 1
POINTS 100
DATA ascii
0.0 0.0 0.0 16711680
0.1 0.0 0.0 16711680
...
```

**Tip**: Use binary for production (5-10x smaller).

## Optimization

```python
import open3d as o3d

# Load
pcd = o3d.io.read_point_cloud("large.pcd")

# Downsample
pcd_small = pcd.voxel_down_sample(voxel_size=0.01)

# Remove outliers
pcd_clean, _ = pcd_small.remove_statistical_outlier(nb_neighbors=20, std_ratio=2.0)

# Save optimized
o3d.io.write_point_cloud("optimized.pcd", pcd_clean, write_ascii=False)
```

## For Real-Time Updates

Use [PointCloud](02_pointcloud) component instead:

```python
import open3d as o3d
import numpy as np

# Load PCD once
pcd = o3d.io.read_point_cloud("scan.pcd")
vertices = np.asarray(pcd.points).astype(np.float32)
colors = (np.asarray(pcd.colors) * 255).astype(np.uint8)

# Use PointCloud for fast updates
PointCloud(vertices=vertices, colors=colors, size=0.001, key="fast")
```

## Next Steps

- [PointCloud](02_pointcloud) - For real-time updates
- [Ply](02_ply) - Alternative format
