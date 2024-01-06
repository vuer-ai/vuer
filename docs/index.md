<h1 class="full-width" style="font-size: 49px">Welcome to <code style="font-size: 1.3em; background-clip: text; color: transparent; background-image: linear-gradient(to right, rgb(0,140,220), rgb(226,213,79), rgb(210,0,12));">vuer</code><span style="font-size: 0.3em; margin-left: -0.5em; margin-right:-0.4em;">｣</span></h1>

<link rel="stylesheet" href="_static/title_resize.css">

Vuer is a light-weight visualization toolkit for interacting with dynamic 3D and robotics data. It is
VR and AR ready, and can be run on mobile devices. To get started, just run:

```shell
pip install vuer=={VERSION}
```

Here is an example that loads a URDF file and displays it in the browser. For a more comprehensive list of examples, please refer to the [examples](examples/01_trimesh) page.

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Urdf

app = Vuer()


@app.spawn(start=True)
async def main(session: VuerSession):
    app.set @ DefaultScene(
        Urdf("assets/urdf/robotiq.urdf"),
    )

    while True:
        await session.sleep(0.1)
```

<iframe src="https://vuer.ai?collapseMenu=True&background=131416,fff&initCamPos=2.8,2.2,2.5&ws=ws%3A%2F%2Flocalhost%3A8012&scene=3gAJqGNoaWxkcmVukd4ABKhjaGlsZHJlbpHeAAaoY2hpbGRyZW6Qo3RhZ6RVcmRmo2tleaExo3NyY9lSaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25hc2EtanBsL20yMDIwLXVyZGYtbW9kZWxzL21haW4vcm92ZXIvbTIwMjAudXJkZqtqb2ludFZhbHVlc94AAKhyb3RhdGlvbpPLQAkeuGAAAAAAAKN0YWenTW92YWJsZaNrZXmhMqhwb3NpdGlvbpMAAMs%2FwzMzQAAAAKN0YWelU2NlbmWja2V5oTOidXCTAAABpGdyaWTDqHNob3dMZXZhwqtyYXdDaGlsZHJlbpLeAASoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5tWRlZmF1bHRfYW1iaWVudF9saWdodKlpbnRlbnNpdHkB3gAFqGNoaWxkcmVukKN0YWewRGlyZWN0aW9uYWxMaWdodKNrZXm5ZGVmYXVsdF9kaXJlY3Rpb25hbF9saWdodKlpbnRlbnNpdHkBpmhlbHBlcsOsaHRtbENoaWxkcmVukLJiYWNrZ3JvdW5kQ2hpbGRyZW6Q" width="100%" height="400px" frameborder="0"></iframe>

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
the [API documentation on Components](https://docs.vuer.ai/en/latest/api).

For a comprehensive list of data types, please refer to the [API documentation on Data Types](https://docs.vuer.ai/en/latest/api).


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
   
   Gaussian Splatting <gaussian_splatting/09_gaussian_splats.md>
   Gaussian Splatting (VR) <gaussian_splatting/10_gaussian_splats_vr.md>
   
.. toctree::
   :maxdepth: 3
   :caption: Tutorials
   :hidden:
   
   tutorials/basics.md
   tutorials/robotics.md
   
.. toctree::
   :maxdepth: 3
   :caption: Examples
   :hidden:
   
   Mesh <examples/01_trimesh.md>
   Point Cloud <examples/02_pointcloud.md>
   URDF <examples/03_urdf.md>
   URDF (local) <examples/03_urdf_local.md>
   Imperative API <examples/04_imperative_api.md>
   Virtual Camera <examples/05_collecting_render.md>
   Render Images <examples/05_collecting_render_procedural.md>
   Animation <examples/05_pointcloud_animation.md>
   Upsert <examples/05_pointcloud_animation_upsert.md>
   Depth Texture <examples/06_depth_texture.md>
   Background Image <examples/07_background_image.md>
   Depth Image <examples/08_experimental_depth_image.md>
   Coordinate Markers <examples/11_coordinates_markers.md>
   Virtual Camera <examples/12_camera.md>

.. toctree::
   :maxdepth: 3
   :caption: Python API
   :hidden:
   
   vuer <api/vuer.md>
   vuer.base <api/base.md>
   vuer.types — Type Interafce <api/types.md>
   vuer.events — Event Types <api/events.md>
   vuer.schemas — Components <api/schemas.md>
   vuer.serdes — Serialization <api/serdes.md>
    
```