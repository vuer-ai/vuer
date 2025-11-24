# 3.1.3 Materials and Textures

## Overview

Materials define how objects appear when rendered. This guide will progressively teach you how to use materials in Vuer, from simple material types to advanced properties and texture mapping.

We'll build upon the scene from the previous guide, adding materials step by step to create increasingly realistic renders.

## Simple Materials

Vuer supports three simple material types that are easy to use and perform well: **basic**, **lambert**, and **phong**.

These materials are perfect for most visualization needs.

<iframe src="https://vuer.ai/?grid=False&collapseMenu=True&initCamPos=-4%2C2%2C4&reconnect=True&scene=hahjaGlsZHJlbpiHqGNoaWxkcmVukKNrZXmubWF0dGUtY3lsaW5kZXKjdGFnqEN5bGluZGVypGFyZ3OUyj9MzM3KP0zMzco%2FAAAAIKhwb3NpdGlvbpPKwGAAAMo%2BgAAA%2F6xtYXRlcmlhbFR5cGWlcGhvbmeobWF0ZXJpYWyBpWNvbG9ypyM0YTM0MjiHqGNoaWxkcmVukKNrZXmsbWF0dGUtc3BoZXJlo3RhZ6ZTcGhlcmWkYXJnc5PKPxmZmkBAqHBvc2l0aW9uk8rAYAAAyj%2BMzM3%2FrG1hdGVyaWFsVHlwZadsYW1iZXJ0qG1hdGVyaWFsgaVjb2xvcqcjNmI0ZTNkiKhjaGlsZHJlbpCja2V5sGdsYXNzLW9jdGFoZWRyb26jdGFnqk9jdGFoZWRyb26kYXJnc5LKP2ZmZgCocG9zaXRpb26Tyr%2FmZmbKP8AAAMo%2BmZmaqHJvdGF0aW9ukwAAyj7JN0ysbWF0ZXJpYWxUeXBlpWJhc2ljqG1hdGVyaWFsgaVjb2xvcqcjZmZmZmZmiKhjaGlsZHJlbpCja2V5q2dsYXNzLXRvcnVzo3RhZ6VUb3J1c6RhcmdzlMo%2FAAAAyj4ZmZogQKhwb3NpdGlvbpMAyj7MzM3KP0zMzahyb3RhdGlvbpPKP8kWhwAArG1hdGVyaWFsVHlwZaVwaG9uZ6htYXRlcmlhbIKlY29sb3KnI2Q1ZThmZqlzaGluaW5lc3Nkh6hjaGlsZHJlbpCja2V5qmdsb3NzeS1ib3ijdGFno0JveKRhcmdzk8o%2FszMzyj%2BzMzPKP7MzM6hwb3NpdGlvbpPKPszMzco%2FAAAA%2FqxtYXRlcmlhbFR5cGWnbGFtYmVydKhtYXRlcmlhbIGlY29sb3KnI2ExN2M1MIeoY2hpbGRyZW6Qo2tlea1nbG9zc3ktc3BoZXJlo3RhZ6ZTcGhlcmWkYXJnc5PKPszMzUBAqHBvc2l0aW9uk8o%2F5mZmyj8zMzMArG1hdGVyaWFsVHlwZaVwaG9uZ6htYXRlcmlhbIGlY29sb3KnI2I4OTI1ZoeoY2hpbGRyZW6Qo2tleaVmbG9vcqN0YWelUGxhbmWkYXJnc5IUFKhwb3NpdGlvbpMAAACocm90YXRpb26Tyr%2FI9cMAAKxtYXRlcmlhbFR5cGWnbGFtYmVydIaoY2hpbGRyZW6Qo2tleahiYWNrZHJvcKN0YWelUGxhbmWkYXJnc5IUFKhwb3NpdGlvbpMAAP2sbWF0ZXJpYWxUeXBlp2xhbWJlcnSja2V5oTCjdGFnpVNjZW5lonVwkwABAKtyYXdDaGlsZHJlbpOEqGNoaWxkcmVukKNrZXmnYW1iaWVudKN0YWesQW1iaWVudExpZ2h0qWludGVuc2l0eco%2BmZmahahjaGlsZHJlbpCja2V5o3N1bqN0YWewRGlyZWN0aW9uYWxMaWdodKlpbnRlbnNpdHnKP4AAAKhwb3NpdGlvbpMFBQWDqGNoaWxkcmVukKNrZXmoY29udHJvbHOjdGFnrU9yYml0Q29udHJvbHM%3D" width="100%" height="400px" frameborder="0"></iframe>

