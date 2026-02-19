from typing import List, Literal

import numpy as np
from numpy.typing import NDArray

from .html_components import BlockElement, Element, Img


class SceneElement(BlockElement):
  pass


class Frustum(SceneElement):
  """Camera Frustum

  :param position: An optional tuple of three numbers representing the position.
  :type position: tuple[float, float, float]
  :param rotation: An optional tuple of three numbers representing the rotation.
  :type rotation: tuple[float, float, float]
  :param matrix: An optional tuple of sixteen numbers representing the matrix.
  :type matrix: tuple[float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float]
  :param aspect: An optional number representing the aspect.
  :type aspect: float
  :param focus: An optional number representing the focus.
  :type focus: float
  :param fov: An optional number representing the field of view.
  :type fov: float
  :param near: An optional number representing the near field.
  :type near: float
  :param far: An optional number representing the far field.
  :type far: float
  :param scale: An optional number representing the scale.
  :type scale: float
  :param upScale: An optional number representing the up scale.
  :type upScale: float
  :param focalLength: An optional number representing the focal length.
  :type focalLength: float
  :param showUp: An optional boolean indicating whether to show up.
  :type showUp: bool
  :param showFrustum: An optional boolean indicating whether to show the frustum.
  :type showFrustum: bool
  :param showFocalPlane: An optional boolean indicating whether to show the focal plane.
  :type showFocalPlane: bool
  :param showImagePlane: An optional boolean indicating whether to show the image plane.
  :type showImagePlane: bool
  :param src: An optional string representing the source.
  :type src: str
  :param colorOrigin: An optional ColorRepresentation for the origin color.
  :type colorOrigin: ColorRepresentation
  :param colorFrustum: An optional ColorRepresentation for the frustum color.
  :type colorFrustum: ColorRepresentation
  :param colorCone: An optional ColorRepresentation for the cone color.
  :type colorCone: ColorRepresentation
  :param colorFocalPlane: An optional ColorRepresentation for the focal plane color.
  :type colorFocalPlane: ColorRepresentation
  :param colorUp: An optional ColorRepresentation for the up color.
  :type colorUp: ColorRepresentation
  :param colorTarget: An optional ColorRepresentation for the target color.
  :type colorTarget: ColorRepresentation
  :param colorCross: An optional ColorRepresentation for the cross color.
  :type colorCross: ColorRepresentation
  """

  tag = "Frustum"


class PerspectiveFrustum(SceneElement):
  """
  Frustum visualization for perspective cameras.

  Shows the typical pyramid-shaped frustum with optional up vector indicator.
  Children are inserted inside the frustum group.

  :param position: Position of the frustum in 3D space [x, y, z].
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation of the frustum in Euler angles [x, y, z].
  :type rotation: tuple[float, float, float], optional
  :param fov: Field of view in degrees. Defaults to 50.
  :type fov: float, optional
  :param aspect: Aspect ratio (width/height). Defaults to 4/3.
  :type aspect: float, optional
  :param zoom: Zoom factor. Defaults to 1.
  :type zoom: float, optional
  :param near: Near clipping plane distance. Defaults to 0.1.
  :type near: float, optional
  :param far: Far clipping plane distance. Defaults to 1.0.
  :type far: float, optional
  :param showFrustum: Whether to show the frustum wireframe. Defaults to True.
  :type showFrustum: bool, optional
  :param showUp: Whether to show the up vector indicator. Defaults to True.
  :type showUp: bool, optional
  :param colorFrustum: Color of the frustum wireframe. Defaults to 0xffaa00.
  :type colorFrustum: int, optional
  :param colorCone: Color of the cone indicator. Defaults to 0xff0000.
  :type colorCone: int, optional
  :param colorUp: Color of the up vector indicator. Defaults to 0x00aaff.
  :type colorUp: int, optional
  :param layer: Scene layer for this frustum visualization.
  :type layer: int, optional
  :param children: Child elements rendered inside the frustum group.
  :type children: list, optional
  """

  tag = "PerspectiveFrustum"


class FisheyeFrustum(SceneElement):
  """
  Frustum visualization for fisheye/equidistant cameras.

  Shows a spherical frustum for wide-angle fisheye lenses.
  Children are inserted inside the frustum group.

  :param position: Position of the frustum in 3D space [x, y, z].
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation of the frustum in Euler angles [x, y, z].
  :type rotation: tuple[float, float, float], optional
  :param fov: Field of view in degrees. Defaults to 180.
  :type fov: float, optional
  :param aspect: Aspect ratio (width/height). Defaults to 1.
  :type aspect: float, optional
  :param near: Near clipping plane distance. Defaults to 0.1.
  :type near: float, optional
  :param far: Far clipping plane distance. Defaults to 1.0.
  :type far: float, optional
  :param showFrustum: Whether to show the frustum wireframe. Defaults to True.
  :type showFrustum: bool, optional
  :param showUp: Whether to show the up vector indicator. Defaults to True.
  :type showUp: bool, optional
  :param colorFrustum: Color of the frustum wireframe. Defaults to 0xffaa00.
  :type colorFrustum: int, optional
  :param colorCone: Color of the cone indicator. Defaults to 0xff0000.
  :type colorCone: int, optional
  :param colorUp: Color of the up vector indicator. Defaults to 0x00aaff.
  :type colorUp: int, optional
  :param layer: Scene layer for this frustum visualization.
  :type layer: int, optional
  :param children: Child elements rendered inside the frustum group.
  :type children: list, optional
  """

  tag = "FisheyeFrustum"


class OrthographicFrustum(SceneElement):
  """
  Frustum visualization for orthographic cameras.

  Shows a box-shaped frustum for orthographic projection.
  Children are inserted inside the frustum group.

  :param position: Position of the frustum in 3D space [x, y, z].
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation of the frustum in Euler angles [x, y, z].
  :type rotation: tuple[float, float, float], optional
  :param width: Width of the orthographic view. Defaults to 1.
  :type width: float, optional
  :param height: Height of the orthographic view. Defaults to 1.
  :type height: float, optional
  :param zoom: Zoom factor. Defaults to 1.
  :type zoom: float, optional
  :param near: Near clipping plane distance. Defaults to 0.1.
  :type near: float, optional
  :param far: Far clipping plane distance. Defaults to 1.0.
  :type far: float, optional
  :param showFrustum: Whether to show the frustum wireframe. Defaults to True.
  :type showFrustum: bool, optional
  :param showUp: Whether to show the up vector indicator. Defaults to True.
  :type showUp: bool, optional
  :param colorFrustum: Color of the frustum wireframe. Defaults to 0xffaa00.
  :type colorFrustum: int, optional
  :param colorUp: Color of the up vector indicator. Defaults to 0x00aaff.
  :type colorUp: int, optional
  :param layer: Scene layer for this frustum visualization.
  :type layer: int, optional
  :param children: Child elements rendered inside the frustum group.
  :type children: list, optional
  """

  tag = "OrthographicFrustum"


class CameraHelper(SceneElement):
  tag = "CameraHelper"


class group(SceneElement):
  tag = "group"
  children = []


class mesh(SceneElement):
  tag = "mesh"
  children = []


class TriMesh(SceneElement):
  """
  Triangle mesh component for custom 3D geometry.

  Allows creation of arbitrary triangle meshes by specifying vertices, faces,
  colors, and UV coordinates. Useful for custom geometry or procedurally
  generated meshes.

  :param vertices: Vertex positions as Nx3 array [x, y, z]
  :type vertices: NDArray[np.float16]
  :param faces: Triangle face indices as Nx3 array
  :type faces: NDArray[np.uint32]
  :param colors: Vertex colors as Nx3 array [r, g, b] (0-255)
  :type colors: NDArray[np.uint8], optional
  :param uv: UV texture coordinates as Nx2 array
  :type uv: NDArray[np.float16], optional
  :param children: Child elements
  :type children: list, optional

  Example Usage::

      from vuer.schemas import TriMesh
      import numpy as np

      # Simple triangle
      vertices = np.array([
          [0, 0, 0],
          [1, 0, 0],
          [0.5, 1, 0]
      ], dtype=np.float16)

      faces = np.array([[0, 1, 2]], dtype=np.uint32)

      colors = np.array([
          [255, 0, 0],
          [0, 255, 0],
          [0, 0, 255]
      ], dtype=np.uint8)

      TriMesh(
          vertices=vertices,
          faces=faces,
          colors=colors,
          key="triangle"
      )
  """

  tag = "TriMesh"
  children = []

  vertices: NDArray[np.float16] = None
  # note: Uint16 is too few. Quickly overflows
  faces: NDArray[np.uint32] = None
  colors: NDArray[np.uint8] = None
  uv: NDArray[np.float16] = None

  def __post_init__(self, **kwargs):
    self.vertices = self.vertices.astype(np.float16).flatten().tobytes()

    # uinit16 is too few at 65536. Have to use uint32.
    self.faces = self.faces.astype(np.uint32).flatten().tobytes()

    if self.colors is not None:
      if self.colors.shape[-1] == 4:
        self.colors = self.colors[:, :3]

      # send only integers: https://stackoverflow.com/questions/34669537
      if self.colors.dtype != np.uint8:
        self.colors *= 255
        self.colors = self.colors.astype(np.uint8)

      self.colors = self.colors.flatten().tobytes()

    if self.uv is not None:
      self.uv = self.uv.astype(np.float16).flatten().tobytes()


class PointCloud(SceneElement):
  """PointCould element, highly optimized for payload size and speed.

  :param vertices: An optional numpy array of shape (N, 3) containing the vertices of the pointcloud.
  :type  vertices: NDArray[np.float16]
  :param colors: An optional numpy array of shape (N, 3) containing the colors of the point cloud.
  :type  color: NDArray[np.uint8]
  :param size: An optional float that sets the size of the points.
  :type  size: float
  :param key: str An optional string that sets the key of the element.
  :type  key: str

  Usage::

      sess.upsert @ PointCloud(
          vertices=np.random.rand(1000, 3),
          colors=np.random.rand(1000, 3),
          size=0.01,
          key="pointcloud",
      )

  """

  tag: str = "PointCloud"
  vertices: NDArray[np.float16] = None
  """An optional numpy array of shape (N, 3) containing the vertices of the point cloud."""
  colors: NDArray[np.uint8] = None
  """An optional numpy array of shape (N, 3) containing the colors of the point cloud."""
  children = []

  def __post_init__(self, **kwargs):
    self.vertices = self.vertices.astype(np.float16).flatten().tobytes()

    if self.colors is None:
      return

    if self.colors.shape[-1] == 4:
      self.colors = self.colors[:, :3]

    if self.colors.dtype != np.uint8:
      # todo: use this and send only integers: https://stackoverflow.com/questions/34669537
      self.colors *= 255
      self.colors = self.colors.astype(np.uint8)

    self.colors = self.colors.flatten().tobytes()


p = PointCloud


class Box(SceneElement):
  """
  Creates a box (rectangular cuboid) geometry.

  :param args: Geometry parameters [width, height, depth, widthSegments, heightSegments, depthSegments]
  :type args: tuple[float, float, float, int, int, int], optional, default (1, 1, 1, 1, 1, 1)

  **Geometry Parameters:**

  - **width**: Box width along X axis
  - **height**: Box height along Y axis
  - **depth**: Box depth along Z axis
  - **widthSegments**: Number of segmented faces along the width (min: 1)
  - **heightSegments**: Number of segmented faces along the height (min: 1)
  - **depthSegments**: Number of segmented faces along the depth (min: 1)

  Example Usage::

      from vuer.schemas import Box

      # Simple box with default dimensions
      Box(key="box1")

      # Custom dimensions
      Box(args=(2, 1, 0.5), key="box2")

      # High-poly box with many segments
      Box(args=(1, 1, 1, 10, 10, 10), key="box3")
  """

  tag = "Box"


class Capsule(SceneElement):
  """
  Creates a capsule geometry (cylinder with hemispherical ends).

  :param args: Geometry parameters [radius, height, capSegments, radialSegments, heightSegments]
  :type args: tuple[float, float, int, int, int], optional, default (1, 1, 4, 8, 1)

  **Geometry Parameters:**

  - **radius**: Radius of the capsule body and caps
  - **height**: Height of the cylindrical section (excluding caps)
  - **capSegments**: Number of curve segments for the hemispherical caps (1-32)
  - **radialSegments**: Number of segmented faces around the circumference (1-64)
  - **heightSegments**: Number of segmented faces along the height (1-32)

  Example Usage::

      from vuer.schemas import Capsule

      # Simple capsule
      Capsule(key="capsule1")

      # Tall thin capsule
      Capsule(args=(0.2, 3, 4, 8, 1), key="capsule2")
  """

  tag = "Capsule"


class Cone(SceneElement):
  """
  Creates a cone geometry.

  :param args: Geometry parameters [radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength]
  :type args: tuple[float, float, int, int, bool, float, float], optional, default (1, 1, 8, 1, False, 0, 2π)

  **Geometry Parameters:**

  - **radius**: Radius of the base of the cone
  - **height**: Height of the cone
  - **radialSegments**: Number of segmented faces around the circumference (3-128)
  - **heightSegments**: Number of segmented faces along the height (1-64)
  - **openEnded**: Whether the base of the cone is open or capped
  - **thetaStart**: Start angle for first segment (radians, 0-2π)
  - **thetaLength**: Central angle of the circular sector (radians, 0-2π)

  Example Usage::

      from vuer.schemas import Cone

      # Simple cone
      Cone(key="cone1")

      # Half cone (180 degrees)
      Cone(args=(1, 1, 8, 1, False, 0, 3.14159), key="half-cone")
  """

  tag = "Cone"


class Circle(SceneElement):
  """
  Creates a circle (flat disc) geometry.

  :param args: Geometry parameters [radius, segments, thetaStart, thetaLength]
  :type args: tuple[float, int, float, float], optional, default (1, 8, 0, 2π)

  **Geometry Parameters:**

  - **radius**: Radius of the circle
  - **segments**: Number of segments (3-128), minimum 3
  - **thetaStart**: Start angle for first segment (radians, 0-2π)
  - **thetaLength**: Central angle of the circular sector (radians, 0-2π)

  Example Usage::

      from vuer.schemas import Circle

      # Full circle
      Circle(key="circle1")

      # Semi-circle
      Circle(args=(1, 32, 0, 3.14159), key="semi-circle")
  """

  tag = "Circle"


