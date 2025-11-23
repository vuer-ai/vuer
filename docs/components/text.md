
# Text

The `Text` component renders 2D text in 3D space using SDF (Signed Distance Field) rendering.
This is ideal for:
- Creating labels and annotations
- Building HUD elements
- Displaying readable text from any distance
- Adding captions to 3D objects

![](figures/text.png)

## Basic Usage

A minimal example that creates 2D text in 3D space:

```python
import asyncio
from vuer import Vuer
from vuer.schemas import DefaultScene, Text, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(session):
    session.set @ DefaultScene(
        Text(
            "Hello World!",
            key="label",
            color="green",
            fontSize=0.15,
            position=[0, 0.5, 0],
        ),
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
| `key` | str | - | Unique identifier for the text |
| `color` | str | `"white"` | Text color (hex or named color) |
| `fontSize` | float | `0.1` | Font size in world units |
| `position` | list | `[0,0,0]` | Text position in world coordinates |
| `rotation` | list | `[0,0,0]` | Text rotation (Euler angles) |
| `scale` | float | `1` | Text scale multiplier |

## Related Components

| Component | Purpose |
|-----------|---------|
| `Text3D` | Extruded 3D text with depth |
| `Billboard` | Wrapper to make text always face camera |

## Learn More

For detailed examples of using `Text`, see:

- [3D Text Tutorial](../examples/visualization/3d_text.md) - Complete text rendering guide
