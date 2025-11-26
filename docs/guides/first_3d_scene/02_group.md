# Group - Grouping Objects

## Overview

`Group` organizes multiple objects together, applying transforms (position, rotation, scale) to all children at once. Essential for managing complex hierarchies and coordinated movement.

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Group, Box, Sphere

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Group(
            Box(position=[0, 0, 0], args=[0.5, 0.5, 0.5], key="box"),
            Sphere(position=[1, 0, 0], args=[0.3], key="sphere"),
            # Transform applies to all children
            position=[0, 1, 0],
            rotation=[0, 0.785, 0],  # 45 degrees
            scale=2.0,
            key="my-group",
        ),
    )

    await session.forever()
```

## Parameters

```python
Group(
    # Children components
    child1,
    child2,
    ...,

    # Group transform
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=1.0,  # or [sx, sy, sz]
    key="unique-id",
)
```

## Transform Hierarchy

Transforms are applied in this order:
1. **Child local transform** - Each child's own position/rotation/scale
2. **Group transform** - Applied to all children together

```python
Group(
    Box(position=[1, 0, 0], key="box"),  # 1 unit right from group origin
    position=[5, 0, 0],  # Group at x=5
    key="group",
)
# Box final position: [6, 0, 0]
```

## Use Cases

### Organized Hierarchies

```python
# Robot arm
Group(
    # Base
    Box(position=[0, 0, 0], key="base"),

    # Upper arm (rotates around base)
    Group(
        Box(position=[0, 1, 0], key="upper-arm"),
        position=[0, 0.5, 0],
        rotation=[0, 0, arm_angle],
        key="arm-group",
    ),

    key="robot",
)
```

### Coordinated Movement

```python
# Moving platform with objects
session.upsert @ Group(
    position=[x, y, z],  # Update group position
    key="platform",
)
# All children move together
```

### Instancing

```python
# Create multiple instances of the same structure
for i in range(5):
    session.add @ Group(
        Box(position=[0, 0, 0], key=f"box-{i}"),
        Sphere(position=[0, 1, 0], key=f"sphere-{i}"),
        position=[i * 2, 0, 0],
        key=f"group-{i}",
    )
```

## Next Steps

- [Pivot](02_pivot) - Custom rotation pivot
- [Center](02_center) - Auto-center objects
