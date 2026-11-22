"""Session message queues.

A Vuer session buffers events in two queues: the uplink queue (server to
client) and the downlink queue (client to server). By default both are a
``collections.deque`` with ``maxlen=queue_len``. That is the "fifo" policy.

With the "latest" policy, an event that carries a *frame key* replaces any
older event with the same frame key that is still waiting in the queue. A slow
client then receives the newest frame instead of a growing backlog of stale
frames. Events without a frame key are never dropped by coalescing.

The newer event goes to the end of the queue (the older one is dropped), so
the order relative to other events stays correct. For example, with
``Upsert(A, v1), Remove(B), Upsert(A, v2)`` queued, the client receives
``Remove(B), Upsert(A, v2)``.
"""

from collections import deque
from typing import Any, Callable, Deque, Hashable, Iterator, List, Optional

UPLINK_POLICIES = ("fifo", "latest")

# Streaming client events that the "latest" policy coalesces in the downlink
# queue. Each is keyed by (etype, key), so different cameras or hands do not
# replace one another.
DOWNLINK_FRAME_EVENTS = (
  "CAMERA_MOVE",
  "CAMERA_UPDATE",
  "CAMERA_VIEW",
  "HAND_MOVE",
  "CONTROLLER_MOVE",
  "BODY_MOVE",
  "HEAD_MOVE",
  "OBJECT_MOVE",
)

_DROPPED = object()


class LatestFrameQueue:
  """A deque-like queue where the latest item for each frame key wins.

  It supports the parts of the ``collections.deque`` API that Vuer uses:
  ``append``, ``popleft``, ``pop``, ``clear``, ``len()``, truth value and
  iteration (oldest first).

  :param maxlen: Maximum number of live items. As with ``deque(maxlen=...)``,
      the oldest items are discarded when the queue is full. ``None`` means
      unbounded.
  :param key: Optional function that returns the frame key of an item, or
      ``None`` for items that must not be coalesced. Used when ``append`` is
      called without an explicit ``frame_key``.
  """

  def __init__(self, maxlen: Optional[int] = None, key: Optional[Callable[[Any], Optional[Hashable]]] = None):
    self.maxlen = maxlen
    self._key = key
    self._entries: Deque[List] = deque()  # [frame_key, item]
    self._live = {}  # frame_key -> entry
    self._len = 0
    #: Number of items that a newer item with the same frame key replaced.
    self.coalesced = 0

  def append(self, item, frame_key: Optional[Hashable] = None) -> None:
    if frame_key is None and self._key is not None:
      frame_key = self._key(item)

    if frame_key is not None:
      older = self._live.get(frame_key)
      if older is not None:
        older[1] = _DROPPED
        self._len -= 1
        self.coalesced += 1

    entry = [frame_key, item]
    self._entries.append(entry)
    self._len += 1
    if frame_key is not None:
      self._live[frame_key] = entry

    while self.maxlen is not None and self._len > self.maxlen:
      self.popleft()

    # Drop tombstones so that memory stays proportional to the live items.
    if len(self._entries) > 2 * self._len + 16:
      self._entries = deque(e for e in self._entries if e[1] is not _DROPPED)

  def _forget(self, entry) -> None:
    frame_key = entry[0]
    if frame_key is not None and self._live.get(frame_key) is entry:
      del self._live[frame_key]

  def popleft(self):
    while self._entries:
      entry = self._entries.popleft()
      if entry[1] is _DROPPED:
        continue
      self._forget(entry)
      self._len -= 1
      return entry[1]
    raise IndexError("pop from an empty queue")

  def pop(self):
    while self._entries:
      entry = self._entries.pop()
      if entry[1] is _DROPPED:
        continue
      self._forget(entry)
      self._len -= 1
      return entry[1]
    raise IndexError("pop from an empty queue")

  def clear(self) -> None:
    self._entries.clear()
    self._live.clear()
    self._len = 0

  def __len__(self) -> int:
    return self._len

  def __bool__(self) -> bool:
    return self._len > 0

  def __iter__(self) -> Iterator:
    return (e[1] for e in list(self._entries) if e[1] is not _DROPPED)

  def __repr__(self) -> str:
    return f"LatestFrameQueue({list(self)!r}, maxlen={self.maxlen})"


def _node_key(node) -> Optional[Hashable]:
  if isinstance(node, dict):
    return node.get("key")
  return getattr(node, "key", None)


def server_frame_key(event) -> Optional[Hashable]:
  """Default frame key of a server event for the "latest" policy.

  - ``SET`` events share one key: a newer scene replaces an unsent older one.
  - ``UPDATE``, ``UPSERT`` and ``ADD`` events are keyed by their event type,
    the parent (``to``) and the keys of their elements. Events with an element
    that has no key are not coalesced.
  - All other events (``REMOVE``, RPCs, custom events) return ``None`` and are
    never dropped.

  A newer ``UPDATE`` replaces the queued one completely, so send the full
  state of the streamed elements in every frame.
  """
  etype = getattr(event, "etype", None)
  if etype == "SET":
    return ("SET",)
  if etype in ("UPDATE", "UPSERT", "ADD"):
    data = getattr(event, "data", None) or {}
    nodes = data.get("nodes") or ()
    keys = tuple(_node_key(n) for n in nodes)
    if not keys or any(k is None for k in keys):
      return None
    return (etype, data.get("to"), keys)
  return None


def client_frame_key(event, frame_events=DOWNLINK_FRAME_EVENTS) -> Optional[Hashable]:
  """Default frame key of a client event for the "latest" policy."""
  etype = getattr(event, "etype", None)
  if etype in frame_events:
    return (etype, getattr(event, "key", None))
  return None


def make_queue(policy: str, maxlen: Optional[int], key: Optional[Callable] = None):
  """Create a session queue for ``policy`` ("fifo" or "latest")."""
  if policy == "fifo":
    return deque(maxlen=maxlen)
  if policy == "latest":
    return LatestFrameQueue(maxlen=maxlen, key=key)
  raise ValueError(f"Unknown queue policy {policy!r}; use one of {UPLINK_POLICIES}")
