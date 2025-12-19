import asyncio
from asyncio import sleep
from collections import defaultdict, deque
from functools import partial
from pathlib import Path
from typing import Callable, Deque, Dict, Union, cast
from uuid import uuid4

from aiohttp.hdrs import UPGRADE
from aiohttp.web_request import BaseRequest, Request
from aiohttp.web_response import Response
from aiohttp.web_ws import WebSocketResponse
from msgpack import packb, unpackb
from params_proto import proto
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
from vuer.types import EventHandler, SocketHandler


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


class VuerSession:
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
    event_bytes = packb(event_obj, use_single_float=True, use_bin_type=True)

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

  @property
  def set(self) -> At:
    """Used exclusively to set the scene.

    the @SET operator is responsible for setting the root node of the scene.

    Examples:
        proxy @ Set(Scene(children=[...]))

        or

        app.set @ Scene(children=[...])
    """
    return At(lambda element: self @ Set(element))

  @property
  def update(self) -> At:
    """Used to update existing elements. NOOP if an element does not exist.

    Supports passing in a list of elements. (Thank God I implemented this...
    so handy! - Ge)

    Example Usage::

        app.update @ [element1, element2, ...]
    """

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
    """Used to add elements to a specific parent.

    Requires a parentKey, or treats the Scene root node as the default parent.

    Example Usage::

        app.add(element1, element2, ..., to=parentKey.)

    or using the Scene root node as the default parent: ::

        app.add @ element1

    """

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
    """Upsert elements to a specific parent.

    Requires a parentKey, or treats the Scene root node as the default parent.

    Example Usage::

        app.upsert(element1, element2, ..., to=parentKey.)

    or using the Scene root node as the default parent: ::

        app.upsert @ element1

    """

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
    """Remove elements by keys.

    Example Usage::

        app.remove @ ["key1", "key2", ...]

    or a single key: ::

        app.remove @ "key1"

    """

    @At
    def _remove(keys):
      if isinstance(keys, list):
        self @ Remove(*keys)
      elif isinstance(keys, tuple):
        self @ Remove(*keys)
      else:
        self @ Remove(keys)

    return _remove

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
  domain: str = "https://vuer.ai"  # URL of the Vuer web client
  port: int = DEFAULT_PORT  # Server port (default 8012)
  free_port: bool = False  # Kill existing process on port if True
  static_root: str = "."  # Root directory for serving static files
  queue_len: int = 100  # Max event queue length to prevent memory blowup
  cors: str = "https://vuer.ai,https://staging.vuer.ai,https://dash.ml,http://localhost:8000,http://127.0.0.1:8000,*"  # CORS allowed origins
  queries: Dict = None  # URL query parameters to pass to client

  client_root: Path = Path(__file__).parent / "client_build"  # Path to client build directory

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
    if self.verbose:
      print("========= Arguments =========")
      for k, v in vars(self).items():
        print(f" {k} = {v},")
      print("-----------------------------")

    # Initialize base Server (app, cors_context)
    self._init_app()

    self.handlers = defaultdict(dict)
    self.page = Page()
    self.ws: Dict[str, WebSocketResponse] = {}
    self.socket_handler: SocketHandler = None
    self.spawned_coroutines = []

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
      return Response(400)
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

          self._add_task(fn_factory(client_event, session_proxy))
          await sleep(0.0)

      session_proxy.downlink_queue.append(client_event)

  def spawn(self, fn: SocketHandler = None, start=False):
    """Bind the socket handler function `fn` to vuer, and start
    the event loop if `start` is `True`.

    Note: this is really a misnomer.

    :param fn: The function to spawn.
    :param start: Start server after binding
    :return: BoundFn instance that can be called later with .start()
    """
    wrapper = BoundFn(self, "socket_handler", start=start)

    if fn is None:
      # this returns a decorator
      return wrapper
    else:
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

  def get_url(self):
    """
    Get the URL for the Tassa.
    :return: The URL for the Tassa.
    """
    if self.port != DEFAULT_PORT:
      uri = f"ws://localhost:{self.port}"

      if self.queries:
        query_str = "&".join([f"{k}={v}" for k, v in self.queries.items()])
        return f"{self.domain}?ws={uri}&" + query_str

      return f"{self.domain}?ws={uri}"
    else:
      if self.queries:
        query_str = "&".join([f"{k}={v}" for k, v in self.queries.items()])
        return f"{self.domain}?" + query_str

      return f"{self.domain}"

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
      event_bytes = packb(event_obj, use_single_float=True, use_bin_type=True)
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

    self._add_task(self.uplink(vuer_proxy))

    if self.socket_handler is not None:

      async def handler():
        try:
          await self.socket_handler(vuer_proxy)
        except Exception as e:
          await self.close_ws(ws_id)
          # todo: absorb non-user induced exceptions.
          raise e

        await self.close_ws(ws_id)

      task = self._add_task(handler())

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
        clientEvent = ClientEvent(**payload)

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
      stacklevel=2
    )
    self.start(free_port=free_port, *args, **kwargs)

  def start(self, free_port=None, *args, **kwargs):
    import os

    # protocol, host, _ = self.uri.split(":")
    # port = int(_)
    if free_port or self.free_port:
      import time

      from killport import kill_ports

      try:
        kill_ports(ports=[self.port])
      except ProcessLookupError as e:
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

    # serve local files via /static endpoint
    self._add_static("/static", self.static_root)
    print("Serving file://" + os.path.abspath(self.static_root), "at", "/static")
    self._add_route("/relay", self.relay, method="POST")

    print("Visit: " + self.get_url())

    super().start()
