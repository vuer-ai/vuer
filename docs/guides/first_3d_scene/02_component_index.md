# 3.1.2 Components

## Overview

Vuer provides a rich library of 3D components for building interactive scenes.

## Primitive Geometries

Basic geometric shapes perfect for prototyping and simple visualizations.

<iframe src="https://vuer.ai/?hideUI=true&reconnect=True&scene=hqN0YWelU2NlbmWja2V5oTCidXCTAAEAqmJnQ2hpbGRyZW6Qq3Jhd0NoaWxkcmVulISoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FgAAAAAAAAhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHkBqHBvc2l0aW9ukwMDA4WoY2hpbGRyZW6Qo3RhZ7FQZXJzcGVjdGl2ZUNhbWVyYaNrZXmycGVyc3BlY3RpdmUtY2FtZXJhq21ha2VEZWZhdWx0w6hwb3NpdGlvbpP8AgSDqGNoaWxkcmVukKN0YWetT3JiaXRDb250cm9sc6NrZXmrb3JiLWNvbnRyb2yoY2hpbGRyZW6YhqhjaGlsZHJlbpCjdGFnqEN5bGluZGVyo2tleahjeWxpbmRlcqRhcmdzlMs%2F6ZmZmZmZmss%2F6ZmZmZmZmss%2F4AAAAAAAACCocG9zaXRpb26Ty8AMAAAAAAAAyz%2FQAAAAAAAA%2F6xtYXRlcmlhbFR5cGWlYmFzaWOGqGNoaWxkcmVukKN0YWemU3BoZXJlo2tleahzcGhlcmUtMaRhcmdzk8s%2F5mZmZmZmZiAgqHBvc2l0aW9uk8vADAAAAAAAAMs%2F8ZmZmZmZmv%2BsbWF0ZXJpYWxUeXBlpWJhc2ljh6hjaGlsZHJlbpCjdGFnqk9jdGFoZWRyb26ja2V5qm9jdGFoZWRyb26kYXJnc5LLP%2BzMzMzMzM0AqHBvc2l0aW9uk8u%2F%2FMzMzMzMzcs%2F%2BAAAAAAAAMs%2F0zMzMzMzM6hyb3RhdGlvbpMAAMs%2F2SbpeNT99KxtYXRlcmlhbFR5cGWlYmFzaWOHqGNoaWxkcmVukKN0YWelVG9ydXOja2V5pXRvcnVzpGFyZ3OUyz%2FgAAAAAAAAyz%2FDMzMzMzMzIECocG9zaXRpb26TAMs%2F2ZmZmZmZmss%2F6ZmZmZmZmqhyb3RhdGlvbpPLP%2Fki0OVgQYkAAKxtYXRlcmlhbFR5cGWlYmFzaWOHqGNoaWxkcmVukKN0YWejQm94o2tleaNib3ikYXJnc5PLP%2FMzMzMzMzPLP%2FMzMzMzMzPLP%2FMzMzMzMzOocG9zaXRpb26Tyz%2FZmZmZmZmayz%2FgAAAAAAAA%2Fqhyb3RhdGlvbpMAAACsbWF0ZXJpYWxUeXBlpWJhc2ljhqhjaGlsZHJlbpCjdGFnplNwaGVyZaNrZXmoc3BoZXJlLTKkYXJnc5PLP%2BTMzMzMzM0gIKhwb3NpdGlvbpPLP%2FzMzMzMzM3LP%2BZmZmZmZmYArG1hdGVyaWFsVHlwZaViYXNpY4eoY2hpbGRyZW6Qo3RhZ6VQbGFuZaNrZXmlZmxvb3KkYXJnc5IUFKhwb3NpdGlvbpMAAACocm90YXRpb26Ty7%2F5HrhR64UfAACsbWF0ZXJpYWxUeXBlp2xhbWJlcnSGqGNoaWxkcmVukKN0YWelUGxhbmWja2V5qGJhY2tkcm9wpGFyZ3OSFBSocG9zaXRpb26TAAD9rG1hdGVyaWFsVHlwZadsYW1iZXJ0" width="100%" height="400px" frameborder="0"></iframe>

*Building on our first example: adding more primitive shapes (cylinder, sphere, octahedron, torus, plane) alongside the original box*

- [Primitive Geometries](../../components/primitives) - Box, Sphere, Cylinder, Cone, Capsule, Plane, Circle, Ring, Torus, TorusKnot, Dodecahedron, Icosahedron, Octahedron, Tetrahedron

## 3D Model Components

Load and display custom 3D models from various formats.

