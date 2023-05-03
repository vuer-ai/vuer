import json
from asyncio import sleep
from functools import partial
from sanic import Sanic
from tassa.events import Event, ClientEvent, NullEvent, ServerEvent
from tassa.schemas import Page


class Tassa(Sanic):
    """
    A Tassa is a document that can be rendered in a browser.
    """

    def __init__(self, ws="ws://localhost:8012", name="tassa", uri=None, free_port=True, **queries):
        super().__init__(name)
        self.page = Page()
        self.uri = ws
        self.bound_fn = None
        self.queries = queries
        self.free_port = free_port
        self.domain = uri or "https://dash.ml/tassa"

    def bind(self, fn=None, start=False):
        """
        Bind a function to the Tassa. The function should be a generator that yields Page objects.
        :param fn: The function to bind.
        :return: None
        """

        def wrap_fn(fn, start=False):
            self.bound_fn = fn
            self.add_websocket_route(self.feed, '')
            if start:
                self.run()

        if fn is None:
            # this returns a decorator function
            return partial(wrap_fn, start=start)
        else:
            wrap_fn(fn, start=start)

    def get_url(self):
        """
        Get the URL for the Tassa.
        :return: The URL for the Tassa.
        """
        query_str = "&".join([f"{k}={v}" for k, v in self.queries.items()])
        return f"{self.domain}?ws={self.uri}&" + query_str

    def send(self, ws, event: ServerEvent):
        res_str = event.serialize()
        res_json = json.dumps(res_str)
        return ws.send(res_json)

    async def feed(self, request, ws):
        """
        The websocket handler for the Tassa.
        :param ws: The websocket.
        :param request: The request (unused).
        :return: None
        """
        generator = self.bound_fn()
        async for msg in ws:
            clientEvent = ClientEvent(**json.loads(msg))

            if clientEvent == "INIT":
                serverEvent = next(generator)
            else:
                serverEvent = generator.send(clientEvent)

            while serverEvent == "FRAME":
                await self.send(ws, serverEvent.data)
                await sleep(0.001)

                serverEvent = generator.send(NullEvent())

            if serverEvent != "NOOP":
                await self.send(ws, serverEvent)

    def run(self, kill=None, *args, **kwargs):
        print("App running at: " + self.get_url())
        protocol, host, _ = self.uri.split(":")
        port = int(_)

        if kill or self.free_port:
            import time
            from killport import kill_ports
            kill_ports(ports=[port])
            time.sleep(0.01)

        host = host[2:]
        super().run(host=host, port=port, *args, **kwargs)
