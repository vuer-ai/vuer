# Vuer CLI

Vuer provides an extensible command-line interface that discovers commands from installed plugins.

## Installation

```bash
pip install vuer
```

## Basic Usage

```bash
vuer --help          # Show all available commands
vuer serve           # Start local dev server
vuer version         # Show version info
```

## Plugin System

Vuer CLI uses Python entry points to discover commands. Any package can register commands under the `vuer.cli` entry point group.

### Creating a Plugin

1. Create a command class using params-proto dataclass
2. Register in pyproject.toml under `[project.entry-points."vuer.cli"]`
3. Install your package and the command appears in `vuer --help`

### Example: Creating a Custom Command

```python
from params_proto import Proto, ParamsProto

class MyCommand(ParamsProto, cli=True):
    """My custom vuer command."""

    host: str = Proto("localhost", help="Host to bind to")
    port: int = Proto(8080, help="Port number")

    def __call__(self):
        print(f"Running on {self.host}:{self.port}")
```

Then register in your `pyproject.toml`:

```toml
[project.entry-points."vuer.cli"]
my-command = "my_package.commands:MyCommand"
```

After installing your package, the command becomes available:

```bash
vuer my-command --host 0.0.0.0 --port 3000
```

### Available Plugins

| Package | Commands | Description |
|---------|----------|-------------|
| vuer | serve, version | Core commands |
| vuer-hub-cli | login, sync, add, remove, upgrade | Environment management |
| vuer-ros | live-server, playback, visualize, demcap | ROS/MCAP visualization |
| vuer-ptc-viz | minimap, viz-ptc-cams, viz-ptc-proxie | Point cloud visualization |

## Command Discovery

When you run `vuer --help`, the CLI discovers all installed packages that register commands under the `vuer.cli` entry point group. This allows the ecosystem to grow organically as new visualization tools are developed.

## Configuration

Commands can accept configuration via:

1. **Command-line flags**: `vuer serve --port 8080`
2. **Environment variables**: `VUER_PORT=8080 vuer serve`
3. **Config files**: params-proto supports YAML/JSON config loading

## Tips

- Use `vuer <command> --help` to see all options for a specific command
- Commands inherit from `ParamsProto` for automatic CLI argument parsing
- Plugin commands are loaded lazily for fast startup times
