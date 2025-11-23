<h1 class="full-width" style="font-size: 28px"><code style="font-size: 1.3em; margin-right:-0.4em; background-clip: text; color: transparent; background-image: linear-gradient(to right, rgb(0,140,220), rgb(226,213,79), rgb(210,0,12));">vuer</code>, An Event-Driven, Declarative Visualization Framework for Physical AI
</h1>

<link rel="stylesheet" href="_static/title_resize.css">

Vuer is a light-weight visualization toolkit for interacting with dynamic 3D and robotics data. It is
VR and AR ready, and can be run on mobile devices. To get started, just run:

```shell
pip install 'vuer[all]=={VERSION}'
```

```{admonition} Note for Mac Users
:class: info
If you encounter build issues with `msgpack` on older systems, you may need gcc@11:

  brew install gcc@11

Modern versions of macOS should work with the pre-built wheels.
```

Here is an example that loads a URDF file and displays it in the browser. For a more comprehensive list of examples, please refer to the [examples](examples/01_trimesh) page.

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Urdf

app = Vuer()


@app.spawn(start=True)
async def main(session: VuerSession):
  session.set @ DefaultScene(
    Urdf("assets/urdf/robotiq.urdf"),
  )

  while True:
    await session.sleep(0.1)
```

<iframe src="https://vuer.ai/?background=131416,fff&collapseMenu=true&initCamPos=2.8,2.2,2.5&scene=3gAEqGNoaWxkcmVukt4AB6hjaGlsZHJlbpCjdGFnpFVyZGaja2V5rHBlcnNldmVyYW5jZaNzcmPZRGh0dHBzOi8vZG9jcy52dWVyLmFpL2VuL2xhdGVzdC9fc3RhdGljL3BlcnNldmVyYW5jZS9yb3Zlci9tMjAyMC51cmRmq2pvaW50VmFsdWVz3gAAqHJvdGF0aW9uk8s%2F%2BR64YAAAAAAAqHBvc2l0aW9ukwAAy7%2F4AAAAAAAA3gAHqGNoaWxkcmVukKN0YWekVXJkZqNrZXmvbWFycy1oZWxpY29wdGVyo3NyY9lAaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvcGVyc2V2ZXJhbmNlL21ocy9NSFMudXJkZqtqb2ludFZhbHVlc94AAKhyb3RhdGlvbpPLP%2FkeuGAAAAAAAKhwb3NpdGlvbpMAyz%2FR64UgAAAAyz%2FgAAAAAAAArGh0bWxDaGlsZHJlbpCrcmF3Q2hpbGRyZW6QqmJnQ2hpbGRyZW6Q" width="100%" height="400px" frameborder="0"></iframe>

Vuer is built by researchers at MIT and UCSD in fields including robotics, computer vision, and computer graphics.

- light-weight and performant
- VR and AR ready
- has a strong community support
- Hackable and extensible
- Open source, licensed under MIT

To get a quick overview of what you can do with  <code style="font-size: 1.3em; background-clip: text; color: transparent; background-image: linear-gradient(to right, rgb(0,140,220), rgb(226,213,79), rgb(210,0,12));">vuer</code>, check out the following:

- take a look at the basic tutorial or the tutorial for robotics:
  - [Introduction to Key Vuer Concepts](tutorials/basics)
  - [Tutorial for Roboticists](tutorials/robotics)
- or try to take a look at the example gallery [here](examples/01_trimesh)

For a comprehensive list of visualization components, please refer to
the [API documentation on Components | vuer](https://docs.vuer.ai/en/latest/api/vuer.html).

For a comprehensive list of data types, please refer to the [API documentation on Data Types](https://docs.vuer.ai/en/latest/api/types.html).

<!-- prettier-ignore-start -->

```{eval-rst}
.. toctree::
   :hidden:
   :maxdepth: 1
   :titlesonly:

   Quick Start <quick_start>
   Report Issues <https://github.com/vuer-ai/vuer/issues?q=is:issue+is:closed>
   
.. toctree::
   :maxdepth: 3
   :caption: NEW FEATURES 🔥
   :hidden:

   SplatMesh(sparkjs) <examples/gaussian_splatting/spark.md>
   
.. toctree::
   :maxdepth: 3
   :caption: Tutorials
   :hidden:

   tutorials/basics.md
   tutorials/camera/README.md
   tutorials/physics.md
   Imperative API <tutorials/imperative_api.md>
   Detecting When Assets Have Been Loaded <tutorials/obj_loading.md>
   MuJoCo Interactive Simulator <tutorials/mujoco_interactive_simulator.md>

.. toctree::
   :maxdepth: 3
   :caption: Examples
   :hidden:

   examples/meshes.md
   examples/point_clouds.md
   examples/urdf_go1_stairs.md
   examples/spline_frustum.md
   examples/visualization_utilities.md
   examples/background_environment.md
   examples/pointer.md
   examples/vr_ar_xr.md
   examples/gaussian_splatting.md
   
.. toctree::
   :maxdepth: 3
   :caption: Components
   :hidden:

   Arrow <components/arrow.md>
   Billboard <components/billboard.md>
   Box <components/box.md>
   CameraView <components/camera_views.md>
   CoordsMarker <components/coords_marker.md>
   Frustum <components/frustum.md>
   Gripper <components/gripper.md>
   Hands <components/hands.md>
   ImageBackground <components/image_background.md>
   Line <components/line.md>
   MotionControllers <components/motion_controllers.md>
   Movable <components/movable.md>
   Obj <components/obj.md>
   Plane <components/plane.md>
   Ply <components/ply.md>
   Pcd <components/pcd.md>
   PointCloud <components/pointcloud.md>
   SceneBackground <components/scene_background.md>
   Sphere <components/sphere.md>
   Splat <components/splat.md>
   Text <components/text.md>
   Text3D <components/text3d.md>
   TriMesh <components/trimesh.md>
   Urdf <components/urdf.md>

.. toctree::
   :maxdepth: 3
   :caption: Python API
   :hidden:
   
   vuer <api/vuer.md>
   vuer.frame <api/frame.md>
   vuer.base <api/base.md>
   vuer.types — Type Interafce <api/types.md>
   vuer.events — Event Types <api/events.md>
   vuer.schemas — Components <api/schemas.md>
   vuer.serdes — Serialization <api/serdes.md>
  
```
