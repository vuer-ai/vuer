from cmx import doc

doc @ """

# Setting Up Your First Scene

This tutorial shows you how to setup a scene like below. We teach you how to:
- [ ] Setup a vuer server
- [ ] Add a 3D scene to the server
- [ ] Add a SpotLight to the scene
- [ ] Add a Box to the scene
- [ ] Add a Movable component to move the box around

> – The Batteries🔋 Are Included!

<iframe src="https://vuer.ai/?ws=ws%3A%2F%2Flocalhost%3A8012&reconnect=True&collapseMenu=True&scene=3gAIqGNoaWxkcmVukt4ACKhjaGlsZHJlbpCjdGFno0JveKNrZXmlZm94LTGkYXJnc5bLP7mZmaAAAADLP7mZmaAAAADLP7mZmaAAAABlZWWocG9zaXRpb26TAMs%2FqZmZoAAAAAClY29sb3KjcmVkrG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbN4AAaVjb2xvcqcjMjNhYWZm3gAFqGNoaWxkcmVukd4ABKhjaGlsZHJlbpCjdGFnqVNwb3RMaWdodKNrZXmnbGlnaHQtMalpbnRlbnNpdHkKo3RhZ6dNb3ZhYmxlo2tleahoYW5kbGUtMahwb3NpdGlvbpPLv9AAAAAAAADLP9gAAAAAAADLP8AAAAAAAAClc2NhbGXLP8MzM0AAAACjdGFnpVNjZW5lo2tleaExonVwkwABAKxjb2xsYXBzZU1lbnXDq3Jhd0NoaWxkcmVukKxodG1sQ2hpbGRyZW6QqmJnQ2hpbGRyZW6Q" width="100%" height="200px" frameborder="0"></iframe>

Vuer has two main components: the server and the client. You will interact with the 3D scene via the python vuer app.

We start by instantiating a vuer server. 
"""
with doc:
    from vuer import Vuer

    app = Vuer(
        # These query parameters show up in the URL, and are used to configure the scene.
        queries=dict(
            reconnect=True,
            collapseMenu=True,
        ),
    )

doc @ """
Now, to start the vuer server, you can run:

```python
app.run()
```

And this generates the following output:

```shell
Serving file:///Users/you/mit/vuer/docs/tutorials/basics at /static
Visit: https://vuer.ai?ws=ws://localhost:8012&reconnect=True
```
Note, `app.run` is blocking. In other words, this should be the last thing
you run in your script.

Congratulations! Now you have a vuer server running locally.

## Adding a 3D Scene

To add a 3D Scene, you neet to use the `set` operator to add a Scene object to the vuer app.

Before we do that, note that vuer client connects to the vuer python server via a websocket
**session**. Each server can handle multiple sessions, which means that we need to wrap each
session in an async function, where the life cyle of the session corresponds to the procedures
inside this function:
"""
with doc:
    import asyncio
    from vuer import VuerSession
    from vuer.schemas import Scene, Box, SpotLight, Movable

    # The spawn decorator is used to bind this async function to the websocket session.
    # We instantiated the app earlier.
    @app.spawn
    async def session(sess: VuerSession):
        print("Example: we have started a websocket session!")

        # Add the scene to the vuer app
        sess.set @ Scene(
            Box(
                args=[0.1, 0.1, 0.1, 101, 101, 101],
                position=[0, 0.05, 0],
                color="red",
                materialType="standard",
                material=dict(color="#23aaff"),
                key="fox-1",
            ),
            Movable(
                SpotLight(
                    intensity=10,
                    key="light-1",
                ),
                position=[-0.25, 0.375, 0.125],
                scale=0.15,
                key="handle-1",
            ),
            # this is to define the up direction of the scene. Default to y up (0, 1, 0)
            up=[0, 1, 0],
            # this collapses the memu by default.
            collapseMenu=True,
        )
        # you need to await to let vuer send the Scene component up
        # to the client!
        await asyncio.sleep(0.0)


doc @ """

Now at the end of your script, launch the app:

```python
# Run the app
app.run()
```

And this should give the scene shown at the beginning:
<iframe src="https://vuer.ai/?collapseMenu=True&background=131416,fff&initCamPos=2.8,2.2,2.5&reconnect=True&collapseMenu=True&scene=3gAIqGNoaWxkcmVukt4ACKhjaGlsZHJlbpCjdGFno0JveKNrZXmlZm94LTGkYXJnc5bLP7mZmaAAAADLP7mZmaAAAADLP7mZmaAAAABlZWWocG9zaXRpb26TAMs%2FqZmZoAAAAAClY29sb3KjcmVkrG1hdGVyaWFsVHlwZahzdGFuZGFyZKhtYXRlcmlhbN4AAaVjb2xvcqcjMjNhYWZm3gAFqGNoaWxkcmVukd4ABKhjaGlsZHJlbpCjdGFnqVNwb3RMaWdodKNrZXmnbGlnaHQtMalpbnRlbnNpdHkKo3RhZ6dNb3ZhYmxlo2tleahoYW5kbGUtMahwb3NpdGlvbpPLv9AAAAAAAADLP9gAAAAAAADLP8AAAAAAAAClc2NhbGXLP8MzM0AAAACjdGFnpVNjZW5lo2tleaExonVwkwABAKxjb2xsYXBzZU1lbnXDq3Jhd0NoaWxkcmVukKxodG1sQ2hpbGRyZW6QqmJnQ2hpbGRyZW6Q" width="100%" height="500px" frameborder="0"></iframe>
"""

doc.flush()
