# Development Guide

This project uses modern Python packaging with [uv](https://docs.astral.sh/uv/) and `pyproject.toml`.

## Setup

### Option 1: Using uv (recommended)

Create a virtual environment and install dependencies:

```bash
uv sync --group dev
```

Activate the environment:

```bash
source .venv/bin/activate
```

### Option 2: Using pip

Install in your current environment (conda, virtualenv, or system Python):

```bash
pip install -e ".[dev]"
```

## Common Tasks

### Documentation

Build documentation:

```bash
make docs
```

Preview documentation with live reload:

```bash
make preview
```

The preview server will start at `http://localhost:8000/`

### Testing

Run tests:

```bash
make test
```

### Code Quality

Format code with ruff:

```bash
ruff format .
```

Lint code:

```bash
ruff check .
```

Fix linting issues automatically:

```bash
ruff check --fix .
```

## Project Structure

```
vuer/
├── src/vuer/          # Main package source
├── docs/              # Sphinx documentation
├── Makefile           # Build tasks
└── pyproject.toml     # Project configuration
```

## Release Management

The project uses Makefile commands for streamlined releases. Version is automatically extracted from `pyproject.toml`.

### Check Current Version

```bash
make version
```

Output: `Current version: 0.0.70`

### Release Documentation (ReadTheDocs)

Publishes documentation by creating git tags that trigger ReadTheDocs builds:

```bash
# Quick release (no message)
make release-docs

# With custom message (optional)
make release-docs MSG="Fix critical documentation bug"
```

This will:
1. Clean existing version tag (if any)
2. Push code changes
3. Create `v$(VERSION)` tag
4. Update `latest` tag to point to new version
5. Push tags to trigger ReadTheDocs build

### Release Package (PyPI)

Build and publish the Python package to PyPI:

```bash
# Set PyPI token
export UV_PYPI_TOKEN=pypi-xxxxx

# Build and publish
make publish-pypi
```

Or in one line:
```bash
UV_PYPI_TOKEN=pypi-xxxxx make publish-pypi
```

This will:
1. Clean build artifacts
2. Build wheel and sdist
3. Upload to PyPI

### Full Release (Documentation + Package)

Release both documentation and package in one command:

```bash
# Quick full release
UV_PYPI_TOKEN=pypi-xxxxx make release

# With custom message
UV_PYPI_TOKEN=pypi-xxxxx make release MSG="Release v0.0.70"
```

### Release Workflow

1. **Make changes** to code/docs
2. **Update version** in `pyproject.toml`:
   ```toml
   version = "0.0.71"
   ```
3. **Commit changes**:
   ```bash
   git commit -am "feat: add new feature"
   ```
4. **Release**:
   ```bash
   # Option 1: Release everything
   UV_PYPI_TOKEN=xxx make release

   # Option 2: Release separately
   make release-docs              # Publish docs
   UV_PYPI_TOKEN=xxx make publish-pypi  # Publish package
   ```

### Available Make Commands

| Command | Description |
|---------|-------------|
| `make version` | Show current version from pyproject.toml |
| `make docs` | Build documentation locally |
| `make preview` | Preview docs with live reload |
| `make test` | Run test suite |
| `make clean` | Remove all build artifacts |
| `make build` | Build package (wheel + sdist) |
| `make release-docs` | Release documentation to ReadTheDocs |
| `make publish-pypi` | Build and publish package to PyPI |
| `make release` | Full release (docs + package) |

### Notes

- Version is automatically read from `pyproject.toml` - no need to specify manually
- The `latest` tag always points to the most recent version
- Historical version tags (v0.0.69, v0.0.68, etc.) are preserved
- MSG parameter is optional for all release commands
