# 3.1.2 Component Index

## Overview

Vuer provides a rich library of 3D components for building interactive scenes. This index organizes all available components by category - click through to detailed documentation for each component.

## Primitive Geometries

Basic geometric shapes perfect for prototyping and simple visualizations.

<iframe src="https://vuer.ai/?grid=False&collapseMenu=True&initCamPos=-4%2C2%2C4&reconnect=True&scene=hqN0YWelU2NlbmWja2V5oTCidXCTAAEApGdyaWTCq3Jhd0NoaWxkcmVukoSoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FTMzMzMzMzhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHnLP%2B5mZmZmZmaocG9zaXRpb26TBQUFqGNoaWxkcmVumIaoY2hpbGRyZW6Qo3RhZ6hDeWxpbmRlcqNrZXmubWF0dGUtY3lsaW5kZXKkYXJnc5TLP%2BmZmZmZmZrLP%2BmZmZmZmZrLP%2BAAAAAAAAAgqHBvc2l0aW9uk8vADAAAAAAAAMs%2F0AAAAAAAAP%2BsbWF0ZXJpYWxUeXBlpWJhc2ljhqhjaGlsZHJlbpCjdGFnplNwaGVyZaNrZXmsbWF0dGUtc3BoZXJlpGFyZ3OTyz%2FmZmZmZmZmICCocG9zaXRpb26Ty8AMAAAAAAAAyz%2FxmZmZmZma%2F6xtYXRlcmlhbFR5cGWlYmFzaWOHqGNoaWxkcmVukKN0YWeqT2N0YWhlZHJvbqNrZXmwZ2xhc3Mtb2N0YWhlZHJvbqRhcmdzkss%2F7MzMzMzMzQCocG9zaXRpb26Ty7%2F8zMzMzMzNyz%2F4AAAAAAAAyz%2FTMzMzMzMzqHJvdGF0aW9ukwAAyz%2FZJul41P30rG1hdGVyaWFsVHlwZaViYXNpY4eoY2hpbGRyZW6Qo3RhZ6VUb3J1c6NrZXmrZ2xhc3MtdG9ydXOkYXJnc5TLP%2BAAAAAAAADLP8MzMzMzMzMgQKhwb3NpdGlvbpMAyz%2FZmZmZmZmayz%2FpmZmZmZmaqHJvdGF0aW9uk8s%2F%2BSLQ5WBBiQAArG1hdGVyaWFsVHlwZaViYXNpY4eoY2hpbGRyZW6Qo3RhZ6NCb3ija2V5qmdsb3NzeS1ib3ikYXJnc5PLP%2FMzMzMzMzPLP%2FMzMzMzMzPLP%2FMzMzMzMzOocG9zaXRpb26Tyz%2FZmZmZmZmayz%2FgAAAAAAAA%2Fqhyb3RhdGlvbpMAAACsbWF0ZXJpYWxUeXBlpWJhc2ljhqhjaGlsZHJlbpCjdGFnplNwaGVyZaNrZXmtZ2xvc3N5LXNwaGVyZaRhcmdzk8s%2F5MzMzMzMzSAgqHBvc2l0aW9uk8s%2F%2FMzMzMzMzcs%2F5mZmZmZmZgCsbWF0ZXJpYWxUeXBlpWJhc2ljh6hjaGlsZHJlbpCjdGFnpVBsYW5lo2tleaVmbG9vcqRhcmdzkhQUqHBvc2l0aW9ukwAAAKhyb3RhdGlvbpPLv%2FkeuFHrhR8AAKxtYXRlcmlhbFR5cGWnbGFtYmVydIaoY2hpbGRyZW6Qo3RhZ6VQbGFuZaNrZXmoYmFja2Ryb3CkYXJnc5IUFKhwb3NpdGlvbpMAAP2sbWF0ZXJpYWxUeXBlp2xhbWJlcnQ%3D" width="100%" height="400px" frameborder="0"></iframe>

*Building on our first example: adding more primitive shapes (cylinder, sphere, octahedron, torus) alongside the original box*

**Learn More:**
- [Primitive Geometries](02_primitives) - Complete guide to all basic shapes (Box, Sphere, Cylinder, Cone, Capsule, Plane, Circle, Ring, Torus, TorusKnot, Dodecahedron, Icosahedron, Octahedron, Tetrahedron)

## Mesh Components

Load and display custom 3D models from various formats.

