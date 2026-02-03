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


# =============================================================================
# Workspace initialization tests
# =============================================================================


def test_workspace_init_no_args():
    """Test Workspace initialization with no arguments (defaults to '.')."""
    ws = Workspace()

    assert ws.paths == (Path("."),)


def test_workspace_init_single_string():
    """Test Workspace initialization with single string path."""
    ws = Workspace("/tmp/test")

    assert ws.paths == (Path("/tmp/test"),)


def test_workspace_init_single_path():
    """Test Workspace initialization with single Path object."""
    ws = Workspace(Path("/tmp/test"))

    assert ws.paths == (Path("/tmp/test"),)


def test_workspace_init_multiple_strings():
    """Test Workspace initialization with multiple string paths."""
    ws = Workspace("/tmp/a", "/tmp/b", "/tmp/c")

    assert ws.paths == (Path("/tmp/a"), Path("/tmp/b"), Path("/tmp/c"))


def test_workspace_init_mixed_args():
    """Test Workspace initialization with mixed string and Path args."""
    ws = Workspace("/tmp/a", Path("/tmp/b"), "/tmp/c")

    assert ws.paths == (Path("/tmp/a"), Path("/tmp/b"), Path("/tmp/c"))


def test_workspace_paths_is_tuple():
    """Test that paths returns a tuple (immutable)."""
    ws = Workspace("/tmp/a", "/tmp/b")

    assert isinstance(ws.paths, tuple)


def test_workspace_absolute_paths():
    """Test absolute_paths property."""
    ws = Workspace(".")

    assert ws.absolute_paths == [os.path.abspath(".")]


def test_workspace_absolute_paths_multiple():
    """Test absolute_paths with multiple overlay paths."""
    ws = Workspace(".", "/tmp")

    paths = ws.absolute_paths
    assert len(paths) == 2
    assert paths[0] == os.path.abspath(".")
    assert paths[1] == "/tmp"


# =============================================================================
# Workspace.find() tests
# =============================================================================


def test_workspace_find_file():
    """Test find() with multiple search paths."""
    with tempfile.TemporaryDirectory() as tmpdir1:
        with tempfile.TemporaryDirectory() as tmpdir2:
            # Create a file only in the second directory
            test_file = Path(tmpdir2) / "test.txt"
            test_file.write_text("hello")

            ws = Workspace(tmpdir1, tmpdir2)

            # Should find file in second path
            found = ws.find("test.txt")
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

            ws = Workspace(tmpdir1, tmpdir2)

            # Should find file in first path
            found = ws.find("test.txt")
            assert found == file1


def test_workspace_find_file_not_found():
    """Test find() returns None when file not found."""
    with tempfile.TemporaryDirectory() as tmpdir:
        ws = Workspace(tmpdir)

        found = ws.find("nonexistent.txt")
        assert found is None


def test_workspace_find_nested_path():
    """Test find() with nested file paths."""
    with tempfile.TemporaryDirectory() as tmpdir:
        # Create nested directory and file
        nested_dir = Path(tmpdir) / "subdir" / "deep"
        nested_dir.mkdir(parents=True)
        test_file = nested_dir / "file.txt"
        test_file.write_text("nested")

        ws = Workspace(tmpdir)

        found = ws.find("subdir/deep/file.txt")
        assert found == test_file


# =============================================================================
# Workspace.bind() tests
# =============================================================================


def test_workspace_bind():
    """Test binding workspace to server."""
    ws = Workspace()
    server = MockServer()

    result = ws.bind(server)

    assert ws._server is server
    assert result is ws  # Returns self for chaining


def test_workspace_bind_chaining():
    """Test that bind() supports method chaining."""
    ws = Workspace()
    server = MockServer()

    # Should be able to chain
    ws.bind(server).overlay(at="/static")

    assert len(server.routes) == 1


# =============================================================================
# Workspace.overlay() tests
# =============================================================================


def test_workspace_overlay_without_bind():
    """Test overlay() raises error when not bound."""
    ws = Workspace()

    with pytest.raises(RuntimeError, match="not bound"):
        ws.overlay()


