import asyncio
import ssl
import traceback
from collections.abc import Coroutine
from concurrent.futures import CancelledError
from functools import partial
from pathlib import Path

import aiohttp_cors
from aiohttp import web


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

    except CancelledError:
        print("WebSocket Canceled")

    except Exception as exp:
        print(f"Error:\n{exp}\n{traceback.print_exc()}")

    finally:
        await ws.close()
        print("WebSocket connection closed")


async def handle_file_request(request, root, filename=None):
    if filename is None:
        filename = request.match_info["filename"]

    filepath = Path(root) / filename

    if not filepath.is_file():
        raise web.HTTPNotFound()

    response = web.FileResponse(filepath)

    # Check if URL contains "hot" parameter for hot loading mode
    # Hot assets are those that change frequently during development
    # Parameter name is case-insensitive (hot, Hot, HOT all work)
    # Parameter value must not equal "false" (case insensitive)
    hot_key = None
    for key in request.query.keys():
        if key.lower() == "hot":
            hot_key = key
            break

    if hot_key:
        # Check if hot is explicitly set to false
        hot_value = request.query.get(hot_key, "")
        if hot_value.lower() != "false":
            # Set Cache-Control to no-cache to force revalidation
            # This allows 304 responses but prevents strong caching
            response.headers["Cache-Control"] = "no-cache"

    return response


class Server:
    """Base TCP server mixin - provides HTTP/WebSocket server methods.

    This is a mixin class that provides server functionality. It does not
    define any fields - subclasses should define their own configuration fields.
    """

    def _add_route(
        self,
        path: str,
        handler: callable,
        method: str = "GET",
    ):
        route = self.app.router.add_resource(path).add_route(method, handler)
        self.cors_context.add(route)

    def _socket(self, path: str, handler: callable):
        ws_handler = partial(websocket_handler, handler=handler, max_msg_size=self.WEBSOCKET_MAX_SIZE)
        self._add_route(path, ws_handler)

    @staticmethod
    def _add_task(fn: Coroutine, name=None):
        loop = asyncio.get_running_loop()
        loop.create_task(fn, name=name)
        return None

    def _add_static(self, path, root):
        _fn = partial(handle_file_request, root=root)
        self._add_route(f"{path}/{{filename:.*}}", _fn, method="GET")

    def _static_file(self, path, root, filename=None):
        _fn = partial(handle_file_request, root=root, filename=filename)
        self._add_route(f"{path}", _fn, method="GET")

    def start(self):
        async def init_server():
            runner = web.AppRunner(self.app)
            await runner.setup()
            if not self.cert:
                site = web.TCPSite(runner, self.host, self.port)
                return await site.start()

            ssl_context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
            ssl_context.load_cert_chain(certfile=self.cert, keyfile=self.key)
            if self.ca_cert:
                ssl_context.load_verify_locations(self.ca_cert)
                ssl_context.verify_mode = ssl.CERT_REQUIRED
            else:
                ssl_context.verify_mode = ssl.CERT_OPTIONAL

            site = web.TCPSite(runner, self.host, self.port, ssl_context=ssl_context)
            return await site.start()

        # Check if there's already a running event loop (e.g., in IPython/Jupyter)
        try:
            running_loop = asyncio.get_running_loop()
            # If we're here, there's a running loop - schedule the server to start
            asyncio.ensure_future(init_server(), loop=running_loop)
            print("Server scheduled in existing event loop (IPython/Jupyter mode)")
            return
        except RuntimeError:
            # No running loop, proceed with standard approach
            pass

        # Standard approach for scripts/CLI
        try:
            event_loop = asyncio.get_event_loop()
        except RuntimeError:
            # Python 3.10+ in some environments
            event_loop = asyncio.new_event_loop()
            asyncio.set_event_loop(event_loop)

        event_loop.run_until_complete(init_server())
        event_loop.run_forever()


if __name__ == "__main__":
    app = Server()
    app._add_route("", websocket_handler)
    app._add_static("/static", ".")
    app.start()
