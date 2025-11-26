
# Urdf - Robot Models with Articulated Joints

## Overview

The `Urdf` component loads robot models from URDF (Unified Robot Description Format) files, the standard format for robot models in ROS. URDF files describe robot geometry, kinematics, and visual properties with articulated joints.

**Supported mesh formats**: `.dae`, `.stl`, `.obj`, `.ply`

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Urdf

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Urdf(
            src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf",
            jointValues={},
            rotation=[3.14, 0, 0],
            position=[0, 0, 0],
            key="rover",
        ),
    )
    
    await session.forever()
```

## Parameters

```python
Urdf(
    # Required
    src="url/to/robot.urdf",      # URL to URDF file
    
    # Joint configuration
    jointValues=dict,              # {joint_name: angle} in radians
    
    # Transform
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=[sx, sy, sz],
    
    # Interaction
    key="unique-id",
)
```

## Loading from Web

From the [URDF example](../../examples/03_urdf):

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Urdf

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    # Mars Rover
    session.upsert @ Urdf(
        src="https://docs.vuer.ai/en/latest/_static/perseverance/rover/m2020.urdf",
        jointValues={},
        rotation=[1.57, 0, 0],
        position=[0, 0, -1.5],
        key="perseverance",
    )
    
    # Mars Helicopter
    session.upsert @ Urdf(
        src="https://docs.vuer.ai/en/latest/_static/perseverance/mhs/MHS.urdf",
        jointValues={},
        rotation=[1.57, 0, 0],
        position=[0, 0.28, 0.5],
        key="mars-helicopter",
    )
    
    await session.forever()
```

## Interactive Robot with Movable

Combine with `Movable` to make the robot grabbable:

```python
from vuer.schemas import DefaultScene, Urdf, Movable

session.set @ DefaultScene(
    Movable(
        Urdf(
            src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf",
            jointValues={},
            rotation=[3.14, 0, 0],
            key="rover",
        ),
        position=[0, 0, 0.15],
        key="movable-rover",
    ),
    grid=True,
)
```

## Controlling Joint Angles

```python
from asyncio import sleep
import numpy as np

# Initial configuration
session.set @ DefaultScene(
    Urdf(
        src="robot.urdf",
        jointValues={
            "joint1": 0.0,
            "joint2": 0.0,
            "joint3": 0.0,
        },
        key="robot",
    ),
)

# Animate joints
angle = 0
while True:
    angle += 0.05
    
    session.upsert @ Urdf(
        src="robot.urdf",
        jointValues={
            "joint1": np.sin(angle),
            "joint2": np.cos(angle),
            "joint3": angle * 0.5,
        },
        key="robot",
    )
    
    await sleep(0.033)
```

## Local URDF Files

From the [local URDF example](../../examples/03_urdf_local):

```python
from pathlib import Path
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Urdf

# Serve static files
app = Vuer(static_root=Path(__file__).parent / "assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Urdf(
            src="http://localhost:8012/static/robots/robot.urdf",
            jointValues={},
            key="local-robot",
        ),
    )
    
    await session.forever()
```

**Directory structure:**
```
project/
├── main.py
└── assets/
    └── robots/
        ├── robot.urdf
        └── meshes/
            ├── link1.dae
            ├── link2.dae
            └── ...
```

## Common Issues

### Robot Not Appearing

**Problem**: URDF loads but robot is invisible.

**Solutions**:
1. **Check scale**: Robot might be too small/large
   ```python
   Urdf(src="robot.urdf", scale=[10, 10, 10])
   ```

2. **Check position**: Robot might be below ground
   ```python
   Urdf(src="robot.urdf", position=[0, 1, 0])
   ```

3. **Check rotation**: Verify coordinate system
   ```python
   Urdf(src="robot.urdf", rotation=[1.57, 0, 0])  # 90° around X
   ```

### Missing Meshes

**Problem**: Some parts of robot are missing.

**Causes**:
1. Mesh files not in static directory
2. URDF uses absolute paths
3. Mesh file format not supported

**Solution**: Ensure all mesh files are accessible and use relative paths in URDF.

### Wrong Orientation

**Problem**: Robot is upside down or sideways.

**Common fixes**:
```python
# Z-up to Y-up
rotation=[1.57, 0, 0]  # 90° around X

# Flip upside down
rotation=[3.14, 0, 0]  # 180° around X

# ROS convention
rotation=[0, 0, 0]     # Usually Z-up
```

## URDF File Structure

```xml
<?xml version="1.0"?>
<robot name="my_robot">
  <!-- Links (rigid bodies) -->
  <link name="base_link">
    <visual>
      <geometry>
        <mesh filename="meshes/base.dae"/>
      </geometry>
      <material name="grey">
        <color rgba="0.5 0.5 0.5 1"/>
      </material>
    </visual>
  </link>
  
  <link name="arm_link">
    <visual>
      <geometry>
        <mesh filename="meshes/arm.dae"/>
      </geometry>
    </visual>
  </link>
  
  <!-- Joints (connections) -->
  <joint name="arm_joint" type="revolute">
    <parent link="base_link"/>
    <child link="arm_link"/>
    <origin xyz="0 0 0.5" rpy="0 0 0"/>
    <axis xyz="0 0 1"/>
    <limit lower="-1.57" upper="1.57" effort="10" velocity="1"/>
  </joint>
</robot>
```

## Joint Types

| Type | Description | DOF |
|------|-------------|-----|
| `revolute` | Rotating joint with limits | 1 |
| `continuous` | Rotating joint without limits | 1 |
| `prismatic` | Sliding joint | 1 |
| `fixed` | No movement | 0 |
| `floating` | 6 DOF | 6 |
| `planar` | 2D movement | 2 |

## Exporting from Blender

1. Install **Phobos** add-on for Blender
2. Model your robot with separate objects for each link
3. Add armature for joints
4. **File → Export → URDF**
5. Export meshes as `.dae` (COLLADA)

## Finding Robot Models

**Free URDF models:**
- [NASA JPL M2020 Rover](https://github.com/nasa-jpl/m2020-urdf-models)
- [ROS Industrial robots](https://github.com/ros-industrial)
- [Drake Model Database](https://github.com/RobotLocomotion/drake/tree/master/examples)
- [GrabCAD](https://grabcad.com) (convert to URDF)

## Performance Tips

1. **Simplify meshes**: Use low-poly models for real-time rendering
2. **Use efficient formats**: `.dae` often better than `.stl`
3. **Combine links**: Merge fixed joints to reduce complexity
4. **Limit joint updates**: Update only when values change

## Complete Example

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Urdf, Movable
from vuer.schemas import AmbientLight, DirectionalLight
import numpy as np
from asyncio import sleep

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        Movable(
            Urdf(
                src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf",
                jointValues={},
                rotation=[np.pi, 0, 0],
                key="rover",
            ),
            position=[0, 0, 0.15],
            showFrame=True,
            key="movable-rover",
        ),
        
        up=[0, 1, 0],
        grid=True,
        
        rawChildren=[
            AmbientLight(key="ambient", intensity=0.5),
            DirectionalLight(key="sun", intensity=1.0, position=[5, 5, 5]),
        ],
    )
    
    await session.forever()
```

## Next Steps

- [Movable](02_movable) - Make robots interactive
- [Obj](02_obj) - Load static meshes
- [Glb](02_glb) - Alternative mesh format
