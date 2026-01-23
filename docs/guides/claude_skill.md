# Using Vuer with Claude Code

Vuer includes a **Claude Code skill** that teaches Claude how to use the library effectively. This enables Claude to help you build 3D visualizations, debug issues, and write Vuer code with accurate knowledge of the APIs.

## Quick Setup

Copy the `skills/` folder from the Vuer repository to your project:

```bash
# From your project directory
cp -r path/to/vuer/skills ./skills
```

Claude Code will automatically detect and use the skill when working with Vuer code.

## What the Skill Provides

The skill gives Claude knowledge about:

### Server & Session
- Creating and configuring `Vuer` server instances
- Using `@app.spawn` and `@app.bind` decorators
- Session APIs: `set`, `upsert`, `update`, `add`, `remove`
- Static file serving and SSL/TLS configuration

### Components
- **Primitives**: Box, Sphere, Cylinder, Capsule, Cone, Plane, etc.
- **Custom Geometry**: TriMesh, PointCloud with numpy arrays
- **Model Loaders**: URDF, GLB/GLTF, OBJ, PLY, STL
- **Gaussian Splatting**: Splat, LumaSplats, SparkSplats
- **Cameras**: PerspectiveCamera, OrthographicCamera, Frustum
- **Text**: Text, Text3D, Billboard
- **Interaction**: Movable, Gripper

### Image Handling
- `Img` for DOM images (supports URL, file path, numpy, PIL)
- `Image` for 3D scene image planes
- `ImageBackground` for camera-facing backgrounds
- Format options (PNG, JPEG) and quality settings

### Events
- Event handlers with `@app.add_handler("EVENT_TYPE")`
- Common events: CAMERA_MOVE, HAND_MOVE, OBJECT_MOVE, CLICK
- RPC methods: `grab_render`, `get_webxr_mesh`

### VR/AR (WebXR)
- Hand tracking with `Hands` component
- Motion controllers with `MotionController`
- AR mesh detection with `WebXRMesh`
- Haptic feedback

## Skill Structure

```
skills/
├── vuer.md           # Main overview and architecture
└── vuer/
    ├── components.md # Full component reference
    ├── events.md     # Event system and session APIs
    ├── examples.md   # Common patterns and recipes
    ├── server.md     # Server configuration
    └── xr.md         # VR/AR/WebXR features
```

## Example Prompts

Once the skill is set up, you can ask Claude things like:

- "Create a Vuer scene with a robot URDF and point cloud"
- "Add hand tracking to my VR scene"
- "Show me how to stream numpy images to the browser"
- "Help me animate a box in a circle"
- "Set up event handlers for camera movement"

## Updating the Skill

The skill files are markdown documents that you can customize. If you add new components or patterns to your project, consider updating the skill files so Claude stays informed.

To get the latest skill from Vuer:

```bash
# Update from the latest Vuer release
pip install --upgrade vuer
# Copy the updated skills
cp -r $(python -c "import vuer; print(vuer.__path__[0])")/../../skills ./skills
```

Or clone the repository directly:

```bash
git clone https://github.com/vuer-ai/vuer.git
cp -r vuer/skills ./skills
```
