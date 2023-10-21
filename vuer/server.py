import asyncio
import json
from asyncio import sleep
from collections import deque, defaultdict
from functools import partial
from typing import cast
from uuid import uuid4

from msgpack import packb
from params_proto import Proto, PrefixProto
from websockets import ConnectionClosedError

from vuer.base import Server
from vuer.events import ClientEvent, NullEvent, ServerEvent, NOOP, Frame, Set, Update, INIT
from vuer.schemas import Page


class At:
    def __init__(self, fn):
        self.fn = fn

    def __matmul__(self, arg):
        return self.fn(arg)


class Vuer(PrefixProto, Server):
    """
    A Vuer is a document that can be rendered in a browser.
    """

    name = "vuer"
    uri = "ws://localhost:8012"
    # change to vuer.dash.ml
    domain = "https://dash.ml/vuer"
    port = 8012
    free_port = True
    static_root = "."
    queue_len = None
    # cors = "https://dash.ml,http://localhost:8000,http://127.0.0.1:8000,*"
    queries = Proto({}, help="query parameters to pass")

    WEBSOCKET_MAX_SIZE = 2 ** 28

    device = "cuda"

    # need to be awaited
    def __matmul__(self, msg: ServerEvent):
        """
        Send a message to the client. Need to be awaited
        :param msg:
        :return: dqueue
        """
        assert isinstance(msg, ServerEvent), "msg must be a ServerEvent type object."
        assert not isinstance(msg, Frame), "Frame event is only used in vuer.bind method."
        # print(f'only supports 1 socket connection atm. n={len(self.ws)}')
        last_key = list(self.ws.keys())[-1]
        self.uplink_queue[last_key].append(msg)
        return None

    @property
    def set(self) -> At:
        return At(lambda element: self @ Set(element))

    @property
    def update(self) -> At:
        return At(lambda element: self @ Update(element))

    def __post_init__(self):
        # todo: what is this?
        Server.__post_init__(self)

        # todo: can remove
        self.page = Page()

        que_maker = partial(deque, maxlen=self.queue_len)
        self.downlink_queue = que_maker()
        self.uplink_queue = defaultdict(que_maker)

        self.ws = {}
        self.spawned_fn = None
        self.spawned_coroutines = []

    async def relay(self, request):
        data = request.json
        self @ ServerEvent(**data)

    # ** downlink message queue methods**
    async def bound_fn(self):
        """This is the default socket connection handler"""
        print("default socket worker is up, adding clientEvents ")
        self.downlink_queue.append(INIT)

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
        "clears all client messages"
        self.downlink_queue.clear()

    def stream(self):
        yield from self.downlink_queue

    def spawn_task(self, task):
        loop = asyncio.get_running_loop()
        return loop.create_task(task)

    def spawn(self, fn=None, start=False):
        """
        Spawn a function as a task. This is useful in the following scenario:

        code::


        :param fn: The function to spawn.
        :param start: Start server after binding
        :return: None
        """

        def wrap_fn(fn):
            self.spawned_fn = fn
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
            self.bound_fn = fn
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
        if self.queries:
            query_str = "&".join([f"{k}={v}" for k, v in self.queries.items()])
            return f"{self.domain}?ws={self.uri}&" + query_str

        return f"{self.domain}?ws={self.uri}"

    async def send(self, ws_id, event: ServerEvent):
        ws = self.ws[ws_id]
        assert isinstance(event, ServerEvent), "event must be a ServerEvent type object."
        res_obj = event.serialize()
        res_bytes = packb(res_obj, use_bin_type=True)
        return await ws.send_bytes(res_bytes)
        # res_json_str = json.dumps(res_str)
        # return await ws.send_str(res_json_str)

    async def close_ws(self, ws_id):
        self.uplink_queue.pop(ws_id)
        ws = self.ws.pop(ws_id)
        await ws.close()

    async def uplink(self, ws_id):
        print(f"\rUplink task running:{ws_id}")
        while True:
            if ws_id not in self.ws:
                print(f"uplink:{ws_id} is not in websocket pool")
                return

            queue = self.uplink_queue[ws_id]

            if queue:
                msg = queue.popleft()
                try:
                    # todo: spawn new uplink everytime connections happen
                    await self.send(ws_id, msg)
                except ConnectionResetError:
                    await self.close_ws(ws_id)
                    print("Connection closed")
                    break
                except ConnectionClosedError:
                    await self.close_ws(ws_id)
                    print("Connection error, closed")
                    break
                except Exception as e:
                    await self.close_ws(ws_id)
                    print(f"Connection error, closed.\nError: [{e}]")
                    raise e
                    break
            else:
                await sleep(0.0)

    async def downlink(self, request, ws):
        """
        The websocket handler for the Tassa.
        :param ws: The websocket.
        :param request: The request (unused).
        :return: None
        """
        print("websocket is now connected")
        generator = self.bound_fn()

        # key = random()
        ws_id = uuid4()
        self.ws[ws_id] = ws
        self._add_task(self.uplink(ws_id))

        if self.spawned_fn is not None:
            task = self._add_task(self.spawned_fn(ws_id))

        if hasattr(generator, "__anext__"):
            serverEvent = await generator.__anext__()
        else:
            serverEvent = next(generator)

        assert serverEvent != "FRAME", "The first event can not be a FRAME event."

        if serverEvent != "NOOP":
            # todo: use the uplink stream instead of sending out directly
            self @ serverEvent
            await sleep(0.0)

        try:
            # do everything here
            async for msg in ws:

                clientEvent = ClientEvent(**json.loads(msg.data))

                if hasattr(generator, "__anext__"):
                    serverEvent = await generator.asend(clientEvent)

                else:
                    serverEvent = generator.send(clientEvent)

                while serverEvent == "FRAME":
                    serverEvent = cast(Frame, serverEvent)
                    # Frame object is a macro, only send the payload.
                    self @ serverEvent.data
                    await sleep(1 / serverEvent.frame_rate)
                    if hasattr(generator, "__anext__"):
                        serverEvent = await generator.asend(NullEvent())
                    else:
                        serverEvent = generator.send(NullEvent())

                if serverEvent != "NOOP":
                    self @ serverEvent
                    # await self.send(ws, serverEvent)

            print("websocket is now disconnected. Removing the socket.")
            self.ws.pop(ws_id, None)
        except:
            print("websocket is now disconnected. Removing the socket.")
            self.ws.pop(ws_id, None)

    def add_handler(self, event_type, fn):
        handler_id = uuid4()
        self.handlers[event_type][handler_id] = fn

        def cleanup():
            del self.handlers[event_type][handler_id]

        return cleanup

    def run(self, kill=None, *args, **kwargs):
        print("Vuer running at: " + self.get_url())

        # protocol, host, _ = self.uri.split(":")
        # port = int(_)

        if kill or self.free_port:
            import time
            from killport import kill_ports

            kill_ports(ports=[self.port])
            time.sleep(0.01)

        # host = host[2:]

        self._socket("", self.downlink)
        # serve local files via /static endpoint
        self._static("/static", self.static_root)
        print("serving static files from", self.static_root, "at", "/static")
        self._route("/relay", self.relay, method="POST")
        # self._socket()
        super().run()
