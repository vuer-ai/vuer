# Vuer Quickstart Guide

## Installation from Source

```bash
# 1. Clone the repository
git clone https://github.com/vuer-ai/vuer.git
cd vuer

# 2. Install with all dependencies
pip install -e '.[all]'
```

## Quick Test

Create and run a simple scene:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box, OrbitControls, PerspectiveCamera

app = Vuer()

@app.spawn()
async def main(session: VuerSession):
  print("✓ Session started!")

  session.set @ Scene(
    Box(
      args=[0.2, 0.2, 0.2],
      position=[0, 0, 0],
      material=dict(color="red"),
      key="my-box",
    ),
    bgChildren=[
      # Camera positioned to view the scene
      PerspectiveCamera(
        position=[1, 1, 1],
        lookAt=[0, 0, 0],
        fov=75,
        near=0.1,
        far=1000,
        makeDefault=True,
        key="camera",
      ),
      # Interactive controls for rotating/panning/zooming
      OrbitControls(
        enableDamping=True,
        enablePan=True,
        enableRotate=True,
        enableZoom=True,
        makeDefault=True,
        maxPolarAngle=135,
        minPolarAngle=0,
        key="controls",
      ),
    ],
  )

  print("✓ Scene created! Server running...")
  await session.forever()

main.start()  # Start the server
```

**Expected output:**
```
Serving file:///path/to/vuer at /static
Visit: https://vuer.ai?ws=ws://localhost:8012
✓ Session started!
```

**Then:**
1. Open the URL in your browser: https://vuer.ai?ws=ws://localhost:8012
2. You should see a red 3D box!
3. **Interact with the scene:**
   - **Left-click + drag** to rotate the camera
   - **Right-click + drag** to pan
   - **Scroll** to zoom in/out
4. Press Ctrl+C to stop the server

**What the components do:**
- `PerspectiveCamera` - Defines the viewpoint (positioned at [1, 1, 1] looking at origin)
- `OrbitControls` - Enables mouse/touch controls for rotating, panning, and zooming
- `bgChildren` - Places controls and camera in the background layer (not part of the 3D scene)

## Verify Installation

```bash
python -c "
from vuer import Vuer, VuerSession
print('✓ Vuer imported successfully')
print('✓ session.forever() available:', hasattr(VuerSession, 'forever'))
"
```

## Troubleshooting

### Import Error: "cannot import name 'Vuer'"

```bash
# Clean up and reinstall
pip uninstall -y vuer
rm -rf vuer/  # Remove any old vuer/ directory in project root
pip install -e '.[all]'
```

### Port Already in Use

```bash
# Kill process on port 8012
lsof -ti:8012 | xargs kill -9

# Or use a different port
cat > test_custom_port.py << 'EOF'
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box, OrbitControls, PerspectiveCamera

app = Vuer(port=8013)  # Use port 8013 instead

@app.spawn()
async def main(session: VuerSession):
    session.set @ Scene(
        Box(args=[0.2, 0.2, 0.2], material=dict(color="blue"), key="box"),
        bgChildren=[
            PerspectiveCamera(position=[1, 1, 1], lookAt=[0, 0, 0], makeDefault=True, key="cam"),
            OrbitControls(makeDefault=True, key="controls"),
        ],
    )
    await session.forever()

main.start()
EOF

python test_custom_port.py
# Visit: https://vuer.ai?ws=ws://localhost:8013
```

### Using in IPython/Jupyter

The same code works in IPython/Jupyter! Just split the decorator and `.run()` into separate cells:

```python
# Cell 1: Define the app
from vuer import Vuer, VuerSession
from vuer.schemas import Box

app = Vuer()

@app.spawn()
async def main(session: VuerSession):
    session.upsert @ Box(
        args=[0.2, 0.2, 0.2],
        material=dict(color="red"),
        key="box",
    )
    await session.forever()
```

```python
# Cell 2: Start the server
main.start()
```

**In IPython/Jupyter:**
- Cell 2 completes immediately
- Server runs in the background
- Continue using other cells while server runs
- To stop: restart the kernel

**See:** `docs/tutorials/basics/ipython_jupyter.md` for more details

## Next Steps

- Read the tutorials in `docs/tutorials/basics/`
- Try the examples in `examples/`
- Build your own 3D applications!