class Cylinder(SceneElement):
  """
  Creates a cylinder geometry.

  :param args: Geometry parameters [radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength]
  :type args: tuple[float, float, float, int, int, bool, float, float], optional, default (1, 1, 1, 8, 1, False, 0, 2π)

  **Geometry Parameters:**

  - **radiusTop**: Radius of the cylinder at the top
  - **radiusBottom**: Radius of the cylinder at the bottom
  - **height**: Height of the cylinder
  - **radialSegments**: Number of segmented faces around the circumference (3-128)
  - **heightSegments**: Number of segmented faces along the height (1-64)
  - **openEnded**: Whether the ends of the cylinder are open or capped
  - **thetaStart**: Start angle for first segment (radians, 0-2π)
  - **thetaLength**: Central angle of the circular sector (radians, 0-2π)

  Example Usage::

      from vuer.schemas import Cylinder

      # Simple cylinder
      Cylinder(key="cylinder1")

      # Cone-like cylinder (different top/bottom radii)
      Cylinder(args=(0.5, 1, 2, 16, 1, False, 0, 6.28), key="tapered")
  """

  tag = "Cylinder"


class Dodecahedron(SceneElement):
  """
  Creates a dodecahedron geometry (12-faced polyhedron).

  :param args: Geometry parameters [radius, detail]
  :type args: tuple[float, int], optional, default (1, 0)

  **Geometry Parameters:**

  - **radius**: Radius of the dodecahedron
  - **detail**: Level of subdivision (0-5), higher values create more faces

  Example Usage::

      from vuer.schemas import Dodecahedron

      # Simple dodecahedron
      Dodecahedron(key="dodeca1")

      # High-poly subdivided dodecahedron
      Dodecahedron(args=(1, 3), key="dodeca2")
  """

  tag = "Dodecahedron"


class Edges(SceneElement):
  """
  Creates edges geometry from another geometry.

  :param args: Geometry parameters [geometry, thresholdAngle]
  :type args: tuple[any, float], optional

  **Geometry Parameters:**

  - **geometry**: Source geometry to extract edges from
  - **thresholdAngle**: Angle threshold in degrees (0-180) for edge detection

  Example Usage::

      from vuer.schemas import Edges

      Edges(args=(geometry, 15), key="edges1")
  """

  tag = "Edges"


class Extrude(SceneElement):
  """
  Creates extruded geometry from 2D shapes.

  :param shapes: 2D shape(s) to extrude
  :type shapes: any
  :param options: Extrusion parameters
  :type options: dict, optional

  **Options Parameters:**

  - **curveSegments**: Number of curve segments (default: 12)
  - **steps**: Number of steps along extrusion depth (default: 1)
  - **depth**: Extrusion depth (default: 1)
  - **bevelEnabled**: Enable beveling (default: True)
  - **bevelThickness**: Bevel thickness (default: 0.2)
  - **bevelSize**: Bevel size (default: 0.1)
  - **bevelOffset**: Bevel offset (default: 0)
  - **bevelSegments**: Number of bevel segments (default: 3)

  Example Usage::

      from vuer.schemas import Extrude

      Extrude(
          shapes=shape,
          options=dict(depth=2, bevelEnabled=True),
          key="extrude1"
      )
  """

  tag = "Extrude"


class Icosahedron(SceneElement):
  """
  Creates an icosahedron geometry (20-faced polyhedron).

  :param args: Geometry parameters [radius, detail]
  :type args: tuple[float, int], optional, default (1, 0)

  **Geometry Parameters:**

  - **radius**: Radius of the icosahedron
  - **detail**: Level of subdivision (0-5), higher values create more faces

  Example Usage::

      from vuer.schemas import Icosahedron

      # Simple icosahedron
      Icosahedron(key="icosa1")

      # Subdivided sphere-like icosahedron
      Icosahedron(args=(1, 2), key="icosa2")
  """

  tag = "Icosahedron"


class Lathe(SceneElement):
  """
  Creates geometry by rotating a 2D profile around an axis.

  :param args: Geometry parameters [points, segments, phiStart, phiLength]
  :type args: tuple[list, int, float, float], optional, default ([], 12, 0, 2π)

  **Geometry Parameters:**

  - **points**: Array of 2D points defining the profile to rotate
  - **segments**: Number of circumferential segments (3-128)
  - **phiStart**: Start angle for rotation (radians, 0-2π)
  - **phiLength**: Angle of rotation (radians, 0-2π)

  Example Usage::

      from vuer.schemas import Lathe

      points = [[0, 0], [1, 0.5], [0.5, 1]]
      Lathe(args=(points, 32, 0, 6.28), key="lathe1")
  """

  tag = "Lathe"


class Octahedron(SceneElement):
  """
  Creates an octahedron geometry (8-faced polyhedron).

  :param args: Geometry parameters [radius, detail]
  :type args: tuple[float, int], optional, default (1, 0)

  **Geometry Parameters:**

  - **radius**: Radius of the octahedron
  - **detail**: Level of subdivision (0-5), higher values create more faces

  Example Usage::

      from vuer.schemas import Octahedron

      # Simple octahedron
      Octahedron(key="octa1")

      # Subdivided octahedron
      Octahedron(args=(1, 2), key="octa2")
  """

  tag = "Octahedron"


class Plane(SceneElement):
  """
  Creates a plane (flat rectangle) geometry.

  :param args: Geometry parameters [width, height, widthSegments, heightSegments]
  :type args: tuple[float, float, int, int], optional, default (1, 1, 1, 1)

  **Geometry Parameters:**

  - **width**: Width of the plane along X axis
  - **height**: Height of the plane along Y axis
  - **widthSegments**: Number of segmented faces along the width (1-100)
  - **heightSegments**: Number of segmented faces along the height (1-100)

  Example Usage::

      from vuer.schemas import Plane

      # Simple plane
      Plane(key="plane1")

      # High-poly plane (useful for displacement mapping)
      Plane(args=(10, 10, 50, 50), key="terrain")
  """

  tag = "Plane"


class Polyhedron(SceneElement):
  """
  Creates a custom polyhedron geometry from vertices and indices.

  :param args: Geometry parameters [vertices, indices, radius, detail]
  :type args: tuple[list[float], list[int], float, int], optional, default ([], [], 1, 0)

  **Geometry Parameters:**

  - **vertices**: Flat array of vertex coordinates [x1,y1,z1, x2,y2,z2, ...]
  - **indices**: Flat array of face indices
  - **radius**: Radius of the polyhedron
  - **detail**: Level of subdivision (0-5)

  Example Usage::

      from vuer.schemas import Polyhedron

      vertices = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1]
      indices = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1]
      Polyhedron(args=(vertices, indices, 1, 0), key="poly1")
  """

  tag = "Polyhedron"


class Ring(SceneElement):
  """
  Creates a ring (flat annulus) geometry.

  :param args: Geometry parameters [innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength]
  :type args: tuple[float, float, int, int, float, float], optional, default (0.5, 1, 8, 1, 0, 2π)

  **Geometry Parameters:**

  - **innerRadius**: Inner radius of the ring
  - **outerRadius**: Outer radius of the ring
  - **thetaSegments**: Number of segments around the circumference (3-128)
  - **phiSegments**: Number of segments along the radius (1-32)
  - **thetaStart**: Start angle for first segment (radians, 0-2π)
  - **thetaLength**: Central angle of the circular sector (radians, 0-2π)

  Example Usage::

      from vuer.schemas import Ring

      # Simple ring
      Ring(key="ring1")

      # Thick ring with high detail
      Ring(args=(0.3, 1, 64, 8, 0, 6.28), key="ring2")
  """

  tag = "Ring"


class Shape(SceneElement):
  """
  Creates 2D shape geometry from paths.

  :param args: Geometry parameters [shapes, curveSegments]
  :type args: tuple[any, int], optional

  **Geometry Parameters:**

  - **shapes**: Shape definition or array of shapes
  - **curveSegments**: Number of curve segments (1-100)

  Example Usage::

      from vuer.schemas import Shape

      Shape(args=(shape, 12), key="shape1")
  """

  tag = "Shape"


class Sphere(SceneElement):
  """
  Creates a sphere geometry.

  :param args: Geometry parameters [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength]
  :type args: tuple[float, int, int, float, float, float, float], optional, default (1, 32, 16, 0, 2π, 0, π)

  **Geometry Parameters:**

  - **radius**: Radius of the sphere
  - **widthSegments**: Number of horizontal segments (3-128)
  - **heightSegments**: Number of vertical segments (2-64)
  - **phiStart**: Horizontal starting angle (radians, 0-2π)
  - **phiLength**: Horizontal sweep angle (radians, 0-2π)
  - **thetaStart**: Vertical starting angle (radians, 0-π)
  - **thetaLength**: Vertical sweep angle (radians, 0-π)

  Example Usage::

      from vuer.schemas import Sphere

      # Simple sphere
      Sphere(key="sphere1")

      # High-poly sphere
      Sphere(args=(1, 64, 32), key="sphere2")

      # Hemisphere
      Sphere(args=(1, 32, 16, 0, 6.28, 0, 1.57), key="hemisphere")
  """

  tag = "Sphere"


class Tetrahedron(SceneElement):
  """
  Creates a tetrahedron geometry (4-faced polyhedron).

  :param args: Geometry parameters [radius, detail]
  :type args: tuple[float, int], optional, default (1, 0)

  **Geometry Parameters:**

  - **radius**: Radius of the tetrahedron
  - **detail**: Level of subdivision (0-5), higher values create more faces

  Example Usage::

      from vuer.schemas import Tetrahedron

      # Simple tetrahedron
      Tetrahedron(key="tetra1")

      # Subdivided tetrahedron
      Tetrahedron(args=(1, 2), key="tetra2")
  """

  tag = "Tetrahedron"


class Torus(SceneElement):
  """
  Creates a torus (donut) geometry.

  :param args: Geometry parameters [radius, tube, radialSegments, tubularSegments, arc]
  :type args: tuple[float, float, int, int, float], optional, default (1, 0.4, 8, 6, 2π)

  **Geometry Parameters:**

  - **radius**: Radius from the center of the torus to the center of the tube
  - **tube**: Radius of the tube
  - **radialSegments**: Number of segments around the tube (3-64)
  - **tubularSegments**: Number of segments around the torus (3-128)
  - **arc**: Central angle of the torus (radians, 0-2π)

  Example Usage::

      from vuer.schemas import Torus

      # Simple torus
      Torus(key="torus1")

      # Thin high-detail torus
      Torus(args=(2, 0.2, 16, 100, 6.28), key="torus2")
  """

  tag = "Torus"


class TorusKnot(SceneElement):
  """
  Creates a torus knot geometry.

  :param args: Geometry parameters [radius, tube, tubularSegments, radialSegments, p, q]
  :type args: tuple[float, float, int, int, int, int], optional, default (1, 0.4, 64, 8, 2, 3)

  **Geometry Parameters:**

  - **radius**: Radius of the torus
  - **tube**: Radius of the tube
  - **tubularSegments**: Number of segments along the tube (3-256)
  - **radialSegments**: Number of segments around the tube (3-32)
  - **p**: Number of times the knot winds around the torus (1-10)
  - **q**: Number of times the knot winds through the torus hole (1-10)

  Example Usage::

      from vuer.schemas import TorusKnot

      # Simple torus knot
      TorusKnot(key="knot1")

      # Complex knot pattern
      TorusKnot(args=(1, 0.3, 128, 16, 5, 7), key="knot2")
  """

  tag = "TorusKnot"


class Tube(SceneElement):
  """
  Creates a tube geometry along a path.

  :param args: Geometry parameters [path, tubularSegments, radius, radialSegments, closed]
  :type args: tuple[any, int, float, int, bool], optional, default (None, 64, 1, 8, False)

  **Geometry Parameters:**

  - **path**: 3D curve path defining the tube's centerline
  - **tubularSegments**: Number of segments along the tube (2-256)
  - **radius**: Radius of the tube
  - **radialSegments**: Number of segments around the tube (2-32)
  - **closed**: Whether the tube forms a closed loop

  Example Usage::

      from vuer.schemas import Tube

      Tube(args=(path, 64, 0.5, 8, False), key="tube1")
  """

  tag = "Tube"


class Fog(SceneElement):
  """
  Fog is a scene element that adds fog to the scene. This
  can be used to approximate depth.

  Args:
      color: The color of the fog.
      near: The distance to the near plane.
      far: The distance to the far plane.

  Example Usage:

      Fog(color="green", near=3, far=7)
  """

  tag = "fog"
  attach = "fog"
  key = "fog"

  def __post_init__(self, *, children=None, **kwargs):
    assert children is None, "Fog does not support children."


class Wireframe(SceneElement):
  """
  Creates wireframe geometry from another geometry.

  :param args: Geometry parameters [geometry]
  :type args: tuple[any], optional

  **Geometry Parameters:**

  - **geometry**: Source geometry to convert to wireframe

  Example Usage::

      from vuer.schemas import Wireframe

      Wireframe(args=(geometry,), key="wireframe1")
  """

  tag = "Wireframe"


class Splat(SceneElement):
  tag = "Splat"


class LumaSplats(SceneElement):
  tag = "Splats"


class SparkSplats(SceneElement):
  tag = "SparkSplats"


class Pcd(SceneElement):
  """
  Represents a PCD (Point Cloud Data) element in a scene.

  The Pcd class serves as a specialized scene element to handle
  PCD data. It inherits from the base SceneElement class and is
  used to define and represent point cloud data within the scene
  structure. The tag attribute is predefined as "Pcd" to denote its
  type in the scene representation.

  :param src: The source of the PCD. Can be a url or a local file.
  :type src: str, optional
  :param text: The text content of the PCD, allow one to load a scene from a string.
  :type  text: str, optional
  :param buff: The binary content of the PCD file. This is the most efficient, because you are sending binaries..
  :type  buff: bytes, optional
  :param encoding: The encoding of the PCD file. Defaults to 'ascii'.
  :type  encoding: str, optional
  :param size: Optional float that sets the size of the points in the point cloud.
  :type  size: float, optional
  :param matrix: Optional 4x4 transformation matrix (16 values) to position and orient the point cloud.
  :type matrix: tuple[float, ...]
  :param hide: Optional flag to hide the point cloud. Defaults to False.
  :type  hide: bool, optional
  """

  tag = "Pcd"


