"""Tests for INIT event handling and client type filtering.

This file tests the new `till` method for awaiting specific events,
and the Python client's system info in the INIT event.

Example usage in production:

    @app.spawn(start=True)
    async def main(session: VuerSession):
        # Wait for the INIT event from the client
        e = await session.till("INIT")
        # or: e = await session.till(event="INIT")
        client_type = e.value.get('clientType')

        if client_type == 'python':
            print("Python client connected!")
            print(f"  Python version: {e.value.get('pythonVersion')}")
            print(f"  Platform: {e.value.get('platform')}")
        else:
            # Browser client
            print(f"Browser connected: {e.value.get('userAgent')}")
            print(f"  Screen: {e.value.get('screenWidth')}x{e.value.get('screenHeight')}")
"""

import asyncio

import pytest

from vuer.client import get_client_info, VuerClient
from vuer.events import ClientEvent


def test_get_client_info_returns_dict():
    """Test that get_client_info returns a dictionary."""
    info = get_client_info()
    assert isinstance(info, dict)


def test_get_client_info_has_required_fields():
    """Test that get_client_info has all required fields."""
    info = get_client_info()

    # Common fields (shared with browser)
    common_fields = [
        "client",
        "clientVersion",
        "timezone",
        "timezoneOffset",
    ]

    # Python-specific fields
    python_fields = [
        "pythonVersion",
        "platform",
        "platformVersion",
        "machine",
    ]

    for field in common_fields + python_fields:
        assert field in info, f"Missing required field: {field}"


def test_get_client_info_client():
    """Test that client is always 'python'."""
    info = get_client_info()
    assert info["client"] == "python"


def test_get_client_info_client_version():
    """Test that clientVersion is present."""
    info = get_client_info()
    assert "clientVersion" in info
    assert isinstance(info["clientVersion"], str)


def test_get_client_info_python_version():
    """Test that pythonVersion matches platform.python_version()."""
    import platform
    info = get_client_info()
    assert info["pythonVersion"] == platform.python_version()


def test_get_client_info_platform():
    """Test that platform is a recognized value."""
    import platform as plat
    info = get_client_info()
    assert info["platform"] == plat.system()
    assert info["platform"] in ["Darwin", "Linux", "Windows", "FreeBSD"]


def test_get_client_info_platform_version():
    """Test that platformVersion matches platform.release()."""
    import platform as plat
    info = get_client_info()
    assert info["platformVersion"] == plat.release()


def test_get_client_info_machine():
    """Test that machine matches platform.machine()."""
    import platform as plat
    info = get_client_info()
    assert info["machine"] == plat.machine()


def test_get_client_info_timezone():
    """Test that timezone info is present."""
    info = get_client_info()
    # Timezone might be None in some environments
    assert "timezone" in info
    assert "timezoneOffset" in info


def test_client_event_with_client_info():
    """Test creating a ClientEvent with client info as value."""
    info = get_client_info()
    event = ClientEvent(etype="INIT", value=info)

    assert event.etype == "INIT"
    assert event.value["client"] == "python"
    assert "pythonVersion" in event.value
    assert "platform" in event.value


def test_client_event_serialization_with_client_info():
    """Test that ClientEvent with client info serializes correctly."""
    info = get_client_info()
    event = ClientEvent(etype="INIT", value=info)
    serialized = event._serialize()

    assert serialized["etype"] == "INIT"
    assert isinstance(serialized["value"], dict)
    assert serialized["value"]["client"] == "python"


class TestVuerClientInit:
    """Tests for VuerClient INIT event on connect."""

    def test_client_not_connected_initially(self):
        """Test that client is not connected before calling connect()."""
        client = VuerClient()
        assert client.connected is False

    def test_client_has_uri(self):
        """Test that client has default URI."""
        client = VuerClient()
        assert client.URI == "ws://localhost:8012"


class TestTillIntegration:
    """Integration tests for till method.

    These tests require a running server and are marked as slow.
    Run with: pytest specs/ -m integration
    """

    @pytest.mark.skip(reason="Requires running server for integration test")
    async def test_till_receives_init(self):
        """Test that till receives INIT event from Python client."""
        # This would require a full server/client setup
        pass

    @pytest.mark.skip(reason="Requires running server for integration test")
    async def test_till_timeout(self):
        """Test that till raises TimeoutError when timeout expires."""
        pass


class TestSpawnFiltering:
    """Tests for spawn handler filtering."""

    def test_match_filters_empty(self):
        """Test that empty filters match everything."""
        from vuer.server import _match_filters

        client_info = {"client": "python", "platform": "Darwin"}
        assert _match_filters(client_info, {}) is True

    def test_match_filters_exact_match(self):
        """Test exact match filtering."""
        from vuer.server import _match_filters

        client_info = {"client": "python", "platform": "Darwin"}
        assert _match_filters(client_info, {"client": "python"}) is True
        assert _match_filters(client_info, {"client": "browser"}) is False

    def test_match_filters_wildcard(self):
        """Test wildcard matching with fnmatch."""
        from vuer.server import _match_filters

        client_info = {"client": "python", "platform": "Darwin"}
        assert _match_filters(client_info, {"client": "py*"}) is True
        assert _match_filters(client_info, {"client": "*thon"}) is True
        assert _match_filters(client_info, {"client": "??????"}) is True
        assert _match_filters(client_info, {"client": "other-*"}) is False

    def test_match_filters_multiple_criteria(self):
        """Test matching with multiple filter criteria."""
        from vuer.server import _match_filters

        client_info = {"client": "python", "platform": "Darwin", "machine": "arm64"}
        assert _match_filters(client_info, {"client": "python", "platform": "Darwin"}) is True
        assert _match_filters(client_info, {"client": "python", "platform": "Linux"}) is False
        assert _match_filters(client_info, {"client": "py*", "machine": "arm*"}) is True

    def test_match_filters_missing_key(self):
        """Test that missing keys don't match."""
        from vuer.server import _match_filters

        client_info = {"client": "python"}
        assert _match_filters(client_info, {"platform": "Darwin"}) is False

    def test_spawn_decorator_no_args(self):
        """Test @app.spawn without parentheses."""
        from vuer import Vuer

        app = Vuer()

        @app.spawn
        async def handler(session):
            pass

        assert len(app.spawn_handlers) == 1
        assert app.spawn_handlers[0]["fn"] == handler
        assert app.spawn_handlers[0]["filters"] == {}

    def test_spawn_decorator_with_filter(self):
        """Test @app.spawn(client="python")."""
        from vuer import Vuer

        app = Vuer()

        @app.spawn(client="python")
        async def handler(session):
            pass

        assert len(app.spawn_handlers) == 1
        # handler variable is now the _SpawnWrapper, but fn is the original function
        assert app.spawn_handlers[0]["fn"].__name__ == "handler"
        assert app.spawn_handlers[0]["filters"] == {"client": "python"}

    def test_spawn_decorator_multiple_handlers(self):
        """Test multiple spawn handlers with different filters."""
        from vuer import Vuer

        app = Vuer()

        @app.spawn(client="python")
        async def py_handler(session):
            pass

        @app.spawn(client="browser")
        async def ts_handler(session):
            pass

        @app.spawn
        async def default_handler(session):
            pass

        assert len(app.spawn_handlers) == 3
        assert app.spawn_handlers[0]["filters"] == {"client": "python"}
        assert app.spawn_handlers[1]["filters"] == {"client": "browser"}
        assert app.spawn_handlers[2]["filters"] == {}
