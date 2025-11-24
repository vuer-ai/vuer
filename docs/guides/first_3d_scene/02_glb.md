
# Glb - GLB/GLTF File Loader

## Overview

The `Glb` component loads 3D models from GLB (GL Transmission Format Binary) and GLTF files, the modern standard for 3D assets on the web. GLB is the binary version of GLTF, offering superior compression and faster loading than OBJ.

**Why GLB?**
- **Fast loading**: Binary format, up to 10x smaller than OBJ
- **Everything embedded**: Geometry, materials, textures in one file
- **Animation support**: Skeletal animations and morph targets
- **Industry standard**: Supported by all major 3D tools

**Use cases:**
- Production-ready 3D assets
- Animated characters and objects
- Optimized models for web delivery
- Game engine exports

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Glb

app = Vuer(static_root="./assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Glb(
            src="http://localhost:8012/static/model.glb",
            position=[0, 0, 0],
            key="glb-model",
        ),
    )
    
    await session.forever()
```

## Parameters

```python
Glb(
    # Required
    src="url/to/file.glb",        # URL to GLB or GLTF file
    
    # Transform
    position=[x, y, z],
    rotation=[rx, ry, rz],
    scale=[sx, sy, sz],
    
    # Events
    onLoad="message",              # Emits LOAD event when loaded
    
    # Interaction
    key="unique-id",
)
```

## GLB vs GLTF

| Format | Extension | Structure | Best For |
|--------|-----------|-----------|----------|
| **GLB** | `.glb` | Single binary file | Production, web delivery |
| **GLTF** | `.gltf` + files | JSON + separate binaries/textures | Development, debugging |

**Recommendation**: Use GLB for production (faster, smaller), GLTF for debugging (human-readable).

## Loading Remote Models

```python
# Sketchfab models
Glb(
    src="https://sketchfab.com/models/xxx/download",
    scale=[0.01, 0.01, 0.01],
    key="sketchfab",
)

# GitHub raw content
Glb(
    src="https://raw.githubusercontent.com/user/repo/main/model.glb",
    key="github",
)
```

## Load Event Detection

Detect when large models finish loading:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Glb

app = Vuer(static_root="./assets")

@app.add_handler("LOAD")
async def on_load(event, session: VuerSession):
    print(f"Model loaded: {event.value}")
    # Start animation or simulation here

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Glb(
            src="http://localhost:8012/static/character.glb",
            position=[0, 0, 0],
            onLoad="Character model ready",
            key="character",
        ),
    )
    
    await session.forever()
```

## Exporting from Blender

### Step 1: Prepare Model
1. Select your model
2. Apply all modifiers
3. Check that materials are assigned

### Step 2: Export GLB
1. **File → Export → glTF 2.0 (.glb/.gltf)**

2. **Export Settings:**
   ```
   Format: glTF Binary (.glb)
   
   Include:
   ☑ Selected Objects
   ☑ Apply Modifiers
   ☑ UVs
   ☑ Normals
   ☑ Materials
   ☐ Animations (if not needed)
   
   Transform:
   ☑ +Y Up
   
   Geometry:
   ☑ Compress
   ```

3. **Click "Export glTF 2.0"**

### Step 3: Verify
- File size should be significantly smaller than OBJ
- Single `.glb` file contains everything
- Open in Blender or online viewer to verify

## Common Issues

### Model Too Large/Small

**Problem**: Model appears tiny or huge.

**Solution**: Adjust scale
```python
# Model too small
Glb(src="model.glb", scale=[100, 100, 100])

# Model too large
Glb(src="model.glb", scale=[0.01, 0.01, 0.01])
```

**Better solution**: Re-export with correct scale in Blender.

### Wrong Orientation

**Problem**: Model is rotated incorrectly.

**Solution**: Apply rotation
```python
import numpy as np

Glb(
    src="model.glb",
    rotation=[np.pi/2, 0, 0],  # Rotate 90° around X
    key="rotated",
)
```

**Better solution**: Export with "+Y Up" in Blender.

### Materials Look Wrong

**Problem**: Materials appear too dark, too bright, or incorrect colors.

**Causes:**
1. **Missing lights**: Add lighting to scene
   ```python
   from vuer.schemas import AmbientLight, DirectionalLight
   
   rawChildren=[
       AmbientLight(key="ambient", intensity=0.5),
       DirectionalLight(key="sun", intensity=1.0, position=[5, 5, 5]),
   ]
   ```

2. **Wrong material type**: Ensure materials are PBR (Principled BSDF in Blender)

3. **Exposure too high/low**: Adjust tone mapping
   ```python
   Scene(toneMappingExposure=0.8, ...)
   ```

### File Not Loading

**Checklist:**
1. ✓ File is valid GLB (test in online viewer)
2. ✓ URL is correct and file is accessible
3. ✓ Static server is running
4. ✓ CORS is enabled for external URLs
5. ✓ File size is reasonable (< 50 MB recommended)

## Optimizing GLB Files

### 1. Reduce Polygon Count (Blender)

```
1. Select mesh
2. Add Modifier → Decimate
3. Set Ratio to 0.1-0.5 (10-50% of original)
4. Apply modifier
5. Export GLB
```

