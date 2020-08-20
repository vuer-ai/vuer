from cmx import utils
import pandas as pd
from io import StringIO


def attrs(**kwargs):
    return " ".join([k.replace('_', "-") + f'="{str(v)}"' for k, v in kwargs.items()])


def styles(**kwargs):
    return " ".join([k.replace('_', "-") + f':{str(v)};' for k, v in kwargs.items()])


class Component:
    style = {}
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
        # todo: add styles to this.
        return f"<{tag}>{''.join([b._html for b in self.children])}</{tag}>"


class Span(Component):
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
        return f"<{tag}>{self.text}</{tag}>"


class Text(Span):
    tag = None

    @property
    def _html(self):
        return self.text


class Pre(Component):
    tag = "pre"

    def __init__(self, text, lang=None):
        self.text = text
        self.lang = lang

    @property
    def _md(self):
        return f"```{self.lang if self.lang else ''}\n" \
               f"{self.text}" \
               "```\n"

    @property
    def _html(self):
        # todo: support language strings
        if self.lang:
            segs = [
                '<pre>',
                f'<code class="{self.lang}">',
                f'{self.text}',
                f'</code>',
                '</pre>'
            ]
        else:
            seg = [
                '<pre>',
                f'{self.text}',
                '</pre>'
            ]
        return "\n".join(segs) + "\n"


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

    def __init__(self, src=None, caption=None, bottom=False, zoom=None, **kwargs):
        super().__init__(**kwargs)
        self.src = src
        self.caption = caption
        self.bottom = bottom
        if zoom is not None:
            self.style = {"zoom": zoom}

    @property
    def _html(self):
        if self.caption is not None:
            if self.bottom:
                return f'<div>' \
                       f'<img style="{styles(margin="0.5em", **self.style)}" src="{self.src}" {self._attrs}/>' \
                       f'<div style="text-align: center">{self.caption}</div>' \
                       f'</div>'

            return f'<div>' \
                   f'<div style="text-align: center">{self.caption}</div>' \
                   f'<img style="{styles(margin="0.5em", **self.style)}" src="{self.src}" {self._attrs}/>' \
                   f'</div>'

        # prevent stretched when inside flex-box.
        return f'<img style="{styles(align_self="center", **self.style)}" src="{self.src}" {self._attrs}/>'


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
    def __init__(self, caption=None, src=None, width=320, height=240, controls=True):
        self.caption = caption
        self.src = src
        self.width = width
        self.height = height
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

    def __init__(self, wrap, styles={}, **kwargs):
        if wrap is not None:
            wrap = "wrap" if wrap else "nowrap"

        self.styles = dict(flex_wrap=wrap, **Row.styles)
        self.styles.update(styles)

        super().__init__(**kwargs)

    @property
    def _html(self):
        # use children's HTML instead of markdown.
        return f'<div style="{styles(**self.styles)}">{"".join([c._html for c in self.children])}</div>'


# todo: use table component for images
# fixme: Not Implemented
class TableRow(Component):
    pass


class Grid(Component):
    def __init__(self, *children):
        self.children = children

    @property
    def _html(self):
        return f"<div>{self.text}</div>"


class Table(Component):
    def __init__(self, csv_str=None, show_index=None, format="github", sep=",*", **kwargs):
        self.show_index = show_index
        self.kwargs = kwargs
        self.format = format
        self.data = pd.read_csv(StringIO(csv_str), sep=sep)

    @property
    def _md(self):
        return self.data.to_markdown(showindex=self.show_index,
                                     tablefmt=self.format, **self.kwargs) + "\n"

    @property
    def _html(self):
        return self.data.to_html(index=self.show_index, **self.kwargs)
