import asyncio
import socket as stdlib_socket
import warnings
from asyncio import sleep
from collections import defaultdict, deque
from fnmatch import fnmatch
from functools import partial
from pathlib import Path
from typing import Callable, Deque, Dict, List, Optional, Union, cast
from uuid import uuid4

from aiohttp.hdrs import UPGRADE
from aiohttp.web_request import BaseRequest, Request
from aiohttp.web_response import Response
from aiohttp.web_ws import WebSocketResponse
from msgpack import packb, unpackb


def _default_encoder(obj):
  """Custom encoder for msgpack to handle numpy types."""
  try:
    import numpy as np

    if isinstance(obj, np.ndarray):
      return obj.tolist()
    if isinstance(obj, (np.integer, np.floating)):
      return obj.item()
  except ImportError:
    pass
  raise TypeError(f"Cannot serialize object of type {type(obj)}")


from aiohttp import web
from params_proto import EnvVar, proto
from websockets import ConnectionClosedError

from vuer.base import Server, handle_file_request, websocket_handler
from vuer.events import (
  INIT,
  NOOP,
  Add,
  ClientEvent,
  Frame,
  GrabRender,
  NullEvent,
  Remove,
  ServerEvent,
  ServerRPC,
  Set,
  Update,
  Upsert,
)
from vuer.schemas import Page
from vuer.types import EventHandler, SocketHandler, Url
from vuer.workspace import Blob, Workspace, guess_content_type, workspace_from_config


async def workspace_handler(request, workspace: Workspace):
  """Handle workspace file requests.

  First checks for dynamic links, then resolves files through the workspace.

  :param request: The aiohttp request object.
  :param workspace: The Workspace instance to resolve files from.
  :return: aiohttp Response object.
  """
  filename = request.match_info["filename"]

  # Check dynamic links first
  link_response = await workspace.handle_link(filename, request)
  if link_response is not None:
    return link_response

  # Fall back to file resolution
  result = await workspace.resolve(filename)

  if result is None:
    raise web.HTTPNotFound()

  # Convert result to response
  if isinstance(result, Path):
    response = web.FileResponse(result)
    # Override content-type for robotics files (FileResponse doesn't know these)
    content_type = guess_content_type(filename)
    if content_type != "application/octet-stream":
      response.content_type = content_type
  elif isinstance(result, Blob):
    response = web.Response(body=result.as_bytes(), content_type=result.content_type)
  elif isinstance(result, bytes):
    content_type = guess_content_type(filename)
    response = web.Response(body=result, content_type=content_type)
  else:
    # AsyncIterator - streaming response
    response = web.StreamResponse()
    response.content_type = guess_content_type(filename)

  # Handle hot reload header (case-insensitive "hot" parameter)
  hot_key = None
  for key in request.query.keys():
    if key.lower() == "hot":
      hot_key = key
      break

  if hot_key:
    hot_value = request.query.get(hot_key, "")
    if hot_value.lower() != "false":
      response.headers["Cache-Control"] = "no-cache"

  # Handle streaming response
  if hasattr(result, "__aiter__"):
    await response.prepare(request)
    async for chunk in result:
      await response.write(chunk)
    await response.write_eof()

  return response


# ANSI color codes
BOLD = "\033[1m"
DIM = "\033[2m"
CYAN = "\033[36m"
GREEN = "\033[32m"
YELLOW = "\033[33m"
RESET = "\033[0m"


class At:
  """Proxy Object for using the @ notation. Also
  supports being called direction, which supports
  more complex arguments."""

  def __init__(self, fn):
    self.fn = fn

  def __matmul__(self, arg):
    return self.fn(arg)

  def __call__(self, *args, **kwargs):
    return self.fn(*args, **kwargs)


class SceneOps:
  """Base class providing scene graph operations (set, update, add, upsert, remove).

  Subclasses must implement __matmul__ to handle event dispatch.
  Used by both VuerSession and SceneStore.
  """

  @property
  def set(self) -> At:
    """Set the scene. Usage: obj.set @ Scene(...)"""
    return At(lambda element: self @ Set(element))

  @property
  def update(self) -> At:
    """Update existing elements. Usage: obj.update @ element or obj.update @ [elem1, elem2]"""

    @At
    def _update(element):
      if isinstance(element, list):
        self @ Update(*element)
      elif isinstance(element, tuple):
        self @ Update(*element)
      else:
        self @ Update(element)

    return _update

  @property
  def add(self) -> At:
    """Add elements. Usage: obj.add @ elem or obj.add(to="parent") @ elem"""

    @At
    def _add(element, to=None):
      if isinstance(element, list):
        self @ Add(*element, to=to)
      elif isinstance(element, tuple):
        self @ Add(*element, to=to)
      else:
        self @ Add(element, to=to)

    return _add

  @property
  def upsert(self) -> At:
    """Upsert elements. Usage: obj.upsert @ elem or obj.upsert(to="parent") @ elem"""

    @At
    def _upsert(element, to=None, strict=False):
      if isinstance(element, list):
        self @ Upsert(*element, to=to, strict=strict)
      elif isinstance(element, tuple):
        self @ Upsert(*element, to=to, strict=strict)
      else:
        self @ Upsert(element, to=to, strict=strict)

    return _upsert

  @property
  def remove(self) -> At:
    """Remove elements by key. Usage: obj.remove @ "key" or obj.remove @ ["k1", "k2"]"""

    @At
    def _remove(keys):
      if isinstance(keys, list):
        self @ Remove(*keys)
      elif isinstance(keys, tuple):
        self @ Remove(*keys)
      else:
        self @ Remove(keys)

    return _remove


