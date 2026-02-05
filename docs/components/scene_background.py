import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# SceneBackground

The `SceneBackground` component displays images as scene backgrounds.

![](figures/background_image.png)

## Basic Usage

This example shows how to set a background image. 
This is useful for relaying from a rendering model such as NeRFs, Gaussian Splatting, or GANs:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    from pathlib import Path
    import imageio as iio
    from tqdm import tqdm

    from vuer import Vuer
    from vuer.events import ClientEvent
    from vuer.schemas import Scene, SceneBackground

    assets_folder = Path(__file__).parent / "../../../assets"
    disney_file = "movies/disney.webm"
    reader_file = assets_folder / disney_file
    reader = iio.get_reader(reader_file)

    app = Vuer()

    # we add the handler here because the spawn(start=True) binding is blocking.
    @app.add_handler("CAMERA_MOVE")
    async def on_camera(event: ClientEvent, session):
        assert event == "CAMERA_MOVE", "the event type should be correct"
        print("camera event", event.etype, event.value)


    @app.spawn(start=True)
    async def show_heatmap(session):
        session.set @ Scene()  # Empty scene with no defaults

        for i, frame in tqdm(enumerate(reader), desc="playing video"):
            # use the upsert(..., to="bgChildren") syntax, so it is in global frame.
            session.upsert(
                SceneBackground(
                    # Can scale the images down.
                    frame[::1, ::1, :],
                    # One of ['b64png', 'png', 'b64jpeg', 'jpeg']
                    # 'b64png' does not work for some reason, but works for the nerf demo.
                    # 'jpeg' encoding is significantly faster than 'png'.
                    format="jpeg",
                    quality=90,
                    key="background",
                    interpolate=True,
                ),
                to="bgChildren",
            )
            # 'jpeg' encoding should give you about 30fps with a 16ms wait in-between.
            await sleep(0.016)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the background |
| `format` | str | `"jpeg"` | Image encoding: `"jpeg"`, `"png"`, `"b64jpeg"`, `"b64png"` |
| `quality` | int | `75` | JPEG compression quality (1-100) |


```{admonition} Image Formats
:class: info
One of `['b64png', 'png', 'b64jpeg', 'jpeg']`.
`b64png` does not work for some reason, but works for the nerf demo.
`jpeg` encoding is significantly faster than `png`.
```


## Learn More

For detailed examples of using `SceneBackground`, see:

- [Background Image](../examples/background/background_image.md) - Basic background streaming
"""

doc.flush()
