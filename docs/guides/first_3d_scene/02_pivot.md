# Pivot - Custom Rotation Pivot

## Overview

`Pivot` changes the rotation center for objects, allowing rotation around custom points instead of the object's origin.

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Pivot, Box

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Pivot(
            Box(position=[2, 0, 0], args=[1, 1, 1], key="box"),
            # Pivot point at origin
            position=[0, 0, 0],
            # Rotate around pivot
            rotation=[0, angle, 0],
            key="pivot",
        ),
    )

    # Box orbits around origin instead of spinning in place
    await session.forever()
```

## Parameters

```python
Pivot(
    # Child component
    child,

    position=[x, y, z],  # Pivot point location
    rotation=[rx, ry, rz],  # Rotation around pivot
    key="unique-id",
)
```

## How It Works

Without Pivot:
```python
# Box rotates around its own center
Box(position=[2, 0, 0], rotation=[0, angle, 0], key="box")
```

With Pivot:
```python
# Box orbits around pivot point [0, 0, 0]
Pivot(
    Box(position=[2, 0, 0], key="box"),
    position=[0, 0, 0],
    rotation=[0, angle, 0],
    key="pivot",
)
```

## Use Cases

### Door Hinge

```python
# Door rotates around edge instead of center
Pivot(
    Box(position=[0.5, 0, 0], args=[1, 2, 0.1], key="door"),
    position=[0, 0, 0],  # Hinge at edge
    rotation=[0, door_angle, 0],
    key="door-hinge",
)
```

### Clock Hand

```python
# Hour hand rotates around clock center
Pivot(
    Box(position=[0, 0.5, 0], args=[0.1, 1, 0.05], key="hand"),
    position=[0, 0, 0],  # Clock center
    rotation=[0, 0, hour_angle],
    key="hour-hand",
)
```

### Planetary Motion

```python
# Planet orbits around sun
Pivot(
    Sphere(position=[5, 0, 0], args=[0.5], key="earth"),
    position=[0, 0, 0],  # Sun position
    rotation=[0, orbit_angle, 0],
    key="earth-orbit",
)
```

## Animation Example

```python
import numpy as np

@app.spawn(start=True)
async def main(session: VuerSession):
    angle = 0
    while True:
        angle += 0.01

        session.upsert @ Pivot(
            Box(position=[2, 0, 0], key="box"),
            rotation=[0, angle, 0],
            key="pivot",
        )

        await session.sleep(0.016)
```

## Next Steps

- [Group](02_group) - Group multiple objects
- [Center](02_center) - Auto-center objects
