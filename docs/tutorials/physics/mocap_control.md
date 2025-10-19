
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
