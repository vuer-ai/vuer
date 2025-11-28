
# Primitive Geometries

## Overview

Primitive geometries are the building blocks of 3D scenes. Vuer provides 14 fundamental geometric shapes that can be combined, transformed, and styled to create complex visualizations.

<iframe src="https://vuer.ai/?hideUI=true&reconnect=True&scene=hqN0YWelU2NlbmWja2V5oTCidXCTAAEAqmJnQ2hpbGRyZW6Qq3Jhd0NoaWxkcmVulISoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FgAAAAAAAAhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHkBqHBvc2l0aW9ukwMDA4WoY2hpbGRyZW6Qo3RhZ7FQZXJzcGVjdGl2ZUNhbWVyYaNrZXmycGVyc3BlY3RpdmUtY2FtZXJhq21ha2VEZWZhdWx0w6hwb3NpdGlvbpP8AgSDqGNoaWxkcmVukKN0YWetT3JiaXRDb250cm9sc6NrZXmrb3JiLWNvbnRyb2yoY2hpbGRyZW6YhqhjaGlsZHJlbpCjdGFnqEN5bGluZGVyo2tleahjeWxpbmRlcqRhcmdzlMs%2F6ZmZmZmZmss%2F6ZmZmZmZmss%2F4AAAAAAAACCocG9zaXRpb26Ty8AMAAAAAAAAyz%2FQAAAAAAAA%2F6xtYXRlcmlhbFR5cGWlYmFzaWOGqGNoaWxkcmVukKN0YWemU3BoZXJlo2tleahzcGhlcmUtMaRhcmdzk8s%2F5mZmZmZmZiAgqHBvc2l0aW9uk8vADAAAAAAAAMs%2F8ZmZmZmZmv%2BsbWF0ZXJpYWxUeXBlpWJhc2ljh6hjaGlsZHJlbpCjdGFnqk9jdGFoZWRyb26ja2V5qm9jdGFoZWRyb26kYXJnc5LLP%2BzMzMzMzM0AqHBvc2l0aW9uk8u%2F%2FMzMzMzMzcs%2F%2BAAAAAAAAMs%2F0zMzMzMzM6hyb3RhdGlvbpMAAMs%2F2SbpeNT99KxtYXRlcmlhbFR5cGWlYmFzaWOHqGNoaWxkcmVukKN0YWelVG9ydXOja2V5pXRvcnVzpGFyZ3OUyz%2FgAAAAAAAAyz%2FDMzMzMzMzIECocG9zaXRpb26TAMs%2F2ZmZmZmZmss%2F6ZmZmZmZmqhyb3RhdGlvbpPLP%2Fki0OVgQYkAAKxtYXRlcmlhbFR5cGWlYmFzaWOHqGNoaWxkcmVukKN0YWejQm94o2tleaNib3ikYXJnc5PLP%2FMzMzMzMzPLP%2FMzMzMzMzPLP%2FMzMzMzMzOocG9zaXRpb26Tyz%2FZmZmZmZmayz%2FgAAAAAAAA%2Fqhyb3RhdGlvbpMAAACsbWF0ZXJpYWxUeXBlpWJhc2ljhqhjaGlsZHJlbpCjdGFnplNwaGVyZaNrZXmoc3BoZXJlLTKkYXJnc5PLP%2BTMzMzMzM0gIKhwb3NpdGlvbpPLP%2FzMzMzMzM3LP%2BZmZmZmZmYArG1hdGVyaWFsVHlwZaViYXNpY4eoY2hpbGRyZW6Qo3RhZ6VQbGFuZaNrZXmlZmxvb3KkYXJnc5IUFKhwb3NpdGlvbpMAAACocm90YXRpb26Ty7%2F5HrhR64UfAACsbWF0ZXJpYWxUeXBlp2xhbWJlcnSGqGNoaWxkcmVukKN0YWelUGxhbmWja2V5qGJhY2tkcm9wpGFyZ3OSFBSocG9zaXRpb26TAAD9rG1hdGVyaWFsVHlwZadsYW1iZXJ0" width="100%" height="400px" frameborder="0"></iframe>

