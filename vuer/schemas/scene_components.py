from typing import List, Literal, Optional, Union

import numpy as np
from numpy.typing import NDArray

from .html_components import BlockElement, Element, Image, _UNSET


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


class CameraHelper(SceneElement):
    tag = "CameraHelper"


class group(SceneElement):
    tag = "group"
    children = []


class mesh(SceneElement):
    tag = "mesh"
    children = []


class TriMesh(SceneElement):
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
    """Box geometry primitive.

    Creates a rectangular box (cuboid) with customizable dimensions and segmentation.

    :param args: Geometry construction arguments [width, height, depth, widthSegments, heightSegments, depthSegments].
                 Defaults to [1, 1, 1, 1, 1, 1].
    :type args: List[float], optional
    :param position: Box position [x, y, z].
    :type position: List[float], optional
    :param rotation: Box rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Box scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties (color, opacity, etc.).
    :type material: dict, optional
    :param materialType: Material type (basic, standard, physical, etc.). Defaults to 'physical'.
    :type materialType: str, optional

    Example Usage::

        Box(
            args=[2, 1, 1, 1, 1, 1],
            position=[0, 0, 0],
            material={"color": "red"},
        )
    """
    tag = "Box"
    key = "box"


class Capsule(SceneElement):
    """Capsule geometry primitive.

    Creates a capsule shape (cylinder with hemispherical ends).

    :param args: Geometry construction arguments [radius, height, capSegments, radialSegments, heightSegments].
                 Defaults to [1, 1, 4, 8, 1].
    :type args: List[float], optional
    :param position: Capsule position [x, y, z].
    :type position: List[float], optional
    :param rotation: Capsule rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Capsule scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional
    :param materialType: Material type. Defaults to 'physical'.
    :type materialType: str, optional

    Example Usage::

        Capsule(
            args=[0.5, 2, 4, 8, 1],
            position=[0, 1, 0],
        )
    """
    tag = "Capsule"
    key = "capsule"


class Cone(SceneElement):
    """Cone geometry primitive.

    Creates a cone with customizable base radius, height, and segmentation.

    :param args: Geometry construction arguments [radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength].
                 Defaults to [1, 1, 8, 1, False, 0, Math.PI*2].
    :type args: List, optional
    :param position: Cone position [x, y, z].
    :type position: List[float], optional
    :param rotation: Cone rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Cone scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - radius: Radius of cone base
        - height: Height of cone
        - radialSegments: Number of segments around circumference (min 3)
        - heightSegments: Number of segments along height (min 1)
        - openEnded: Whether cone base is open (True) or closed (False)
        - thetaStart: Starting angle for partial cone (radians)
        - thetaLength: Central angle for partial cone (radians, max 2π)

    Example Usage::

        Cone(
            args=[1, 2, 16, 1, False, 0, 6.283],
            position=[0, 0, 0],
        )
    """
    tag = "Cone"


class Circle(SceneElement):
    """Circle geometry primitive.

    Creates a flat circular disc with customizable radius and segmentation.

    :param args: Geometry construction arguments [radius, segments, thetaStart, thetaLength].
                 Defaults to [1, 8, 0, Math.PI*2].
    :type args: List[float], optional
    :param position: Circle position [x, y, z].
    :type position: List[float], optional
    :param rotation: Circle rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Circle scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - radius: Radius of circle
        - segments: Number of triangular segments (min 3)
        - thetaStart: Starting angle (radians)
        - thetaLength: Central angle (radians, max 2π)

    Example Usage::

        Circle(
            args=[2, 32, 0, 6.283],
            position=[0, 0, 0],
        )
    """
    tag = "Circle"


class Cylinder(SceneElement):
    """Cylinder geometry primitive.

    Creates a cylinder with independent top and bottom radii (can create tapered cylinders).

    :param args: Geometry construction arguments [radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength].
                 Defaults to [1, 1, 1, 8, 1, False, 0, Math.PI*2].
    :type args: List, optional
    :param position: Cylinder position [x, y, z].
    :type position: List[float], optional
    :param rotation: Cylinder rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Cylinder scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - radiusTop: Radius of cylinder at top
        - radiusBottom: Radius of cylinder at bottom
        - height: Height of cylinder
        - radialSegments: Number of segments around circumference (min 3)
        - heightSegments: Number of segments along height (min 1)
        - openEnded: Whether ends are open (True) or closed (False)
        - thetaStart: Starting angle (radians)
        - thetaLength: Central angle (radians, max 2π)

    Example Usage::

        Cylinder(
            args=[1, 1, 2, 32, 1, False, 0, 6.283],
            position=[0, 0, 0],
        )
    """
    tag = "Cylinder"


class Dodecahedron(SceneElement):
    """Dodecahedron geometry primitive.

    Creates a regular dodecahedron (12-sided polyhedron with pentagonal faces).

    :param args: Geometry construction arguments [radius, detail].
                 Defaults to [1, 0].
    :type args: List[float], optional
    :param position: Dodecahedron position [x, y, z].
    :type position: List[float], optional
    :param rotation: Dodecahedron rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Dodecahedron scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - radius: Radius of dodecahedron
        - detail: Subdivision level (0-5, higher = more faces)

    Example Usage::

        Dodecahedron(
            args=[1, 0],
            position=[0, 0, 0],
        )
    """
    tag = "Dodecahedron"


class Edges(SceneElement):
    """Edges geometry helper.

    Generates edge lines from another geometry based on angle threshold.

    :param args: Geometry construction arguments [geometry, thresholdAngle].
                 Defaults to [None, 1].
    :type args: List, optional
    :param position: Position [x, y, z].
    :type position: List[float], optional
    :param rotation: Rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - geometry: Source geometry object to extract edges from
        - thresholdAngle: Angle in degrees - edges with greater angle between faces are drawn

    Example Usage::

        Edges(
            args=[sourceGeometry, 30],
            material={"color": "black"},
        )
    """
    tag = "Edges"


class Extrude(SceneElement):
    """Extrude geometry primitive.

    Extrudes a 2D shape into 3D with optional beveling.

    :param args: Geometry construction arguments [shapes, options].
                 Defaults to [None, {curveSegments: 12, steps: 1, depth: 1, bevelEnabled: True, ...}].
    :type args: List, optional
    :param position: Position [x, y, z].
    :type position: List[float], optional
    :param rotation: Rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - shapes: Shape or array of shapes to extrude
        - options: Dictionary with curveSegments, steps, depth, bevelEnabled, bevelThickness, bevelSize, bevelOffset, bevelSegments

    Example Usage::

        Extrude(
            args=[shape, {"depth": 2, "bevelEnabled": True, "bevelThickness": 0.1}],
            position=[0, 0, 0],
        )
    """
    tag = "Extrude"


