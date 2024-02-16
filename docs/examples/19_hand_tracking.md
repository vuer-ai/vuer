
# Hand Tracking

The Hand component offers a way to stream the current
pose of the hand to the server. 

```{admonition} Using ngrok to promote to `wss://`
:class: tip
You need to install `ngrok` to promote the local vuer server
to wss://xxxx.ngrok.io, and pass it as a query parameter that looks like this

https://vuer.ai?ws=wss://xxxxx.ngrok.io
```


## Getting Hand Movement

You can get the full pose of the hands by listening to the `HAND_MOVE` event.
You can add flags `left` and `right` to specify which hand you want to track.

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
    session.upsert @ Hands(fps=30, stream=True, key="hands")

    while True:
        await sleep(1)
```
