
# MuJoCo VR Mocap Example

First, let's import the dependencies.

```python
from asyncio import sleep
from textwrap import dedent

from killport import kill_ports
from vuer import Vuer, VuerSession
from vuer.events import ClientEvent
from vuer.schemas import MuJoCo, Scene, Fog, Sphere, Hands, HandActuator, MotionControllers, MotionControllerActuator
```


We need to list all of the required files. This needs to be done
manually upfront because I don't want to add an additional step
of first parsing these assets from the mjcf file.

```python
ASSETS_LIST = (
    dedent("""
    franka_gripper.xml
    assets/finger_0.obj
    assets/finger_1.obj
    assets/hand.stl
    assets/hand_0.obj
    assets/hand_1.obj
    assets/hand_2.obj
    assets/hand_3.obj
    assets/hand_4.obj
    assets/bin.xml
    assets/table.xml
    """)
    .strip()
    .split("\n")
)
```


Now you can instantiate the vuer server:

```python
kill_ports(ports=[8012])
app = Vuer()
```


```{admonition} Note
:class: tip
You need to install `ngrok` to promote the local vuer server
from ws://localhost:8012 to wss://xxxx.ngrok.io, (note the double
w[ss] in the protocol), and pass it as a query parameter that
looks like this:

      https://vuer.ai?ws=wss://xxxxx.ngrok.io

You also need to load from the correct host for components
that requires assets. For example, if you want to load an 
MuJoCo scene, you use the correct url starting with `https`.
```

```python
# this won't work because it does not have SSL.
asset_pref = f"https://docs.vuer.ai/en/latest/_static/mujoco_scenes/gripper_model/"
```


Now, to get the mujoco updates, we can listen to the `ON_MUJOCO_FRAME` event.

```python
@app.add_handler("ON_MUJOCO_FRAME")
async def on_mujoco_frame(event: ClientEvent, sess: VuerSession):
    print("ON_MUJOCO_FRAME", event)
```
