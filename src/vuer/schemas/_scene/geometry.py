"""Geometry primitives, meshes, point clouds and helpers."""


import numpy as np
from numpy.typing import NDArray

from .base import SceneElement


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