class BoundFn:
  """Generic wrapper for decorators that bind functions and enable .start() method.

  This class wraps a function and optionally starts the Vuer server.
  It provides a .start() method that can be called to start the server later.

  Example::

      @app.spawn()
      async def main(session):
          ...

      # Later, start the server
      main.start()
  """

  def __init__(self, inst: "Vuer", attr_name: str, start: bool = False):
    """
    :param inst: Vuer instance
    :param attr_name: Name of the attribute to set on the Vuer instance
    :param start: Whether to start the server immediately
    """
    self.vuer = inst
    self.attr_name = attr_name
    self.auto_start = start

  def __call__(self, fn):
    """Bind the function and optionally start the server."""
    setattr(self.vuer, self.attr_name, fn)
    if self.auto_start:
      self.vuer.start()
    return self

  def start(self, **kwargs):
    """Start the Vuer server with optional keyword arguments."""
    return self.vuer.start(**kwargs)


class _SpawnWrapper:
  """Wrapper for spawn decorator with filter support."""

  def __init__(self, vuer: "Vuer", decorator: Callable, start: bool = False):
    self.vuer = vuer
    self.decorator = decorator
    self.auto_start = start

  def __call__(self, fn):
    """Register the handler and optionally start the server."""
    self.decorator(fn)
    if self.auto_start:
      self.vuer.start()
    return self

  def start(self, **kwargs):
    """Start the Vuer server with optional keyword arguments."""
    return self.vuer.start(**kwargs)


def _match_filters(obj: dict, **filters) -> bool:
  """Check if client_info matches all filters.

  Supports fnmatch wildcards (e.g., "*" matches any value).

  :param obj: The client's INIT event value (e.g., {"client": "python", ...})
  :param filters: Filter criteria (e.g., {"client": "python", "platform": "Darwin"})
  :return: True if all filters match, False otherwise
  """
  if not filters:
    return True  # No filters = match all

  for key, pattern in filters.items():
    value = obj.get(key)
    if value is None:
      return False
    # Convert both to string for fnmatch comparison
    if not fnmatch(str(value), str(pattern)):
      return False

  return True


