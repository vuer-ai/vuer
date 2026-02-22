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
