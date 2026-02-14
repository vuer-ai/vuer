from datetime import datetime as Datetime
from typing import TYPE_CHECKING, Dict, List, Optional, TypedDict
from uuid import uuid4

if TYPE_CHECKING:
  from vuer.rtc.types import CRDTMessage, JournalEntry, Snapshot, VectorClock

from vuer.schemas import Element, Scene
from vuer.serdes import serializer


class Event:
  """
  An event is a message sent from the server to the client.
  """

  ts: float
  """
    timestamp is a float representing the UTC datetime. Msgpack natively
    supports this. `datetime`'s Datetime class is significantly more
    complex as it includes timezone information.
    """

  def __eq__(self, etype):
    """
    Check if the event is of a certain type.
    :param etype: The type to check.
    :return: True if the event is of the given type, False otherwise.
    """
    return self.etype == etype


class ClientEvent(Event):
  """
  Event received from the client (browser).

  Subclasses must define ``etype`` as a class attribute. For deserialization,
  ``etype`` is passed via kwargs and set via ``__dict__.update()``.

  Example::

      class MyEvent(ClientEvent):
          etype = "MY_EVENT"
  """

  etype: str
  value = None

  def __repr__(self):
    return f"client<{self.etype}>({self.value})"

  def __init__(self, ts=None, **kwargs):
    # todo: double check the timing convention and sort this out.
    if ts is None:
      self.ts = Datetime.timestamp(Datetime.now())
    else:
      self.ts = ts

    self.__dict__.update(kwargs)

  @classmethod
  def _deserialize(cls, *, etype, ts=None, **kwargs):
    if ts is None:
      msg = f"ClientEvent<{etype}> is missing client timestamp."
      print("Deprecation Warning:", msg)
    return ClientEvent(etype=etype, ts=ts, **kwargs)

  def _serialize(self):
    """
    Serialize the event to a dictionary for sending over the websocket.
    :return: A dictionary representing the event.
    """
    # Sequence includes text
    # Include etype explicitly to support class attribute definitions
    return {**self.__dict__, "etype": self.etype, "value": serializer(self.value)}


class InitEvent(ClientEvent):
  etype = "Init"


INIT = InitEvent()


class NullEvent(ClientEvent):
  etype = "NULL"


NULL = NullEvent()


class ServerEvent(Event):
  """
  Event sent from the server to the client (browser).

  Subclasses must define ``etype`` as a class attribute. The ``__init__``
  copies ``self.etype`` to the instance dict for serialization.

  Example::

      class MyServerEvent(ServerEvent):
          etype = "MY_SERVER_EVENT"

          def __init__(self, data):
              super().__init__(data)
  """

  etype: str

  def __init__(self, data, ts: float = None, **kwargs):
    if ts is None:
      self.ts = Datetime.timestamp(Datetime.now())
    else:
      self.ts = ts

    self.data = data

    self.__dict__.update(etype=self.etype, **kwargs)

  def _serialize(self):
    """
    Serialize the event to a dictionary for sending over the websocket.
    :return: A dictionary representing the event.
    """
    # Sequence includes text
    return {**self.__dict__, "data": serializer(self.data)}


class Noop(ServerEvent):
  etype = "NOOP"

  def __init__(self, **kwargs):
    super().__init__(data=None, **kwargs)


NOOP = Noop()


class Set(ServerEvent):
  """Set Operation (Server Event).

  SET Operator is used exclusively to set the root Scene node. Throws an error (on the client side)
  if the data is not a Scene object.
  """

  etype = "SET"
  """The Event Type."""

  def __init__(self, data: Scene):
    """
    :param data: The data to set.
    """
    super().__init__(data)


class Update(ServerEvent):
  """
  UPDATE Operator is used to update a specific node in the scene graph.

  Use "$delete" value for elements you want to remove. Or "$strict" mode to
  copy the element verbatim.

  Example:
      app.update @ { "key": "my_key", "value": "$delete" }

      app.update({ "key": "my_key", "value": "$delete" }, strict=True)

      app.update @ [ { "key": "my_key", "value": "$delete" }, ... ]

      app.update({ "key": "my_key", "value": "$delete" }, ...,  strict=True)
  """

  etype = "UPDATE"

  def __init__(self, *elements: Element, strict=False):
    # tuple is not serializable
    super().__init__({"nodes": elements}, strict=strict)

  def _serialize(self):
    return {
      **self.__dict__,
      "data": {
        "nodes": [serializer(node) for node in self.data["nodes"]],
      },
    }


class Add(ServerEvent):
  """
  ADD Operator is used to insert new nodes to the scene graph. By default, it
  inserts into the root node, but you can specify a parent node to insert into
  via the `to` argument.

  Note: only supports a single parent key right timestamp.

  Example:
      app.add @ Element(...)

      app.add @ [ Element(...), Element(...), ... ]

      app.add(Element, to="my_parent_key")

      app.add([Element, ...], to="my_parent_key")

  """

  etype = "ADD"

  def __init__(self, *elements: List[Element], to: str = None):
    # tuple is not serializable
    event_data = dict(
      nodes=elements,
      to=to,
    )
    super().__init__(data=event_data)

  def _serialize(self):
    return {
      **self.__dict__,
      "data": {
        "nodes": [serializer(node) for node in self.data["nodes"]],
        "to": self.data["to"],
      },
    }


