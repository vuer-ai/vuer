from contextlib import contextmanager
from collections import defaultdict
from copy import copy, deepcopy
from functional_notations import _F, prefixmethod

from cmx.utils import get_block

from ..utils import dedent
from .components import Text, Pre, Link, Image, Video, Row, Grid, Table

from ml_logger import ML_Logger


class CommonMark:
    __filename = None
    counter = 0
    current_buffer = "default"

    def __init__(self, filename=None, overwrite=True, logger=None):
        """
        Called by the module __init__.py to create a global document object.

        :param filename: the filename for the output markdown file.
        :param overwrite: Whether to append to the existing document, or to clear and
            start afresh
        :param logger: allow passing in an existing logger to log to a remote server instead.
            this is similar to a figure object as in matplotlib.
        """
        self.buffers = defaultdict(list)

        self.logger = logger or ML_Logger()
        if ML_Logger.root_dir:
            print(f"cmx root directory: {ML_Logger.root_dir}", color="green")

        self.config(filename=filename, overwrite=overwrite)

    def config(self, filename=None, overwrite=True, logger=None):
        self.overwrite = overwrite
        self.logger = logger or self.logger
        if filename:
            self.__filename = filename

            if self.overwrite:
                self.logger.log_text("", filename=self.filename, overwrite=True)
        return self

    def new(self, filename=None, **kwargs):
        if filename:
            import os
            filename = os.path.abspath(filename)

        doc = deepcopy(self).config(filename=filename, **kwargs)
        return doc

    @property
    def filename(self):
        if self.__filename is None:
            import inspect
            filename = "cmx"
            frame = inspect.currentframe()
            while "cmx" in filename or "importlib" in filename or "contextlib" in filename:
                frame = frame.f_back
                filename, line_number, function_name, lines, index = inspect.getframeinfo(frame)

            if filename.endswith('__init__.py'):
                self.__filename = filename[:-11] + "README.md"
            else:
                self.__filename = filename.replace(".py", ".md")

            # on first write:
            if self.overwrite:
                self.logger.log_text("", filename=self.filename, overwrite=True)
                from termcolor import cprint
                cprint("File output at file://" + self.__filename, "green")

        return self.__filename

    @property
    def buffer(self):
        return self.buffers[self.current_buffer]  # .copy()

    def dump(self, text, overwrite=None):
        self.logger.log_text(text, filename=self.filename, overwrite=overwrite)

    def __call__(self, *snippets, dedent=True, **kwargs):
        """output text"""
        t = Text(*snippets, dedent=dedent, **kwargs)
        self.buffer.append(t)
        return self

    def __matmul__(self, string):
        return self(string)

    md = __call__

    def text(self, *args, sep=" ", end="\n"):
        t = Text(*args, sep=sep, end=end)
        self.buffer.append(t)

    def link(self, url=None):
        l = Link(url=url)
        self.buffer.append(l)

    @property
    def pre(self, ):
        def _pre(*args, sep=" ", end="\n", lang=None):
            p = Pre(sep.join([str(a) for a in args]) + end, lang=lang)
            self.buffer.append(p)

        return _F(_pre, name="Pre")

    @property
    def yaml(self, data=None, **kwargs):
        def _yaml(data, **kwargs):
            import yaml
            return self.pre(yaml.dump(data).rstrip(), lang="yaml")

        return _F(_yaml, name="yaml")

    @property
    def csv(self, ):
        def _csv(csv, **kwargs):
            return self.buffer.append(Table(csv_str=csv, show_index=False, **kwargs))

        return _F(_csv, name="csv")

    def print(self, *args, sep=" ", end="\n"):
        text = sep.join([str(a) for a in args]) + end
        self.buffer.append(Pre(text))
        return self

    def video(self, data=None, filename=None, **kwargs):
        if data is not None:
            self.logger.save_video(data, filename)
        if filename.endswith("gif"):
            v = Image(src=filename, **kwargs)
        else:
            v = Video(src=filename, **kwargs)
        self.buffer.append(v)

    def image(self, image=None, src=None, **kwargs):
        """save image if both image and src (as in file string) are specified."""
        if src is not None:
            self.logger.save_image(image, src)
            img = Image(src=src, **kwargs)
        else:
            img = Image(image, **kwargs)
        self.buffer.append(img)

    def savefig(self, file, caption=None, width=None, height=None, zoom=None, **kwargs):
        self.logger.savefig(file, **kwargs)
        img = Image(src=file, width=width, height=height, caption=caption, zoom=zoom)
        self.buffer.append(img)

    @contextmanager
    def pipe(self, buffer_name):
        self.current_buffer = buffer_name
        yield self

    @contextmanager
    def row(self, wrap=True, **kwargs):
        self.flush()
        new_doc = self.new()
        yield new_doc
        r = Row(wrap=wrap, children=copy(new_doc.buffer), **kwargs)
        self.buffer.append(r)

    @property
    def _md(self):
        return "".join([b._md for b in self.buffer])

    def flush(self, *args):
        self.dump(self._md)
        self.buffer.clear()

    def __enter__(self):
        import inspect
        assert self.filename, "make sure that file is already set."

        prior_frame = inspect.currentframe().f_back
        filename, line_number, function_name, lines, index = inspect.getframeinfo(prior_frame)
        try:
            lines_in_block = get_block(filename, line_number + 1)
            text = "".join(lines_in_block)
            self.buffer.append(Text('\n```python',
                                    dedent(text).rstrip(),
                                    "```\n", sep="\n"))
        except FileNotFoundError:
            print('in iPython session')
        return self

    __exit__ = flush

    # def __del__(self):
    #     self.flush()

    def clear(self):
        self.dump("", overwrite=True)

    # @decorator
    def wraps_functions(self, fn):
        """wraps a potable function to declare in global."""
        # inspect.getsource(f)
        pass
