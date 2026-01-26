"""Compatibility utilities for cross-platform imports.

Handles conditional imports for Pyodide/WebAssembly environments where
server dependencies (websockets, aiohttp) are unavailable.
"""

import sys

# Detect Pyodide/Emscripten environment
IS_PYODIDE = sys.platform == "emscripten"


def handle_server_import_error(error: ImportError):
    """Print informative message for server import failures.

    Silent in Pyodide (expected), informative on regular Python.
    """
    if IS_PYODIDE:
        return  # Expected in Pyodide - use VuerClient instead

    from textwrap import dedent

    missing = _parse_missing_module(error)
    print(
        dedent(f"""\
        vuer: Server unavailable ({missing}).
              Use VuerClient for client-only mode, or install server deps:
              pip install websockets aiohttp aiohttp-cors""")
    )


def _parse_missing_module(error: ImportError) -> str:
    """Extract the missing module name from an ImportError."""
    if error.name:
        return error.name
    msg = str(error)
    if "No module named" in msg:
        return msg.split("No module named")[-1].strip().strip("'\"")
    return "missing dependency"
