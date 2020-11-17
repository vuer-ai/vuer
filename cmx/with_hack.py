import sys


class SkipException(Exception):
    pass


class SkipContextManager:
    def __init__(self, skip):
        """
        :param skip: bool, skip code execution if True.
        """
        self.skip = skip

    def __enter__(self):
        if self.skip:
            sys.settrace(lambda *args, **keys: None)
            frame = sys._getframe(1)
            frame.f_trace = self.trace

    def trace(self, frame, event, arg):
        raise SkipException()

    def __exit__(self, type, value, traceback):
        if type is None:
            return  # No exception
        if issubclass(type, SkipException):
            return True  # Suppress special SkipWithBlock exception


if __name__ == '__main__':
    with SkipContextManager(skip=True) \
            as this_works:
        print('In the with block')  # Won't be called
    print('Out of the with block')
