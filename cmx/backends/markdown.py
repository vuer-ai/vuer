from contextlib import contextmanager
from textwrap import dedent

from ml_logger import logger


def get_indent(text):
    return len(text) - len(text.lstrip())


def get_block(filename, line_number):
    import linecache
    current_line_number = 0
    indent = 0
    lines = []
    with open(filename, 'r') as f:
        while True:
            line = f.readline()
            current_line_number += 1
            if current_line_number < line_number:
                continue
            new_indent = get_indent(line)
            if new_indent < indent:
                break
            else:
                indent = new_indent
                lines.append(line)
    return lines


class CommonMark:
    file = None
    counter = 0

    def __init__(self, ) -> object:
        pass

    def config(self, file, overwrite=True):
        self.file = file
        if overwrite:
            logger.log_text("", filename=self.file, overwrite=True)

    def __call__(self, *snippets, dedent=True, flush=True, **kwargs):
        """output text"""
        logger.print(*snippets, dedent=dedent, **kwargs, file=self.file, overwrite=False)

    text = __call__
    text_buffer = ""

    def print(self, *args, sep=" ", end="\n"):
        self.text_buffer += sep.join([str(a) for a in args]) + end

    def video(self, url=None):
        pass

    def __enter__(self):
        import inspect
        previous_frame = inspect.currentframe().f_back
        # import sys
        # previous_frame = sys.get_frame(1)
        filename, line_number, function_name, lines, index = inspect.getframeinfo(previous_frame)
        block = get_block(filename, line_number + 1)
        whole_block = "".join(block)
        self('``` python')
        self(dedent(whole_block).rstrip())
        self("```")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.text_buffer = f"```\nOut[{self.counter}]:\n{self.text_buffer}\n```\n"
        self(self.text_buffer)
        self.text_buffer = ""
        return self

    # @decorator
    def wraps_functions(self, fn):
        """wraps a potable function to declare in global."""
        # inspect.getsource(f)
        pass
