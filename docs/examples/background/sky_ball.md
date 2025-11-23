
# Showing 360 Views via A Textured Sphere

This example demonstrates how to create a 360-degree panoramic view using an
equirectangular image mapped to a sphere as a texture.

![equirectangular image](figures/farm_house.jpg)

The example uses a `Sphere` component with `materialType="standard"` and applies
the equirectangular image as a texture map. The sphere is configured with `side: 1`
to render the inside of the sphere, allowing the viewer to see the panorama from
within.

Place the image file (e.g., `images/farm_house.jpg`) in the folder specified by
the `static_root` argument of the `Vuer` class. The Vuer frontend will load the
texture from `http://localhost:8012/static/images/farm_house.jpg`.

Here is the expected result:
![sky ball result](figures/17_sky_ball.png)

## Code Example

```python
from pathlib import Path
from asyncio import sleep
import numpy as np

from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Sphere, OrbitControls

assets_folder = Path(__file__).parent / "../../../assets"
test_file = "images/farm_house.jpg"

app = Vuer(static_root=assets_folder)

n = 10
N = 1000

sphere = Sphere(
    key="ball",
    args=[1, 32, 32],
    materialType="standard",
    material={"map": "http://localhost:8012/static/" + test_file, "side": 1},
    position=[0, 0, 0],
    rotation=[0.5 * np.pi, 0, 0],
)

@app.spawn(start=True)
async def main(proxy: VuerSession):
    proxy.set @ DefaultScene(
        sphere,
        bgChildren=[OrbitControls(key="OrbitControls")],
    )

    # keep the main session alive.
    while True:
        await sleep(10)
```
