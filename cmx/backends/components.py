from types import SimpleNamespace
from functional_notations import F

from waterbear import Bear

from cmx import utils
import pandas as pd
from io import StringIO

from cmx.utils import is_subclass


def attrs(class_name=None, **kwargs):
    attrs_str = f'class="{class_name}"' if class_name else ""
    attrs_str += " ".join([k.replace('_', "-") + f'="{str(v)}"' for k, v in kwargs.items()])

    return attrs_str


def styles(**kwargs):
    return " ".join([k.replace('_', "-") + f':{str(v)};' for k, v in kwargs.items()])


class FuncCall(SimpleNamespace):
    name = None
    args = tuple()
    kwargs = {}


class Component(object):
    tag = None
    data = None
    class_name = None
    window = Bear()

    def __init__(self, tag=None, children=None, window=None, **kwargs):
        self.tag = tag or self.tag
        self.kwargs = kwargs
        self.style = {}
        self.children = children or []
        if window:
            _window = self.window.copy()
            _window.update(window)
            self.window = _window

    def _callback(self, item, *args, window=None, **kwargs):
        # change to self.comp_list attribute to make explicit.
        if window:
            _window = self.window.copy()
            _window.update(window)
            window = _window
        else:
            window = self.window
        Comp = window[item.lower()]
        component = Comp(*args, window=window, **kwargs)
        self.children.append(component)
        return component

    def __getattribute__(self, item):
        try:
            return object.__getattribute__(self, item)
        except AttributeError as e:
            def proxy_fn(*args, **kwargs):
                """this leaks memory :)"""
                return self._callback(item, *args, **kwargs)

            return proxy_fn
            # return F @ proxy_fn

    @property
    def _attrs(self):
        return attrs(class_name=self.class_name, **self.kwargs)

    @property
    def _md(self):
        return self._html + "\n"

    @property
    def _html(self):
        # todo: add styles to this.
        return f"<{self.tag} {self._attrs}>{''.join([b._html for b in self.children])}</{self.tag}>"

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass


class Container(Component):
    """does not support _md and _html"""

    @property
    def _md(self):
        raise RuntimeError(f'Container{self.__name__} does not support markdown generation directly')

    @property
    def _html(self):
        raise RuntimeError(f'Container{self.__name__} does not support html generation directly')


class Div(Component):
    tag = "div"


class Span(Component):
    tag = "span"

    def __init__(self, *args, sep=" ", dedent=None, **kwargs):
        super().__init__(**kwargs)
        self.text = sep.join([str(a) for a in args])
        if dedent:
            self.text = utils.dedent(self.text)

    @property
    def _md(self):
        return self.text

    @property
    def _html(self):
        return f"<{self.tag}>{self.text}</{self.tag}>"


Text = Span


class Bold(Span):
    tag = "b"

    @property
    def _md(self):
        return f"**{super()._md}**"


