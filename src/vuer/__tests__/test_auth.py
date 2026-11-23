"""Access tokens, roles and origin checks (vuer.auth and the server handshake)."""

import asyncio
import base64
import json
import os
import stat

import aiohttp
import pytest
from aiohttp.test_utils import TestServer
from msgpack import packb, unpackb

from vuer import Vuer
from vuer.auth import (
  MAX_USES,
  TokenLedger,
  issue_token,
  load_secret,
  origin_allowed,
  parse_origins,
  verify_token,
  viewer_may_send,
)
from vuer.cli.commands.token import Token, token_uses

SECRET = "s" * 43


def payload(token):
  encoded = token.split(".")[0]
  return json.loads(base64.urlsafe_b64decode(encoded + "=" * (-len(encoded) % 4)))


# -- tokens -------------------------------------------------------------------


def test_single_use_token_payload_has_no_uses_field():
  token = issue_token(SECRET, role="viewer", now=0.0)
  assert set(payload(token)) == {"v", "role", "nonce", "exp"}
  assert verify_token(SECRET, token, now=1.0)["uses"] == 1


def test_uses_are_signed_and_tampering_is_rejected():
  five = issue_token(SECRET, uses=5, now=0.0)
  many = issue_token(SECRET, uses=None, now=0.0)
  assert payload(five)["uses"] == 5 and payload(many)["uses"] == 0
  assert verify_token(SECRET, five, now=1.0)["uses"] == 5
  assert verify_token(SECRET, many, now=1.0)["uses"] is None
  body = payload(five) | {"uses": 50}
  encoded = base64.urlsafe_b64encode(json.dumps(body).encode()).rstrip(b"=").decode()
  assert verify_token(SECRET, encoded + "." + five.split(".")[1], now=1.0) is None
  # change the role: the signature no longer matches.
  body = payload(five) | {"role": "controller"}
  encoded = base64.urlsafe_b64encode(json.dumps(body).encode()).rstrip(b"=").decode()
  assert verify_token(SECRET, encoded + "." + five.split(".")[1], now=1.0) is None
  assert verify_token("another-secret" * 4, five, now=1.0) is None
  for bad in ("", "a.b", "a.b.c", None, 3, "x" * 2000):
    assert verify_token(SECRET, bad, now=1.0) is None


def test_expiry():
  token = issue_token(SECRET, ttl=60, now=0.0)
  assert verify_token(SECRET, token, now=59.0)
  assert verify_token(SECRET, token, now=60.0) is None


def test_bad_arguments():
  for bad in (0, MAX_USES + 1, -1, True, 2.0):
    with pytest.raises(ValueError):
      issue_token(SECRET, uses=bad)
  with pytest.raises(ValueError):
    issue_token(SECRET, role="admin")
  with pytest.raises(ValueError):
    issue_token(SECRET, ttl=0)


def test_ledger_counts_redemptions():
  ledger = TokenLedger(SECRET)
  one = issue_token(SECRET, role="controller", now=0.0)
  assert ledger.redeem(one, now=1.0) == "controller"
  assert ledger.redeem(one, now=1.0) is None

  three = issue_token(SECRET, uses=3, now=0.0)
  assert [ledger.redeem(three, now=1.0) for _ in range(4)] == ["viewer"] * 3 + [None]

  reusable = issue_token(SECRET, uses=None, ttl=100, now=0.0)
  assert all(ledger.redeem(reusable, now=1.0) == "viewer" for _ in range(60))
  assert ledger.redeem(reusable, now=100.0) is None
  assert ledger.redeem("garbage", now=1.0) is None


def test_viewer_event_allow_list():
  assert viewer_may_send("INIT")
  assert viewer_may_send("GRAB_RENDER_RESPONSE@1234")
  assert not viewer_may_send("CAMERA_MOVE")
  assert viewer_may_send("CAMERA_MOVE", allowed=("INIT", "CAMERA_MOVE"))


def test_secret_file_is_owner_only(tmp_path, monkeypatch):
  monkeypatch.delenv("VUER_AUTH_SECRET", raising=False)
  path = tmp_path / "vuer" / "auth-secret"
  secret = load_secret(path)
  assert load_secret(path) == secret and len(secret) >= 32
  assert stat.S_IMODE(os.stat(path).st_mode) == 0o600
  os.chmod(path, 0o644)
  with pytest.raises(ValueError):
    load_secret(path)


