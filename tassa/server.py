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

    def __init__(self, uri, name="tassa", debug=False, **queries):
        super().__init__(name)
        self.page = Page()
        self.uri = uri
        self.bound_fn = None
        self.queries = queries
        self.is_debug = debug

    def bind(self, fn=None, start=False):
        """
        Bind a function to the Tassa. The function should be a generator that yields Page objects.
        :param fn: The function to bind.
        :return: None
        """

        def wrap_fn(fn, start=False):
            self.bound_fn = fn
            self.add_websocket_route(self.feed, "/feed")
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
        if self.is_debug:
            return f"http://localhost:8000/demos/vqn-dash/tassa?ws={self.uri}/feed&" + query_str
        else:
            return f"http://dash.ml/demos/vqn-dash/tassa?ws={self.uri}/feed&" + query_str

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

            await self.send(ws, serverEvent)

    def run(self, *args, **kwargs):
        print("App running at: " + self.get_url())
        protocol, host, port = self.uri.split(":")
        host = host[2:]
        super().run(host=host, port=int(port), *args, **kwargs)
