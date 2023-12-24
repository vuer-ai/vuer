from asyncio import sleep
from pathlib import Path

import imageio as iio
from tqdm import tqdm

from vuer import Vuer
from vuer.events import ClientEvent
from vuer.schemas import Scene, ImageBackground, SceneBackground

reader = iio.get_reader("../../assets/movies/disney.webm")

assets_folder = Path(__file__).parent / "../../assets"
app = Vuer(
    queries=dict(
        reconnect=True,
        grid=False,
        backgroundColor="black",
    ),
    static_root=assets_folder,
    # debug=True,
)


@app.spawn
async def show_heatmap(session):
    session.set @ Scene()

    for i, frame in tqdm(enumerate(reader), desc="playing video"):
        # First 25 frames are all black
        if frame.max() == 0:
            continue

        # First 100 frames are very static.
        if i < 100:
            continue

        session.upsert(
            SceneBackground(
                # Can scale the images down.
                frame[::1, ::1, :],
                # One of ['b64png', 'png', 'b64jpg', 'jpg']
                # 'b64png' does not work for some reason, but works for the nerf demo.
                # 'jpg' encoding is significantly faster than 'png'.
                format="jpg",
                key="background",
                interpolate=True,
            ),
            to="bgChildren",
        )
        # 'jpg' encoding should give you about 30fps with a 16ms wait in-between.
        await sleep(0.016)


async def on_camera(event: ClientEvent, session):
    assert event == "CAMERA_MOVE", "the event type should be correct"
    print("camera event", event.etype, event.value)


app.add_handler("CAMERA_MOVE", on_camera)
app.run()
