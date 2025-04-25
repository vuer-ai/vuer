import os
from contextlib import nullcontext
from cmx import doc

doc @ """
# 3D Text in Vuer

This example demonstrates how to create and customize 3D text in Vuer using the Text3D component.
The Text3D component renders 3D text using ThreeJS's TextGeometry.

![3D Text Example](figures/22_3d_text.png)
"""

MAKE_DOCS = os.getenv("MAKE_DOCS", False)

with doc, doc.skip if MAKE_DOCS else nullcontext():
    from asyncio import sleep

    from vuer import Vuer
    from vuer.schemas import (
        Text3D,
        Center,
        DefaultScene,
        Group,
        Box,
        AmbientLight,
        DirectionalLight,
    )

    app = Vuer()

    @app.spawn(start=True)
    async def show_3d_text(session):
        # Create a scene with some basic elements
        session.set @ DefaultScene(
            # Basic 3D text example
            Center(
                Text3D(
                    "Hello Vuer!",
                    font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
                    smooth=1,
                    position=[0, 1, 0],
                    color="blue",
                    scale=0.2,
                ),
                key="centered-text",
            ),
            # Customized 3D text with different parameters
            Group(
                Text3D(
                    "Custom Text",
                    font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
                    smooth=0.5,
                    lineHeight=0.5,
                    letterSpacing=-0.025,
                    position=[0, 0, 0],
                    color="red",
                    scale=0.15,
                ),
                position=[0, -0.5, 0],
                key="custom-text",
            ),
            # A small platform below the text
            Box(
                width=3,
                height=0.1,
                depth=1,
                position=[0, -1, 0],
                color="#888888",
            ),
            # Add lighting to make the text visible
            AmbientLight(intensity=0.5, key="ambient_light"),
            DirectionalLight(intensity=1, position=[1, 2, 2], key="directional_light"),
        )
        await sleep(0.1)

        # Demo of rotating text
        angle = 0
        while True:
            angle += 0.1
            session.update @ Group(rotation=[0, angle, 0], key="custom-text")
            await sleep(0.05)


doc @ """
## Text3D Component

The Text3D component renders 3D text using ThreeJS's TextGeometry. It requires fonts in JSON format
that can be generated through typeface.json, either as a path to a JSON file or a JSON object.

### Parameters

- **font**: Font URL or JSON object with font data
- **smooth**: Merges vertices with a tolerance and calls computeVertexNormals
- **lineHeight**: Line height in threejs units (default: 0)
- **letterSpacing**: Letter spacing factor (default: 1)

You can align the text using the Center component as shown in the example.

### Tips

- If you face display issues, try checking "Reverse font direction" in the typeface tool.
- Combine with other components like Group to control positioning and animations.
- Use standard Three.js parameters like color, position, rotation, and scale to customize appearance.

## Additional Resources

- [Three.js Text Geometry](https://threejs.org/docs/#api/en/geometries/TextGeometry)
- [Font creation tools](https://gero3.github.io/facetype.js/)
"""
