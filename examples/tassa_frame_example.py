import uuid
from time import sleep

from tassa import Tassa
from tassa.events import Set, Update, Frame
from tassa.schemas import Page, Header1, Paragraph, ImageCls, Text, InputBox, Slider, ImageUpload, Button, \
    Scene, Pcd, Ply, Glb, PointCloud, div

doc = Tassa("ws://localhost:8013", reconnect=True)


# this is blocking because it autostarts.
@doc.bind(start=True)
def show_heatmap():
    from PIL import Image
    # image = Image.open("test.jpg")

    page = Page(
        Header1("Alan's Example"),
        Text("This example shows how to update the page without being blocked by events "
             "from the client"),
        Text("this is a text", key="text-1")
    )

    i = 0
    event = yield Frame(Set(page))
    while event != "TERMINAL":
        event = yield Frame(Set(Text(f"frame {i}", key="text-1")))
        sleep(0.1)
        i += 1