def test_secret_from_environment(monkeypatch):
  monkeypatch.setenv("VUER_AUTH_SECRET", SECRET)
  assert load_secret() == SECRET


def test_cli_token(capsys, monkeypatch):
  monkeypatch.setenv("VUER_AUTH_SECRET", SECRET)
  assert Token(uses=3, url="http://localhost:8012")() == 0
  link = capsys.readouterr().out.strip()
  assert link.startswith("http://localhost:8012#token=")
  assert verify_token(SECRET, link.split("#token=")[1])["uses"] == 3
  assert Token(role="controller", reusable=True)() == 0
  token = capsys.readouterr().out.strip()
  assert verify_token(SECRET, token)["role"] == "controller" and verify_token(SECRET, token)["uses"] is None
  assert token_uses(1, True) is None
  with pytest.raises(ValueError):
    token_uses(3, True)
  assert Token(uses=0)() == 1


# -- origins ------------------------------------------------------------------


@pytest.mark.parametrize(
  "origin, allowed",
  [
    ("https://vuer.ai", True),
    ("https://staging.vuer.ai", True),
    ("https://a.b.vuer.ai", True),
    ("http://localhost:5173", True),
    ("http://127.0.0.1:8012", True),
    ("https://evilvuer.ai", False),
    ("https://vuer.ai.evil.com", False),
    ("https://evil.com:1.vuer.ai", False),
    ("http://localhost.evil.com:80", False),
    ("http://localhost:80@evil.com", False),
    ("http://example.com", False),
    (None, True),
  ],
)
def test_default_origin_patterns(origin, allowed):
  from vuer.auth import DEFAULT_ORIGINS

  assert origin_allowed(origin, parse_origins(DEFAULT_ORIGINS)) is allowed


def test_star_allows_every_origin():
  assert origin_allowed("http://example.com", ["*"])


# -- server handshake -----------------------------------------------------------


def make_app(**kwargs):
  app = Vuer(**kwargs)
  app._add_route("", app.socket_index, method="GET")
  app._add_route("/relay", app.relay, method="POST")
  app._add_route("/ping", ping, method="GET")
  return app


async def ping(request):
  return aiohttp.web.Response(text="pong")


async def connect(server, query="", headers=None):
  session = aiohttp.ClientSession()
  try:
    ws = await session.ws_connect(server.make_url("/" + query), headers=headers or {})
  except Exception:
    await session.close()
    raise
  return session, ws


async def first_event(ws):
  msg = await asyncio.wait_for(ws.receive(), 2)
  return unpackb(msg.data, raw=False)


async def send(ws, etype, value=None):
  await ws.send_bytes(packb({"etype": etype, "ts": 0, "value": value}, use_bin_type=True))


@pytest.fixture
async def auth_server():
  app = make_app(auth=True, auth_secret=SECRET)
  server = TestServer(app.app, host="127.0.0.1")
  await server.start_server()
  yield app, server
  await server.close()


@pytest.fixture
async def open_server():
  app = make_app()
  server = TestServer(app.app, host="127.0.0.1")
  await server.start_server()
  yield app, server
  await server.close()


async def test_no_token_is_rejected_before_upgrade(auth_server):
  app, server = auth_server
  with pytest.raises(aiohttp.WSServerHandshakeError) as info:
    await connect(server)
  assert info.value.status == 401


async def test_one_time_link_opens_one_session(auth_server):
  app, server = auth_server
  token = app.issue_token("viewer")
  session, ws = await connect(server, f"?token={token}")
  info = await first_event(ws)
  assert info["etype"] == "SERVER_INFO" and info["value"]["role"] == "viewer"
  await session.close()
  with pytest.raises(aiohttp.WSServerHandshakeError) as err:
    await connect(server, f"?token={token}")
  assert err.value.status == 401


async def test_n_use_link(auth_server):
  app, server = auth_server
  token = app.issue_token("viewer", uses=3)
  sessions = [await connect(server, f"?token={token}") for _ in range(3)]
  with pytest.raises(aiohttp.WSServerHandshakeError):
    await connect(server, f"?token={token}")
  for session, _ in sessions:
    await session.close()


async def test_bearer_header(auth_server):
  app, server = auth_server
  token = app.issue_token("controller")
  session, ws = await connect(server, headers={"Authorization": f"Bearer {token}"})
  assert (await first_event(ws))["value"]["role"] == "controller"
  await session.close()


