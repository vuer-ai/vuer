import asyncio
import traceback
from abc import abstractmethod
from concurrent.futures import CancelledError
from functools import partial
from pathlib import Path

import aiohttp_cors
from aiohttp import web
from params_proto import ParamsProto, Proto


async def default_handler(request, ws):
    async for msg in ws:
        print(msg)


async def websocket_handler(request, handler):
    print('New connection!!!')

    ws = web.WebSocketResponse()
    await ws.prepare(request)

    print('Socket stored')

    try:
        await handler(request, ws)

    except ConnectionResetError:
        print("Connection reset")

    except CancelledError as exp:
        print(f'WebSocket Canceled')

    except Exception as exp:
        print(f'Error:\n{exp}\n{traceback.print_exc()}')

    finally:
        await ws.close()
        print('WebSocket connection closed')


async def handle_file_request(request, root):
    filename = request.match_info['filename']
    filepath = Path(root) / filename

    if not filepath.is_file():
        raise web.HTTPNotFound()

    return web.FileResponse(filepath)


class Server:
    host = Proto(env="HOST", default="localhost")
    cors = Proto(help="Enable CORS", default="*")
    port = Proto(env="PORT", default=8012)

    # @abstractmethod
    # def __init__(self):
    #     self.__post_init__()

    def __post_init__(self):
        self.app = web.Application()

        default = aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*", allow_methods="*",
        )
        cors_config = {k: default for k in self.cors.split(',')}

        self.cors_context = aiohttp_cors.setup(self.app, defaults=cors_config)

    def _route(self, path: str, handler: callable, method: str = "GET", ):
        route = self.app.router.add_resource(path).add_route(method, handler)
        self.cors_context.add(route)

    def _socket(self, path: str, handler: callable):
        ws_handler = partial(websocket_handler, handler=handler)
        route = self.app.router.add_resource(path).add_route("GET", ws_handler)
        self.cors_context.add(route)

    def _add_task(self, fn):
        loop = asyncio.get_event_loop()
        loop.create_task(fn)

    def _static(self, path, root):
        _fn = partial(handle_file_request, root=root)
        self.app.add_routes([web.get(f'/{path}/{{filename}}', _fn)])

    def run(self):
        async def init_server():
            runner = web.AppRunner(self.app)
            await runner.setup()
            site = web.TCPSite(runner, self.host, self.port)
            await site.start()

            print(f'Serving on http://{self.host}:{self.port}')

        event_loop = asyncio.get_event_loop()

        event_loop.run_until_complete(init_server())
        event_loop.run_forever()


if __name__ == '__main__':
    app = Server()
    app._route('', websocket_handler)
    app._static('static', handle_file_request, root='.')
    app.run()