class VuerSession(SceneOps):
  def __init__(self, vuer: "Vuer", ws_id: int, queue_len=100):
    self.vuer = vuer
    self.CURRENT_WS_ID = ws_id

    que_maker = partial(deque, maxlen=queue_len)

    self.downlink_queue: Deque[ClientEvent] = que_maker()
    self.uplink_queue: Deque[ServerEvent] = que_maker()

  @property
  def socket(self):
    """Getter for the websocket object.

    this is useful for closing the socket session from the client side.

    Example Usage::

        @app.spawn(start=True):
        async def main(session: VuerSession):
            print("doing something...")
            await sleep(1.0)

            print("I am done! closing the socket.")
            session.socket.close()
    """
    return self.vuer.ws[self.CURRENT_WS_ID]

  def __matmul__(self, event: ServerEvent):
    """
    Send a ServerEvent to the client.

    !!Under construction!!

    Does NOT need to be awaited. this function assumes the ws_id is the last one in the ws pool.

    :param event:
    :return: dqueue
    """
    assert isinstance(event, ServerEvent), "msg must be a ServerEvent type object."
    assert not isinstance(event, Frame), "Frame event is only used in vuer.bind method."

    self.send(event)
    return None

  async def grab_render(self, ttl=2.0, **kwargs) -> ClientEvent:
    """
    Grab a render from the client.

    :param quality: The quality of the render. 0.0 - 1.0
    :param subsample: The subsample of the render.
    :param ttl: The time to live for the handler. If the handler is not called within the time it gets removed from the handler list.
    """
    assert self.CURRENT_WS_ID is not None, (
      "Websocket session is missing. CURRENT_WS_ID is None."
    )

    event = GrabRender(**kwargs)

    return await self.vuer.rpc(self.CURRENT_WS_ID, event, ttl=ttl)

  async def get_webxr_mesh(self, key: str = "webxr-mesh", ttl=2.0) -> ClientEvent:
    """
    Request WebXR mesh data from the client.

    This method sends a GET_WEBXR_MESH RPC request to the client and waits for
    a response containing the detected environmental meshes from the WebXR AR session.

    The response contains mesh data including vertices, indices, semantic labels,
    and transformation matrices for each detected mesh.

    Usage Example::

        from vuer import Vuer, VuerSession
        from vuer.schemas import WebXRMesh, Scene
        from asyncio import sleep

        app = Vuer()

        @app.spawn(start=True)
        async def main(session: VuerSession):
            session.set @ Scene(
                children=[WebXRMesh(key="webxr-mesh", stream=False)]
            )

            await sleep(2)  # Wait for meshes to be detected

            # Request mesh data on-demand
            mesh_data = await session.get_webxr_mesh(key="webxr-mesh")

            meshes = mesh_data.value.get('meshes', [])
            print(f"Retrieved {len(meshes)} meshes")

            for mesh in meshes:
                vertices = mesh['vertices']
                indices = mesh['indices']
                semantic_label = mesh.get('semanticLabel', 'unknown')
                matrix = mesh['matrix']

                print(f"Mesh: {len(vertices)/3:.0f} vertices, label={semantic_label}")

    :param key: The key of the WebXRMesh component to query (default: "webxr-mesh")
    :param ttl: The time to live for the handler in seconds. If no response is received
                within this time, a TimeoutError is raised (default: 2.0)
    :return: ClientEvent containing mesh data in event.value['meshes']
    :raises asyncio.TimeoutError: If the client doesn't respond within ttl seconds
    :raises AssertionError: If websocket session is missing
    """
    assert self.CURRENT_WS_ID is not None, (
      "Websocket session is missing. CURRENT_WS_ID is None."
    )

    from vuer.events import GetWebXRMesh

    event = GetWebXRMesh(key=key)

    return await self.vuer.rpc(self.CURRENT_WS_ID, event, ttl=ttl)

  def send(self, event: ServerEvent) -> None:
    """
    Sending the event through the uplink queue.
    """
    assert self.CURRENT_WS_ID is not None, (
      "Websocket session is missing. CURRENT_WS_ID is None."
    )

    event_obj = event._serialize()

    # Since ts is a float, using use_single_float=True may cause precision loss.
    # Also, browsers only support millisecond precision for timestamps.
    # Therefore, convert ts to an integer in milliseconds before sending to the frontend.
    if "ts" in event_obj and isinstance(event_obj["ts"], float):
      event_obj["ts"] = int(event_obj["ts"] * 1000)
    event_bytes = packb(
      event_obj, use_single_float=True, use_bin_type=True, default=_default_encoder
    )

    return self.uplink_queue.append(event_bytes)

  async def rpc(self, event: ServerRPC, ttl=2.0) -> Union[ClientEvent, None]:
    """
    Send a ServerRPC event to the client and wait for a response through the session queue

    :param event: The ServerRPC event to send.
    :param ttl: The time to live for the handler. If the handler is not called within the time it gets removed from the handler list.
    :return: ClientEvent
    """
    rtype = event.rtype

    rpc_event = asyncio.Event()
    response = None

    async def response_handler(response_event: ClientEvent, _: "VuerSession") -> None:
      nonlocal response

      response = response_event
      rpc_event.set()

    # handle timeout
    clean = self.vuer.add_handler(rtype, response_handler, once=True)

    self.send(event)
    # await sleep(0.5)
    try:
      await asyncio.wait_for(rpc_event.wait(), ttl)
    except asyncio.TimeoutError as e:
      clean()
      raise e

    return response

  def popleft(self):
    try:
      return self.downlink_queue.popleft()
    except IndexError:
      return None

  def pop(self):
    try:
      return self.downlink_queue.pop()
    except IndexError:
      return None

  def clear(self):
    """clears all client messages"""
    self.downlink_queue.clear()

  def stream(self):
    yield from self.downlink_queue

  def spawn_task(self, task, name=None):
    """Spawn a task in the running asyncio event loop

    Useful for background tasks. Returns an asyncio task that can be canceled.

    .. code-block:: python
        :linenos:

        async background_task():
            print('\\rthis ran once')

        async long_running_bg_task():
            while True:
                await asyncio.sleep(1.0)
                print("\\rlong running background task is still running")

        @app.spawn_task
        async def main_fn(sess: VuerSession):
            # Prepare background tasks here:
            task = sess.spawn_task(background_task)
            long_running_task = sess.spawn_task(long_running_bg_task)

    Now to cancel a running task, simply

    .. code-block:: python
        :linenos:

        task.cancel()

    **Todos**

    ▫️ Add a way to automatically clean up when exiting the main_fn.
    """
    loop = asyncio.get_running_loop()
    return loop.create_task(task, name=name)

  async def till(self, event: str, timeout: float = None) -> ClientEvent:
    """Wait for and return an event of the specified type.

    This method registers a one-time handler for the specified event type
    and awaits its arrival. Useful for waiting on specific events like INIT.

    Example Usage::

        @app.spawn(start=True)
        async def main(session: VuerSession):
            # Wait for the INIT event from the client
            e = await session.till("INIT")
            client_type = e.value.get('clientType')  # 'python' or browser info

            if client_type == 'python':
                print("Python client connected!")
            else:
                print(f"Browser connected: {e.value.get('userAgent')}")

    :param event: The event type to wait for (e.g., "INIT", "CAMERA_MOVE")
    :param timeout: Optional timeout in seconds. Raises asyncio.TimeoutError if exceeded.
    :return: The ClientEvent of the specified type
    :raises asyncio.TimeoutError: If timeout is specified and exceeded
    """
    event_received = asyncio.Event()
    result = None

    async def handler(client_event: ClientEvent, _: "VuerSession") -> None:
      nonlocal result
      result = client_event
      event_received.set()

    cleanup = self.vuer.add_handler(event, handler, once=True)

    try:
      if timeout is not None:
        await asyncio.wait_for(event_received.wait(), timeout)
      else:
        await event_received.wait()
    except asyncio.TimeoutError:
      cleanup()
      raise

    return result

  async def forever(self):
    """Keep the session alive indefinitely.

    This is useful when you want to set up a scene and keep the server running
    without the session closing. The session will remain active until the client
    disconnects or the server is stopped.

    Example Usage::

        @app.spawn(start=True)
        async def main(session: VuerSession):
            session.set @ Scene(Box(args=[0.2, 0.2, 0.2], key="box"))
            await session.forever()
    """
    await asyncio.Event().wait()


