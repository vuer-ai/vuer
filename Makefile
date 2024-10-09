.PHONY: default wheel dev convert-rst resize update-doc docs prepare-release release publish-no-test publish test

# shell option to use extended glob from from https://stackoverflow.com/a/6922447/1560241
SHELL:=/bin/bash -O extglob

VERSION=`< VERSION`

author=$(Ge Yang)
author_email=$(ge.ike.yang@gmail.com)

# notes on python packaging: http://python-packaging.readthedocs.io/en/latest/minimal.html
default: publish release
wheel:
	rm -rf dist
	python setup.py bdist_wheel
dev:
	make wheel
	pip install --ignore-installed dist/vuer*.whl
convert-rst:
	pandoc -s README.md -o README --to=rst
	sed -i '' 's/code/code-block/g' README
	sed -i '' 's/\.\. code-block:: log/.. code-block:: text/g' README
	sed -i '' 's/\.\//https\:\/\/github\.com\/geyang\/vuer\/blob\/master\//g' README
	perl -p -i -e 's/\.(jpg|png|gif)/.$$1?raw=true/' README
	rst-lint README
resize: # from https://stackoverflow.com/a/28221795/1560241
	echo ./figures/!(*resized).jpg
	convert ./figures/!(*resized).jpg -resize 888x1000 -set filename:f '%t' ./figures/'%[filename:f]_resized.jpg'
update-doc: convert-rst
	python setup.py sdist upload
preview:
	sphinx-autobuild docs docs/_build/html
docs:
	rm -rf docs/_build
	cd docs && make html
	cd docs/_build/html && python -m http.server 8888
prepare:
	-git tag -d v$(VERSION)
	-git push origin --delete v$(VERSION)
	-git tag -d latest
	-git push origin --delete latest
release: prepare
	git push
	git tag v$(VERSION) -m '$(msg)'
	git tag latest
	git push origin --tags -f
publish: convert-rst
	make wheel
	twine upload dist/*
test:
	pwd && \
	python -m pytest tests --capture=no

