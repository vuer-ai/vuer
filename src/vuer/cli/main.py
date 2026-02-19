"""Dynamic CLI with plugin discovery.

This module discovers command classes from entry points and builds
a params-proto CLI with all available commands as subcommands.
"""

from __future__ import annotations

import importlib.metadata
import sys
from typing import Union


def discover_commands() -> list[type]:
    """Discover command classes from 'vuer.cli' entry points.

    Returns:
        List of command classes (dataclasses with __call__ method)
    """
    commands = []

    try:
        # Python 3.10+ / importlib_metadata
        eps = importlib.metadata.entry_points(group="vuer.cli")
    except TypeError:
        # Python 3.9 fallback
        eps = importlib.metadata.entry_points().get("vuer.cli", [])

    for ep in eps:
        try:
            cmd_class = ep.load()
            commands.append(cmd_class)
        except Exception as e:
            print(f"Warning: Failed to load command '{ep.name}': {e}", file=sys.stderr)

    return commands


def make_cli():
    """Build CLI dynamically from discovered commands.

    Returns:
        A callable CLI function decorated with @proto.cli
    """
    from params_proto import proto

    commands = discover_commands()

    if not commands:
        # No commands found - show helpful message
        @proto.cli(prog="vuer")
        def empty_cli():
            """Vuer CLI.

            No commands available. Install plugins to add commands:
                pip install vuer-hub    # Environment management
                pip install vuer-ros    # ROS/MCAP tooling
            """
            print("No commands available.")
            print("Install plugins to add commands:")
            print("  pip install vuer-hub    # Environment management")
            print("  pip install vuer-ros    # ROS/MCAP tooling")
            return 1

        return empty_cli

    # Build Union type from discovered commands
    if len(commands) == 1:
        CommandUnion = commands[0]
    else:
        # Create Union[Cmd1, Cmd2, ...] dynamically
        CommandUnion = Union[tuple(commands)]

    # Build command list for docstring
    cmd_lines = []
    for cmd in sorted(commands, key=lambda c: c.__name__.lower()):
        name = cmd.__name__.lower()
        # Convert CamelCase to kebab-case
        import re
        kebab_name = re.sub(r'(?<!^)(?=[A-Z])', '-', cmd.__name__).lower()
        # Get first line of docstring
        doc = (cmd.__doc__ or "").split("\n")[0].strip()
        cmd_lines.append(f"    {kebab_name:20} {doc}")

    commands_help = "\n".join(cmd_lines)

    docstring = f"""Vuer CLI - Extensible visualization toolkit.

COMMANDS
{commands_help}

EXAMPLES
    vuer serve                    Start local dev server
    vuer login                    Authenticate with Vuer Hub
    vuer sync                     Sync environment dependencies
    vuer playback --mcap file.mcap  Play back MCAP recording

PLUGINS
    pip install vuer-hub          Environment management
    pip install vuer-ros          ROS/MCAP visualization
"""

    # Create the CLI function with the dynamic type annotation
    def cli_impl(command):
        """Execute the selected command."""
        return command()

    cli_impl.__doc__ = docstring
    cli_impl.__annotations__ = {"command": CommandUnion}

    # Apply the decorator
    cli_func = proto.cli(prog="vuer")(cli_impl)

    return cli_func


def main() -> int:
    """Entry point for the vuer CLI."""
    cli = make_cli()
    result = cli()
    return result if isinstance(result, int) else 0


if __name__ == "__main__":
    sys.exit(main())
