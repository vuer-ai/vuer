# Splat - 3D Gaussian Splatting

## Overview

`Splat` renders 3D Gaussian splats, a novel neural rendering technique that represents scenes as a collection of 3D Gaussians. Perfect for photorealistic reconstructions and neural radiance fields.

![3D Gaussian Splat](../../gaussian_splatting/figures/garden_table_4.png)

## Basic Usage

From the [gaussian splat example](../../gaussian_splatting/09_gaussian_splats):

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Splat
import numpy as np

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Splat(
            src="http://localhost:8012/static/garden_table.splat",
            scale=0.5,
            position=[0, 1.32, 0],
            rotation=[-40 / 180 * np.pi, -11 / 180 * np.pi, -5.6 / 180 * np.pi],
            key="splat",
        ),
        showGrid=False,
    )

    await session.forever()
```

## Parameters

```python
Splat(
    src="url/to/model.splat",  # Standard .splat format
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=1.0,
    key="unique-id",
)
```

## Supported Formats

- `.splat` - Standard 3D Gaussian Splatting format
- Polycam exports
- Luma AI exports (use LumaSplats for optimized loading)

## Where to Get Splat Files

- [Polycam](https://poly.cam/) - Capture with your phone
- [Luma AI](https://lumalabs.ai/) - Generate from videos
- [Hugging Face](https://huggingface.co/cakewalk/splat-data) - Pre-made datasets

## Tips

- Splats can be quite large (50-200MB), optimize for web delivery
- Use appropriate scale and rotation for best results
- Works in VR/AR for immersive viewing

## Next Steps

- [LumaSplats](02_luma_splats) - Luma AI optimized format
- [SparkSplats](02_spark_splats) - Compressed format
