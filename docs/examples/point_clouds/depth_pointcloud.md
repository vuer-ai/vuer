# Depth Point Cloud -- Lidar Point Cloud from Depth Image

We can save 3D pointclouds effciently using Jpeg compression, by representing
it as RGBA or grayscale images. In this example, we use a grayscale PNG image
for depth. Note that PNG encoding and decoding can be 20 $\times$ slower than
the FFT operations in a jpeg, so for visualization purposes, you can use jpeg
for both color and depth.

Generate point clouds directly from depth images using the `DepthPointCloud` component.

## Basic Example

```python
import asyncio

from vuer import Vuer, VuerSession
from vuer.schemas import DepthPointCloud

vuer = Vuer(workspace="./rgb_depth", killport=True)


@vuer.spawn(start=True)
async def main(sess: VuerSession):
  sess.upsert @ DepthPointCloud(
    key="depth-point-cloud",
    depth=vuer.localhost_prefix / "depth.png",
    cmap="viridis",
    colorMode=4,
  )
  await asyncio.sleep(0.001)

  await sess.forever()
```

```{admonition} Performance Tip
:class: tip
When rendering multiple `DepthPointCloud` instances, wrap them in a `DepthPointCloudProvider`
for better performance. The provider enables frustum culling, level-of-detail rendering,
and shared caching.
```

## With Provider (Recommended for Multiple Point Clouds)

```python
import asyncio

from vuer import Vuer, VuerSession
from vuer.schemas import DepthPointCloud, DepthPointCloudProvider

vuer = Vuer(workspace="./rgb_depth", killport=True)


@vuer.spawn(start=True)
async def main(sess: VuerSession):
  sess.upsert @ DepthPointCloudProvider(
    DepthPointCloud( key="pc-0", depth=vuer.localhost_prefix / "depth.png", position=[0, 0, 0] ),
    DepthPointCloud( key="pc-1", depth=vuer.localhost_prefix / "depth.png", position=[2, 0, 0] ),
    key="provider",
    frustumCulling=True,
  )

  await sess.forever()
```

## DepthPointCloud Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `depth` | str | (required) | URL to 16-bit depth PNG image |
| `rgb` | str | None | URL to RGB image (uses depth grayscale if not provided) |
| `position` | tuple | [0, 0, 0] | Position in 3D space [x, y, z] |
| `rotation` | tuple | [0, 0, 0] | Rotation in Euler angles [x, y, z] |
| `scale` | tuple | [1, 1, 1] | Scale factors [x, y, z] |
| `fov` | float | 58 | Vertical field of view in degrees (58 = RealSense D435) |
| `pointSize` | float | 2.0 | Point size in pixels or world units |
| `screenSpaceSizing` | bool | True | If true, points have constant pixel size |
| `cmap` | str | None | Colormap: `"turbo"`, `"viridis"`, `"inferno"`, `"jet"`, or None for RGB |
| `colorMode` | int | 0 | Color mode (see table below) |
| `depthMin` | float | 0.1 | Minimum depth for visualization mapping |
| `depthMax` | float | 50 | Maximum depth for visualization mapping |
| `heightMin` | float | -2 | Minimum height for visualization mapping |
| `heightMax` | float | 2 | Maximum height for visualization mapping |
| `minY` | float | -Infinity | Minimum world Y for filtering - points below are discarded |
| `maxY` | float | Infinity | Maximum world Y for filtering - points above are discarded |
| `cx` | float | width/2 | Principal point X in pixels (optical center X) |
| `cy` | float | height/2 | Principal point Y in pixels (optical center Y) |

### Color Modes

| Value | Mode | Description |
|-------|------|-------------|
| 0 | depth | Color by raw depth value |
| 1 | camZ | Color by camera Z distance |
| 2 | camDist | Color by Euclidean distance from camera |
| 3 | localY | Color by local Y coordinate |
| 4 | worldY | Color by world Y coordinate (height) |

### Camera Intrinsics (cx/cy)

For cameras with off-center principal points (optical center), you can specify the `cx` and `cy` parameters
to properly reconstruct the 3D point cloud. By default, they are centered at `width/2` and `height/2`.

```python
# Using camera intrinsics from calibration
sess.upsert @ DepthPointCloud(
    key="calibrated-pc",
    depth=vuer.localhost_prefix / "depth.png",
    rgb=vuer.localhost_prefix / "color.png",
    fov=58,           # Vertical FOV in degrees
    cx=320.5,         # Principal point X (pixels)
    cy=240.3,         # Principal point Y (pixels)
)
```

Common sources for camera intrinsics:
- **ROS camera_info**: `K[2]` = cx, `K[5]` = cy
- **OpenCV calibration**: `cx`, `cy` from the camera matrix
- **RealSense SDK**: `ppx`, `ppy` from intrinsics

## DepthPointCloudProvider Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `frustumCulling` | bool | True | Skip rendering point clouds outside camera view |
| `cullingMargin` | float | 2.0 | Margin multiplier for culling bounds |
| `lod` | dict | None | Level-of-detail configuration with strides and distances |
| `bake` | dict | None | Bake configuration for depth processing |
| `children` | list | [] | Child `DepthPointCloud` elements |
