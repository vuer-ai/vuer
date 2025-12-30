import os
from contextlib import nullcontext

from cmx import doc

MAKE_DOCS = os.getenv("MAKE_DOCS", True)

doc @ """
## Body Tracking

The **Body** component allows you to stream the full 3D pose of the human body to the server in real time using the [WebXR Body Tracking API](https://immersive-web.github.io/body-tracking/).

To use this mixed reality (XR) feature, you must run **vuer** behind an SSL proxy (WebXR requires HTTPS).
We recommend using either:

* **ngrok** (paid, stable performance) — [ngrok documentation](https://ngrok.com/docs)
* **localtunnel** (free, open source) — [localtunnel documentation](https://localtunnel.me)

```{admonition} Warning
:class: warning
Please read the relevant documentation of ngrok or localtunnel before proceeding.
```



---

### Body Tracking API

You can access the full body pose by listening to the `BODY_MOVE` event.
The event will send all tracked joint positions and orientations as transformation matrices, indexed by [XRBodyJoint](https://immersive-web.github.io/body-tracking/#xrbodyjoint-enum).

```{admonition} Warning
:class: warning
You **must** set the `stream` option to `true` to start streaming body pose data, otherwise the event will not be
triggered. This is to avoid unnecessary uplink congestion from the client.
```


```{admonition} Warning
:class: warning
The WebXR Body Tracking API is still experimental and is currently only supported in the Quest Browser.
You need to enable the WebXR Experiments flag for body tracking:

- Open chrome://flags in the Quest Browser.
- Search for "webxr" in the search bar.
- Enable the relevant `Experiments` flags for body-tracking.
```

Here’s what Body Tracking looks like on devices that support it (e.g., Meta Quest3).

```{eval-rst}
.. video:: ../../_static/25_body_tracking.mp4
    :alt: Body Tracking Demo with Vuer and Quest3
    :autoplay:
    :nocontrols:
    :loop:
    :muted:
    :poster: ../_static/25_body_tracking.png
    :preload: auto
    :width: 100%
```

### Example

"""

with doc, doc.skip if MAKE_DOCS else nullcontext():
  from asyncio import sleep

  from vuer import Vuer, VuerSession
  from vuer.schemas import Body

  app = Vuer()

  @app.add_handler("BODY_MOVE")
  async def on_body_move(event, session):
    """
    Handle incoming BODY_MOVE events from the client.
    event.value contains flattened Float32Arrays:
      { body: [...], leftHand: [...], rightHand: [...] }
    Each array contains 16 floats per joint (4x4 matrix) concatenated.
    """
    print(f"BODY_MOVE: key={event.key} ts={getattr(event, 'ts', None)}")

    if event.value:
      body_data = event.value.get("body", [])
      left_hand = event.value.get("leftHand", [])
      right_hand = event.value.get("rightHand", [])
      print(f"body: {len(body_data)} floats ({len(body_data) // 16} joints)")
      print(f"leftHand: {len(left_hand)} floats, rightHand: {len(right_hand)} floats")

  @app.spawn(start=True)
  async def main(session: VuerSession):
    """
    Add the Body element to the scene and start streaming body tracking data.
    """
    session.upsert @ Body(
      key="body_tracking",  # Optional unique identifier (default: "body_tracking")
      stream=True,  # Must be True to start streaming data
      leftHand=True,  # Include left hand tracking data
      rightHand=True,  # Include right hand tracking data
      fps=30,  # Send data at 30 frames per second
      hideBody=False,  # Hide body visualization but still stream data
      showFrame=True,  # Display coordinate frames at each joint
      frameScale=0.02,  # Scale of the coordinate frames or markers
    )

    # Keep the session alive
    while True:
      await sleep(1)


doc @ """

### Returned Data

The `BODY_MOVE` event sends a `BodyData` object containing flattened arrays of joint matrices:

```ts
type BodyData = {
  body: number[];      // Flattened array: 16 floats per joint × N body joints
  leftHand: number[];  // Flattened array: 16 floats per joint × 25 hand joints
  rightHand: number[]; // Flattened array: 16 floats per joint × 25 hand joints
};
```

Each joint's 4×4 transformation matrix is stored as 16 consecutive floats in column-major order.

---

### Matrix Format

All transforms are 4×4 matrices stored in a 16-element `Float32Array`, column-major order:

```
⌈  a0  a4  a8  a12 ⌉
|  a1  a5  a9  a13 |
|  a2  a6  a10 a14 |
⌊  a3  a7  a11 a15 ⌋
```

Refer to [MDN’s XR Rigid Transform documentation](https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform) for details.

---

### Body Joints Order

The `BODY_JOINT_KEYS` list follows the [WebXR Body Tracking Joints Specification](https://immersive-web.github.io/body-tracking/#xrbodyjoint-enum) and includes head, torso, arms, hands, and legs.

Example:

| Joint Name          | Example Index |
| ------------------- | ------------- |
| hips                | 0             |
| spine-lower         | 1             |
| head                | 6             |
| left-hand-thumb-tip | 23            |
| right-foot-ball     | 79            |

Full list: see `BODY_JOINT_KEYS` in the client code.

---



### Notes

**WebXR Specification Differences**
`XRHandJoint` (hand joints) and `XRBodyJoint` (body joints) have different origin points and axis orientations.

* For hand joints, the **-Y axis** is typically perpendicular to the palm, and the **-Z axis** runs along the bone toward the fingertip.
* For body joints (e.g., `hips`, `spine`, `shoulder`), the **-Y axis** is perpendicular to the skin surface, and the **-Z axis** runs along the bone away from the joint.
  In particular, the local coordinate systems of `wrist` and `hips` have explicit but different definitions in the WebXR specification.

"""

doc.flush()
