from cmx import doc

doc @ """
# Hand Tracking

The Hand component offers a way to stream the current
pose of the hand to the server. 

```{admonition} Using ngrok to promote to <code>wss://</code>
:class: tip
You need to install `ngrok` to promote the local vuer server
from ws://localhost:8012 to wss://xxxx.ngrok.io, (note the double
w[ss] in the protocol), and pass it as a query parameter that 
looks like this:

      https://vuer.ai?ws=wss://xxxxx.ngrok.io

Note the repeated `ws` and then `wss://` in the query string.
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

The returned data looks like the following:

```typescript
/**
 * Left and right pose are relative to the wrist transformations.
 */
export type HandsData = {
  left?: Float32Array;       // 25 * 16 values. Wrist is always at origin.
  right?: Float32Array;      // 25 * 16 values. Wrist is always at origin.
  leftWrist?: Float32Array;  // 16 values.
  rightWrist?: Float32Array; // 16 values.
};
```

The coordinate convention is row-major, Y-up, and the values are in meters.
"""

doc @ """
## Getting Hand Movement

You can get the full pose of the hands by listening to the `HAND_MOVE` event.
You can add flags `left` and `right` to specify which hand you want to track.
"""

with doc, doc.skip:
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
        session.upsert @ Hands(fps=30, stream=True, key="hands")

        while True:
            await sleep(1)