*Simple materials in action: phong, lambert, and basic materials with the same geometry as the PBR example below*

### Understanding Simple Material Types

The `materialType` parameter determines how an object interacts with lights:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Cylinder, Sphere, Octahedron, Torus, Box, Plane
from vuer.schemas import AmbientLight, DirectionalLight, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        # Phong material - plastic-like glossy
        Cylinder(
            args=[0.8, 0.8, 0.5, 32],
            position=[-3.5, 0.25, -1],
            materialType="phong",
            material=dict(color="#4a3428"),
            key="matte-cylinder",
        ),

        # Lambert material - simple matte
        Sphere(
            args=[0.6, 64, 64],
            position=[-3.5, 1.1, -1],
            materialType="lambert",
            material=dict(color="#6b4e3d"),
            key="matte-sphere",
        ),

        # Basic material - unlit, always bright
        Octahedron(
            args=[0.9, 0],
            position=[-1.8, 1.5, 0.3],
            rotation=[0, 0, 0.393],
            materialType="basic",
            material=dict(color="#ffffff"),
            key="glass-octahedron",
        ),

        # Phong with material dict for shininess
        Torus(
            args=[0.5, 0.15, 32, 64],
            position=[0, 0.4, 0.8],
            rotation=[1.571, 0, 0],
            materialType="phong",
            material=dict(
                color="#d5e8ff",
                shininess=100,       # Sharper specular highlights
            ),
            key="glass-torus",
        ),

        # Lambert material
        Box(
            args=[1.4, 1.4, 1.4],
            position=[0.4, 0.5, -2],
            materialType="lambert",
            material=dict(color="#a17c50"),
            key="glossy-box",
        ),

        # Phong material
        Sphere(
            args=[0.4, 64, 64],
            position=[1.8, 0.7, 0],
            materialType="phong",
            material=dict(color="#b8925f"),
            key="glossy-sphere",
        ),

        # Floor
        Plane(
            args=[20, 20],
            position=[0, 0, 0],
            rotation=[-1.57, 0, 0],
            materialType="lambert",
            key="floor",
        ),

        # Backdrop
        Plane(
            args=[20, 20],
            position=[0, 0, -3],
            materialType="lambert",
            key="backdrop",
        ),

        up=[0, 1, 0],
        grid=False,
        rawChildren=[
            AmbientLight(key="ambient", intensity=0.3),
            DirectionalLight(key="sun", intensity=1.0, position=[5, 5, 5]),
            OrbitControls(key="controls"),
        ],
    )

    await session.forever()