class Pre(Component):
    tag = "pre"

    def __init__(self, text, lang=None, **kwargs):
        super().__init__(**kwargs)
        self.text = text
        self.lang = lang

    @property
    def _md(self):
        return f"```{self.lang if self.lang else ''}\n" \
               f"{self.text}\n" \
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
            segs = [
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

    def __init__(self, src=None, zoom=None, alt=None, **kwargs):
        super().__init__(**kwargs)
        self.src = src
        self.alt = alt
        if zoom is not None:
            self.style = {"zoom": zoom}

    @property
    def _md(self):
        if self.zoom is None:
            return f"![{self.src}]({self.alt or self.src})"
        else:
            return self._html

    @property
    def _html(self):
        # prevent stretched when inside flex-box.
        return f'<img style="{styles(align_self="center", **self.style)}" src="{self.src}" {self._attrs}/>'


class Image(Img):
    """Avanced Image with Data handling"""
    data = None

    def __init__(self, image=None, src=None, **kwargs):
        if image is None:
            super().__init__(src=src, **kwargs)
        else:
            import numpy as np
            self.data = np.array(image).astype(np.uint8)
            super().__init__(src=self.base64, **kwargs)

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


class Video(Component):
    def __init__(self, src=None, width=320, height=240, controls=True, **kwargs):
        super().__init__(**kwargs)
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


class Figure(Component):
    tag = "div"

    def __init__(self, image=None, src=None, caption=None, bottom=False, **kwargs):
        super().__init__(**kwargs)
        self.src = src
        self.caption = caption
        self.bottom = bottom
        if isinstance(image, Component):
            self.img = image
        else:
            self.img = Img(image=image, src=src, styles=dict(margin="0.5em"), **kwargs)
        self.caption = Div(children=[caption])

        if self.bottom:
            self.children = [self.img, self.caption]
        self.children = [self.caption, self.img]

    @property
    def _html(self):
        return "<div>\n" + "\n".join([c._html for c in self.children]) + "\n</div>\n"


class Row(Component):
    styles = dict(display="flex",
                  flex_direction="row",
                  item_align="center", )

    def __init__(self, wrap=False, styles={}, **kwargs):
        super().__init__(**kwargs)
        if wrap is not None:
            wrap = "wrap" if wrap else "nowrap"

        self.styles = dict(flex_wrap=wrap, **Row.styles)
        self.styles.update(styles)

    @property
    def _html(self):
        # use children's HTML instead of markdown.
        return f'<div style="{styles(**self.styles)}">{"".join([c._html for c in self.children])}</div>'


# todo: use table component for images
# fixme: Not Implemented
# class TableCell(Component):
#     pass
# class TableRow(Component):
#     pass
# class TableColumn(Component):
#     pass

class FigureRow(Container):
    def __init__(self, header=None, n_cols=None, **kwargs):
        super().__init__(**kwargs)
        # self.header = header
        # todo: add fixed n_cols support
        self.n_cols = n_cols
        self.titles = []
        self.images = []
        self.captions = []

    def figure(self, image=None, src=None, title=None, caption=None, **kwargs):
        # todo: if image is Image/Video/Component
        self.titles.append(Bold(title))
        self.captions.append(Span(caption))
        self.image(image=image, src=src, **kwargs)

    # def image(self):
    #     raise RuntimeError('please use figure instead of image.')

    @property
    def rows(self):
        non_empty_rows = []
        for r in [self.titles, self.children, self.captions]:
            for item in r:
                if item is not None:
                    non_empty_rows.append(r)
                    break
        return non_empty_rows


# todo: HashTable: use (row, col, row_span, col_span) to record cells.
class Table(Component):
    data = None

    def __init__(self, csv_str=None, show_index=None, format="github", sep=",*", **kwargs):
        super().__init__(**kwargs)
        self.show_index = show_index
        self.kwargs = kwargs
        self.format = format
        if csv_str:
            self.data = pd.read_csv(StringIO(csv_str), sep=sep)

    def figure_row(self, **kwargs):
        row = FigureRow(window=self.window, **kwargs)
        self.children.append(row)
        return row

    # def row(self):
    #     row = TableRow
    #     self.children.append(row)
    #
    # def column(self):
    #     column = TableColumn
    #     self.children.append(column)
    #
    # def cell(self):
    #     cell = TableCell
    #     self.children.append(cell)

    @property
    def _md(self):
        # todo: pad columns (done automatically?)
        # we organize by rows. Columns has to be contained in a row.
        if not self.children:
            return self.data.to_markdown(showindex=self.show_index,
                                         tablefmt=self.format, **self.kwargs) + "\n"
        rows = []
        for child in self.children:
            if isinstance(child, FigureRow):
                rows.extend(child.rows)
            else:
                rows.append(child.children)
        _md_str = ""
        for i, r in enumerate(rows):
            _md_str += " | ".join([c._md for c in r]) + "\n"
            if i == 0:
                _md_str += " | ".join(['-' * len(c._md) for c in r]) + "\n"
        return _md_str

    @property
    def _html(self):
        return self.data.to_html(index=self.show_index, **self.kwargs)


# todo: should be Body, b/c Html includes body and head
class Html(Component):
    tag = "body"
    window = Bear(**{k.lower(): v for k, v in globals().items() if is_subclass(v, Component)})


class Article(Html):
    tag = "article"
    class_name = "commonmark"
    window = Bear(**{k.lower(): v for k, v in globals().items() if is_subclass(v, Component)})

    @property
    def _md(self):
        for c in self.children:
            print(type(c), c)
        return "\n".join([c._md for c in self.children])
