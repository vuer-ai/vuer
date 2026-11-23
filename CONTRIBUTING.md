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

CI (`.github/workflows/check.yml`) runs only the cheap checks on pull requests:
`ruff check src/vuer --select E9,F63,F7,F82` and `pytest src specs` on Python 3.10 and 3.12.
Before you open a pull request, run the checks that CI does not run (docs build and a
server smoke test that serves the bundled `client_build`), then open the printed URL in a browser:

```bash
scripts/test-local.sh
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

Version is auto-extracted from `pyproject.toml`. Use Makefile commands for releases.

### Quick Reference

```bash
# Check version
make version

# Release docs (pushes tags only, not code)
make release-docs                    # No message
make release-docs MSG="description"  # With message

# Release package to PyPI
UV_PYPI_TOKEN=xxx make publish-pypi

# Full release (docs + package)
UV_PYPI_TOKEN=xxx make release
```

### Release Workflow

1. Update `version` in `pyproject.toml`
2. Commit and push code changes
3. Run release command(s) above

**Note:** `make release-docs` only pushes git tags (v0.0.70 and latest), not branch code.
