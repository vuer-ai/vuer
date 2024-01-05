import asyncio
import traceback
from concurrent.futures import CancelledError
from pathlib import Path

from aiohttp import web


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


async def handle_file_request(request):
    filename = request.match_info['filename']
    filepath = Path('.') / filename

    if not filepath.is_file():
        raise web.HTTPNotFound()

    return web.FileResponse(filepath)


def main():
    app = web.Application()
    app.add_routes([web.get('/{filename}', handle_file_request)])
    app.add_routes([web.get('', websocket_handler)])

    async def init_server():
        runner = web.AppRunner(app)
        await runner.setup()
        site = web.TCPSite(runner, 'localhost', 8012)
        await site.start()

        print('Serving on http://localhost:8012')

    asyncio.get_event_loop().run_until_complete(init_server())
    asyncio.get_event_loop().run_forever()


if __name__ == '__main__':
    main()
