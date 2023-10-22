from pathlib import Path

import chardet
import numpy as np
# import numpy as np
import trimesh
import open3d as o3d

from vuer import Vuer
from vuer.events import Set
from vuer.schemas import Obj, DefaultScene, Ply, PointCloud

assets_folder = Path(__file__).parent / "../../assets"
test_file = "static_3d/porsche.ply"
# test_file = "pixelnerf.ply"
# test_file = "porsche.ply"

# trimesh has issue loading large pointclouds.
pcd = o3d.io.read_point_cloud(str(assets_folder / test_file))

app = Vuer(static_root=assets_folder)


@app.spawn
async def main(ws):
    app @ Set(
        DefaultScene(
            Ply(src="http://localhost:8012/static/" + test_file, size=0.008, position=[0, 0, 1], rotation=[-0.5 * np.pi, 0, -0.5 * np.pi]),
            # PointCloud(key="pointcloud", vertices=np.array(pcd.points), colors=np.array(pcd.colors), position=[0, 0, 0], size=0.008),
        ),

    )
    print("object is sent")


app.run()