<iframe src="https://vuer.ai/?collapseMenu=True&initCamPos=-4%2C2%2C4&reconnect=True&scene=h6hjaGlsZHJlbpGEqGNoaWxkcmVukYaoY2hpbGRyZW6Qo3RhZ6RVcmRmo2tleaExo3NyY9lSaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25hc2EtanBsL20yMDIwLXVyZGYtbW9kZWxzL21haW4vcm92ZXIvbTIwMjAudXJkZqtqb2ludFZhbHVlc4Cocm90YXRpb26Ty0AJHrhR64UfAACjdGFnp01vdmFibGWja2V5oTKocG9zaXRpb26TAADLP8MzMzMzMzOjdGFnpVNjZW5lo2tleaEzonVwkwAAAaRncmlkw6hzaG93TGV2YcKrcmF3Q2hpbGRyZW6ShKhjaGlsZHJlbpCjdGFnrEFtYmllbnRMaWdodKNrZXm1ZGVmYXVsdF9hbWJpZW50X2xpZ2h0qWludGVuc2l0eQGFqGNoaWxkcmVukKN0YWewRGlyZWN0aW9uYWxMaWdodKNrZXm5ZGVmYXVsdF9kaXJlY3Rpb25hbF9saWdodKlpbnRlbnNpdHkBpmhlbHBlcsM%3D" width="100%" height="350px" frameborder="0"></iframe>

*NASA's Mars 2020 Perseverance Rover loaded from a URDF file, demonstrating how to load complex robot models with articulated joints. The robot is wrapped in a Movable component for interactive manipulation.*

**Custom Meshes:**
- [TriMesh](02_trimesh) - Programmatic meshes from numpy arrays

**Point Clouds:**
- [PointCloud](02_pointcloud) - Direct numpy array point clouds
- [Ply](02_ply) - Stanford PLY file format
- [Pcd](02_pcd) - PCL point cloud format

**3D Model Formats:**
- [Obj](02_obj) - Wavefront OBJ files
- [Glb](02_glb) - GLB/GLTF files (modern standard)

**Robot Models:**
- [Urdf](02_urdf) - Robot models with articulated joints

## Advanced Rendering

**Gaussian Splatting:**
- [Splat](02_splat) - Standard splat format
- [LumaSplats](02_luma_splats) - Luma AI format
- [SparkSplats](02_spark_splats) - Spark format (optimized)

## Interactive Components

Enable user interaction with VR/AR controllers and mouse.

<iframe src="https://vuer.ai/?collapseMenu=True&initCamPos=0.2,0.9,0.2&reconnect=True&scene=hqhjaGlsZHJlbpGFqGNoaWxkcmVukYOoY2hpbGRyZW6Qo3RhZ6dHcmlwcGVyo2tlealncmlwcGVyLTGjdGFnp01vdmFibGWja2V5qW1vdmFibGUtMahwb3NpdGlvbpMAyz%2FgAAAAAAAAAKlzaG93RnJhbWXDo3RhZ6VTY2VuZaNrZXmhM6J1cJMAAQCkZ3JpZMOrcmF3Q2hpbGRyZW6ShKhjaGlsZHJlbpCjdGFnrEFtYmllbnRMaWdodKNrZXmnYW1iaWVudKlpbnRlbnNpdHnLP%2BAAAAAAAACFqGNoaWxkcmVukKN0YWewRGlyZWN0aW9uYWxMaWdodKNrZXmjc3VuqWludGVuc2l0eQGocG9zaXRpb26TAgMC" width="100%" height="350px" frameborder="0"></iframe>

*A robot gripper component wrapped in a Movable container, demonstrating interactive grabbing and manipulation. The gripper can be picked up and moved around the scene using VR controllers or mouse.*

**Components:**
- [Movable](02_movable) - Make objects grabbable and movable
- [Gripper](02_gripper) - Robot gripper visualization

## Camera and View Components

**Components:**
- [CameraView](02_camera_view) - Virtual camera for off-screen rendering
- [Frustum](02_frustum) - Visualize camera frustum

## Helper Components

Debugging and visualization aids.

<iframe src="https://vuer.ai/?collapseMenu=True&initCamPos=0,0.8,1.8&reconnect=True&scene=hqhjaGlsZHJlbpOFqGNoaWxkcmVukKN0YWesQ29vcmRzTWFya2Vyo2tleahjb29yZHMtMahwb3NpdGlvbpMAAAClc2NhbGXLP%2BAAAAAAAACHqGNoaWxkcmVukKN0YWelQXJyb3eja2V5p2Fycm93LTGocG9zaXRpb26Tyz%2FgAAAAAAAAyz%2FJmZmZmZmaAKhyb3RhdGlvbpMAAMs%2F%2BR64UeuFH6Vjb2xvcqNyZWSlc2NhbGXLP9MzMzMzMzOHqGNoaWxkcmVukKN0YWejQm94o2tleadyZWYtYm94pGFyZ3OWyz%2FJmZmZmZmayz%2FJmZmZmZmayz%2FJmZmZmZmaAQEBqHBvc2l0aW9uk8u%2F4AAAAAAAAMs%2FuZmZmZmZmgClY29sb3Kmb3JhbmdlrG1hdGVyaWFsVHlwZahzdGFuZGFyZKN0YWelU2NlbmWja2V5oTCidXCTAAEApGdyaWTDq3Jhd0NoaWxkcmVukoSoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FgAAAAAAAAhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHkBqHBvc2l0aW9ukwIDAg%3D%3D" width="100%" height="350px" frameborder="0"></iframe>