class Icosahedron(SceneElement):
    """Icosahedron geometry primitive.

    Creates a regular icosahedron (20-sided polyhedron with triangular faces).

    :param args: Geometry construction arguments [radius, detail].
                 Defaults to [1, 0].
    :type args: List[float], optional
    :param position: Icosahedron position [x, y, z].
    :type position: List[float], optional
    :param rotation: Icosahedron rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Icosahedron scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - radius: Radius of icosahedron
        - detail: Subdivision level (0-5, higher = more faces)

    Example Usage::

        Icosahedron(
            args=[1, 2],
            position=[0, 0, 0],
        )
    """
    tag = "Icosahedron"


class Lathe(SceneElement):
    """Lathe geometry primitive.

    Creates geometry by rotating a set of points around an axis.

    :param args: Geometry construction arguments [points, segments, phiStart, phiLength].
                 Defaults to [[], 12, 0, Math.PI*2].
    :type args: List, optional
    :param position: Position [x, y, z].
    :type position: List[float], optional
    :param rotation: Rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - points: Array of Vector2 points defining the profile curve
        - segments: Number of segments around rotation axis (min 3)
        - phiStart: Starting angle (radians)
        - phiLength: Rotation angle (radians, max 2π)

    Example Usage::

        Lathe(
            args=[points, 32, 0, 6.283],
            position=[0, 0, 0],
        )
    """
    tag = "Lathe"


class Octahedron(SceneElement):
    """Octahedron geometry primitive.

    Creates a regular octahedron (8-sided polyhedron with triangular faces).

    :param args: Geometry construction arguments [radius, detail].
                 Defaults to [1, 0].
    :type args: List[float], optional
    :param position: Octahedron position [x, y, z].
    :type position: List[float], optional
    :param rotation: Octahedron rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Octahedron scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - radius: Radius of octahedron
        - detail: Subdivision level (0-5, higher = more faces)

    Example Usage::

        Octahedron(
            args=[1, 1],
            position=[0, 0, 0],
        )
    """
    tag = "Octahedron"


class Plane(SceneElement):
    """Plane geometry primitive.

    Creates a flat rectangular plane with customizable dimensions and segmentation.

    :param args: Geometry construction arguments [width, height, widthSegments, heightSegments].
                 Defaults to [1, 1, 1, 1].
    :type args: List[float], optional
    :param position: Plane position [x, y, z].
    :type position: List[float], optional
    :param rotation: Plane rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Plane scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - width: Width along X axis
        - height: Height along Y axis
        - widthSegments: Number of segments along width (min 1)
        - heightSegments: Number of segments along height (min 1)

    Example Usage::

        Plane(
            args=[10, 10, 10, 10],
            rotation=[Math.PI/2, 0, 0],  # Horizontal plane
            material={"color": "green"},
        )
    """
    tag = "Plane"


class Polyhedron(SceneElement):
    """Polyhedron geometry primitive.

    Creates a custom polyhedron from vertices and face indices.

    :param args: Geometry construction arguments [vertices, indices, radius, detail].
                 Defaults to [[], [], 1, 0].
    :type args: List, optional
    :param position: Position [x, y, z].
    :type position: List[float], optional
    :param rotation: Rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - vertices: Flat array of vertex coordinates [x1, y1, z1, x2, y2, z2, ...]
        - indices: Flat array of face indices (3 per triangle)
        - radius: Scale factor for vertices
        - detail: Subdivision level (0-5)

    Example Usage::

        Polyhedron(
            args=[vertices, indices, 1, 0],
            position=[0, 0, 0],
        )
    """
    tag = "Polyhedron"


class Ring(SceneElement):
    """Ring geometry primitive.

    Creates a flat 2D ring (annulus) with customizable radii and segmentation.

    :param args: Geometry construction arguments [innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength].
                 Defaults to [0.5, 1, 8, 1, 0, Math.PI*2].
    :type args: List[float], optional
    :param position: Ring position [x, y, z].
    :type position: List[float], optional
    :param rotation: Ring rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Ring scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - innerRadius: Inner radius of ring
        - outerRadius: Outer radius of ring
        - thetaSegments: Number of segments around ring (min 3)
        - phiSegments: Number of segments along ring width (min 1)
        - thetaStart: Starting angle (radians)
        - thetaLength: Central angle (radians, max 2π)

    Example Usage::

        Ring(
            args=[0.5, 1, 32, 8, 0, 6.283],
            position=[0, 0, 0],
        )
    """
    tag = "Ring"


class Shape(SceneElement):
    """Shape geometry primitive.

    Creates geometry from a 2D shape path.

    :param args: Geometry construction arguments [shapes, curveSegments].
                 Defaults to [None, 12].
    :type args: List, optional
    :param position: Position [x, y, z].
    :type position: List[float], optional
    :param rotation: Rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - shapes: Shape or array of shapes to render
        - curveSegments: Number of segments for curved paths (min 1)

    Example Usage::

        Shape(
            args=[shape, 12],
            position=[0, 0, 0],
        )
    """
    tag = "Shape"


class Sphere(SceneElement):
    """Sphere geometry primitive.

    Creates a sphere with customizable radius and segmentation.

    :param args: Geometry construction arguments [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength].
                 Defaults to [1, 32, 16, 0, Math.PI*2, 0, Math.PI].
    :type args: List[float], optional
    :param position: Sphere position [x, y, z].
    :type position: List[float], optional
    :param rotation: Sphere rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Sphere scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - radius: Radius of sphere
        - widthSegments: Number of horizontal segments (min 3)
        - heightSegments: Number of vertical segments (min 2)
        - phiStart: Horizontal starting angle (radians)
        - phiLength: Horizontal sweep angle (radians, max 2π)
        - thetaStart: Vertical starting angle (radians)
        - thetaLength: Vertical sweep angle (radians, max π)

    Example Usage::

        Sphere(
            args=[1, 32, 16, 0, 6.283, 0, 3.142],
            position=[0, 0, 0],
            material={"color": "blue"},
        )
    """
    tag = "Sphere"


