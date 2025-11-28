# Session APIs - Managing Your Scene

## Overview

Vuer provides a set of intuitive APIs for managing your 3D scene dynamically. Understanding when to use each API is crucial for building efficient, interactive applications.

This guide covers the five core session APIs:
- `session.set` - Initialize the scene
- `session.upsert` - Update or insert elements
- `session.update` - Update existing elements only
- `session.add` - Add new elements
- `session.remove` - Remove elements

## Quick Reference

| API | Purpose | Behavior if element exists | Behavior if element missing |
|-----|---------|---------------------------|----------------------------|
| `session.set` | Initialize root scene | N/A (replaces entire scene) | N/A (creates new scene) |
| `session.upsert` | Ensure element exists | Updates it | Creates it |
| `session.update` | Modify existing only | Updates it | Does nothing (NOOP) |
| `session.add` | Add new elements | Error/duplicate | Creates it |
| `session.remove` | Delete elements | Removes it | Does nothing |

## 1. session.set - Initialize the Scene

**Purpose:** Set up the root scene structure. This should be called **once** at the beginning of your session.

**When to use:**
- At the start of your session to initialize the scene
- When you need to completely replace the entire scene structure

**Accepts:** Only `Scene` or `DefaultScene` objects

```python
from vuer import Vuer, VuerSession
from vuer.schemas import DefaultScene, Box, Sphere

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    # Initialize the scene once
    session.set @ DefaultScene(
        Box(key="box-1", args=[1, 1, 1], position=[0, 0, 0]),
        Sphere(key="sphere-1", args=[0.5], position=[2, 0, 0]),
    )

    await session.forever()
```

```{admonition} Important
:class: warning
`session.set` replaces the **entire scene tree** from the root. Use it only for initialization, not for incremental updates.
```

## 2. session.upsert - Update or Insert (Most Common)

**Purpose:** Ensure an element with a specific key exists with the given properties. If it exists, update it; if not, create it.

**When to use:**
- When you want to guarantee an element exists (most common use case)
- For dynamic, real-time updates where you don't know if the element was created yet
- When building interactive applications with frequent updates

**Behavior:**
- If element with the key exists → updates it
- If element doesn't exist → inserts it as new

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    # Initialize scene
    session.set @ DefaultScene()

    # Upsert elements - creates them if they don't exist
    session.upsert @ Box(
        key="dynamic-box",
        args=[1, 1, 1],
        position=[0, 0, 0],
        color="red"
    )

    # Later, update the same box (or create if removed)
    await session.sleep(1)
    session.upsert @ Box(
        key="dynamic-box",
        position=[2, 0, 0],  # Moved to new position
        color="blue"         # Changed color
    )

    await session.forever()
```

**Advanced: Targeting specific parents**

```python
# Upsert into a specific parent node
session.upsert(
    Box(key="child-box", args=[0.5, 0.5, 0.5]),
    to="parent-group-key"
)

# Upsert multiple elements at once
session.upsert @ [
    Box(key="box-1", position=[0, 0, 0]),
    Sphere(key="sphere-1", position=[2, 0, 0]),
    Cylinder(key="cyl-1", position=[4, 0, 0])
]
```

```{admonition} Recommendation
:class: tip
`session.upsert` is the **most commonly used** API for dynamic scene updates because it's safe and flexible.
```

## 3. session.update - Update Existing Only

**Purpose:** Modify existing elements without creating new ones. Safe for conditional updates.

**When to use:**
- When you want to update elements but **not** create them if they don't exist
- For defensive programming where you want to avoid accidental creation
- When you're unsure if an element exists

**Behavior:**
- If element exists → updates it
- If element doesn't exist → does nothing (NOOP)

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    # Initialize with a box
    session.set @ DefaultScene(
        Box(key="my-box", args=[1, 1, 1], position=[0, 0, 0])
    )

    # This updates the existing box
    session.update @ Box(key="my-box", color="blue")  # ✅ Works

    # This does nothing because "other-box" doesn't exist
    session.update @ Box(key="other-box", color="red")  # ❌ NOOP (no error)

    await session.forever()
```

**Real-world example: Safe property updates**

```python
# Only update position if the robot model has been loaded
session.update @ Urdf(
    key="robot",
    position=new_position,
    jointValues=new_joint_values
)
# If robot isn't loaded yet, this won't create a duplicate or error
```

```{admonition} Use Case
:class: info
Use `session.update` when you want **update-only behavior** without the risk of creating duplicate elements.
```

## 4. session.add - Add New Elements

**Purpose:** Explicitly add new elements to the scene. Assumes the element doesn't already exist.

**When to use:**
- When you're certain the element doesn't exist yet
- For one-time additions where you control the lifecycle
- When you want explicit "add" semantics in your code

**Behavior:**
- If element doesn't exist → adds it
- If element exists → behavior depends on implementation (may create duplicate or error)

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    # Initialize scene
    session.set @ DefaultScene()

    # Add new elements explicitly
    session.add @ Box(
        key="new-box",
        args=[1, 1, 1],
        position=[0, 0, 0]
    )

    # Add to specific parent
    session.add(
        Sphere(key="child-sphere", args=[0.3]),
        to="new-box"  # Add as child of the box
    )

    await session.forever()
