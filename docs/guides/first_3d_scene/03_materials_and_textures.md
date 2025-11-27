# 3.1.3 Materials and Textures

## Overview

Materials define how objects appear when rendered. This guide will progressively teach you how to use materials in Vuer, from simple material types to advanced properties and texture mapping.

We'll build upon the scene from the previous guide, adding materials step by step to create increasingly realistic renders.

## Simple Materials

Vuer supports three simple material types that are easy to use and perform well: **basic**, **lambert**, and **phong**.

These materials are perfect for most visualization needs.

<iframe src="https://vuer.ai/?hideUI=true&reconnect=True&scene=hqNrZXmhMKN0YWelU2NlbmWidXCTAAEAqmJnQ2hpbGRyZW6Qq3Jhd0NoaWxkcmVulISoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FgAAAAAAAAhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHkBqHBvc2l0aW9ukwMDA4WoY2hpbGRyZW6Qo3RhZ7FQZXJzcGVjdGl2ZUNhbWVyYaNrZXmycGVyc3BlY3RpdmUtY2FtZXJhq21ha2VEZWZhdWx0w6hwb3NpdGlvbpP8AgSDqGNoaWxkcmVukKN0YWetT3JiaXRDb250cm9sc6NrZXmrb3JiLWNvbnRyb2yoY2hpbGRyZW6Yh6hjaGlsZHJlbpCja2V5rnBob25nLWN5bGluZGVyo3RhZ6hDeWxpbmRlcqRhcmdzlMs%2F6ZmZmZmZmss%2F6ZmZmZmZmss%2F4AAAAAAAACCocG9zaXRpb26Ty8AMAAAAAAAAyz%2FQAAAAAAAA%2F6xtYXRlcmlhbFR5cGWlcGhvbmeobWF0ZXJpYWyBpWNvbG9ypyM0YTM0MjiHqGNoaWxkcmVukKNrZXmubGFtYmVydC1zcGhlcmWjdGFnplNwaGVyZaRhcmdzk8s%2F5mZmZmZmZiAgqHBvc2l0aW9uk8vADAAAAAAAAMs%2F8ZmZmZmZmv%2BsbWF0ZXJpYWxUeXBlp2xhbWJlcnSobWF0ZXJpYWyBpWNvbG9ypyM2YjRlM2SIqGNoaWxkcmVukKNrZXmwYmFzaWMtb2N0YWhlZHJvbqN0YWeqT2N0YWhlZHJvbqRhcmdzkss%2F7MzMzMzMzQCocG9zaXRpb26Ty7%2F8zMzMzMzNyz%2F4AAAAAAAAyz%2FTMzMzMzMzqHJvdGF0aW9ukwAAyz%2FZJul41P30rG1hdGVyaWFsVHlwZaViYXNpY6htYXRlcmlhbIGlY29sb3KnI2ZmZmZmZoioY2hpbGRyZW6Qo2tleatwaG9uZy10b3J1c6N0YWelVG9ydXOkYXJnc5TLP%2BAAAAAAAADLP8MzMzMzMzMgQKhwb3NpdGlvbpMAyz%2FZmZmZmZmayz%2FpmZmZmZmaqHJvdGF0aW9uk8s%2F%2BSLQ5WBBiQAArG1hdGVyaWFsVHlwZaVwaG9uZ6htYXRlcmlhbIKlY29sb3KnI2Q1ZThmZqlzaGluaW5lc3NkiKhjaGlsZHJlbpCja2V5q2xhbWJlcnQtYm94o3RhZ6NCb3ikYXJnc5PLP%2FMzMzMzMzPLP%2FMzMzMzMzPLP%2FMzMzMzMzOocG9zaXRpb26Tyz%2FZmZmZmZmayz%2FgAAAAAAAA%2Fqhyb3RhdGlvbpMAAACsbWF0ZXJpYWxUeXBlp2xhbWJlcnSobWF0ZXJpYWyBpWNvbG9ypyNhMTdjNTCHqGNoaWxkcmVukKNrZXmscGhvbmctc3BoZXJlo3RhZ6ZTcGhlcmWkYXJnc5PLP%2BTMzMzMzM0gIKhwb3NpdGlvbpPLP%2FzMzMzMzM3LP%2BZmZmZmZmYArG1hdGVyaWFsVHlwZaVwaG9uZ6htYXRlcmlhbIGlY29sb3KnI2I4OTI1ZoeoY2hpbGRyZW6Qo2tleaVmbG9vcqN0YWelUGxhbmWkYXJnc5IUFKhwb3NpdGlvbpMAAACocm90YXRpb26Ty7%2F5HrhR64UfAACsbWF0ZXJpYWxUeXBlp2xhbWJlcnSGqGNoaWxkcmVukKNrZXmoYmFja2Ryb3CjdGFnpVBsYW5lpGFyZ3OSFBSocG9zaXRpb26TAAD9rG1hdGVyaWFsVHlwZadsYW1iZXJ0" width="100%" height="400px" frameborder="0"></iframe>

