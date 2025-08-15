<h1 class="full-width" style="font-size: 49px">Welcome to <code style="font-size: 1.3em; background-clip: text; color: transparent; background-image: linear-gradient(to right, rgb(0,140,220), rgb(226,213,79), rgb(210,0,12));">vuer</code><span style="font-size: 0.3em; margin-left: -0.5em; margin-right:-0.4em;">｣</span></h1>

<link rel="stylesheet" href="_static/title_resize.css">

Vuer is a light-weight visualization toolkit for interacting with dynamic 3D and robotics data. It is
VR and AR ready, and can be run on mobile devices. To get started, just run:

```shell
pip install 'vuer[all]=={VERSION}'
```

```{admonition} 
:class: info
On Macs, `msgpack` requires gcc@11.

  brew install gcc@11
  
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
  - [Vuer Basics](tutorials/basics)
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
   CHANGE LOG <CHANGE_LOG.md>
   
.. toctree::
   :maxdepth: 3
   :caption: NEW FEATURES 🔥
   :hidden:
   
   Scene Generation (OpenAI Sora) <gaussian_splatting/openai_sora.md>
   Gaussian Splatting <gaussian_splatting/09_gaussian_splats.md>
   Gaussian Splatting (VR) <gaussian_splatting/10_gaussian_splats_vr.md>
   SplatMesh(sparkjs) <examples/23_spark.md>
   
.. toctree::
   :maxdepth: 3
   :caption: Tutorials
   :hidden:
   
   tutorials/basics.md
   tutorials/robotics.md
   tutorials/camera/README.md
   tutorials/physics.md
   
.. toctree::
   :maxdepth: 3
   :caption: Examples
   :hidden:
   
   Mesh <examples/01_trimesh.md>
   Programmatic PointCloud <examples/02_pointcloud.md>
   ┣→ pcd files <examples/02_pointcloud_pcd.md>
   ┗→ ply files <examples/02_pointcloud_ply.md>
   Simpe Plane <examples/13_plane_primitive.md>
   Obj Files <examples/14_obj.md>
   Frustum and Spline <examples/15_spline_frustum.md>
   URDF <examples/03_urdf.md>
   URDF (local) <examples/03_urdf_local.md>
   Imperative API <examples/04_imperative_api.md>
   Virtual Camera <examples/05_collecting_render.md>
   Render Images <examples/05_collecting_render_procedural.md>
   Animation <examples/05_pointcloud_animation.md>
   Upsert <examples/05_pointcloud_animation_upsert.md>
   Depth Texture <examples/06_depth_texture.md>
   Background Image <examples/07_background_image.md>
   Heads Up Display <examples/07b_vr_hud.md>
   Depth Image <examples/08_experimental_depth_image.md>
   Coordinate Markers <examples/11_coordinates_markers.md>
   Arrows <examples/16_arrows.md>
   Virtual Camera <examples/12_camera.md>
   360 Image <examples/17_sky_ball.md>
   Movable Handles <examples/18_movable.md>
   Hand Tracking <examples/19_hand_tracking.md>
   Body Tracking <examples/25_body_tracking.md>
   Quest 3 Controllers <examples/20_motion_controllers.md>
   3D Movie <examples/21_3D_movie.md>
   2D/3D Text <examples/22_3d_text.md>
   Raycasted 3D Pointer <examples/21_pointer_example>
   Mujoco Interactive Simulator <examples/24_mujoco_interactive_simulator>
   
.. toctree::
   :maxdepth: 3
   :caption: Textuers and Meshes
   :hidden:
   
   Sphere Scene <examples/texture_meshes/ball_scene.md>
   Stairs Scene <examples/texture_meshes/stairs_scene.md>
   Adding UV and Texture Map to Trimesh <examples/texture_meshes/textured_trimesh.md>

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
