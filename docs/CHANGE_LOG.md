# Change Log

## 0.0.22

- Made error handling more transparent. For example
    ```
    websocket is connected. id:f85e4d05-42da-4460-a65c-681d81c6fa3b
    default socket worker is up, adding clientEvents 
    Uplink task running. id:f85e4d05-42da-4460-a65c-681d81c6fa3b
    uplink:f85e4d05-42da-4460-a65c-681d81c6fa3b is not in websocket pool
    websocket is now disconnected. Removing the socket.
    WebSocket connection closed
    Task exception was never retrieved
    future: <Task finished name='Task-54' coro=<Vuer.downlink.<locals>.handler() done, defined at /Users/ge/mit/vuer/vuer/server.py:554> exception=NameError("name 'PImage' is not defined")>
    Traceback (most recent call last):
      File "/Users/ge/mit/vuer/vuer/server.py", line 560, in handler
        raise e
      File "/Users/ge/mit/vuer/vuer/server.py", line 556, in handler
        await self.socket_handler(vuer_proxy)
      File "python/vuer_example.py", line 23, in main
        pil_image = PImage.open(BytesIO(buff))
    NameError: name 'PImage' is not defined
    ```
- Adding event callbacks upon asset load.

## 0.0.19

- `vuer`: close websocket when spawned function returns. 
- `vuer-ts`: fix camera_view.tsx aspect ratio bug, by forking Drei/PerspectiveCamera and cleaning it up.

## 0.0.18

### 0.0.18-patch-4

- Rebuilt
