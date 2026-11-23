# Quickstart

## Requirements

- Python **3.10** or later.
- A recent web browser. For VR, use a headset browser with WebXR.

## Install

```bash
pip install vuer
```

> **Note:** Until the release, install the branch: `pip install "vuer @ git+https://github.com/vuer-ai/vuer@main"`.

## Start a server

```python file="hello.py"
from asyncio import sleep

from vuer import Vuer, VuerSession
from vuer.schemas import Box, Scene

app = Vuer()


@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(Box(args=[0.2, 0.2, 0.2], key="box"))
    while True:
        await sleep(1.0)
```

```bash
python hello.py
```

The server prints two links: one for this computer and one for your local
network. Open a link in the browser. The server also serves a bundled client
at `http://localhost:8012`.

## Send updates

Use the session operations. Each operation is one event on the WebSocket.

```python
from vuer.schemas import Box

session.update @ Box(key="box", position=[0, 0.5, 0])
session.upsert @ Box(key="box2", args=[0.1, 0.1, 0.1])
session.remove @ "box2"
```

## Share the scene with other people

Start the server with `auth=True` and give each person a link. Refer to
[access tokens and roles](reference/transport-auth.md).

```python
app = Vuer(auth=True)
```

## Next steps

- [Wire protocol 2](reference/transport-protocol.md) explains how arrays go on the wire.
- [Streaming queues](reference/transport-streaming.md) explains how to stream frames to slow clients.
- [Library mode](reference/client-library-mode.md) shows the client in your own React app.
