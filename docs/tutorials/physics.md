# Physics in Mixed Reality

<p style="padding-left: 40px"><i>Physics and human data in your browser~</i></p>

The ability to interact with the simulated physics in virtual reality is magical. Vuer has
recently integrated MuJoCo, a general purpose physics engine that has become a standard in
robot learning, to directly run it on your device.

The documentations in this page will show you how to use the physics engine in vuer, to collect
demonstration data. Now, from the MuJoCo official repository,

> MuJoCo stands for Multi-Joint dynamics with Contact. It is a general purpose physics engine
> that aims to facilitate research and development in robotics, biomechanics, graphics and
> animation, machine learning, and other areas which demand fast and accurate simulation of
> articulated structures interacting with their environment.

Recently, MuJoCo was acquired and open-sourced by DeepMind. Since then, the library is accessible
to whomever without licence. The MuJoCo running inside vuer is compiled to webAssembly from
the MuJoCo source code, and aim to be feature complete. In other words, you should be able to do
everything you can do in MuJoCo with the vuer MuJoCo integration.

## A Simple Example

```python
from vuer import Vuer, VuerSession
from vuer.schemas import MuJoCo, HandActuator

app = Vuer(port=8012)


@app.spanw(start=True)
async def main(sess: VuerSession):
    print("client is connected!")

    pref = ""

    sess.upsert @ MuJoCo(
        HandActuator(key="pinch-on-squeeze"),
        src="static/scene.xml",
        assets=[
            pref + "assets/chair.obj",
            pref + "assets/table_texture.png",
            pref + "assets/pot_lid.obj",
            # ...
            pref + "emika.xml",
        ],
    )
```

Here would be the result

<iframe
width="100%" height="500px"
src="https://vuer.ai/editor?background=131416,fff&collapseMenu=true&scene=3gAFqGNoaWxkcmVukd4ACKhjaGlsZHJlbpHeAAOoY2hpbGRyZW6Qo3RhZ6xIYW5kQWN0dWF0b3Kja2V5sHBpbmNoLW9uLXNxdWVlemWjdGFnpk11Sm9Db6NrZXmuZnJhbmthLWdyaXBwZXKjc3Jj2UxodHRwczovL2RvY3MudnVlci5haS9lbi9sYXRlc3QvX3N0YXRpYy9tdWpvY29fc2NlbmVzL2dyaXBwZXJfbW9kZWwvc2NlbmUueG1spmFzc2V0c5vZVWh0dHBzOi8vZG9jcy52dWVyLmFpL2VuL2xhdGVzdC9fc3RhdGljL211am9jb19zY2VuZXMvZ3JpcHBlcl9tb2RlbC9mcmFua2FfZ3JpcHBlci54bWzZVmh0dHBzOi8vZG9jcy52dWVyLmFpL2VuL2xhdGVzdC9fc3RhdGljL211am9jb19zY2VuZXMvZ3JpcHBlcl9tb2RlbC9hc3NldHMvZmluZ2VyXzAub2Jq2VZodHRwczovL2RvY3MudnVlci5haS9lbi9sYXRlc3QvX3N0YXRpYy9tdWpvY29fc2NlbmVzL2dyaXBwZXJfbW9kZWwvYXNzZXRzL2Zpbmdlcl8xLm9iatlSaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvbXVqb2NvX3NjZW5lcy9ncmlwcGVyX21vZGVsL2Fzc2V0cy9oYW5kLnN0bNlUaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvbXVqb2NvX3NjZW5lcy9ncmlwcGVyX21vZGVsL2Fzc2V0cy9oYW5kXzAub2Jq2VRodHRwczovL2RvY3MudnVlci5haS9lbi9sYXRlc3QvX3N0YXRpYy9tdWpvY29fc2NlbmVzL2dyaXBwZXJfbW9kZWwvYXNzZXRzL2hhbmRfMS5vYmrZVGh0dHBzOi8vZG9jcy52dWVyLmFpL2VuL2xhdGVzdC9fc3RhdGljL211am9jb19zY2VuZXMvZ3JpcHBlcl9tb2RlbC9hc3NldHMvaGFuZF8yLm9iatlUaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvbXVqb2NvX3NjZW5lcy9ncmlwcGVyX21vZGVsL2Fzc2V0cy9oYW5kXzMub2Jq2VRodHRwczovL2RvY3MudnVlci5haS9lbi9sYXRlc3QvX3N0YXRpYy9tdWpvY29fc2NlbmVzL2dyaXBwZXJfbW9kZWwvYXNzZXRzL2hhbmRfNC5vYmrZUWh0dHBzOi8vZG9jcy52dWVyLmFpL2VuL2xhdGVzdC9fc3RhdGljL211am9jb19zY2VuZXMvZ3JpcHBlcl9tb2RlbC9hc3NldHMvYmluLnhtbNlTaHR0cHM6Ly9kb2NzLnZ1ZXIuYWkvZW4vbGF0ZXN0L19zdGF0aWMvbXVqb2NvX3NjZW5lcy9ncmlwcGVyX21vZGVsL2Fzc2V0cy90YWJsZS54bWypdXNlTGlnaHRzw6d0aW1lb3V0zgAPQkClc2NhbGXLP7mZmaAAAACrcmF3Q2hpbGRyZW6QqmJnQ2hpbGRyZW6T3gAHqGNoaWxkcmVukKN0YWejZm9no2tleaNmb2emYXR0YWNoo2ZvZ6Vjb2xvcs4ALD9XpG5lYXIKo2ZhchTeAAioY2hpbGRyZW6Qo3RhZ6VIYW5kc6NrZXmlaGFuZHOjZnBzHqpldmVudFR5cGVzkadzcXVlZXplpnN0cmVhbcKkbGVmdMClcmlnaHTA3gAGqGNoaWxkcmVukKN0YWemU3BoZXJlo2tleaE1pGFyZ3OTMgoKrG1hdGVyaWFsVHlwZaViYXNpY6htYXRlcmlhbN4AAqVjb2xvcs4ALD9XpHNpZGUBrGh0bWxDaGlsZHJlbpClc2NlbmXeAAWocG9zaXRpb27eAAOheACheQChegCocm90YXRpb27eAAOheACheQChegClc2NhbGUBonVwkwABAKN0YWelU2NlbmU%3D"
title="MuJoCo block stacking example"></iframe>

```{eval-rst}
.. toctree::
    :maxdepth: 1
    :hidden:
    
    MuJoCo Cassie <physics/mujoco_wasm.md>
    MoCap Control <physics/mocap_control.md>
    Hand Control <physics/mocap_hand_control.md>
    Example Gallery <physics/mujoco_gallery.md>
```

