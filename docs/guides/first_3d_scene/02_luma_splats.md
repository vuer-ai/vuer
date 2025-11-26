# LumaSplats - Luma AI Gaussian Splats

## Overview

`LumaSplats` is optimized for loading Gaussian splats exported from Luma AI. It provides better performance and loading times compared to standard Splat format.

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, LumaSplats

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        LumaSplats(
            src="https://lumalabs.ai/capture/your-capture-id",
            position=[0, 0, 0],
            scale=1.0,
            key="luma",
        ),
    )

    await session.forever()
```

## Parameters

```python
LumaSplats(
    src="url/to/luma/export",  # Luma AI URL or exported file
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=1.0,
    key="unique-id",
)
```

## Luma AI Integration

1. Create a capture on [Luma AI](https://lumalabs.ai/)
2. Export as Gaussian Splat
3. Use the provided URL directly in `src`

## Advantages

- **Faster loading** - Optimized format
- **Better compression** - Smaller file sizes
- **Direct integration** - Use Luma URLs directly

## Next Steps

- [Splat](02_splat) - Standard splat format
- [SparkSplats](02_spark_splats) - Compressed format