class CameraView(SceneElement):
  """CameraView for rendering from arbitrary camera poses.

  :param fov: The vertical field of view of the camera. Defaults to 50.
  :type fov: float, optional
  :param width: The width of the camera image. Defaults to 320.
  :type width: int, optional
  :param height: The height of the camera image. Defaults to 240.
  :type height: int, optional
  :param key: The key of the camera view. Defaults to "ego".
  :type key: str, optional
  :param position: The position of the camera. Defaults to [0, 0, 0].
  :type position: List[float], optional
  :param rotation: The rotation of the camera. Defaults to [0, 0, 0]
  :type rotation: List[float], optional
  :param stream: The stream of the camera. Defaults to "ondemand".
  :type stream: str, optional
  :param fps: The frames per second of the camera. Defaults to 30.
  :type fps: int, optional
  :param near: The near field of the camera. Defaults to 0.1.
  :type near: float, optional
  :param far: The far field of the camera. Defaults to 20.
  :type far: float, optional
  :param renderDepth: Whether to render depth. If set, returns value["depthFrame"]. Defaults to True.
  :type renderDepth: bool, optional
  :param showFrustum: Whether to show the frustum. Defaults to True.
  :type showFrustum: bool, optional
  :param downsample: The downsample rate. Defaults to 1.
  :type downsample: int, optional
  :param distanceToCamera: The distance to the camera. Defaults to 2.
  :type distanceToCamera: float, optional
  """

  tag = "CameraView"


class SceneBackground(Img, SceneElement):
  """
  Sets the background of the scene to a static image or texture.

  Uses Three.js scene.background property to display an environment image.
  Suitable for static backgrounds like skyboxes or HDRI environments.
  For video backgrounds or high frame rate updates, use ImageBackground instead.

  :param src: URL or path to the background image
  :type src: str
  :param backgroundIntensity: Intensity multiplier for the background (used in path tracing)
  :type backgroundIntensity: float, optional, default -0.5
  :param backgroundBlurriness: Blur amount for the background (0-1)
  :type backgroundBlurriness: float, optional, default 0.0

  Example Usage::

      from vuer.schemas import SceneBackground

      # Simple image background
      SceneBackground(
          src="https://example.com/skybox.jpg",
          key="bg1"
      )

      # HDRI environment with blur
      SceneBackground(
          src="studio.hdr",
          backgroundBlurriness=0.3,
          key="bg2"
      )
  """

  tag = "SceneBackground"


class ImageBackground(Img, SceneElement):
  """
  Sets the background to a dynamically updating image plane.

  Uses a camera-facing plane to display images, supporting high frame rates
  and video streams. The plane always faces the camera to maintain the background effect.

  :param src: URL or path to the background image/video
  :type src: str
  :param distance: Distance from camera to the background plane
  :type distance: float, optional
  :param scale: Scale of the background plane
  :type scale: float, optional

  Example Usage::

      from vuer.schemas import ImageBackground

      # Static image background
      ImageBackground(
          src="background.jpg",
          key="bg1"
      )

      # Video background
      ImageBackground(
          src="background_video.mp4",
          key="bg2"
      )
  """

  tag = "ImageBackground"


class HUDPlane(SceneElement):
  """
  Geometry helper that orients a quad plane to always face the camera.

  This is a geometry-only component that does not handle textures or materials.
  It is used as a base for other components (e.g., VideoPlane, DepthImagePlane)
  that need camera-facing orientation.

  :param distanceToCamera: Distance from camera to the plane
  :type distanceToCamera: float, optional, default 10
  :param aspect: Aspect ratio (width/height) of the plane
  :type aspect: float, optional
  :param height: Height of the plane in world units
  :type height: float, optional
  :param position: Position [x, y, z] offset from camera
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation [x, y, z] in radians
  :type rotation: tuple[float, float, float], optional
  :param fixed: Whether the plane stays fixed in screen space
  :type fixed: bool, optional, default False
  :param layers: Render layer for VR/AR contexts
  :type layers: int, optional

  Example Usage::

      from vuer.schemas import HUDPlane

      # Simple HUD plane geometry
      HUDPlane(
          distanceToCamera=5,
          height=1,
          key="hud1"
      )
  """

  tag = "HUDPlane"


class VideoMaterial(Img, SceneElement):
  """
  Material for displaying video from a URL.

  Loads video from a file or URL and creates a material that can be
  applied to meshes. The video plays automatically when loaded.

  :param src: URL or path to the video file
  :type src: str
  :param loop: Whether to loop the video
  :type loop: bool, optional, default True
  :param autoplay: Start playing automatically
  :type autoplay: bool, optional, default True

  Example Usage::

      from vuer.schemas import VideoMaterial

      VideoMaterial(
          src="video.mp4",
          loop=True,
          key="video-mat"
      )
  """

  tag = "VideoMaterial"


class WebRTCVideoMaterial(Img, SceneElement):
  """
  Material for displaying real-time video from WebRTC media stream.

  Creates a material that displays live video from a WebRTC connection,
  useful for video conferencing, camera feeds, or screen sharing.

  :param stream: WebRTC media stream ID or configuration
  :type stream: str | dict

  Example Usage::

      from vuer.schemas import WebRTCVideoMaterial

      WebRTCVideoMaterial(
          stream="camera-stream",
          key="webrtc-mat"
      )
  """

  tag = "WebRTCVideoMaterial"


class VideoPlane(Img, SceneElement):
  """
  Plane for displaying video content that faces the camera.

  Combines HUDPlane behavior with video playback. The plane automatically
  faces the camera and displays video from a file or URL.

  :param src: URL or path to the video file
  :type src: str
  :param distanceToCamera: Distance from camera to the video plane
  :type distanceToCamera: float, optional, default 10
  :param height: Height of the video plane
  :type height: float, optional
  :param loop: Whether to loop the video
  :type loop: bool, optional, default True
  :param autoplay: Start playing automatically
  :type autoplay: bool, optional, default True

  Example Usage::

      from vuer.schemas import VideoPlane

      VideoPlane(
          src="video.mp4",
          distanceToCamera=5,
          height=2,
          key="video1"
      )
  """

  tag = "VideoPlane"


class WebRTCVideoPlane(SceneElement):
  """
  Plane for displaying WebRTC video stream that faces the camera.

  Displays real-time video from WebRTC on a camera-facing plane.
  Ideal for video calls, live camera feeds, or screen sharing.

  :param stream: WebRTC media stream ID or configuration
  :type stream: str | dict
  :param distanceToCamera: Distance from camera to the plane
  :type distanceToCamera: float, optional, default 10
  :param height: Height of the video plane
  :type height: float, optional

  Example Usage::

      from vuer.schemas import WebRTCVideoPlane

      WebRTCVideoPlane(
          stream="camera-feed",
          distanceToCamera=3,
          height=1.5,
          key="webrtc-video"
      )
  """

  tag = "WebRTCVideoPlane"


class StereoVideoPlane(Img, SceneElement):
  """
  Plane for displaying stereoscopic (3D) video content.

  Displays side-by-side or top-bottom stereoscopic video for VR applications.
  Each eye sees the appropriate half of the video for 3D effect.

  :param src: URL or path to the stereoscopic video file
  :type src: str
  :param distanceToCamera: Distance from camera to the plane
  :type distanceToCamera: float, optional, default 10
  :param height: Height of the video plane
  :type height: float, optional
  :param layout: Stereo layout ("side-by-side" or "top-bottom")
  :type layout: str, optional, default "side-by-side"

  Example Usage::

      from vuer.schemas import StereoVideoPlane

      StereoVideoPlane(
          src="stereo_video.mp4",
          layout="side-by-side",
          key="stereo-video"
      )
  """

  tag = "StereoVideoPlane"


class WebRTCStereoVideoPlane(SceneElement):
  """
  Plane for displaying stereoscopic WebRTC video stream.

  Combines WebRTC streaming with stereoscopic video display for
  real-time 3D video in VR applications.

  :param stream: WebRTC media stream ID or configuration
  :type stream: str | dict
  :param distanceToCamera: Distance from camera to the plane
  :type distanceToCamera: float, optional, default 10
  :param height: Height of the video plane
  :type height: float, optional
  :param layout: Stereo layout ("side-by-side" or "top-bottom")
  :type layout: str, optional, default "side-by-side"

  Example Usage::

      from vuer.schemas import WebRTCStereoVideoPlane

      WebRTCStereoVideoPlane(
          stream="stereo-camera",
          layout="side-by-side",
          key="webrtc-stereo"
      )
  """

  tag = "WebRTCStereoVideoPlane"


class Image(Img, SceneElement):
  """
  Displays a static image on a plane in 3D space.

  Creates a textured plane for displaying images at specific positions and orientations
  in the 3D scene. Unlike ImageBackground, this plane has a fixed position in world space.

  :param src: URL or path to the image file
  :type src: str
  :param position: Position [x, y, z] of the image plane
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation [x, y, z] in radians
  :type rotation: tuple[float, float, float], optional
  :param scale: Scale of the image plane
  :type scale: float | tuple[float, float, float], optional
  :param opacity: Transparency of the image (0-1)
  :type opacity: float, optional, default 1.0

  Example Usage::

      from vuer.schemas import ImagePlane

      # Simple image plane
      Image(
          src="image.png",
          position=[0, 1, -2],
          key="img1"
      )

      # Rotated and scaled image
      Image(
          src="poster.jpg",
          position=[2, 1.5, -1],
          rotation=[0, 0.5, 0],
          scale=2,
          key="img2"
      )
  """

  tag = "Image"

  def __post_init__(self, src=None, _width=None, _height=None, **kwargs):
    if src is not None:
      self.rgb = src
      del self.src

    # todo: current abstraction does not allow width overwrite. Need restructure
    #   in the next iteration. This might require taking the width/height out of
    #   the parent class.
    if _width is not None and _height is not None:
      if not hasattr(self, "aspect") or self.aspect is None:
        self.aspect = _width / _height

      if not hasattr(self, "height") or self.height is None:
        self.height = _height * 0.001


class Group(SceneElement):
  """
  Container for grouping multiple 3D objects together.

  Groups allow you to transform (move, rotate, scale) multiple objects as a single unit.
  Changes to the group's position, rotation, or scale affect all children.

  :param position: Position [x, y, z] of the group origin
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation [x, y, z] in radians
  :type rotation: tuple[float, float, float], optional
  :param scale: Scale of the group
  :type scale: float | tuple[float, float, float], optional
  :param children: Child elements to include in the group
  :type children: list, optional

  Example Usage::

      from vuer.schemas import Group, Box, Sphere

      # Group multiple objects
      Group(
          Box(position=[-0.5, 0, 0], key="box1"),
          Sphere(position=[0.5, 0, 0], key="sphere1"),
          position=[0, 1, 0],
          rotation=[0, 0.5, 0],
          key="group1"
      )
  """

  tag = "VuerGroup"


class HemisphereLight(SceneElement):
  """
  Creates a hemisphere light that simulates ambient outdoor lighting.

  Hemisphere lights emit light from directly above and below, with different
  colors for sky and ground. This creates more realistic outdoor lighting than
  ambient light alone.

  :param skyColor: Color of light from above
  :type skyColor: str, optional, default "#ffffff"
  :param groundColor: Color of light from below
  :type groundColor: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 1.0
  :param helper: Show visual helper for debugging
  :type helper: bool, optional, default False
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import HemisphereLight

      # Basic hemisphere light
      HemisphereLight(key="hemi1")

      # Outdoor-style lighting (blue sky, brown ground)
      HemisphereLight(
          skyColor="#87CEEB",
          groundColor="#8B4513",
          intensity=0.6,
          key="hemi2"
      )
  """

  tag = "HemisphereLight"


class HemisphereLightStage(SceneElement):
  """
  Composite lighting component that provides a complete default lighting setup.

  In the default rendering mode, this component creates:
  - A HemisphereLight for ambient outdoor-style lighting
  - A DirectionalLight for shadows and directional illumination

  In pathtracer mode, it uses:
  - An AmbientLight
  - Area and spot lights optimized for path-traced rendering

  This matches the frontend's HemisphereLightStage component and provides
  consistent lighting across Python and frontend scene definitions.
  """

  tag = "HemisphereLightStage"


class RectAreaLight(SceneElement):
  """
  Creates a rectangular area light source.

  Area lights emit light from a rectangular surface, producing soft, realistic
  shadows. Ideal for simulating windows, light panels, or studio lighting.

  :param color: Color of the light
  :type color: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 1.0
  :param width: Width of the light panel
  :type width: float, optional, default 1.0
  :param height: Height of the light panel
  :type height: float, optional, default 1.0
  :param lookAt: Target position [x, y, z] for the light to face
  :type lookAt: tuple[float, float, float], optional, default [0, 0, 0]
  :param helper: Show visual helper for debugging
  :type helper: bool, optional, default False
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import RectAreaLight

      # Simple area light
      RectAreaLight(
          position=[0, 2, 0],
          key="area1"
      )

      # Large soft light panel
      RectAreaLight(
          width=4,
          height=2,
          intensity=2,
          position=[0, 3, -2],
          lookAt=[0, 0, 0],
          key="area2"
      )
  """

  tag = "RectAreaLight"


class Stage(SceneElement):
  """
  Creates a pre-configured lighting stage setup.

  Provides automatic three-point lighting (key, fill, rim) commonly used
  in studio and product visualization. Simplifies lighting setup for common scenarios.

  Example Usage::

      from vuer.schemas import Stage

      Stage(key="stage1")
  """

  tag = "Stage"


class Gamepad(SceneElement):
  """
  Gamepad input controller component.

  Captures standard gamepad (e.g., Xbox, PlayStation controllers) input
  and sends it via websocket to the Python backend.

  :param index: Gamepad index to monitor (for multiple connected gamepads)
  :type index: int, optional, default 0
  """

  tag = "Gamepad"