class Tetrahedron(SceneElement):
    """Tetrahedron geometry primitive.

    Creates a regular tetrahedron (4-sided polyhedron with triangular faces).

    :param args: Geometry construction arguments [radius, detail].
                 Defaults to [1, 0].
    :type args: List[float], optional
    :param position: Tetrahedron position [x, y, z].
    :type position: List[float], optional
    :param rotation: Tetrahedron rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Tetrahedron scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - radius: Radius of tetrahedron
        - detail: Subdivision level (0-5, higher = more faces)

    Example Usage::

        Tetrahedron(
            args=[1, 0],
            position=[0, 0, 0],
        )
    """
    tag = "Tetrahedron"


class Torus(SceneElement):
    """Torus geometry primitive.

    Creates a torus (donut shape) with customizable radii and segmentation.

    :param args: Geometry construction arguments [radius, tube, radialSegments, tubularSegments, arc].
                 Defaults to [1, 0.4, 8, 6, Math.PI*2].
    :type args: List[float], optional
    :param position: Torus position [x, y, z].
    :type position: List[float], optional
    :param rotation: Torus rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Torus scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - radius: Radius from center of torus to center of tube
        - tube: Radius of tube
        - radialSegments: Number of segments along tube (min 3)
        - tubularSegments: Number of segments around torus (min 3)
        - arc: Central angle (radians, max 2π)

    Example Usage::

        Torus(
            args=[1, 0.4, 16, 48, 6.283],
            position=[0, 0, 0],
        )
    """
    tag = "Torus"


class TorusKnot(SceneElement):
    """TorusKnot geometry primitive.

    Creates a torus knot with customizable winding parameters.

    :param args: Geometry construction arguments [radius, tube, tubularSegments, radialSegments, p, q].
                 Defaults to [1, 0.4, 64, 8, 2, 3].
    :type args: List, optional
    :param position: Torus knot position [x, y, z].
    :type position: List[float], optional
    :param rotation: Torus knot rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Torus knot scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - radius: Radius of torus
        - tube: Radius of tube
        - tubularSegments: Number of segments along knot path (min 3)
        - radialSegments: Number of segments along tube (min 3)
        - p: Number of times knot winds around torus axis
        - q: Number of times knot winds through torus hole

    Example Usage::

        TorusKnot(
            args=[1, 0.4, 128, 16, 2, 3],
            position=[0, 0, 0],
        )
    """
    tag = "TorusKnot"


class Tube(SceneElement):
    """Tube geometry primitive.

    Creates a tube that follows a 3D path curve.

    :param args: Geometry construction arguments [path, tubularSegments, radius, radialSegments, closed].
                 Defaults to [None, 64, 1, 8, False].
    :type args: List, optional
    :param position: Position [x, y, z].
    :type position: List[float], optional
    :param rotation: Rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param material: Material properties.
    :type material: dict, optional

    Args breakdown:
        - path: 3D curve path for tube to follow
        - tubularSegments: Number of segments along path (min 2)
        - radius: Radius of tube
        - radialSegments: Number of segments around tube (min 2)
        - closed: Whether tube forms closed loop

    Example Usage::

        Tube(
            args=[path, 64, 0.5, 8, False],
            position=[0, 0, 0],
        )
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

    def __init__(self, *, children=None, color=None, near=None, far=None, **kwargs):
        assert children is None, "Fog does not support children."
        super().__init__(attach="fog", key="fog", color=color, near=near, far=far, **kwargs)


class Wireframe(SceneElement):
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
    :param onLoad: Callback function or event name to trigger when point cloud loads.
    :type onLoad: callable or str, optional
    """

    tag = "Pcd"


class PerspectiveCamera(SceneElement):
    """Perspective camera with FOV-based projection.

    This camera uses a perspective projection where objects appear smaller as they
    get further from the camera, mimicking how human eyes perceive the world.

    :param fov: Field of view in degrees. Defaults to 75.
    :type fov: float, optional
    :param zoom: Camera zoom factor. Defaults to 1.
    :type zoom: float, optional
    :param near: Near clipping plane distance. Objects closer than this won't be rendered. Defaults to 0.1.
    :type near: float, optional
    :param far: Far clipping plane distance. Objects further than this won't be rendered. Defaults to 1000.
    :type far: float, optional
    :param position: Camera position in 3D space [x, y, z]. Defaults to [0, 0, 5].
    :type position: List[float], optional
    :param rotation: Camera rotation as Euler angles [x, y, z] in radians. Defaults to [0, 0, 0].
    :type rotation: List[float], optional
    :param lookAt: Point in 3D space [x, y, z] for the camera to look at. Overrides rotation if set.
    :type lookAt: List[float], optional
    :param makeDefault: Whether this camera should be the default rendering camera. Defaults to False.
    :type makeDefault: bool, optional
    :param active: Whether this camera is currently active. Defaults to False.
    :type active: bool, optional

    Example Usage::

        PerspectiveCamera(
            position=[5, 2, 5],
            lookAt=[0, 0, 0],
            fov=75,
            near=0.1,
            far=1000,
            makeDefault=True,
        )
    """
    tag = "PerspectiveCamera"


class OrthographicCamera(SceneElement):
    """Orthographic camera for parallel projection.

    This camera uses orthographic projection where objects maintain their size
    regardless of distance from the camera. Useful for technical drawings, CAD,
    and 2D-style games.

    :param zoom: Camera zoom factor. Higher values zoom in. Defaults to 200.
    :type zoom: float, optional
    :param left: Left plane of view frustum. Defaults to -window.width/2.
    :type left: float, optional
    :param right: Right plane of view frustum. Defaults to window.width/2.
    :type right: float, optional
    :param top: Top plane of view frustum. Defaults to window.height/2.
    :type top: float, optional
    :param bottom: Bottom plane of view frustum. Defaults to -window.height/2.
    :type bottom: float, optional
    :param near: Near clipping plane distance. Defaults to 0.001.
    :type near: float, optional
    :param far: Far clipping plane distance. Defaults to 1000.
    :type far: float, optional
    :param position: Camera position in 3D space [x, y, z]. Defaults to [0, 0, 5].
    :type position: List[float], optional
    :param rotation: Camera rotation as Euler angles [x, y, z] in radians. Defaults to [0, 0, 0].
    :type rotation: List[float], optional
    :param lookAt: Point in 3D space [x, y, z] for the camera to look at. Overrides rotation if set.
    :type lookAt: List[float], optional
    :param makeDefault: Whether this camera should be the default rendering camera. Defaults to False.
    :type makeDefault: bool, optional
    :param active: Whether this camera is currently active. Defaults to False.
    :type active: bool, optional

    Example Usage::

        OrthographicCamera(
            position=[0, 10, 0],
            lookAt=[0, 0, 0],
            zoom=100,
            makeDefault=True,
        )
    """
    tag = "OrthographicCamera"


