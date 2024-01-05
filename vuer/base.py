import asyncio
import traceback
from collections.abc import Coroutine
from concurrent.futures import CancelledError
from functools import partial
from pathlib import Path

import aiohttp_cors
from aiohttp import web
from params_proto import Proto


async def default_handler(request, ws):
    async for msg in ws:
        print(msg)


async def websocket_handler(request, handler, **ws_kwargs):
    ws = web.WebSocketResponse(**ws_kwargs)
    await ws.prepare(request)

    try:
        await handler(request, ws)

    except ConnectionResetError:
        print("Connection reset")

    except CancelledError as exp:
        print(f"WebSocket Canceled")

    except Exception as exp:
        print(f"Error:\n{exp}\n{traceback.print_exc()}")

    finally:
        await ws.close()
        print("WebSocket connection closed")


async def handle_file_request(request, root):
    filename = request.match_info["filename"]
    filepath = Path(root) / filename

    if not filepath.is_file():
        raise web.HTTPNotFound()

    return web.FileResponse(filepath)


class Server:
    host = Proto(env="HOST", default="localhost")
    cors = Proto(help="Enable CORS", default="*")
    port = Proto(env="PORT", default=8012)

    WEBSOCKET_MAX_SIZE = 2**28

    def __post_init__(self):
        self.app = web.Application()

        default = aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
            allow_methods="*",
        )
        cors_config = {k: default for k in self.cors.split(",")}

        self.cors_context = aiohttp_cors.setup(self.app, defaults=cors_config)

    def _route(
        self,
        path: str,
        handler: callable,
        method: str = "GET",
    ):
        route = self.app.router.add_resource(path).add_route(method, handler)
        self.cors_context.add(route)

    def _socket(self, path: str, handler: callable):
        ws_handler = partial(
            websocket_handler, handler=handler, max_msg_size=self.WEBSOCKET_MAX_SIZE
        )
        self._route(path, ws_handler, method="GET")

    @staticmethod
    def _add_task(fn: Coroutine, name=None):
        loop = asyncio.get_event_loop()
        loop.create_task(fn, name=name)

    def _static(self, path, root):
        _fn = partial(handle_file_request, root=root)
        self._route(f"{path}/{{filename:.*}}", _fn, method="GET")

    def run(self):
        async def init_server():
            runner = web.AppRunner(self.app)
            await runner.setup()
            site = web.TCPSite(runner, self.host, self.port)
            await site.start()

            # This print has been very confusing to the user. Remove. - Ge
            # print(f"Serving on http://{self.host}:{self.port}")

        event_loop = asyncio.get_event_loop()

        event_loop.run_until_complete(init_server())
        event_loop.run_forever()


if __name__ == "__main__":
    app = Server()
    app._route("", websocket_handler)
    app._static("/static", handle_file_request, root=".")
    app.run()
