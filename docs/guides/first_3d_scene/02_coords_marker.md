
# CoordsMarker - Coordinate Frame Visualization

## Overview

`CoordsMarker` displays RGB XYZ coordinate axes for debugging object positions and orientations. Red=X, Green=Y, Blue=Z.

## Basic Usage

```python
from vuer.schemas import DefaultScene, CoordsMarker

session.set @ DefaultScene(
    CoordsMarker(
        position=[0, 0, 0],
        scale=0.5,
        key="origin",
    ),
)
```

## Parameters

```python
CoordsMarker(
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=1.0,  # Size of axes
    key="unique-id",
)
```

## Multiple Markers

Useful for visualizing multiple coordinate frames:

```python
from vuer.schemas import DefaultScene, CoordsMarker, Box

session.set @ DefaultScene(
    # Object
    Box(args=[0.3, 0.3, 0.3], position=[1, 0.5, 0], key="box"),
    
    # World origin
    CoordsMarker(position=[0, 0, 0], scale=1.0, key="world"),
    
    # Object frame
    CoordsMarker(position=[1, 0.5, 0], scale=0.3, key="object"),
)
```

## Axis Convention

- **Red axis**: X (right)
- **Green axis**: Y (up)
- **Blue axis**: Z (forward)

Standard right-handed coordinate system.

## With Movable

Show coordinate frame on movable objects:

```python
Movable(
    Box(args=[0.3, 0.3, 0.3], color="gray", key="box"),
    position=[0, 1, 0],
    showFrame=True,  # Built-in coordinate frame
    key="movable",
)
```

## Next Steps

- [Arrow](02_arrow) - Directional indicators
- [Grid](02_grid) - Ground reference
