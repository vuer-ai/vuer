# Point Clouds

This section covers displaying point cloud data in Vuer, including loading from files and programmatic streaming.

## Show Point Clouds Programmatically and Fast
Learn **two methods** for displaying point clouds: loading PLY files from a static server or sending vertices/colors directly via websocket.

**[View full example →](point_clouds/pointcloud.md)**

<img src="figures/pointcloud.png" width="80%">

## PointCloud Animation
Animate point clouds using `TimelineControls` and the global `app.update` method to broadcast updates to all connected clients.

**[View full example →](point_clouds/animation.md)**

## PointCloud Animation (Upsert)
Similar to the animation example above, but uses session-based `proxy.upsert` to target specific client sessions instead of global broadcasting.

**[View full example →](point_clouds/animation_upsert.md)**

## Depth Point Cloud
Generate point clouds directly from depth images using the `DepthPointCloud` component with colormap support.

**[View full example →](point_clouds/depth_pointcloud.md)**

## Example List

```{eval-rst}
.. toctree::
    :maxdepth: 1

    Programmatic PointCloud <point_clouds/pointcloud.md>
    PointCloud Animation <point_clouds/animation.md>
    PointCloud Animation (Upsert) <point_clouds/animation_upsert.md>
    Depth Point Cloud <point_clouds/depth_pointcloud.md>
```