class OrbitControls(SceneElement):
    """Orbit controls for interactive camera manipulation.

    Provides mouse/touch controls for rotating (orbiting) around a target point,
    panning, and zooming. Essential for 3D scene navigation.

    :param enableDamping: Enable smooth damping (inertia) for camera movement. Defaults to False.
    :type enableDamping: bool, optional
    :param enablePan: Enable panning (moving the camera parallel to the view plane). Defaults to True.
    :type enablePan: bool, optional
    :param enableRotate: Enable rotation (orbiting around the target). Defaults to True.
    :type enableRotate: bool, optional
    :param enableZoom: Enable zooming (moving closer/further from target). Defaults to True.
    :type enableZoom: bool, optional
    :param screenSpacePanning: Pan in screen space instead of world space. Defaults to True.
    :type screenSpacePanning: bool, optional
    :param makeDefault: Make these the default controls for the scene. Defaults to True.
    :type makeDefault: bool, optional
    :param maxPolarAngle: Maximum vertical rotation angle in degrees. Defaults to 135.
    :type maxPolarAngle: float, optional
    :param minPolarAngle: Minimum vertical rotation angle in degrees. Defaults to 0.
    :type minPolarAngle: float, optional
    :param maxDistance: Maximum zoom distance from target. Defaults to 1000. Set to 0 for infinity.
    :type maxDistance: float, optional
    :param minDistance: Minimum zoom distance from target. Defaults to 0.
    :type minDistance: float, optional
    :param zoomSpeed: Zoom speed multiplier. Defaults to 1.0.
    :type zoomSpeed: float, optional
    :param rotateSpeed: Rotation speed multiplier. Defaults to 1.0.
    :type rotateSpeed: float, optional
    :param panSpeed: Pan speed multiplier. Defaults to 1.0.
    :type panSpeed: float, optional

    Example Usage::

        OrbitControls(
            enableDamping=True,
            enablePan=True,
            enableRotate=True,
            enableZoom=True,
            makeDefault=True,
            maxPolarAngle=90,
            minPolarAngle=0,
            zoomSpeed=1.0,
        )
    """
    tag = "OrbitControls"


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


class SceneBackground(Image, SceneElement):
    """Sets the background of the scene to a static image. Does not work well
    with high frame rates. For displaying movies, use the ImageBackground element.
    """

    tag = "SceneBackground"


class ImageBackground(Image, SceneElement):
    """Sets the background of the scene to an image, Supports high frame rates.

    We use a plane that is always facing the camera to display the image.
    """

    tag = "ImageBackground"


class HUDPlane(Image, SceneElement):
    """A Head-up display (HUD) plane that is always facing the camera. Requires
    mounting a material."""

    tag = "HUDPlane"


class VideoMaterial(Image, SceneElement):
    """A Video Material for loading from a file hosted at a url."""

    tag = "VideoMaterial"


class WebRTCVideoMaterial(Image, SceneElement):
    """A Video Material for loading from a media stream."""

    tag = "WebRTCVideoMaterial"


class VideoPlane(Image, SceneElement):
    """A Head-up display (HUD) plane that is always facing the camera. Requires
    mounting a material."""

    tag = "VideoPlane"


class WebRTCVideoPlane(SceneElement):
    """A Head-up display (HUD) plane that is always facing the camera. Requires
    mounting a material."""

    tag = "WebRTCVideoPlane"


class StereoVideoPlane(Image, SceneElement):
    """A Head-up display (HUD) plane that is always facing the camera. Requires
    mounting a material."""

    tag = "StereoVideoPlane"


class WebRTCStereoVideoPlane(SceneElement):
    """A Head-up display (HUD) plane that is always facing the camera. Requires
    mounting a material."""

    tag = "WebRTCStereoVideoPlane"


# class ImagePlane(Image, SceneElement):
#     """For displaying a static image. Just pass in an image object to the first argument."
#
#     Untested, not taking in images right now.
#     ""
#
#     tag = "ImagePlane"


class Group(SceneElement):
    tag = "VuerGroup"


class HemisphereLight(SceneElement):
    """Hemisphere light with sky and ground colors.

    Provides ambient lighting from two different colored hemispheres (sky and ground),
    simulating natural outdoor lighting where light comes from above and reflects from below.

    :param skyColor: Color of the sky (top hemisphere). Defaults to '#ffffff'.
    :type skyColor: str, optional
    :param groundColor: Color of the ground (bottom hemisphere). Defaults to '#000000'.
    :type groundColor: str, optional
    :param intensity: Light intensity (0-10). Defaults to 1.
    :type intensity: float, optional
    :param hide: Hide the light. Defaults to False.
    :type hide: bool, optional
    :param helper: Show light helper visualization. Defaults to False.
    :type helper: bool, optional
    :param position: Light position [x, y, z].
    :type position: List[float], optional
    """
    tag = "HemisphereLight"


class RectAreaLight(SceneElement):
    """Rectangular area light.

    Emits light uniformly across a rectangular surface. Useful for simulating
    windows, light panels, or other large light sources with defined shape.

    :param color: Light color. Defaults to '#ffffff'.
    :type color: str, optional
    :param intensity: Light intensity (0-10). Defaults to 1.
    :type intensity: float, optional
    :param lookAt: Point the light should face [x, y, z].
    :type lookAt: List[float], optional
    :param width: Width of the light rectangle. Defaults to 10.
    :type width: float, optional
    :param height: Height of the light rectangle. Defaults to 10.
    :type height: float, optional
    :param hide: Hide the light. Defaults to False.
    :type hide: bool, optional
    :param helper: Show light helper visualization. Defaults to False.
    :type helper: bool, optional
    :param position: Light position [x, y, z].
    :type position: List[float], optional
    """
    tag = "RectAreaLight"


class Stage(SceneElement):
    """Scene composition utility from drei.

    Provides preset lighting and arrangement for displaying 3D models. Not a light itself,
    but a scene layout helper that configures multiple lights and effects automatically.

    :param intensity: Overall light intensity multiplier. Defaults to 1.
    :type intensity: float, optional
    :param environment: Environment preset name ('sunset', 'dawn', 'night', etc.).
    :type environment: str, optional
    :param shadows: Whether to enable shadows. Defaults to True.
    :type shadows: bool, optional
    :param adjustCamera: Whether to auto-adjust camera position. Defaults to True.
    :type adjustCamera: bool, optional
    :param preset: Stage preset ('rembrandt', 'portrait', 'upfront', 'soft').
    :type preset: str, optional
    """
    tag = "Stage"
    key = "stage"


