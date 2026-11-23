"""Wire protocol 2: binary arrays (MessagePack ExtType 0x56) and the handshake."""

import asyncio
import struct

import numpy as np
import pytest
from msgpack import ExtType, packb, unpackb

from vuer.events import ClientEvent
from vuer.protocol import (
  DTYPE_CODES,
  MSGPACKR_TYPED_ARRAY_EXT,
  NDARRAY_EXT,
  PROTOCOL_VERSION,
  decode_ndarray,
  encode_ndarray,
  pack_event,
  parse_protocol,
  resolve_array_protocol,
  unpack_event,
)

ALL_DTYPES = ["uint8", "int8", "uint16", "int16", "uint32", "int32", "float16", "float32", "float64", "int64", "uint64", "bool"]


def sample(dtype, shape):
  size = int(np.prod(shape)) if shape else 1
  if dtype == "bool":
    return (np.arange(size) % 3 == 0).reshape(shape)
  return (np.arange(size) % 120).astype(dtype).reshape(shape)


@pytest.mark.parametrize("dtype", ALL_DTYPES)
@pytest.mark.parametrize("shape", [(), (0,), (40,), (2, 3, 7), (0, 3)])
def test_round_trip_every_dtype_and_shape(dtype, shape):
  array = sample(dtype, shape)
  ext = encode_ndarray(array)
  assert ext.code == NDARRAY_EXT
  decoded = decode_ndarray(ext.data)
  assert decoded.dtype == np.dtype(dtype)
  assert decoded.shape == array.shape
  np.testing.assert_array_equal(decoded, array)


def test_header_layout():
  ext = encode_ndarray(np.zeros((2, 3), dtype=np.float32))
  version, code, ndim, reserved, d0, d1 = struct.unpack_from("<BBBBII", ext.data)
  assert (version, code, ndim, reserved, d0, d1) == (1, 8, 2, 0, 2, 3)
  assert len(ext.data) == 4 + 8 + 6 * 4
  assert DTYPE_CODES[code] == "<f4"


def test_non_contiguous_and_big_endian_input():
  base = np.arange(200, dtype=np.float64).reshape(10, 20)
  strided = base[::2, ::3]
  assert not strided.flags.c_contiguous
  np.testing.assert_array_equal(decode_ndarray(encode_ndarray(strided).data), strided)

  big = np.arange(50, dtype=">i4")
  decoded = decode_ndarray(encode_ndarray(big).data)
  assert decoded.dtype == np.dtype("<i4")
  np.testing.assert_array_equal(decoded, big)
  # the payload itself is little-endian
  assert encode_ndarray(big).data[-4:] == struct.pack("<i", 49)


def test_unsupported_dtype_raises():
  with pytest.raises(TypeError):
    encode_ndarray(np.zeros(20, dtype=np.complex64))


def test_corrupt_payload_raises():
  data = bytearray(encode_ndarray(np.zeros(20, dtype=np.float32)).data)
  with pytest.raises(ValueError):
    decode_ndarray(bytes(data[:-1]))
  data[0] = 9
  with pytest.raises(ValueError):
    decode_ndarray(bytes(data))


def test_small_arrays_stay_lists_and_scalars_unwrap():
  event = {"position": np.array([1.0, 2.0, 3.0]), "matrix": np.eye(4), "big": np.zeros(17, np.float32), "n": np.int64(3)}
  raw = unpackb(pack_event(event, binary=True), raw=False)
  assert raw["position"] == [1.0, 2.0, 3.0]
  assert len(raw["matrix"]) == 4 and raw["matrix"][0] == [1.0, 0.0, 0.0, 0.0]
  assert isinstance(raw["big"], ExtType) and raw["big"].code == NDARRAY_EXT
  assert raw["n"] == 3


def test_legacy_encoding_sends_lists():
  event = {"big": np.arange(100, dtype=np.float32)}
  raw = unpackb(pack_event(event, binary=False), raw=False)
  assert raw["big"] == list(range(100))


def test_array_list_max_option():
  event = {"a": np.zeros(20, np.uint8)}
  raw = unpackb(pack_event(event, binary=True, array_list_max=32), raw=False)
  assert raw["a"] == [0] * 20


def test_unpack_event_decodes_both_extensions():
  array = np.arange(30, dtype=np.float32).reshape(5, 6)
  msg = packb({"a": encode_ndarray(array), "t": ExtType(MSGPACKR_TYPED_ARRAY_EXT, bytes([7]) + np.arange(4, dtype="<f4").tobytes())})
  out = unpack_event(msg)
  np.testing.assert_array_equal(out["a"], array)
  np.testing.assert_array_equal(out["t"], np.arange(4, dtype=np.float32))
  # unknown extensions pass through
  assert unpack_event(packb(ExtType(5, b"x"))) == ExtType(5, b"x")


def test_resolve_array_protocol():
  assert resolve_array_protocol("auto", None) == "list"
  assert resolve_array_protocol("auto", 1) == "list"
  assert resolve_array_protocol("auto", PROTOCOL_VERSION) == "binary"
  assert resolve_array_protocol("list", PROTOCOL_VERSION) == "list"
  assert resolve_array_protocol("binary", None) == "binary"
  with pytest.raises(ValueError):
    resolve_array_protocol("fast", 2)


def test_parse_protocol():
  assert parse_protocol("2") == 2
  assert parse_protocol(2) == 2
  assert parse_protocol(None) is None
  assert parse_protocol("x") is None
  assert parse_protocol(0) is None


