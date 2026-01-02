---
description: Vuer VR/AR/WebXR features - hand tracking, controllers, AR mesh
topics: [vuer, webxr, vr, ar, hand-tracking, controllers]
---

# Vuer XR Features

Vuer supports VR/AR through WebXR with hand tracking, motion controllers, and AR mesh detection.

## Requirements

For VR/AR, you need secure WebSocket (wss://). Use ngrok:

```bash
ngrok http 8012
# Visit: https://vuer.ai?ws=wss://xxxx.ngrok.io
```

## Hand Tracking

```python
from vuer.schemas import DefaultScene, Hands

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Hands(key="hands", stream=True)
    )
    await session.forever()

@app.add_handler("HAND_MOVE")
async def on_hands(event, session):
    hands = event.value
    if hands.get('left'):
        left_hand = hands['left']
        # Access joint positions
        wrist = left_hand['wrist']
        index_tip = left_hand['indexTip']
        pinch_strength = left_hand.get('pinchStrength', 0)
```

### Hand Joint Data

Each hand provides:
- Joint positions: `wrist`, `thumbTip`, `indexTip`, `middleTip`, `ringTip`, `pinkyTip`
- `pinchStrength` (0-1): Pinch gesture detection
- `matrix`: Hand transform matrix

## Motion Controllers

```python
from vuer.schemas import MotionController

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        MotionController(key="controllers", stream=True)
    )
    await session.forever()

@app.add_handler("CONTROLLER_MOVE")
async def on_controller(event, session):
    data = event.value
    left = data.get('left')
    right = data.get('right')

    if right:
        position = right['position']
        rotation = right['rotation']
        buttons = right['buttons']  # Trigger, grip, etc.
```

## Gripper Visualization

```python
from vuer.schemas import Gripper

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Gripper(
            key="gripper",
            position=[0, 1, -0.5],
            pinchWidth=0.04,  # Distance between fingers
        )
    )

    # Update gripper with hand tracking
    @app.add_handler("HAND_MOVE")
    async def update_gripper(event, session):
        right = event.value.get('right')
        if right:
            session.upsert @ Gripper(
                key="gripper",
                position=right['wrist'],
                pinchWidth=0.08 * (1 - right.get('pinchStrength', 0))
            )

    await session.forever()
```

## AR Mesh Detection

Detect real-world surfaces in AR:

```python
from vuer.schemas import WebXRMesh

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        WebXRMesh(key="webxr-mesh", stream=False)
    )

    await asyncio.sleep(2)  # Wait for mesh detection

    # Request mesh data
    mesh_data = await session.get_webxr_mesh(key="webxr-mesh")

    for mesh in mesh_data.value.get('meshes', []):
        vertices = mesh['vertices']
        indices = mesh['indices']
        label = mesh.get('semanticLabel', 'unknown')
        matrix = mesh['matrix']
        print(f"Mesh: {len(vertices)//3} vertices, label={label}")

    await session.forever()
```

### Streaming AR Mesh

```python
WebXRMesh(key="webxr-mesh", stream=True)  # Continuous updates
```

## Face Tracking

```python
from vuer.schemas import Facemesh

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Facemesh(key="face", stream=True)
    )
    await session.forever()
```

## Haptic Feedback

Trigger controller vibration:

```python
from vuer.events import HapticActuatorPulse

session @ HapticActuatorPulse(
    left={"strength": 0.5, "duration": 100},   # Left controller
    right={"strength": 1.0, "duration": 200},  # Right controller
)
```

## XR Scene Setup

Complete XR-ready scene:

```python
from vuer.schemas import (
    DefaultScene, Hands, MotionController,
    WebXRMesh, Gripper, Box
)

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        # Hand tracking
        Hands(key="hands", stream=True),

        # Controller support
        MotionController(key="controllers", stream=True),

        # AR mesh (AR mode only)
        WebXRMesh(key="ar-mesh", stream=True),

        # Virtual gripper
        Gripper(key="gripper"),

        # Scene content
        Box(key="target", position=[0, 1, -0.5]),
    )
    await session.forever()
```

## Teleportation

Coming soon. For now, use motion controllers to navigate.

## Best Practices

1. **Test on desktop first** - WebXR features gracefully degrade
2. **Use stream=True sparingly** - High-frequency streaming impacts performance
3. **Handle missing data** - Not all devices support all features
4. **Provide fallbacks** - Support both hand tracking and controllers

```python
@app.add_handler("HAND_MOVE")
async def on_hands(event, session):
    if event.value:
        # Use hand tracking
        pass

@app.add_handler("CONTROLLER_MOVE")
async def on_controller(event, session):
    if event.value:
        # Use controllers as fallback
        pass
```
