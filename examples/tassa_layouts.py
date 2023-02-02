import uuid

from tassa import Tassa
from tassa.events import Set, Update
from tassa.schemas import Page, Header1, Paragraph, ImageCls, Text, InputBox, Slider, ImageUpload, Button, \
    Scene, Pcd, Ply, Glb, PointCloud, div

doc = Tassa("ws://localhost:8012")


# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    from PIL import Image
    # image = Image.open("test.jpg")

    outlines = 'p-1 m-1 outline rounded-lg outline-pink-500'

    page = Page(
        Header1("Alan's Example"),
        Button(value="Hello!", style='''{"width":"100%", "height":"100px"}'''),
        InputBox(value="Hello World!"),
        Text("hello Jansen?", key="ge_demo"),
        Header1("Alan's Example"),
        Slider(min=20, max=50, step=2, value=40),
        div(Paragraph("Timur is sitting on the right"), style='{"border":"1px solid black", "width":"100px", "height":"100px"}'),
        div(div(_className=f'row-span-2 {outlines}'), div(_className=f'row-span-3 col-span-3 {outlines}'), _className=f'h-96 w-96 grid grid-cols-4 grid-rows-4 {outlines}')
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
