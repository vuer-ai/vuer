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
    async with VuerClient(URI="ws://localhost:8012") as client:
        # Fire-and-forget with @ syntax (no await needed)
        client.send @ MyEvent(value={"data": 123})

asyncio.run(main())
```

## Configuration

```python
# Via constructor
client = VuerClient(URI="ws://localhost:8012", WEBSOCKET_MAX_SIZE=2**30)

# Via environment variables
# VUER_CLIENT_URI=ws://localhost:8012
# WEBSOCKET_MAX_SIZE=268435456  (256MB default)
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

Two syntaxes with different semantics:

```python
# Fire-and-forget with @ syntax (no await needed)
client.send @ MyEvent(value="data")

# Awaitable with parentheses (waits for send to complete)
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
            client.send @ SetPositionEvent(value=[x, y, 0])
            await asyncio.sleep(0.016)

asyncio.run(main())
```

## API Reference

| Method | Description |
|--------|-------------|
| `VuerClient(URI, WEBSOCKET_MAX_SIZE)` | Create client |
| `await client.connect()` | Connect to server |
| `await client.close()` | Close connection |
| `client.send @ event` | Fire-and-forget send (no await) |
| `await client.send(event)` | Awaitable send |
| `await client.recv(timeout)` | Receive event |
| `client.connected` | Check connection status |
| `async with VuerClient() as client` | Context manager |
| `async for event in client` | Iterate events |

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `VUER_CLIENT_URI` | `ws://localhost:8012` | WebSocket URI |
| `WEBSOCKET_MAX_SIZE` | `268435456` (256MB) | Max message size |
