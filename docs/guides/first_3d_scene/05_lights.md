# 3.1.5 Lights

## Overview

Lighting transforms flat 3D scenes into vibrant, realistic visuals. In the previous chapter, we used basic lighting with `AmbientLight` and `DirectionalLight`. This chapter will show you how to upgrade that simple setup to professional, cinematic lighting like this:

<iframe src="https://vuer.ai/?grid=False&collapseMenu=True&initCamPos=-4%2C2%2C4&reconnect=True&scene=h6N0YWelU2NlbmWja2V5oTCidXCTAAEApGdyaWTCqmJnQ2hpbGRyZW6Qq3Jhd0NoaWxkcmVulYqoY2hpbGRyZW6Qo3RhZ6lTcG90TGlnaHSja2V5qWtleS1saWdodKhwb3NpdGlvbpP7AwWpaW50ZW5zaXR5UKVhbmdsZcs%2F4AAAAAAAAKhwZW51bWJyYcs%2F6ZmZmZmZmqVjb2xvcqcjZmY5ZjVhqmNhc3RTaGFkb3fDoioqg65zaGFkb3ctbWFwU2l6ZZLNCADNCACyc2hhZG93LWNhbWVyYS1uZWFyyz%2FgAAAAAAAAsXNoYWRvdy1jYW1lcmEtZmFyMoqoY2hpbGRyZW6Qo3RhZ6lTcG90TGlnaHSja2V5qXJpbS1saWdodKhwb3NpdGlvbpMEBfqpaW50ZW5zaXR5MqVhbmdsZcs%2F4zMzMzMzM6hwZW51bWJyYcs%2F7mZmZmZmZqVjb2xvcqcjNWFhMGZmqmNhc3RTaGFkb3fDoioqg65zaGFkb3ctbWFwU2l6ZZLNCADNCACyc2hhZG93LWNhbWVyYS1uZWFyyz%2FgAAAAAAAAsXNoYWRvdy1jYW1lcmEtZmFyMoioY2hpbGRyZW6Qo3RhZ61SZWN0QXJlYUxpZ2h0o2tleapmaWxsLWxpZ2h0qHBvc2l0aW9ukwYCBKlpbnRlbnNpdHkIpXdpZHRoBKZoZWlnaHQEpWNvbG9ypyNlOGQ1ZmaFqGNoaWxkcmVukKN0YWesQW1iaWVudExpZ2h0o2tleadhbWJpZW50qWludGVuc2l0ecs%2FwzMzMzMzM6Vjb2xvcqcjNGE1NTY4g6hjaGlsZHJlbpCjdGFnrU9yYml0Q29udHJvbHOja2V5q29yYi1jb250cm9sqGNoaWxkcmVumIioY2hpbGRyZW6Qo3RhZ6hDeWxpbmRlcqNrZXmubWF0dGUtY3lsaW5kZXKkYXJnc5TLP%2BmZmZmZmZrLP%2BmZmZmZmZrLP%2BAAAAAAAAAgqHBvc2l0aW9uk8vADAAAAAAAAMs%2F0AAAAAAAAP%2BsbWF0ZXJpYWxUeXBlqHN0YW5kYXJkqG1hdGVyaWFsg6Vjb2xvcqcjNGEzNDI4qXJvdWdobmVzc8s%2F7rhR64UeuKltZXRhbG5lc3MAqmNhc3RTaGFkb3fDiKhjaGlsZHJlbpCjdGFnplNwaGVyZaNrZXmsbWF0dGUtc3BoZXJlpGFyZ3OTyz%2FmZmZmZmZmICCocG9zaXRpb26Ty8AMAAAAAAAAyz%2FxmZmZmZma%2F6xtYXRlcmlhbFR5cGWoc3RhbmRhcmSobWF0ZXJpYWyDpWNvbG9ypyM2YjRlM2Spcm91Z2huZXNzAaltZXRhbG5lc3MAqmNhc3RTaGFkb3fDiahjaGlsZHJlbpCjdGFnqk9jdGFoZWRyb26ja2V5sGdsYXNzLW9jdGFoZWRyb26kYXJnc5LLP%2BzMzMzMzM0AqHBvc2l0aW9uk8u%2F%2FMzMzMzMzcs%2F%2BAAAAAAAAMs%2F0zMzMzMzM6hyb3RhdGlvbpMAAMs%2F2SbpeNT99KxtYXRlcmlhbFR5cGWocGh5c2ljYWyobWF0ZXJpYWyFpWNvbG9ypyNmZmZmZmasdHJhbnNtaXNzaW9uAal0aGlja25lc3PLP%2BmZmZmZmZqpcm91Z2huZXNzAKNpb3LLP%2FgAAAAAAACqY2FzdFNoYWRvd8OJqGNoaWxkcmVukKN0YWelVG9ydXOja2V5q2dsYXNzLXRvcnVzpGFyZ3OUyz%2FgAAAAAAAAyz%2FDMzMzMzMzIECocG9zaXRpb26TAMs%2F2ZmZmZmZmss%2F6ZmZmZmZmqhyb3RhdGlvbpPLP%2Fki0OVgQYkAAKxtYXRlcmlhbFR5cGWocGh5c2ljYWyobWF0ZXJpYWyFpWNvbG9ypyNkNWU4ZmasdHJhbnNtaXNzaW9uyz%2Ftwo9cKPXDqXRoaWNrbmVzc8s%2F4AAAAAAAAKlyb3VnaG5lc3PLP7R64UeuFHujaW9yyz%2F3MzMzMzMzqmNhc3RTaGFkb3fDiahjaGlsZHJlbpCjdGFno0JveKNrZXmqZ2xvc3N5LWJveKRhcmdzk8s%2F8zMzMzMzM8s%2F8zMzMzMzM8s%2F8zMzMzMzM6hwb3NpdGlvbpPLP9mZmZmZmZrLP%2BAAAAAAAAD%2BqHJvdGF0aW9ukwAAAKxtYXRlcmlhbFR5cGWoc3RhbmRhcmSobWF0ZXJpYWyDpWNvbG9ypyNhMTdjNTCpcm91Z2huZXNzyz%2FUeuFHrhR7qW1ldGFsbmVzc8s%2F6AAAAAAAAKpjYXN0U2hhZG93w4ioY2hpbGRyZW6Qo3RhZ6ZTcGhlcmWja2V5rWdsb3NzeS1zcGhlcmWkYXJnc5PLP%2BTMzMzMzM0gIKhwb3NpdGlvbpPLP%2FzMzMzMzM3LP%2BZmZmZmZmYArG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIOlY29sb3KnI2I4OTI1Zqlyb3VnaG5lc3PLP7wo9cKPXCmpbWV0YWxuZXNzyz%2FoAAAAAAAAqmNhc3RTaGFkb3fDiahjaGlsZHJlbpCjdGFnpVBsYW5lo2tleaVmbG9vcqRhcmdzkhQUqHBvc2l0aW9ukwAAAKhyb3RhdGlvbpPLv%2FkeuFHrhR8AAKxtYXRlcmlhbFR5cGWoc3RhbmRhcmSobWF0ZXJpYWyCo21hcNlNaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Z1ZXItYWkvdnVlci9tYWluL2RvY3MvX3N0YXRpYy8wM19mbG9vci5qcGepcm91Z2huZXNzyz%2FszMzMzMzNrXJlY2VpdmVTaGFkb3fDiKhjaGlsZHJlbpCjdGFnpVBsYW5lo2tleahiYWNrZHJvcKRhcmdzkhQUqHBvc2l0aW9ukwAA%2FaxtYXRlcmlhbFR5cGWoc3RhbmRhcmSobWF0ZXJpYWyCo21hcNlQaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Z1ZXItYWkvdnVlci9tYWluL2RvY3MvX3N0YXRpYy8wM19iYWNrZHJvcC5qcGepcm91Z2huZXNzyz%2FuZmZmZmZmrXJlY2VpdmVTaGFkb3fD" width="100%" height="400px" frameborder="0"></iframe>