class Upsert(ServerEvent):
  """
  UPSERT Operator is used to update nodes to new values, when then they do not
  exist, insert new ones to the scene graph.

  Note: only supports a single parent key right timestamp.

  Example:
      app.upsert @ Element(...)

      app.upsert @ [ Element(...), Element(...), ... ]

      app.upsert(Element, to="my_parent_key")

      app.upsert([Element, ...], to="my_parent_key")

  """

  etype = "UPSERT"

  def __init__(self, *elements: List[Element], to: str = None, strict=False):
    # tuple is not serializable
    event_data = dict(
      nodes=elements,
      to=to,
      strict=strict,
    )
    super().__init__(data=event_data)

  def _serialize(self):
    return {
      **self.__dict__,
      "data": {
        "nodes": [serializer(node) for node in self.data["nodes"]],
        "to": self.data["to"],
      },
    }


class Remove(ServerEvent):
  """
  An Update ServerEvent is sent to the client when the server wants to update the client's state.
  It appends the data sent in the Update ServerEvent to the client's current state.
  """

  etype = "REMOVE"

  def __init__(self, *keys: List[str], **kwargs):
    # tuple is not serializable
    super().__init__(data={"keys": keys}, **kwargs)


class HapticActuatorPulse(ServerEvent):
  """
  Haptic Actuator Pulse event to trigger haptic feedback on the client side.
  """

  etype = "HAPTIC_ACTUATOR_PULSE"

  def __init__(
    self,
    left: Optional[
      TypedDict("ActuatorData", {"strength": float, "duration": float})
    ] = None,
    right: Optional[
      TypedDict("ActuatorData", {"strength": float, "duration": float})
    ] = None,
    **kwargs,
  ):
    """
    Haptic Actuator Pulse event to trigger haptic feedback on the client side.

    :param left: Optional dictionary with 'strength' and 'duration' for left actuator.
    :param right: Optional dictionary with 'strength' and 'duration' for right actuator.
    :param kwargs: Additional keyword arguments.
    """
    data = {"left": left, "right": right}
    super().__init__(data=data, **kwargs)


class Frame(ServerEvent):
  """
  A higher-level ServerEvent that wraps other ServerEvents
  """

  ServerEvent: ServerEvent
  etype = "FRAME"

  def __init__(self, data: ServerEvent, frame_rate=60.0, **kwargs):
    """Frame object returns a NOOP client event, to keep the on_socket generator
    running at a constant rate.

    :param data:
    :param frame_rate: default to 60, set this for wait time between frames
    :param kwargs:
    """
    super().__init__(data, **kwargs)
    self.frame_rate = frame_rate


class End(ServerEvent):
  """
  A higher-level ServerEvent that wraps other ServerEvents
  """

  etype = "TERMINATE"

  def __init__(self, **kwargs):
    super().__init__(None, **kwargs)


END = End()


# =============================================================================
# CRDT Events — used by SceneStoreRTC for real-time collaborative editing
#
# All CRDT events share a single etype (CRDT_ETYPE) and are distinguished by
# an internal ``mtype`` field in the event data. The frontend listens for one
# event type and dispatches by mtype.
#
# Wire protocol (matches TypeScript WireMessage union):
#   mtype: "state"      — full snapshot + journal (sent on subscribe)
#   mtype: "crdt"       — CRDT message from the server (Python-side commit)
#   mtype: "broadcast"  — forwarded CRDT message from another client
#   mtype: "ack"        — acknowledgment of a client message
#   mtype: "error"      — error response for a client message
#   mtype: "sync"       — sync request with vector clock and bloom filter
#   mtype: "heartbeat"  — heartbeat with session info
#   mtype: "room-reset" — room reset signal
#
# Both directions use the same etype:
#   Server -> Client:  ServerEvent with etype = CRDT_ETYPE, data = {mtype, ...}
#   Client -> Server:  ClientEvent with etype = CRDT_ETYPE, value = {mtype, ...}
# =============================================================================

CRDT_ETYPE = "CRDT_ETYPE"


class CRDTEvent(ServerEvent):
  """Base class for all CRDT wire messages. Subclasses share etype = CRDT_ETYPE."""

  etype = CRDT_ETYPE


class CRDTStateEvent(CRDTEvent):
  """mtype: 'state' — full snapshot + journal sent on subscribe."""

  def __init__(self, snapshot: "Snapshot", journal: "List[CRDTMessage]", **kwargs):
    super().__init__(data={
      "mtype": "state",
      "snapshot": snapshot.to_dict(),
      "journal": [msg.to_dict() for msg in journal],
    }, **kwargs)