*Expanding our first scene: adding cylinder, spheres, octahedron, and torus to demonstrate different primitive shapes*

## Common Properties

All primitives share these common properties:

```python
from vuer.schemas import Box  # or any other primitive

Box(
    # Geometry-specific parameters
    args=[...],  # Varies by shape

    # Transform properties
    position=[x, y, z],      # Position in 3D space
    rotation=[rx, ry, rz],   # Rotation in radians around X, Y, Z axes
    scale=[sx, sy, sz],      # Scale factors (1 = original size)

    # Material properties
    materialType="standard",  # "basic", "lambert", "phong", "standard", "physical"
    material=dict(           # Material configuration
        color="#ff0000",     # Color must be inside material dict
        roughness=0.5,
        metalness=0.0,
        # ... see Materials guide
    ),

    # Interaction
    key="unique-id",         # Required for updates and events
    onClick=handler,         # Click event handler (client-side)
)
```

## Basic Primitives

### Box

A rectangular cuboid, the most versatile primitive.

**Args:** `[width, height, depth, widthSegments, heightSegments, depthSegments]`  
**Default:** `[1, 1, 1, 1, 1, 1]`

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        # Simple cube
        Box(
            args=[1, 1, 1],
            position=[0, 0.5, 0],
            materialType="standard",
            material=dict(color="red"),
            key="cube",
        ),

        # Flat platform
        Box(
            args=[5, 0.2, 5],
            position=[0, 0, 2],
            materialType="standard",
            material=dict(color="gray"),
            key="platform",
        ),
    )
    
    await session.forever()
```

**Use cases**: Buildings, platforms, walls, containers, UI buttons

### Sphere

A perfect sphere.

**Args:** `[radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength]`  
**Default:** `[1, 32, 16, 0, Math.PI*2, 0, Math.PI]`

```python
from vuer.schemas import Sphere

# Simple sphere
Sphere(
    args=[0.5],  # Just radius, use defaults for segments
    position=[0, 1, 0],
    materialType="standard",
    material=dict(color="blue"),
    key="ball",
)

# High-poly smooth sphere
Sphere(
    args=[0.5, 64, 64],  # More segments = smoother
    position=[2, 1, 0],
    materialType="standard",
    material=dict(color="blue"),
    key="smooth-ball",
)

# Hemisphere (half sphere)
Sphere(
    args=[0.5, 32, 16, 0, 6.28, 0, 1.57],  # thetaLength controls how much of sphere
    position=[4, 1, 0],
    materialType="standard",
    material=dict(color="blue"),
    key="hemisphere",
)
```

**Use cases**: Balls, planets, particles, markers, avatars

### Cylinder

A cylindrical shape with customizable top and bottom radii.

**Args:** `[radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength]`  
**Default:** `[1, 1, 1, 32, 1, False, 0, Math.PI*2]`

```python
from vuer.schemas import Cylinder

# Standard cylinder
Cylinder(
    args=[0.5, 0.5, 2],
    position=[0, 1, 0],
    materialType="standard",
    material=dict(color="green"),
    key="pillar",
)

# Cone (radiusTop=0)
Cylinder(
    args=[0, 0.5, 2],
    position=[2, 1, 0],
    materialType="standard",
    material=dict(color="orange"),
    key="cone-shape",
)

# Truncated cone
Cylinder(
    args=[0.2, 0.5, 2],
    position=[4, 1, 0],
    materialType="standard",
    material=dict(color="yellow"),
    key="truncated",
)
```

**Use cases**: Pillars, pipes, tree trunks, barrels

### Cone

A dedicated cone shape (easier than using Cylinder with radiusTop=0).

**Args:** `[radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength]`
**Default:** `[1, 1, 32, 1, False, 0, Math.PI*2]`

```python
from vuer.schemas import Cone

