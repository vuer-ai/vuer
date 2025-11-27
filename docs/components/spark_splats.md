
# SparkSplats - Compressed Gaussian Splats

The `SparkSplats` component uses the SparkJS format (.spz) for highly compressed Gaussian splats, offering the best performance for web delivery.

This is ideal for:
- Web applications requiring fast loading
- Mobile VR/AR with bandwidth constraints
- Loading multiple splat scenes efficiently
- Optimized file sizes (10x smaller than standard splats)

## Basic Example

This example shows how to load a compressed Gaussian splat using the .spz format.
SparkSplats provides significantly smaller file sizes for faster web delivery.

```python
import os
from vuer import Vuer
from vuer.schemas import DefaultScene, SparkSplats, OrbitControls

app = Vuer(static_root=os.getcwd() + "/../../../assets")


@app.spawn(start=True)
async def main(sess):
    sess.set @ DefaultScene(
        SparkSplats(
            key="spark-splats",
            src="http://localhost:8012/static/butterfly.spz",
            position=[0, 0.2, 0],
            rotation=[0, 0, 3.14],
            scale=0.5,
        ),
        bgChildren=[OrbitControls(key="OrbitControls")],
    )

    await sess.forever()
```

## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the splat |
| `src` | str | - | URL to SparkJS .spz format file |
| `position` | list | `[0,0,0]` | Model position in world coordinates |
| `rotation` | list | `[0,0,0]` | Model rotation (Euler angles) |
| `scale` | float/list | `1` | Uniform or per-axis scale |

## Format Comparison

SparkSplats uses the `.spz` format which is significantly smaller than standard `.splat` files:

- **Standard .splat:** 50-200MB
- **Compressed .spz:** 5-20MB (10x smaller)

## When to Use

**Web applications:** Faster loading times for better user experience

**Mobile VR/AR:** Lower bandwidth requirements for mobile devices

**Multiple splats:** Load several scenes efficiently without overwhelming bandwidth

**Limited bandwidth:** Ideal for users with slower connections

## Related Components

| Component | Purpose |
|-----------|---------|
| `Splat` | Standard Gaussian splat format |
| `LumaSplats` | Optimized for Luma AI captures |