class Gamepads(SceneElement):
    """Gamepad input handler for XR and browser gamepad APIs.

    Provides access to gamepad button and axis events for game controller input.

    :param stream: Enable streaming of gamepad state. Defaults to True.
    :type stream: bool, optional
    :param fps: Frames per second for gamepad updates. Defaults to 30.
    :type fps: int, optional
    """
    tag = "Gamepads"
    key = "gamepads"


class DirectionalLight(SceneElement):
    """Directional light with parallel rays.

    Simulates distant light sources like the sun, where all light rays are parallel.
    Useful for outdoor scenes and casting shadows.

    :param color: Light color. Defaults to '#ffffff'.
    :type color: str, optional
    :param intensity: Light intensity (0-10). Defaults to 1.
    :type intensity: float, optional
    :param hide: Hide the light. Defaults to False.
    :type hide: bool, optional
    :param helper: Show light helper visualization with target. Defaults to False.
    :type helper: bool, optional
    :param castShadow: Whether this light casts shadows. Defaults to False.
    :type castShadow: bool, optional
    :param position: Light position [x, y, z]. Defaults to [0, 0, 1].
    :type position: List[float], optional
    :param target: Target position the light points at [x, y, z].
    :type target: List[float], optional
    """
    tag = "DirectionalLight"
    key = "directionallight"


class PointLight(SceneElement):
    """Point light radiating in all directions.

    Emits light equally in all directions from a single point, like a light bulb.

    :param color: Light color. Defaults to '#ffffff'.
    :type color: str, optional
    :param intensity: Light intensity (0-10). Defaults to 1.
    :type intensity: float, optional
    :param distance: Maximum distance the light reaches. 0 = infinite. Defaults to 0.
    :type distance: float, optional
    :param decay: Amount light dims along distance. Defaults to 2 (physically correct).
    :type decay: float, optional
    :param radius: Light radius for soft shadows. Defaults to 0.
    :type radius: float, optional
    :param showSphere: Show a sphere at the light position. Defaults to False.
    :type showSphere: bool, optional
    :param hide: Hide the light. Defaults to False.
    :type hide: bool, optional
    :param helper: Show light helper visualization. Defaults to False.
    :type helper: bool, optional
    :param position: Light position [x, y, z].
    :type position: List[float], optional
    """
    tag = "PointLight"
    key = "pointlight"


class SpotLight(SceneElement):
    """Spot light with cone-shaped beam.

    Emits light in a cone from a point, like a flashlight or stage spotlight.

    :param color: Light color. Defaults to '#ffffff'.
    :type color: str, optional
    :param intensity: Light intensity (0-10). Defaults to 1.
    :type intensity: float, optional
    :param distance: Maximum distance the light reaches. 0 = infinite. Defaults to 0.
    :type distance: float, optional
    :param angle: Maximum spotlight cone angle in radians. Defaults to Math.PI/3.
    :type angle: float, optional
    :param penumbra: Softness of the spotlight edge (0-1). Defaults to 0.
    :type penumbra: float, optional
    :param decay: Amount light dims along distance. Defaults to 2 (physically correct).
    :type decay: float, optional
    :param hide: Hide the light. Defaults to False.
    :type hide: bool, optional
    :param helper: Show light helper visualization with cone. Defaults to False.
    :type helper: bool, optional
    :param castShadow: Whether this light casts shadows. Defaults to False.
    :type castShadow: bool, optional
    :param position: Light position [x, y, z].
    :type position: List[float], optional
    :param target: Target position the light points at [x, y, z].
    :type target: List[float], optional
    """
    tag = "SpotLight"
    key = "spotlight"


class AmbientLight(SceneElement):
    """Ambient light illuminating all objects equally.

    Provides uniform lighting from all directions with no shadows. Useful as base
    lighting to ensure no objects are completely black.

    :param color: Light color. Defaults to '#ffffff'.
    :type color: str, optional
    :param intensity: Light intensity (0-10). Defaults to 1.
    :type intensity: float, optional
    :param hide: Hide the light. Defaults to False.
    :type hide: bool, optional
    """
    tag = "AmbientLight"
    key = "ambientlight"


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

    def __init__(
        self,
        key="hands",
        # eventTypes=("squeeze",),
        stream=True,
        disableLeft=False,  # disables the left data stream, also hides the hand.
        disableRight=False,  # disables the right data stream, also hides the hand.
        hideLeft=False,  # hides the hand, but still streams the data.
        hideRight=False,  # hides the hand, but still streams the data.
        **kwargs,
    ):
        super().__init__(
            key=key,
            # eventTypes=eventTypes,
            stream=stream,
            disableLeft=disableLeft,
            disableRight=disableRight,
            hideLeft=hideLeft,
            hideRight=hideRight,
            **kwargs,
        )


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

class Bodies(SceneElement):
    """
    Bodies component for tracking full-body XR poses using the WebXR Body Tracking API.

    :param key: Unique identifier for the body tracking instance.
    :type key: str, optional
    :param stream: Whether to enable streaming of body pose data to the server.
    :type stream: bool, optional
    :param fps: Frames per second at which body pose data should be sent.
    :type fps: int, optional
    :param hideIndicate: Whether to hide all visual indicators for tracked joints while still tracking data.
    :type hideIndicate: bool, optional
    :param showFrame: Whether to display coordinate frames at each joint position.
    :type showFrame: bool, optional
    :param frameScale: Scale factor for the coordinate frames or joint markers.
    :type frameScale: float, optional
    """

    tag = "Bodies"

    def __init__(
        self,
        key="body_tracking",
        stream=True,
        fps=30,
        hideIndicate=False,
        showFrame=True,
        frameScale=0.02,
        **kwargs,
    ):
        super().__init__(
            key=key,
            stream=stream,
            fps=fps,
            hideIndicate=hideIndicate,
            showFrame=showFrame,
            frameScale=frameScale,
            **kwargs,
        )

