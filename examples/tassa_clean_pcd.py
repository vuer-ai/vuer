import uuid

from tassa import Tassa
from tassa.events import Set, Update
from tassa.schemas import Page, Header1, Paragraph, ImageCls, Text, InputBox, Slider, ImageUpload, Button, \
    Scene, Pcd, Ply, Glb, PointCloud, div, Gripper

doc = Tassa("ws://localhost:8012")


# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():

    page = Page(
        Scene(
            Ply(url="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/orange/mask_in.ply", position=[0.2, 0, 0], rotation=[0, 0, 0]),
            Ply(url="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/pink/mask_in_features_pca.ply", position=[0, 0, .2], rotation=[0, 0, 0]),
            Ply(url="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/spoon/mask_in.ply", position=[0, 0, 0], rotation=[0, 0, 0], movable=True),
            Gripper(movable=True, handleOffset=[0, .2, 0], pinchWidth=1),
        )
    )
    event = yield Set(page)
    while not event == "TERMINAL":
        if event == "UPLOAD":
            event = yield Update(ImageCls(data=event.value, key="alan_img"))
        else:
            print(vars(event))
            res = Paragraph(str(vars(event)), key=str(uuid.uuid4())[-10:])
            print(res.serialize())
            event = yield Update(res)
