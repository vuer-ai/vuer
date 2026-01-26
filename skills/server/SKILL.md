---
name: server
description: Vuer server configuration, decorators, event handlers, SSL/TLS for VR (plugin:vuer@vuer)
---

# Vuer Server

## Configuration

```python
app = Vuer(
    port=8012,              # WebSocket port
    static_root=".",        # Static files at /static/
    cors="*",               # CORS origins
    free_port=False,        # Auto-kill process on port
)
```

Environment variables: `VUER_PORT`, `VUER_DOMAIN`, `VUER_CORS`, `VUER_STATIC_ROOT`

## Decorators

```python
# Main handler (start=True auto-starts)
@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene()
    await session.forever()

# Generator for streaming
@app.bind(start=True)
async def handler(session: VuerSession):
    while True:
        yield Frame(Update(...), frame_rate=60)
```

## Event Handlers

```python
@app.add_handler("CAMERA_MOVE")
async def on_camera(event: ClientEvent, session: VuerSession):
    print(event.value)
```

Events: `CAMERA_MOVE`, `HAND_MOVE`, `CLICK`, `UPLOAD`, `OBJECT_MOVE`

## SSL for VR

VR requires wss://. Use ngrok:

```bash
ngrok http 8012
# Visit: https://vuer.ai?ws=wss://xxxx.ngrok.io
```

Or configure SSL:
```python
app = Vuer(cert="/path/to/cert.pem", key="/path/to/key.pem")
```