<iframe src="https://vuer.ai/?hideUI=true&reconnect=True&scene=h6hjaGlsZHJlbpGEqGNoaWxkcmVukYaoY2hpbGRyZW6Qo3RhZ6RVcmRmo2tleaExo3NyY9lSaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25hc2EtanBsL20yMDIwLXVyZGYtbW9kZWxzL21haW4vcm92ZXIvbTIwMjAudXJkZqtqb2ludFZhbHVlc4Cocm90YXRpb26Ty0AJHrhR64UfAACjdGFnp01vdmFibGWja2V5oTKocG9zaXRpb26TAADLP8MzMzMzMzOjdGFnpVNjZW5lo2tleaEzonVwkwAAAahzaG93TGV2YcKqYmdDaGlsZHJlbpCrcmF3Q2hpbGRyZW6VhKhjaGlsZHJlbpCjdGFnrEFtYmllbnRMaWdodKNrZXmnYW1iaWVudKlpbnRlbnNpdHnLP%2BAAAAAAAACFqGNoaWxkcmVukKN0YWewRGlyZWN0aW9uYWxMaWdodKNrZXmjc3VuqWludGVuc2l0eQGocG9zaXRpb26TAwMDhahjaGlsZHJlbpCjdGFnsVBlcnNwZWN0aXZlQ2FtZXJho2tlebJwZXJzcGVjdGl2ZS1jYW1lcmGrbWFrZURlZmF1bHTDqHBvc2l0aW9ukwADA4OoY2hpbGRyZW6Qo3RhZ61PcmJpdENvbnRyb2xzo2tleatvcmItY29udHJvbIOoY2hpbGRyZW6Qo3RhZ6RHcmlko2tleaRncmlk" width="100%" height="350px" frameborder="0"></iframe>

*NASA's Mars 2020 Perseverance Rover loaded from a URDF file, demonstrating how to load complex robot models with articulated joints. The robot is wrapped in a Movable component for interactive manipulation.*

- [TriMesh](../../components/trimesh)
- [PointCloud](../../components/pointcloud)
- [Ply](../../components/ply)
- [Pcd](../../components/pcd)
- [Obj](../../components/obj)
- [Glb](../../components/glb)
- [Urdf](../../components/urdf)

## Gaussian Splatting

- [Splat](../../components/splat)
- [LumaSplats](../../components/luma_splats)
- [SparkSplats](../../components/spark_splats)

## Interactive Components

Enable user interaction with VR/AR controllers and mouse.

<iframe src="https://vuer.ai/?hideUI=true&reconnect=True&scene=h6hjaGlsZHJlbpGFqGNoaWxkcmVukYOoY2hpbGRyZW6Qo3RhZ6dHcmlwcGVyo2tleadncmlwcGVyo3RhZ6dNb3ZhYmxlo2tleadtb3ZhYmxlqHBvc2l0aW9ukwDLP%2BAAAAAAAAAAqXNob3dGcmFtZcOjdGFnpVNjZW5lo2tleaEzonVwkwABAKhzaG93TGV2YcKqYmdDaGlsZHJlbpCrcmF3Q2hpbGRyZW6VhKhjaGlsZHJlbpCjdGFnrEFtYmllbnRMaWdodKNrZXmnYW1iaWVudKlpbnRlbnNpdHnLP%2BAAAAAAAACFqGNoaWxkcmVukKN0YWewRGlyZWN0aW9uYWxMaWdodKNrZXmjc3VuqWludGVuc2l0eQGocG9zaXRpb26TAwMDhahjaGlsZHJlbpCjdGFnsVBlcnNwZWN0aXZlQ2FtZXJho2tlebJwZXJzcGVjdGl2ZS1jYW1lcmGrbWFrZURlZmF1bHTDqHBvc2l0aW9ukwDLP%2FgAAAAAAADLP%2BZmZmZmZmaDqGNoaWxkcmVukKN0YWetT3JiaXRDb250cm9sc6NrZXmrb3JiLWNvbnRyb2yDqGNoaWxkcmVukKN0YWekR3JpZKNrZXmkZ3JpZA%3D%3D" width="100%" height="350px" frameborder="0"></iframe>

*A robot gripper component wrapped in a Movable container, demonstrating interactive grabbing and manipulation. The gripper can be picked up and moved around the scene using VR controllers or mouse.*

- [Movable](../../components/movable)
- [Gripper](../../components/gripper)
- [Hands](../../components/hands)
- [MotionController](../../components/motion_controllers)

## Camera and View Components

- [CameraView](../../components/camera_views)
- [Frustum](../../components/frustum)

## Helper Components

