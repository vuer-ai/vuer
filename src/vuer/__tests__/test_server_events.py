"""Tests for server events."""

from vuer.events import (
  END,
  NOOP,
  Add,
  End,
  Frame,
  GetWebXRMesh,
  GrabRender,
  HapticActuatorPulse,
  MjRender,
  MjStep,
  Noop,
  Remove,
  ServerEvent,
  ServerRPC,
  Set,
  Update,
  Upsert,
)
from vuer.schemas import Element, Scene


class MockElement(Element):
  """Mock element for testing."""

  tag = "MockElement"


def test_server_event_basic():
  """Test basic ServerEvent creation."""

  class TestServerEvent(ServerEvent):
    etype = "TEST"

  event = TestServerEvent(data={"key": "value"})

  assert event.etype == "TEST"
  assert event.data == {"key": "value"}
  assert isinstance(event.ts, float)


def test_server_event_with_timestamp():
  """Test ServerEvent with explicit timestamp."""

  class TestServerEvent(ServerEvent):
    etype = "TEST"

  ts = 1704067200.0  # seconds
  event = TestServerEvent(data={"key": "value"}, ts=ts)

  assert event.etype == "TEST"
  assert event.ts == ts


def test_server_event_equality():
  """Test ServerEvent equality comparison with etype."""

  class TestServerEvent(ServerEvent):
    etype = "TEST"

  event = TestServerEvent(data=None)
  assert event == "TEST"
  assert not (event == "OTHER")


def test_server_event_serialize():
  """Test ServerEvent serialization."""

  class TestServerEvent(ServerEvent):
    etype = "TEST"

  event = TestServerEvent(data={"key": "value"})
  serialized = event._serialize()

  assert isinstance(serialized, dict)
  assert serialized["etype"] == "TEST"
  assert serialized["data"] == {"key": "value"}
  assert "ts" in serialized


def test_noop_event():
  """Test Noop event creation."""
  event = Noop()

  assert event.etype == "NOOP"
  assert event.data is None


def test_noop_singleton():
  """Test NOOP singleton."""
  assert NOOP.etype == "NOOP"
  assert NOOP.data is None


def test_set_event():
  """Test Set event with Scene."""
  scene = Scene(key="test-scene", defaultLights=False, defaultOrbitControls=False)
  event = Set(data=scene)

  assert event.etype == "SET"
  assert event.data == scene


def test_set_event_serialize():
  """Test Set event serialization."""
  scene = Scene(key="test-scene", defaultLights=False, defaultOrbitControls=False)
  event = Set(data=scene)
  serialized = event._serialize()

  assert serialized["etype"] == "SET"
  assert isinstance(serialized["data"], dict)
  assert serialized["data"]["tag"] == "Scene"


def test_update_event_single_element():
  """Test Update event with a single element."""
  elem = MockElement(key="elem1")
  event = Update(elem)

  assert event.etype == "UPDATE"
  assert event.data["nodes"] == (elem,)


def test_update_event_multiple_elements():
  """Test Update event with multiple elements."""
  elem1 = MockElement(key="elem1")
  elem2 = MockElement(key="elem2")
  event = Update(elem1, elem2)

  assert event.etype == "UPDATE"
  assert len(event.data["nodes"]) == 2


def test_update_event_strict_mode():
  """Test Update event with strict mode."""
  elem = MockElement(key="elem1")
  event = Update(elem, strict=True)

  assert event.etype == "UPDATE"
  assert event.strict is True


def test_update_event_serialize():
  """Test Update event serialization."""
  elem = MockElement(key="elem1")
  event = Update(elem)
  serialized = event._serialize()

  assert serialized["etype"] == "UPDATE"
  assert "nodes" in serialized["data"]
  assert len(serialized["data"]["nodes"]) == 1


def test_add_event_single_element():
  """Test Add event with a single element."""
  elem = MockElement(key="elem1")
  event = Add(elem)

  assert event.etype == "ADD"
  assert event.data["nodes"] == (elem,)
  assert event.data["to"] is None


def test_add_event_with_parent():
  """Test Add event with parent key."""
  elem = MockElement(key="elem1")
  event = Add(elem, to="parent-key")

  assert event.etype == "ADD"
  assert event.data["to"] == "parent-key"


def test_add_event_serialize():
  """Test Add event serialization."""
  elem = MockElement(key="elem1")
  event = Add(elem, to="parent-key")
  serialized = event._serialize()

  assert serialized["etype"] == "ADD"
  assert serialized["data"]["to"] == "parent-key"
  assert len(serialized["data"]["nodes"]) == 1


def test_upsert_event_single_element():
  """Test Upsert event with a single element."""
  elem = MockElement(key="elem1")
  event = Upsert(elem)

  assert event.etype == "UPSERT"
  assert event.data["nodes"] == (elem,)
  assert event.data["to"] is None


def test_upsert_event_with_parent():
  """Test Upsert event with parent key."""
  elem = MockElement(key="elem1")
  event = Upsert(elem, to="parent-key")

  assert event.etype == "UPSERT"
  assert event.data["to"] == "parent-key"


def test_upsert_event_strict_mode():
  """Test Upsert event with strict mode."""
  elem = MockElement(key="elem1")
  event = Upsert(elem, strict=True)

  assert event.etype == "UPSERT"
  assert event.data["strict"] is True


