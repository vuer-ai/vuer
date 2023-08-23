import json
from asyncio import sleep, iscoroutinefunction
from collections import deque
from functools import partial
from typing import cast

from sanic import Sanic
from sanic.websocket import WebSocketProtocol, WebSocketConnection
from websockets import ConnectionClosedOK, ConnectionClosedError

from tassa.events import ClientEvent, NullEvent, ServerEvent, NOOP, Frame, Set, Update
from tassa.schemas import Page

from sanic_cors import CORS, cross_origin


class At:
    def __init__(self, fn):
        self.fn = fn

    def __matmul__(self, arg):
        return self.fn(arg)


class Tassa(Sanic):
    """
    A Tassa is a document that can be rendered in a browser.
    """

    ws = None

    # need to be awaited
    def __matmul__(self, msg: ServerEvent):
        """
        Send a message to the client. Need to be awaited
        :param msg:
        :return: dqueue
        """
        assert isinstance(msg, ServerEvent), "msg must be a ServerEvent type object."
        assert not isinstance(msg, Frame), "Frame event is only used in tassa.bind method."
        self.uplink_queue.append(msg)
        return self.popleft()

    @property
    def set(self) -> At:
        return At(lambda element: self @ Set(element))

    @property
    def update(self) -> At:
        return At(lambda element: self @ Update(element))

    def __init__(
        self,
        ws="ws://localhost:8012",
        name="tassa",
        uri=None,
        free_port=True,
        static_root=".",
        queue_len=None,
        cors_origin="https://dash.ml",
        **queries,
    ):
        super().__init__(name)
        self.page = Page()
        self.uri = ws
        self.queries = queries
        self.free_port = free_port
        self.static_root = static_root
        self.domain = uri or "https://dash.ml/tassa"

        self.downlink_queue = deque(maxlen=queue_len)
        self.uplink_queue = deque(maxlen=queue_len)

        if cors_origin:
            CORS(self, resources={r"/local/*": {"origins": cors_origin}})

        self.add_websocket_route(self.downlink, "")
        # serve local files via /local endpoint
        self.static("/local", self.static_root or ".")
        self.add_route(self.relay, "/relay", methods=["POST"])
        self.add_task(self.uplink)

    async def relay(self, request):
        data = request.json
        self @ ServerEvent(**data)

    # ** downlink message queue methods**
    async def on_socket(self):
        """This is the default socket connection handler"""
        print("default socket worker is up, adding clientEvents ")
        while True:
            clientEvent = yield NOOP
            self.downlink_queue.append(clientEvent)

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
        self.downlink_queue.clear()

    def stream(self):
        yield from self.downlink_queue

    def spawn(self, fn=None, start=False):
        """
        Spawn a function as a task. This is useful in the following scenario:

        code::


        :param fn: The function to spawn.
        :param start: Start server after binding
        :return: None
        """

        def wrap_fn(fn):
            self.add_task(fn)
            if start:
                self.run()

        if fn is None:
            # this returns a decorator function
            return partial(wrap_fn)
        else:
            wrap_fn(fn)

    def bind(self, fn=None, start=False):
        """
        Bind a function to the Tassa. The function should be a generator that yields Page objects.
        :param fn: The function to bind.
        :return: None
        """

        def wrap_fn(fn):
            self.on_socket = fn
            if start:
                self.run()

        if fn is None:
            # this returns a decorator function
            return partial(wrap_fn)
        else:
            wrap_fn(fn)

    def get_url(self):
        """
        Get the URL for the Tassa.
        :return: The URL for the Tassa.
        """
        query_str = "&".join([f"{k}={v}" for k, v in self.queries.items()])
        return f"{self.domain}?ws={self.uri}&" + query_str

    async def send(self, ws, event: ServerEvent):
        assert isinstance(event, ServerEvent), "event must be a ServerEvent type object."
        res_str = event.serialize()
        res_json = json.dumps(res_str)
        try:
            return await ws.send(res_json)
        except ConnectionClosedOK:
            self.ws = None
            print("Connection closed")
        except ConnectionClosedError:
            self.ws = None
            print("Connection error, closed")

    async def uplink(self):
        print("\rUplink handler waiting for socket connection")

        while True:
            while self.ws is None:
                await sleep(0.2)
            if self.uplink_queue:
                msg = self.uplink_queue.popleft()
                await self.send(self.ws, msg)
            else:
                await sleep(0.0)

    async def downlink(self, request, ws: WebSocketConnection):
        """
        The websocket handler for the Tassa.
        :param ws: The websocket.
        :param request: The request (unused).
        :return: None
        """
        print("websocket is now connected")
        generator = self.on_socket()

        self.ws = ws

        async for msg in ws:
            clientEvent = ClientEvent(**json.loads(msg))

            if clientEvent == "INIT":
                if hasattr(generator, "__anext__"):
                    serverEvent = await generator.__anext__()
                else:
                    serverEvent = next(generator)
            else:
                if hasattr(generator, "__anext__"):
                    serverEvent = await generator.asend(clientEvent)
                else:
                    serverEvent = generator.send(clientEvent)

            while serverEvent == "FRAME":
                serverEvent = cast(Frame, serverEvent)
                # Frame object is a macro, only send the payload.
                await self.send(ws, serverEvent.data)
                await sleep(1 / serverEvent.frame_rate)
                if hasattr(generator, "__anext__"):
                    serverEvent = await generator.asend(NullEvent())
                else:
                    serverEvent = generator.send(NullEvent())

            if serverEvent != "NOOP":
                await self.send(ws, serverEvent)

        print("websocket is now disconnected. Removing the socket.")
        self.ws = None

    def run(self, kill=None, *args, **kwargs):
        print("Tassa running at: " + self.get_url())

        protocol, host, _ = self.uri.split(":")
        port = int(_)

        if kill or self.free_port:
            import time
            from killport import kill_ports

            kill_ports(ports=[port])
            time.sleep(0.01)

        host = host[2:]
        super().run(host=host, port=port, *args, **kwargs)
