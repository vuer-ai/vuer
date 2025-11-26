
# Arrow - 3D Arrow Indicator

## Overview

`Arrow` displays a 3D arrow for indicating directions, vectors, or forces.

## Basic Usage

```python
from vuer.schemas import DefaultScene, Arrow

session.set @ DefaultScene(
    Arrow(
        position=[0, 0.5, 0],
        rotation=[0, 0, 1.57],  # Point right
        color="red",
        scale=0.3,
        key="arrow",
    ),
)
```

## Parameters

```python
Arrow(
    position=[x, y, z],
    rotation=[rx, ry, rz],  # Control direction
    scale=1.0,              # Arrow size
    color="red",
    key="unique-id",
)
```

## Direction Examples

```python
# Up
Arrow(rotation=[0, 0, 0], key="up")

# Right
Arrow(rotation=[0, 0, 1.57], key="right")

# Forward
Arrow(rotation=[0, -1.57, 0], key="forward")

# Down
Arrow(rotation=[3.14, 0, 0], key="down")
```

## Visualizing Forces

```python
import numpy as np

# Force vector
force = np.array([1.0, 2.0, 0.5])
magnitude = np.linalg.norm(force)
direction = force / magnitude

# Convert to rotation
# (simplified - full implementation needs proper vector to rotation conversion)
Arrow(
    position=[0, 0, 0],
    scale=magnitude * 0.1,
    color="orange",
    key="force",
)
```

## Multiple Arrows

```python
from vuer.schemas import DefaultScene, Arrow

session.set @ DefaultScene(
    # X axis
    Arrow(position=[0, 0, 0], rotation=[0, 0, 1.57], color="red", scale=0.5, key="x"),
    
    # Y axis  
    Arrow(position=[0, 0, 0], rotation=[0, 0, 0], color="green", scale=0.5, key="y"),
    
    # Z axis
    Arrow(position=[0, 0, 0], rotation=[0, -1.57, 0], color="blue", scale=0.5, key="z"),
)
```

## Next Steps

- [CoordsMarker](02_coords_marker) - Full coordinate frames
- [Grid](02_grid) - Ground reference
