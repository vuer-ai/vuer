# SceneBackground - Dynamic Background Images

## Overview

`SceneBackground` displays dynamic background images, perfect for video playback, real-time streaming, or relaying from rendering models like NeRFs and Gaussian Splatting.

## Basic Usage

From the [background image example](../../examples/07_background_image):

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, SceneBackground
import imageio as iio

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene()

    # Read video file
    reader = iio.get_reader("video.webm")

    for frame in reader:
        session.upsert(
            SceneBackground(
                frame,  # numpy array
                format="jpeg",
                quality=90,
                key="background",
                interpolate=True,
            ),
            to="bgChildren",
        )
        await session.sleep(0.016)  # ~60fps
```

## Parameters

```python
SceneBackground(
    image_data,           # numpy array (H, W, 3)
    format="jpeg",        # 'jpeg', 'png', 'b64jpeg', 'b64png'
    quality=90,           # JPEG quality (1-100)
    interpolate=True,     # Smooth scaling
    key="unique-id",
)
```

## Format Options

- **jpeg** - Fast encoding, good for real-time (recommended)
- **png** - Lossless, slower encoding
- **b64jpeg** - Base64-encoded JPEG
- **b64png** - Base64-encoded PNG

## Performance

For 30-60fps video playback:
- Use `format="jpeg"` with `quality=85-90`
- Downscale frames if needed: `frame[::2, ::2, :]`
- Target 16ms (60fps) or 33ms (30fps) between updates

## Use Cases

- **Video backgrounds** - Play video files
- **Live streaming** - Real-time camera feeds
- **Neural rendering** - NeRF, Gaussian Splatting outputs
- **Image sequences** - Animated backgrounds

## Next Steps

- [ImageBackground](02_image_background) - Static image backgrounds
