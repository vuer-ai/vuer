
# Grid - Ground Grid Plane

The `Grid` component displays a ground reference grid for spatial orientation. It's included by default in `DefaultScene` to help visualize the ground plane and provide spatial reference.

This is ideal for:
- Providing ground plane reference
- Spatial orientation in 3D scenes
- Debugging object placement
- Visualizing scale and distance

## Basic Usage

A minimal example that creates a scene with a grid:

```python
from vuer import Vuer
from vuer.schemas import Scene, Grid, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(sess):
    sess.set @ Scene(
        # Your objects here

        rawChildren=[Grid(key="grid")],
        grid=True,  # Shorthand for adding Grid
        bgChildren=[
            OrbitControls(key="OrbitControls")
        ],
    )

    await sess.forever()
```
