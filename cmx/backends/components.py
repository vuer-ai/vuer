from cmx import utils


def attrs(**kwargs):
    return " ".join([k.replace('_', "-") + f'="{str(v)}"' for k, v in kwargs.items()])


def styles(**kwargs):
    return " ".join([k.replace('_', "-") + f':{str(v)};' for k, v in kwargs.items()])


class Component:
    children = []

    def __init__(self, tag="div", children=None, **kwargs):
        self.kwargs = kwargs
        if children:
            self.children = children

    @property
    def _attrs(self):
        return attrs(**self.kwargs)

    @property
    def _md(self):
        return self._html + "\n"

    @property
    def _html(self):
        return f"<{tag}>{''.join([b._html for b in self.children])}</{tag}>"


class Text(Component):
    tag = "span"

    def __init__(self, *args, sep=" ", end="\n", dedent=None, **kwargs):
        super().__init__(**kwargs)
        self.text = sep.join([str(a) for a in args]) + end
        if dedent:
            self.text = utils.dedent(self.text)

    @property
    def _md(self):
        return self.text

    @property
    def _html(self):
        return f"<span>{self.text}</span>"


class Link(Component):
    tag = "span"

    def __init__(self, url="", text="", **kwargs):
        super().__init__(**kwargs)
        self.text = text
        self.href = url

    @property
    def _md(self):
        return f'[{self.text}]({self.href})'

    @property
    def _html(self):
        return f'<a href="{self.href}">{self.text}</a>'


class Img(Component):
    tag = "img"

    def __init__(self, src=None, caption=None, above=False, **kwargs):
        super().__init__(**kwargs)
        self.src = src
        self.caption = caption
        self.above = above

    @property
    def _html(self):
        if self.caption is not None:
            if self.above:
                return f'<div>' \
                       f'<div style="text-align: center">{self.caption}</div>' \
                       f'<img style="margin: 0.5em" src="{self.src}" {self._attrs}/>' \
                       f'</div>'

            return f'<div>' \
                   f'<img style="margin: 0.5em" src="{self.src}" {self._attrs}/>' \
                   f'<div style="text-align: center">{self.caption}</div>' \
                   f'</div>'
        # prevent stretched when inside flex-box.
        return f'<img style="align-self:center" src="{self.src}" {self._attrs}/>'


class Image(Img):
    """Avanced Image with Data handling"""
    data = None

    def __init__(self, image=None, src=None, **kwargs):
        if image is not None:
            import numpy as np
            self.data = np.array(image).astype(np.uint8)
            super().__init__(src=self.base64, **kwargs)
        else:
            super().__init__(src=src, **kwargs)

    @property
    def base64(self):
        # if self.data is not None:
        assert self.data is not None
        from io import BytesIO
        from PIL import Image as pImage
        import base64

        with BytesIO() as buf:
            pImage.fromarray(self.data).save(buf, "png")
            return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode('utf-8')
        # elif self.filename is not None:
        #     with open(self.filename, "rb") as f:
        #         encoded = base64.b64encode(f.read()).decode('utf-8')
        #         return encoded


class Video(Component):
    def __init__(self, data, caption=None, src=None, width=320, height=240, controls=True):
        self.data = data
        self.src = src
        self.caption = caption
        self.controls = controls

    @property
    def _html(self):
        return utils.dedent(f"""
        <video width="{self.width}" height="{self.height}" controls="{str(self.controls).lower()}">
          <source src="{self.src}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        """)


class Row(Component):
    styles = dict(display="flex",
                  flex_direction="row",
                  item_align="center", )

    def __init__(self, wrap, **kwargs):
        if wrap is not None:
            self.wrap = "wrap" if wrap else "nowrap"

        self.styles = dict(wrap=self.wrap, **Row.styles)
        super().__init__(**kwargs)

    @property
    def _html(self):
        return f'<div style="{styles(**self.styles)}">{"".join([c._html for c in self.children])}</div>'


class Grid(Component):
    def __init__(self, *children):
        self.children = children

    @property
    def _html(self):
        return f"<div>{self.text}</div>"
