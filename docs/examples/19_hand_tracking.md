
# Hand Tracking

The Hand component offers a way to stream the current
pose of the hand to the server. To use this mixed reality (XR)
feature, you need to setup vuer behind a SSL proxy. We usually
do so with [ngrok](https://ngrok.com/), which is a paid service,
or we can do so with [local tunnel](https://localtunnel.me/), 
which is free.

```{admonition} Warning
:class: warning
Please go through the relevant documentation of either ngrok
or localtunnel before preceding.
- **ngrok documentation:** [https://ngrok.com/docs](https://ngrok.com/docs)
- **local tunnel documentation:** [https://localtunnel.me](https://localtunnel.me)
```

Here is the what it looks like with the Vision Pro 

```{eval-rst}
.. video:: ../_static/19_hand_tracking.webm
    :alt: Hand Tracking Demo with Vuer and Vision Pro
    :autoplay:
    :nocontrols:
    :loop:
    :muted:
    :poster: ../_static/19_hand_tracking.png
    :preload: auto
    :width: 100%
```

## Hand API

You can get the full pose of the hands by listening to the `HAND_MOVE` event.
You can add flags `left` and `right` to specify which hand you want to track.


```{admonition} Warning
:class: warning
Make sure that you set the `stream` option to `True` to start streaming the 
hand movement! Otherwise the event will not be triggered. This is to avoid
unnecessary clogging up the uplink from the client.
```

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Hands
from asyncio import sleep

app = Vuer()


@app.add_handler("HAND_MOVE")
async def handler(event, session):
    print(f"Movement Event: key-{event.key}", event.value)


@app.spawn(start=True)
async def main(session: VuerSession):
    # Important: You need to set the `stream` option to `True` to start
    # streaming the hand movement.
    session.upsert @ Hands(stream=True, key="hands")

    while True:
        await sleep(1)
```


The returned data looks like the following:

```typescript
/**
 * Left and right pose are relative to the wrist transformations.
 */
export type HandsData = {
  left?: Float32Array;       // 25 * 16 values.
  right?: Float32Array;      // 25 * 16 values.
  leftState: HandState;
  rightState: HandState;
};

export type HandState = {
  pinch: boolean;
  squeeze: boolean;
  tap: boolean;

  pinchValue: number;
  squeezeValue: number;
  tapValue: number;
}
```

### Matrix format

All 4x4 transform matrices used in WebGL are stored in 16-element `Float32Arrays`.
The values are stored in the array in column-major order; that is, each column is
written into the array top-down before moving to the next column to the right and
writing it into the array. Therefore, for the array `[a0, a1, a2, …, a13, a14, a15]`, 
the matrix looks like this:

```
                                  ⌈  a0 a4 a8 a12  ⌉
                                  |  a1 a5 a9 a13  |
                                  |  a2 a6 a10 a14 |
                                  ⌊  a3 a7 a11 a15 ⌋
```

For details, refer to the MDN documentation on [XR Rigid Body Transformation](https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform/matrix)

### Hand Landmarks

We follow the [XR Hand | Hand Joints](https://developer.mozilla.org/en-US/docs/Web/API/XRHand#hand_joints) 
conventions, and return the landmarks in a single array of `25 * 16` values in 
the following order:

| Hand joint                        | Index |  Hand joint (continue)           | Index |
|---------------------------------  |-------| ---------------------------------|-------|
| wrist                             | 0     | middle-finger-phalanx-distal    | 13    | 
| thumb-metacarpal                  | 1     | middle-finger-tip               | 14    | 
| thumb-phalanx-proximal            | 2     | ring-finger-metacarpal          | 15    | 
| thumb-phalanx-distal              | 3     | ring-finger-phalanx-proximal    | 16    | 
| thumb-tip                         | 4     | ring-finger-phalanx-intermediate | 17   | 
| index-finger-metacarpal           | 5     | ring-finger-phalanx-distal      | 18    | 
| index-finger-phalanx-proximal     | 6     | ring-finger-tip                 | 19    | 
| index-finger-phalanx-intermediate | 7     | pinky-finger-metacarpal         | 20    | 
| index-finger-phalanx-distal       | 8     | pinky-finger-phalanx-proximal   | 21    | 
| index-finger-tip                  | 9     | pinky-finger-phalanx-intermediate | 22  | 
| middle-finger-metacarpal          | 10    | pinky-finger-phalanx-distal     | 23    | 
| middle-finger-phalanx-proximal    | 11    | pinky-finger-tip                | 24    | 
| middle-finger-phalanx-intermediate | 12   | -                               | -     | 
