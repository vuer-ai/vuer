from vuer.schemas import SceneElement


class Controls(SceneElement):
    tag = "Controls"

    def __init__(self, folder=None, **kwargs):
        super().__init__(**kwargs)
        if folder:
            self.folder = folder

# class RenderControls(Controls):
#     tag = "RenderControls"
