
# CameraView

The `CameraView` component creates a virtual camera in your scene that can render
images from arbitrary viewpoints. This is essential for:
- Generating synthetic training data for computer vision
- Creating observation inputs for robot learning
- Capturing screenshots and videos of your scene
- Visualizing camera frustums in 3D

```{admonition} Huge Caveat
:class: info
if you use more than 31 virtual cameras, it breaks your mac.
because it overflows the max number of webGL context, and it shuts your computer down!
```

## Basic Usage

A minimal example that creates a virtual camera and displays its frustum:

```python
import numpy as np
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, CameraView, Sphere, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(sess: VuerSession):
    sess.set @ DefaultScene(
        Sphere(
            key="sphere",
            args=[0.2, 32, 32],
            position=[0, 0, 0.2],
            material={"color": "red"},
        ),
        rawChildren=[
            CameraView(
                key="ego",
                fov=20,
                far=3,
                width=320,
                height=240,
                position=[1.0, 1.0, 0.5],
                rotation=[-0.3 * np.pi, 0.25 * np.pi, 0],
                showFrustum=True,
                monitor=False,
            ),
        ],
        bgChildren=[
            OrbitControls(key="OrbitControls")
        ],
    )

    await sess.forever()
```
