import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Urdf

The `Urdf` component loads and displays URDF (Unified Robot Description Format) robot models.
This is essential for:
- Visualizing robot configurations
- Creating interactive robot simulations
- Displaying joint positions in real-time
- Building robot teleoperation interfaces

## Loading URDF from URL

![](figures/urdf_url.png)

A minimal example that loads a URDF robot model directly from a URL:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep
    from math import pi

    from vuer import Vuer
    from vuer.schemas import DefaultScene, Movable, OrbitControls, Urdf

    app = Vuer()

    @app.spawn(start=True)
    async def main(session):
        session.set @ DefaultScene(
            # Movable wrapper allows the user to drag and reposition the robot
            Movable(
                Urdf(
                    # Load URDF directly from a URL
                    src="https://raw.githubusercontent.com/nasa-jpl/m2020-urdf-models/main/rover/m2020.urdf",
                    jointValues={},
                    # Rotate to correct orientation (model is upside-down by default)
                    rotation=[pi, 0, 0],
                ),
                position=[0, 0, 0.15],
            ),
            grid=True,
            collapseMenu=True,
            # Z-up coordinate system
            up=[0, 0, 1],
            bgChildren=[
                OrbitControls(key="OrbitControls"),
            ],
        )

        while True:
            await sleep(16)

doc @ """
## Loading URDF from Local Files

![](figures/urdf_local.png)

This example shows how to load a URDF file from your local filesystem and animate joint values in real-time:

```python
import math
from asyncio import sleep
from math import pi
from pathlib import Path

from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Movable, OrbitControls, Urdf

# Set up static file serving from the assets directory
assets_folder = Path(__file__).parent / "assets"
app = Vuer(static_root=assets_folder)

# URDF file path (served via Vuer's static file server)
urdf_path = "http://localhost:8012/static/robots/mini_cheetah/mini_cheetah.urdf"

# Initial joint configuration for the quadruped robot
initial_joints = {
    "FL_hip_joint": -0.2,
    "RL_hip_joint": -0.2,
    "FR_hip_joint": 0.2,
    "RR_hip_joint": 0.2,
    "FL_thigh_joint": -0.25 * pi,
    "RL_thigh_joint": -0.25 * pi,
    "FR_thigh_joint": -1.3,
    "RR_thigh_joint": -0.25 * pi,
    "FL_calf_joint": 0.5 * pi,
    "RL_calf_joint": 0.5 * pi,
    "FR_calf_joint": 0.6 * pi,
    "RR_calf_joint": 0.5 * pi,
}

@app.spawn(start=True)
async def main(session: VuerSession):
    # Set up the initial scene with the robot
    session.set @ DefaultScene(
        Movable(
            Urdf(
                src=urdf_path,
                jointValues=initial_joints,
                key="robot",
            ),
            position=[0, 0, 0.3],
            scale=0.4,
        ),
        grid=True,
        up=[0, 0, 1],
        bgChildren=[
            OrbitControls(key="OrbitControls"),
        ],
    )

    await sleep(0.1)

    # Animate the front-right leg using sinusoidal motion
    i = 0
    while True:
        # Create animated joint values by modifying FR leg
        animated_joints = initial_joints.copy()
        animated_joints["FR_thigh_joint"] = 0.5 * math.sin(i * 0.1) - 1.3
        animated_joints["FR_calf_joint"] = -0.5 * math.sin(i * 0.1) + 0.6 * pi

        # Update the robot with new joint values
        session.update @ Urdf(
            src=urdf_path,
            jointValues=animated_joints,
            key="robot",
        )

        await sleep(0.016)  # ~60 FPS
        i += 1
```

## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the robot |
| `src` | str | - | URL or path to the URDF file |
| `jointValues` | dict | `{}` | Dictionary mapping joint names to positions (radians) |
| `position` | list | `[0,0,0]` | Robot position in world coordinates |
| `rotation` | list | `[0,0,0]` | Robot rotation (Euler angles) |
| `scale` | float/list | `1` | Uniform or per-axis scale |

## Supported Mesh Formats

The URDF loader supports the following mesh formats for robot links:
- `.dae` (Collada)
- `.stl` (STereoLithography)
- `.obj` (Wavefront OBJ)
- `.ply` (Polygon File Format)

## Learn More

For detailed examples of using `Urdf`, see:

- [Unitree Go1 with Stairs](../examples/urdf_go1_stairs.md) - Multi-robot scenes with environment
"""

doc.flush()