class KeyboardMonitor(SceneElement):
  """
  Monitors keyboard events in the browser and sends them to Python backend.

  The KeyboardMonitor component listens for keyboard events (keydown, keyup, keypress)
  and transmits event details including key codes, modifier states, and repeat information
  through the WebSocket connection.

  :param enableKeyDown: Enable monitoring of keydown events
  :type enableKeyDown: bool, optional, default False
  :param enableKeyUp: Enable monitoring of keyup events
  :type enableKeyUp: bool, optional, default False
  :param enableKeyPress: Enable monitoring of keypress events
  :type enableKeyPress: bool, optional, default False

  Event payload includes:

  - **key**: Character value of the key pressed
  - **code**: Physical key code (e.g., 'KeyA', 'Space', 'ArrowUp')
  - **shiftKey**, **ctrlKey**, **altKey**, **metaKey**: Modifier key states
  - **repeat**: Whether key is being held down
  - **isComposing**: Whether key is part of a composition session

  Example Usage::

      @app.spawn(start=True)
      async def main(session):
          session.set @ Scene(
              KeyboardMonitor(
                  enableKeyDown=True,
                  enableKeyUp=True,
                  key="keyboard-monitor"
              )
          )

          # Handle keyboard events
          async for event in session.listen():
              if event.etype in ["KeyDown", "KeyUp"]:
                  print(f"Key: {event.value['key']}, Code: {event.value['code']}")
                  print(f"Modifiers: Shift={event.value['shiftKey']}, "
                        f"Ctrl={event.value['ctrlKey']}, "
                        f"Alt={event.value['altKey']}")
  """

  tag = "KeyboardMonitor"


class DirectionalLight(SceneElement):
  """
  Creates a directional light that simulates sunlight.

  Directional lights emit parallel rays from an infinite distance, like sunlight.
  The position determines the direction of the light rays.

  :param color: Color of the light
  :type color: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 0.5
  :param helper: Show visual helper for debugging
  :type helper: bool, optional, default False
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import DirectionalLight

      # Simple sun-like light
      DirectionalLight(
          position=[5, 5, 5],
          intensity=1.0,
          key="sun"
      )

      # Warm sunset lighting
      DirectionalLight(
          position=[10, 3, 0],
          color="#FFA500",
          intensity=0.8,
          key="sunset"
      )
  """

  tag = "DirectionalLight"


class PointLight(SceneElement):
  """
  Creates a point light that emits in all directions from a point.

  Point lights simulate light bulbs or other omnidirectional light sources.
  Light intensity decreases with distance.

  :param color: Color of the light
  :type color: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 20
  :param radius: Visual radius of the light sphere (if showSphere is True)
  :type radius: float, optional, default 0.1
  :param showSphere: Show sphere visualization at light position
  :type showSphere: bool, optional, default False
  :param helper: Show visual helper for debugging
  :type helper: bool, optional, default False
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import PointLight

      # Simple point light
      PointLight(
          position=[0, 2, 0],
          key="bulb1"
      )

      # Colored light with sphere visualization
      PointLight(
          position=[1, 1, 1],
          color="#ff0000",
          intensity=30,
          showSphere=True,
          key="bulb2"
      )
  """

  tag = "PointLight"


class SpotLight(SceneElement):
  """
  Creates a spotlight that emits light in a cone.

  Spotlights are useful for focused lighting effects, stage lighting,
  or flashlight simulations.

  :param color: Color of the light
  :type color: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 0.5
  :param distance: Maximum range of the light (0 = infinite)
  :type distance: float, optional, default 0
  :param angle: Maximum cone angle in radians (max: π/2)
  :type angle: float, optional, default π/3
  :param penumbra: Softness of the cone edge (0-1)
  :type penumbra: float, optional, default 0
  :param decay: Light falloff rate with distance
  :type decay: float, optional, default 2
  :param helper: Show visual helper for debugging
  :type helper: bool, optional, default False
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import SpotLight
      import math

      # Simple spotlight
      SpotLight(
          position=[0, 3, 0],
          key="spot1"
      )

      # Focused spotlight with soft edges
      SpotLight(
          position=[2, 4, 2],
          angle=math.pi / 6,  # 30 degrees
          penumbra=0.5,
          intensity=1.5,
          key="spot2"
      )
  """

  tag = "SpotLight"


class AmbientLight(SceneElement):
  """
  Creates uniform ambient lighting from all directions.

  Ambient lights illuminate all objects equally without shadows or directionality.
  Use sparingly as too much ambient light can make scenes look flat.

  :param color: Color of the light
  :type color: str, optional, default "#ffffff"
  :param intensity: Light intensity
  :type intensity: float, optional, default 0.5
  :param hide: Hide the light
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import AmbientLight

      # Subtle ambient fill light
      AmbientLight(
          intensity=0.3,
          key="ambient1"
      )

      # Warm ambient lighting
      AmbientLight(
          color="#FFF5E1",
          intensity=0.4,
          key="ambient2"
      )
  """

  tag = "AmbientLight"


class Html(SceneElement):
  """
  Usage::

      as='div' // Wrapping element (default: 'div')
      wrapperClass // The className of the wrapping element (default: undefined)
      prepend // Project content behind the canvas (default: false)
      center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
      fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
      distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
      zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
      portal={domnodeRef} // Reference to target container (default=undefined)
      transform // If true, applies matrix3d transformations (default=false)
      sprite // Renders as sprite, but only in transform mode (default=false)
      calculatePosition={(el: Object3D, camera: Camera, size: { width: number; height: number }) => number[]} // Override default positioning function. (default=undefined) [ignored in transform mode]
      occlude={[ref]} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
      onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
      {...groupProps} // All THREE.Group props are valid
      {...divProps} // All HTMLDivElement props are valid

  """

  tag = "Html"


class Pivot(SceneElement):
  """
  Creates a pivot point for rotation and transformation.

  A Pivot acts as a transformation anchor, allowing objects to rotate
  around a specific point rather than their own center. Useful for
  mechanical joints, doors, or any object that rotates around an axis.

  :param position: Position [x, y, z] of the pivot point
  :type position: tuple[float, float, float], optional
  :param rotation: Initial rotation [x, y, z] in radians
  :type rotation: tuple[float, float, float], optional
  :param children: Child elements that rotate around this pivot
  :type children: list, optional

  Example Usage::

      from vuer.schemas import Pivot, Box

      # Door rotating around left edge
      Pivot(
          Box(position=[0.5, 0, 0], args=(1, 2, 0.1), key="door"),
          position=[-2, 0, 0],
          rotation=[0, 1.57, 0],  # 90 degrees open
          key="door-pivot"
      )
  """

  tag = "Pivot"


class Movable(SceneElement):
  """A universal component that can be grabbed and moved using pointers, hands, controllers.

  :param offset: Optional [x, y, z] offset from the position. Defaults to [0, 0, 0].
  :param position: Optional [x, y, z] position. Defaults to [0, 1, -1].
  :param quaternion: Optional [x, y, z, w] quaternion rotation.
  :param rotation: Optional [x, y, z] euler rotation.
  :param scale: Optional float or [x, y, z] scale factor. Defaults to 0.1.
  :param handle: Optional float or [x, y, z] handle size. Overrides scale for the handle geometry.
  :param showFrame: Optional boolean to show coordinate frame. Defaults to True.
  :param wireframe: Optional boolean for wireframe rendering. Defaults to False.
  :param localRotation: Optional boolean to use local rotation. Defaults to False.

  The component can be grabbed using:
  - Hand pinch gestures (left/right hand)
  - Controller trigger buttons (left/right controller)

  When grabbed, the component follows the hand/controller movement and rotation.
  A coordinate frame can be displayed to visualize the current transformation.

  The component supports both AR and VR modes through the WebXR versions of these components.
  """

  tag = "Movable"
  localRotation: bool = False


class Clickable(SceneElement):
  """A component wrapper that makes its children clickable and detects pointer interactions.

  Listen to click events using the event handler system to respond to user interactions.
  """

  tag = "Clickable"


class Hands(SceneElement):
  """

  .. admonition:: tip Setting stream to True

      Important: You need to set the `stream` option to `True` to
      start streaming the hand movement.


  The Hand component offers a way to stream the current pose of the hand to the server.
  You can get the full pose of the hands by listening to the `HAND_MOVE` event.
  You can add flags `left` and `right` to specify which hand you want to track.
  The returned data looks like the following:

  .. code-block:: typescript

      /**
       * Left and right pose are relative to the wrist transformations.
       */
      export type HandsData = {
        left?: Float32Array;       // 25 * 16 values.
        right?: Float32Array;      // 25 * 16 values.
        leftState: HandState;
        rightState: HandState;
      };

      export type HandState = {
        pinch: boolean;
        squeeze: boolean;
        tap: boolean;

        pinchValue: number;
        squeezeValue: number;
        tapValue: number;
      }

  **Matrix format**

  All 4x4 transform matrices used in WebGL are stored in 16-element `Float32Arrays`.
  The values are stored in the array in column-major order; that is, each column is
  written into the array top-down before moving to the next column to the right and
  writing it into the array. Therefore, for the array [a0, a1, a2, …, a13, a14, a15],
  the matrix looks like this:

  .. code-block::
                                    ⌈  a0 a4 a8 a12  ⌉
                                    |  a1 a5 a9 a13  |
                                    |  a2 a6 a10 a14 |
                                    ⌊  a3 a7 a11 a15 ⌋


  For details, refer to the MDN documentation on [XR Rigid Body Transformation](https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform/matrix)

  **Hand Landmarks**

  We follow the [XR Hand](https://developer.mozilla.org/en-US/docs/Web/API/XRHand)
  conventions, and return the landmarks in a single array of `25 * 16` values in
  the following order:

  .. list-table::
     :widths: 40 10 40 10
     :header-rows: 1

     * - Hand joint
       - Index
       - Hand joint (continue)
       - Index
     * - wrist
       - 0
       - middle-finger-phalanx-distal
       - 13
     * - thumb-metacarpal
       - 1
       - middle-finger-tip
       - 14
     * - thumb-phalanx-proximal
       - 2
       - ring-finger-metacarpal
       - 15
     * - thumb-phalanx-distal
       - 3
       - ring-finger-phalanx-proximal
       - 16
     * - thumb-tip
       - 4
       - ring-finger-phalanx-intermediate
       - 17
     * - index-finger-metacarpal
       - 5
       - ring-finger-phalanx-distal
       - 18
     * - index-finger-phalanx-proximal
       - 6
       - ring-finger-tip
       - 19
     * - index-finger-phalanx-intermediate
       - 7
       - pinky-finger-metacarpal
       - 20
     * - index-finger-phalanx-distal
       - 8
       - pinky-finger-phalanx-proximal
       - 21
     * - index-finger-tip
       - 9
       - pinky-finger-phalanx-intermediate
       - 22
     * - middle-finger-metacarpal
       - 10
       - pinky-finger-phalanx-distal
       - 23
     * - middle-finger-phalanx-proximal
       - 11
       - pinky-finger-tip
       - 24
     * - middle-finger-phalanx-intermediate
       - 12
       - -
       - -

  Usage Example:

  .. code-block:: python

      from vuer import Vuer, VuerSession
      from vuer.schemas import Hands
      from asyncio import sleep

      app = Vuer()


      @app.add_handler("HAND_MOVE")
      async def handler(event, session):
          print(f"Movement Event: key-{event.key}", event.value)


      @app.spawn(start=True)
      async def main(session: VuerSession):
          # Important: You need to set the `stream` option to `True` to start
          # streaming the hand movement.
          session.upsert @ Hands(stream=True, key="hands")

          while True:
              await sleep(1)

  """

  tag = "Hands"
  key = "hands"
  # eventTypes=("squeeze",),
  stream = True
  disableLeft = False  # disables the left data stream, also hides the hand.
  disableRight = False  # disables the right data stream, also hides the hand.
  hideLeft = False  # hides the hand, but still streams the data.
  hideRight = False  # hides the hand, but still streams the data.


class MotionControllers(SceneElement):
  """
  MotionController for tracking XR controller poses and button states.

  :param key: Unique identifier for the controller.
  :type key: str, optional
  :param eventTypes: A tuple or list of events to track (e.g., "trigger", "squeeze").
  :type eventTypes: tuple or list, optional
  :param stream: Whether to enable streaming of controller data.
  :type stream: bool, optional
  :param left: Boolean indicating if the left controller should be tracked. defaults to None.
  :type left: bool, optional
  :param right: Boolean indicating if the right controller should be tracked.defaults to None
  :type right: bool, optional
  """

  tag = "MotionControllers"

  def __init__(
    self,
    key="motionControllers",
    eventTypes=("trigger", "squeeze"),
    stream=True,
    left=None,
    right=None,
    **kwargs,
  ):
    super().__init__(
      key=key,
      eventTypes=eventTypes,
      stream=stream,
      left=left,
      right=right,
      **kwargs,
    )