```

### Simple Material Types

- **`"basic"`** - Unlit, always fully bright (not affected by lights). Good for UI elements or objects that need constant visibility.

- **`"lambert"`** - Simple diffuse lighting with matte appearance. Efficient and great for most non-reflective objects.

- **`"phong"`** - Diffuse + specular highlights for a glossy, plastic-like look. Supports `shininess` parameter via the `material` dict.

**Usage Tip**: All simple materials (`basic`, `lambert`, `phong`) must specify `color` inside the `material` dict (e.g., `material=dict(color="#ff0000")`).

## PBR Materials

For photorealistic rendering, Vuer provides Physically-Based Rendering (PBR) materials: **standard** and **physical**. These materials require the `material` parameter with properties like `roughness`, `metalness`, and `transmission`:

<iframe src="https://vuer.ai/?grid=False&collapseMenu=True&initCamPos=-4%2C2%2C4&reconnect=True&scene=hahjaGlsZHJlbpiHqGNoaWxkcmVukKNrZXmubWF0dGUtY3lsaW5kZXKjdGFnqEN5bGluZGVypGFyZ3OUyj9MzM3KP0zMzco%2FAAAAIKhwb3NpdGlvbpPKwGAAAMo%2BgAAA%2F6xtYXRlcmlhbFR5cGWoc3RhbmRhcmSobWF0ZXJpYWyDpWNvbG9ypyM0YTM0Mjipcm91Z2huZXNzyj9zMzOpbWV0YWxuZXNzygAAAACHqGNoaWxkcmVukKNrZXmsbWF0dGUtc3BoZXJlo3RhZ6ZTcGhlcmWkYXJnc5PKPxmZmkBAqHBvc2l0aW9uk8rAYAAAyj%2BMzM3%2FrG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIOlY29sb3KnIzZiNGUzZKlyb3VnaG5lc3PKP4AAAKltZXRhbG5lc3PKAAAAAIioY2hpbGRyZW6Qo2tlebBnbGFzcy1vY3RhaGVkcm9uo3RhZ6pPY3RhaGVkcm9upGFyZ3OSyj9mZmYAqHBvc2l0aW9uk8q%2F5mZmyj%2FAAADKPpmZmqhyb3RhdGlvbpMAAMo%2ByTdMrG1hdGVyaWFsVHlwZahwaHlzaWNhbKhtYXRlcmlhbIWlY29sb3KnI2ZmZmZmZqx0cmFuc21pc3Npb27KP4AAAKl0aGlja25lc3PKP0zMzalyb3VnaG5lc3PKAAAAAKNpb3LKP8AAAIioY2hpbGRyZW6Qo2tleatnbGFzcy10b3J1c6N0YWelVG9ydXOkYXJnc5TKPwAAAMo%2BGZmaIECocG9zaXRpb26TAMo%2BzMzNyj9MzM2ocm90YXRpb26Tyj%2FJFocAAKxtYXRlcmlhbFR5cGWocGh5c2ljYWyobWF0ZXJpYWyFpWNvbG9ypyNkNWU4ZmasdHJhbnNtaXNzaW9uyj9rhR%2BpdGhpY2tuZXNzyj8AAACpcm91Z2huZXNzyj1MzM2jaW9yyj%2B5mZqHqGNoaWxkcmVukKNrZXmqZ2xvc3N5LWJveKN0YWejQm94pGFyZ3OTyj%2BzMzPKP7MzM8o%2FszMzqHBvc2l0aW9uk8o%2BzMzNyj8AAAD%2BrG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIOlY29sb3KnI2ExN2M1MKlyb3VnaG5lc3PKPkzMzaltZXRhbG5lc3PKP2ZmZoeoY2hpbGRyZW6Qo2tlea1nbG9zc3ktc3BoZXJlo3RhZ6ZTcGhlcmWkYXJnc5PKPszMzUBAqHBvc2l0aW9uk8o%2F5mZmyj8zMzMArG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIOlY29sb3KnI2I4OTI1Zqlyb3VnaG5lc3PKPjhR7KltZXRhbG5lc3PKP2ZmZoeoY2hpbGRyZW6Qo2tleaVmbG9vcqN0YWelUGxhbmWkYXJnc5IUFKhwb3NpdGlvbpMAAACocm90YXRpb26Tyr%2FI9cMAAKxtYXRlcmlhbFR5cGWnbGFtYmVydIaoY2hpbGRyZW6Qo2tleahiYWNrZHJvcKN0YWelUGxhbmWkYXJnc5IUFKhwb3NpdGlvbpMAAP2sbWF0ZXJpYWxUeXBlp2xhbWJlcnSja2V5oTCjdGFnpVNjZW5lonVwkwABAKtyYXdDaGlsZHJlbpOEqGNoaWxkcmVukKNrZXmnYW1iaWVudKN0YWesQW1iaWVudExpZ2h0qWludGVuc2l0eco%2BmZmahahjaGlsZHJlbpCja2V5o3N1bqN0YWewRGlyZWN0aW9uYWxMaWdodKlpbnRlbnNpdHnKP4AAAKhwb3NpdGlvbpMFBQWDqGNoaWxkcmVukKNrZXmoY29udHJvbHOjdGFnrU9yYml0Q29udHJvbHM%3D" width="100%" height="400px" frameborder="0"></iframe>

*PBR materials with fine-tuned properties: matte (high roughness), glass (transmission), and glossy (low roughness) finishes*

### Using the material Parameter

The `material` parameter accepts a dictionary of properties for fine-grained control:

```python
# Matte finish - high roughness, no metalness
Cylinder(
    materialType="standard",
    material=dict(
        color="#4a3428",
        roughness=0.95,      # Very rough (0.0 = mirror, 1.0 = completely matte)
        metalness=0.0,       # Not metallic
    ),
    key="matte-cylinder",
)

