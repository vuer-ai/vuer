
# Text - 2D Text in 3D Space

## Overview

`Text` renders 2D text labels in 3D space with fixed screen size, always readable regardless of distance.

## Basic Usage

```python
from vuer.schemas import DefaultScene, Text

session.set @ DefaultScene(
    Text(
        "Hello Vuer",
        position=[0, 1, 0],
        color="white",
        fontSize=0.1,
        key="label",
    ),
)
```

## Parameters

```python
Text(
    children="text content",
    position=[x, y, z],
    color="white",
    fontSize=0.1,
    key="unique-id",
)
```

## Examples

See the [3D text example](../../examples/22_3d_text) for more details.

## Next Steps

- [Text3D](02_text3d) - Extruded 3D text
- [Billboard](02_billboard) - Camera-facing text
