.PHONY: docs preview test clean clear

docs:
	sphinx-build -M html docs docs/_build

preview: docs
	sphinx-autobuild --host 0.0.0.0 docs docs/_build/html

test:
	pytest tests --capture=no

clean:
	rm -rf docs/_build build dist *.egg-info

clear:
	rm -rf docs/_build
