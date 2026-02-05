
# Capturing Height Maps with an Orthographic Camera

This tutorial shows how to capture height maps (top-down depth images) using an
orthographic camera. Height maps are useful for:
- Terrain analysis and visualization
- Robot navigation and path planning
- Generating 2.5D representations of 3D scenes

This tutorial will teach you how to:
- Set up an orthographic camera (vs. perspective)
- Position the camera for top-down viewing
- Capture and display depth data as a height map

```{admonition} Orthographic vs Perspective
:class: tip
Unlike perspective cameras where parallel lines converge, orthographic cameras
preserve parallel lines. This makes them ideal for height maps where you want
consistent scale across the entire image.
```


## Step 1: Create the Scene with an Orthographic Camera

We set up a scene with:
- A `Plane` as the ground surface
- A `Sphere` that bounces to create varying heights
- An orthographic `CameraView` positioned above, looking down

Key parameters for the orthographic camera:
- `ctype="orthographic"`: Switches from perspective to orthographic projection
- `position=[0, 0, 2]`: Places the camera 2 units above the origin
- `rotation=[0, 0, -0.5 * np.pi]`: Points the camera straight down
- `renderDepth=True`: Enables depth buffer capture for height data

```python
from asyncio import sleep, TimeoutError

import numpy as np

from vuer import Vuer
from vuer.schemas import Sphere, DefaultScene, CameraView, Plane, OrbitControls

app = Vuer(queries=dict(grid=False))

@app.spawn(start=True)
async def main(proxy):
    # Set up the scene with ground plane, sphere, and orthographic camera
    proxy.set @ DefaultScene(
        Sphere(key="sphere"),
        Plane(args=[5, 5, 2, 2], key="ground"),
        rawChildren=[
            CameraView(
                ctype="orthographic",  # Use orthographic projection
                fov=50,
                width=320,
                height=240,
                key="ego",
                position=[0, 0, 2],  # 2 units above origin
                rotation=[0, 0, -0.5 * np.pi],  # Looking straight down
                stream="ondemand",
                fps=30,
                near=0.45,
                far=2.2,
                renderDepth=True,  # Enable depth capture
                showFrustum=True,
                downsample=1,
                distanceToCamera=2,
            ),
        ],
        bgChildren=[
            OrbitControls(key="OrbitControls")
        ],
        up=[0, 0, 1]
    )
    await sleep(0.0)

    # Animation loop: bounce the sphere and capture height maps
    i = 0
    while True:
        i += 1

        # Calculate bouncing sphere height
        h = 0.25 - (0.00866 * (i % 120 - 60)) ** 2
        position = [0.2, 0.0, 0.1 + h]

        # Update sphere position
        proxy.update @ Sphere(
            key="sphere",
            args=[0.1, 20, 20],
            position=position,
            rotation=[0, 0, 0],
            materialType="standard",
            material={"roughness": 0.5, "metalness": 0.5, "color": "red"},
        )
        await sleep(0.0)

        # Capture and display the height map
        try:
            result = await proxy.grab_render(downsample=1, key="ego")
            print("\rRender received with keys:", list(result.value.keys()), end="")

            # Use depth frame for height map visualization
            frame = result.value["depthFrame"] or result.value["frame"]
            pil_image = PImage.open(BytesIO(frame))
            img = np.array(pil_image)
            img_bgr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

            cv2.imshow("Height Map", img_bgr)
            if cv2.waitKey(1) == ord("q"):
                exit()

        except TimeoutError:
            print("Render request timed out.")
```

## Step 2: Running the Tutorial

Paste the code into `grab_heightmap.py` and run:

```bash
python grab_heightmap.py
```

Open the URL printed in the terminal (usually `https://vuer.ai`).

You should see an OpenCV window displaying the height map captured from the
orthographic camera. Brighter pixels represent surfaces closer to the camera
(higher elevation), while darker pixels represent surfaces further away
(lower elevation). The bouncing sphere will appear as a bright spot that
moves up and down. Press 'q' to quit.

## Understanding the Height Map

```
  Orthographic Camera (top-down view)
           │
           ▼
    ┌──────────────┐
    │   ○ sphere   │  ← bright (close to camera)
    │              │
    │ ─────────────│  ← ground plane (medium gray)
    │              │
    └──────────────┘
           │
         depth
```

The depth values from the orthographic camera directly correspond to height
above the ground plane, making this technique ideal for terrain mapping
and obstacle detection in robotics applications.
