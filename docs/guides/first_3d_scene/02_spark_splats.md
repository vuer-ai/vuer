# SparkSplats - Compressed Gaussian Splats

## Overview

`SparkSplats` uses the SparkJS format (.spz) for highly compressed Gaussian splats, offering the best performance for web delivery.

From the [spark splats example](../../examples/23_spark):

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, SparkSplats

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.upsert @ SparkSplats(
        key="spark-splats",
        src="http://localhost:8012/static/butterfly.spz",
        position=[0, 0.2, 0],
        rotation=[0, 0, 3.14],
        scale=0.5,
    )

    await session.forever()
```

## Parameters

```python
SparkSplats(
    src="url/to/model.spz",  # SparkJS .spz format
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=1.0,
    key="unique-id",
)
```

## Format Conversion

SparkSplats uses the `.spz` format which is significantly smaller than standard `.splat` files:

- **Standard .splat**: 50-200MB
- **Compressed .spz**: 5-20MB (10x smaller)

## When to Use

- **Web applications** - Faster loading times
- **Mobile VR/AR** - Lower bandwidth requirements
- **Multiple splats** - Load several scenes efficiently

## Next Steps

- [Splat](02_splat) - Standard format
- [LumaSplats](02_luma_splats) - Luma AI format
