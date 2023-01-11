from sanic import Sanic, Request, Websocket

app = Sanic("CMX Backend")


@app.websocket("/socket-echo")
async def echo(request: Request, ws: Websocket):
    async for msg in ws:
        await ws.send(msg)


@app.route("/log")
async def log(request: Request, ws: Websocket):
    pass