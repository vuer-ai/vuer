
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

You can access the full body pose by listening to the `BODY_TRACKING_MOVE` event.
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

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Body
from asyncio import sleep

app = Vuer()


@app.add_handler("BODY_TRACKING_MOVE")
async def on_body_move(event, session):
    """
    Handle incoming BODY_TRACKING_MOVE events from the client.
    event.value should be a BodiesData dictionary:
      { jointName: { matrix: Float32Array-like, ... }, ... }
    """
    print(f"BODY_TRACKING_MOVE: key={event.key} ts={getattr(event, 'ts', None)}")

    # Example: print only the first joint to avoid large output
    if event.value:
        first_joint, first_data = next(iter(event.value.items()))
        print(
            first_joint,
            "matrix_len=",
            len(first_data.get("matrix", [])) if first_data else None,
        )


@app.spawn(start=True)
async def main(session: VuerSession):
    """
    Add the Body element to the scene and start streaming body tracking data.
    """
    session.upsert(
        Body(
            key="body_tracking",  # Optional unique identifier (default: "body_tracking")
            stream=True,  # Must be True to start streaming data
            fps=30,  # Send data at 30 frames per second
            hideIndicate=False,  # Hide joint indicators in the scene but still stream data
            showFrame=False,  # Display coordinate frames at each joint
            frameScale=0.02,  # Scale of the coordinate frames or markers
        ),
        to="children",
    )

    # Keep the session alive
    while True:
        await sleep(1)
```


### Returned Data

The `BODY_TRACKING_MOVE` event sends a `BodiesData` object containing **all joints** and their transform matrices:

```ts
export type BodiesData = {
  [jointName: string]: {
    matrix: Float32Array; // 4x4 matrix in column-major order
  };
};
```

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


