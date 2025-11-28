from vuer.schemas.scene_components import SceneElement


class Html(SceneElement):
    tag = "Html"


class Splat(SceneElement):
    tag = "Splat"


class Line(SceneElement):
    """
    Renders a THREE.Line2 or THREE.LineSegments2 (depending on the value of segments).

    Usage::

        <Line
          points={[[0, 0, 0], ...]}       // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
          color="black"                   // Default
          lineWidth={1}                   // In pixels (default)
          segments                        // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
          dashed={false}                  // Default
          vertexColors={[[0, 0, 0], ...]} // Optional array of RGB values for each point
          {...lineProps}                  // All THREE.Line2 props are valid
          {...materialProps}              // All THREE.LineMaterial props are valid
        />
    """

    tag = "Line"


class QuadraticBezierLine(SceneElement):
    """

    Renders a THREE.Line2 using THREE.QuadraticBezierCurve3 for interpolation.

    Usage::

        <QuadraticBezierLine
          start={[0, 0, 0]}               // Starting point, can be an array or a vec3
          end={[10, 0, 10]}               // Ending point, can be an array or a vec3
          mid={[5, 0, 5]}                 // Optional control point, can be an array or a vec3
          color="black"                   // Default
          lineWidth={1}                   // In pixels (default)
          dashed={false}                  // Default
          vertexColors={[[0, 0, 0], ...]} // Optional array of RGB values for each point
          {...lineProps}                  // All THREE.Line2 props are valid
          {...materialProps}              // All THREE.LineMaterial props are valid
        />

    You can also update the line runtime.

    code::

        const ref = useRef()
        useFrame((state) => {
          ref.current.setPoints(
            [0, 0, 0],
            [10, 0, 0],
            // [5, 0, 0] // Optional: mid-point
          )
        }, [])
        return <QuadraticBezierLine ref={ref} />
        }
    """

    tag = "QuadraticBezierLine"


class CubicBezierLine(SceneElement):
    """
    Renders a THREE.Line2 using THREE.CubicBezierCurve3 for interpolation.

    Usage::

        <CubicBezierLine
          start={[0, 0, 0]}               // Starting point
          end={[10, 0, 10]}               // Ending point
          midA={[5, 0, 0]}                // First control point
          midB={[0, 0, 5]}                // Second control point
          color="black"                   // Default
          lineWidth={1}                   // In pixels (default)
          dashed={false}                  // Default
          vertexColors={[[0, 0, 0], ...]} // Optional array of RGB values for each point
          {...lineProps}                  // All THREE.Line2 props are valid
          {...materialProps}              // All THREE.LineMaterial props are valid
        />
    """

    tag = "CubicBezierLine"


class CatmullRomLine(SceneElement):
    """
    Renders a THREE.Line2 using THREE.CatmullRomCurve3 for interpolation.

    Usage::

        <CatmullRomLine
          points={[[0, 0, 0], ...]}       // Array of Points
          closed={false}                  // Default
          curveType="centripetal"         // One of "centripetal" (default), "chordal", or "catmullrom"
          tension={0.5}                   // Default (only applies to "catmullrom" curveType)
          color="black"                   // Default
          lineWidth={1}                   // In pixels (default)
          dashed={false}                  // Default
          vertexColors={[[0, 0, 0], ...]} // Optional array of RGB values for each point
          {...lineProps}                  // All THREE.Line2 props are valid
          {...materialProps}              // All THREE.LineMaterial props are valid
        />
    """

    tag = "CatmullRomLine"


