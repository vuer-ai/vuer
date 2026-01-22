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
    async with VuerClient("ws://localhost:8012") as client:
        # Send event using @ syntax
        await client.send @ HelloEvent(value={"message": "Hi!"})

        # Or using parentheses
        await client.send(MoveBoxEvent(value={"position": [1, 0.5, 0]}))
        print("Events sent!")

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
client = VuerClient("ws://192.168.1.100:8012")
```

### Context Manager (Recommended)

```python
async with VuerClient("ws://localhost:8012") as client:
    await client.send(event)
```

### Manual Connection

```python
client = VuerClient()
await client.connect()
# ... do work ...
await client.close()
```

### Sending Events

Define custom event classes by setting `etype` as a class attribute:

```python
from vuer.events import ClientEvent

class MyEvent(ClientEvent):
    etype = "MY_EVENT"

# Using @ syntax (awaitable)
await client.send @ MyEvent(value={"data": 123})

# Using parentheses
await client.send(MyEvent(value={"data": 123}))
```

You can also set a default `value`:

```python
class SetPositionEvent(ClientEvent):
    etype = "SET_POSITION"
    value = [0, 0, 0]

# Uses default value
await client.send @ SetPositionEvent()

# Override value
await client.send @ SetPositionEvent(value=[1, 2, 3])
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

            await client.send @ SetPositionEvent(value=[x, y, 0])
            await asyncio.sleep(0.016)  # ~60 FPS

asyncio.run(main())
```

Run the server first, then run the client in a separate terminal to see the animated box.

## Tips

- Define custom events by subclassing `ClientEvent` with an `etype` class attribute
- The server handles events via `@app.add_handler("EVENT_TYPE")`
- Both `await client.send @ Event()` and `await client.send(Event())` are awaitable
- Use `client.connected` to check connection status
- Reconnect by calling `connect()` again if disconnected
