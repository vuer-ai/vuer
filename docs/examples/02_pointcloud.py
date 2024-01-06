from cmx import doc

doc @ """
# Pointcloud

"""
with doc:
    from pathlib import Path

    import numpy as np
    import open3d as o3d

    from vuer import Vuer
    from vuer.events import Set
    from vuer.schemas import DefaultScene, Ply, PointCloud

    assets_folder = Path(__file__).parent / "../../assets"
    test_file = "static_3d/porsche.ply"

    # trimesh has issue loading large pointclouds.
    pcd = o3d.io.read_point_cloud(str(assets_folder / test_file))

    app = Vuer(static_root=assets_folder)

    @app.spawn
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

doc @ """

Now remember to add: 

```python
    # keep the session alive.
    while True:
        await sleep(16)
        
# now launch the vuer server
app.run()
```
"""

doc @ """
The second pointcloud should load significantly 
faster than the first one, due to its smaller size.
We use half-precision for the vertices, and Uint8
for the colors. This cuts the overall size by half.

```{admonition} Why is it so much faster?
:class: tip
We accelerate pointcloud rendeirng by using a custom, half-precision format for the vertices, and Uint8 for the colors. This cuts the overall size by half.

Alternative is to use compression algorithms designed specifically for geometric data (such as [Draco](https://google.github.io/draco/), or just simple LZ4 (or LZW). For depth images, LZW tend to work well due to near-by pixels being highly correlated.
```
"""

doc.flush()
