"""Animation clips and tracks."""


from .base import SceneElement


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