```

**Adding multiple elements:**

```python
# Add multiple elements at once
session.add @ [
    Box(key="box-1", position=[0, 0, 0]),
    Box(key="box-2", position=[2, 0, 0]),
    Box(key="box-3", position=[4, 0, 0])
]
```

```{admonition} Note
:class: warning
Unlike `upsert`, `add` assumes the element is new. If you're not certain, use `upsert` instead.
```

## 5. session.remove - Delete Elements

**Purpose:** Remove elements from the scene by their keys.

**When to use:**
- When you need to delete specific elements
- For cleanup operations
- To remove temporary visualizations

**Behavior:**
- Removes elements matching the provided key(s)
- Safe to call even if elements don't exist

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    # Initialize scene with multiple boxes
    session.set @ DefaultScene(
        Box(key="box-1", position=[0, 0, 0]),
        Box(key="box-2", position=[2, 0, 0]),
        Box(key="box-3", position=[4, 0, 0])
    )

    # Remove a single element
    await session.sleep(1)
    session.remove @ "box-1"

    # Remove multiple elements
    await session.sleep(1)
    session.remove @ ["box-2", "box-3"]

    await session.forever()
```

**Practical example: Toggle visualization**

```python
async def toggle_grid(session: VuerSession, visible: bool):
    if visible:
        session.upsert @ Grid(key="main-grid")
    else:
        session.remove @ "main-grid"
```

## Common Patterns

### Pattern 1: Initialize then Update

The most common pattern: use `set` once, then `upsert` for updates.

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    # 1. Initialize scene once
    session.set @ DefaultScene(
        Box(key="robot-base", args=[1, 0.5, 1])
    )

    # 2. Continuously update elements
    for i in range(100):
        session.upsert @ Box(
            key="robot-base",
            position=[i * 0.1, 0, 0]  # Move along x-axis
        )
        await session.sleep(0.1)
```

### Pattern 2: Dynamic Element Management

Add and remove elements dynamically based on application state.

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene()

    active_markers = set()

    # Add markers as they appear
    for i, position in enumerate(detected_positions):
        key = f"marker-{i}"
        session.add @ Sphere(
            key=key,
            args=[0.1],
            position=position
        )
        active_markers.add(key)

    # Remove old markers
    for key in old_markers:
        session.remove @ key
        active_markers.discard(key)
```

### Pattern 3: Efficient Batch Updates

Update multiple elements efficiently.

```python
# Update multiple objects in one call
session.upsert @ [
    Box(key="box-1", position=positions[0]),
    Box(key="box-2", position=positions[1]),
    Box(key="box-3", position=positions[2]),
    Box(key="box-4", position=positions[3])
]
```

### Pattern 4: Safe Updates with Fallback

Use `update` for conditional changes, `upsert` when you need guarantees.

```python
# Try to update existing camera
session.update @ PerspectiveCamera(
    key="main-camera",
    position=[5, 5, 5]
)

# If camera might not exist, use upsert instead
session.upsert @ PerspectiveCamera(
    key="main-camera",
    position=[5, 5, 5],
    makeDefault=True
)
```

## Performance Considerations

### Efficient Updates

```{admonition} Performance Tip
:class: tip
`session.upsert` is more efficient than `session.set` for incremental updates because it only modifies specific elements instead of rebuilding the entire scene.
```

**❌ Inefficient:** Rebuilding entire scene

```python
# Bad: rebuilding scene every frame
for frame in frames:
    session.set @ DefaultScene(
        Box(key="animated-box", position=frame.position),
        Sphere(key="static-sphere", position=[0, 0, 0]),
        # ... many other static elements
    )
```

**✅ Efficient:** Updating only what changed

```python
# Good: initialize once, update only animated elements
session.set @ DefaultScene(
    Box(key="animated-box", position=[0, 0, 0]),
    Sphere(key="static-sphere", position=[0, 0, 0]),
    # ... other static elements
)

for frame in frames:
    session.upsert @ Box(
        key="animated-box",
        position=frame.position  # Only update position
    )
```

### Batch Operations

When updating multiple elements, batch them into a single operation:

```python
# Better: batch update
session.upsert @ [
    Box(key=f"box-{i}", position=[i, 0, 0])
    for i in range(10)
]

# Less efficient: individual updates
for i in range(10):
    session.upsert @ Box(key=f"box-{i}", position=[i, 0, 0])
```

## Summary

**Decision Tree:**

1. **Setting up initial scene?** → Use `session.set`
2. **Need element to exist with specific properties?** → Use `session.upsert` ⭐ (most common)
3. **Only update if exists, otherwise skip?** → Use `session.update`
4. **Adding definitely new elements?** → Use `session.add`
5. **Removing elements?** → Use `session.remove`

**Most Common Usage:**

```python
@app.spawn(start=True)
async def main(session: VuerSession):
    # Step 1: Initialize scene (once)
    session.set @ DefaultScene()

    # Step 2: Add/update elements dynamically (many times)
    while True:
        session.upsert @ Box(
            key="animated-box",
            position=compute_position(),
            rotation=compute_rotation()
        )
        await session.sleep(0.016)  # ~60 FPS
```

## See Also

- [Constructing a Scene](first_3d_scene/01_constructing_a_scene.md) - Learn about scene structure
- [Component Index](first_3d_scene/02_component_index.md) - All available components
- [Event Handling](../api/events.md) - Responding to user interactions