def test_upsert_event_serialize():
  """Test Upsert event serialization."""
  elem = MockElement(key="elem1")
  event = Upsert(elem, to="parent-key")
  serialized = event._serialize()

  assert serialized["etype"] == "UPSERT"
  assert serialized["data"]["to"] == "parent-key"


def test_remove_event_single_key():
  """Test Remove event with a single key."""
  event = Remove("key1")

  assert event.etype == "REMOVE"
  assert event.data["keys"] == ("key1",)


def test_remove_event_multiple_keys():
  """Test Remove event with multiple keys."""
  event = Remove("key1", "key2", "key3")

  assert event.etype == "REMOVE"
  assert event.data["keys"] == ("key1", "key2", "key3")


def test_haptic_actuator_pulse_left():
  """Test HapticActuatorPulse with left actuator."""
  event = HapticActuatorPulse(left={"strength": 0.5, "duration": 100})

  assert event.etype == "HAPTIC_ACTUATOR_PULSE"
  assert event.data["left"]["strength"] == 0.5
  assert event.data["left"]["duration"] == 100
  assert event.data["right"] is None


def test_haptic_actuator_pulse_right():
  """Test HapticActuatorPulse with right actuator."""
  event = HapticActuatorPulse(right={"strength": 0.8, "duration": 200})

  assert event.etype == "HAPTIC_ACTUATOR_PULSE"
  assert event.data["left"] is None
  assert event.data["right"]["strength"] == 0.8


def test_haptic_actuator_pulse_both():
  """Test HapticActuatorPulse with both actuators."""
  event = HapticActuatorPulse(
    left={"strength": 0.5, "duration": 100},
    right={"strength": 0.8, "duration": 200},
  )

  assert event.etype == "HAPTIC_ACTUATOR_PULSE"
  assert event.data["left"]["strength"] == 0.5
  assert event.data["right"]["strength"] == 0.8


def test_frame_event():
  """Test Frame event wrapping another ServerEvent."""
  inner_event = Update(MockElement(key="elem1"))
  event = Frame(data=inner_event, frame_rate=30.0)

  assert event.etype == "FRAME"
  assert event.data == inner_event
  assert event.frame_rate == 30.0


def test_frame_event_default_frame_rate():
  """Test Frame event with default frame rate."""
  inner_event = Noop()
  event = Frame(data=inner_event)

  assert event.frame_rate == 60.0


def test_end_event():
  """Test End event creation."""
  event = End()

  assert event.etype == "TERMINATE"
  assert event.data is None


def test_end_singleton():
  """Test END singleton."""
  assert END.etype == "TERMINATE"
  assert END.data is None


def test_server_rpc_basic():
  """Test basic ServerRPC creation."""
  event = ServerRPC(data={"command": "test"})

  assert event.etype == "RPC"
  assert event.data == {"command": "test"}
  assert event.uuid is not None
  assert len(event.uuid) > 0


def test_server_rpc_custom_uuid():
  """Test ServerRPC with custom UUID."""
  event = ServerRPC(data={"command": "test"}, uuid="custom-uuid-123")

  assert event.uuid == "custom-uuid-123"


def test_server_rpc_rtype():
  """Test ServerRPC response type pattern."""
  event = ServerRPC(data={}, uuid="test-uuid")

  assert event.rtype == "RPC_RESPONSE@{uuid}"


def test_grab_render():
  """Test GrabRender event."""
  event = GrabRender()

  assert event.etype == "GRAB_RENDER"
  assert event.key == "DEFAULT"
  assert "GRAB_RENDER_RESPONSE@" in event.rtype


def test_grab_render_custom_key():
  """Test GrabRender with custom key."""
  event = GrabRender(key="custom-camera")

  assert event.key == "custom-camera"


def test_grab_render_with_kwargs():
  """Test GrabRender with additional kwargs."""
  event = GrabRender(key="camera", width=1920, height=1080)

  assert event.data["width"] == 1920
  assert event.data["height"] == 1080


def test_mj_step():
  """Test MjStep event."""
  event = MjStep()

  assert event.etype == "MJ_STEP"
  assert event.key == "DEFAULT"
  assert "MJ_STEP_RESPONSE@" in event.rtype


def test_mj_step_custom_key():
  """Test MjStep with custom key."""
  event = MjStep(key="physics-sim")

  assert event.key == "physics-sim"


def test_mj_render():
  """Test MjRender event."""
  event = MjRender()

  assert event.etype == "MJ_RENDER"
  assert event.key == "DEFAULT"
  assert "MJ_RENDER_RESPONSE@" in event.rtype


def test_mj_render_custom_key():
  """Test MjRender with custom key."""
  event = MjRender(key="mujoco-scene")

  assert event.key == "mujoco-scene"


def test_get_webxr_mesh():
  """Test GetWebXRMesh event."""
  event = GetWebXRMesh()

  assert event.etype == "GET_WEBXR_MESH"
  assert event.key == "webxr-mesh"
  assert "GET_WEBXR_MESH_RESPONSE@" in event.rtype


def test_get_webxr_mesh_custom_key():
  """Test GetWebXRMesh with custom key."""
  event = GetWebXRMesh(key="ar-mesh-detector")

  assert event.key == "ar-mesh-detector"
