import os
from cmx import doc
from contextlib import nullcontext

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
# Hands

> **Warning**: This example is still under construction. now reference: [Hand Tracking](../examples/vr_xr/hand_tracking.md)

The `Hands` component enables WebXR hand tracking for VR/AR applications.
This is essential for:
- Natural hand interaction in VR
- Building gesture-based interfaces
- Creating immersive teleoperation systems
- Developing hand-tracking research applications

## Basic Usage

A minimal example that enables hand tracking:
"""
with doc, doc.skip if MAKE_DOCS else nullcontext():
    import asyncio
    from vuer import Vuer, VuerSession
    from vuer.schemas import Hands

    app = Vuer()

    @app.add_handler("HAND_MOVE")
    async def handler(event, session):
        print(f"Hand Event: key-{event.key}", event.value)

    @app.spawn(start=True)
    async def main(session: VuerSession):
        session.upsert(
            Hands(
                stream=True,
                key="hands",
            ),
            to="bgChildren",
        )

        while True:
            await asyncio.sleep(1.0)

doc @ """
## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the hands component |
| `stream` | bool | `False` | Enable streaming of hand pose data |
| `hideLeft` | bool | `False` | Hide left hand visual but still stream data |
| `hideRight` | bool | `False` | Hide right hand visual but still stream data |
| `disableLeft` | bool | `False` | Disable left hand tracking entirely |
| `disableRight` | bool | `False` | Disable right hand tracking entirely |

## Hand Data Format

The `HAND_MOVE` event returns data in the following format:

```typescript
type HandsData = {
  left?: Float32Array;    // 25 * 16 values (25 joints, 4x4 matrices)
  right?: Float32Array;   // 25 * 16 values
  leftState: HandState;
  rightState: HandState;
};

type HandState = {
  pinch: boolean;
  squeeze: boolean;
  tap: boolean;
  pinchValue: number;
  squeezeValue: number;
  tapValue: number;
};
```

## Hand Landmarks

Following the XR Hand API conventions, 25 joints are tracked per hand:

| Joint | Index | Joint | Index |
|-------|-------|-------|-------|
| wrist | 0 | middle-finger-phalanx-distal | 13 |
| thumb-metacarpal | 1 | middle-finger-tip | 14 |
| thumb-phalanx-proximal | 2 | ring-finger-metacarpal | 15 |
| thumb-phalanx-distal | 3 | ring-finger-phalanx-proximal | 16 |
| thumb-tip | 4 | ring-finger-phalanx-intermediate | 17 |
| index-finger-metacarpal | 5 | ring-finger-phalanx-distal | 18 |
| index-finger-phalanx-proximal | 6 | ring-finger-tip | 19 |
| index-finger-phalanx-intermediate | 7 | pinky-finger-metacarpal | 20 |
| index-finger-phalanx-distal | 8 | pinky-finger-phalanx-proximal | 21 |
| index-finger-tip | 9 | pinky-finger-phalanx-intermediate | 22 |
| middle-finger-metacarpal | 10 | pinky-finger-phalanx-distal | 23 |
| middle-finger-phalanx-proximal | 11 | pinky-finger-tip | 24 |
| middle-finger-phalanx-intermediate | 12 | | |

## SSL Requirement

WebXR hand tracking requires HTTPS. Use ngrok or localtunnel for development:
- **ngrok**: https://ngrok.com/docs
- **localtunnel**: https://localtunnel.me

## Learn More

For detailed examples of using `Hands`, see:

- [Hand Tracking](../examples/vr_xr/hand_tracking.md) - Complete hand tracking tutorial
"""

doc.flush()