class Body(SceneElement):
  """
  Body component for tracking full-body XR poses using the WebXR Body Tracking API.

  .. admonition:: tip Setting stream to True

      Important: You need to set the `stream` option to `True` to
      start streaming the body pose data to the server.

  .. admonition:: warning Experimental API

      The WebXR Body Tracking API is experimental and currently only supported
      in Quest Browser. Enable WebXR Experiments flags in chrome://flags.

  The Body component streams the full 3D pose of the human body to the server in
  real time. You can listen to the `BODY_MOVE` event to receive body pose data.
  The data includes body joints and optionally left/right hand joints.

  **Returned Data**

  The `BODY_MOVE` event sends a `BodyData` object containing flattened arrays:

  .. code-block:: typescript

      type BodyData = {
        body: number[];      // 33 joints × 16 floats = 528 floats
        leftHand: number[];  // 25 joints × 16 floats = 400 floats
        rightHand: number[]; // 25 joints × 16 floats = 400 floats
      };

  **Matrix Format**

  All 4x4 transform matrices are stored in 16-element arrays in column-major order:

  .. code-block::

                                    ⌈  a0 a4 a8 a12  ⌉
                                    |  a1 a5 a9 a13  |
                                    |  a2 a6 a10 a14 |
                                    ⌊  a3 a7 a11 a15 ⌋

  **Body Joints (33 joints)**

  We follow the `WebXR Body Tracking specification <https://immersive-web.github.io/body-tracking/>`_.

  .. list-table::
     :widths: 40 10 40 10
     :header-rows: 1

     * - Body Joint
       - Index
       - Body Joint (continued)
       - Index
     * - hips
       - 0
       - left-hand-palm
       - 17
     * - spine-lower
       - 1
       - right-hand-palm
       - 18
     * - spine-middle
       - 2
       - left-upper-leg
       - 19
     * - spine-upper
       - 3
       - left-lower-leg
       - 20
     * - chest
       - 4
       - left-foot-ankle-twist
       - 21
     * - neck
       - 5
       - left-foot-ankle
       - 22
     * - head
       - 6
       - left-foot-subtalar
       - 23
     * - left-shoulder
       - 7
       - left-foot-transverse
       - 24
     * - left-scapula
       - 8
       - left-foot-ball
       - 25
     * - left-arm-upper
       - 9
       - right-upper-leg
       - 26
     * - left-arm-lower
       - 10
       - right-lower-leg
       - 27
     * - left-hand-wrist-twist
       - 11
       - right-foot-ankle-twist
       - 28
     * - right-shoulder
       - 12
       - right-foot-ankle
       - 29
     * - right-scapula
       - 13
       - right-foot-subtalar
       - 30
     * - right-arm-upper
       - 14
       - right-foot-transverse
       - 31
     * - right-arm-lower
       - 15
       - right-foot-ball
       - 32
     * - right-hand-wrist-twist
       - 16
       - -
       - -

  **Usage Example**

  .. code-block:: python

      from asyncio import sleep
      from vuer import Vuer, VuerSession
      from vuer.schemas import Body

      app = Vuer()


      @app.add_handler("BODY_MOVE")
      async def on_body_move(event, session):
          body = event.value.get("body", [])
          left = event.value.get("leftHand", [])
          right = event.value.get("rightHand", [])
          print(f"body: {len(body)//16} joints, hands: L={len(left)//16} R={len(right)//16}")


      @app.spawn(start=True)
      async def main(session: VuerSession):
          # Important: stream=True is required to receive BODY_MOVE events
          session.upsert @ Body(
              stream=True,
              leftHand=True,    # Include left hand joints
              rightHand=True,   # Include right hand joints
              fps=60,           # 60 frames per second
              showBody=True,    # Show body visualization
              showFrame=True,   # Show joint coordinate frames
          )

          while True:
              await sleep(1)

  :param key: Unique identifier for the body tracking instance.
  :type key: str, optional
  :param stream: Whether to enable streaming of body pose data to the server.
  :type stream: bool, optional
  :param leftHand: Whether to include left hand tracking data (25 joints). Default: True
  :type leftHand: bool, optional
  :param rightHand: Whether to include right hand tracking data (25 joints). Default: True
  :type rightHand: bool, optional
  :param fps: Frames per second at which body pose data should be sent. Default: 60
  :type fps: int, optional
  :param showBody: Whether to show body tracking visualization. Default: True
  :type showBody: bool, optional
  :param showFrame: Whether to display coordinate frames at each joint position. Default: True
  :type showFrame: bool, optional
  :param frameScale: Scale factor for the coordinate frames or joint markers. Default: 0.02
  :type frameScale: float, optional
  """

  tag = "Body"
  key = "body_tracking"
  stream = True
  leftHand = False
  rightHand = False
  fps = 30
  showBody = True
  showFrame = True
  frameScale = 0.02


class Head(SceneElement):
  """
  Head tracking component for 6DOF head pose using standard WebXR API.

  .. admonition:: tip Setting stream to True

      Important: You need to set the `stream` option to `True` to
      start streaming the head pose data to the server.

  The Head component tracks the user's head position and orientation using the
  standard WebXR API (XRFrame.getViewerPose). This is useful for devices like PICO
  that don't support full body tracking via xrFrame.body but still provide head
  tracking through the standard viewer pose.

  You can listen to the `HEAD_MOVE` event to receive head pose data.

  **Returned Data**

  The `HEAD_MOVE` event sends an object containing the head transformation:

  .. code-block:: typescript

      {
        ts: number,           // timestamp
        etype: 'HEAD_MOVE',
        key: string,          // default: 'head_tracking'
        value: {
          matrix: number[]    // 4x4 transformation matrix (16 floats)
        }
      }

  **Matrix Format**

  The 4x4 transform matrix is stored in 16-element arrays in column-major order:

  .. code-block::

                                    ⌈  a0 a4 a8 a12  ⌉
                                    |  a1 a5 a9 a13  |
                                    |  a2 a6 a10 a14 |
                                    ⌊  a3 a7 a11 a15 ⌋

  **Usage Example**

  .. code-block:: python

      from asyncio import sleep
      from vuer import Vuer, VuerSession
      from vuer.schemas import Head

      app = Vuer()


      @app.add_handler("HEAD_MOVE")
      async def on_head_move(event, session):
          matrix = event.value.get("matrix", [])
          print(f"Head matrix: {len(matrix)} floats")


      @app.spawn(start=True)
      async def main(session: VuerSession):
          # Important: stream=True is required to receive HEAD_MOVE events
          session.upsert @ Head(
              stream=True,
              fps=30,
              show=True,        # Show head pose visualization
              frameScale=0.05,  # Scale of coordinate frame marker
          )

          while True:
              await sleep(1)

  :param key: Unique identifier for the head tracking instance. Default: 'head_tracking'
  :type key: str, optional
  :param stream: Whether to enable streaming of head pose data to the server. Default: True
  :type stream: bool, optional
  :param fps: Frames per second at which head pose data should be sent. Default: 30
  :type fps: int, optional
  :param show: Whether to show head pose visualization with coordinate frame. Default: False
  :type show: bool, optional
  :param frameScale: Scale factor for the coordinate frame marker. Default: 0.05
  :type frameScale: float, optional
  """

  tag = "Head"
  key = "head_tracking"
  stream = True
  fps = 30
  show = False
  frameScale = 0.05


class WebXRMesh(SceneElement):
  """
  WebXR Mesh Detection component for real-world environment geometry detection in AR sessions.

  This component enables detection and rendering of environmental geometry like walls, floors,
  and furniture in WebXR AR sessions. It supports automatic mesh change detection and on-demand
  RPC requests for mesh data.

  **Requirements:**
    - WebXR session must be initialized with 'mesh-detection' feature
    - Only works in immersive-ar mode
    - Device must support mesh detection API (e.g., Quest 3, ARCore)

  **Data Upload Modes:**
    1. **Auto-Update Mode** (when `autoUpdate=True`, default):
       - Automatically detects mesh changes (new/updated/removed meshes)
       - Pushes updates to server only when changes occur
       - Server receives 'WEBXR_MESH_UPDATE' events with mesh data
       - Efficient: Only sends data when needed, not continuously
       - Set `autoUpdate=False` to disable automatic updates

    2. **RPC Mode** (always active):
       - Server can request mesh data on-demand using `session.get_webxr_mesh()`
       - Component responds with latest mesh data immediately
       - Useful for one-time queries or specific timing requirements
       - Works regardless of `autoUpdate` setting

  **Mesh Data Structure:**
    Each detected mesh contains:
      - vertices: Float32Array of vertex positions (x, y, z coordinates)
      - indices: Uint32Array of triangle indices
      - semanticLabel: Optional semantic classification (e.g., "wall", "floor")
      - matrix: 16-element transformation matrix (4x4 in column-major order)

  Usage Example (Auto-Update Mode):

  .. code-block:: python

      from vuer import Vuer, VuerSession
      from vuer.schemas import WebXRMesh, Scene

      app = Vuer()


      @app.add_handler("WEBXR_MESH_UPDATE")
      async def handle_mesh_update(event, session):
          meshes = event.value.get('meshes', [])
          print(f"Mesh update: {len(meshes)} meshes")
          for mesh in meshes:
              print(f"  Vertices: {len(mesh['vertices'])/3:.0f} points")
              print(f"  Semantic: {mesh.get('semanticLabel', 'unknown')}")


      @app.spawn(start=True)
      async def main(session: VuerSession):
          session.set @ Scene(
              children=[
                  WebXRMesh(
                      key="webxr-mesh",
                      autoUpdate=True,  # Enable auto-update (default)
                      color="blue",
                      opacity=0.15
                  )
              ]
          )
          await session.forever()

  Usage Example (RPC Mode Only):

  .. code-block:: python

      from vuer import Vuer, VuerSession
      from vuer.schemas import WebXRMesh, Scene
      from asyncio import sleep

      app = Vuer()


      @app.spawn(start=True)
      async def main(session: VuerSession):
          session.set @ Scene(
              children=[
                  WebXRMesh(
                      key="webxr-mesh",
                      autoUpdate=False,  # Disable auto-update
                      color="green",
                      opacity=0.2
                  )
              ]
          )

          await sleep(2)  # Wait for meshes to be detected

          # Request mesh data on-demand using RPC
          mesh_data = await session.get_webxr_mesh(key="webxr-mesh")
          meshes = mesh_data.value.get('meshes', [])
          print(f"Retrieved {len(meshes)} meshes")

  :param key: Unique identifier for the WebXR mesh component (default: "webxr-mesh")
  :type key: str
  :param color: Mesh material color (CSS color string or hex)
  :type color: str, optional
  :param opacity: Material opacity for solid mesh (default: 0.15, range: 0.0-1.0)
  :type opacity: float
  :param autoUpdate: Enable automatic updates when meshes change (default: True).
                     When True, sends WEBXR_MESH_UPDATE events on changes.
                     When False, only RPC mode is available.
  :type autoUpdate: bool
  """

  tag = "WebXRMesh"

  def __init__(
    self,
    key="webxr-mesh",
    color=None,
    opacity=0.15,
    autoUpdate=True,
    **kwargs,
  ):
    super().__init__(
      key=key,
      color=color,
      opacity=opacity,
      autoUpdate=autoUpdate,
      **kwargs,
    )


class ModelNode(SceneElement):
  """Base class for all 3D model file format loaders.

  All model-loading components (Obj, Fbx, Stl, Dae, Ply, Glb, Urdf, Bvh) inherit
  from this class. It documents the common set of props shared across every format.

  :param src: URL or path to the model file.
  :type src: str, optional
  :param text: Text content of the model file, for loading from a string.
  :type text: str, optional
  :param buff: Binary content of the model file. Preferred for efficiency.
  :type buff: bytes, optional
  :param assets: Dictionary mapping asset names/paths to blob URLs.
  :type assets: dict[str, str], optional
  :param hide: Hide the model without removing it from the scene.
  :type hide: bool, optional, default False
  :param onLoad: Callback or event name fired when the model finishes loading.
  :type onLoad: callable | str, optional
  :param materialType: Material type override (e.g. ``"basic"``, ``"standard"``,
    ``"physical"``).
  :type materialType: str, optional
  :param material: Raw material properties dict forwarded to the Three.js material.
  :type material: dict, optional
  :param color: Override color applied to all meshes.
  :type color: str, optional
  :param opacity: Opacity in the range 0–1.
  :type opacity: float, optional
  :param wireframe: Render the model as a wireframe.
  :type wireframe: bool, optional
  :param visible: Toggle Three.js object visibility (affects children).
  :type visible: bool, optional
  :param castShadow: Whether the model casts shadows.
  :type castShadow: bool, optional
  :param receiveShadow: Whether the model receives shadows.
  :type receiveShadow: bool, optional
  :param frustumCulled: Enable frustum culling.
  :type frustumCulled: bool, optional
  :param renderOrder: Three.js render order.
  :type renderOrder: int, optional
  :param position: Position in 3D space ``(x, y, z)``.
  :type position: tuple[float, float, float], optional
  :param rotation: Euler rotation ``(x, y, z)`` in radians.
  :type rotation: tuple[float, float, float], optional
  :param quaternion: Rotation as a quaternion ``(x, y, z, w)``.
  :type quaternion: tuple[float, float, float, float], optional
  :param scale: Scale factors ``(x, y, z)`` or a single uniform float.
  :type scale: tuple[float, float, float] | float, optional
  """


class Obj(ModelNode):
  """Loads and displays OBJ 3D models with optional MTL material files.

  OBJ is a widely-supported text-based format for 3D geometry. Pair it with an
  MTL file to apply materials and textures.

  :param src: URL or path to the OBJ file.
  :type src: str, optional
  :param mtl: URL or path to the associated MTL material file.
  :type mtl: str, optional
  :param text: Text content of the OBJ file, for loading from a string.
  :type text: str, optional
  :param buff: Binary content of the OBJ file. Preferred for efficiency.
  :type buff: bytes, optional
  :param materials: List of material file URLs or paths (for multiple MTL files).
  :type materials: list[str], optional

  Example Usage::

      from vuer.schemas import Obj

      # Load OBJ + MTL from URLs
      Obj(
          src="https://example.com/model.obj",
          mtl="https://example.com/model.mtl",
          key="obj1",
      )

      # Load OBJ from text content
      Obj(text=obj_text_string, key="obj2")
  """

  tag = "Obj"


class Fbx(ModelNode):
  """Loads and displays FBX 3D models.

  FBX is a popular 3D file format for models, animations, and skeletal data.

  :param src: URL or path to the FBX file.
  :type src: str, optional
  :param playAnimation: Auto-play all animations embedded in the file.
  :type playAnimation: bool, optional
  :param animationIndex: Index of the animation clip to play.
  :type animationIndex: int, optional
  :param animationSpeed: Speed multiplier for animation playback.
  :type animationSpeed: float, optional
  :param label: Show a text label above the model.
  :type label: bool, optional
  :param frame: Show a coordinate-frame helper at the model origin.
  :type frame: bool, optional
  :param boneRadius: Radius of bone visualizations.
  :type boneRadius: float, optional
  :param jointColor: Color of joint-sphere markers.
  :type jointColor: str, optional
  :param frameScale: Scale of the coordinate-frame visualization.
  :type frameScale: float, optional

  Example Usage::

      from vuer.schemas import Fbx

      Fbx(src="https://example.com/character.fbx", playAnimation=True, key="fbx1")
  """

  tag = "Fbx"


class Stl(ModelNode):
  """Loads and displays STL 3D models.

  STL (Stereolithography) is a format commonly used for 3D printing and CAD.

  :param src: URL or path to the STL file.
  :type src: str, optional
  :param text: Text content of the STL file (ASCII STL).
  :type text: str, optional
  :param buff: Binary content of the STL file.
  :type buff: bytes, optional

  Example Usage::

      from vuer.schemas import Stl

      Stl(src="https://example.com/part.stl", color="#cccccc", key="stl1")
  """

  tag = "Stl"


class Dae(ModelNode):
  """Loads and displays DAE (COLLADA) 3D models.

  COLLADA is an XML-based format for exchanging 3D models, animations, and scenes.

  :param src: URL or path to the DAE file.
  :type src: str, optional
  :param text: Text content of the DAE file (COLLADA is XML-based).
  :type text: str, optional
  :param assets: Dictionary mapping asset paths to blob URLs for embedded resources.
  :type assets: dict[str, str], optional
  :param playAnimation: Auto-play all animations embedded in the file.
  :type playAnimation: bool, optional
  :param animationIndex: Index of the animation clip to play.
  :type animationIndex: int, optional
  :param animationSpeed: Speed multiplier for animation playback.
  :type animationSpeed: float, optional

  Example Usage::

      from vuer.schemas import Dae

      Dae(src="https://example.com/model.dae", key="dae1")
  """

  tag = "Dae"


