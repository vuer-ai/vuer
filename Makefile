.PHONY: docs preview test clean clear

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
