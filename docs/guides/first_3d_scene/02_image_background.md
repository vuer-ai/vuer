# ImageBackground - Static Background Image

## Overview

`ImageBackground` displays a static background image, perfect for skyboxes, environment maps, or simple backdrop images.

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, ImageBackground

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        rawChildren=[
            ImageBackground(
                src="http://localhost:8012/static/background.jpg",
                key="bg",
            ),
        ],
    )

    await session.forever()
```

## Parameters

```python
ImageBackground(
    src="url/to/image.jpg",  # Image URL
    key="unique-id",
)
```

## Supported Formats

- **JPEG** - Fast loading, good compression
- **PNG** - Transparency support
- **WebP** - Modern format, better compression

## Use Cases

- **Static skyboxes** - Environment backgrounds
- **Simple backdrops** - Solid or gradient images
- **Prototyping** - Quick scene setup

## Comparison

| Feature | ImageBackground | SceneBackground |
|---------|----------------|-----------------|
| **Update rate** | Static | Dynamic (30-60fps) |
| **Use case** | Simple backdrop | Video/streaming |
| **Performance** | Very fast | Moderate |
| **Format** | URL | Numpy array |

## Next Steps

- [SceneBackground](02_scene_background) - Dynamic backgrounds