class Ply(ModelNode):
  """Loads and displays PLY (Polygon File Format) 3D models.

  PLY is a format for storing 3D point clouds and polygon meshes, commonly
  used for 3D scanning data and computer graphics.

  :param src: URL or path to the PLY file.
  :type src: str, optional
  :param text: PLY file content as a text string.
  :type text: str, optional
  :param buff: Binary content of the PLY file.
  :type buff: bytes, optional
  :param assets: Dictionary mapping texture names to blob URLs.
  :type assets: dict[str, str], optional
  :param encoding: Text encoding for binary PLY files (default: ``"ascii"``).
  :type encoding: str, optional

  Example Usage::

      from vuer.schemas import Ply

      # Load PLY from URL
      Ply(src="https://example.com/model.ply", key="ply1")

      # Load PLY with texture assets
      Ply(src="scan.ply", assets={"texture.jpg": blob_url}, key="ply2")
  """

  tag = "Ply"


class Glb(ModelNode):
  """Loads and displays GLB/GLTF 3D models.

  GLB is the binary distribution format of GLTF (GL Transmission Format),
  a royalty-free format for efficient transmission of 3D scenes and models.

  :param src: URL or path to the GLB or GLTF file.
  :type src: str, optional
  :param buff: Binary content of the GLB file.
  :type buff: bytes, optional
  :param assets: Dictionary mapping asset paths to blob URLs for external references.
  :type assets: dict[str, str], optional
  :param playAnimation: Auto-play all animations embedded in the file.
  :type playAnimation: bool, optional
  :param animationIndex: Index of the animation clip to play.
  :type animationIndex: int, optional
  :param animationSpeed: Speed multiplier for animation playback.
  :type animationSpeed: float, optional

  Example Usage::

      from vuer.schemas import Glb

      Glb(src="https://example.com/scene.glb", key="glb1")
  """

  tag = "Glb"


class Bvh(ModelNode):
  """Loads and displays BVH (Biovision Hierarchy) motion capture data.

  BVH is a widely-used format for skeletal animation and motion capture data.
  It encodes a skeleton hierarchy along with per-frame joint rotations.

  :param src: URL or path to the BVH file.
  :type src: str, optional
  :param text: Text content of the BVH file (BVH is text-based).
  :type text: str, optional
  :param playAnimation: Auto-play the motion capture animation.
  :type playAnimation: bool, optional, default True
  :param animationIndex: Index of the animation clip to play (usually 0).
  :type animationIndex: int, optional
  :param animationSpeed: Speed multiplier for animation playback.
  :type animationSpeed: float, optional
  :param boneRadius: Radius of bone cylinder visualizations.
  :type boneRadius: float, optional
  :param jointColor: Color of joint-sphere markers.
  :type jointColor: str, optional
  :param label: Show joint name labels.
  :type label: bool, optional

  Example Usage::

      from vuer.schemas import Bvh

      # Stream motion capture data from file
      Bvh(src="https://example.com/walk.bvh", playAnimation=True, key="bvh1")

      # Load from text
      Bvh(text=bvh_text_string, key="bvh2")
  """

  tag = "Bvh"


class Urdf(ModelNode):
  """
  Loads and displays a robot model from URDF (Unified Robot Description Format) file.

  URDF is the standard format for describing robot kinematics and dynamics.
  This component loads the URDF file and its associated mesh files (STL, DAE, OBJ, etc.)
  to create a 3D visualization of the robot.

  :param src: URL or path to the URDF file
  :type src: str
  :param text: URDF file content as text string (alternative to src)
  :type text: str, optional
  :param assets: Dictionary mapping file paths to blob URLs for mesh assets
  :type assets: dict[str, str], optional
  :param workingPath: Base path for resolving relative paths in URDF
  :type workingPath: str, optional
  :param jointValues: Dictionary of joint names to angles/positions for setting robot pose
  :type jointValues: dict[str, float], optional
  :param parseVisual: Parse visual geometry elements
  :type parseVisual: bool, optional, default True
  :param parseCollision: Parse collision geometry elements
  :type parseCollision: bool, optional, default False
  :param packages: ROS package path resolution (string path or dict mapping)
  :type packages: str | dict[str, str], optional
  :param color: Override color for all meshes
  :type color: str, optional
  :param material: Material properties for robot meshes
  :type material: dict, optional
  :param materialType: Type of material ("physical", "standard", etc.)
  :type materialType: str, optional

  Example Usage::

      from vuer.schemas import Urdf

      # Load URDF from URL
      Urdf(
          src="https://example.com/robot.urdf",
          key="robot1"
      )

      # Load URDF with joint configuration
      Urdf(
          src="/path/to/robot.urdf",
          jointValues={
              "joint1": 0.5,
              "joint2": -0.3,
              "joint3": 1.2,
          },
          key="robot2"
      )

      # Load URDF with custom material
      Urdf(
          src="robot.urdf",
          material=dict(
              roughness=0.01,
              metalness=0.2,
              color="#cccccc"
          ),
          key="robot3"
      )
  """

  tag = "Urdf"


class CoordsMarker(SceneElement):
  """Coordinates Marker Component.

  Renders a set of coordinate axes (X/Y/Z) at a given position and orientation,
  with optional cone heads and configurable scale.

  :param position: A list of 3 numbers representing the position.
  :type position: list[float], optional
  :param rotation: A list of 3 numbers representing the Euler rotation.
  :type rotation: list[float], optional
  :param matrix: A list of 16 numbers representing the transform matrix.
    Overrides position and rotation when provided.
  :type matrix: list[float], optional
  :param scale: Uniform scale factor (default: 1.0).
  :type scale: float, optional
  :param headScale: Scale of the arrow-head cone (default: 1.0).
  :type headScale: float, optional
  :param lod: Level of detail — number of segments for the cone and stem.
  :type lod: int, optional
  """

  tag = "CoordsMarker"


class Arrow(SceneElement):
  """Single-axis arrow component.

  Renders a single arrow indicating a direction or force vector.

  :param matrix: A list of 16 numbers representing the transform matrix.
    Overrides position and rotation when provided.
  :type matrix: list[float], optional
  :param position: A list of 3 numbers representing the position.
  :type position: list[float], optional
  :param rotation: A list of 3 numbers representing the Euler rotation.
  :type rotation: list[float], optional
  :param scale: Uniform scale factor (default: 1.0).
  :type scale: float, optional
  :param headScale: Scale of the arrow-head cone (default: 1.0).
  :type headScale: float, optional
  :param lod: Level of detail — number of segments for the cone and stem.
  :type lod: int, optional
  """

  tag = "Arrow"


class Gripper(SceneElement):
  """
  Creates a 3D robot gripper visualization with two parallel jaws.

  The gripper is rendered as a cylindrical body with two opposing jaw assemblies
  (left: blue, right: red). Useful for robotics visualization and teleoperation.

  :param color: Base color for the gripper body
  :type color: str, optional
  :param pinchWidth: Half-distance between gripper jaws (default: 0.04)
  :type pinchWidth: float, optional
  :param skeleton: Use skeletal (simplified) gripper model instead
  :type skeleton: bool, optional, default False
  :param axes: Show coordinate axes helper at gripper origin
  :type axes: bool, optional, default False
  :param showOrigin: Show green sphere at gripper origin point
  :type showOrigin: bool, optional, default True
  :param hide: Hide the gripper visualization
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import Gripper

      # Simple gripper
      Gripper(key="gripper1")

      # Gripper with custom jaw width
      Gripper(pinchWidth=0.06, key="gripper2")

      # Gripper with axes and custom color
      Gripper(
          color="#ff0000",
          axes=True,
          showOrigin=True,
          key="gripper3"
      )
  """

  tag = "Gripper"


class SkeletalGripper(SceneElement):
  """
  Creates a simplified skeletal gripper visualization.

  A lightweight version of the Gripper component with simplified geometry,
  useful for performance-critical applications or when many grippers need
  to be rendered simultaneously.

  :param color: Color for the gripper
  :type color: str, optional
  :param pinchWidth: Half-distance between gripper jaws (default: 0.04)
  :type pinchWidth: float, optional
  :param hide: Hide the gripper visualization
  :type hide: bool, optional, default False

  Example Usage::

      from vuer.schemas import SkeletalGripper

      # Simple skeletal gripper
      SkeletalGripper(key="skel-gripper1")

      # Skeletal gripper with custom width
      SkeletalGripper(pinchWidth=0.05, key="skel-gripper2")
  """

  tag = "SkeletalGripper"


class Grid(SceneElement):
  """
  Creates a ground reference grid for spatial orientation.

  Displays a grid on the ground plane (XZ plane) to help visualize scale,
  position, and orientation in 3D space. Commonly used as a background element.

  Example Usage::

      from vuer.schemas import Grid, DefaultScene

      # Grid is included by default in DefaultScene
      DefaultScene(grid=True)

      # Manual grid placement
      Grid(key="custom-grid")
  """

  tag = "Grid"


class GrabRender(SceneElement):
  """
  Captures the current rendered frame from the canvas.

  A singleton component that grabs the current frame buffer and sends it
  to the Python backend. Useful for capturing screenshots or implementing
  custom rendering pipelines.

  This component is a singleton and should only be instantiated once per scene.
  The key is automatically set to "DEFAULT".

  Example Usage::

      from vuer.schemas import GrabRender

      # Add to scene to enable frame capture
      GrabRender()
  """

  tag = "GrabRender"
  key = "DEFAULT"


class ViewportHud(SceneElement):
  """A HUD (Heads-Up Display) component that renders to a specific viewport region.

  Creates an isolated render scene within a rectangular region of the canvas,
  using CSS-like positioning (top, right, bottom, left). Useful for mini-maps,
  picture-in-picture views, auxiliary camera feeds, or UI overlays.

  The viewport uses a separate scene and camera, so children are rendered
  independently of the main scene. You must include a camera (SimplePerspectiveCamera
  or SimpleOrthographicCamera) as a child with makeDefault=True.

  **Positioning:**

  Position values can be numbers (pixels) or strings with '%' (percentage).
  Use top/left for top-left anchoring, or bottom/right for other corners.

  :param top: Distance from top edge (pixels or percentage string like '10%')
  :type top: int | str, optional
  :param right: Distance from right edge (pixels or percentage string like '10%')
  :type right: int | str, optional
  :param bottom: Distance from bottom edge (pixels or percentage string like '10%')
  :type bottom: int | str, optional
  :param left: Distance from left edge (pixels or percentage string like '10%')
  :type left: int | str, optional
  :param width: Width of the viewport (pixels or percentage). Required.
  :type width: int | str
  :param height: Height of the viewport (pixels or percentage). Required.
  :type height: int | str
  :param renderPriority: Render priority (1-10). Default: 1
  :type renderPriority: int, optional

  Example Usage::

      from vuer.schemas import ViewportHud, SimplePerspectiveCamera, Box

      # Mini-map in top-right corner (pixel positioning)
      ViewportHud(
          SimplePerspectiveCamera(position=[0, 10, 0], rotation=[-1.57, 0, 0], makeDefault=True),
          Box(args=[1, 1, 1], materialColor="red"),
          top=10,
          right=10,
          width=200,
          height=150,
          key="minimap"
      )

      # Picture-in-picture with percentage positioning
      ViewportHud(
          SimplePerspectiveCamera(position=[5, 5, 5], makeDefault=True),
          Box(args=[1, 1, 1], materialColor="blue"),
          bottom="5%",
          left="5%",
          width="20%",
          height="25%",
          key="pip"
      )
  """

  tag = "ViewportHud"


class TimelineControls(SceneElement):
  tag = "TimelineControls"


class PointerControls(SceneElement):
  """
  Enables pointer-based interaction with scene objects.

  Provides mouse/touch pointer controls for selecting and interacting
  with objects in the scene. Works with Clickable and Movable components.

  Example Usage::

      from vuer.schemas import PointerControls

      PointerControls(key="pointer-controls")
  """

  tag = "PointerControls"


class RandomizedLight(SceneElement):
  """A randomized light that internally runs multiple lights and jiggles them.

  This component is typically paired with AccumulativeShadows for realistic soft shadows.
  When used with AccumulativeShadows, it automatically inherits the number of frames
  from the parent component.

  :param frames: How many frames to jiggle the lights. Defaults to 1. If used with
                AccumulativeShadows, frames will be inherited from there.
  :type frames: int
  :param position: Light position [x, y, z]. Defaults to [0, 0, 0].
  :type position: List[float]
  :param radius: Radius of the jiggle - higher values create softer light. Defaults to 5.
  :type radius: float
  :param amount: Number of lights to use. Defaults to 8.
  :type amount: int
  :param intensity: Light intensity. Defaults to 1.
  :type intensity: float
  :param ambient: Ambient occlusion factor - lower values mean less AO. Can be mixed with directional light. Defaults to 0.5.
  :type ambient: float
  :param castShadow: Whether lights cast shadows. Defaults to True.
  :type castShadow: bool
  :param bias: Shadow bias value. Defaults to 0.
  :type bias: float
  :param mapSize: Shadow map size. Defaults to 512.
  :type mapSize: int
  :param size: Size of the shadow camera. Defaults to 10.
  :type size: float
  :param near: Shadow camera near plane. Defaults to 0.5.
  :type near: float
  :param far: Shadow camera far plane. Defaults to 500.
  :type far: float

  Example Usage::

      RandomizedLight(
          frames=40,
          position=[5, 5, -10],
          radius=8,
          amount=8,
          intensity=1,
          ambient=0.5,
          castShadow=True
      )
  """

  tag = "RandomizedLight"


