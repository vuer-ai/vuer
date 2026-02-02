"""Tests for the Workspace class."""

import os
import tempfile
from pathlib import Path

import pytest

from vuer.workspace import Workspace, workspace_from_config


class MockServer:
    """Mock server for testing Workspace binding."""

    def __init__(self):
        self.routes = []

    def _add_route(self, path, handler, method="GET"):
        self.routes.append({"path": path, "handler": handler, "method": method})


def test_workspace_init_default():
    """Test Workspace initialization with defaults."""
    ws = Workspace()

    assert ws.paths == "."
    assert ws.roots == [Path(".")]


def test_workspace_init_single_string():
    """Test Workspace initialization with single string path."""
    ws = Workspace(paths="/tmp/test")

    assert ws.roots == [Path("/tmp/test")]


def test_workspace_init_single_path():
    """Test Workspace initialization with single Path object."""
    ws = Workspace(paths=Path("/tmp/test"))

    assert ws.roots == [Path("/tmp/test")]


def test_workspace_init_list_of_strings():
    """Test Workspace initialization with list of strings."""
    ws = Workspace(paths=["/tmp/a", "/tmp/b", "/tmp/c"])

    assert ws.roots == [Path("/tmp/a"), Path("/tmp/b"), Path("/tmp/c")]


def test_workspace_init_mixed_list():
    """Test Workspace initialization with mixed list."""
    ws = Workspace(paths=["/tmp/a", Path("/tmp/b")])

    assert ws.roots == [Path("/tmp/a"), Path("/tmp/b")]


def test_workspace_absolute_paths():
    """Test absolute_paths property."""
    ws = Workspace(paths=".")

    assert ws.absolute_paths == [os.path.abspath(".")]


def test_workspace_find_file():
    """Test find_file with multiple search paths."""
    with tempfile.TemporaryDirectory() as tmpdir1:
        with tempfile.TemporaryDirectory() as tmpdir2:
            # Create a file only in the second directory
            test_file = Path(tmpdir2) / "test.txt"
            test_file.write_text("hello")

            ws = Workspace(paths=[tmpdir1, tmpdir2])

            # Should find file in second path
            found = ws.find_file("test.txt")
            assert found == test_file


def test_workspace_find_file_first_wins():
    """Test that first matching path wins when file exists in multiple paths."""
    with tempfile.TemporaryDirectory() as tmpdir1:
        with tempfile.TemporaryDirectory() as tmpdir2:
            # Create file in both directories
            file1 = Path(tmpdir1) / "test.txt"
            file2 = Path(tmpdir2) / "test.txt"
            file1.write_text("first")
            file2.write_text("second")

            ws = Workspace(paths=[tmpdir1, tmpdir2])

            # Should find file in first path
            found = ws.find_file("test.txt")
            assert found == file1


def test_workspace_find_file_not_found():
    """Test find_file returns None when file not found."""
    with tempfile.TemporaryDirectory() as tmpdir:
        ws = Workspace(paths=[tmpdir])

        found = ws.find_file("nonexistent.txt")
        assert found is None


def test_workspace_bind():
    """Test binding workspace to server."""
    ws = Workspace()
    server = MockServer()

    result = ws.bind(server)

    assert ws._server is server
    assert result is ws  # Returns self for chaining


def test_workspace_link_without_bind():
    """Test link raises error when not bound."""
    ws = Workspace()

    with pytest.raises(RuntimeError, match="not bound"):
        ws.link()


def test_workspace_link():
    """Test link adds route to server."""
    ws = Workspace(paths="/tmp/test")
    server = MockServer()
    ws.bind(server)

    ws.link("/static")

    assert len(server.routes) == 1
    assert server.routes[0]["path"] == "/static/{filename:.*}"
    assert server.routes[0]["method"] == "GET"


def test_workspace_link_default_route():
    """Test link uses /static as default route."""
    ws = Workspace(paths="/tmp/test")
    server = MockServer()
    ws.bind(server)

    ws.link()

    assert server.routes[0]["path"] == "/static/{filename:.*}"


def test_workspace_serve_static_without_bind():
    """Test serve_static raises error when not bound."""
    ws = Workspace()

    with pytest.raises(RuntimeError, match="not bound"):
        ws.serve_static("/tmp/test", "/assets")


def test_workspace_serve_static():
    """Test serve_static adds route for specific path."""
    ws = Workspace()
    server = MockServer()
    ws.bind(server)

    ws.serve_static("/tmp/assets", "/assets")

    assert len(server.routes) == 1
    assert server.routes[0]["path"] == "/assets/{filename:.*}"


def test_workspace_serve_dynamic_without_bind():
    """Test serve_dynamic raises error when not bound."""
    ws = Workspace()

    with pytest.raises(RuntimeError, match="not bound"):
        ws.serve_dynamic(lambda r: "hello", "/api")


def test_workspace_serve_dynamic():
    """Test serve_dynamic adds route for function."""
    ws = Workspace()
    server = MockServer()
    ws.bind(server)

    def my_handler(request):
        return "hello"

    ws.serve_dynamic(my_handler, "/api/hello")

    assert len(server.routes) == 1
    assert server.routes[0]["path"] == "/api/hello"
    assert server.routes[0]["method"] == "GET"


def test_workspace_serve_dynamic_post():
    """Test serve_dynamic with POST method."""
    ws = Workspace()
    server = MockServer()
    ws.bind(server)

    ws.serve_dynamic(lambda r: "ok", "/api/submit", method="POST")

    assert server.routes[0]["method"] == "POST"


def test_workspace_repr():
    """Test workspace string representation."""
    ws = Workspace(paths=["/tmp/a", "/tmp/b"])

    assert "Workspace" in repr(ws)
    assert "/tmp/a" in repr(ws)
    assert "/tmp/b" in repr(ws)


# Tests for workspace_from_config


def test_workspace_from_config_none():
    """Test workspace_from_config with None."""
    ws = workspace_from_config(None)

    assert isinstance(ws, Workspace)
    assert ws.paths == "."


def test_workspace_from_config_string():
    """Test workspace_from_config with string."""
    ws = workspace_from_config("/tmp/test")

    assert isinstance(ws, Workspace)
    assert ws.roots == [Path("/tmp/test")]


def test_workspace_from_config_path():
    """Test workspace_from_config with Path."""
    ws = workspace_from_config(Path("/tmp/test"))

    assert isinstance(ws, Workspace)
    assert ws.roots == [Path("/tmp/test")]


def test_workspace_from_config_list():
    """Test workspace_from_config with list."""
    ws = workspace_from_config(["/tmp/a", "/tmp/b"])

    assert isinstance(ws, Workspace)
    assert ws.roots == [Path("/tmp/a"), Path("/tmp/b")]


def test_workspace_from_config_workspace():
    """Test workspace_from_config with existing Workspace."""
    original = Workspace(paths="/tmp/test")
    ws = workspace_from_config(original)

    assert ws is original


def test_workspace_multiple_routes():
    """Test workspace can register multiple routes."""
    ws = Workspace(paths="/tmp/test")
    server = MockServer()
    ws.bind(server)

    ws.link("/static")
    ws.serve_static("/tmp/assets", "/assets")
    ws.serve_dynamic(lambda r: "ok", "/api/status")

    assert len(server.routes) == 3
    assert len(ws._routes) == 3
