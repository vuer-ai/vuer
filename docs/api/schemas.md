# Component Library<br/>`vuer.schemas`

`vuer.schema` contains the schemas for the various components of the Vuer system. These schemas are used to validate the data that is passed
to the various components of the system.

For detailed view of how these components are implemented, please refer to the typescript source code
at [https://docs.vuer.ai/en/latest/api/schemas.html](https://docs.vuer.ai/en/latest/api/schemas.html).

**Example Usage:**

```python
from vuer import Vuer
from vuer.schemas import DefaultScene, Sphere

vuer = Vuer()
vuer.set @ DefaultScene(up=[0, 1, 0])
vuer.upsert @ Sphere(args=[0.1, 20, 20], position=[0, 0.1, 0], key="sphere")
```

## HTML Components

```{eval-rst}
.. automodule:: vuer.schemas.html_components
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__, Coroutine, CancelledError, partial, Path, BytesIO
```

## 3D Scene Components

Import every scene component from `vuer.schemas` (or `vuer.schemas.scene_components`).
Since 0.2.0 the classes are defined in the private `vuer.schemas._scene` modules below;
the import paths did not change.

### Scene root

```{eval-rst}
.. automodule:: vuer.schemas._scene.root
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__
```

### Geometry

```{eval-rst}
.. automodule:: vuer.schemas._scene.geometry
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__
```

### Splats and point clouds

```{eval-rst}
.. automodule:: vuer.schemas._scene.splats
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__
```

### Images, video and text

```{eval-rst}
.. automodule:: vuer.schemas._scene.media
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__
```

### Lights

```{eval-rst}
.. automodule:: vuer.schemas._scene.lights
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__
```

### Cameras and controls

```{eval-rst}
.. automodule:: vuer.schemas._scene.controls
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__
```

### WebXR

```{eval-rst}
.. automodule:: vuer.schemas._scene.xr
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__
```

### Model loaders

```{eval-rst}
.. automodule:: vuer.schemas._scene.models
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__
```

### Animation

```{eval-rst}
.. automodule:: vuer.schemas._scene.animation
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__
```

### Robots and camera frustums

```{eval-rst}
.. automodule:: vuer.schemas.scene_components
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__, Coroutine, CancelledError, partial, Path
```

## Drei Components

```{eval-rst}
.. automodule:: vuer.schemas.drei_components
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__, Coroutine, CancelledError, partial, Path
```

##  Physics Components

```{eval-rst}
.. automodule:: vuer.schemas.physics_components
   :members:
   :undoc-members:
   :show-inheritance:
   :no-imported-members:
   :exclude-members: __init__, Coroutine, CancelledError, partial, Path
```
