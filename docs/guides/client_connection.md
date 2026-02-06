# Connecting a Python Client to Vuer

## Overview

Vuer provides a `VuerClient` class that allows you to connect to a running Vuer server from a separate Python process. This is useful for:

- Sending custom events to the server from external scripts
- Building distributed applications with multiple clients
- Testing and debugging Vuer event handlers
- Integrating with other Python applications

## Basic Setup

### Step 1: Start a Vuer Server with Event Handlers

First, start a Vuer server with handlers for client events:

```python
# server.py
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Box

app = Vuer()

@app.add_handler("HELLO")
async def on_hello(event, session: VuerSession):
    print(f"Received HELLO: {event.value}")
    # Update the scene in response
    session.upsert @ Box(
        args=[0.3, 0.3, 0.3],
        key="box",
        position=[0, 0.5, 0],
    )

@app.add_handler("MOVE_BOX")
async def on_move(event, session: VuerSession):
    pos = event.value.get("position", [0, 0, 0])
    session.upsert @ Box(args=[0.3, 0.3, 0.3], key="box", position=pos)

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene()
    print("Server ready, waiting for client events...")
    await session.forever()
```

Run the server:

```bash
python server.py
```

### Step 2: Connect with a Client

In a separate terminal, run a client that sends events to the server:

```python
# client.py
import asyncio
from vuer import VuerClient
from vuer.events import ClientEvent


class HelloEvent(ClientEvent):
    etype = "HELLO"


class MoveBoxEvent(ClientEvent):
    etype = "MOVE_BOX"


async def main():
    async with VuerClient(URI="ws://localhost:8012") as client:
        # Fire-and-forget with @ syntax (no await needed)
        client.send @ HelloEvent(value={"message": "Hi!"})

        # Awaitable with parentheses
        await client.send(MoveBoxEvent(value={"position": [1, 0.5, 0]}))
        print("Events sent!")
        await asyncio.sleep(1)

asyncio.run(main())
```

Run the client:

```bash
python client.py
```

View the result in the browser at [vuer.ai?ws=ws://localhost:8012](https://vuer.ai?ws=ws://localhost:8012).

## Client API Reference

### Creating a Client

```python
from vuer import VuerClient

# Default: connects to ws://localhost:8012
client = VuerClient()

# Custom URI
client = VuerClient(uri="ws://192.168.1.100:8012")

# With custom max message size (default 256MB)
client = VuerClient(uri="ws://localhost:8012", max_size=2**30)

# Disable SSL certificate verification (e.g., for ngrok with self-signed certs)
client = VuerClient(uri="wss://7.tcp.ngrok.io:26620", ssl_verify=False)
```

Configuration can also be set via environment variables:
- `VUER_CLIENT_URI`: WebSocket URI (default `ws://localhost:8012`)
- `WEBSOCKET_MAX_SIZE`: Maximum message size in bytes (default 256MB)
- `VUER_SSL_VERIFY`: Whether to verify SSL certificates (default `true`)

### Context Manager (Recommended)

```python
async with VuerClient(URI="ws://localhost:8012") as client:
    await client.send(event)
```

### Manual Connection

```python
client = VuerClient()
await client.connect()
# ... do work ...
await client.close()
```

### INIT Event (Automatic)

When a `VuerClient` connects, it automatically sends an `INIT` event with system information. This allows the server to identify the client type and environment.

The INIT event includes:

```python
{
    # Common fields (shared with browser client)
    "client": "python",            # Always "python" for VuerClient
    "clientVersion": "0.1.x",      # Library version
    "timezone": "America/Los_Angeles",
    "timezoneOffset": 480,

    # Python-specific fields
    "pythonVersion": "3.11.13",
    "platform": "Darwin",          # or "Linux", "Windows"
    "platformVersion": "24.2.0",
    "machine": "arm64",
}
```

On the server, you can await this event to identify the client:

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    # Wait for the INIT event
    e = await session.till("INIT")

    if e.value.get('client') == 'python':
        print(f"Python client v{e.value.get('clientVersion')}")
    else:
        print(f"Browser client: {e.value.get('userAgent')}")

    session.set @ DefaultScene()
    await session.forever()
```

### Sending Events

Define custom event classes by setting `etype` as a class attribute:

```python
from vuer.events import ClientEvent

class MyEvent(ClientEvent):
    etype = "MY_EVENT"

# Fire-and-forget with @ syntax (no await needed)
client.send @ MyEvent(value={"data": 123})

# Awaitable with parentheses
await client.send(MyEvent(value={"data": 123}))
```

You can also set a default `value`:

```python
class SetPositionEvent(ClientEvent):
    etype = "SET_POSITION"
    value = [0, 0, 0]

# Uses default value (fire-and-forget)
client.send @ SetPositionEvent()

# Override value (awaitable)
await client.send(SetPositionEvent(value=[1, 2, 3]))
```

### Receiving Events

```python
# Single event with timeout
event = await client.recv(timeout=5.0)

# Iterate over events
async for event in client:
    print(f"Received: {event.etype}")
```

## Complete Example: Remote Control

Here's a complete example where a client remotely controls an animated box using a custom event class:

**server.py** - Runs the Vuer server:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Box

app = Vuer()

@app.add_handler("SET_POSITION")
async def on_position(event, session: VuerSession):
    pos = event.value["position"]
    session.upsert @ Box(args=[0.3, 0.3, 0.3], key="box", position=pos)

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Box(args=[0.3, 0.3, 0.3], key="box", position=[0, 0.5, 0]),
    )
    print("Server started. Run client.py in another terminal.")
    await session.forever()
```

**client.py** - Sends animated position updates with a custom event class:

```python
import asyncio
import math
from vuer import VuerClient
from vuer.events import ClientEvent


class SetPositionEvent(ClientEvent):
    etype = "SET_POSITION"


async def main():
    async with VuerClient() as client:
        # Animate the box by sending position updates
        for i in range(200):
            t = i * 0.05
            x = math.sin(t) * 2
            y = 0.5 + math.sin(t * 2) * 0.3

            client.send @ SetPositionEvent(value={"position": [x, y, 0]})
            await asyncio.sleep(0.016)  # ~60 FPS

asyncio.run(main())
```

Run the server first, then run the client in a separate terminal to see the animated box.

## Tips

- Define custom events by subclassing `ClientEvent` with an `etype` class attribute
- The server handles events via `@app.add_handler("EVENT_TYPE")`
- Use `client.send @ Event()` for fire-and-forget (no await needed)
- Use `await client.send(Event())` when you need to wait for the send to complete
- Use `client.connected` to check connection status
- Reconnect by calling `connect()` again if disconnected
- Configure via environment variables: `VUER_CLIENT_URI`, `WEBSOCKET_MAX_SIZE`, `VUER_SSL_VERIFY`
- Use `ssl_verify=False` when connecting through tunnels with self-signed certificates (e.g., ngrok TCP tunnels)
- You can also pass any `websockets.connect()` kwargs (e.g., a custom `ssl=` context) through the constructor
