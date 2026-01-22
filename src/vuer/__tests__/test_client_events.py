"""Tests for client events."""

from datetime import datetime as Datetime

from vuer.events import INIT, NULL, ClientEvent, InitEvent, NullEvent


def test_client_event_basic():
  """Test basic ClientEvent creation."""
  event = ClientEvent(etype="TEST_EVENT")

  assert event.etype == "TEST_EVENT"
  assert event.value is None
  assert isinstance(event.ts, float)


def test_client_event_with_kwargs():
  """Test ClientEvent creation with additional kwargs."""
  event = ClientEvent(etype="TEST_EVENT", value="test_value", custom_field="custom")

  assert event.etype == "TEST_EVENT"
  assert event.value == "test_value"
  assert event.custom_field == "custom"


def test_client_event_with_timestamp():
  """Test ClientEvent with explicit timestamp."""
  ts_ms = 1704067200000  # 2024-01-01 00:00:00 UTC in milliseconds
  event = ClientEvent(etype="TEST_EVENT", ts=ts_ms)

  assert event.etype == "TEST_EVENT"
  assert isinstance(event.ts, Datetime)


def test_client_event_equality():
  """Test ClientEvent equality comparison with etype."""
  event = ClientEvent(etype="TEST_EVENT")

  assert event == "TEST_EVENT"
  assert not (event == "OTHER_EVENT")


def test_client_event_repr():
  """Test ClientEvent string representation."""
  event = ClientEvent(etype="TEST_EVENT", value="test_value")

  repr_str = repr(event)
  assert "client<TEST_EVENT>" in repr_str
  assert "test_value" in repr_str


def test_client_event_serialize():
  """Test ClientEvent serialization."""
  event = ClientEvent(etype="TEST_EVENT", value="test_value")
  serialized = event._serialize()

  assert isinstance(serialized, dict)
  assert serialized["etype"] == "TEST_EVENT"
  assert serialized["value"] == "test_value"
  assert "ts" in serialized


def test_client_event_serialize_with_list_value():
  """Test ClientEvent serialization with list value."""
  event = ClientEvent(etype="TEST_EVENT", value=[1, 2, 3])
  serialized = event._serialize()

  assert serialized["value"] == [1, 2, 3]


def test_client_event_deserialize():
  """Test ClientEvent deserialization."""
  event = ClientEvent()
  ts_ms = 1704067200000
  deserialized = event._deserialize(etype="DESERIALIZED", ts=ts_ms, custom="value")

  assert deserialized.etype == "DESERIALIZED"
  assert deserialized.custom == "value"


def test_init_event():
  """Test InitEvent creation."""
  event = InitEvent()

  assert event.etype == "Init"
  assert event == "Init"


def test_init_event_with_kwargs():
  """Test InitEvent with additional kwargs."""
  event = InitEvent(session_id="abc123")

  assert event.etype == "Init"
  assert event.session_id == "abc123"


def test_init_singleton():
  """Test INIT singleton."""
  assert INIT.etype == "Init"
  assert INIT == "Init"


def test_null_event():
  """Test NullEvent creation."""
  event = NullEvent()

  assert event.etype == "NULL"
  assert event == "NULL"


def test_null_event_with_kwargs():
  """Test NullEvent with additional kwargs."""
  event = NullEvent(reason="timeout")

  assert event.etype == "NULL"
  assert event.reason == "timeout"


def test_null_singleton():
  """Test NULL singleton."""
  assert NULL.etype == "NULL"
  assert NULL == "NULL"