*Helper components for debugging and visualization: a coordinate marker showing the XYZ axes (red=X, green=Y, blue=Z), a red arrow pointing upward at 45 degrees, and an orange reference box. These are essential tools for understanding object positions and orientations.*

**Components:**
- [Grid](02_grid) - Ground grid plane
- [CoordsMarker](02_coords_marker) - Coordinate frame (RGB = XYZ)
- [Arrow](02_arrow) - 3D arrow indicator

## Text Components

2D and 3D text rendering.

<iframe src="https://vuer.ai/?collapseMenu=True&initCamPos=0,0.8,1.9&reconnect=True&scene=hqhjaGlsZHJlbpOLqGNoaWxkcmVukatIZWxsbyBWdWVyIaN0YWemVGV4dDNEo2tlead3ZWxjb21lpGZvbnTZQGh0dHBzOi8vdGhyZWVqcy5vcmcvZXhhbXBsZXMvZm9udHMvaGVsdmV0aWtlcl9ib2xkLnR5cGVmYWNlLmpzb26sYmV2ZWxFbmFibGVkw6liZXZlbFNpemXLP5R64UeuFHuuYmV2ZWxUaGlja25lc3PLP4R64UeuFHukc2l6Zcs%2F4AAAAAAAAKVjb2xvcqNyZWSlc2NhbGXLP9MzMzMzMzOocG9zaXRpb26TAMs%2F2ZmZmZmZmgCGqGNoaWxkcmVukapGaXhlZCBUZXh0o3RhZ6RUZXh0o2tleapmaXhlZC10ZXh0pWNvbG9ypWdyZWVuqGZvbnRTaXplyz%2FDMzMzMzMzqHBvc2l0aW9ukwDLP%2BAAAAAAAAAAhahjaGlsZHJlbpGGqGNoaWxkcmVukalCaWxsYm9hcmSjdGFnpFRleHSja2V5rmJpbGxib2FyZC10ZXh0pWNvbG9ypGJsdWWoZm9udFNpemXLP764UeuFHriocG9zaXRpb26TAAAAo3RhZ6lCaWxsYm9hcmSja2V5q2JpbGxib2FyZC0xpmZvbGxvd8OocG9zaXRpb26Tyz%2FgAAAAAAAAyz%2FzMzMzMzMzAKN0YWelU2NlbmWja2V5oTCidXCTAAEApGdyaWTCq3Jhd0NoaWxkcmVukoSoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FZmZmZmZmahahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHkBqHBvc2l0aW9ukwIDAg%3D%3D" width="100%" height="350px" frameborder="0"></iframe>

*Three types of text components: extruded 3D text "Hello Vuer" with beveled edges (Text3D), green fixed-size 2D text (Text), and blue billboard text that always faces the camera no matter where you look from (Billboard).*

**Components:**
- [Text](02_text) - 2D text in 3D space
- [Text3D](02_text3d) - Extruded 3D text
- [Billboard](02_billboard) - Text/mesh always facing camera

## Background Components

**Components:**
- [SceneBackground](02_scene_background) - Static background image
- [ImageBackground](02_image_background) - High-framerate background

## Organization Components

**Components:**
- [Group](02_group) - Group objects together
- [Pivot](02_pivot) - Custom rotation pivot point
- [Center](02_center) - Center objects at origin

## Quick Reference

| Category | Components |
|----------|-----------|
| **Primitives** | Box, Sphere, Cylinder, Cone, Capsule, Plane, Circle, Ring, Torus, TorusKnot |
| **Platonic Solids** | Dodecahedron, Icosahedron, Octahedron, Tetrahedron |
| **Custom Meshes** | TriMesh, PointCloud |
| **File Loaders** | Obj, Glb, Ply, Pcd, Urdf |
| **Advanced Render** | Splat, LumaSplats, SparkSplats |
| **Interactive** | Movable, Gripper |
| **Cameras** | CameraView, Frustum |
| **Helpers** | Grid, CoordsMarker, Arrow |
| **Text** | Text, Text3D, Billboard |
| **Background** | SceneBackground, ImageBackground |
| **Organization** | Group, Pivot, Center |

## Next Steps

- Learn about [Materials and Textures](03_materials_and_textures.md) to make your components look realistic
- Explore [Camera Control](04_camera_control.md) for better viewpoints
- Add [Lights](05_lights.md) to illuminate your scene