async def test_viewer_events_are_dropped_and_controller_events_arrive(auth_server):
  app, server = auth_server
  seen = []

  @app.add_handler("CAMERA_MOVE")
  async def on_camera(event, session):
    seen.append((session.role, event.value))

  roles = []

  @app.spawn
  async def main(session):
    roles.append(session.role)
    await session.forever()

  viewer, viewer_ws = await connect(server, f"?token={app.issue_token('viewer')}")
  controller, controller_ws = await connect(server, f"?token={app.issue_token('controller')}")
  for ws, value in ((viewer_ws, "from-viewer"), (controller_ws, "from-controller")):
    await send(ws, "INIT", {"client": "test"})
    await send(ws, "CAMERA_MOVE", value)
  await asyncio.sleep(0.3)
  assert seen == [("controller", "from-controller")]
  assert sorted(roles) == ["controller", "viewer"]
  await viewer.close()
  await controller.close()


async def test_spawn_filter_by_role(auth_server):
  app, server = auth_server
  ran = []

  @app.spawn(role="controller")
  async def main(session):
    ran.append(session.role)

  for role in ("viewer", "controller"):
    session, ws = await connect(server, f"?token={app.issue_token(role)}")
    await send(ws, "INIT", {"client": "test"})
    await asyncio.sleep(0.2)
    await session.close()
  assert ran == ["controller"]


async def test_relay_needs_a_controller_token(auth_server):
  app, server = auth_server
  async with aiohttp.ClientSession() as http:
    async with http.post(server.make_url("/relay?sid=*"), data=b"") as response:
      assert response.status == 401
    viewer = app.issue_token("viewer")
    async with http.post(server.make_url("/relay?sid=*"), data=b"", headers={"Authorization": f"Bearer {viewer}"}) as response:
      assert response.status == 401
    controller = app.issue_token("controller")
    async with http.post(server.make_url("/relay?sid=*"), data=b"", headers={"Authorization": f"Bearer {controller}"}) as response:
      assert response.status == 200


async def test_websocket_origin_check(open_server):
  app, server = open_server
  with pytest.raises(aiohttp.WSServerHandshakeError) as info:
    await connect(server, headers={"Origin": "https://evil.example"})
  assert info.value.status == 403
  for origin in ("https://vuer.ai", "http://localhost:5173", f"http://{server.host}:{server.port}"):
    session, ws = await connect(server, headers={"Origin": origin})
    await session.close()


async def test_cors_headers(open_server):
  app, server = open_server
  async with aiohttp.ClientSession() as http:
    async with http.get(server.make_url("/ping"), headers={"Origin": "https://vuer.ai"}) as response:
      assert response.headers["Access-Control-Allow-Origin"] == "https://vuer.ai"
    async with http.get(server.make_url("/ping"), headers={"Origin": "https://evil.example"}) as response:
      assert "Access-Control-Allow-Origin" not in response.headers
    preflight = {
      "Origin": "http://localhost:3000",
      "Access-Control-Request-Method": "GET",
      "Access-Control-Request-Private-Network": "true",
    }
    async with http.options(server.make_url("/ping"), headers=preflight) as response:
      assert response.status == 200
      assert response.headers["Access-Control-Allow-Origin"] == "http://localhost:3000"
      assert response.headers["Access-Control-Allow-Private-Network"] == "true"
    async with http.options(server.make_url("/ping"), headers={**preflight, "Origin": "https://evil.example"}) as response:
      assert response.status == 403


async def test_auth_off_is_unchanged(open_server):
  app, server = open_server
  seen = []

  @app.add_handler("CAMERA_MOVE")
  async def on_camera(event, session):
    seen.append(session.role)

  session, ws = await connect(server)
  info = await first_event(ws)
  assert info["etype"] == "SERVER_INFO" and info["value"]["role"] is None
  await send(ws, "INIT", {"client": "test"})
  await send(ws, "CAMERA_MOVE", 1)
  await asyncio.sleep(0.2)
  assert seen == [None]
  await session.close()
  with pytest.raises(RuntimeError):
    app.issue_token()


async def test_python_client_sends_the_token(auth_server):
  from vuer import VuerClient

  app, server = auth_server
  token = app.issue_token("controller")
  async with VuerClient(uri=f"ws://{server.host}:{server.port}", token=token) as client:
    event = await client.recv(timeout=2)
    assert event.etype == "SERVER_INFO" and event.value["role"] == "controller"
