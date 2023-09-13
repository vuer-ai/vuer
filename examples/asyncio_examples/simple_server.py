import asyncio
import traceback
from concurrent.futures import CancelledError
from functools import partial
from pathlib import Path

from aiohttp import web
from params_proto import ParamsProto, Proto


async def websocket_handler(request):
    print('New connection!!!')

    ws = web.WebSocketResponse()
    await ws.prepare(request)

    print('Socket stored')

    try:
        async for msg in ws:
            print(msg)

    except CancelledError as exp:
        print(f'WebSocket Canceled')

    except Exception as exp:
        print(f'Error:\n{exp}\n{traceback.print_exc()}')

    finally:
        # app_state()['connections'].remove(ws)
        await ws.close()
        print('WebSocket connection closed')


async def handle_file_request(request, root):
    filename = request.match_info['filename']
    filepath = Path(root) / filename

    if not filepath.is_file():
        raise web.HTTPNotFound()

    return web.FileResponse(filepath)


class Server(ParamsProto):
    # host = Proto(env="HOST", default="localhost")
    cors = Proto(help="Enable CORS", default=False)
    port = Proto(env="PORT", default=8012)

    def __post_init__(self):
        self.app = web.Application()
        self.app.add_routes([web.get('', websocket_handler)])

    def _add_routes(self, routes):
        route = self.app.add_routes(routes)
        self.cors.add(route)

    def _add_task(self, fn):
        self.app.add_task(fn)

    def _static(self, name, fn, root):
        _fn = partial(fn, root=root)
        self.app.add_routes([web.get(f'/{name}/{{filename}}', _fn)])

    def start(self):
        async def init_server():
            runner = web.AppRunner(self.app)
            await runner.setup()
            site = web.TCPSite(runner, 'localhost', self.port)
            await site.start()

            print(f'Serving on http://localhost:{self.port}')

        asyncio.get_event_loop().run_until_complete(init_server())
        asyncio.get_event_loop().run_forever()


if __name__ == '__main__':
    app = Server()
    app._static('static', handle_file_request, root='.')
    app.start()
