import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# MotionControllers

> **Warning**: This example is still under construction. now reference: [Motion Controllers](../examples/vr_xr/motion_controllers.md)


The `MotionControllers` component enables VR motion controller tracking.
This is essential for:
- VR controller input in WebXR applications
- Building VR interaction interfaces
- Robot teleoperation with VR controllers
- Creating immersive VR experiences

## Basic Usage

A minimal example that enables motion controller tracking:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer, VuerSession
    from vuer.schemas import MotionControllers

    app = Vuer()

    @app.add_handler("CONTROLLER_MOVE")
    async def handler(event, session):
        print(f"Controller Event:", event.value)

    @app.spawn(start=True)
    async def main(session: VuerSession):
        session.upsert(
            MotionControllers(
                stream=True,
                key="controllers",
            ),
            to="bgChildren",
        )

        while True:
            await asyncio.sleep(1.0)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the controllers |
| `stream` | bool | `False` | Enable streaming of controller pose data |
| `left` | bool | `True` | Enable left controller tracking |
| `right` | bool | `True` | Enable right controller tracking |

## Controller Data Format

The `CONTROLLER_MOVE` event returns pose and button data for each controller.

## SSL Requirement

WebXR requires HTTPS. Use ngrok or localtunnel for development:
- **ngrok**: https://ngrok.com/docs
- **localtunnel**: https://localtunnel.me

## Learn More

For detailed examples of using `MotionControllers`, see:

- [Motion Controllers](../examples/vr_xr/motion_controllers.md) - Complete VR controller tutorial
"""

doc.flush()
