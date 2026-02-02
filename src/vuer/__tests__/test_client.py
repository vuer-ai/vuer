"""Tests for the Vuer client."""

import asyncio

import pytest

from vuer.client import VuerClient, AsyncAt
from vuer.events import ClientEvent


class MockEvent(ClientEvent):
    """Mock event class for testing."""
    etype = "MOCK"


def test_client_init_default_uri():
    """Test VuerClient initialization with default URI."""
    client = VuerClient()

    assert client.uri == "ws://localhost:8012"
    assert client._ws is None
    assert client._connected is False


def test_client_init_custom_uri():
    """Test VuerClient initialization with custom URI."""
    client = VuerClient("ws://192.168.1.100:9000")

    assert client.uri == "ws://192.168.1.100:9000"


def test_client_connected_property_false():
    """Test connected property when not connected."""
    client = VuerClient()

    assert client.connected is False


def test_client_connected_property_with_ws_none():
    """Test connected property when _ws is None."""
    client = VuerClient()
    client._connected = True
    client._ws = None

    assert client.connected is False


def test_client_send_returns_async_at():
    """Test send property returns AsyncAt."""
    client = VuerClient()

    assert isinstance(client.send, AsyncAt)


def test_client_send_not_connected():
    """Test send raises error when not connected."""

    async def _test():
        client = VuerClient()
        event = MockEvent()

        with pytest.raises(ConnectionError, match="Not connected"):
            await client.send(event)

    asyncio.run(_test())


def test_client_send_type_check():
    """Test send raises TypeError for non-ClientEvent."""

    async def _test():
        client = VuerClient()
        client._connected = True
        client._ws = True  # Mock websocket

        with pytest.raises(TypeError, match="Expected ClientEvent"):
            await client._send("not an event")

    asyncio.run(_test())


def test_client_recv_not_connected():
    """Test recv raises error when not connected."""

    async def _test():
        client = VuerClient()

        with pytest.raises(ConnectionError, match="Not connected"):
            await client.recv()

    asyncio.run(_test())


def test_client_aiter():
    """Test async iterator interface."""
    client = VuerClient()

    assert client.__aiter__() is client


def test_async_at_call_returns_coroutine():
    """Test AsyncAt __call__ returns a coroutine."""

    async def mock_fn(event):
        pass

    at = AsyncAt(mock_fn)
    event = MockEvent()
    result = at(event)

    assert asyncio.iscoroutine(result)
    # Clean up coroutine
    result.close()


def test_async_at_matmul_fire_and_forget():
    """Test AsyncAt __matmul__ fires and forgets (creates task, returns None)."""

    async def _test():
        called = []

        async def mock_fn(event):
            called.append(event)

        at = AsyncAt(mock_fn)
        event = MockEvent()
        result = at @ event

        # @ operator returns None (fire-and-forget)
        assert result is None

        # Let the task run
        await asyncio.sleep(0)
        assert len(called) == 1

    asyncio.run(_test())


def test_custom_event_class():
    """Test custom event class with class attributes."""

    class SetPositionEvent(ClientEvent):
        etype = "SET_POSITION"
        value = [0, 0, 0]

    # Test with default value
    event1 = SetPositionEvent()
    assert event1.etype == "SET_POSITION"
    assert event1.value == [0, 0, 0]

    # Test with override value
    event2 = SetPositionEvent(value=[1, 2, 3])
    assert event2.etype == "SET_POSITION"
    assert event2.value == [1, 2, 3]

    # Test serialization includes etype
    serialized = event2._serialize()
    assert serialized["etype"] == "SET_POSITION"
    assert serialized["value"] == [1, 2, 3]
