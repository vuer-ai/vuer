
# Obj - Wavefront OBJ File Loader

## Overview

The `Obj` component loads 3D models from Wavefront OBJ files, one of the most widely supported 3D file formats. OBJ files are text-based and commonly used for static meshes with materials and textures.

**Use cases:**
- Loading 3D models from modeling software (Blender, Maya, 3ds Max)
- Architectural visualization
- Product visualization
- Static scene assets

## Basic Usage

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Obj

app = Vuer(static_root="./assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Obj(
            src="http://localhost:8012/static/model.obj",
            position=[0, 0, 0],
            key="obj-model",
        ),
    )
    
    await session.forever()
```

## Parameters

```python
Obj(
    # Required
    src="url/to/file.obj",        # URL to OBJ file
    
    # Optional
    mtl="url/to/file.mtl",        # URL to MTL (material) file
    
    # Appearance
    wireframe=False,               # Render as wireframe
    color="#ffffff",               # Override material color
    
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

## OBJ with Materials (MTL)

OBJ files often come with companion MTL (Material Template Library) files that define colors, textures, and material properties:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Obj

app = Vuer(static_root="./assets")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Obj(
            src="http://localhost:8012/static/textured_model.obj",
            mtl="http://localhost:8012/static/textured_model.mtl",
            position=[0, 0, 0],
            key="textured",
        ),
    )
    
    await session.forever()
```

**File structure:**
```
assets/
├── textured_model.obj
├── textured_model.mtl
└── texture.jpg  # Referenced by MTL file
```

## Load Event Detection

For large models, detect when loading is complete:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Obj

app = Vuer(static_root="./assets")

@app.add_handler("LOAD")
async def on_load(event, session: VuerSession):
    print(f"Model loaded: {event.value}")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        Obj(
            src="http://localhost:8012/static/large_model.obj",
            mtl="http://localhost:8012/static/large_model.mtl",
            position=[0, 0, 0],
            onLoad="Large model is ready",  # Triggers LOAD event
            key="large",
        ),
    )
    
    await session.forever()
```

**Output:**
```
Model loaded: Large model is ready
```

## Wireframe Mode

Visualize mesh topology:

```python
Obj(
    src="http://localhost:8012/static/model.obj",
    wireframe=True,
    color="#00ff00",  # Wireframe color
    position=[0, 0, 0],
    key="wireframe",
)
```

## Color Override

Override materials with a solid color:

```python
Obj(
    src="http://localhost:8012/static/model.obj",
    mtl="http://localhost:8012/static/model.mtl",
    color="#ff0000",  # Red, ignores MTL colors
    position=[0, 0, 0],
    key="red-model",
)
```

## Multiple Views

Display the same model with different styles:

```python
from vuer.schemas import DefaultScene, Obj

session.set @ DefaultScene(
    # Textured version
    Obj(
        src="http://localhost:8012/static/stairs.obj",
        mtl="http://localhost:8012/static/stairs.mtl",
        position=[-4, 0, 0],
        key="textured",
    ),
    
    # Wireframe version
    Obj(
        src="http://localhost:8012/static/stairs.obj",
        wireframe=True,
        color="#ffffff",
        position=[0, 0, 0],
        key="wireframe",
    ),
    
    # Solid color version
    Obj(
        src="http://localhost:8012/static/stairs.obj",
        color="#ff6600",
        position=[4, 0, 0],
        key="colored",
    ),
)
```

## Exporting from Blender

### Step 1: Select Object
1. Select your model in Blender
2. Go to **File → Export → Wavefront (.obj)**

### Step 2: Export Settings
```
☑ Selection Only
☑ Include UVs
☑ Write Materials
☑ Triangulate Faces
☑ Objects as OBJ Objects
☐ Apply Modifiers (optional)

Path Mode: Copy
```

### Step 3: Verify Files
Check that you have:
- `model.obj` - Geometry
- `model.mtl` - Materials
- `texture.png` - Textures (if any)

## Common Issues

### Missing Textures

**Problem**: Model loads but textures are missing/white.

**Causes & Solutions:**

1. **MTL file not loaded**
   ```python
   # Wrong: Missing mtl parameter
   Obj(src="model.obj")
   
   # Correct: Include mtl
   Obj(src="model.obj", mtl="model.mtl")
   ```

2. **Texture paths in MTL are absolute**
   
   Edit the MTL file to use relative paths:
   ```mtl
   # Wrong
   map_Kd /Users/name/Desktop/texture.jpg
   
   # Correct
   map_Kd texture.jpg
   ```

3. **Texture files not in static directory**
   
   Ensure all textures are in your `static_root`:
   ```python
   app = Vuer(static_root="./assets")
   ```

### Model Not Appearing