class Facemesh(SceneElement):
    """Renders an oriented MediaPipe face mesh:

    :param points: An array of 468+ keypoints as returned by google/mediapipe tasks-vision. Defaults to a sample face.
    :type  points: MediaPipePoints, optional
    :param face: An face object as returned by tensorflow/tfjs-models face-landmarks-detection. This parameter is deprecated.
    :type  face: MediaPipeFaceMesh, optional
    :param width: Constant width of the mesh. Defaults to undefined.
    :type  width: int, optional
    :param height: Constant height of the mesh. Defaults to undefined.
    :type  height: int, optional
    :param depth: Constant depth of the mesh. Defaults to 1.
    :type  depth: int, optional
    :param verticalTri: A landmarks tri supposed to be vertical. Defaults to [159, 386, 200]. See: https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection#mediapipe-facemesh-keypoints
    :type  verticalTri: Tuple[int, int, int], optional
    :param origin: A landmark index (to get the position from) or a vec3 to be the origin of the mesh. Defaults to undefined (i.e., the bbox center).
    :type  origin: Union[int, THREE.Vector3], optional
    :param facialTransformationMatrix: A facial transformation matrix, as returned by FaceLandmarkerResult.facialTransformationMatrixes. See: https://developers.google.com/mediapipe/solutions/vision/face_landmarker/web_js#handle_and_display_results
    :type  facialTransformationMatrix: FacemeshDatas.SAMPLE_FACELANDMARKER_RESULT.facialTransformationMatrixes[0], optional
    :param offset: Apply position offset extracted from `facialTransformationMatrix`.
    :type  offset: bool, optional
    :param offsetScalar: Offset sensitivity factor, less is more sensible.
    :type  offsetScalar: float, optional
    :param faceBlendshapes: Face blendshapes, as returned by FaceLandmarkerResult.faceBlendshapes. See: https://developers.google.com/mediapipe/solutions/vision/face_landmarker/web_js#handle_and_display_results
    :type  faceBlendshapes: FacemeshDatas.SAMPLE_FACELANDMARKER_RESULT.faceBlendshapes[0], optional
    :param eyes: Whether to enable eyes (note: `faceBlendshapes` is required for this). Defaults to True.
    :type  eyes: bool, optional

    Usage::

        const faceLandmarkerResult = {
            "faceLandmarks": [
              [
                { "x": 0.5760777592658997, "y": 0.8639070391654968, "z": -0.030997956171631813 },
                { "x": 0.572094738483429, "y": 0.7886289358139038, "z": -0.07189624011516571 },
                // ...
              ],
              // ...
            ],
            "faceBlendshapes": [
              // ...
            ],
            "facialTransformationMatrixes": [
              // ...
            ]
          },
        }

        const points = faceLandmarkerResult.faceLandmarks[0]

        <Facemesh points={points} />

    """

    tag = "Facemesh"


class OrbitControls(SceneElement):
    """Camera controls for orbiting, panning, and zooming around a target.

    OrbitControls provides intuitive camera control through mouse/touch interactions.
    Included in the default scene in bgChildren to enable interactive camera controls.

    :param enableDamping: Enable smooth damping (inertia). Default: False
    :type enableDamping: bool, optional
    :param enablePan: Enable panning. Default: True
    :type enablePan: bool, optional
    :param screenSpacePanning: Pan in screen space rather than camera space. Default: True
    :type screenSpacePanning: bool, optional
    :param enableRotate: Enable rotation/orbiting. Default: True
    :type enableRotate: bool, optional
    :param enableZoom: Enable zooming. Default: True
    :type enableZoom: bool, optional
    :param makeDefault: Make this the default controls. Default: True
    :type makeDefault: bool, optional
    :param maxPolarAngle: Maximum polar angle in degrees (0-180). Default: 135
    :type maxPolarAngle: float, optional
    :param minPolarAngle: Minimum polar angle in degrees (0-180). Default: 0
    :type minPolarAngle: float, optional
    :param maxDistance: Maximum zoom distance. Default: 1000
    :type maxDistance: float, optional
    :param minDistance: Minimum zoom distance. Default: 0
    :type minDistance: float, optional
    :param zoomSpeed: Zoom speed multiplier. Default: 1.0
    :type zoomSpeed: float, optional
    :param rotateSpeed: Rotation speed multiplier. Default: 1.0
    :type rotateSpeed: float, optional
    :param panSpeed: Pan speed multiplier. Default: 1.0
    :type panSpeed: float, optional

    Usage::

        session.set @ Scene(
            Box(args=[0.2, 0.2, 0.2], key="box"),
            bgChildren=[
                OrbitControls(makeDefault=True, enableDamping=True, key="controls"),
            ],
        )
    """

    tag = "OrbitControls"
    key = "orbit-controls"


class PerspectiveCamera(SceneElement):
    """Perspective camera with field of view projection.

    PerspectiveCamera defines the viewpoint and projection for rendering the 3D scene.
    Included in bgChildren to control the camera view.

    This is optional.

    :param position: Camera position as [x, y, z]. Default: [0, 0, 0]
    :type position: list[float], optional
    :param rotation: Camera rotation in Euler angles. Default: [0, 0, 0]
    :type rotation: list[float], optional
    :param lookAt: Point the camera looks at [x, y, z]. Default: [0, 0, 0]
    :type lookAt: list[float], optional
    :param near: Near clipping plane distance. Default: 0.1
    :type near: float, optional
    :param far: Far clipping plane distance. Default: 1000
    :type far: float, optional
    :param makeDefault: Make this the default camera. Default: False
    :type makeDefault: bool, optional
    :param active: Whether this camera is active. Default: None
    :type active: bool, optional
    :param fov: Vertical field of view in degrees (1-179). Default: 75
    :type fov: float, optional
    :param zoom: Zoom factor. Default: 1.0
    :type zoom: float, optional

    Usage::

        session.set @ Scene(
            Box(args=[0.2, 0.2, 0.2], key="box"),
            bgChildren=[
                PerspectiveCamera(
                    position=[2, 2, 2],
                    lookAt=[0, 0, 0],
                    fov=75,
                    makeDefault=True,
                    key="camera",
                ),
            ],
        )
    """

    tag = "PerspectiveCamera"
    key = "perspective-camera"
