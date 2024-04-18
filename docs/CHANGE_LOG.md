# Change Log

## 0.0.30

- update the webapp client, now using 0.0.30 Ge Yang 2 minutes ago
- fix the vuer server cert bug Ge Yang 7 minutes ago
- fix the ImagePlane height unused var bug

## 0.0.29-rc11

bump version to 0.0.29rc11 Ge Yang 4/9/24, 8:26 PM
release new client supporting aspect ratio in ImagePlane Ge Yang 4/9/24, 8:24 PM

## 0.0.29-rc9

bump version to 0.0.29rc9, fix ca_cert option typo Ge Yang 4/3/24, 8:14 PM
add ssl, fix typo. Ge Yang 4/3/24, 8:13 PM
add ssl doc string Ge Yang 4/2/24, 9:04 PM
add ssl. See doc string of the base server Ge Yang 4/2/24, 8:58 PM

## 0.0.29-rc5

- bump version to 0.0.29rc5 with matrix support to image_plane Ge Yang 3/27/24, 2:17 PM
- bump version to 0.0.29rc5 with matrix support to image_plane Ge Yang 3/27/24, 1:03 PM
- Add HUD in VR to the ImageBackground component. Probably want to rename. Ge Yang 3/27/24, 10:56 AM
- add material override with GLB, bump version to 0.0.29rc3 Ge Yang 3/27/24, 12:50 AM
- bump version Ge Yang 3/22/24, 1:24 AM
- add quality flag to the image components Ge Yang 3/22/24, 1:23 AM
- update client, bump version to 0.0.29-rc1 Ge Yang 3/14/24, 7:32 PM
- update Import error message Ge Yang 3/4/24, 11:29 PM
- add back NDArray to experiment with numpy==1.21, testing isaacgym Ge Yang 3/4/24, 11:22 PM
- remove NDArray to enable numpy==1.20, needed by isaacgym Ge Yang 3/4/24, 11:14 PM
- fix the typing error Ge Yang 3/4/24, 10:36 PM
- update the client build Ge Yang 3/4/24, 8:55 PM
- update the client build Ge Yang 3/3/24, 6:52 PM
- remove print statements Ge Yang 3/2/24, 9:54 PM

## 0.0.27

- bump version for updated client bundle Ge Yang 3/1/24, 5:57 PM
- add client 0.0.27 Ge Yang 3/1/24, 5:57 PM
- bump version for a client release Ge Yang 3/1/24, 5:04 PM
- merge websocket + local client serving Ge Yang 3/1/24, 5:03 PM
- patch filename bug Ge Yang 2/29/24, 1:31 AM
- move the assets into the vuer module Ge Yang 2/29/24, 1:22 AM
- add local host, http://localhost:8012/client/\?ws\=ws://localhost:8012 Ge Yang 2/29/24, 1:12 AM
- add local host, http://localhost:8012/client/\?ws\=ws://localhost:8012 Ge Yang 2/29/24, 1:11 AM
- merge roger's changes Ge Yang 2/29/24, 12:07 AM

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
