
# CoordsMarker

The `CoordsMarker` component displays 3D coordinate axis markers.
This is ideal for:
- Visualizing coordinate frames and orientations
- Debugging transformations and poses
- Showing robot joint frames
- Creating reference markers in scenes

![](figures/coords_marker.png)

## Basic Usage

A minimal example that creates coordinate markers:

```python
import asyncio
from vuer import Vuer
from vuer.schemas import DefaultScene, CoordsMarker, OrbitControls

app = Vuer()

n = 10
N = 1000

@app.spawn(start=True)
async def main(session):
    markers = [
        CoordsMarker(
            position=[i % n, (i // n) % n, (i // n ** 2) % n],
            scale=0.25,
        )
        for i in range(N)
    ]

    session.set @ DefaultScene(
        *markers,
        show_helper=False,
        bgChildren=[
            OrbitControls(key="OrbitControls")
        ],
    )

    while True:
        await asyncio.sleep(1.0)
```

## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the marker |
| `position` | list | `[0,0,0]` | Marker position in world coordinates |
| `rotation` | list | `[0,0,0]` | Marker rotation (Euler angles) |
| `matrix` | list | - | 4x4 transformation matrix (16 numbers). Overrides position and rotation |
| `scale` | float | `1.0` | Overall marker size |
| `headScale` | float | `1.0` | Scale factor for the arrow heads |
| `lod` | int | - | Level of detail - number of segments for the cone and stem |

