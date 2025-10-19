# Using Vuer in IPython/Jupyter

IPython and Jupyter notebooks have an async event loop already running, which means Vuer works seamlessly with a simple pattern.

## Quick Start (IPython/Jupyter)

The recommended approach - define your app in one cell, start it in another:

**Cell 1: Define your app**
```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box

app = Vuer()

@app.spawn()  # or @app.spawn
async def main(session: VuerSession):
    session.upsert @ Box(
        args=[0.2, 0.2, 0.2],
        position=[0, 0.1, 0],
        material=dict(color="red"),
        key="my-box",
    )
    await session.forever()
```

**Cell 2: Start the server**
```python
main.start()
```

**What happens:**
- Cell 2 detects IPython's event loop
- Schedules the server to start in the background
- Cell completes immediately
- Server runs in the background
- You can continue using other cells

## Common Patterns

### Updating the Scene Dynamically

Since the server runs in the background, you can update the scene from other cells:

```python
# Cell 1: Start server
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.upsert @ Box(
        args=[0.2, 0.2, 0.2],
        position=[0, 0, 0],
        material=dict(color="red"),
        key="box-1",
    )
    await session.forever()
```

```python
# Cell 2: Add more objects (run this in a separate cell)
from vuer.schemas import Sphere

# Get the session from the app
# Note: You'll need to store the session reference
```

### Interactive Updates

For interactive updates, store the session globally:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box
import asyncio

app = Vuer()
global_session = None

@app.spawn(start=True)
async def main(session: VuerSession):
    global global_session
    global_session = session

    session.upsert @ Box(
        args=[0.2, 0.2, 0.2],
        position=[0, 0, 0],
        material=dict(color="red"),
        key="box-1",
    )

    await session.forever()

# Later, in another cell:
# global_session.upsert @ Sphere(args=[0.1], position=[0.5, 0, 0], key="sphere-1")
```

## Differences from Regular Python

| Feature | Regular Python | IPython/Jupyter |
|---------|---------------|-----------------|
| Event Loop | Created by Vuer | Already running (managed by IPython) |
| `start=True` behavior | Blocks until server stops | Returns immediately, server runs in background |
| Cell execution | Script runs start-to-finish | Can run multiple cells while server runs |
| Stopping server | Ctrl+C | Restart kernel or close notebook |

## Troubleshooting

### RuntimeError: There is no current event loop

This error should no longer occur with the updated code. If you see it:

1. Make sure you have the latest version of Vuer
2. Try restarting your kernel
3. Use `start=True` instead of `start=False`

### Server doesn't respond

If the server starts but doesn't respond:

```python
# Check if server is running
import subprocess
result = subprocess.run(['lsof', '-i', ':8012'], capture_output=True, text=True)
print(result.stdout)
```

### Restarting the server

To restart the server, you need to restart the kernel:
- **Jupyter**: Kernel → Restart
- **IPython**: Type `exit()` and start a new session

Or use a different port:

```python
app = Vuer(port=8013)  # Use a different port
```
