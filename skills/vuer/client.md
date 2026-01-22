---
description: VuerClient - Python client for connecting to Vuer servers
topics: [vuer, client, websocket, events, remote]
---

# VuerClient

Python client for connecting to a running Vuer server and sending events.

## Installation

```bash
pip install 'vuer[all]'
```

## Basic Usage

```python
import asyncio
from vuer import VuerClient
from vuer.events import ClientEvent

class MyEvent(ClientEvent):
    etype = "MY_EVENT"

async def main():
    async with VuerClient("ws://localhost:8012") as client:
        await client.send @ MyEvent(value={"data": 123})

asyncio.run(main())
```

## Custom Events

Define events by subclassing `ClientEvent` with an `etype` class attribute:

```python
from vuer.events import ClientEvent

class SetPositionEvent(ClientEvent):
    etype = "SET_POSITION"
    value = [0, 0, 0]  # optional default

class ControlEvent(ClientEvent):
    etype = "CONTROL"
```

## Sending Events

Both syntaxes are awaitable:

```python
# @ syntax
await client.send @ MyEvent(value="data")

# Parentheses syntax
await client.send(MyEvent(value="data"))
```

## Receiving Events

```python
# Single event with timeout
event = await client.recv(timeout=5.0)

# Iterate over events
async for event in client:
    print(f"Received: {event.etype}, value: {event.value}")
```

## Server-Side Handler

```python
from vuer import Vuer, VuerSession

app = Vuer()

@app.add_handler("MY_EVENT")
async def on_event(event, session: VuerSession):
    print(f"Received: {event.value}")
    session.upsert @ Box(key="box", position=event.value)

@app.spawn(start=True)
async def main(session: VuerSession):
    await session.forever()
```

## Complete Example

**server.py:**
```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Box

app = Vuer()

@app.add_handler("SET_POSITION")
async def on_position(event, session: VuerSession):
    session.upsert @ Box(args=[0.3, 0.3, 0.3], key="box", position=event.value)

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(Box(args=[0.3, 0.3, 0.3], key="box"))
    await session.forever()
```

**client.py:**
```python
import asyncio
import math
from vuer import VuerClient
from vuer.events import ClientEvent

class SetPositionEvent(ClientEvent):
    etype = "SET_POSITION"

async def main():
    async with VuerClient() as client:
        for i in range(200):
            t = i * 0.05
            x = math.sin(t) * 2
            y = 0.5 + math.sin(t * 2) * 0.3
            await client.send @ SetPositionEvent(value=[x, y, 0])
            await asyncio.sleep(0.016)

asyncio.run(main())
```

## API Reference

| Method | Description |
|--------|-------------|
| `VuerClient(uri)` | Create client (default: `ws://localhost:8012`) |
| `await client.connect()` | Connect to server |
| `await client.close()` | Close connection |
| `await client.send @ event` | Send ClientEvent |
| `await client.recv(timeout)` | Receive event |
| `client.connected` | Check connection status |
| `async with VuerClient() as client` | Context manager |
| `async for event in client` | Iterate events |