class Obj(SceneElement):
    tag = "Obj"

    def __init__(self, src=None, mtl=None, text=None, buff=None, materials=None, **kwargs):
        """
        :param src: URL to the OBJ file.
        :type  src: str, optional
        :param mtl: URL to the MTL (material) file. Defaults to same name as OBJ with .mtl extension.
        :type  mtl: str, optional
        :param text: OBJ file content as text string.
        :type  text: str, optional
        :param buff: OBJ file content as binary data.
        :type  buff: bytes, optional
        :param materials: List of material names to use from the MTL file.
        :type  materials: List[str], optional
        :param assets: Asset mapping for resolving relative texture paths in MTL file.
        :type  assets: dict, optional
        :param encoding: Text encoding for binary data. Defaults to 'ascii'.
        :type  encoding: str, optional
        :param hide: Hide the model without removing it from scene. Defaults to False.
        :type  hide: bool, optional
        :param onLoad: Callback function or event name to trigger when model loads.
        :type  onLoad: callable or str, optional
        :param position: Model position [x, y, z].
        :type  position: List[float], optional
        :param rotation: Model rotation [x, y, z] in radians.
        :type  rotation: List[float], optional
        :param scale: Model scale factor or [x, y, z] scale.
        :type  scale: float or List[float], optional

        Example Usage::

            Obj(
                src="http://localhost:8012/static/model.obj",
                mtl="http://localhost:8012/static/model.mtl",
                position=[0, 0, 0],
                scale=1.0,
            )
        """
        self.src = src
        self.mtl = mtl
        self.text = text
        self.buff = buff
        self.materials = materials

        super().__init__(**kwargs)


class CoordsMarker(SceneElement):
    """Coordinates Marker Component.

    Args:
        position: A list of 3 numbers representing the position.
        rotation: A list of 3 numbers representing the rotation.
        matrix: A list of 16 numbers representing the matrix. Overrides position and rotation.
        scale: 1.0
        headScale: 1.0
        lod: Level of detail. The number of segments for the cone and the stem.
    """

    tag = "CoordsMarker"


class Arrow(SceneElement):
    """Coordinates Marker Component.

    Args:
        matrix: A list of 16 numbers representing the matrix. Overrides position and rotation.
        position: A list of 3 numbers representing the position.
        rotation: A list of 3 numbers representing the rotation.
        scale: 1.0
        headScale: 1.0
        lod: Level of detail. The number of segments for the cone and the stem.
    """

    tag = "Arrow"


class Ply(SceneElement):
    """PLY (Polygon File Format) model loader.

    Loads and displays PLY 3D model files, commonly used for storing 3D scan data
    and point cloud information. Supports both ASCII and binary formats.

    :param src: URL to the PLY file.
    :type src: str, optional
    :param text: PLY file content as text string.
    :type text: str, optional
    :param buff: PLY file content as binary data.
    :type buff: bytes, optional
    :param assets: Asset mapping for resolving relative paths in multi-file models.
    :type assets: dict, optional
    :param hide: Hide the model without removing it from scene. Defaults to False.
    :type hide: bool, optional
    :param encoding: Text encoding for binary data. Defaults to 'ascii'.
    :type encoding: str, optional
    :param onLoad: Callback function or event name to trigger when model loads.
    :type onLoad: callable or str, optional
    :param position: Model position [x, y, z].
    :type position: List[float], optional
    :param rotation: Model rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Model scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional

    Example Usage::

        Ply(
            src="http://localhost:8012/static/model.ply",
            position=[0, 0, 0],
            scale=1.0,
        )
    """
    tag = "Ply"


class Glb(SceneElement):
    """GLB/GLTF model file loader.

    Loads and displays GLB (binary glTF) or GLTF 3D model files. Supports
    animations, materials, textures, and PBR rendering. GLTF is the standard
    format for 3D content on the web.

    :param src: URL to the GLB/GLTF file.
    :type src: str, optional
    :param text: GLTF file content as JSON text string (for .gltf files).
    :type text: str, optional
    :param buff: GLB file content as binary data (for .glb files).
    :type buff: bytes, optional
    :param hide: Hide the model without removing it from scene. Defaults to False.
    :type hide: bool, optional
    :param encoding: Text encoding for text-based GLTF. Defaults to 'ascii'.
    :type encoding: str, optional
    :param onLoad: Callback function or event name to trigger when model loads.
    :type onLoad: callable or str, optional
    :param position: Model position [x, y, z].
    :type position: List[float], optional
    :param rotation: Model rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Model scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param materialType: Override material type (basic, standard, physical, depth, normal, etc.).
    :type materialType: str, optional
    :param material: Material properties override. Use side=0 (inside), 1 (outside), 2 (both).
    :type material: dict, optional

    Example Usage::

        Glb(
            src="http://localhost:8012/static/model.glb",
            position=[0, 0, 0],
            scale=0.1,
            materialType="physical",
        )

    Note: GLB format includes animations which are automatically extracted and available.
    """

    tag = "Glb"


class Urdf(SceneElement):
    """URDF (Unified Robot Description Format) model loader.

    Loads and displays robot models in URDF format, commonly used in robotics
    for defining robot kinematics, dynamics, and visual/collision geometry.

    :param src: URL to the URDF file.
    :type src: str, optional
    :param text: URDF file content as XML text string.
    :type text: str, optional
    :param buff: URDF file content as binary data.
    :type buff: bytes, optional
    :param assets: Asset mapping for resolving relative paths to meshes and textures.
    :type assets: dict, optional
    :param hide: Hide the model without removing it from scene. Defaults to False.
    :type hide: bool, optional
    :param encoding: Text encoding for binary data. Defaults to 'ascii'.
    :type encoding: str, optional
    :param jointValues: Dictionary mapping joint names to their position values.
    :type jointValues: dict, optional
    :param workingPath: Base path for resolving relative file references.
    :type workingPath: str, optional
    :param fetchOptions: Options to pass to fetch() when loading files.
    :type fetchOptions: dict, optional
    :param parseVisual: Whether to parse and display visual geometry. Defaults to True.
    :type parseVisual: bool, optional
    :param parseCollision: Whether to parse collision geometry. Defaults to False.
    :type parseCollision: bool, optional
    :param packages: ROS package path mappings (package:// URLs).
    :type packages: dict, optional
    :param onLoad: Callback function or event name to trigger when model loads.
    :type onLoad: callable or str, optional
    :param color: Override color for all robot links.
    :type color: str, optional
    :param material: Material properties to apply to robot geometry.
    :type material: dict, optional
    :param materialType: Material type (basic, standard, physical, etc.).
    :type materialType: str, optional
    :param position: Robot position [x, y, z].
    :type position: List[float], optional
    :param rotation: Robot rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Robot scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional

    Example Usage::

        Urdf(
            src="http://localhost:8012/static/robot.urdf",
            jointValues={"joint1": 0.5, "joint2": -0.3},
            packages={"my_robot": "http://localhost:8012/robot_meshes/"},
            position=[0, 0, 0],
        )

    Note: URDF loader supports dynamic joint updates by modifying jointValues.
    """
    tag = "Urdf"


class Gripper(SceneElement):
    tag = "Gripper"


class SkeletalGripper(SceneElement):
    tag = "SkeletalGripper"


