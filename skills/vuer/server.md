---
description: Vuer server configuration and lifecycle management
topics: [vuer, server, websocket, configuration]
---

# Vuer Server

## Creating the Server

```python
from vuer import Vuer

app = Vuer(
    port=8012,              # WebSocket port (default: 8012)
    static_root=".",        # Static file directory
    cors="*",               # CORS configuration
    free_port=False,        # Auto-kill process on port
    verbose=False,          # Print settings on startup
)
```

## Environment Variables

- `VUER_PORT` - Server port
- `VUER_DOMAIN` - Client domain (default: https://vuer.ai)
- `VUER_CORS` - CORS allowed origins
- `VUER_STATIC_ROOT` - Static file root directory

## Decorators

### @app.spawn - Main Handler

```python
@app.spawn(start=True)  # start=True auto-starts server
async def main(session: VuerSession):
    session.set @ DefaultScene()
    await session.forever()
```

Deferred start:
```python
@app.spawn()  # start=False by default
async def main(session: VuerSession):
    ...

# Later
main.start()
```

### @app.bind - Generator Handler

For frame-by-frame streaming:

```python
@app.bind(start=True)
async def handler(session: VuerSession):
    session.set @ DefaultScene()
    while True:
        event = yield Frame(Update(...), frame_rate=60)
```

## Event Handlers

```python
@app.add_handler("CAMERA_MOVE")
async def on_camera(event: ClientEvent, session: VuerSession):
    print(event.value)  # Camera data
```

Common event types:
- `CAMERA_MOVE` - Camera position/rotation changes
- `HAND_MOVE` - Hand tracking data
- `CLICK` - Element clicks
- `UPLOAD` - File uploads (returns PIL.Image)

## Custom Routes

```python
app.add_route("/api/status", lambda: "OK", method="GET")
```

## Static Files

Files in `static_root` are served at `/static/`:
```python
app = Vuer(static_root="./assets")
# Access at: /static/model.glb
```

## SSL/TLS (for VR)

VR headsets require secure WebSocket (wss://). Use ngrok:

```bash
ngrok http 8012
# Visit: https://vuer.ai?ws=wss://xxxx.ngrok.io
```

Or configure SSL directly:
```python
app = Vuer(
    cert="/path/to/cert.pem",
    key="/path/to/key.pem",
)
```

## Lifecycle

```python
app = Vuer()

@app.spawn()
async def main(session: VuerSession):
    # Session starts when client connects
    session.set @ DefaultScene()

    # Keep session alive
    await session.forever()

    # Or close programmatically
    session.socket.close()

app.start()  # Blocking call
```
