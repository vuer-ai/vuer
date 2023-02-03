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
            Ply(url="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/orange/mask_in.ply", position=[-0.4597668968241072, 1.6471693583722102, -0.39355389704297755], rotation=[-1.2187778031521481, 0.23014442127707846, -2.51450903652011], movable=True, key="orange"),
            Ply(url="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/pink/mask_in_features_pca.ply", position=[-0.6986185019273616, 1.5700405336111176, -0.4102794644541101], rotation=[-1.408299089929678, 0.2078884160347643, -2.0108595820746995], movable=True, key="pink"),
            Ply(url="https://escher.ge.ngrok.io/files/william/nerfstudio/correspondences/2023-01-20_23-08-27/spoon/mask_in.ply", position=[-0.3079649071242292, 1.6716243999519362, -0.46583116982360084], rotation=[-1.2914249367915196, 0.3894468002633932, -2.598545360174221], movable=True, key="spoon"),
            # Pcd(url="https://escher.ge.ngrok.io/files/will_scene.pcd", position=[0, 0.63, 0], rotation=[12.03,0,-6], size=3/1000),
            Gripper(movable=True, handleOffset=[0, .2, 0], position=[-0.4330677704021733, 1.060604870211659, -0.17582191026745128], rotation=[-1.0835969425638816, -0.38834256059788824, -1.740862999970561], pinchWidth=1, skeleton=False, key="gripper"),
            # Gripper(movable=True, handleOffset=[0, .2, 0], position=[0, 0, -0.1], pinchWidth=1),
            style='''{"width":"100vw", "height":"900px"}'''
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
