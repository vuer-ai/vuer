# Center - Auto-Center Objects

## Overview

`Center` automatically centers its child objects at the origin, calculating the bounding box and adjusting position accordingly. Useful for imported models with off-center geometry.

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Center, Glb

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Center(
            Glb(src="http://localhost:8012/static/robot.glb", key="robot"),
            # Robot will be centered at origin
            key="centered",
        ),
    )

    await session.forever()
```

## Parameters

```python
Center(
    # Child component(s)
    child,

    position=[x, y, z],  # Position after centering
    key="unique-id",
)
```

## How It Works

1. **Calculate bounding box** - Find min/max extents of all geometry
2. **Compute center** - Calculate center point of bounding box
3. **Apply offset** - Translate object so center aligns with origin

## Use Cases

### Imported Models

```python
# Model exported with off-center origin
Glb(src="model.glb", key="model")  # Origin at [5, 2, -3]

# Automatically centered
Center(
    Glb(src="model.glb", key="model"),
    key="centered",
)  # Origin at [0, 0, 0]
```

### Consistent Positioning

```python
# Center different models for comparison
Center(
    Glb(src="robot_a.glb", key="robot-a"),
    position=[-2, 0, 0],
    key="centered-a",
)

Center(
    Glb(src="robot_b.glb", key="robot-b"),
    position=[2, 0, 0],
    key="centered-b",
)
```

### Rotation Around Center

```python
# Ensure rotation happens around visual center
Center(
    Glb(src="asymmetric.glb", key="model"),
    rotation=[0, angle, 0],  # Rotates around centered origin
    key="centered",
)
```

## When to Use

**Use Center when:**
- Importing models from various sources
- Models have inconsistent origin points
- Need to rotate around visual center
- Comparing multiple models side-by-side

**Don't use Center when:**
- Object origin is intentional (e.g., door hinge)
- Performance is critical (adds computation)
- Origin must stay at specific point

## Next Steps

- [Group](02_group) - Group multiple objects
- [Pivot](02_pivot) - Custom rotation pivot