class AccumulativeShadows(SceneElement):
  """A planar, Y-up oriented shadow-catcher that accumulates soft shadows with zero performance impact after accumulation.

  The shadow-catcher can operate in temporal mode (accumulating over time) or instantaneous mode. It must be paired with
  light sources and scene objects that cast shadows as children. Works best with RandomizedLight components for realistic
  raycast-like shadows and ambient occlusion.

  :param frames: Number of frames to render. More frames yield cleaner results but take longer. Defaults to 40.
  :type frames: int
  :param blend: Controls the refresh ratio when frames=Infinity. Defaults to 100.
  :type blend: int
  :param limit: Limits rendered frames when frames=Infinity to regain performance once scene settles. Defaults to Infinity.
  :type limit: int
  :param scale: Scale of the shadow plane. No default.
  :type scale: float
  :param temporal: Whether to accumulate shadows over time (more performant but has visual regression). Defaults to False.
  :type temporal: bool
  :param opacity: Opacity of the shadow plane. Defaults to 1.
  :type opacity: float
  :param alphaTest: Threshold for discarding alpha pixels. Defaults to 0.65.
  :type alphaTest: float
  :param color: Shadow color. Defaults to black.
  :type color: str
  :param colorBlend: How much colors turn to black (0 is black). Defaults to 2.
  :type colorBlend: float
  :param resolution: Buffer resolution. Defaults to 1024.
  :type resolution: int

  Example Usage::

      AccumulativeShadows(
          temporal=True,
          frames=100,
          scale=10,
          children=[
              RandomizedLight(amount=8, position=[5, 5, -10])
          ]
      )
  """

  tag = "AccumulativeShadows"


class Trail(SceneElement):
  """A declarative, three.MeshLine based Trails implementation. You can attach it to any mesh and it will give it a beautiful trail.

  :param width: Width of the line. Defaults to 0.2.
  :type width: float
  :param color: Color of the line. Defaults to 'hotpink'.
  :type color: str
  :param length: Length of the line. Defaults to 1.
  :type length: float
  :param decay: How fast the line fades away. Defaults to 1.
  :type decay: float
  :param local: Whether to use the target's world or local positions. Defaults to False.
  :type local: bool
  :param stride: Min distance between previous and current point. Defaults to 0.
  :type stride: float
  :param interval: Number of frames to wait before next calculation. Defaults to 1.
  :type interval: int
  :param target: Optional target. This object will produce the trail.
  :type target: Any
  :param attenuation: A function to define the width in each point along it.
  :type attenuation: callable

  Note: If `target` is not defined, Trail will use the first `Object3D` child as the target.
  You can optionally define a custom meshLineMaterial to use.

  Example Usage::

      Trail(
          width=0.2,
          color='hotpink',
          length=1,
          decay=1,
          local=False,
          stride=0,
          interval=1
      )
  """

  tag = "Trail"


class Center(SceneElement):
  """Centers its children by calculating their boundary box.

  The Center component automatically centers child elements by calculating their bounding box.
  It allows fine control over which axes to center along.

  :param top: Align to top edge instead of center on Y axis
  :type top: bool
  :param right: Align to right edge instead of center on X axis
  :type right: bool
  :param bottom: Align to bottom edge instead of center on Y axis
  :type bottom: bool
  :param left: Align to left edge instead of center on X axis
  :type left: bool
  :param front: Align to front edge instead of center on Z axis
  :type front: bool
  :param back: Align to back edge instead of center on Z axis
  :type back: bool
  :param disable: Disable centering on all axes
  :type disable: bool
  :param disableX: Disable centering on X axis
  :type disableX: bool
  :param disableY: Disable centering on Y axis
  :type disableY: bool
  :param disableZ: Disable centering on Z axis
  :type disableZ: bool
  :param precise: Use precise boundary box calculation (default: True)
  :type precise: bool

  Example Usage::

      Center(
          top=True,
          left=True,
          children=[mesh]
      )
  """

  tag = "Center"


class Billboard(SceneElement):
  """
  Renders its children as a billboard that always faces the camera.

  :param follow: Whether the billboard should follow the camera position (default: True)
  :type follow: bool, optional
  :param lockX: Lock rotation on the X axis (default: False)
  :type lockX: bool, optional
  :param lockY: Lock rotation on the Y axis (default: False)
  :type lockY: bool, optional
  :param lockZ: Lock rotation on the Z axis (default: False)
  :type lockZ: bool, optional

  Example Usage::

      Billboard(
          follow=True,
          lockX=False,
          lockY=True,
          children=[mesh]
      )
  """

  tag = "Billboard"

  def __init__(
    self,
    *children,
    follow: bool = True,
    lockX: bool = False,
    lockY: bool = False,
    lockZ: bool = False,
    **kwargs,
  ):
    super().__init__(
      *children, follow=follow, lockX=lockX, lockY=lockY, lockZ=lockZ, **kwargs
    )


class Text(SceneElement):
  """
  Renders 2D text in the scene with extensive styling and layout options.

  :param children: The text content to render.
  :type children: str
  :param characters: Restrict the set of characters to use for glyph generation.
  :type characters: str, optional
  :param color: Text color.
  :type color: str, optional
  :param fontSize: Font size in world units.
  :type fontSize: float, optional
  :param fontWeight: Font weight (number or string, e.g. 'bold').
  :type fontWeight: int or str, optional
  :param fontStyle: Font style, either 'italic' or 'normal'.
  :type fontStyle: str, optional
  :param maxWidth: Maximum width of the text block before wrapping.
  :type maxWidth: float, optional
  :param lineHeight: Line height as a multiple of fontSize.
  :type lineHeight: float, optional
  :param letterSpacing: Additional spacing between letters.
  :type letterSpacing: float, optional
  :param textAlign: Text alignment: 'left', 'right', 'center', or 'justify'.
  :type textAlign: str, optional
  :param font: Font URL or name.
  :type font: str, optional
  :param anchorX: Horizontal anchor: number or 'left', 'center', 'right'.
  :type anchorX: float or str, optional
  :param anchorY: Vertical anchor: number or 'top', 'top-baseline', 'middle', 'bottom-baseline', 'bottom'.
  :type anchorY: float or str, optional
  :param clipRect: Rectangle [minX, minY, maxX, maxY] to clip text rendering.
  :type clipRect: list[float], optional
  :param depthOffset: Offset in Z to avoid z-fighting.
  :type depthOffset: float, optional
  :param direction: Text direction: 'auto', 'ltr', or 'rtl'.
  :type direction: str, optional
  :param overflowWrap: Wrapping behavior: 'normal' or 'break-word'.
  :type overflowWrap: str, optional
  :param whiteSpace: White space handling: 'normal', 'overflowWrap', or 'nowrap'.
  :type whiteSpace: str, optional
  :param outlineWidth: Outline width (number or string, e.g. '2px').
  :type outlineWidth: float or str, optional
  :param outlineOffsetX: Outline X offset (number or string).
  :type outlineOffsetX: float or str, optional
  :param outlineOffsetY: Outline Y offset (number or string).
  :type outlineOffsetY: float or str, optional
  :param outlineBlur: Outline blur radius (number or string).
  :type outlineBlur: float or str, optional
  :param outlineColor: Outline color.
  :type outlineColor: str, optional
  :param outlineOpacity: Outline opacity (0-1).
  :type outlineOpacity: float, optional
  :param strokeWidth: Stroke width (number or string).
  :type strokeWidth: float or str, optional
  :param strokeColor: Stroke color.
  :type strokeColor: str, optional
  :param strokeOpacity: Stroke opacity (0-1).
  :type strokeOpacity: float, optional
  :param fillOpacity: Fill opacity (0-1).
  :type fillOpacity: float, optional
  :param sdfGlyphSize: SDF glyph size for rendering quality.
  :type sdfGlyphSize: int, optional
  :param debugSDF: Show SDF debug overlay.
  :type debugSDF: bool, optional
  :param glyphGeometryDetail: Level of detail for glyph geometry.
  :type glyphGeometryDetail: int, optional
  """

  tag = "Text"


class Text3D(SceneElement):
  """Renders 3D text using ThreeJS's TextGeometry.

  Text3D will suspend while loading the font data. It requires fonts in JSON format
  generated through typeface.json, either as a path to a JSON file or a JSON object.
  If you face display issues try checking "Reverse font direction" in the typeface tool.

  :param font: Font URL or JSON object with font data
  :type font: str
  :param smooth: Merges vertices with a tolerance and calls computeVertexNormals
  :type smooth: float
  :param lineHeight: Line height in threejs units (default: 0)
  :type lineHeight: float
  :param letterSpacing: Letter spacing factor (default: 1)
  :type letterSpacing: float

  You can align the text using the Center component:

  .. code-block:: python

      Center(
          Text3D(
              "Hello world!",
              font="fonts/helvetiker.json",
              smooth=1,
              lineHeight=0.5,
              letterSpacing=-0.025
          )
      )
  """

  tag = "Text3D"

  def __init__(
    self, *text, font=None, smooth=None, lineHeight=0, letterSpacing=1, **kwargs
  ):
    super().__init__(
      *text,
      font=font,
      smooth=smooth,
      lineHeight=lineHeight,
      letterSpacing=letterSpacing,
      **kwargs,
    )


class BackgroundColor(SceneElement):
  """
  Sets a solid color background for the scene.

  Changes the scene background to a uniform color. This is the simplest
  way to set a background and has minimal performance impact.

  :param color: Hex color string for the background
  :type color: str, optional, default "#131416"

  Example Usage::

      from vuer.schemas import BackgroundColor

      # Dark background
      BackgroundColor(color="#131416", key="bg")

      # White background
      BackgroundColor(color="#ffffff", key="bg")

      # Custom color
      BackgroundColor(color="#4A90E2", key="bg")
  """

  tag = "BackgroundColor"

  def __init__(self, color="#131416", **kwargs):
    super().__init__(color=color, **kwargs)


class BBox(SceneElement):
  """
  Renders a bounding box visualization using edge geometry.

  Displays a wireframe box defined by minimum and maximum corner points.
  Useful for visualizing spatial bounds, collision boxes, or regions of interest.

  :param min: Minimum corner coordinates {x, y, z}
  :type min: dict, optional, default {"x": -1, "y": -1, "z": -1}
  :param max: Maximum corner coordinates {x, y, z}
  :type max: dict, optional, default {"x": 1, "y": 1, "z": 1}
  :param color: Color of the bounding box edges
  :type color: str, optional, default "0xffffff"
  :param scale: Scale factor for the edges
  :type scale: float, optional, default 1.01

  Example Usage::

      from vuer.schemas import BBox

      # Simple bounding box
      BBox(
          min={"x": -1, "y": 0, "z": -1},
          max={"x": 1, "y": 2, "z": 1},
          key="bbox1"
      )

      # Colored bounding box
      BBox(
          min={"x": -2, "y": -2, "z": -2},
          max={"x": 2, "y": 2, "z": 2},
          color="0xff0000",
          key="bbox2"
      )
  """

  tag = "BBox"

  def __init__(self, min=None, max=None, color="0xffffff", scale=1.01, **kwargs):
    if min is None:
      min = {"x": -1, "y": -1, "z": -1}
    if max is None:
      max = {"x": 1, "y": 1, "z": 1}
    super().__init__(min=min, max=max, color=color, scale=scale, **kwargs)


class VuerSplat(SceneElement):
  """Vuer Splat component for Gaussian Splat rendering.

  Wrapper around the Splat component with position, rotation, and scale transforms.

  :param position: Position in 3D space
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation in Euler angles
  :type rotation: tuple[float, float, float], optional
  :param scale: Scale factors
  :type scale: tuple[float, float, float], optional
  :param quaternion: Rotation as quaternion
  :type quaternion: tuple[float, float, float, float], optional
  :param src: URL to splat file
  :type src: str, optional
  :param flipCoords: Flip coordinate system
  :type flipCoords: bool, optional
  :param toneMapped: Apply tone mapping
  :type toneMapped: bool, optional
  :param alphaTest: Alpha test threshold
  :type alphaTest: float, optional
  :param alphaHash: Use alpha hash
  :type alphaHash: bool, optional
  :param chunkSize: Chunk size for streaming
  :type chunkSize: int, optional
  """

  tag = "VuerSplat"


class VuerGroup(SceneElement):
  """Vuer Group component for grouping and transforming child elements.

  :param matrix: Transformation matrix
  :type matrix: list[float], optional
  :param position: Position in 3D space
  :type position: tuple[float, float, float], optional
  :param rotation: Rotation in Euler angles
  :type rotation: tuple[float, float, float], optional
  :param quaternion: Rotation as quaternion
  :type quaternion: tuple[float, float, float, float], optional
  :param scale: Scale factors
  :type scale: tuple[float, float, float], optional
  :param children: Child elements
  :type children: list, optional
  """

  tag = "VuerGroup"
  children = []


class BoundingBox(SceneElement):
  """Bounding Box component with shader-based edge rendering.

  Renders a 3D bounding box with customizable edge and wall opacity.

  .. tip::

      For better performance when rendering multiple BoundingBox instances,
      wrap them in a :class:`BoundingBoxProvider`. The provider enables
      instanced rendering with shared shader material and geometry.

  **Parameters:**

  .. list-table::
     :header-rows: 1
     :widths: 20 15 10 55

     * - Parameter
       - Type
       - Default
       - Description
     * - position
       - tuple
       - [0, 0, 0]
       - Position in 3D space [x, y, z]
     * - rotation
       - tuple
       - [0, 0, 0]
       - Rotation in Euler angles [x, y, z]
     * - scale
       - tuple
       - [1, 1, 1]
       - Scale factors [x, y, z]
     * - size
       - tuple
       - [1, 1, 1]
       - Size of the box [width, height, depth]
     * - min
       - tuple
       - None
       - Minimum corner [x, y, z] (alternative to size)
     * - max
       - tuple
       - None
       - Maximum corner [x, y, z] (alternative to size)
     * - color
       - str/int
       - "#00ff00"
       - Color of edges and faces (hex, rgb, rgba, or name)
     * - edgeOpacity
       - float
       - 0.9
       - Opacity of the edges (0-1)
     * - wallOpacity
       - float
       - 0.08
       - Opacity of the walls/faces (0-1)
     * - edgeWidth
       - float
       - 0.02
       - Width of edges relative to box size (0-0.5)
  """

  tag = "BoundingBox"


class BoundingBoxProvider(SceneElement):
  """Provider for instanced bounding box rendering.

  Enables efficient instanced rendering of multiple :class:`BoundingBox` instances
  with shared shader material and geometry.

  Use this provider when rendering many bounding boxes to benefit from:

  - **Instanced rendering**: Single draw call for all boxes
  - **Shared materials**: Reduced GPU memory usage
  - **Better performance**: Optimized for large numbers of boxes

  **Parameters:**

  .. list-table::
     :header-rows: 1
     :widths: 20 15 10 55

     * - Parameter
       - Type
       - Default
       - Description
     * - edgeWidth
       - float
       - 0.05
       - Width of box edges
     * - maxInstances
       - int
       - 10000
       - Maximum number of box instances
     * - children
       - list
       - []
       - Child BoundingBox elements

  **Example:**

  .. code-block:: python

      sess.upsert @ BoundingBoxProvider(
          key="provider",
          children=[
              BoundingBox(key="box-0", color="red", position=[0, 0, 0]),
              BoundingBox(key="box-1", color="green", position=[2, 0, 0]),
          ]
      )
  """

  tag = "BoundingBoxProvider"
  children = []