class Grid(SceneElement):
    tag = "Grid"


class GrabRender(SceneElement):
    tag = "GrabRender"
    key = "DEFAULT"
    """We do not want the client to set keys automatically since GrabRender is 
    usually used a singleton component as default."""


class TimelineControls(SceneElement):
    tag = "TimelineControls"
    # todo: consider adding default component keys here.


class PointerControls(SceneElement):
    tag = "PointerControls"
    # todo: consider adding default component keys here.


class KeyboardControls(SceneElement):
    """Keyboard controls for camera navigation using WASD + QE keys.

    Provides keyboard input for camera movement. Works in conjunction with OrbitControls.
    - W/S: Move forward/backward
    - A/D: Move left/right
    - Q/E: Move down/up
    - Hold Shift: Move 10x faster

    :param controls: Reference to the orbit controls instance. Required.
    :type controls: object, optional
    :param panSpeed: Base pan speed multiplier. Defaults to 0.016.
    :type panSpeed: float, optional
    :param viewHeight: View height for speed calculation. Defaults to camera-dependent.
    :type viewHeight: float, optional

    Example Usage::

        KeyboardControls(
            panSpeed=0.02,
        )

    Note: This component must be used alongside OrbitControls to function properly.
    """
    tag = "KeyboardControls"


class Fbx(SceneElement):
    """FBX model file loader.

    Loads and displays Autodesk FBX 3D model files. Supports animations and
    can load from URL, text content, or binary data.

    :param src: URL to the FBX file.
    :type src: str, optional
    :param text: FBX file content as text string.
    :type text: str, optional
    :param buff: FBX file content as binary data.
    :type buff: bytes, optional
    :param encoding: Text encoding for binary data. Defaults to 'ascii'.
    :type encoding: str, optional
    :param hide: Hide the model without removing it from scene. Defaults to False.
    :type hide: bool, optional
    :param onLoad: Callback function or event name to trigger when model loads.
    :type onLoad: callable or str, optional
    :param position: Model position [x, y, z].
    :type position: List[float], optional
    :param rotation: Model rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Model scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional

    Example Usage::

        Fbx(
            src="http://localhost:8012/static/model.fbx",
            position=[0, 0, 0],
            scale=0.01,
        )
    """
    tag = "Fbx"


class Stl(SceneElement):
    """STL model file loader.

    Loads and displays STL (Stereolithography) 3D model files, commonly used
    for 3D printing and CAD applications.

    :param src: URL to the STL file.
    :type src: str, optional
    :param text: STL file content as text string.
    :type text: str, optional
    :param buff: STL file content as binary data.
    :type buff: bytes, optional
    :param encoding: Text encoding for binary data. Defaults to 'ascii'.
    :type encoding: str, optional
    :param hide: Hide the model without removing it from scene. Defaults to False.
    :type hide: bool, optional
    :param onLoad: Callback function or event name to trigger when model loads.
    :type onLoad: callable or str, optional
    :param position: Model position [x, y, z].
    :type position: List[float], optional
    :param rotation: Model rotation [x, y, z] in radians.
    :type rotation: List[float], optional
    :param scale: Model scale factor or [x, y, z] scale.
    :type scale: float or List[float], optional
    :param color: Model color.
    :type color: str, optional
    :param materialType: Material type (basic, standard, physical, etc.).
    :type materialType: str, optional

    Example Usage::

        Stl(
            src="http://localhost:8012/static/part.stl",
            position=[0, 0, 0],
            color="silver",
            scale=1.0,
        )
    """
    tag = "Stl"


