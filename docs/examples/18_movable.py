import os
from contextlib import nullcontext

from cmx import doc

MAKE_DOCS = os.getenv("MAKE_DOCS", None)

doc @ """
# Movable Grippers (in WebView and VR)

The movable component allows you to wrap objects inside,
and change their position and orientation. The following
exmaple shows how to detect the `OBJECT_MOVE` events.

<iframe width="100%" height="500px" src="https://vuer.ai?collapseMenu=True&background=131416,fff&initCamPos=2.8,2.2,2.5&reconnect=True&scene=3gAHqGNoaWxkcmVukt4AA6hjaGlsZHJlbpHeAAOoY2hpbGRyZW6Qo3RhZ6dHcmlwcGVyo2tleapub3QtbW92aW5no3RhZ6dNb3ZhYmxlo2tleaE03gAEqGNoaWxkcmVukd4AA6hjaGlsZHJlbpCjdGFnp0dyaXBwZXKja2V5pDI0NzejdGFnp01vdmFibGWja2V5qm1vdmluZy1vbmWocG9zaXRpb26Ty7%2FGgNtgAAAAy7%2Fd9OXgAAAAAKN0YWelU2NlbmWja2V5oTOidXCTAAABq3Jhd0NoaWxkcmVukt4ABKhjaGlsZHJlbpCjdGFnrEFtYmllbnRMaWdodKNrZXm1ZGVmYXVsdF9hbWJpZW50X2xpZ2h0qWludGVuc2l0eQHeAAWoY2hpbGRyZW6Qo3RhZ7BEaXJlY3Rpb25hbExpZ2h0o2tleblkZWZhdWx0X2RpcmVjdGlvbmFsX2xpZ2h0qWludGVuc2l0eQGmaGVscGVyw6xodG1sQ2hpbGRyZW6QqmJnQ2hpbGRyZW6T3gADqGNoaWxkcmVukKN0YWeqR3JhYlJlbmRlcqNrZXmnREVGQVVMVN4AA6hjaGlsZHJlbpCjdGFnr1BvaW50ZXJDb250cm9sc6NrZXmhMd4AA6hjaGlsZHJlbpCjdGFnpEdyaWSja2V5oTI%3D" width="100%" height="500px" frameborder="0"></iframe>
"""
from vuer import Vuer, VuerSession
from vuer.schemas import Movable, Gripper, DefaultScene
from asyncio import sleep

app = Vuer()

doc @ """
## Detecting Movement

To get the current location of the gripper, you can bind
to the `OBJECT_MOVE` event. The event object also contains
the key of the movable that is being moved. This is a way
to identify the movable object.

I plan to make it possible to bind the event listener to
a specific movable object for a more compact API.
"""

with doc, doc.skip if MAKE_DOCS else nullcontext():

    @app.add_handler("OBJECT_MOVE")
    async def handler(event, session):
        print(f"Movement Event: key-{event.key}", event.value)


doc @ """
As usual, we spawn the main session:
"""

with doc, doc.skip if MAKE_DOCS else nullcontext():

    @app.spawn(start=True)
    async def main(session: VuerSession):
        session.set @ DefaultScene()

        session.upsert @ Movable(Gripper(key="not-moving"))
        import numpy as np

        for i in range(10000):
            # We move the gripper at a const speed around the origin.
            x = np.sin(i / 60) / 2
            y = np.cos(i / 60) / 2
            session.upsert @ Movable(Gripper(), position=[x, y, 0], key="moving-one")
            await sleep(0.016)
