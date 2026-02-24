<h1 class="full-width" style="font-size: 28px"><code style="font-size: 1.3em; margin-right:-0.4em; background-clip: text; color: transparent; background-image: linear-gradient(to right, rgb(0,140,220), rgb(226,213,79), rgb(210,0,12));">vuer</code><br><span style="font-size: 0.5em; line-height: 1.2; display: block; margin-top: 0.2em;">An Event-Driven, Declarative Visualization Framework for Physical AI</span>
</h1>

<link rel="stylesheet" href="_static/title_resize.css">

Vuer is a light-weight visualization toolkit for interacting with dynamic 3D and robotics data. It is
VR and AR ready, and can be run on mobile devices. To get started, just run:

```shell
pip install 'vuer=={VERSION}'
```

```{admonition} Running Vuer from the Browser
:class: tip
Vuer can run directly in the browser via PyScript and Pyodide. Server dependencies are auto-excluded on Emscripten:

    import micropip
    await micropip.install("vuer")
    from vuer.schemas import Scene, Box, Urdf
```

```{admonition} Note for Mac Users
:class: info
If you encounter build issues with `msgpack` on older systems, you may need gcc@11:

  brew install gcc@11

Modern versions of macOS should work with the pre-built wheels.
```

Here is an example that loads a URDF file and displays it in the browser. For a more comprehensive list of examples,
please refer to the [examples](examples/meshes/mesh_loading.md) page.

```python
from vuer import Vuer
from vuer.schemas import DefaultScene, Urdf, OrbitControls

app = Vuer()


@app.spawn(start=True)
async def main(sess):
    sess.set @ DefaultScene(
        Urdf(src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf"),
        up=[0, 0, -1],  # Z-down coordinate system
        bgChildren=[OrbitControls(key="OrbitControls")]
    )

    await sess.forever()
```

<iframe src="https://vuer.ai//?hideUI=true&reconnect=True&scene=h6hjaGlsZHJlbpGEqGNoaWxkcmVukYaoY2hpbGRyZW6Qo3RhZ6RVcmRmo2tleaExo3NyY9lSaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25hc2EtanBsL20yMDIwLXVyZGYtbW9kZWxzL21haW4vcm92ZXIvbTIwMjAudXJkZqtqb2ludFZhbHVlc4Cocm90YXRpb26Ty0AJHrhR64UfAACjdGFnp01vdmFibGWja2V5oTKocG9zaXRpb26TAADLP8MzMzMzMzOjdGFnpVNjZW5lo2tleaEzonVwkwAAAahzaG93TGV2YcKqYmdDaGlsZHJlbpCrcmF3Q2hpbGRyZW6VhKhjaGlsZHJlbpCjdGFnrEFtYmllbnRMaWdodKNrZXmnYW1iaWVudKlpbnRlbnNpdHnLP%2BAAAAAAAACFqGNoaWxkcmVukKN0YWewRGlyZWN0aW9uYWxMaWdodKNrZXmjc3VuqWludGVuc2l0eQGocG9zaXRpb26TAwMDhahjaGlsZHJlbpCjdGFnsVBlcnNwZWN0aXZlQ2FtZXJho2tlebJwZXJzcGVjdGl2ZS1jYW1lcmGrbWFrZURlZmF1bHTDqHBvc2l0aW9ukwADA4OoY2hpbGRyZW6Qo3RhZ61PcmJpdENvbnRyb2xzo2tleatvcmItY29udHJvbIOoY2hpbGRyZW6Qo3RhZ6RHcmlko2tleaRncmlk" width="100%" height="350px" frameborder="0"></iframe>

Vuer is built by researchers at MIT and UCSD in fields including robotics, computer vision, and computer graphics.

- light-weight and performant
- VR and AR ready
- has a strong community support
- Hackable and extensible
- Open source, licensed under MIT

## 🤖 Using Vuer with Claude Code

Vuer includes a [Claude Code skill](https://github.com/vuer-ai/vuer-skill) that teaches Claude how to use the library
effectively. To import, run in Claude Code:

```
/plugin marketplace add vuer-ai/vuer-skill
/plugin install vuer@vuer-ai-vuer-skill
```

See the [full guide](guides/claude_skill.md) for more details.

To get a quick overview of what you can do
with  <code style="font-size: 1.3em; background-clip: text; color: transparent; background-image: linear-gradient(to right, rgb(0,140,220), rgb(226,213,79), rgb(210,0,12));">
vuer</code>, check out the following:

- take a look at the basic tutorial or the tutorial for robotics:
    - [Introduction to Key Vuer Concepts](https://docs.vuer.ai/en/latest/tutorials/basics.html)
- browse the example gallery [here](https://docs.vuer.ai/en/latest/examples/meshes/mesh_loading.html)
- try the demo showing a Unitree Go1 robot in front of a
  staircase [here](https://docs.vuer.ai/en/latest/examples/urdf_go1_stairs.html)

For more details:

- A full list of visualization
  components: [API documentation on Components](https://docs.vuer.ai/en/latest/api/vuer.html).

- A full list of data types: [API documentation on Data Types](https://docs.vuer.ai/en/latest/api/types.html).

<!-- prettier-ignore-start -->

```{eval-rst}
.. toctree::
   :hidden:
   :maxdepth: 1
   :titlesonly:

   Quick Start <quick_start.md>
   Report Issues <https://github.com/vuer-ai/vuer/issues?q=is:issue+is:closed>

.. toctree::
   :maxdepth: 3
   :caption: 📖 Your First 3D Scene (NEW!)
   :hidden:

   Constructing A Scene <guides/first_3d_scene/01_constructing_a_scene.md>
   Materials & Textures <guides/first_3d_scene/02_materials_and_textures.md>
   Camera Control <guides/first_3d_scene/03_camera_control.md>
   Lights <guides/first_3d_scene/04_lights.md>
   Render Modes <guides/first_3d_scene/05_render_modes.md>
   Session API <guides/session_apis.md>
   Static Files & Hot Loading <guides/static_files.md>
   Python Client Connection <guides/client_connection.md>
   Using Vuer with Claude Code <guides/claude_skill.md>
   CLI Plugin System <guides/cli.md>

.. toctree::
   :maxdepth: 3
   :caption: Python API
   :hidden:

   Client (vuer.client) <api/client.md>
   Workspace (vuer.workspace) <api/workspace.md>
   Components (vuer.schemas) <api/schemas.md>
   Events (vuer.events) <api/events.md>
   Real-Time Collab (vuer.rtc) <rtc/README.md>

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
   Detecting When Assets Have Been Loaded <tutorials/obj_loading.md>
   MuJoCo Interactive Simulator <tutorials/mujoco_interactive_simulator.md>
   
.. toctree::
   :maxdepth: 1
   :hidden:

   Components <components/index.md>
   Examples <examples/index.md>
   
.. toctree::
   :maxdepth: 3
   :caption: Internals
   :hidden:

   Module (vuer) <api/vuer.md>
   Types (vuer.types) <api/types.md>
   Server Base (vuer.base) <api/base.md>
   Coordinates (vuer.frame) <api/frame.md>
   Serialization (vuer.serdes) <api/serdes.md>

```