**Checklist:**
1. ✓ File exists and URL is correct
2. ✓ Model scale is reasonable (not too small/large)
3. ✓ Camera position can see the model
4. ✓ Model has faces (not just vertices)
5. ✓ Static server is running

**Test with scale:**
```python
Obj(
    src="model.obj",
    scale=[10, 10, 10],  # Make 10x larger
    key="test",
)
```

### Performance Issues

**Problem**: Large OBJ files load slowly or cause lag.

**Solutions:**

1. **Simplify mesh in Blender:**
   - Add **Decimate** modifier
   - Reduce face count by 50-90%
   - Export simplified version

2. **Use GLB/GLTF instead:**
   - Binary format, much faster
   - Better compression
   - See [Glb component](02_glb)

3. **Split into chunks:**
   - Break large scenes into multiple smaller OBJ files
   - Load progressively

## OBJ File Format

### Structure

```
# Vertices
v 0.0 0.0 0.0
v 1.0 0.0 0.0
v 1.0 1.0 0.0

# Texture coordinates
vt 0.0 0.0
vt 1.0 0.0
vt 1.0 1.0

# Normals
vn 0.0 0.0 1.0

# Faces (vertex/texture/normal indices)
f 1/1/1 2/2/1 3/3/1
```

### MTL File Format

```
newmtl Material
Ka 0.2 0.2 0.2      # Ambient color
Kd 0.8 0.8 0.8      # Diffuse color
Ks 0.5 0.5 0.5      # Specular color
Ns 100.0            # Specular exponent
map_Kd texture.jpg  # Diffuse texture
```

## Complete Example

```python
from pathlib import Path
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Obj
from vuer.schemas import AmbientLight, DirectionalLight

app = Vuer(static_root=Path(__file__).parent / "assets")

@app.add_handler("LOAD")
async def on_load(event, session: VuerSession):
    print(f"✓ {event.value}")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        # Main textured model
        Obj(
            src="http://localhost:8012/static/stairs.obj",
            mtl="http://localhost:8012/static/stairs.mtl",
            position=[-4.5, 1.5, -3.5],
            scale=[1, 1, 1],
            onLoad="Textured stairs loaded",
            key="textured-stairs",
        ),
        
        # Wireframe reference
        Obj(
            src="http://localhost:8012/static/stairs.obj",
            wireframe=True,
            color="#00ff00",
            position=[0, 1.5, 0],
            onLoad="Wireframe stairs loaded",
            key="wireframe-stairs",
        ),
        
        # Solid color version
        Obj(
            src="http://localhost:8012/static/stairs.obj",
            color="#ff6600",
            position=[4.5, 1.5, 3.5],
            onLoad="Colored stairs loaded",
            key="colored-stairs",
        ),
        
        up=[0, 1, 0],
        grid=True,
        
        rawChildren=[
            AmbientLight(key="ambient", intensity=0.5),
            DirectionalLight(key="sun", intensity=1.0, position=[5, 5, 5]),
        ],
    )
    
    await session.forever()
```

## Downloading Example Assets

```bash
# Create assets directory
mkdir -p assets

# Download OBJ model
wget https://github.com/vuer-ai/assets/raw/main/file_loaders/stairs_v1/textured.obj \
  -O assets/textured.obj

# Download MTL file
wget https://github.com/vuer-ai/assets/raw/main/file_loaders/stairs_v1/textured.mtl \
  -O assets/textured.mtl

# Download texture
wget https://github.com/vuer-ai/assets/raw/main/file_loaders/stairs_v1/textured_0_YV3hq55a.jpg \
  -O assets/textured_0_YV3hq55a.jpg
```

## OBJ vs Other Formats

| Feature | OBJ | GLB | URDF |
|---------|-----|-----|------|
| Format | Text | Binary | XML |
| Size | Large | Small | Medium |
| Loading speed | Slow | Fast | Medium |
| Materials | Yes (MTL) | Yes (embedded) | Yes |
| Animations | No | Yes | Yes (joints) |
| Best for | Static models | Optimized assets | Robots |

**Recommendation**: Use GLB for production, OBJ for development/debugging.

## Tips

1. **Optimize before export:**
   - Remove hidden faces
   - Merge duplicate vertices
   - Apply transforms

2. **Texture resolution:**
   - Use power-of-2 textures (512, 1024, 2048)
   - Compress large textures (use JPG, not PNG for photos)

3. **Test locally:**
   - Load OBJ in MeshLab or Blender first
   - Verify materials display correctly

4. **Use consistent units:**
   - Export with correct scale
   - 1 Blender unit = 1 meter in Vuer

## Next Steps

- [Glb](02_glb) - Modern binary format (faster, smaller)
- [TriMesh](02_trimesh) - Programmatic mesh creation
- [Materials and Textures](03_materials_and_textures) - Material properties
