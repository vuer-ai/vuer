"""Latest-frame-wins queues: unit tests and a slow-client test through the uplink."""

import asyncio
from collections import deque

import pytest
from msgpack import unpackb

from vuer import Vuer
from vuer.events import ClientEvent, Remove, Set, Update, Upsert
from vuer.queues import LatestFrameQueue, client_frame_key, make_queue, server_frame_key
from vuer.schemas import Box, Scene


# ---------------------------------------------------------------- queue unit tests


def test_same_key_keeps_only_latest():
  q = LatestFrameQueue()
  for i in range(5):
    q.append(f"frame-{i}", frame_key="cam")
  assert len(q) == 1 and q.coalesced == 4
  assert q.popleft() == "frame-4"
  assert not q


def test_newer_frame_moves_behind_events_sent_after_the_old_one():
  q = LatestFrameQueue()
  q.append("A1", frame_key="A")
  q.append("remove-B")  # no key: never dropped
  q.append("A2", frame_key="A")
  assert list(q) == ["remove-B", "A2"]


def test_keyless_items_and_other_keys_are_kept_in_order():
  q = LatestFrameQueue()
  q.append("a1", frame_key="a")
  q.append("x")
  q.append("b1", frame_key="b")
  q.append("y")
  q.append("a2", frame_key="a")
  assert [q.popleft() for _ in range(len(q))] == ["x", "b1", "y", "a2"]
  with pytest.raises(IndexError):
    q.popleft()


def test_maxlen_discards_oldest_like_deque():
  q = LatestFrameQueue(maxlen=3)
  for i in range(5):
    q.append(i)
  assert list(q) == [2, 3, 4]
  assert q.pop() == 4


def test_tombstones_are_compacted():
  q = LatestFrameQueue()
  q.append("head")
  for i in range(10_000):
    q.append(i, frame_key="k")
  assert len(q) == 2
  assert len(q._entries) < 100


def test_key_function_and_clear():
  q = LatestFrameQueue(key=lambda item: item[0])
  q.append(("a", 1))
  q.append(("a", 2))
  assert list(q) == [("a", 2)]
  q.clear()
  assert len(q) == 0 and list(q) == []


def test_make_queue_policies():
  assert isinstance(make_queue("fifo", 10), deque)
  assert isinstance(make_queue("latest", 10), LatestFrameQueue)
  with pytest.raises(ValueError):
    make_queue("newest", 10)


def test_server_frame_keys():
  box = Box(key="box")
  assert server_frame_key(Set(Scene())) == ("SET",)
  assert server_frame_key(Upsert(box)) == ("UPSERT", None, ("box",))
  assert server_frame_key(Upsert(box, to="parent")) == ("UPSERT", "parent", ("box",))
  assert server_frame_key(Update({"key": "box", "position": [0, 0, 0]})) == ("UPDATE", None, ("box",))
  # Different element sets do not replace one another.
  assert server_frame_key(Upsert(box, Box(key="b2"))) != server_frame_key(Upsert(box))
  # Nodes without keys, removals and other events are never coalesced.
  assert server_frame_key(Update({"position": [0, 0, 0]})) is None
  assert server_frame_key(Remove("box")) is None


def test_client_frame_keys():
  assert client_frame_key(ClientEvent(etype="CAMERA_MOVE", key="defaultCamera")) == ("CAMERA_MOVE", "defaultCamera")
  assert client_frame_key(ClientEvent(etype="CLICK", key="box")) is None
  assert client_frame_key(ClientEvent(etype="INIT")) is None


def test_invalid_policy_is_rejected():
  with pytest.raises(ValueError):
    Vuer(uplink_policy="newest")


# ---------------------------------------------------------------- slow client


class SlowSocket:
  """A fake websocket whose send_bytes blocks until the test releases it."""

  def __init__(self):
    self.received = []
    self.gate = asyncio.Event()
    self.sending = asyncio.Event()

  async def send_bytes(self, data):
    self.sending.set()
    await self.gate.wait()
    self.received.append(unpackb(data, raw=False))

  async def close(self):
    pass


def _describe(msg):
  if msg["etype"] == "REMOVE":
    return ("REMOVE", tuple(msg["data"]["keys"]))
  node = msg["data"]["nodes"][0]
  return (msg["etype"], node["key"], node["position"][0])


async def _stream_to_slow_client(policy):
  app = Vuer(uplink_policy=policy)
  ws = SlowSocket()
  app.ws["ws-1"] = ws
  session = app._proxy("ws-1")
  uplink = asyncio.ensure_future(app.uplink(session))

  # The first frame goes out at once; the slow client then blocks the uplink.
  session.upsert @ Box(key="robot", position=[0, 0, 0])
  await asyncio.wait_for(ws.sending.wait(), 1)

  # Thirty more frames for two elements, plus a removal, arrive while the client is busy.
  for i in range(1, 31):
    session.upsert @ Box(key="robot", position=[i, 0, 0])
    session.upsert @ Box(key="target", position=[-i, 0, 0])
    if i == 10:
      session.remove @ "old-marker"
  queued = len(session.uplink_queue)

  ws.gate.set()
  for _ in range(200):
    await asyncio.sleep(0)
    if not session.uplink_queue:
      break
  await asyncio.sleep(0.01)
  uplink.cancel()
  return queued, [_describe(m) for m in ws.received]


async def test_latest_policy_sends_only_newest_frames_to_slow_client():
  queued, received = await _stream_to_slow_client("latest")
  assert queued == 3
  assert received == [
    ("UPSERT", "robot", 0),  # already in flight when the client stalled
    ("REMOVE", ("old-marker",)),  # never dropped, sent in order
    ("UPSERT", "robot", 30),
    ("UPSERT", "target", -30),
  ]


async def test_fifo_policy_is_unchanged():
  queued, received = await _stream_to_slow_client("fifo")
  assert queued == 61
  assert len(received) == 62
  assert received[0] == ("UPSERT", "robot", 0)
  assert received[-1] == ("UPSERT", "target", -30)


def test_downlink_latest_policy_coalesces_streaming_client_events():
  app = Vuer(downlink_policy="latest")
  session = app._proxy("ws-1")
  for i in range(5):
    session.downlink_queue.append(ClientEvent(etype="CAMERA_MOVE", key="cam", value={"i": i}))
    session.downlink_queue.append(ClientEvent(etype="CLICK", key="box", value={"i": i}))
  events = list(session.downlink_queue)
  assert [e.etype for e in events].count("CLICK") == 5
  assert [e.value["i"] for e in events if e.etype == "CAMERA_MOVE"] == [4]