*Simple materials in action: phong, lambert, and basic materials with the same geometry as the PBR example below*

### Understanding Simple Material Types

The `materialType` parameter determines how an object interacts with lights:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Cylinder, Sphere, Octahedron, Torus, Box, Plane

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
            key="phong-cylinder",
        ),

        # Lambert material - simple matte
        Sphere(
            args=[0.7, 32, 32],
            position=[-3.5, 1.1, -1],
            materialType="lambert",
            material=dict(color="#6b4e3d"),
            key="lambert-sphere",
        ),

        # Basic material - unlit, always bright
        Octahedron(
            args=[0.9, 0],
            position=[-1.8, 1.5, 0.3],
            rotation=[0, 0, 0.393],
            materialType="basic",
            key="basic-octahedron",
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
            key="phong-torus",
        ),

        # Lambert material
        Box(
            args=[1.2, 1.2, 1.2],
            position=[0.4, 0.5, -2],
            materialType="lambert",
            material=dict(color="#a17c50"),
            key="lambert-box",
        ),

        # Phong material
        Sphere(
            args=[0.65, 32, 32],
            position=[1.8, 0.7, 0],
            materialType="phong",
            material=dict(color="#b8925f"),
            key="phong-sphere",
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

<iframe src="https://vuer.ai/?hideUI=true&reconnect=True&scene=hqNrZXmhMKN0YWelU2NlbmWidXCTAAEAqmJnQ2hpbGRyZW6Qq3Jhd0NoaWxkcmVulISoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FgAAAAAAAAhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHkBqHBvc2l0aW9ukwMDA4WoY2hpbGRyZW6Qo3RhZ7FQZXJzcGVjdGl2ZUNhbWVyYaNrZXmycGVyc3BlY3RpdmUtY2FtZXJhq21ha2VEZWZhdWx0w6hwb3NpdGlvbpP8AgSDqGNoaWxkcmVukKN0YWetT3JiaXRDb250cm9sc6NrZXmrb3JiLWNvbnRyb2yoY2hpbGRyZW6Yh6hjaGlsZHJlbpCjdGFnqEN5bGluZGVyo2tlea5tYXR0ZS1jeWxpbmRlcqRhcmdzlMs%2F6ZmZmZmZmss%2F6ZmZmZmZmss%2F4AAAAAAAACCocG9zaXRpb26Ty8AMAAAAAAAAyz%2FQAAAAAAAA%2F6xtYXRlcmlhbFR5cGWoc3RhbmRhcmSobWF0ZXJpYWyDpWNvbG9ypyM0YTM0Mjipcm91Z2huZXNzyz%2FuuFHrhR64qW1ldGFsbmVzcwCHqGNoaWxkcmVukKN0YWemU3BoZXJlo2tleaxtYXR0ZS1zcGhlcmWkYXJnc5PLP%2BZmZmZmZmYgIKhwb3NpdGlvbpPLwAwAAAAAAADLP%2FGZmZmZmZr%2FrG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIOlY29sb3KnIzZiNGUzZKlyb3VnaG5lc3MBqW1ldGFsbmVzcwCIqGNoaWxkcmVukKN0YWeqT2N0YWhlZHJvbqNrZXmwZ2xhc3Mtb2N0YWhlZHJvbqRhcmdzkss%2F7MzMzMzMzQCocG9zaXRpb26Ty7%2F8zMzMzMzNyz%2F4AAAAAAAAyz%2FTMzMzMzMzqHJvdGF0aW9ukwAAyz%2FZJul41P30rG1hdGVyaWFsVHlwZahwaHlzaWNhbKhtYXRlcmlhbIWlY29sb3KnI2ZmZmZmZqx0cmFuc21pc3Npb24BqXRoaWNrbmVzc8s%2F6ZmZmZmZmqlyb3VnaG5lc3MAo2lvcss%2F%2BAAAAAAAAIioY2hpbGRyZW6Qo3RhZ6VUb3J1c6NrZXmrZ2xhc3MtdG9ydXOkYXJnc5TLP%2BAAAAAAAADLP8MzMzMzMzMgQKhwb3NpdGlvbpMAyz%2FZmZmZmZmayz%2FpmZmZmZmaqHJvdGF0aW9uk8s%2F%2BSLQ5WBBiQAArG1hdGVyaWFsVHlwZahwaHlzaWNhbKhtYXRlcmlhbIWlY29sb3KnI2Q1ZThmZqx0cmFuc21pc3Npb27LP%2B3Cj1wo9cOpdGhpY2tuZXNzyz%2FgAAAAAAAAqXJvdWdobmVzc8s%2FtHrhR64Ue6Npb3LLP%2FczMzMzMzOIqGNoaWxkcmVukKN0YWejQm94o2tleapnbG9zc3ktYm94pGFyZ3OTyz%2FzMzMzMzMzyz%2FzMzMzMzMzyz%2FzMzMzMzMzqHBvc2l0aW9uk8s%2F2ZmZmZmZmss%2F4AAAAAAAAP6ocm90YXRpb26TAAAArG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIOlY29sb3KnI2ExN2M1MKlyb3VnaG5lc3PLP9R64UeuFHupbWV0YWxuZXNzyz%2FoAAAAAAAAh6hjaGlsZHJlbpCjdGFnplNwaGVyZaNrZXmtZ2xvc3N5LXNwaGVyZaRhcmdzk8s%2F5MzMzMzMzSAgqHBvc2l0aW9uk8s%2F%2FMzMzMzMzcs%2F5mZmZmZmZgCsbWF0ZXJpYWxUeXBlqHN0YW5kYXJkqG1hdGVyaWFsg6Vjb2xvcqcjYjg5MjVmqXJvdWdobmVzc8s%2FvCj1wo9cKaltZXRhbG5lc3PLP%2BgAAAAAAACHqGNoaWxkcmVukKNrZXmlZmxvb3KjdGFnpVBsYW5lpGFyZ3OSFBSocG9zaXRpb26TAAAAqHJvdGF0aW9uk8u%2F%2BR64UeuFHwAArG1hdGVyaWFsVHlwZadsYW1iZXJ0hqhjaGlsZHJlbpCja2V5qGJhY2tkcm9wo3RhZ6VQbGFuZaRhcmdzkhQUqHBvc2l0aW9ukwAA%2FaxtYXRlcmlhbFR5cGWnbGFtYmVydA%3D%3D" width="100%" height="400px" frameborder="0"></iframe>

*PBR materials with fine-tuned properties: matte (high roughness), glass (transmission), and glossy (low roughness) finishes*

### Using the material Parameter

The `material` parameter accepts a dictionary of properties for fine-grained control.

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
                roughness=0.96,
                metalness=0,
            ),
            key="matte-cylinder",
        ),

        # Matte sphere
        Sphere(
            args=[0.7, 32, 32],
            position=[-3.5, 1.1, -1],
            materialType="standard",
            material=dict(
                color="#6b4e3d",
                roughness=1,
                metalness=0,
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
                transmission=1,
                thickness=0.8,
                roughness=0,
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
                transmission=0.93,
                thickness=0.5,
                roughness=0.08,
                ior=1.45,
            ),
            key="glass-torus",
        ),

        # Glossy box
        Box(
            args=[1.2, 1.2, 1.2],
            position=[0.4, 0.5, -2],
            materialType="standard",
            material=dict(
                color="#a17c50",
                roughness=0.32,
                metalness=0.75,
            ),
            key="glossy-box",
        ),

        # Glossy sphere
        Sphere(
            args=[0.65, 32, 32],
            position=[1.8, 0.7, 0],
            materialType="standard",
            material=dict(
                color="#b8925f",
                roughness=0.11,
                metalness=0.75,
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
    )

    await session.forever()
```

## Texture Mapping

Finally, let's add texture maps to the floor and backdrop to create a more realistic environment:

<iframe src="https://vuer.ai/?hideUI=true&reconnect=True&scene=hqNrZXmhMKN0YWelU2NlbmWidXCTAAEAqmJnQ2hpbGRyZW6Qq3Jhd0NoaWxkcmVulISoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FgAAAAAAAAhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHkBqHBvc2l0aW9ukwMDA4WoY2hpbGRyZW6Qo3RhZ7FQZXJzcGVjdGl2ZUNhbWVyYaNrZXmycGVyc3BlY3RpdmUtY2FtZXJhq21ha2VEZWZhdWx0w6hwb3NpdGlvbpP8AgSDqGNoaWxkcmVukKN0YWetT3JiaXRDb250cm9sc6NrZXmrb3JiLWNvbnRyb2yoY2hpbGRyZW6Yh6hjaGlsZHJlbpCjdGFnqEN5bGluZGVyo2tlea5tYXR0ZS1jeWxpbmRlcqRhcmdzlMs%2F6ZmZmZmZmss%2F6ZmZmZmZmss%2F4AAAAAAAACCocG9zaXRpb26Ty8AMAAAAAAAAyz%2FQAAAAAAAA%2F6xtYXRlcmlhbFR5cGWoc3RhbmRhcmSobWF0ZXJpYWyDpWNvbG9ypyM0YTM0Mjipcm91Z2huZXNzyz%2FuuFHrhR64qW1ldGFsbmVzcwCHqGNoaWxkcmVukKN0YWemU3BoZXJlo2tleaxtYXR0ZS1zcGhlcmWkYXJnc5PLP%2BZmZmZmZmYgIKhwb3NpdGlvbpPLwAwAAAAAAADLP%2FGZmZmZmZr%2FrG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIOlY29sb3KnIzZiNGUzZKlyb3VnaG5lc3MBqW1ldGFsbmVzcwCIqGNoaWxkcmVukKN0YWeqT2N0YWhlZHJvbqNrZXmwZ2xhc3Mtb2N0YWhlZHJvbqRhcmdzkss%2F7MzMzMzMzQCocG9zaXRpb26Ty7%2F8zMzMzMzNyz%2F4AAAAAAAAyz%2FTMzMzMzMzqHJvdGF0aW9ukwAAyz%2FZJul41P30rG1hdGVyaWFsVHlwZahwaHlzaWNhbKhtYXRlcmlhbIWlY29sb3KnI2ZmZmZmZqx0cmFuc21pc3Npb24BqXRoaWNrbmVzc8s%2F6ZmZmZmZmqlyb3VnaG5lc3MAo2lvcss%2F%2BAAAAAAAAIioY2hpbGRyZW6Qo3RhZ6VUb3J1c6NrZXmrZ2xhc3MtdG9ydXOkYXJnc5TLP%2BAAAAAAAADLP8MzMzMzMzMgQKhwb3NpdGlvbpMAyz%2FZmZmZmZmayz%2FpmZmZmZmaqHJvdGF0aW9uk8s%2F%2BSLQ5WBBiQAArG1hdGVyaWFsVHlwZahwaHlzaWNhbKhtYXRlcmlhbIWlY29sb3KnI2Q1ZThmZqx0cmFuc21pc3Npb27LP%2B3Cj1wo9cOpdGhpY2tuZXNzyz%2FgAAAAAAAAqXJvdWdobmVzc8s%2FtHrhR64Ue6Npb3LLP%2FczMzMzMzOIqGNoaWxkcmVukKN0YWejQm94o2tleapnbG9zc3ktYm94pGFyZ3OTyz%2FzMzMzMzMzyz%2FzMzMzMzMzyz%2FzMzMzMzMzqHBvc2l0aW9uk8s%2F2ZmZmZmZmss%2F4AAAAAAAAP6ocm90YXRpb26TAAAArG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIOlY29sb3KnI2ExN2M1MKlyb3VnaG5lc3PLP9R64UeuFHupbWV0YWxuZXNzyz%2FoAAAAAAAAh6hjaGlsZHJlbpCjdGFnplNwaGVyZaNrZXmtZ2xvc3N5LXNwaGVyZaRhcmdzk8s%2F5MzMzMzMzSAgqHBvc2l0aW9uk8s%2F%2FMzMzMzMzcs%2F5mZmZmZmZgCsbWF0ZXJpYWxUeXBlqHN0YW5kYXJkqG1hdGVyaWFsg6Vjb2xvcqcjYjg5MjVmqXJvdWdobmVzc8s%2FvCj1wo9cKaltZXRhbG5lc3PLP%2BgAAAAAAACIqGNoaWxkcmVukKN0YWelUGxhbmWja2V5pWZsb29ypGFyZ3OSFBSocG9zaXRpb26TAAAAqHJvdGF0aW9uk8u%2F%2BR64UeuFHwAArG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIKjbWFw2U1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdnVlci1haS92dWVyL21haW4vZG9jcy9fc3RhdGljLzAzX2Zsb29yLmpwZ6lyb3VnaG5lc3PLP%2BzMzMzMzM2HqGNoaWxkcmVukKN0YWelUGxhbmWja2V5qGJhY2tkcm9wpGFyZ3OSFBSocG9zaXRpb26TAAD9rG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbIKjbWFw2VBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdnVlci1haS92dWVyL21haW4vZG9jcy9fc3RhdGljLzAzX2JhY2tkcm9wLmpwZ6lyb3VnaG5lc3PLP%2B5mZmZmZmY%3D" width="100%" height="400px" frameborder="0"></iframe>

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

## MaterialType="normal"
## MaterialType="depth"

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
