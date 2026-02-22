# Bvh

The `Bvh` component loads and displays BVH (Biovision Hierarchy) motion capture data. BVH is a widely-used format for skeletal animation, encoding a skeleton hierarchy along with per-frame joint rotations.

**Why BVH?**
- **Motion capture standard**: Industry-standard format for motion capture data
- **Human-readable**: Text-based format that's easy to inspect and edit
- **Animation-focused**: Designed specifically for skeletal animation
- **Widely supported**: Compatible with Blender, Maya, MotionBuilder, and more

## Basic Usage

A minimal example that loads and plays a BVH motion capture file:

```python
from vuer import Vuer
from vuer.schemas import DefaultScene, Bvh, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(sess):
    sess.set @ DefaultScene(
        Bvh(
            src="https://example.com/walk.bvh",
            playAnimation=True,
            key="bvh-model",
        ),
        bgChildren=[
            OrbitControls(key="OrbitControls")
        ],
    )

    await sess.forever()
```

## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the model |
| `src` | str | - | URL or path to the BVH file |
| `text` | str | - | BVH file content as string (alternative to src) |
| `playAnimation` | bool | `True` | Auto-play the motion capture animation |
| `animationIndex` | int | `0` | Index of the animation clip to play |
| `animationSpeed` | float | `1.0` | Speed multiplier for animation playback |
| `boneRadius` | float | - | Radius of bone cylinder visualizations |
| `jointColor` | str | - | Color of joint-sphere markers |
| `label` | bool | `False` | Show joint name labels |

## Loading from Text

You can also load BVH data directly from a string:

```python
bvh_content = """HIERARCHY
ROOT Hips
{
    OFFSET 0 0 0
    CHANNELS 6 Xposition Yposition Zposition Zrotation Xrotation Yrotation
    ...
}
MOTION
Frames: 100
Frame Time: 0.0333333
...
"""

Bvh(text=bvh_content, playAnimation=True, key="bvh-from-text")
```

## Customizing Visualization

Control how the skeleton is rendered:

```python
Bvh(
    src="https://example.com/dance.bvh",
    playAnimation=True,
    animationSpeed=0.5,      # Half speed playback
    boneRadius=0.02,         # Thicker bones
    jointColor="#ff6600",    # Orange joints
    label=True,              # Show joint names
    key="styled-bvh",
)
```
