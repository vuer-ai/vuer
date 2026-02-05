
# Bounding Box

The `BoundingBox` component renders 3D bounding boxes with customizable edge and wall opacity.
This is ideal for:
- Visualizing spatial bounds and regions of interest
- Object detection visualization
- Collision box debugging

## Basic Usage

A minimal example that creates a bounding box:

```python
import asyncio

from vuer import Vuer, VuerSession
from vuer.schemas import BoundingBox

vuer = Vuer(killport=True)


@vuer.spawn(start=True)
async def main(sess: VuerSession):
  sess.upsert @ BoundingBox(
    key="bounding-box",
    color="red",
  )

  await sess.forever()
```

```{admonition} Performance Tip
:class: tip
When rendering multiple `BoundingBox` instances, wrap them in a `BoundingBoxProvider`
for better performance. The provider enables instanced rendering with shared shader
material and geometry.
```

## Insane Performance With BBProvider

It is not uncommon for us to have a large number of bounding boxes in
a scene. To avoid slowing down the rendering, we offer an instancing
provider, that can accomodate up to tens of thousands of bouding boxes
while maintaining 120 fps refresh rate.

- [ ] **todo:** use portal to share the default provider in self-provider
    set up. This is done for the `DepthPointCloud` component, but not here
    afaik.

```python
import asyncio

from vuer import Vuer, VuerSession
from vuer.schemas import BoundingBox, BoundingBoxProvider

vuer = Vuer(killport=True)


@vuer.spawn(start=True)
async def main(sess: VuerSession):
  sess.upsert @ BoundingBoxProvider(
    key="provider",
    children=[
      BoundingBox(key="box-0", color="red", position=[0, 0, 0]),
      BoundingBox(key="box-1", color="green", position=[2, 0, 0]),
      BoundingBox(key="box-2", color="blue", position=[4, 0, 0]),
    ]
  )

  await sess.forever()
```

## BoundingBox Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the bounding box |
| `position` | list | [0, 0, 0] | Position in 3D space [x, y, z] |
| `rotation` | list | [0, 0, 0] | Rotation in Euler angles [x, y, z] |
| `scale` | list | [1, 1, 1] | Scale factors [x, y, z] |
| `quaternion` | list | - | Rotation as quaternion [x, y, z, w] |
| `matrix` | list | - | 4x4 transformation matrix (16 values) |
| `size` | list | [1, 1, 1] | Size of the box [width, height, depth] |
| `min` | list | - | Minimum corner [x, y, z] (alternative to size) |
| `max` | list | - | Maximum corner [x, y, z] (alternative to size) |
| `color` | str/int | "#00ff00" | Color of edges and faces (hex, rgb, rgba, or name) |
| `edgeOpacity` | float | 0.9 | Opacity of the edges (0-1) |
| `wallOpacity` | float | 0.08 | Opacity of the walls/faces (0-1) |
| `edgeWidth` | float | 0.02 | Width of edges relative to box size (0-0.5) |

## BoundingBoxProvider Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the provider |
| `edgeWidth` | float | 0.05 | Width of box edges |
| `maxInstances` | int | 10000 | Maximum number of instances |
| `children` | list | [] | Child `BoundingBox` elements |

## Sizing Options

You can define the box size in two ways:

### Using `size`

```python
BoundingBox(
  key="box",
  size=[2, 1, 3],  # width=2, height=1, depth=3
  position=[0, 0.5, 0],  # centered at this position
)
```

### Using `min` and `max`

```python
BoundingBox(
  key="box",
  min=[-1, 0, -1.5],
  max=[1, 1, 1.5],
)
```
