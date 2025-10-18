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
make preview-docs
```

The preview server will start at `http://0.0.0.0:8000`

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

## Publishing

### Using uv (recommended)

1. Update version in `pyproject.toml`
2. Build the package: `uv build`
3. Publish: `uv publish`

### Using traditional tools

1. Update version in `pyproject.toml`
2. Build: `python -m build`
3. Publish: `twine upload dist/*`
