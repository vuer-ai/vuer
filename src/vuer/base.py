import asyncio
import ssl
import traceback
from collections.abc import Coroutine
from concurrent.futures import CancelledError
from functools import partial
from pathlib import Path

import aiohttp_cors
from aiohttp import web
from params_proto import EnvVar


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
  """Base TCP server with HTTP/WebSocket functionality.

  This class provides the core server infrastructure for Vuer, including:
  - HTTP route handling with CORS support
  - WebSocket connection management
  - SSL/TLS support for secure connections
  - Static file serving

  Subclasses should call _init_app() in their __post_init__ to initialize
  the aiohttp application before using server methods.

  Note: This class cannot use @proto.prefix because Vuer inherits from it
  and also uses @proto.prefix, which causes a metaclass conflict.

  Attributes:
      host: Server hostname. Set to "0.0.0.0" to accept remote connections.
      port: Server port number.
      cors: Comma-separated list of allowed CORS origins. Use "*" for all.
      cert: Path to SSL certificate file for HTTPS.
      key: Path to SSL private key file for HTTPS.
      ca_cert: Path to CA certificate for client certificate verification.
      WEBSOCKET_MAX_SIZE: Maximum WebSocket message size (default 256MB).
      REQUEST_MAX_SIZE: Maximum HTTP request size (default 256MB).
  """

  host: str = EnvVar @ "VUER_HOST" | "localhost"
  port: int = EnvVar @ "VUER_PORT" | 8012
  cors: str = EnvVar @ "VUER_CORS" | "*"

  cert: str = EnvVar @ "VUER_SSL_CERT" | None
  key: str = EnvVar @ "VUER_SSL_KEY" | None
  ca_cert: str = EnvVar @ "VUER_SSL_CA_CERT" | None

  WEBSOCKET_MAX_SIZE: int = EnvVar @ "WEBSOCKET_MAX_SIZE" | 2**28
  REQUEST_MAX_SIZE: int = EnvVar @ "REQUEST_MAX_SIZE" | 2**28

  def _init_app(self):
    """Initialize the aiohttp application and CORS context.

    This must be called before using any server methods. Subclasses
    should call this in their __post_init__ method.

    Creates:
        self.app: The aiohttp web.Application instance.
        self.cors_context: The aiohttp_cors setup for CORS handling.
    """
    if hasattr(self, "app"):
      return
    self.app = web.Application(client_max_size=self.REQUEST_MAX_SIZE)
    default = aiohttp_cors.ResourceOptions(
      allow_credentials=True,
      expose_headers="*",
      allow_headers="*",
      allow_methods="*",
    )
    cors_config = {k: default for k in self.cors.split(",")}
    self.cors_context = aiohttp_cors.setup(self.app, defaults=cors_config)

  def _add_route(
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
    self._add_route(path, ws_handler)

  def _add_task(self, fn: Coroutine, name=None, ws_id=None):
    """Create and track an async task.

    Args:
        fn: The coroutine to run as a task.
        name: Optional name for the task.
        ws_id: Optional websocket ID to associate the task with.
              If provided, the task will be cancelled when the ws closes.
    """
    if not hasattr(self, "_tasks"):
      self._tasks = {}  # ws_id -> set of tasks
      self._orphan_tasks = set()  # tasks not tied to a ws

    loop = asyncio.get_running_loop()
    task = loop.create_task(fn, name=name)

    if ws_id is not None:
      if ws_id not in self._tasks:
        self._tasks[ws_id] = set()
      self._tasks[ws_id].add(task)
      task.add_done_callback(lambda t: self._tasks.get(ws_id, set()).discard(t))
    else:
      self._orphan_tasks.add(task)
      task.add_done_callback(lambda t: self._orphan_tasks.discard(t))

    return task

  def _cancel_tasks(self, ws_id):
    """Cancel all tasks associated with a websocket ID."""
    if not hasattr(self, "_tasks"):
      return
    tasks = self._tasks.pop(ws_id, set())
    for task in tasks:
      if not task.done():
        task.cancel()

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
        ssl_context.verify_mode = ssl.CERT_NONE

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
