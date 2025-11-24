
# Text3D - Extruded 3D Text

## Overview

`Text3D` renders extruded 3D text with depth and beveled edges.

## Basic Usage

```python
from vuer.schemas import DefaultScene, Text3D

session.set @ DefaultScene(
    Text3D(
        "Vuer",
        font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
        size=0.5,
        bevelEnabled=True,
        bevelSize=0.02,
        bevelThickness=0.01,
        color="red",
        position=[0, 1, 0],
        key="3d-text",
    ),
)
```

## Parameters

```python
Text3D(
    children="text",
    font="url/to/font.json",  # Three.js font
    size=1.0,
    bevelEnabled=True,
    bevelSize=0.05,
    bevelThickness=0.02,
    color="white",
    position=[x, y, z],
    key="unique-id",
)
```

## Next Steps

- [Text](02_text) - 2D text labels
- [Billboard](02_billboard) - Camera-facing content
