from time import sleep

from tassa import Tassa
from tassa.events import Set, NOOP, Frame
from tassa.schemas import Page, Image

doc = Tassa(
    "ws://localhost:8012",
    # uri="http://localhost:8000/tassa",
    reconnect=True,
    debug=True,
)


# this is blocking because it autostarts.
@doc.bind(start=True)
def main():
    # You can pass in either a PIL image or a path to an image.
    # For loading images from the internet, you can use `src` directly.
    page = Page(
        Image("test.png", key="image", style={"transform": "scale(0.5)"})
    )

    print('====')
    event = yield Set(page)
    event = yield Frame(NOOP)
    print('^^^^')
    from pprint import pprint
    print(vars(event))
    while event != "TERMINAL":
        event = yield NOOP
        sleep(10)
        print('keep alive')
        print(vars(event))
