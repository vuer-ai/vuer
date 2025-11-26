
# Grid - Ground Grid Plane

## Overview

`Grid` displays a ground reference grid for spatial orientation. Included by default in `DefaultScene`.

## Basic Usage

```python
from vuer.schemas import Scene, Grid

session.set @ Scene(
    # Your objects here
    
    rawChildren=[Grid(key="grid")],
)
```

Or use the `grid` parameter:

```python
session.set @ Scene(
    # Your objects
    
    grid=True,  # Shorthand for adding Grid
)
```

## Parameters

```python
Grid(
    key="unique-id",
)
```

The grid appears on the XZ plane (horizontal) with Y-up coordinate system.

## Customization

For custom grid appearance, create your own using `Plane` or `Line` components.

## Next Steps

- [CoordsMarker](02_coords_marker) - Coordinate frame axes
- [Arrow](02_arrow) - Directional indicators
