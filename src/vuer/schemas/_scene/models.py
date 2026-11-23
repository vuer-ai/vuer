"""3D model file loaders."""


from .base import SceneElement


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
