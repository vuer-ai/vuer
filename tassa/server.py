import json
from functools import partial

from sanic import Sanic

from tassa.events import Event, ClientEvent
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
        if self.debug:
            return f"http://localhost:8000/demos/vqn-dash/tassa?ws={self.uri}/feed&" + query_str
        else:
            return f"http://dash.ml/demos/vqn-dash/tassa?ws={self.uri}/feed&" + query_str

    async def feed(self, request, ws):
        """
        The websocket handler for the Tassa.
        :param ws: The websocket.
        :param request: The request (unused).
        :return: None
        """
        generator = self.bound_fn()
        async for msg in ws:
            event = ClientEvent(**json.loads(msg))
            if event @ "INIT":
                res = next(generator)
            else:
                res = generator.send(event)

            res_str = res.serialize()
            res_json = json.dumps(res_str)
            await ws.send(res_json)

    def run(self, *args, **kwargs):
        print("App running at: " + self.get_url())
        protocol, host, port = self.uri.split(":")
        host = host[2:]
        super().run(host=host, port=int(port), *args, **kwargs)
