
# Urdf

The `Urdf` component loads and displays URDF (Unified Robot Description Format) robot models.
This is essential for:
- Visualizing robot configurations
- Creating interactive robot simulations
- Displaying joint positions in real-time
- Building robot teleoperation interfaces

## Loading URDF from URL

![](figures/urdf_url.png)

A minimal example that loads a URDF robot model directly from a URL:

```python
from vuer import Vuer
from vuer.schemas import DefaultScene, Urdf, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(sess):
    sess.set @ DefaultScene(
Urdf(src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf"),
        up=[0, 0, -1],  # Z-down coordinate system
        bgChildren=[OrbitControls(key="OrbitControls")]
    )

    await sess.forever()
```