class CRDTOpEvent(CRDTEvent):
  """mtype: 'crdt' — CRDT message originating from the server (Python-side commit)."""

  def __init__(self, msg: "CRDTMessage", **kwargs):
    super().__init__(data={
      "mtype": "crdt",
      "msg": msg.to_dict(),
    }, **kwargs)


class CRDTBroadcastEvent(CRDTEvent):
  """mtype: 'broadcast' — forwarded CRDT message from another client."""

  def __init__(self, msg: "CRDTMessage", **kwargs):
    super().__init__(data={
      "mtype": "broadcast",
      "msg": msg.to_dict(),
    }, **kwargs)


class CRDTAckEvent(CRDTEvent):
  """mtype: 'ack' — acknowledgment of a client message."""

  def __init__(self, msg_id: str, server_seq: Optional[int] = None, **kwargs):
    d: dict = {"mtype": "ack", "msgId": msg_id}
    if server_seq is not None:
      d["serverSeq"] = server_seq
    super().__init__(data=d, **kwargs)


class CRDTErrorEvent(CRDTEvent):
  """mtype: 'error' — error response for a client message."""

  def __init__(self, msg_id: str, error: str, **kwargs):
    super().__init__(data={
      "mtype": "error",
      "msgId": msg_id,
      "error": error,
    }, **kwargs)


class CRDTSyncEvent(CRDTEvent):
  """mtype: 'sync' — sync request with vector clock and bloom filter."""

  def __init__(
    self,
    filter: bytes,
    count: int,
    vector_clock: "Optional[VectorClock]" = None,
    **kwargs,
  ):
    d: dict = {"mtype": "sync", "filter": filter, "count": count}
    if vector_clock is not None:
      d["vectorClock"] = vector_clock
    super().__init__(data=d, **kwargs)


class CRDTHeartbeatEvent(CRDTEvent):
  """mtype: 'heartbeat' — heartbeat with session info."""

  def __init__(self, session_id: str, vector_clock: "VectorClock", **kwargs):
    super().__init__(data={
      "mtype": "heartbeat",
      "sessionId": session_id,
      "vectorClock": vector_clock,
    }, **kwargs)


class CRDTRoomResetEvent(CRDTEvent):
  """mtype: 'room-reset' — room reset signal."""

  def __init__(self, **kwargs):
    super().__init__(data={"mtype": "room-reset"}, **kwargs)


class ServerRPC(ServerEvent):
  uuid: str
  etype = "RPC"

  # we can override this in the constructor to control the behavior on the front end.
  rtype = "RPC_RESPONSE@{uuid}"

  def __init__(self, data, uuid=None, **kwargs):
    self.uuid = uuid or str(uuid4())
    super().__init__(data, **kwargs)


class GrabRender(ServerRPC):
  """
  A higher-level ServerEvent that wraps other ServerEvents
  """

  etype = "GRAB_RENDER"

  def __init__(self, *, key: str = "DEFAULT", **kwargs):
    super().__init__(data=kwargs)
    self.key = key
    self.rtype = f"GRAB_RENDER_RESPONSE@{self.uuid}"


class MjStep(ServerRPC):
  """
  A higher-level ServerEvent that wraps other ServerEvents
  """

  etype = "MJ_STEP"

  def __init__(self, *, key: str = "DEFAULT", **kwargs):
    super().__init__(data=kwargs)
    self.key = key
    self.rtype = f"MJ_STEP_RESPONSE@{self.uuid}"


class MjRender(ServerRPC):
  """
  A higher-level ServerEvent that wraps other ServerEvents
  """

  etype = "MJ_RENDER"

  def __init__(self, *, key: str = "DEFAULT", **kwargs):
    super().__init__(data=kwargs)
    self.key = key
    self.rtype = f"MJ_RENDER_RESPONSE@{self.uuid}"


class GetWebXRMesh(ServerRPC):
  """
  Request WebXR mesh data from the client.

  This RPC event is used to request real-world mesh detection data
  from WebXR AR sessions. The client will respond with mesh data
  including vertices, indices, semantic labels, and transformation matrices.

  Example Usage::

      # Request mesh data from the client
      mesh_data = await session.get_webxr_mesh(key="webxr-mesh")

      # Access the mesh data
      for mesh in mesh_data.value['meshes']:
          vertices = mesh['vertices']
          indices = mesh['indices']
          semantic_label = mesh.get('semanticLabel')
          matrix = mesh['matrix']

  :param key: The key of the WebXRMesh component to query (default: "webxr-mesh")
  :param kwargs: Additional keyword arguments
  """

  etype = "GET_WEBXR_MESH"

  def __init__(self, *, key: str = "webxr-mesh", **kwargs):
    super().__init__(data=kwargs)
    self.key = key
    self.rtype = f"GET_WEBXR_MESH_RESPONSE@{self.uuid}"


if __name__ == "__main__":
  # e = Frame @ {"hey": "yo"}
  # print(e)
  # print(e.data)
  #
  # e = Set @ {"data": "new"}
  # print(e._serialize())
  e = GrabRender({"message": "hey"})
  print(e._serialize())
