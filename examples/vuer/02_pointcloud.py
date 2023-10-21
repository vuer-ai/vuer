from pathlib import Path

import chardet
import numpy as np
# import numpy as np
import trimesh

from vuer import Vuer
from vuer.events import Set
from vuer.schemas import Obj, DefaultScene, Ply, PointCloud

assets_folder = Path(__file__).parent / "../../assets"
# test_file = "armadillo_midres.obj"
test_file = "pixelnerf.ply"

pointcloud = trimesh.load(assets_folder / test_file)
# assert isinstance(mesh, trimesh.Trimesh)
# pointcloud.apply_scale(0.1)

# from trimesh import util
with open(assets_folder / test_file, "rb") as f:
    data = f.read()
    encoding = chardet.detect(data[:1000])['encoding']
    print("File is encoded via", encoding, "passing this into Ply component")
    text = trimesh.util.decode_text(data)

app = Vuer(static_root=assets_folder)


@app.spawn
async def main(ws):
    app @ Set(
        DefaultScene(
            # Ply(key="buff-loaded", buff=data, encoding=encoding, size=0.001),
            # Ply(src="localhost:8012/static/pixelnerf.ply", size=0.001),
            Ply(src="http://localhost:8012/static/pixelnerf.ply", size=0.008, position=[0, 0, 1], rotation=[-0.5 * np.pi, 0, -0.5 * np.pi]),
            # PointCloud(key="pointcloud", vertices=pointcloud.vertices, colors=pointcloud.colors, position=[0, 0, 0], size=0.001),
            PointCloud(key="pointcloud", vertices=pointcloud.vertices, colors=pointcloud.colors, position=[0, 0, 0], size=0.008),
        ),

    )
    print("object is sent")


app.run()