from contextlib import contextmanager
from collections import defaultdict

from cmx.utils import get_block
from copy import copy

from ..utils import dedent
from .components import Text, Link, Image, Video, Row, Grid

from ml_logger import logger


class CommonMark:
    __filename = None
    counter = 0

    @property
    def file(self):
        if self.__filename is None:
            import inspect
            prior_frame = inspect.currentframe().f_back.f_back
            filename, line_number, function_name, lines, index = inspect.getframeinfo(prior_frame)

            self.__filename = filename.replace(".py", ".md")

        return self.__filename

    def __init__(self, filename=None, overwrite=True):
        self.__filename = filename
        if overwrite:
            logger.log_text("", filename=self.file, overwrite=True)

    def config(self, filename=None, overwrite=True):
        self.__init__(filename=filename, overwrite=overwrite)
        return self

    def new(self, filename, **kwargs):
        import os
        filename = os.path.abspath(filename)
        return copy(self).config(filename=filename, **kwargs)

    buffers = defaultdict(list)
    current_buffer = "default"

    @property
    def buffer(self):
        return self.buffers[self.current_buffer]  # .copy()

    def dump(self, text, overwrite=None):
        logger.log_text(text, filename=self.file, overwrite=overwrite)

    def __call__(self, *snippets, dedent=True, **kwargs):
        """output text"""
        t = Text(*snippets, dedent=dedent, **kwargs)
        self.buffer.append(t)

    def text(self, *args, sep=" ", end="\n"):
        t = Text(*args, sep=sep, end=end)
        self.buffer.append(t)

    def link(self, url=None):
        l = Link(url=url)
        self.buffer.append(l)

    print = text

    def video(self, url=None):
        v = Video()
        self.buffer.append(v)

    def image(self, image=None, src=None, **kwargs):
        """save image if both image and src (as in file string) are specified."""
        if image is not None and src is not None:
            logger.save_image(image, src)

        img = Image(image, src=src, **kwargs)
        self.buffer.append(img)

    def savefig(self, file, caption=None, width=None, height=None, **kwargs):
        logger.savefig(file, **kwargs)

        img = Image(src=file, width=width, height=height, caption=caption)
        self.buffer.append(img)

    @contextmanager
    def pipe(self, buffer_name):
        self.current_buffer = buffer_name
        yield self

    @contextmanager
    def row(self, wrap=True):
        self.current_buffer = "row"
        yield self
        from copy import copy
        r = Row(wrap=wrap, children=copy(self.buffer))
        self.buffer.clear()
        self.current_buffer = "default"
        self.buffer.append(r)

    @property
    def _md(self):
        return "".join([b._md for b in self.buffer])

    def __enter__(self):
        import inspect
        assert self.file, "make sure that file is already set."

        prior_frame = inspect.currentframe().f_back
        filename, line_number, function_name, lines, index = inspect.getframeinfo(prior_frame)
        try:
            lines_in_block = get_block(filename, line_number + 1)
            text = "".join(lines_in_block)
            self.buffer.append(Text('``` python',
                                    dedent(text).rstrip(),
                                    "```", sep="\n"))
        except FileNotFoundError:
            print('in iPython session')
        return self

    def __exit__(self, *args):
        self.dump(self._md)
        self.buffer.clear()

    flush = __exit__

    def clear(self):
        self.dump("", overwrite=True)

    # @decorator
    def wraps_functions(self, fn):
        """wraps a potable function to declare in global."""
        # inspect.getsource(f)
        pass