Cone(
    args=[0.5, 1.5],
    position=[0, 0.75, 0],
    rotation=[0, 0, 3.14],  # Point downward
    materialType="standard",
    material=dict(color="orange"),
    key="cone",
)
```

**Use cases**: Arrows, pointers, ice cream cones, traffic cones

### Capsule

A cylinder with hemispherical ends (pill shape).

**Args:** `[radius, length, capSegments, radialSegments]`
**Default:** `[1, 1, 4, 8]`

```python
from vuer.schemas import Capsule

Capsule(
    args=[0.3, 2],
    position=[0, 1, 0],
    materialType="standard",
    material=dict(color="purple"),
    key="pill",
)
```

**Use cases**: Character collision shapes, pills, capsules, links in chain

### Plane

A flat rectangular surface.

**Args:** `[width, height, widthSegments, heightSegments]`  
**Default:** `[1, 1, 1, 1]`

```python
from vuer.schemas import Plane

# Horizontal ground
Plane(
    args=[10, 10],
    position=[0, 0, 0],
    rotation=[-1.57, 0, 0],  # -π/2 to make horizontal
    materialType="standard",
    material=dict(color="gray"),
    key="ground",
)

# Vertical wall
Plane(
    args=[5, 3],
    position=[0, 1.5, -5],
    materialType="standard",
    material=dict(color="white"),
    key="wall",
)

# Two-sided plane
Plane(
    args=[2, 2],
    position=[0, 1, 0],
    materialType="standard",
    material=dict(
        color="blue",
        side=2,  # 0=front, 1=back, 2=both
    ),
    key="double-sided",
)
```

**Use cases**: Floors, walls, screens, cards, billboards

## 2D Primitives

### Circle

A flat circular disc.

**Args:** `[radius, segments, thetaStart, thetaLength]`  
**Default:** `[1, 32, 0, Math.PI*2]`

```python
from vuer.schemas import Circle

# Full circle
Circle(
    args=[1],
    position=[0, 0, 0],
    rotation=[-1.57, 0, 0],
    materialType="standard",
    material=dict(color="red"),
    key="disc",
)

# Pac-Man (partial circle)
Circle(
    args=[1, 32, 0, 5.5],  # thetaLength < 2π creates pac-man
    position=[2, 0, 0],
    rotation=[-1.57, 0, 0],
    materialType="standard",
    material=dict(color="yellow"),
    key="pacman",
)
```

**Use cases**: Targets, indicators, pac-man, pie charts

### Ring

A 2D donut shape (annulus).

**Args:** `[innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength]`
**Default:** `[0.5, 1, 32, 1, 0, Math.PI*2]`

```python
from vuer.schemas import Ring

Ring(
    args=[0.5, 1],
    position=[0, 0, 0],
    rotation=[-1.57, 0, 0],
    materialType="standard",
    material=dict(color="gold"),
    key="ring",
)
```

**Use cases**: Rings, halos, orbits, donuts (2D view)

## 3D Curved Primitives

### Torus

A 3D donut shape.

**Args:** `[radius, tube, radialSegments, tubularSegments, arc]`  
**Default:** `[1, 0.4, 12, 48, Math.PI*2]`

```python
from vuer.schemas import Torus

# Complete torus
Torus(
    args=[1, 0.3],
    position=[0, 1, 0],
    materialType="standard",
    material=dict(color="pink"),
    key="donut",
)

# Partial torus (C-shape)
Torus(
    args=[1, 0.3, 12, 48, 4.71],  # arc < 2π creates C-shape
    position=[3, 1, 0],
    materialType="standard",
    material=dict(color="cyan"),
    key="c-shape",
)
```

**Use cases**: Donuts, rings, loops, orbits

### TorusKnot

A mathematical knot shape.

**Args:** `[radius, tube, tubularSegments, radialSegments, p, q]`
**Default:** `[1, 0.4, 64, 8, 2, 3]`

- `p`: Number of times the knot winds around its rotational axis
- `q`: Number of times the knot winds around its central axis

```python
from vuer.schemas import TorusKnot

# Trefoil knot (classic)
TorusKnot(
    args=[1, 0.3, 100, 16, 2, 3],
    position=[0, 1, 0],
    materialType="standard",
    material=dict(color="purple"),
    key="trefoil",
)

