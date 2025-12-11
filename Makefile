.PHONY: docs preview test clean clear clean-tags release-docs build publish-pypi release version

# Extract version from pyproject.toml
VERSION := $(shell grep '^version = ' pyproject.toml | sed 's/version = "\(.*\)"/\1/')

version:
	@echo "Current version: $(VERSION)"

docs:
	uv run sphinx-build -M html docs docs/_build

preview: docs
	uv run sphinx-autobuild --host 0.0.0.0 docs docs/_build/html

test:
	uv run pytest tests --capture=no

clean:
	rm -rf docs/_build build dist *.egg-info

clear:
	rm -rf docs/_build

# Documentation release (ReadTheDocs)
clean-tags:
	@if git rev-parse v$(VERSION) >/dev/null 2>&1; then \
		echo "Removing existing tag v$(VERSION)..."; \
		git tag -d v$(VERSION); \
		git push origin --delete v$(VERSION) 2>/dev/null || true; \
	else \
		echo "Tag v$(VERSION) does not exist, skipping cleanup"; \
	fi

release-docs: clean-tags
	@echo "Releasing documentation version: $(VERSION)"
	@if [ -z "$(MSG)" ]; then \
		echo "Error: MSG is required. Usage: make release-docs MSG='your message'"; \
		exit 1; \
	fi
	git push
	git tag v$(VERSION) -m '$(MSG)'
	git tag -f latest
	git push origin v$(VERSION)
	git push origin latest --force

# Package release (PyPI)
build: clean
	uv build

publish-pypi: build
	uv publish --token $$UV_PYPI_TOKEN

# Full release (both docs and package)
release: release-docs publish-pypi
