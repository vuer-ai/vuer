# Using Vuer with Claude Code

Vuer includes a **Claude Code skill** that teaches Claude how to use the library effectively. This enables Claude to help you build 3D visualizations, debug issues, and write Vuer code with accurate knowledge of the APIs.

## Quick Setup

Import the skill by running this slash command in Claude Code:

```
/plugin marketplace add vuer-ai/vuer
/plugin install vuer@vuer
```

For local development (if you cloned the vuer repo):

```
claude --plugin-dir /path/to/vuer
```

Once imported, Claude Code will automatically use the skill when working with Vuer code.

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

To get the latest skill, pull the latest vuer repo and re-import:

```bash
cd vuer
git pull
```

Then in Claude Code:

```
/plugin add /path/to/vuer/skills
```