class ImageSphere(SceneElement):
    """360-degree image sphere for immersive image display.

    Creates a spherical surface that displays an image, useful for 360° photos,
    VR environments, and panoramic content. The sphere follows the camera position
    by default, creating an immersive effect.

    :param rgb: RGB texture for the sphere surface.
    :type rgb: Texture, optional
    :param alpha: Alpha/transparency texture.
    :type alpha: Texture, optional
    :param depth: Depth map texture for displacement.
    :type depth: Texture, optional
    :param depthScale: Scale factor for depth displacement. Defaults to 1.
    :type depthScale: float, optional
    :param depthBias: Bias offset for depth displacement. Defaults to 0.
    :type depthBias: float, optional
    :param distanceToCamera: Distance from camera to sphere surface. Defaults to 1.0.
    :type distanceToCamera: float, optional
    :param opacity: Sphere opacity (0-1). Defaults to 1.0.
    :type opacity: float, optional
    :param fixed: Whether sphere stays fixed or follows camera. Defaults to False.
    :type fixed: bool, optional
    :param layers: Rendering layer index for XR. Defaults to None.
    :type layers: int, optional
    :param side: Which side to render (0=front, 1=back, 2=both). Defaults to 2.
    :type side: int, optional
    :param wireframe: Render as wireframe. Defaults to False.
    :type wireframe: bool, optional
    :param material: Additional material properties.
    :type material: dict, optional

    Example Usage::

        ImageSphere(
            src="panorama.jpg",
            distanceToCamera=100,
            opacity=1.0,
        )

    Note: Only works with perspective cameras.
    """
    tag = "ImageSphere"


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
        **kwargs
    ):
        super().__init__(
            *children,
            follow=follow,
            lockX=lockX,
            lockY=lockY,
            lockZ=lockZ,
            **kwargs
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

    def __init__(
        self,
        *children,
        characters: Union[str, None, object] = _UNSET,
        color: Union[str, None, object] = _UNSET,
        fontSize: Union[float, None, object] = _UNSET,
        fontWeight: Union[int, str, None, object] = _UNSET,
        fontStyle: Union[str, None, object] = _UNSET,
        maxWidth: Union[float, None, object] = _UNSET,
        lineHeight: Union[float, None, object] = _UNSET,
        letterSpacing: Union[float, None, object] = _UNSET,
        textAlign: Union[str, None, object] = _UNSET,
        font: Union[str, None, object] = _UNSET,
        anchorX: Union[float, str, None, object] = _UNSET,
        anchorY: Union[float, str, None, object] = _UNSET,
        clipRect: Union[list, None, object] = _UNSET,
        depthOffset: Union[float, None, object] = _UNSET,
        direction: Union[str, None, object] = _UNSET,
        overflowWrap: Union[str, None, object] = _UNSET,
        whiteSpace: Union[str, None, object] = _UNSET,
        outlineWidth: Union[float, str, None, object] = _UNSET,
        outlineOffsetX: Union[float, str, None, object] = _UNSET,
        outlineOffsetY: Union[float, str, None, object] = _UNSET,
        outlineBlur: Union[float, str, None, object] = _UNSET,
        outlineColor: Union[str, None, object] = _UNSET,
        outlineOpacity: Union[float, None, object] = _UNSET,
        strokeWidth: Union[float, str, None, object] = _UNSET,
        strokeColor: Union[str, None, object] = _UNSET,
        strokeOpacity: Union[float, None, object] = _UNSET,
        fillOpacity: Union[float, None, object] = _UNSET,
        sdfGlyphSize: Union[int, None, object] = _UNSET,
        debugSDF: Union[bool, None, object] = _UNSET,
        glyphGeometryDetail: Union[int, None, object] = _UNSET,
        **kwargs
    ):
        super().__init__(
            *children,
            characters=characters,
            color=color,
            fontSize=fontSize,
            fontWeight=fontWeight,
            fontStyle=fontStyle,
            maxWidth=maxWidth,
            lineHeight=lineHeight,
            letterSpacing=letterSpacing,
            textAlign=textAlign,
            font=font,
            anchorX=anchorX,
            anchorY=anchorY,
            clipRect=clipRect,
            depthOffset=depthOffset,
            direction=direction,
            overflowWrap=overflowWrap,
            whiteSpace=whiteSpace,
            outlineWidth=outlineWidth,
            outlineOffsetX=outlineOffsetX,
            outlineOffsetY=outlineOffsetY,
            outlineBlur=outlineBlur,
            outlineColor=outlineColor,
            outlineOpacity=outlineOpacity,
            strokeWidth=strokeWidth,
            strokeColor=strokeColor,
            strokeOpacity=strokeOpacity,
            fillOpacity=fillOpacity,
            sdfGlyphSize=sdfGlyphSize,
            debugSDF=debugSDF,
            glyphGeometryDetail=glyphGeometryDetail,
            **kwargs
        )

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

    def __init__(self, *text, font=None, smooth=None, lineHeight=0, letterSpacing=1, **kwargs):
        super().__init__(*text, font=font, smooth=smooth, lineHeight=lineHeight, letterSpacing=letterSpacing, **kwargs)


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
        grid=True,
        toneMapping: str = None,
        toneMappingExposure: float = None,
        frameloop: Literal["always", "demand"] = None,
        enableOrbitControl: bool = None,
        camPosition: List[float] = None,
        camRotation: List[float] = None,
        **kwargs,
    ):
        super().__init__(*children, up=up, **kwargs)
        self.rawChildren = rawChildren or []
        self.htmlChildren = htmlChildren or []
        # note: empty list switch to default.
        self.bgChildren = bgChildren or [
            # use `grid=True` to select the grid component
            Grid(key="default-grid", _key="default-grid") if grid else None,
            AmbientLight(key="ambient", intensity=0.25),
            PointLight(key="spot", intensity=1, position=[0, 1, 1]),
            Hands(fps=30, eventType=["squeeze"], stream=True),
            MotionControllers(fps=30, eventType=["trigger", "squeeze"], stream=True),
        ]

        self.up = up
        if background:
            self.background = background

        if toneMapping is not None:
            self.toneMapping = toneMapping
        if toneMappingExposure is not None:
            self.toneMappingExposure = toneMappingExposure

        if frameloop is not None:
            self.frameloop = frameloop

        if enableOrbitControl is not None:
            self.enableOrbitControl = enableOrbitControl
        if camPosition is not None:
            self.camPosition = camPosition
        if camRotation is not None:
            self.camRotation = camRotation

    def serialize(self):
        obj = super().serialize()
        if self.rawChildren:
            obj["rawChildren"] = [e.serialize() for e in self.rawChildren if e]
        if self.htmlChildren:
            obj["htmlChildren"] = [e.serialize() for e in self.htmlChildren if e]
        if self.bgChildren:
            obj["bgChildren"] = [e.serialize() for e in self.bgChildren if e]
        return obj


class DefaultScene(Scene):
    """Default Scene that includes a basic setup of ambient lights.


    :param children: list of children elements to be rendered in the scene.
    :type children: SceneElement, ...
    :param rawChildren: list of children elements to be rendered in the scene.
    :param htmlChildren: list of children elements to be rendered in the scene.
    :param bgChildren: list of children elements to be rendered in the scene.
    :param show_helper: list of children elements to be rendered in the scene.
    :param startStep: list of children elements to be rendered in the scene.
    :param endStep: list of children elements to be rendered in the scene.
    :param up: list of children elements to be rendered in the scene.
    :param kwargs: list of children elements to be rendered in the scene.

    Example Usage::

        DefaultScene(
            # Ambient Light does not have helper because it is ambient.
            AmbientLight(intensity=1.0, key="default_ambient_light"),
            DirectionalLight(
                intensity=1, key="default_directional_light", helper=show_helper
            ),
            *children,
            rawChildren=rawChildren,
            htmlChildren=htmlChildren,
            bgChildren=[
                GrabRender(),
                *[
                    # we use a key here so that we can replace the timeline controls via update
                    TimelineControls(start=startStep, end=endStep, key="timeline")
                    if endStep
                    else None,
                ],
                PointerControls(),
                Grid(),
                *bgChildren,
            ],
            up=up,
            **kwargs,
        )
    """

    def __init__(
        self,
        *children: SceneElement,
        rawChildren: List[SceneElement] = None,
        htmlChildren: List[Element] = None,
        bgChildren: List[SceneElement] = [],
        show_helper=True,
        startStep=0,
        endStep=None,
        # default to z-up
        up=[0, 1, 0],
        grid=True,
        **kwargs,
    ):
        rawChildren = [
            AmbientLight(intensity=0.5, key="default_ambient_light"),
            DirectionalLight(intensity=1, key="default_directional_light", helper=show_helper),
            *(rawChildren or []),
        ]

        super().__init__(
            # Ambient Light does not have helper because it is ambient.
            *children,
            rawChildren=rawChildren,
            htmlChildren=htmlChildren,
            bgChildren=[
                # skey spec here is a little redundant.
                GrabRender(key="DEFAULT"),
                PerspectiveCamera(position=[2, 2, 2], lookAt=[0, 0, 0], fov=75, makeDefault=True, key="default_camera"),
                OrbitControls(makeDefault=True, key="default_orbit_controls"),
                *[
                    # we use a key here so that we can replace the timeline controls via update
                    TimelineControls(start=startStep, end=endStep, key="timeline") if endStep else None,
                ],
                PointerControls(),
                Grid() if grid else None,
                *bgChildren,
            ],
            up=up,
            **kwargs,
        )
