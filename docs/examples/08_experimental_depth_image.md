
# RGB-D Visualization

Demo for rendering an RGB and depth pair. First run the makefile in the assets/images folder.

```shell
cd examples/vuer/assets/images
make
```
And this should download a pair of RGB and depth image.

```python
from asyncio import sleep
from pathlib import Path

from vuer import Vuer
from vuer.events import ClientEvent
from vuer.schemas import ImageBackground, DefaultScene

assets_folder = Path(__file__).parent / "../../../assets"

app = Vuer(
    queries=dict(
        reconnect=True,
        grid=False,
        backgroundColor="black",
    ),
    static_root=assets_folder,
)

def get_buffer(file_path):
    with open(file_path, "rb") as f:
        file_buffer = f.read()

    return file_buffer

@app.spawn(start=True)
async def show_heatmap(proxy):
    rgb = get_buffer(assets_folder / "images/cubic_rgb.jpg")
    depth = get_buffer(assets_folder / "images/cubic_depth.jpg")

    proxy.set @ DefaultScene(
        bgChildren=[
            ImageBackground(
                src=rgb,
                depthSrc=depth,
                distanceToCamera=1.0,
                key="background",
            ),
        ],
        # hide the helper to only render the objects.
        up=[0, 1, 0],
        show_helper=False,
    )

    while True:
        await sleep(10.0)

async def on_camera(event: ClientEvent, send_fn):
    assert event == "CAMERA_MOVE", "the event type should be correct"
    print("camera event", event.etype, event.value)
```

```python
app.add_handler("CAMERA_MOVE", on_camera)
app.start()
```