DEFAULT_PORT = 8012
DEFAULT_CORS = "https://vuer.ai,https://staging.vuer.ai,https://dash.ml,http://localhost:8000,http://127.0.0.1:8000,*"
DEFAULT_CLIENT_ROOT: Path = Path(__file__).parent / "client_build"


@proto.prefix
class Vuer(Server):
  """Vuer Server

  This is the server for the Vuer client.

  Usage::

      app = Vuer()

      @app.spawn
      async def main(session: VuerSession):
           session.set @ Scene(children=[...])

      app.run()


  .. automethod:: bind
  .. automethod:: spawn
  .. automethod:: relay
  .. automethod:: bound_fn
  .. automethod:: spawn_task
  .. automethod:: get_url
  .. automethod:: send
  .. automethod:: rpc
  .. automethod:: rpc_stream
  .. automethod:: close_ws
  .. automethod:: uplink
  .. automethod:: downlink
  .. automethod:: add_handler
  .. automethod:: _ttl_handler
  .. automethod:: run
  """

  # Vuer-specific settings (host, cert, key, ca_cert inherited from Server)
  domain: str = EnvVar @ "VUER_DOMAIN" | "https://vuer.ai"
  client_url: Optional[str] = (
    None  # Optional override for domain (e.g., local client build)
  )

  port: int = EnvVar @ "VUER_PORT" | DEFAULT_PORT
  web_port: int = None  # Web development server port; None means same as port
  workspace_path: str = ""  # Path on vuer.ai workspace (e.g., "/workspace/scratch")
  cors: str = EnvVar @ "VUER_CORS" | DEFAULT_CORS
  workspace: Union[str, Path, List[Union[str, Path]], Workspace] = (
    EnvVar @ "VUER_WORKSPACE" | "."
  )
  # Deprecated: use workspace instead
  static_root: Union[str, Path, List[Union[str, Path]]] = None

  free_port: bool = False
  queue_len: int = 100
  queries: Dict = None  # URL query parameters to pass to client
  client_root: Path = DEFAULT_CLIENT_ROOT  # Path to client build directory
  verbose: bool = False  # Print server settings on startup

  def _proxy(self, ws_id) -> "VuerSession":
    """This is a proxy object that allows us to use the @ notation
    to send events to the client.

    :param ws_id: The websocket id.
    :return: A proxy object.
    """
    # todo: check if shallow copy suffices
    proxy = VuerSession(self, ws_id, queue_len=self.queue_len)

    return proxy

  def __post_init__(self):
    """Initialize Vuer after params-proto sets up fields."""

    # Handle deprecated static_root parameter
    if self.static_root is not None:
      warnings.warn(
        "static_root is deprecated, use workspace instead",
        DeprecationWarning,
        stacklevel=2,
      )
      self.workspace = workspace_from_config(self.static_root)
    else:
      # Convert workspace to Workspace instance if needed
      self.workspace = workspace_from_config(self.workspace)

    if self.client_url:
      self.client_url = self.client_url.format(
        ssl=self.ssl,
        local_ip=self.local_ip,
        **vars(self),
      )
      # this has to be done before self._init_app where cors is used.
      self.cors += "," + self.client_url

    if self.verbose:
      print("       ========= Arguments =========")
      for k, v in vars(self).items():
        if not k.startswith("_") and not callable(v):
          print(f"{k:>20} : {v}")
      print("       -----------------------------")
      print(f"""
{YELLOW}Tip:{RESET} Import {CYAN}dotvar.auto_load{RESET} {BOLD}before{RESET} vuer to load .env defaults.
{DIM}     Supports recursive variable resolution: ${{OTHER_VAR}}/path{RESET}

    {GREEN}import{RESET} {CYAN}dotvar.auto_load{RESET}  {DIM}# noqa{RESET}
    {GREEN}from{RESET} {CYAN}vuer{RESET} {GREEN}import{RESET} Vuer
""")

    # Initialize base Server (app, cors_context)
    self._init_app()

    self.handlers = defaultdict(dict)
    self.page = Page()
    self.ws: Dict[str, WebSocketResponse] = {}
    # List of spawn handlers with their filters: [{"fn": handler, "filters": {...}}, ...]
    self.spawn_handlers: List[Dict] = []
    self.spawned_coroutines = []

  @property
  def ssl(self) -> str:
    """Returns "s" if SSL is enabled, "" otherwise.

    Use in URL construction: f"http{self.ssl}://" or f"ws{self.ssl}://"
    """
    return "s" if self.cert else ""

  @property
  def local_ip(self) -> str:
    """Get the local LAN IP address.

    This is a well-known and safe approach for determining your local IP.
    It uses a UDP socket connection to determine the local IP address
    that would be used to reach external networks. No data is actually
    sent to the remote address.

    :return: The local IP address as a string, or "127.0.0.1" if unavailable.
    """
    try:
      s = stdlib_socket.socket(stdlib_socket.AF_INET, stdlib_socket.SOCK_DGRAM)
      s.connect(("8.8.8.8", 80))
      ip = s.getsockname()[0]
      s.close()
      return ip
    except Exception:
      return "127.0.0.1"

  async def relay(self, request):
    """This is the relay object for sending events to the server.

    Todo: add API for specifying the websocket ID. Or just broadcast to all.
    Todo: add type hint

    Interface:
        <uri>/relay?sid=<websocket_id>

    :return:
        - Status 200
        - Status 400

    """
    # todo: need to implement msgpack encoding, interface
    bytes = request.bytes()
    session_id = request.rel_url.query.get("sid", None)
    if session_id is None:
      return Response(status=400)
    elif session_id in self.ws:
      self.send(ws_id=session_id, event_bytes=bytes)

      return Response(status=200)
    elif session_id == "*":
      # print broadcast
      for ws_id in self.ws:
        try:
          self.send(ws_id=ws_id, event_bytes=bytes)
        except Exception as e:
          print("Exception: ", e)
          return Response(status=502, text=str(e))

      return Response(status=200)
    else:
      return Response(status=400)

  @property
  def workspace_prefix(self) -> "Url":
    """URL prefix for workspace files, accessible over the network.

    Uses local_ip and respects SSL settings for network access (e.g., VR devices).
    """
    return Url(f"http{self.ssl}://{self.local_ip}:{self.port}/workspace")

  @property
  def localhost_prefix(self) -> "Url":
    """URL prefix for workspace files, localhost only.

    Use this for local development when network access is not needed.
    """
    return Url(f"http{self.ssl}://localhost:{self.port}/workspace")

  def format_urls(self) -> list:
    """Generate all relevant URLs for display based on connection context.

    Returns a list of tuples (label, url) for different connection modes.
    Intelligently handles:
    - Local development (localhost)
    - LAN connections
    - Remote vuer.ai connections
    - Port display (hides default ports)
    - WebSocket parameter inclusion (when needed)

    :return: List of (label, url) tuples
    """
    urls = []

    # Determine if this is remote or local
    # Remote if: domain is set AND not localhost/127.0.0.1
    # Check by domain value (strip protocol if present)
    domain_lower = self.domain.lower() if self.domain else ""
    is_local = not domain_lower or domain_lower in [
      "localhost",
      "127.0.0.1",
      "http://localhost",
      "https://localhost",
    ]
    is_remote = not is_local

    # Determine protocols and ports
    use_ssl = is_remote
    protocol = "https" if use_ssl else "http"
    ws_protocol = "wss" if use_ssl else "ws"

    effective_web_port = self.web_port if self.web_port is not None else self.port
    default_web_port = 443 if use_ssl else 80

    # Build path from workspace_path
    path = self.workspace_path.rstrip("/") if self.workspace_path else ""

    # Helper to build URL
    def build_url(host, port, ws_host, ws_port, label):
      # Base URL with path
      if port != default_web_port:
        base = f"{protocol}://{host}:{port}{path}"
      else:
        base = f"{protocol}://{host}{path}"

      # Add WebSocket parameter if needed
      if ws_port != effective_web_port or is_remote:
        ws_url = f"{ws_protocol}://{ws_host}:{ws_port}"
        return (label, f"{base}?ws={ws_url}")
      else:
        return (label, base)

    # Generate URLs based on context
    if is_local:
      # Local localhost
      urls.append(
        build_url(
          "localhost", effective_web_port, "localhost", self.port, "Local (localhost)"
        )
      )

      # Local LAN (if different from localhost)
      if self.local_ip not in ["127.0.0.1", "localhost"]:
        urls.append(
          build_url(
            self.local_ip, effective_web_port, self.local_ip, self.port, "Local (LAN)"
          )
        )
    else:
      # Remote URL - strip protocol from domain if present
      remote_domain = domain_lower.replace("https://", "").replace("http://", "")
      urls.append(
        build_url(
          remote_domain,
          effective_web_port,
          self.local_ip,
          self.port,
          f"Remote ({remote_domain})",
        )
      )

    return urls

  # ** downlink message queue methods**
  async def bound_fn(self, session_proxy: VuerSession):
    """This is the default generator function in the socket connection handler"""
    print("default socket worker is up, adding clientEvents ")
    session_proxy.downlink_queue.append(INIT)

    while True:
      client_event = yield NOOP

      if client_event.etype in self.handlers:
        handlers = self.handlers[client_event.etype]

        # make a copy of the keys to avoid dict size change during iteration.
        handler_keys = list(handlers.keys())

        for key in handler_keys:  # type: EventHandler
          # todo: see if we want to add throttling here.

          fn_factory = handlers.get(key, None)
          # the handler dict can change size during iteration, so we need to
          #   handle the None case.
          if fn_factory is None:
            print("this handler is gone")
            continue

          self._add_task(fn_factory(client_event, session_proxy), ws_id=session_proxy.CURRENT_WS_ID)
          await sleep(0.0)

      session_proxy.downlink_queue.append(client_event)

  def spawn(self, fn: SocketHandler = None, start=False, **filters):
    """Register a spawn handler with optional client filtering.

    Handlers are matched against the client's INIT event. Only the first
    matching handler runs; a warning is shown if multiple handlers match.

    Filter syntax supports fnmatch wildcards:
      - `client="python"` - exact match
      - `platform="*"` - wildcard match

    Example::

        @app.spawn(client="python")
        async def python_handler(session: VuerSession):
            # Only for Python clients
            ...

        @app.spawn(client="browser")
        async def browser_handler(session: VuerSession):
            # Only for browser clients
            ...

        @app.spawn  # No filter = matches all clients
        async def default_handler(session: VuerSession):
            ...

    :param fn: The function to spawn.
    :param start: Start server after binding
    :param filters: Filter criteria to match against INIT event value
                    (e.g., client="python", platform="Darwin")
    :return: BoundFn instance that can be called later with .start()
    """
    # Handle @app.spawn without parentheses (fn is the decorated function)
    if callable(fn) and not start and not filters:
      self.spawn_handlers.append({"fn": fn, "filters": {}})
      return fn

    def decorator(handler_fn):
      self.spawn_handlers.append({"fn": handler_fn, "filters": filters})
      return handler_fn

    wrapper = _SpawnWrapper(self, decorator, start=start)

    if fn is None:
      # Called as @app.spawn() or @app.spawn(client="...")
      return wrapper
    else:
      # Called as app.spawn(fn)
      return wrapper(fn)

  def bind(self, fn=None, start=False):
    """
    Bind an asynchronous generator function for use in socket connection handler. The function should be a generator that yields Page objects.

    :param fn: The function to bind.
    :param start: Start server after binding
    :return: BoundFn instance that can be called later with .start()
    """
    wrapper = BoundFn(self, "bound_fn", start=start)

    if fn is None:
      # this returns a decorator
      return wrapper
    else:
      return wrapper(fn)

  def get_url(self, host: str = "localhost"):
    """
    Get the URL for the Vuer client.

    :param host: The host to use in the websocket URL (e.g., "localhost" or IP address).
    :return: The URL for the Vuer client.
    """
    base_url = self.client_url or self.domain
    uri = f"ws{self.ssl}://{host}:{self.port}"

    if self.queries:
      query_str = "&".join([f"{k}={v}" for k, v in self.queries.items()])
      return f"{base_url}?ws={uri}&" + query_str

    return f"{base_url}?ws={uri}"

  async def send(self, ws_id, event: ServerEvent = None, event_bytes=None):
    ws = self.ws[ws_id]

    if event_bytes is None:
      assert isinstance(event, ServerEvent), "event must be a ServerEvent type object."
      event_obj = event._serialize()
      # Since ts is a float, using use_single_float=True may cause precision loss.
      # Also, browsers only support millisecond precision for timestamps.
      # Therefore, convert ts to an integer in milliseconds before sending to the frontend.
      if "ts" in event_obj and isinstance(event_obj["ts"], float):
        event_obj["ts"] = int(event_obj["ts"] * 1000)
      event_bytes = packb(
        event_obj, use_single_float=True, use_bin_type=True, default=_default_encoder
      )
    else:
      assert event is None, "Can not pass in both at the same time."

    return await ws.send_bytes(event_bytes)

  async def rpc(self, ws_id, event: ServerRPC, ttl=2.0) -> Union[ClientEvent, None]:
    """RPC only takes a single response. For multi-response streaming,
    we need to build a new one

    Question is whether we want to make this RPC an awaitable funciton.

    :param ttl: The time to live for the handler. If the handler is not called within the time it gets removed from the handler list.
    """
    etype = event.etype

    # this is the event type for responses
    rtype = f"{etype}_RESPONSE@{event.uuid}"

    rpc_event = asyncio.Event()
    response = None

    async def response_handler(response_event: ClientEvent, _: "VuerSession") -> None:
      nonlocal response

      response = response_event
      rpc_event.set()

    # handle timeout
    clean = self.add_handler(rtype, response_handler, once=True)

    # note: by-pass the uplink message queue entirely, rendering it immune
    #   to the effects of queue length.
    await self.send(ws_id, event)
    # await sleep(0.5)
    try:
      await asyncio.wait_for(rpc_event.wait(), ttl)
    except asyncio.TimeoutError as e:
      clean()
      raise e

    return response

  async def rpc_stream(self, ws_id, event: ServerEvent = None, event_bytes=None):
    """This RPC offers multiple responses."""
    raise NotImplementedError("This is not implemented yet.")

  async def close_ws(self, ws_id):
    # Cancel any spawned tasks associated with this websocket
    self._cancel_tasks(ws_id)
    # uplink is moved to the proxy object. Cleaned by garbage collection.
    # self.uplink_queue.pop(ws_id)
    try:
      ws = self.ws.pop(ws_id)
      await ws.close()
    except KeyError:
      pass

  async def uplink(self, proxy: VuerSession):
    ws_id = proxy.CURRENT_WS_ID
    queue = proxy.uplink_queue

    print(f"\rUplink task running. id:{ws_id}")
    while True:
      if ws_id not in self.ws:
        print(f"uplink:{ws_id} is not in websocket pool")
        return

      if queue:
        msg_bytes = queue.popleft()
        try:
          # todo: spawn new uplink everytime connections happen
          await self.send(ws_id, event_bytes=msg_bytes)
        except ConnectionResetError as e:
          await self.close_ws(ws_id)
          print("Connection closed due to", e)
          break
        except ConnectionClosedError as e:
          await self.close_ws(ws_id)
          print("Connection error, closed due to", e)
          break
        except Exception as e:
          await self.close_ws(ws_id)
          print(f"Connection error, closed.\nError: [{e}]")
          raise e
          break
      else:
        await sleep(0.0)

  async def downlink(self, request: Request, ws: WebSocketResponse):
    """
    The websocket handler for receiving messages from the client.

    :param ws: The websocket.
    :param request: The request (unused).
    :return: None
    """
    # generate an ID to save in the connection pool
    ws_id = uuid4()
    self.ws[ws_id] = ws

    print(f"websocket is connected. id:{ws_id}")
    vuer_proxy = self._proxy(ws_id)

    generator = self.bound_fn(vuer_proxy)

    self._add_task(self.uplink(vuer_proxy), ws_id=ws_id)

    # Track if we've received INIT and spawned a handler
    init_received = False
    matched_handler = None

    async def spawn_matching_handler(client_info: dict):
      """Find and spawn the first matching handler based on INIT event."""
      nonlocal matched_handler

      if not self.spawn_handlers:
        return

      matching = []
      for entry in self.spawn_handlers:
        if _match_filters(client_info, **entry["filters"]):
          matching.append(entry)
      if not matching:
        return

      if len(matching) > 1:
        handler_names = [e["fn"].__name__ for e in matching]
        warnings.warn(
          f"Multiple spawn handlers match {client_info}: "
          f"{handler_names}. Only the first ({handler_names[0]}) will run.",
          stacklevel=2,
        )

      matched_handler = matching[0]["fn"]

      async def handler():
        try:
          await matched_handler(vuer_proxy)
        except Exception as e:
          await self.close_ws(ws_id)
          raise e
        await self.close_ws(ws_id)

      self._add_task(handler(), ws_id=ws_id)

    if hasattr(generator, "__anext__"):
      serverEvent = await generator.__anext__()
    else:
      serverEvent = next(generator)

    assert serverEvent != "FRAME", "The first event can not be a FRAME event."

    if serverEvent != "NOOP":
      # todo: use the uplink stream instead of sending out directly
      vuer_proxy @ serverEvent
      await sleep(0.0)

    try:
      async for msg in ws:
        payload = unpackb(msg.data, raw=False)
        # todo: we want to enforce the payload to contain the timestamp.
        clientEvent = ClientEvent._deserialize(**payload)

        # Check for INIT event to spawn matching handler
        if not init_received and clientEvent.etype == "INIT":
          init_received = True
          client_info = clientEvent.value if isinstance(clientEvent.value, dict) else {}
          await spawn_matching_handler(client_info)

        if hasattr(generator, "__anext__"):
          serverEvent = await generator.asend(clientEvent)
        else:
          serverEvent = generator.send(clientEvent)

        while serverEvent == "FRAME":
          serverEvent = cast(Frame, serverEvent)
          # Frame object is a macro, only send the payload.
          vuer_proxy @ serverEvent.data
          await sleep(1 / serverEvent.frame_rate)
          if hasattr(generator, "__anext__"):
            serverEvent = await generator.asend(NullEvent())
          else:
            serverEvent = generator.send(NullEvent())

        if serverEvent != "NOOP":
          vuer_proxy @ serverEvent

      print("websocket is now disconnected. Removing the socket.")
      if not init_received and self.spawn_handlers:
        handler_names = [e["fn"].__name__ for e in self.spawn_handlers]
        warnings.warn(
          f"Client disconnected without sending INIT event. "
          f"Spawn handlers were never called: {handler_names}",
          stacklevel=2,
        )
      await self.close_ws(ws_id)
    except Exception as e:
      print("websocket is now disconnected. Removing the socket.")
      raise e
      await self.close_ws(ws_id)

  def add_handler(
    self,
    event_type: str,
    fn: EventHandler = None,
    once: bool = False,
  ) -> Callable[[], None]:
    """Adding event handlers to the vuer server.

    :param event_type: The event type to handle.
    :param fn: The function to handle the event.
    :param once: Whether to remove the handler after the first call.
        This is useful for RPC, which cleans up after itself.
        The issue is for RPC, the `key` also needs to match. So we hack it here to use
        a call specific event_type to enforce the cleanup.

    # Usage:

    As a decorator::

        app = Vuer()
        @app.add_handler("CAMERA_MOVE")
        def on_camera(event: ClientEvent, session: VuerSession):
            print("camera event", event.etype, event.value)

    As a function::

        app = Vuer()
        def on_camera(event: ClientEvent, session: VuerSession):
            print("camera event", event.etype, event.value)

        app.add_handler("CAMERA_MOVE", on_camera)
        app.run()
    """

    if fn is None:
      return lambda fn: self.add_handler(event_type, fn, once=once)

    handler_id = uuid4()

    def cleanup():
      del self.handlers[event_type][handler_id]

    if once:

      async def fn_once(*args, **kwargs):
        """This is a wrapper function removes the handler on the first trigger."""
        cleanup()
        return await fn(*args, **kwargs)

      self.handlers[event_type][handler_id] = fn_once
    else:
      self.handlers[event_type][handler_id] = fn

    return cleanup

  def _ttl_handler(self, ttl, cleanup):
    async def ttl_handler():
      await sleep(ttl)
      "remove the handler after ttl"
      try:
        cleanup()
      except:
        pass

    return ttl_handler()

  async def socket_index(self, request: BaseRequest):
    """This is the relay object for sending events to the server.

    Todo: add API for specifying the websocket ID. Or just broadcast to all.
    Todo: add type hint

    Interface:
        <uri>/relay?sid=<websocket_id>

    :return:
        - Status 200
        - Status 400

    """
    headers = request.headers
    if "websocket" != headers.get(UPGRADE, "").lower().strip():
      return await handle_file_request(request, self.client_root, filename="index.html")
    else:
      return await websocket_handler(request, self.downlink)

  def add_route(self, path, fn: Callable, method="GET", content_type="text/html"):
    if self.verbose:
      print("========= Adding Route =========")
      print("        path:", path)
      print("          fn:", fn)
      print("      method:", method)
      print("content_type:", content_type)
      print("--------------------------------")

    async def handler(request: Request):
      try:
        output = fn()
        return Response(text=output, content_type=content_type)
      except Exception as e:
        print("\033[91m" + str(e) + "\033[0m", flush=True)
        return Response(status=500, text=str(e))

    self._add_route(path, handler, method=method)

  def run(self, free_port=None, *args, **kwargs):
    """
    Run the server.

    .. deprecated::
        Use :meth:`start` instead. This method will be removed in a future version.
    """
    import warnings

    warnings.warn(
      "Vuer.run() is deprecated, use Vuer.start() instead",
      DeprecationWarning,
      stacklevel=2,
    )
    self.start(free_port=free_port, *args, **kwargs)

  def start(self, free_port=None, *args, **kwargs):
    # protocol, host, _ = self.uri.split(":")
    # port = int(_)
    if free_port or self.free_port:
      import time

      from killport import kill_ports

      try:
        kill_ports(ports=[self.port])
      except ProcessLookupError:
        # Race condition - process disappeared during check
        pass  # Port may already be free
      except ImportError as e:
        # psutil not available
        print(f"Note: killport requires psutil: {e}")
      except Exception as e:
        # Catch psutil.NoSuchProcess and other killport failures
        if "NoSuchProcess" in type(e).__name__ or "process no longer exists" in str(e):
          pass  # Race condition - process disappeared
        else:
          print(f"Warning: Could not free port {self.port}: {type(e).__name__}: {e}")
      time.sleep(0.01)

    # Serve the client build locally.
    # self._socket("", self.downlink)
    # self._static_file("", Path(__file__).parent / "client_build", filename="index.html")

    # use the same endpoint for websocket and file serving.
    self._add_route("", self.socket_index, method="GET")
    self._add_static("/assets", self.client_root / "assets")
    self._static_file("/editor", self.client_root, "editor/index.html")

    # Register workspace routes
    handler = partial(workspace_handler, workspace=self.workspace)
    self._add_route("/workspace/{filename:.*}", handler, method="GET")

    # Register directory mounts
    for mount in self.workspace.mounts:
      if mount["type"] == "mount":
        self._add_route(
          f"{mount['path']}/{{filename:.*}}", mount["handler"], method="GET"
        )

    self._add_route("/relay", self.relay, method="POST")

    if self.client_url:
      # the ssl is a property.
      base_url = self.client_url.format(
        ssl=self.ssl, local_ip=self.local_ip, **vars(self)
      )
    else:
      base_url = self.domain

    # Format workspace paths for display
    workspace_lines = []
    for path in self.workspace.absolute_paths:
      workspace_lines.append(f" {DIM}·{RESET} file://{path}")
    workspace_display = "\n".join(workspace_lines)

    print(f"""{BOLD}Vuer Server{RESET}

{CYAN}Local:{RESET}   {base_url}?ws=ws{self.ssl}://localhost:{self.port}
{CYAN}Network:{RESET} {base_url}?ws=ws{self.ssl}://{self.local_ip}:{self.port}

{CYAN}Workspace:{RESET}

{workspace_display}
{DIM}->{RESET} {base_url}/workspace
""")

    Server.start(self)

  async def loop_forever(self):
    """Deprecated: Use ``await session.forever()`` instead.

    .. deprecated:: 0.1.2
        This method will be removed in a future version.
        Use ``await session.forever()`` for cleaner session-scoped waiting.
    """
    import warnings
    warnings.warn(
      "vuer.loop_forever() is deprecated, use 'await session.forever()' instead",
      DeprecationWarning,
      stacklevel=2,
    )
    while True:
      await sleep(1000_000_000_000.0)