# Cinquefoil knot
TorusKnot(
    args=[1, 0.3, 100, 16, 3, 5],
    position=[3, 1, 0],
    materialType="standard",
    material=dict(color="orange"),
    key="cinquefoil",
)
```

**Use cases**: Decorative objects, mathematical visualization, jewelry

## Platonic Solids

The five regular polyhedra where all faces, edges, and angles are identical.

### Tetrahedron (4 faces)

**Args:** `[radius, detail]`  
**Default:** `[1, 0]`

```python
from vuer.schemas import Tetrahedron

Tetrahedron(
    args=[1],
    position=[0, 1, 0],
    materialType="standard",
    material=dict(color="red"),
    key="tetra",
)
```

### Octahedron (8 faces)

```python
from vuer.schemas import Octahedron

Octahedron(
    args=[1],
    position=[0, 1, 0],
    materialType="standard",
    material=dict(color="green"),
    key="octa",
)
```

### Dodecahedron (12 faces)

```python
from vuer.schemas import Dodecahedron

Dodecahedron(
    args=[1],
    position=[0, 1, 0],
    materialType="standard",
    material=dict(color="blue"),
    key="dodeca",
)
```

### Icosahedron (20 faces)

```python
from vuer.schemas import Icosahedron

Icosahedron(
    args=[1],
    position=[0, 1, 0],
    materialType="standard",
    material=dict(color="purple"),
    key="icosa",
)
```

**Detail parameter**: Higher values subdivide faces for smoother appearance:
- `detail=0`: Sharp edges (default)
- `detail=1`: Slightly rounded
- `detail=2+`: Approaches sphere

**Use cases**: Dice, crystals, molecules, decorative objects, geodesic structures

## Complete Example

Here's the complete code for the showcase scene at the top of this page:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box, Sphere, Cylinder, Octahedron, Torus, Plane, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        Cylinder(
            args=[0.8, 0.8, 0.5, 32],
            position=[-3.5, 0.25, -1],
            materialType="basic",
            key="cylinder",
        ),

        Sphere(
            args=[0.7, 32, 32],
            position=[-3.5, 1.1, -1],
            materialType="basic",
            key="sphere-1",
        ),

        Octahedron(
            args=[0.9, 0],
            position=[-1.8, 1.5, 0.3],
            rotation=[0, 0, 0.393],
            materialType="basic",
            key="octahedron",
        ),

        Torus(
            args=[0.5, 0.15, 32, 64],
            position=[0, 0.4, 0.8],
            rotation=[1.571, 0, 0],
            materialType="basic",
            key="torus",
        ),

        Box(
            args=[1.2, 1.2, 1.2],
            position=[0.4, 0.5, -2],
            rotation=[0, 0, 0],
            materialType="basic",
            key="box",
        ),

        Sphere(
            args=[0.65, 32, 32],
            position=[1.8, 0.7, 0],
            materialType="basic",
            key="sphere-2",
        ),

        Plane(
            args=[20, 20],
            position=[0, 0, 0],
            rotation=[-1.57, 0, 0],
            materialType="lambert",
            key="floor",
        ),
        Plane(
            args=[20, 20],
            position=[0, 0, -3],
            materialType="lambert",
            key="backdrop",
        ),

        up=[0, 1, 0],
        grid=False,
    )

    await session.forever()
```

## Tips and Best Practices

1. **Segment count affects performance**: Higher segments = smoother but slower
   - Use low poly (8-16 segments) for distant/small objects
   - Use high poly (32-64 segments) for close-up hero objects

2. **Use appropriate primitives**: 
   - Box is fastest, use for prototyping
   - Sphere is expensive, consider Icosahedron for low-poly style

3. **Rotation is in radians**: 
   - 90° = π/2 ≈ 1.57
   - 180° = π ≈ 3.14
   - 360° = 2π ≈ 6.28

## Next Steps

- [Materials and Textures](03_materials_and_textures.md) - Make your primitives look realistic
- [Interactive Components](02_movable.md) - Make objects grabbable and movable
- [Lights](05_lights.md) - Illuminate your scene effectively