def test_build_socket_url():
  from vuer.client import build_socket_url

  assert build_socket_url("ws://localhost:8012") == "ws://localhost:8012/?protocol=2"
  assert build_socket_url("ws://h:1/p?a=1&protocol=1") == "ws://h:1/p?a=1&protocol=2"
  assert build_socket_url("ws://h:1", protocol=None) == "ws://h:1"


# ---- end to end through the aiohttp server -------------------------------------------


@pytest.fixture
def make_app():
  from vuer import Vuer

  def _make(**kwargs):
    app = Vuer(**kwargs)
    app._add_route("", app.socket_index, method="GET")
    return app

  return _make


async def _receive_until(ws, etype, timeout=3.0):
  while True:
    msg = await asyncio.wait_for(ws.receive(), timeout)
    payload = unpack_event(msg.data)
    if payload.get("etype") == etype:
      return msg.data, payload


async def _run_session(app, query, init_value):
  from aiohttp.test_utils import TestClient, TestServer

  from vuer.events import ServerEvent

  class Big(ServerEvent):
    etype = "BIG"

  @app.spawn
  async def main(session):
    session @ Big(data={"points": np.arange(300, dtype=np.float32).reshape(100, 3), "pos": np.array([1.0, 2.0, 3.0])})
    await session.forever()

  async with TestClient(TestServer(app.app)) as client:
    ws = await client.ws_connect("/" + query)
    _, info = await _receive_until(ws, "SERVER_INFO")
    await ws.send_bytes(packb({"etype": "INIT", "ts": 0, "value": init_value}))
    raw, big = await _receive_until(ws, "BIG")
    await ws.close()
    return info, raw, big


async def test_e2e_protocol_2_client_gets_binary_arrays(make_app):
  app = make_app()
  info, raw, big = await _run_session(app, "?protocol=2", {"client": "test", "protocol": 2})
  assert info["value"] == {"protocol": 2, "arrayProtocol": "binary", "role": None}
  points = big["data"]["points"]
  assert isinstance(points, np.ndarray) and points.dtype == np.float32 and points.shape == (100, 3)
  assert big["data"]["pos"] == [1.0, 2.0, 3.0]
  # the bytes on the wire hold the ext type and the raw float32 data, not 300 msgpack floats
  assert np.arange(300, dtype="<f4").tobytes() in raw
  assert len(raw) < 1300


async def test_e2e_legacy_client_gets_lists(make_app):
  app = make_app()
  info, raw, big = await _run_session(app, "", {"client": "test"})
  assert info["value"]["arrayProtocol"] == "list"
  points = unpackb(raw, raw=False)["data"]["points"]
  assert isinstance(points, list) and points[1] == [3.0, 4.0, 5.0]


async def test_e2e_init_announcement_upgrades_session(make_app):
  app = make_app()
  info, raw, big = await _run_session(app, "", {"client": "test", "protocol": 2})
  assert isinstance(big["data"]["points"], np.ndarray)


async def test_e2e_list_compat_flag_overrides(make_app):
  app = make_app(array_protocol="list")
  info, raw, big = await _run_session(app, "?protocol=2", {"client": "test", "protocol": 2})
  assert info["value"]["arrayProtocol"] == "list"
  assert isinstance(unpackb(raw, raw=False)["data"]["points"], list)


async def test_e2e_server_decodes_client_binary_arrays(make_app):
  from aiohttp.test_utils import TestClient, TestServer

  app = make_app()
  received = asyncio.get_running_loop().create_future()

  @app.add_handler("UPLOAD")
  async def on_upload(event, session):
    received.set_result(event.value)

  async with TestClient(TestServer(app.app)) as client:
    ws = await client.ws_connect("/?protocol=2")
    await ws.send_bytes(packb({"etype": "INIT", "ts": 0, "value": {"protocol": 2}}))
    await ws.send_bytes(packb({"etype": "UPLOAD", "ts": 0, "value": encode_ndarray(np.ones((4, 5), np.uint16))}))
    value = await asyncio.wait_for(received, 3.0)
    await ws.close()
  assert isinstance(value, np.ndarray) and value.shape == (4, 5) and value.dtype == np.uint16


def test_bad_array_protocol_option_raises():
  from vuer import Vuer

  with pytest.raises(ValueError):
    Vuer(array_protocol="fast")


async def test_e2e_python_client_announces_protocol_2(make_app):
  from aiohttp.test_utils import TestServer

  from vuer.client import VuerClient
  from vuer.events import ServerEvent

  class Big(ServerEvent):
    etype = "BIG"

  app = make_app()
  uploaded = asyncio.get_running_loop().create_future()

  @app.add_handler("UPLOAD")
  async def on_upload(event, session):
    uploaded.set_result((event.value, session.protocol))

  @app.spawn
  async def main(session):
    session @ Big(data=np.arange(64, dtype=np.int16).reshape(8, 8))
    await session.forever()

  server = TestServer(app.app)
  await server.start_server()
  try:
    async with VuerClient(uri=f"ws://127.0.0.1:{server.port}") as client:
      info = await client.recv(timeout=3)
      assert info.etype == "SERVER_INFO" and client.server_protocol == 2
      big = await client.recv(timeout=3)
      assert isinstance(big.data, np.ndarray) and big.data.shape == (8, 8) and big.data.dtype == np.int16
      await client.send(ClientEvent(etype="UPLOAD", value=np.ones(32, np.float32)))
      value, protocol = await asyncio.wait_for(uploaded, 3)
  finally:
    await server.close()
  assert protocol == 2
  assert isinstance(value, np.ndarray) and value.dtype == np.float32 and value.shape == (32,)
