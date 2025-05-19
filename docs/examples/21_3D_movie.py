from cmx import doc
import os
from contextlib import nullcontext
from pathlib import Path

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# Playing 3D Movie in VisionPro and Quest 3

This example shows how to use background images + layers
to play a 3D movie in the VisionPro and the Quest 3.

Before you start, first run the following script:

```shell
# From the Mary Project: https://www.meryproject.com/
# 360 Stereo from http://pedrofe.com/rendering-for-oculus-rift-with-arnold/
wget -O mary.webm https://threejs.org/examples/textures/MaryOculus.webm
```

![Side view of the 3D movie screen](figures/21_3D_movie.png)

The underlying rendering engine supported a layer binary bitmask
for both objects and the camera. Below we set the two image planes,
left and right, to `layers=1` and `layers=2`. Note that these two 
masks are associated with left eye's camera and the right eye's
camera.

```{admonition} ImagePlane.layer Property
Pay attention to the layer property. You can set it to 3 to have
it show up in both eyes! layers=0 is the default, and it appears 
on all of the cameras.
```

"""

with doc:
    from asyncio import sleep

    import imageio as iio
    from tqdm import tqdm

    from vuer import Vuer
    from vuer.events import ClientEvent
    from vuer.schemas import Scene, ImageBackground

    assets_folder = Path(__file__).parent / "../../../assets"
    mary_file = "movies/mary.webm"
    reader_file = assets_folder / mary_file


    reader = iio.get_reader(reader_file)

    app = Vuer()

    # we add the handler here because the spawn(start=True) binding is blocking.
    @app.add_handler("CAMERA_MOVE")
    async def on_camera(event: ClientEvent, session):
        assert event == "CAMERA_MOVE", "the event type should be correct"
        print("camera event", event.etype, event.value)

    @app.spawn
    async def show_heatmap(session):
        session.set @ Scene()

        while True:
            for i, frame in tqdm(enumerate(reader), desc="playing video"):
                # use the upsert(..., to="bgChildren") syntax, so it is in global frame.
                session.upsert(
                    [
                        ImageBackground(
                            # We slice the left side of the stereo video
                            frame[::, :1024, :],
                            aspect=1.778,
                            height=1,
                            distanceToCamera=1,
                            layers=1,
                            # One of ['b64png', 'png', 'b64jpeg', 'jpeg']
                            format="jpeg",
                            quality=90,
                            key="background-left",
                            interpolate=True,
                        ),
                        ImageBackground(
                            # We slice the right side of the stereo video
                            frame[::, 1024:, :],
                            aspect=1.778,
                            height=1,
                            distanceToCamera=1,
                            layers=2,
                            # One of ['b64png', 'png', 'b64jpeg', 'jpeg']
                            format="jpeg",
                            quality=90,
                            key="background-right",
                            interpolate=True,
                        ),
                    ],
                    to="bgChildren",
                )
                # 'jpeg' encoding should give you about 30fps with a 16ms wait in-between.
                await sleep(0.016 * 2)


doc @ """
## Next Steps

- [ ] Add layers support to the virtual cameras.

"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    app.run()

doc.flush()