def test_workspace_overlay_default_route():
    """Test overlay() uses /static as default route."""
    ws = Workspace("/tmp/test")
    server = MockServer()
    ws.bind(server)

    ws.overlay()

    assert len(server.routes) == 1
    assert server.routes[0]["path"] == "/static/{filename:.*}"
    assert server.routes[0]["method"] == "GET"


def test_workspace_overlay_custom_route():
    """Test overlay() with custom route."""
    ws = Workspace("/tmp/test")
    server = MockServer()
    ws.bind(server)

    ws.overlay(at="/assets")

    assert server.routes[0]["path"] == "/assets/{filename:.*}"


def test_workspace_overlay_records_route():
    """Test that overlay() records the route in _routes."""
    ws = Workspace("/tmp/a", "/tmp/b")
    server = MockServer()
    ws.bind(server)

    ws.overlay(at="/static")

    assert len(ws._routes) == 1
    assert ws._routes[0]["type"] == "overlay"
    assert ws._routes[0]["at"] == "/static"


def test_workspace_serve_deprecated():
    """Test that serve() is deprecated but still works."""
    ws = Workspace("/tmp/test")
    server = MockServer()
    ws.bind(server)

    import warnings
    with warnings.catch_warnings(record=True) as w:
        warnings.simplefilter("always")
        ws.serve(at="/static")

        assert len(w) == 1
        assert issubclass(w[0].category, DeprecationWarning)
        assert "overlay" in str(w[0].message)

    # Should still work
    assert len(server.routes) == 1


# =============================================================================
# Workspace.mount() tests
# =============================================================================


def test_workspace_mount_without_bind():
    """Test mount() raises error when not bound."""
    ws = Workspace()

    with pytest.raises(RuntimeError, match="not bound"):
        ws.mount("/tmp/test", to="/assets")


def test_workspace_mount():
    """Test mount() adds route for specific path."""
    ws = Workspace()
    server = MockServer()
    ws.bind(server)

    ws.mount("/tmp/assets", to="/assets")

    assert len(server.routes) == 1
    assert server.routes[0]["path"] == "/assets/{filename:.*}"
    assert server.routes[0]["method"] == "GET"


def test_workspace_mount_requires_to_keyword():
    """Test that mount() requires 'to' as keyword argument."""
    ws = Workspace()
    server = MockServer()
    ws.bind(server)

    # This should work (keyword)
    ws.mount("/tmp/test", to="/test")

    # Positional 'to' should fail (it's keyword-only)
    with pytest.raises(TypeError):
        ws.mount("/tmp/test", "/test")  # type: ignore


def test_workspace_mount_records_route():
    """Test that mount() records the route in _routes."""
    ws = Workspace()
    server = MockServer()
    ws.bind(server)

    ws.mount("/tmp/data", to="/data")

    assert len(ws._routes) == 1
    assert ws._routes[0]["type"] == "mount"
    assert ws._routes[0]["to"] == "/data"


# =============================================================================
# Workspace.route() tests
# =============================================================================


def test_workspace_route_without_bind():
    """Test route() raises error when not bound."""
    ws = Workspace()

    with pytest.raises(RuntimeError, match="not bound"):
        ws.route(lambda r: "hello", "/api")


def test_workspace_route():
    """Test route() adds route for function."""
    ws = Workspace()
    server = MockServer()
    ws.bind(server)

    def my_handler(request):
        return "hello"

    ws.route(my_handler, "/api/hello")

    assert len(server.routes) == 1
    assert server.routes[0]["path"] == "/api/hello"
    assert server.routes[0]["method"] == "GET"


def test_workspace_route_post():
    """Test route() with POST method."""
    ws = Workspace()
    server = MockServer()
    ws.bind(server)

    ws.route(lambda r: "ok", "/api/submit", method="POST")

    assert server.routes[0]["method"] == "POST"


def test_workspace_route_records_route():
    """Test that route() records the route in _routes."""
    ws = Workspace()
    server = MockServer()
    ws.bind(server)

    def my_handler(request):
        return "hello"

    ws.route(my_handler, "/api/hello")

    assert len(ws._routes) == 1
    assert ws._routes[0]["type"] == "route"
    assert ws._routes[0]["path"] == "/api/hello"
    assert ws._routes[0]["fn"] == "my_handler"