# Glass effect - transmission for see-through
Octahedron(
    materialType="physical",   # Only "physical" supports transmission
    material=dict(
        color="#ffffff",
        transmission=1.0,      # Full transparency
        thickness=0.8,         # Glass thickness
        roughness=0.0,         # Crystal clear
        ior=1.5,               # Index of refraction (glass ~ 1.5)
    ),
    key="glass-octahedron",
)

# Glossy finish - low roughness with some metal
Box(
    materialType="standard",
    material=dict(
        color="#a17c50",
        roughness=0.2,        # Very smooth
        metalness=0.9,        # Highly metallic
    ),
    key="glossy-box",
)
```

### Key Material Properties

**For simple materials (basic, lambert, phong):**

- `color`: **Must be inside `material` dict** (e.g., `material=dict(color="#ff0000")`)
- `shininess` (phong only): Controls specular highlight sharpness (0-150, default 30), must be inside `material` dict

**For standard materials:**

- `color`: **Must be inside `material` dict**
- `roughness` (0.0-1.0): Controls surface smoothness
  - 0.0 = perfect mirror
  - 1.0 = completely matte
- `metalness` (0.0-1.0): Controls metallic appearance
  - 0.0 = dielectric (plastic, wood, stone)
  - 1.0 = metallic (gold, silver, copper)

**For physical materials:**

- All `standard` properties, plus:
- `transmission` (0.0-1.0): Light transmission (for glass effects)
- `thickness` (number): Material thickness for transmission
- `ior` (number): Index of refraction (1.0 = air, 1.5 = glass, 2.4 = diamond)
- `clearcoat` (0.0-1.0): Clear coat layer (for car paint)

### Complete Example with Material Properties

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Cylinder, Sphere, Octahedron, Torus, Box, Plane
from vuer.schemas import AmbientLight, DirectionalLight, OrbitControls

app = Vuer()

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ Scene(
        # Matte cylinder
        Cylinder(
            args=[0.8, 0.8, 0.5, 32],
            position=[-3.5, 0.25, -1],
            materialType="standard",
            material=dict(
                color="#4a3428",
                roughness=0.95,
                metalness=0.0,
            ),
            key="matte-cylinder",
        ),

        # Matte sphere
        Sphere(
            args=[0.6, 64, 64],
            position=[-3.5, 1.1, -1],
            materialType="standard",
            material=dict(
                color="#6b4e3d",
                roughness=1.0,
                metalness=0.0,
            ),
            key="matte-sphere",
        ),

        # Glass octahedron
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
            key="glass-octahedron",
        ),

        # Glass torus
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
            key="glass-torus",
        ),

        # Glossy box
        Box(
            args=[1.4, 1.4, 1.4],
            position=[0.4, 0.5, -2],
            materialType="standard",
            material=dict(
                color="#a17c50",
                roughness=0.2,
                metalness=0.9,
            ),
            key="glossy-box",
        ),

        # Glossy sphere
        Sphere(
            args=[0.4, 64, 64],
            position=[1.8, 0.7, 0],
            materialType="standard",
            material=dict(
                color="#b8925f",
                roughness=0.18,
                metalness=0.9,
            ),
            key="glossy-sphere",
        ),

        # Floor
        Plane(
            args=[20, 20],
            position=[0, 0, 0],
            rotation=[-1.57, 0, 0],
            materialType="lambert",
            key="floor",
        ),

        # Backdrop
        Plane(
            args=[20, 20],
            position=[0, 0, -3],
            materialType="lambert",
            key="backdrop",
        ),

        up=[0, 1, 0],
        grid=False,
        rawChildren=[
            AmbientLight(key="ambient", intensity=0.3),
            DirectionalLight(key="sun", intensity=1.0, position=[10, 10, 10]),
            OrbitControls(key="controls"),
        ],
    )

    await session.forever()
```

## Texture Mapping

Finally, let's add texture maps to the floor and backdrop to create a more realistic environment:

