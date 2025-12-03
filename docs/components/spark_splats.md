
# SparkSplats

The `SparkSplats` component (Compressed Gaussian Splats) uses the SparkJS format (.spz) for highly compressed Gaussian splats, offering the best performance for web delivery.

<iframe src="https://vuer.ai/?background=131416,fff&collapseMenu=true&scene=https://docs.vuer.ai/en/latest/_static/live_demo/spark/scene.json" width="100%" height="400px" frameborder="0"></iframe>

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
            src="http://localhost:8012/static/splats/butterfly.spz",
            position=[0, 0.2, 0],
            rotation=[0, 0, 3.14],
            scale=0.5,
        ),
        show_helper=False,
        bgChildren=[OrbitControls(key="OrbitControls")],
    )

    await sess.forever()
```


```{admonition} Format Comparison
:class: info
SparkSplats uses the `.spz` format which is significantly smaller than standard `.splat` files:

- **Standard .splat:** 50-200MB
- **Compressed .spz:** 5-20MB (10x smaller)
```