def test_workspace_route_lambda():
    """Test route() with lambda function."""
    ws = Workspace()
    server = MockServer()
    ws.bind(server)

    ws.route(lambda r: {"status": "ok"}, "/api/status")

    assert len(server.routes) == 1
    assert ws._routes[0]["fn"] == "<lambda>"


# =============================================================================
# Workspace.__repr__() tests
# =============================================================================


def test_workspace_repr_single():
    """Test workspace string representation with single path."""
    ws = Workspace("/tmp/test")

    assert repr(ws) == 'Workspace("/tmp/test")'


def test_workspace_repr_multiple():
    """Test workspace string representation with multiple paths."""
    ws = Workspace("/tmp/a", "/tmp/b")

    assert repr(ws) == 'Workspace("/tmp/a", "/tmp/b")'


# =============================================================================
# workspace_from_config() tests
# =============================================================================


def test_workspace_from_config_none():
    """Test workspace_from_config with None."""
    ws = workspace_from_config(None)

    assert isinstance(ws, Workspace)
    assert ws.paths == (Path("."),)


def test_workspace_from_config_string():
    """Test workspace_from_config with string."""
    ws = workspace_from_config("/tmp/test")

    assert isinstance(ws, Workspace)
    assert ws.paths == (Path("/tmp/test"),)


def test_workspace_from_config_path():
    """Test workspace_from_config with Path."""
    ws = workspace_from_config(Path("/tmp/test"))

    assert isinstance(ws, Workspace)
    assert ws.paths == (Path("/tmp/test"),)


def test_workspace_from_config_list():
    """Test workspace_from_config with list."""
    ws = workspace_from_config(["/tmp/a", "/tmp/b"])

    assert isinstance(ws, Workspace)
    assert ws.paths == (Path("/tmp/a"), Path("/tmp/b"))


def test_workspace_from_config_workspace():
    """Test workspace_from_config with existing Workspace."""
    original = Workspace("/tmp/test")
    ws = workspace_from_config(original)

    assert ws is original


def test_workspace_from_config_invalid_type():
    """Test workspace_from_config raises on invalid type."""
    with pytest.raises(TypeError, match="Cannot convert"):
        workspace_from_config(123)  # type: ignore


# =============================================================================
# Integration tests
# =============================================================================


def test_workspace_multiple_routes():
    """Test workspace can register multiple routes."""
    ws = Workspace("/tmp/test")
    server = MockServer()
    ws.bind(server)

    ws.overlay(at="/static")
    ws.mount("/tmp/assets", to="/assets")
    ws.route(lambda r: "ok", "/api/status")

    assert len(server.routes) == 3
    assert len(ws._routes) == 3

    # Verify route types
    assert ws._routes[0]["type"] == "overlay"
    assert ws._routes[1]["type"] == "mount"
    assert ws._routes[2]["type"] == "route"


def test_workspace_overlay_precedence():
    """Test that overlay paths are searched in order."""
    with tempfile.TemporaryDirectory() as tmpdir1:
        with tempfile.TemporaryDirectory() as tmpdir2:
            with tempfile.TemporaryDirectory() as tmpdir3:
                # Create same file in all directories with different content
                for i, tmpdir in enumerate([tmpdir1, tmpdir2, tmpdir3], 1):
                    (Path(tmpdir) / "shared.txt").write_text(f"content-{i}")

                # Create unique files
                (Path(tmpdir1) / "only-in-first.txt").write_text("first")
                (Path(tmpdir3) / "only-in-third.txt").write_text("third")

                ws = Workspace(tmpdir1, tmpdir2, tmpdir3)

                # Shared file should come from first
                assert ws.find("shared.txt") == Path(tmpdir1) / "shared.txt"

                # Unique files should be found
                assert ws.find("only-in-first.txt") == Path(tmpdir1) / "only-in-first.txt"
                assert ws.find("only-in-third.txt") == Path(tmpdir3) / "only-in-third.txt"

                # Non-existent should return None
                assert ws.find("nonexistent.txt") is None