class DepthPointCloud(SceneElement):
  """Depth-based point cloud component with LoD rendering.

  Renders a point cloud from depth and RGB images with support for
  multiple colormap visualizations and level-of-detail rendering.

  .. tip::

      For better performance when rendering multiple DepthPointCloud instances,
      wrap them in a :class:`DepthPointCloudProvider`. The provider enables
      shared caching, frustum culling, and level-of-detail rendering.

  **Parameters:**

  .. list-table::
     :header-rows: 1
     :widths: 20 15 10 55

     * - Parameter
       - Type
       - Default
       - Description
     * - depth
       - str
       - (required)
       - URL to 16-bit depth PNG image
     * - rgb
       - str
       - None
       - URL to RGB image (uses depth grayscale if not provided)
     * - position
       - tuple
       - [0, 0, 0]
       - Position in 3D space [x, y, z]
     * - rotation
       - tuple
       - [0, 0, 0]
       - Rotation in Euler angles [x, y, z]
     * - scale
       - tuple
       - [1, 1, 1]
       - Scale factors [x, y, z]
     * - fov
       - float
       - 58
       - Vertical field of view in degrees (58 = RealSense D435)
     * - depthUnit
       - float
       - 0.001
       - Depth scale factor - converts raw depth values to meters
     * - pointSize
       - float
       - 2.0
       - Point size in pixels or world units
     * - screenSpaceSizing
       - bool
       - True
       - If true, points have constant pixel size
     * - cmap
       - str
       - None
       - Colormap: "turbo", "viridis", "inferno", "jet", or None for RGB
     * - colorMode
       - str
       - "depth"
       - Color mode: "depth", "camZ", "camDist", "localY", "worldY"
     * - depthMin
       - float
       - 0.1
       - Minimum depth for visualization mapping
     * - depthMax
       - float
       - 50
       - Maximum depth for visualization mapping
     * - heightMin
       - float
       - -2
       - Minimum height for visualization mapping
     * - heightMax
       - float
       - 2
       - Maximum height for visualization mapping
     * - minY
       - float
       - -Infinity
       - Minimum world Y for filtering - points below this are discarded
     * - maxY
       - float
       - Infinity
       - Maximum world Y for filtering - points above this are discarded
     * - cx
       - float
       - None
       - Principal point X in pixels (defaults to image center = width/2)
     * - cy
       - float
       - None
       - Principal point Y in pixels (defaults to image center = height/2)
     * - hide
       - bool
       - False
       - Hide this point cloud
  """

  tag = "DepthPointCloud"


class DepthPointCloudProvider(SceneElement):
  """Provider for depth point cloud rendering with LoD and frustum culling.

  Manages multiple :class:`DepthPointCloud` instances with shared caching,
  level-of-detail rendering, and frustum culling for improved performance.

  Use this provider when rendering many depth point clouds to benefit from:

  - **Frustum culling**: Only renders point clouds visible to the camera
  - **Level-of-detail (LoD)**: Reduces point density for distant clouds
  - **Shared caching**: Reuses depth texture processing across instances

  **Parameters:**

  .. list-table::
     :header-rows: 1
     :widths: 20 15 10 55

     * - Parameter
       - Type
       - Default
       - Description
     * - frustumCulling
       - bool
       - True
       - Enable frustum culling to skip off-screen point clouds
     * - cullingMargin
       - float
       - 2.0
       - Margin multiplier for culling bounds
     * - lod
       - dict
       - None
       - LoD configuration with strides and distances
     * - bake
       - dict
       - None
       - Bake configuration for depth processing
     * - children
       - list
       - []
       - Child DepthPointCloud elements

  **Example:**

  .. code-block:: python

      sess.upsert @ DepthPointCloudProvider(
          key="provider",
          frustumCulling=True,
          children=[
              DepthPointCloud(key="pc-0", depth="depth_0.png", position=[0, 0, 0]),
              DepthPointCloud(key="pc-1", depth="depth_1.png", position=[2, 0, 0]),
          ]
      )
  """

  tag = "DepthPointCloudProvider"
  children = []


class InPlaceDepthPointCloud(SceneElement):
  """In Place Updated Depth-based point cloud component with LoD rendering.

  Renders a point cloud from depth and RGB images with support for
  multiple colormap visualizations and level-of-detail rendering.

  **Parameters:**

  .. list-table::
     :header-rows: 1
     :widths: 20 15 10 55

     * - Parameter
       - Type
       - Default
       - Description
     * - depth
       - str
       - (required)
       - URL to 16-bit depth PNG image
     * - rgb
       - str
       - None
       - URL to RGB image (uses depth grayscale if not provided)
     * - position
       - tuple
       - [0, 0, 0]
       - Position in 3D space [x, y, z]
     * - rotation
       - tuple
       - [0, 0, 0]
       - Rotation in Euler angles [x, y, z]
     * - scale
       - tuple
       - [1, 1, 1]
       - Scale factors [x, y, z]
     * - fov
       - float
       - 58
       - Vertical field of view in degrees (58 = RealSense D435)
     * - depthUnit
       - float
       - 0.001
       - Depth scale factor - converts raw depth values to meters
     * - pointSize
       - float
       - 2.0
       - Point size in pixels or world units
     * - screenSpaceSizing
       - bool
       - True
       - If true, points have constant pixel size
     * - cmap
       - str
       - None
       - Colormap: "turbo", "viridis", "inferno", "jet", or None for RGB
     * - colorMode
       - str
       - "depth"
       - Color mode: "depth", "camZ", "camDist", "localY", "worldY"
     * - depthMin
       - float
       - 0.1
       - Minimum depth for visualization mapping
     * - depthMax
       - float
       - 50
       - Maximum depth for visualization mapping
     * - heightMin
       - float
       - -2
       - Minimum height for visualization mapping
     * - heightMax
       - float
       - 2
       - Maximum height for visualization mapping
     * - minY
       - float
       - -Infinity
       - Minimum world Y for filtering - points below this are discarded
     * - maxY
       - float
       - Infinity
       - Maximum world Y for filtering - points above this are discarded
     * - cx
       - float
       - None
       - Principal point X in pixels (defaults to image center = width/2)
     * - cy
       - float
       - None
       - Principal point Y in pixels (defaults to image center = height/2)
     * - hide
       - bool
       - False
       - Hide this point cloud
  """

  tag = "InPlaceDepthPointCloud"


class SceneCamera(SceneElement):
  """Camera component for setting scene camera properties.

  :param position: Camera position
  :type position: tuple[float, float, float], optional
  :param lookAt: Point to look at
  :type lookAt: tuple[float, float, float], optional
  :param fov: Field of view in degrees
  :type fov: float, optional
  :param near: Near clipping plane
  :type near: float, optional
  :param far: Far clipping plane
  :type far: float, optional
  """

  tag = "SceneCamera"


class SceneCameraControl(SceneElement):
  """Advanced camera control component.

  Provides fine-grained control over camera movement and rotation speeds.

  :param moveSpeed: Speed of camera movement
  :type moveSpeed: float, optional
  :param keyboardRotateSpeed: Speed of keyboard rotation
  :type keyboardRotateSpeed: float, optional
  :param mouseRotateSpeed: Speed of mouse rotation
  :type mouseRotateSpeed: float, optional
  :param dollySpeed: Speed of dolly motion
  :type dollySpeed: float, optional
  :param truckSpeed: Speed of truck motion
  :type truckSpeed: float, optional
  """

  tag = "SceneCameraControl"


class AmbientLightStage(SceneElement):
  """Ambient light stage component.

  :param something: Configuration flag
  :type something: bool, optional
  """

  tag = "AmbientLightStage"


class CameraPreviewThumbs(SceneElement):
  """Camera preview thumbnails component.

  Displays thumbnail previews of multiple camera views.

  :param previewHeight: Height of preview thumbnails in pixels
  :type previewHeight: int, optional
  :param gap: Gap between thumbnails in pixels
  :type gap: int, optional
  :param margin: Margin around thumbnails in pixels
  :type margin: int, optional
  :param showLabels: Show camera labels
  :type showLabels: bool, optional
  """

  tag = "CameraPreviewThumbs"


class CameraPreviewOverlay(SceneElement):
  """Camera preview overlay component.

  Overlays camera preview information on the scene.

  :param margin: Margin from edge
  :type margin: float, optional
  :param showLabel: Show camera label
  :type showLabel: bool, optional
  :param showCornerBrackets: Show corner brackets
  :type showCornerBrackets: bool, optional
  :param showCenterFocus: Show center focus indicator
  :type showCenterFocus: bool, optional
  :param cornerBracketColor: Color of corner brackets
  :type cornerBracketColor: str, optional
  :param centerFocusColor: Color of center focus
  :type centerFocusColor: str, optional
  """

  tag = "CameraPreviewOverlay"


class AnimationClip(SceneElement):
  """Animation clip component.

  Defines a single animation clip for use in animations.

  :param duration: Duration of the animation clip in seconds
  :type duration: float, optional
  """

  tag = "AnimationClip"
  children = []


class VectorTrack(SceneElement):
  """Vector animation track component.

  Defines keyframe animation for vector properties.

  :param times: Array of time values for keyframes
  :type times: list[float], optional
  :param values: Array of vector values for keyframes
  :type values: list[list[float]], optional
  """

  tag = "VectorTrack"


class QuaternionTrack(SceneElement):
  """Quaternion animation track component.

  Defines keyframe animation for quaternion (rotation) properties.

  :param times: Array of time values for keyframes
  :type times: list[float], optional
  :param values: Array of quaternion values for keyframes
  :type values: list[list[float]], optional
  """

  tag = "QuaternionTrack"


class ThreeAnimate(SceneElement):
  """Three.js animation component.

  Controls animation playback for Three.js animations.

  :param clipIndex: Index of animation clip to play
  :type clipIndex: int, optional
  :param play: Whether animation is playing
  :type play: bool, optional
  :param speed: Playback speed multiplier
  :type speed: float, optional
  """

  tag = "ThreeAnimate"


class PlaybackAnimate(SceneElement):
  """Playback animation component.

  Controls playback of pre-recorded animations.

  :param clipIndex: Index of animation clip to play
  :type clipIndex: int, optional
  :param play: Whether animation is playing
  :type play: bool, optional
  :param speed: Playback speed multiplier
  :type speed: float, optional
  """

  tag = "PlaybackAnimate"


class Scene(BlockElement):
  tag = "Scene"

  def __init__(
    self,
    *children,
    rawChildren=None,
    htmlChildren=None,
    bgChildren: List[Element] = None,
    # default to y-up to be consistent with three.js. Blender uses z-up though.
    up=[0, 1, 0],
    background=None,
    toneMapping: str = None,
    toneMappingExposure: float = None,
    frameloop: Literal["always", "demand"] = None,
    camPosition: List[float] = None,
    camRotation: List[float] = None,
    **kwargs,
  ):
    super().__init__(*children, up=up, **kwargs)

    # Set bgChildren: use user-provided value, or empty list if None
    if bgChildren:
      self.bgChildren = bgChildren

    if rawChildren is None:
      pass
    elif isinstance(rawChildren, list):
      self.rawChildren = rawChildren
    else:
      self.rawChildren = [rawChildren]

    if htmlChildren:
      self.htmlChildren = htmlChildren

    self.up = up

    if background:
      self.background = background

    if toneMapping is not None:
      self.toneMapping = toneMapping
    if toneMappingExposure is not None:
      self.toneMappingExposure = toneMappingExposure

    if frameloop is not None:
      self.frameloop = frameloop

    if camPosition is not None:
      self.camPosition = camPosition
    if camRotation is not None:
      self.camRotation = camRotation

  def _serialize(self):
    obj = super()._serialize()
    if getattr(self, "rawChildren", None):
      obj["rawChildren"] = [e._serialize() for e in self.rawChildren if e]
    if getattr(self, "htmlChildren", None):
      obj["htmlChildren"] = [e._serialize() for e in self.htmlChildren if e]
    if getattr(self, "bgChildren", None):
      obj["bgChildren"] = [e._serialize() for e in self.bgChildren if e]
    return obj


class DefaultScene(Scene):
  """Default Scene with sensible defaults for interactive 3D applications.

  Includes:
  - Grid, HemisphereLightStage, Gamepad, Hands, MotionControllers
  - SceneCamera, SceneCameraControl, CameraPreviewThumbs, CameraPreviewOverlay

  :param children: Scene elements to render.
  :param rawChildren: Raw children elements.
  :param htmlChildren: HTML overlay elements.
  :param bgChildren: Additional background children (appended to defaults).
  :param grid: Whether to include the grid (default: True).
  :param up: Up vector (default: [0, 1, 0] for y-up).
  :param kwargs: Additional arguments passed to Scene.
  """

  def __init__(
    self,
    *children: SceneElement,
    rawChildren: List[SceneElement] = None,
    htmlChildren: List[Element] = None,
    bgChildren: List[SceneElement] = None,
    # default to y-up
    up=[0, 1, 0],
    grid=True,
    **kwargs,
  ):
    # Default bgChildren: Grid + HemisphereLightStage + Gamepad + Hands + MotionControllers
    # + SceneCamera + SceneCameraControl + CameraPreviewThumbs + CameraPreviewOverlay
    default_bg_children = [
      Grid(key="grid") if grid else None,
      HemisphereLightStage(key="light-stage"),
      Gamepad(key="gamepad-0", index=0),
      Hands(fps=30, stream=True, key="hands"),
      MotionControllers(fps=30, stream=True, key="motion-controllers"),
      SceneCamera(key="SceneCamera", position=[0, 5, 10]),
      SceneCameraControl(key="SceneCameraControl", makeDefault=True),
      CameraPreviewThumbs(key="CameraPreviewThumbs"),
      CameraPreviewOverlay(key="CameraPreviewOverlay"),
      *(bgChildren or []),
    ]

    super().__init__(
      *children,
      rawChildren=rawChildren,
      htmlChildren=htmlChildren,
      bgChildren=default_bg_children,
      up=up,
      **kwargs,
    )
