
# Sphere

The `Sphere` component creates spherical 3D primitives.
This is ideal for:
- Creating simple 3D objects
- Building debug visualizations
- Representing point markers
- Creating sky domes

## Basic Usage

A minimal example that creates a sphere:

```python
import asyncio
from vuer import Vuer
from vuer.schemas import DefaultScene, Sphere, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(session):
    session.set @ DefaultScene(
        Sphere(
            key="sphere",
            args=[0.5, 32, 32],  # radius, widthSegments, heightSegments
            position=[0, 0.5, 0],
            material={"color": "red"},
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
| `key` | str | - | Unique identifier for the sphere |
| `args` | list | `[1, 32, 32]` | [radius, widthSegments, heightSegments] |
| `position` | list | `[0,0,0]` | Sphere center position |
| `rotation` | list | `[0,0,0]` | Sphere rotation |
| `scale` | float/list | `1` | Sphere scale |
| `material` | dict | - | Material properties (color, etc.) |

## Related Components

| Component | Purpose |
|-----------|---------|
| `Box` | Box primitive |
| `Plane` | Plane primitive |

## Learn More

For detailed examples of using `Sphere`, see:

- [Textured Sphere](../examples/meshes/textured_sphere.md) - Adding textures to spheres
- [Sky Ball](../examples/background/sky_ball.md) - Creating sky domes