<iframe src="https://vuer.ai/?grid=False&collapseMenu=True&initCamPos=-4%2C2%2C4&reconnect=True&scene=hqN0YWelU2NlbmWja2V5oTCidXCTAAEApGdyaWTCq3Jhd0NoaWxkcmVukoSoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FTMzMzMzMzhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHnLP%2FAAAAAAAACocG9zaXRpb26Ty0AUAAAAAAAAy0AUAAAAAAAAy0AUAAAAAAAAqGNoaWxkcmVumIeoY2hpbGRyZW6Qo3RhZ6hDeWxpbmRlcqNrZXmubWF0dGUtY3lsaW5kZXKkYXJnc5TLP%2BmZmZmZmZrLP%2BmZmZmZmZrLP%2BAAAAAAAAAgqHBvc2l0aW9uk8vADAAAAAAAAMs%2F0AAAAAAAAMu%2F8AAAAAAAAKxtYXRlcmlhbFR5cGWoc3RhbmRhcmSobWF0ZXJpYWyDpWNvbG9ypyM0YTM0Mjipcm91Z2huZXNzyz%2FuuFHrhR64qW1ldGFsbmVzc8sAAAAAAAAAAIeoY2hpbGRyZW6Qo3RhZ6ZTcGhlcmWja2V5rG1hdHRlLXNwaGVyZaRhcmdzk8s%2F5mZmZmZmZiAgqHBvc2l0aW9uk8vADAAAAAAAAMs%2F8ZmZmZmZmsu%2F8AAAAAAAAKxtYXRlcmlhbFR5cGWoc3RhbmRhcmSobWF0ZXJpYWyDpWNvbG9ypyM2YjRlM2Spcm91Z2huZXNzyz%2FwAAAAAAAAqW1ldGFsbmVzc8sAAAAAAAAAAIioY2hpbGRyZW6Qo3RhZ6pPY3RhaGVkcm9uo2tlebBnbGFzcy1vY3RhaGVkcm9upGFyZ3OSyz%2FszMzMzMzNAKhwb3NpdGlvbpPLv%2FzMzMzMzM3LP%2FgAAAAAAADLP9MzMzMzMzOocm90YXRpb26TywAAAAAAAAAAywAAAAAAAAAAyz%2FZJul41P30rG1hdGVyaWFsVHlwZahwaHlzaWNhbKhtYXRlcmlhbIWlY29sb3KnI2ZmZmZmZqx0cmFuc21pc3Npb27LP%2FAAAAAAAACpdGhpY2tuZXNzyz%2FpmZmZmZmaqXJvdWdobmVzc8sAAAAAAAAAAKNpb3LLP%2FgAAAAAAACIqGNoaWxkcmVukKN0YWelVG9ydXOja2V5q2dsYXNzLXRvcnVzpGFyZ3OUyz%2FgAAAAAAAAyz%2FDMzMzMzMzIECocG9zaXRpb26TywAAAAAAAAAAyz%2FZmZmZmZmayz%2FpmZmZmZmaqHJvdGF0aW9uk8s%2F%2BSLQ5WBBicsAAAAAAAAAAMsAAAAAAAAAAKxtYXRlcmlhbFR5cGWocGh5c2ljYWyobWF0ZXJpYWyFpWNvbG9ypyNkNWU4ZmasdHJhbnNtaXNzaW9uyz%2Ftwo9cKPXDqXRoaWNrbmVzc8s%2F4AAAAAAAAKlyb3VnaG5lc3PLP7R64UeuFHujaW9yyz%2F3MzMzMzMziKhjaGlsZHJlbpCjdGFno0JveKNrZXmqZ2xvc3N5LWJveKRhcmdzk8s%2F8zMzMzMzM8s%2F8zMzMzMzM8s%2F8zMzMzMzM6hwb3NpdGlvbpPLP9mZmZmZmZrLP%2BAAAAAAAADLwAAAAAAAAACocm90YXRpb26TywAAAAAAAAAAywAAAAAAAAAAywAAAAAAAAAArG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIOlY29sb3KnI2ExN2M1MKlyb3VnaG5lc3PLP9R64UeuFHupbWV0YWxuZXNzyz%2FoAAAAAAAAh6hjaGlsZHJlbpCjdGFnplNwaGVyZaNrZXmtZ2xvc3N5LXNwaGVyZaRhcmdzk8s%2F5MzMzMzMzSAgqHBvc2l0aW9uk8s%2F%2FMzMzMzMzcs%2F5mZmZmZmZssAAAAAAAAAAKxtYXRlcmlhbFR5cGWoc3RhbmRhcmSobWF0ZXJpYWyDpWNvbG9ypyNiODkyNWapcm91Z2huZXNzyz%2B8KPXCj1wpqW1ldGFsbmVzc8s%2F6AAAAAAAAIioY2hpbGRyZW6Qo3RhZ6VQbGFuZaNrZXmlZmxvb3KkYXJnc5IUFKhwb3NpdGlvbpPLAAAAAAAAAADLAAAAAAAAAADLAAAAAAAAAACocm90YXRpb26Ty7%2F5HrhR64UfywAAAAAAAAAAywAAAAAAAAAArG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIKjbWFw2U1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdnVlci1haS92dWVyL21haW4vZG9jcy9fc3RhdGljLzAzX2Zsb29yLmpwZ6lyb3VnaG5lc3PLP%2BzMzMzMzM2HqGNoaWxkcmVukKN0YWelUGxhbmWja2V5qGJhY2tkcm9wpGFyZ3OSFBSocG9zaXRpb26TywAAAAAAAAAAywAAAAAAAAAAy8AIAAAAAAAArG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIKjbWFw2VBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdnVlci1haS92dWVyL21haW4vZG9jcy9fc3RhdGljLzAzX2JhY2tkcm9wLmpwZ6lyb3VnaG5lc3PLP%2B5mZmZmZmY%3D" width="100%" height="400px" frameborder="0"></iframe>

