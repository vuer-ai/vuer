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