<iframe src="https://vuer.ai/?hideUI=true&reconnect=True&scene=h6hjaGlsZHJlbpOFqGNoaWxkcmVukKN0YWesQ29vcmRzTWFya2Vyo2tleahjb29yZHMtMahwb3NpdGlvbpMAAAClc2NhbGXLP%2BAAAAAAAACHqGNoaWxkcmVukKN0YWelQXJyb3eja2V5p2Fycm93LTGocG9zaXRpb26Tyz%2FgAAAAAAAAyz%2FJmZmZmZmaAKhyb3RhdGlvbpMAAMs%2F%2BR64UeuFH6Vjb2xvcqNyZWSlc2NhbGXLP9MzMzMzMzOHqGNoaWxkcmVukKN0YWejQm94o2tleaNib3ikYXJnc5bLP8mZmZmZmZrLP8mZmZmZmZrLP8mZmZmZmZoBAQGocG9zaXRpb26Ty7%2FgAAAAAAAAyz%2B5mZmZmZmaAKVjb2xvcqZvcmFuZ2WsbWF0ZXJpYWxUeXBlqHN0YW5kYXJko3RhZ6VTY2VuZaNrZXmhM6J1cJMAAQCoc2hvd0xldmHCqmJnQ2hpbGRyZW6Qq3Jhd0NoaWxkcmVulYSoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FgAAAAAAAAhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHkBqHBvc2l0aW9ukwMDA4WoY2hpbGRyZW6Qo3RhZ7FQZXJzcGVjdGl2ZUNhbWVyYaNrZXmycGVyc3BlY3RpdmUtY2FtZXJhq21ha2VEZWZhdWx0w6hwb3NpdGlvbpMAyz%2FmZmZmZmZmAYOoY2hpbGRyZW6Qo3RhZ61PcmJpdENvbnRyb2xzo2tleatvcmItY29udHJvbIOoY2hpbGRyZW6Qo3RhZ6RHcmlko2tleaRncmlk" width="100%" height="350px" frameborder="0"></iframe>

*Helper components for debugging and visualization: a coordinate marker showing the XYZ axes (red=X, green=Y, blue=Z), a red arrow pointing upward at 45 degrees, and an orange reference box. These are essential tools for understanding object positions and orientations.*

**Components:**
- [Grid](../../components/grid)
- [CoordsMarker](../../components/coords_marker)
- [Arrow](../../components/arrow)
- [Line](../../components/line)

## Text Components

<iframe src="https://vuer.ai/?hideUI=true&reconnect=True&scene=h6hjaGlsZHJlbpKLqGNoaWxkcmVukaZUZXh0M0SjdGFnplRleHQzRKNrZXmmdGV4dDNEpGZvbnTZQGh0dHBzOi8vdGhyZWVqcy5vcmcvZXhhbXBsZXMvZm9udHMvaGVsdmV0aWtlcl9ib2xkLnR5cGVmYWNlLmpzb26sYmV2ZWxFbmFibGVkw6liZXZlbFNpemXLP5R64UeuFHuuYmV2ZWxUaGlja25lc3PLP4R64UeuFHukc2l6Zcs%2F4AAAAAAAAKVjb2xvcqNyZWSlc2NhbGXLP9MzMzMzMzOocG9zaXRpb26TAMs%2FyZmZmZmZmgCGqGNoaWxkcmVukaRUZXh0o3RhZ6RUZXh0o2tleaR0ZXh0pWNvbG9ypWdyZWVuqGZvbnRTaXplyz%2FDMzMzMzMzqHBvc2l0aW9ukwDLP%2BAAAAAAAAAAo3RhZ6VTY2VuZaNrZXmhM6J1cJMAAQCoc2hvd0xldmHCqmJnQ2hpbGRyZW6Qq3Jhd0NoaWxkcmVulYSoY2hpbGRyZW6Qo3RhZ6xBbWJpZW50TGlnaHSja2V5p2FtYmllbnSpaW50ZW5zaXR5yz%2FgAAAAAAAAhahjaGlsZHJlbpCjdGFnsERpcmVjdGlvbmFsTGlnaHSja2V5o3N1bqlpbnRlbnNpdHkBqHBvc2l0aW9ukwMDA4WoY2hpbGRyZW6Qo3RhZ7FQZXJzcGVjdGl2ZUNhbWVyYaNrZXmycGVyc3BlY3RpdmUtY2FtZXJhq21ha2VEZWZhdWx0w6hwb3NpdGlvbpMAyz%2FpmZmZmZmaAYOoY2hpbGRyZW6Qo3RhZ61PcmJpdENvbnRyb2xzo2tleatvcmItY29udHJvbIOoY2hpbGRyZW6Qo3RhZ6RHcmlko2tleaRncmlk" width="100%" height="350px" frameborder="0"></iframe>

*Three types of text components: extruded 3D text "Hello Vuer" with beveled edges (Text3D), green fixed-size 2D text (Text), and blue billboard text that always faces the camera no matter where you look from (Billboard).*

- [Text](../../components/text)
- [Text3D](../../components/text3d)
- [Billboard](../../components/billboard)

## Background Components

- [SceneBackground](../../components/scene_background)
- [ImageBackground](../../components/image_background)

## Organization Components

- [Group](../../components/group)
- [Pivot](../../components/pivot)
- [Center](../../components/center)

## Next Steps

- Learn about [Materials and Textures](03_materials_and_textures.md) to make your components look realistic
- Explore [Camera Control](04_camera_control.md) for better viewpoints
- Add [Lights](05_lights.md) to illuminate your scene
