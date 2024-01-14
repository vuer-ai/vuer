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
    """
    Renders an oriented MediaPipe face mesh:

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

    code::

        <Facemesh points={points} />
        export type FacemeshProps = {
          /** an array of 468+ keypoints as returned by google/mediapipe tasks-vision, default: a sample face */
          points?: MediaPipePoints
          /** @deprecated an face object as returned by tensorflow/tfjs-models face-landmarks-detection */
          face?: MediaPipeFaceMesh
          /** constant width of the mesh, default: undefined */
          width?: number
          /** or constant height of the mesh, default: undefined */
          height?: number
          /** or constant depth of the mesh, default: 1 */
          depth?: number
          /** a landmarks tri supposed to be vertical, default: [159, 386, 200] (see: https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection#mediapipe-facemesh-keypoints) */
          verticalTri?: [number, number, number]
          /** a landmark index (to get the position from) or a vec3 to be the origin of the mesh. default: undefined (ie. the bbox center) */
          origin?: number | THREE.Vector3
          /** A facial transformation matrix, as returned by FaceLandmarkerResult.facialTransformationMatrixes (see: https://developers.google.com/mediapipe/solutions/vision/face_landmarker/web_js#handle_and_display_results) */
          facialTransformationMatrix?: (typeof FacemeshDatas.SAMPLE_FACELANDMARKER_RESULT.facialTransformationMatrixes)[0]
          /** Apply position offset extracted from `facialTransformationMatrix` */
          offset?: boolean
          /** Offset sensitivity factor, less is more sensible */
          offsetScalar?: number
          /** Fface blendshapes, as returned by FaceLandmarkerResult.faceBlendshapes (see: https://developers.google.com/mediapipe/solutions/vision/face_landmarker/web_js#handle_and_display_results) */
          faceBlendshapes?: (typeof FacemeshDatas.SAMPLE_FACELANDMARKER_RESULT.faceBlendshapes)[0]
          /** whether to enable eyes (nb. `faceBlendshapes` is required for), default: true */
          eyes?: boolean
          /** Force `origin` to be the middle of the 2 eyes (nb. `eyes` is required for), default: false */
          eyesAsOrigin?: boolean
          /** debug mode, default: false */
          debug?: boolean
        }
    """
    tag = "Facemesh"
