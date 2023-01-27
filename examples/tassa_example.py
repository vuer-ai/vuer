import uuid

from tassa import Tassa
from tassa.events import Set, Update
from tassa.schemas import Page, Header1, Paragraph, ImageCls, Text, InputBox, Slider, ImageUpload, PointCloud

doc = Tassa("ws://localhost:8012")


# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    from PIL import Image
    # image = Image.open("test.jpg")

    page = Page(
        Header1("Alan's Example"),
        InputBox(value="Hello World!"),
        Text("hello Jansen?", key="ge_demo"),
        Header1("Alan's Example"),
        Slider(min=20, max=50, step=2, value=40),
        Paragraph("Timur is sitting on the right"),
        ImageUpload(label="Upload an image: "),
        # ImageCls(data=image, key="alan_img"),
        PointCloud(path="https://escher.ge.ngrok.io/files/will_scene.pcd")

    )
    event = yield Set(page)
    while not event @ "TERMINAL":
        if event @ "UPLOAD":
            event = yield Update(ImageCls(data=event.value, key="alan_img"))
        else:
        # if event @ "INPUT":
        #     event = yield Update(Text("hello there~~", key="ge_demo"))
        # elif event @ "CLICK":
            print(vars(event))
            # event = yield Update(Text("hello there~~"))
            res = Paragraph(str(vars(event)), key=str(uuid.uuid4())[-10:])
            print(res.serialize())
            event = yield Update(res)
