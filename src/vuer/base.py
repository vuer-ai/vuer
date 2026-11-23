import asyncio
import ssl
import traceback
from collections.abc import Coroutine
from concurrent.futures import CancelledError
from functools import partial
from pathlib import Path

from aiohttp import web
from params_proto import EnvVar

from vuer.auth import DEFAULT_ORIGINS, origin_allowed, parse_origins


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

  return ws


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
      cors: Comma-separated origin allow-list (fnmatch patterns such as
          ``http://localhost:*``) for CORS and for the WebSocket ``Origin`` check.
          Use "*" to allow every origin.
      cert: Path to SSL certificate file for HTTPS.
      key: Path to SSL private key file for HTTPS.
      ca_cert: Path to CA certificate for client certificate verification.
      WEBSOCKET_MAX_SIZE: Maximum WebSocket message size (default 256MB).
      REQUEST_MAX_SIZE: Maximum HTTP request size (default 256MB).
  """

  host: str = EnvVar @ "VUER_HOST" | "localhost"
  port: int = EnvVar @ "VUER_PORT" | 8012
  cors: str = EnvVar @ "VUER_CORS" | DEFAULT_ORIGINS

  cert: str = EnvVar @ "VUER_SSL_CERT" | None
  key: str = EnvVar @ "VUER_SSL_KEY" | None
  ca_cert: str = EnvVar @ "VUER_SSL_CA_CERT" | None

  WEBSOCKET_MAX_SIZE: int = EnvVar @ "WEBSOCKET_MAX_SIZE" | 2**28
  REQUEST_MAX_SIZE: int = EnvVar @ "REQUEST_MAX_SIZE" | 2**28

  def _init_app(self):
    """Initialize the aiohttp application and CORS handling.

    This must be called before using any server methods. Subclasses
    should call this in their __post_init__ method.

    Creates:
        self.app: The aiohttp web.Application instance.
        self.allowed_origins: The origin allow-list (fnmatch patterns) from ``cors``.
    """
    if hasattr(self, "app"):
      return
    self.allowed_origins = parse_origins(self.cors)
    self.app = web.Application(client_max_size=self.REQUEST_MAX_SIZE, middlewares=[self._cors_middleware])
    self.app.on_response_prepare.append(self._cors_headers)
    # kept for code that checks the attribute; CORS is a middleware now.
    self.cors_context = None

  def origin_allowed(self, request) -> bool:
    """True if the request's ``Origin`` header is allowed.

    Same-origin requests (the page that this server serves) and requests
    without an ``Origin`` header (non-browser clients) are always allowed.
    Other origins must match a pattern in ``cors``, e.g. ``http://localhost:*``.
    """
    origin = request.headers.get("Origin")
    if not origin:
      return True
    if origin.rstrip("/").split("://", 1)[-1].lower() == (request.host or "").lower():
      return True
    return origin_allowed(origin, self.allowed_origins)

  @web.middleware
  async def _cors_middleware(self, request, handler):
    origin = request.headers.get("Origin")
    allowed = origin and self.origin_allowed(request)
    if request.method == "OPTIONS" and origin and "Access-Control-Request-Method" in request.headers:
      if not allowed:
        raise web.HTTPForbidden(text="Origin not allowed")
      response = web.Response(status=200)
      response.headers["Access-Control-Allow-Methods"] = request.headers["Access-Control-Request-Method"]
      requested = request.headers.get("Access-Control-Request-Headers")
      if requested:
        response.headers["Access-Control-Allow-Headers"] = requested
      # Chrome asks before a public page (vuer.ai) talks to a local server.
      if request.headers.get("Access-Control-Request-Private-Network") == "true":
        response.headers["Access-Control-Allow-Private-Network"] = "true"
      return response
    return await handler(request)

  async def _cors_headers(self, request, response):
    """Add CORS headers to every response (streamed ones too) for allowed origins."""
    origin = request.headers.get("Origin")
    if origin and self.origin_allowed(request):
      response.headers["Access-Control-Allow-Origin"] = origin
      response.headers["Access-Control-Allow-Credentials"] = "true"
      response.headers["Access-Control-Expose-Headers"] = "*"
      response.headers.add("Vary", "Origin")

  def _add_route(
    self,
    path: str,
    handler: callable,
    method: str = "GET",
  ):
    self.app.router.add_resource(path).add_route(method, handler)

  def _socket(self, path: str, handler: callable):
    ws_handler = partial(
      websocket_handler, handler=handler, max_msg_size=self.WEBSOCKET_MAX_SIZE
    )
    self._add_route(path, ws_handler)

  def _log_task_exception(self, task):
    """Log exception from a completed task if present."""
    if task.cancelled():
      return
    try:
      exc = task.exception()
      if exc:
        task_name = task.get_name() if hasattr(task, "get_name") else "unnamed"
        print(f"Task '{task_name}' raised an exception:")
        traceback.print_exception(type(exc), exc, exc.__traceback__)
    except Exception:
      pass  # Task not done or already retrieved

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

    def handle_done(t, task_set_getter):
      """Log exceptions and remove task from tracking."""
      self._log_task_exception(t)
      task_set_getter().discard(t)

    if ws_id is not None:
      if ws_id not in self._tasks:
        self._tasks[ws_id] = set()
      self._tasks[ws_id].add(task)
      task.add_done_callback(lambda t: handle_done(t, lambda: self._tasks.get(ws_id, set())))
    else:
      self._orphan_tasks.add(task)
      task.add_done_callback(lambda t: handle_done(t, lambda: self._orphan_tasks))

    return task

  def _cancel_tasks(self, ws_id):
    """Cancel all tasks associated with a websocket ID."""
    if not hasattr(self, "_tasks"):
      return
    tasks = self._tasks.pop(ws_id, set())
    for task in tasks:
      if task.done():
        # Task already finished - log any exception before discarding
        self._log_task_exception(task)
      else:
        # Task still running - cancel it
        task.cancel()

  def _add_static(self, path, root):
    _fn = partial(handle_file_request, root=root)
    self._add_route(f"{path}/{{filename:.*}}", _fn, method="GET")

  def _static_file(self, path, root, filename=None):
    _fn = partial(handle_file_request, root=root, filename=filename)
    self._add_route(f"{path}", _fn, method="GET")

  def start(self):
    self._runner = None

    async def init_server():
      self._runner = web.AppRunner(self.app)
      await self._runner.setup()
      if not self.cert:
        site = web.TCPSite(self._runner, self.host, self.port)
        return await site.start()

      ssl_context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
      ssl_context.load_cert_chain(certfile=self.cert, keyfile=self.key)
      if self.ca_cert:
        ssl_context.load_verify_locations(self.ca_cert)
        ssl_context.verify_mode = ssl.CERT_REQUIRED
      else:
        ssl_context.verify_mode = ssl.CERT_NONE

      site = web.TCPSite(self._runner, self.host, self.port, ssl_context=ssl_context)
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

    try:
      event_loop.run_forever()
    except KeyboardInterrupt:
      pass
    finally:
      if self._runner is not None:
        event_loop.run_until_complete(self._runner.cleanup())
      # Cancel remaining async tasks to avoid "Task was destroyed" warnings
      pending = asyncio.all_tasks(event_loop)
      for task in pending:
        task.cancel()
      if pending:
        event_loop.run_until_complete(asyncio.gather(*pending, return_exceptions=True))
      event_loop.close()


if __name__ == "__main__":
  app = Server()
  app._add_route("", websocket_handler)
  app._add_static("/static", ".")
  app.start()
