from .html_components import Element


class LineBasicMaterial(Element):
    tag = "lineBasicMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class LineDashedMaterial(Element):
    tag = "lineDashedMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class Material(Element):
    tag = "material"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class MeshBasicMaterial(Element):
    tag = "meshBasicMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class MeshDepthMaterial(Element):
    tag = "meshDepthMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class MeshDistanceMaterial(Element):
    tag = "meshDistanceMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class MeshLambertMaterial(Element):
    tag = "meshLambertMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class MeshMatcapMaterial(Element):
    tag = "meshMatcapMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class MeshNormalMaterial(Element):
    tag = "meshNormalMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class MeshPhongMaterial(Element):
    tag = "meshPhongMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class MeshPhysicalMaterial(Element):
    tag = "meshPhysicalMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class MeshStandardMaterial(Element):
    tag = "meshStandardMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class MeshToonMaterial(Element):
    tag = "meshToonMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class PointsMaterial(Element):
    tag = "pointsMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class RawShaderMaterial(Element):
    tag = "rawShaderMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class ShaderMaterial(Element):
    tag = "shaderMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class ShadowMaterial(Element):
    tag = "shadowMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class SpriteMaterial(Element):
    tag = "spriteMaterial"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
