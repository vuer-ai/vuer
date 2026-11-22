"""Gaussian splats, PCD files and depth point clouds."""


from .base import SceneElement


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
