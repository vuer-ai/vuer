
# Billboard - Camera-Facing Content

## Overview

`Billboard` wraps content to always face the camera, perfect for labels and indicators that should remain readable.

## Basic Usage

```python
from vuer.schemas import DefaultScene, Billboard, Text

session.set @ DefaultScene(
    Billboard(
        Text("Always Facing You", color="blue", fontSize=0.05, key="text"),
        position=[0, 1, 0],
        follow=True,
        key="billboard",
    ),
)
```

## Parameters

```python
Billboard(
    # Child component(s)
    ...,
    
    position=[x, y, z],
    follow=True,  # Always face camera
    key="unique-id",
)
```

## Next Steps

- [Text](02_text) - 2D text
- [Text3D](02_text3d) - 3D extruded text