The above scene uses a sophisticated four-light setup with warm/cool color contrast and soft shadows. We'll learn how to build this step by step, starting with the fundamentals.

## Light Types

Vuer provides six main light types. In our optimized scene above, we use **AmbientLight**, **SpotLight**, and **RectAreaLight**. Let's explore all available types:

## Starting with Basic Lighting

Let's start by understanding the two fundamental light types: ambient and directional.

### AmbientLight - Global Base Lighting

Ambient light illuminates all objects uniformly from all directions, providing a base level of brightness. In the optimized scene above, we use a very low-intensity ambient light (0.15) with a gray tone (#4a5568) to prevent completely black areas while maintaining dramatic contrast:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box, Sphere
from vuer.schemas import AmbientLight, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        # ... your scene objects ...

        up=[0, 1, 0],
        grid=True,
        bgChildren=[],
        rawChildren=[
            # Only ambient light - notice how flat it looks
            AmbientLight(
                 intensity=0.15,
                 color="#4a5568",
                 key="ambient",
             ),
            OrbitControls(key="controls"),
        ],
    )

    await session.forever()
```

**Key characteristics:**
- No shadows or direction
- Prevents completely black areas
- Objects appear flat without depth
- Very performance-efficient

### DirectionalLight - Adding Depth with Shadows

```python
rawChildren=[
    DirectionalLight(
        intensity=1.0,
        color="white",
        position=[5, 5, 5],   # Light comes from this direction
        castShadow=True,      # Enable shadows
        key="sun",
    ),
    OrbitControls(key="controls"),
],
```

**Key characteristics:**
- Creates parallel rays like sunlight
- Position indicates direction (not actual location)
- Can cast sharp, defined shadows
- Excellent for primary scene illumination

## Additional Light Types

### PointLight - Omnidirectional Light

Point lights emit in all directions from a single point, like a light bulb:

```python
PointLight(
    intensity=1.0,
    color="#ffaa00",
    position=[0, 2, 0],       # Actual position in space
    distance=10,              # Range (0 = infinite)
    decay=2,                  # Light falloff rate
    key="bulb",
)
```

**Use cases:** Light bulbs, torches, candles, magical orbs

### SpotLight - Focused Beam

Spotlight creates a cone of light, perfect for dramatic focused illumination. The optimized scene at the top uses two spotlights: a warm orange **key light** (main illumination) and a cool blue **rim light** (edge highlight) to create professional, cinematic lighting with warm/cool color contrast:

```python
SpotLight(
    intensity=1.0,
    color="white",
    position=[0, 3, 0],       # Light position
    angle=0.5,                # Cone angle (radians)
    penumbra=0.2,             # Edge softness (0-1)
    distance=20,              # Range
    castShadow=True,
    key="spotlight",
)
```

**Use cases:** Flashlights, stage lighting, dramatic effects

### HemisphereLight - Natural Outdoor Lighting

Hemisphere light simulates natural outdoor lighting with different sky and ground colors:

```python
HemisphereLight(
    skyColor="#87ceeb",       # Sky (top) color
    groundColor="#8b4513",    # Ground (bottom) color
    intensity=0.6,
    key="hemisphere",
)
```

**Use cases:** Outdoor scenes, natural ambient light

### RectAreaLight - Soft Area Lighting

Rectangular area lights emit from a surface, creating soft, realistic lighting. In our optimized scene, we use a RectAreaLight as the **fill light** with soft purple color (#e8d5ff) to reduce harsh shadows without eliminating them entirely:

```python
RectAreaLight(
    color="white",
    intensity=5.0,
    width=2,                  # Rectangle width
    height=1,                 # Rectangle height
    position=[0, 3, 0],
    rotation=[-1.57, 0, 0],   # Face downward
    key="area-light",
)
```

**Important**: Only works with `standard` and `physical` materials, and cannot cast shadows.

**Use cases:** Softboxes, windows, studio lighting

## Adding Shadows to Your Scene

Lighting and shadows always work together. In the scene at the beginning of this chapter, you may have noticed the soft, realistic shadows that add depth and dimension. To achieve that effect, we need to configure shadow properties alongside our lights.

### Shadow Basics

For shadows to appear in your scene, you need three components:

1. **Light source with `castShadow=True`** - The light must be configured to cast shadows
2. **Objects with `castShadow=True`** - Objects that should create shadows
3. **Surfaces with `receiveShadow=True`** - Surfaces (like floors) that display shadows

**Key points:**
- Only `DirectionalLight`, `SpotLight`, and `PointLight` can cast shadows
- `AmbientLight`, `HemisphereLight`, and `RectAreaLight` cannot cast shadows
- Objects must use `lambert`, `phong`, `standard`, or `physical` materials for shadows to work
- The `basic` material type ignores all lighting and shadows

### Shadow Camera Range Limitation

Even with `castShadow=True` configured, shadows have a limited range determined by the shadow camera. If your scene is large or objects are far from the light source, you may notice missing or clipped shadows.

Each light with shadows uses an internal "shadow camera" to render the shadow map. Objects outside this camera's view won't cast shadows. This is why you might see:
- Shadows suddenly cutting off at a certain distance
- Missing shadows for objects far from the light
- Incomplete shadows on large floor planes

**When do you need shadow configuration?**
- Large scenes (objects spread over 10+ units)
- Distant objects that need to cast shadows
- SpotLight or DirectionalLight covering a wide area
- When you notice shadows are clipped or missing

For small scenes with objects close together (within ~5-10 units), the default shadow camera usually works fine. For larger scenes, you'll need to configure the shadow camera range as shown below.

### Advanced Shadow Configuration

For finer control over shadow quality and appearance, you can configure shadow properties using **flattened attribute names**:

```python
DirectionalLight(
    intensity=1.0,
    position=[5, 5, 5],
    castShadow=True,
    **{
        "shadow-mapSize": [2048, 2048],      # Shadow resolution
        "shadow-bias": -0.0001,               # Prevents shadow artifacts
        "shadow-camera-near": 0.5,
        "shadow-camera-far": 500,
        "shadow-camera-left": -10,
        "shadow-camera-right": 10,
        "shadow-camera-top": 10,
        "shadow-camera-bottom": -10,
    },
    key="sun",
)
```

**Note:** Shadow properties use flattened attribute names with hyphens (e.g., `shadow-mapSize`, `shadow-camera-far`). Use the `**{}` unpacking syntax to pass these attributes.

**Shadow quality settings:**
- `mapSize=[512, 512]` - Low quality, better performance
- `mapSize=[1024, 1024]` - Medium quality (default)
- `mapSize=[2048, 2048]` - High quality (recommended for final renders)
- `mapSize=[4096, 4096]` - Ultra quality, significant performance cost

**Common shadow parameters:**
- `bias` - Prevents "shadow acne" artifacts, typically `-0.0001` to `-0.001`
- `radius` - Softens shadow edges (only works with certain shadow types)
- `camera.near/far` - Controls shadow rendering range
- `camera.fov` (SpotLight) - Field of view for shadow camera
- `camera.left/right/top/bottom` (DirectionalLight) - Defines shadow coverage area

### Complete Example: Professional Lighting with Shadows

Let's put everything together. The scene shown at the beginning of this chapter uses a four-light setup with shadow configuration to create professional, cinematic lighting. Here's the complete code:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Cylinder, Sphere, Octahedron, Torus, Box, Plane
from vuer.schemas import AmbientLight, SpotLight, RectAreaLight, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        # Scene objects with castShadow enabled
        Cylinder(
            args=[0.8, 0.8, 0.5, 32],
            position=[-3.5, 0.25, -1],
            materialType="standard",
            material=dict(color="#4a3428", roughness=0.95, metalness=0.0),
            castShadow=True,
            key="matte-cylinder",
        ),
        Sphere(
            args=[0.6, 64, 64],
            position=[-3.5, 1.1, -1],
            materialType="standard",
            material=dict(color="#6b4e3d", roughness=1.0, metalness=0.0),
            castShadow=True,
            key="matte-sphere",
        ),
        Octahedron(
            args=[0.9, 0],
            position=[-1.8, 1.5, 0.3],
            rotation=[0, 0, 0.393],
            materialType="physical",
            material=dict(
                color="#ffffff",
                transmission=1.0,
                thickness=0.8,
                roughness=0.0,
                ior=1.5,
            ),
            castShadow=True,
            key="glass-octahedron",
        ),
        Torus(
            args=[0.5, 0.15, 32, 64],
            position=[0, 0.4, 0.8],
            rotation=[1.571, 0, 0],
            materialType="physical",
            material=dict(
                color="#d5e8ff",
                transmission=0.92,
                thickness=0.5,
                roughness=0.05,
                ior=1.45,
            ),
            castShadow=True,
            key="glass-torus",
        ),
        Box(
            args=[1.4, 1.4, 1.4],
            position=[0.4, 0.5, -2],
            materialType="standard",
            material=dict(color="#a17c50", roughness=0.2, metalness=0.9),
            castShadow=True,
            key="glossy-box",
        ),
        Sphere(
            args=[0.4, 64, 64],
            position=[1.8, 0.7, 0],
            materialType="standard",
            material=dict(color="#b8925f", roughness=0.18, metalness=0.9),
            castShadow=True,
            key="glossy-sphere",
        ),

        # Floor and backdrop with receiveShadow
        Plane(
            args=[20, 20],
            position=[0, 0, 0],
            rotation=[-1.57, 0, 0],
            materialType="standard",
            material=dict(
                map="https://raw.githubusercontent.com/vuer-ai/vuer/main/docs/_static/03_floor.jpg",
                roughness=0.9,
            ),
            receiveShadow=True,
            key="floor",
        ),
        Plane(
            args=[20, 20],
            position=[0, 0, -3],
            materialType="standard",
            material=dict(
                map="https://raw.githubusercontent.com/vuer-ai/vuer/main/docs/_static/03_backdrop.jpg",
                roughness=0.95,
            ),
            receiveShadow=True,
            key="backdrop",
        ),

        up=[0, 1, 0],
        grid=False,
        bgChildren=[],
        rawChildren=[
            # Four-light setup with shadows
            AmbientLight(
                intensity=0.15,
                color="#4a5568",
                key="ambient",
            ),
            SpotLight(
                position=[-5, 3, 5],
                intensity=80,
                angle=0.5,
                penumbra=0.8,
                color="#ff9f5a",
                castShadow=True,
                **{
                    "shadow-mapSize": [2048, 2048],
                    "shadow-camera-near": 0.5,
                    "shadow-camera-far": 50,
                },
                key="key-light",
            ),
            SpotLight(
                position=[4, 5, -6],
                intensity=50,
                angle=0.6,
                penumbra=0.95,
                color="#5aa0ff",
                castShadow=True,
                **{
                    "shadow-mapSize": [2048, 2048],
                    "shadow-camera-near": 0.5,
                    "shadow-camera-far": 50,
                },
                key="rim-light",
            ),
            RectAreaLight(
                position=[6, 2, 4],
                intensity=8,
                width=4,
                height=4,
                color="#e8d5ff",
                key="fill-light",
            ),
            OrbitControls(key="controls"),
        ],
    )

    await session.forever()
```

This example demonstrates the concepts covered in this chapter: multiple light types working together, shadow configuration for realistic depth, and careful balance of light intensities and colors to create professional, cinematic results.

## What's Next?

Now that you understand lighting, you can:

**Continue with rendering:**
- [Post-processing Effects](./06_post_processing.md) - Add bloom, depth of field, and other effects
- [Path Tracing](./07_path_tracing.md) - Create photorealistic renders

**Explore interactive features:**
- [Animation](../animation/) - Animate objects and cameras
- [Events and Interaction](../events/) - Handle user clicks and input
- [VR/AR](../vr/) - Build immersive experiences

**Quick lighting tips to remember:**
- Start with `AmbientLight` (0.3) + `DirectionalLight` (1.0)
- Use `lambert` or `standard` materials to see lighting effects
- Add `castShadow=True` and a floor with `receiveShadow=True` for depth
- Use 3-5 lights maximum for good performance
