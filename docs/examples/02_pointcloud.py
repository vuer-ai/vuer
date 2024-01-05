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
    # keep the session alive.
    while True:
        await sleep(16)

# now launch the vuer server
app.run()
"""

doc @ """
object is sent.

The second pointcloud should load significantly 
faster than the first one, due to its smaller size.
We use half-precision for the vertices, and Uint8
for the colors. This cuts the overall size by half.
"""

doc.flush()
