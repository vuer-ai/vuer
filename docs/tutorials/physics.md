# Physics and Human Data In Mixed Reality, Through Your Browser

The ability to interact with the simulated physics in virtual reality is magical. Vuer has
recently integrated MuJoCo, a general purpose physics engine that has become a standard in
robot learning, to directly run it on your device. 

The documentations in this page will show you how to use the physics engine in vuer, to collect
demonstration data.

From the MuJoCo official repository,

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

<iframe src="" title="MuJoCo block stacking example"></iframe>

List of files

- [physics.md](physics.md)
- [physics/figures/mujoco_cassie.png](physics/figures/mujoco_cassie.png)
- [physics/figures/mujoco_frame_event.png](physics/figures/mujoco_frame_event.png)
- [physics/gripper_model/assets/bin.xml](physics/gripper_model/assets/bin.xml)
- [physics/gripper_model/assets/block.xml](physics/gripper_model/assets/block.xml)
- [physics/gripper_model/assets/finger_0.obj](physics/gripper_model/assets/finger_0.obj)
- [physics/gripper_model/assets/finger_1.obj](physics/gripper_model/assets/finger_1.obj)
- [physics/gripper_model/assets/hand.stl](physics/gripper_model/assets/hand.stl)
- [physics/gripper_model/assets/hand_0.obj](physics/gripper_model/assets/hand_0.obj)
- [physics/gripper_model/assets/hand_1.obj](physics/gripper_model/assets/hand_1.obj)
- [physics/gripper_model/assets/hand_2.obj](physics/gripper_model/assets/hand_2.obj)
- [physics/gripper_model/assets/hand_3.obj](physics/gripper_model/assets/hand_3.obj)
- [physics/gripper_model/assets/hand_4.obj](physics/gripper_model/assets/hand_4.obj)
- [physics/gripper_model/assets/table.xml](physics/gripper_model/assets/table.xml)
- [physics/gripper_model/franka_gripper.xml](physics/gripper_model/franka_gripper.xml)
- [physics/gripper_model/mj_mocap_demo.py](physics/gripper_model/mj_mocap_demo.py)
- [physics/gripper_model/scene.xml](physics/gripper_model/scene.xml)
- [physics/mocap_control.md](physics/mocap_control.md)
- [physics/mocap_control.py](physics/mocap_control.py)
- [physics/mujoco_wasm.md](physics/mujoco_wasm.md)
- [physics/mujoco_wasm.py](physics/mujoco_wasm.py)

```{eval-rst}
.. toctree::
    :maxdepth: 1
    :hidden:
    
    MuJoCo Cassie <physics/mujoco_wasm.md>
    MoCap Control <physics/mocap_control.md>
```

