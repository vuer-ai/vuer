from contextlib import contextmanager
from collections import defaultdict
from copy import copy, deepcopy
from functional_notations import _F, prefixmethod
from waterbear import Bear
import os

from cmx.utils import get_block, is_subclass, to_snake

from ..utils import dedent
from . import components

from ml_logger import ML_Logger, cprint

from ..with_hack import SkipContextManager


class Print(components.Pre):
    def __init__(self, *args, sep=" ", end="\n"):
        super().__init__(sep.join([str(a) for a in args]) + end)


def video(frames=None, *, src, window, **kwargs):
    """save video at filename.

    :param data:
    :param filename:
    :param kwargs:
    :return:
    """
    file_path, *query_strs = src.split('?')
    if frames is not None:
        window.logger.save_video(frames, file_path)
    if file_path.endswith("gif"):
        return components.Image(src=src, **kwargs)
    else:
        return components.Video(src=src, **kwargs)


class Figure(components.Figure):
    def __init__(self, image=None, src=None, title=None, caption=None, *, window, **kwargs):
        if not isinstance(image, components.Component):
            image = window.image(image, src, window=window, **kwargs)
        super().__init__(image=image, src=src, title=title, caption=caption, window=window)


class Image(components.Image):
    def __init__(self, image=None, src=None, *, window, **kwargs):
        if src is not None:
            file_path, *query_strs = src.split('?')
            if image is not None:
                window.logger.save_image(image, file_path)
            super().__init__(src=src, **kwargs)
        else:
            super().__init__(image, **kwargs)


class Savefig(components.Figure):
    def __init__(self, key, caption=None, width=None, height=None, zoom=None, **kwargs):
        file_path, *_ = key.split('?')
        super().__init__(src=key, width=width, height=height, caption=caption, zoom=zoom, **kwargs)
        self.window.logger.savefig(file_path, **kwargs)


class CommonMark(components.Article):
    __filename = None
    counter = 0

    @property
    def skip(self):
        return SkipContextManager(True)

    def __init__(self, filename=None, overwrite=True, logger=None):
        """
        Called by the module __init__.py to create a global document object.

        :param filename: the filename for the output markdown file.
        :param overwrite: Whether to append to the existing document, or to clear and
            start afresh
        :param logger: allow passing in an existing logger to log to a remote server instead.
            this is similar to a figure object as in matplotlib.
        """
        super().__init__(window={to_snake(k): v for k, v in globals().items() if is_subclass(v, components.Component)})
        self.window['video'] = video
        self.window.logger = logger = logger or ML_Logger()

        # if logger.root_dir:
        #     cprint(f"cmx root directory: {logger.root_dir}", color="green")

        self.config(filename=filename, overwrite=overwrite)

    def config(self, filename=None, overwrite=True, src_prefix=None, logger=None):
        self.overwrite = overwrite
        self.window.logger = logger = logger or self.window.logger
        # todo: for gist, the prefix needs to go into the `src` attribute.
        # self.window.src_prefix = src_prefix
        if filename:
            self.__filename = filename

            if self.overwrite:
                self.window.logger.log_text("", filename=self.filename, overwrite=True)

            from termcolor import cprint
            from urllib import parse
            cprint("File output at file://" + parse.quote(os.path.realpath(self.__filename)), "green")
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
            filename = "cmx/"
            frame = inspect.currentframe()
            while "cmx/" in filename or "importlib" in filename or "contextlib" in filename:
                frame = frame.f_back
                filename, line_number, function_name, lines, index = inspect.getframeinfo(frame)

            if filename.endswith('__init__.py'):
                self.__filename = filename[:-11] + "README.md"
            else:
                self.__filename = filename.replace(".py", ".md")

            # on first write:
            if self.overwrite:
                self.window.logger.log_text("", filename=self.filename, overwrite=True)

            from termcolor import cprint
            from urllib import parse
            cprint("File output at file://" + parse.quote(self.__filename), "green")

        return self.__filename

    def write(self, text, overwrite=None):
        self.window.logger.log_text(text, filename=self.filename, overwrite=overwrite)

    def clear(self):
        self.write("", overwrite=True)

    def __call__(self, *snippets, dedent=True, **kwargs):
        """output text"""
        t = components.Text(*snippets, dedent=dedent, **kwargs)
        self.children.append(t)
        return self

    def __matmul__(self, string_or_array):
        if isinstance(string_or_array, tuple):
            string, *rest = string_or_array
            return self(string, *rest)

        return self(string_or_array)

    md = __call__

    # def text(self, *args, sep=" ", end="\n"):
    #     t = components.Text(*args, sep=sep, end=end)
    #     self.children.append(t)
    #
    # def link(self, url=None):
    #     l = components.Link(url=url)
    #     self.children.append(l)

    # @property
    # def pre(self, ):
    #     def _pre(*args, sep=" ", lang=None):
    #         p = components.Pre(sep.join([str(a) for a in args]), lang=lang)
    #         self.children.append(p)
    #
    #     return _F(_pre, name="Pre")

    @property
    def yaml(self, data=None, **kwargs):
        def _yaml(data, **kwargs):
            import yaml
            s = yaml.dump(data).rstrip()
            return self.pre(s, lang="yaml")

        return _F(_yaml, name="yaml")

    @property
    def csv(self, ):
        def _csv(csv, **kwargs):
            return self.children.append(components.Table(csv_str=csv, show_index=False, **kwargs))

        return _F(_csv, name="csv")

    def print(self, *args, sep=" ", end="\n"):
        if self.children and isinstance(self.children[-1], Print):
            self.children[-1].text += sep.join([str(a) for a in args]) + end
        else:
            self.children.append(Print(*args, sep=sep, end=end))

    def flush(self, *args):
        self.write(self._md)
        self.children.clear()

    def __enter__(self):
        import inspect
        assert self.filename, "make sure that file is already set."

        prior_frame = inspect.currentframe().f_back
        filename, line_number, function_name, lines, index = inspect.getframeinfo(prior_frame)
        try:
            lines_in_block = get_block(filename, line_number + 1)
            text = "".join(lines_in_block)
            # todo: change to self.code(, lang="python", ...)
            self.children.append(components.Pre(dedent(text).rstrip(), lang="python"))
        except FileNotFoundError:
            print('in iPython session')
        return self

    __exit__ = flush


class Github(CommonMark):
    """uses tables for the layout"""
    pass


class Gist(CommonMark):
    """saves everything inside a folder"""
    pass