*Enhancing realism: adding texture maps to floor and backdrop for environmental detail*

### Adding Textures

Textures are images that wrap around your 3D objects. The most common is the **color map** (also called diffuse map or albedo):

```python
# Textured floor
Plane(
    args=[20, 20],
    position=[0, 0, 0],
    rotation=[-1.57, 0, 0],
    materialType="standard",
    material=dict(
        map="https://raw.githubusercontent.com/vuer-ai/vuer/main/docs/_static/03_floor.jpg",
        roughness=0.9,
    ),
    key="floor",
)

# Textured backdrop
Plane(
    args=[20, 20],
    position=[0, 0, -3],
    materialType="standard",
    material=dict(
        map="https://raw.githubusercontent.com/vuer-ai/vuer/main/docs/_static/03_backdrop.jpg",
        roughness=0.95,
    ),
    key="backdrop",
)
```

### Serving Local Textures

For local texture files, configure the Vuer server to serve static assets:

```python
from vuer import Vuer

# Serve files from the ./assets directory
app = Vuer(static_root="./assets")

# Now you can reference textures like:
# "http://localhost:8012/static/my_texture.jpg"
```

### Advanced Textures

You can use multiple texture maps together for photorealistic materials:

```python
Box(
    materialType="standard",
    material=dict(
        # Color/albedo map
        map="http://localhost:8012/static/wood_albedo.jpg",

        # Surface detail (bumps and dents)
        normalMap="http://localhost:8012/static/wood_normal.jpg",
        normalScale=[1.0, 1.0],

        # Roughness variation
        roughnessMap="http://localhost:8012/static/wood_roughness.jpg",
        roughness=1.0,

        # Ambient occlusion (crevice darkening)
        aoMap="http://localhost:8012/static/wood_ao.jpg",
        aoMapIntensity=1.0,
    ),
    key="wood-box",
)
```

### Texture Properties

- `map`: Base color texture (diffuse/albedo)
- `normalMap`: Surface detail (RGB = surface normal XYZ)
- `roughnessMap`: Grayscale roughness variation
- `metalnessMap`: Grayscale metalness variation
- `aoMap`: Ambient occlusion (darkens crevices)
- `emissiveMap`: Self-illumination pattern
- `mapRepeat`: Tile texture `[u, v]` times

## Performance Tips

1. **Choose appropriate material complexity:**
   - Use **simple materials** (`basic`, `lambert`, `phong`) for most objects - they're faster and easier to use
   - Use **`standard`** for main objects that need photorealistic rendering
   - Use **`physical`** sparingly, only for special effects (glass, transmission)

2. **Optimize textures:**
   - Use power-of-two dimensions (512, 1024, 2048)
   - Compress images (JPEG for color, PNG for transparency)
   - Don't use textures larger than needed

3. **Reuse materials:**
   - Objects with identical materials are batched together
   - Define common materials once and reuse

## Next Steps

Now that you understand materials and textures:
- Learn about [Camera Control](04_camera_control.md) to view your scenes from different angles
- Add [Lights](05_lights.md) to see how they interact with different material types
- Explore advanced rendering with [Post-Processing](06_post_processing.md)
