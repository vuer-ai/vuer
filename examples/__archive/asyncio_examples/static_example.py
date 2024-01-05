import asyncio
from pathlib import Path
from aiohttp import web


async def handle_file_request(request):
    filename = request.match_info['filename']
    filepath = Path('.') / filename

    if not filepath.is_file():
        raise web.HTTPNotFound()

    return web.FileResponse(filepath)


async def init_server():
    app = web.Application()
    app.add_routes([web.get('/{filename}', handle_file_request)])

    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, 'localhost', 8080)
    await site.start()

    print('Serving on http://localhost:8080')


if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(init_server())
    asyncio.get_event_loop().run_forever()