### 2. Compress Textures

```python
# Before export:
1. Select all images in Blender
2. Image → Resize → 50%
3. Save
4. Export GLB with "Compress" enabled
```

### 3. Use Online Tools

**glTF-Pipeline:**
```bash
npm install -g gltf-pipeline

# Compress GLB
gltf-pipeline -i input.glb -o output.glb -d
```

**glTF-Transform:**
```bash
npm install -g @gltf-transform/cli

# Optimize
gltf-transform optimize input.glb output.glb
```

Result: Often 50-90% size reduction!

## Multiple Models

Load multiple GLB files in one scene:

```python
from vuer.schemas import DefaultScene, Glb

session.set @ DefaultScene(
    # Character
    Glb(
        src="http://localhost:8012/static/character.glb",
        position=[0, 0, 0],
        key="character",
    ),
    
    # Environment
    Glb(
        src="http://localhost:8012/static/environment.glb",
        position=[0, 0, 0],
        scale=[10, 10, 10],
        key="environment",
    ),
    
    # Props
    Glb(
        src="http://localhost:8012/static/table.glb",
        position=[2, 0, 1],
        key="table",
    ),
)
```

## Complete Example

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Glb
from vuer.schemas import AmbientLight, DirectionalLight

app = Vuer(static_root="./assets")

@app.add_handler("LOAD")
async def on_load(event, session: VuerSession):
    print(f"✓ Loaded: {event.value}")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        # Main model
        Glb(
            src="http://localhost:8012/static/robot.glb",
            position=[0, 0, 0],
            scale=[1, 1, 1],
            rotation=[0, 0, 0],
            onLoad="Robot model loaded",
            key="robot",
        ),
        
        # Ground plane
        Glb(
            src="http://localhost:8012/static/ground.glb",
            position=[0, -0.1, 0],
            scale=[5, 1, 5],
            key="ground",
        ),
        
        up=[0, 1, 0],
        grid=False,
        toneMappingExposure=1.0,
        
        rawChildren=[
            AmbientLight(key="ambient", intensity=0.4),
            DirectionalLight(
                key="sun",
                intensity=1.0,
                position=[10, 10, 5],
                castShadow=True,
            ),
        ],
    )
    
    await session.forever()
```

## Free GLB Model Sources

1. **Sketchfab** (sketchfab.com)
   - Millions of free models
   - Download as GLB
   - Many with CC licenses

2. **Poly Pizza** (poly.pizza)
   - Free low-poly models
   - All CC0 (public domain)
   - Great for prototyping

3. **Quaternius** (quaternius.com)
   - Free game-ready models
   - CC0 license
   - Optimized for real-time

4. **Kenney** (kenney.nl)
   - Free game assets
   - Simple, clean models
   - Perfect for prototyping

## GLB File Format

### Structure

GLB is a binary container:
```
┌────────────────┐
│  Header (12B)  │  Magic: 0x46546C67 ("glTF")
├────────────────┤  Version: 2
│  JSON Chunk    │  Scene graph, materials, animations
├────────────────┤
│  Binary Chunk  │  Geometry, textures (base64 or binary)
└────────────────┘
```

### GLTF Alternative (JSON + Files)

```
model.gltf         # JSON scene description
model.bin          # Binary geometry data
texture1.jpg       # Texture files
texture2.png
```

**Use GLTF for:**
- Debugging (human-readable JSON)
- Version control (text diffs)
- Separate texture management

**Convert GLTF ↔ GLB:**
```bash
# GLTF to GLB
gltf-pipeline -i model.gltf -o model.glb

# GLB to GLTF
gltf-pipeline -i model.glb -o model.gltf -s
```

## Advanced: Animation Support

GLB files can contain animations. While basic Glb component doesn't expose animation controls, animations are preserved in the loaded model:

```python
# Animated character (animation auto-plays)
Glb(
    src="http://localhost:8012/static/animated_character.glb",
    key="animated",
)
```

For advanced animation control, see the full API documentation.

## Performance Comparison

**Loading Time Test** (5MB model):

| Format | File Size | Load Time | Parse Time |
|--------|-----------|-----------|------------|
| OBJ + MTL | 15 MB | 2.5s | 1.2s |
| GLTF | 8 MB | 1.8s | 0.8s |
| **GLB** | **5 MB** | **0.8s** | **0.3s** |

**Winner**: GLB is 3x faster!

## Tips

1. **Always use GLB for production:**
   - Smaller files = faster loading
   - One file = simpler deployment
   - Better compression

2. **Test in online viewers first:**
   - https://gltf-viewer.donmccurdy.com/
   - https://sandbox.babylonjs.com/
   - Verify before using in Vuer

3. **Optimize textures:**
   - Use JPG for color maps (not PNG)
   - Power-of-2 dimensions (512, 1024, 2048)
   - Compress with tools like Squoosh

4. **Bake lighting when possible:**
   - Pre-bake ambient occlusion
   - Bake shadows for static scenes
   - Reduces runtime performance cost

## Next Steps

- [Obj](02_obj) - Alternative text-based format
- [Urdf](02_urdf) - Robot models with articulation
- [Materials and Textures](03_materials_and_textures) - Material properties
