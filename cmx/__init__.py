from cmx.backends.markdown import CommonMark

doc = CommonMark()


def config(mode=None, target=None):
    global doc

    if mode == "local":
        doc = None
