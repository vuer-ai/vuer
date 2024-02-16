
# Hand Tracking

The Hand component offers a way to stream the current
pose of the hand to the server. 

<iframe width="100%" height="500px" src="https://vuer.ai?collapseMenu=True&background=131416,fff&initCamPos=2.8,2.2,2.5&reconnect=True&scene=3gAHqGNoaWxkcmVukt4AA6hjaGlsZHJlbpHeAAOoY2hpbGRyZW6Qo3RhZ6dHcmlwcGVyo2tleapub3QtbW92aW5no3RhZ6dNb3ZhYmxlo2tleaE03gAEqGNoaWxkcmVukd4AA6hjaGlsZHJlbpCjdGFnp0dyaXBwZXKja2V5pDI0NzejdGFnp01vdmFibGWja2V5qm1vdmluZy1vbmWocG9zaXRpb26Ty7%2FGgNtgAAAAy7%2Fd9OXgAAAAAKN0YWelU2NlbmWja2V5oTOidXCTAAABq3Jhd0NoaWxkcmVukt4ABKhjaGlsZHJlbpCjdGFnrEFtYmllbnRMaWdodKNrZXm1ZGVmYXVsdF9hbWJpZW50X2xpZ2h0qWludGVuc2l0eQHeAAWoY2hpbGRyZW6Qo3RhZ7BEaXJlY3Rpb25hbExpZ2h0o2tleblkZWZhdWx0X2RpcmVjdGlvbmFsX2xpZ2h0qWludGVuc2l0eQGmaGVscGVyw6xodG1sQ2hpbGRyZW6QqmJnQ2hpbGRyZW6T3gADqGNoaWxkcmVukKN0YWeqR3JhYlJlbmRlcqNrZXmnREVGQVVMVN4AA6hjaGlsZHJlbpCjdGFnr1BvaW50ZXJDb250cm9sc6NrZXmhMd4AA6hjaGlsZHJlbpCjdGFnpEdyaWSja2V5oTI%3D" width="100%" height="500px" frameborder="0"></iframe>


## Getting Hand Movement

You can get the full pose of the hands by listening to the `HAND_MOVE` event.

I plan to make it possible to bind the event listener to
a specific movable object for a more compact API.

```python
# @app.add_handler("HAND_MOVE")
# async def handler(event, session):
#     print(f"Movement Event: key-{event.key}", event.value)

@app.add_handler("HAND_SELECT")
async def onSelection(event, session):
    print(f"Select Event: key-{event.key}", event.value)


@app.add_handler("HAND_SQUEEZE")
async def onSqueeze(event, session):
    print(f"Squeeze Event: key-{event.key}", event.value)
```
