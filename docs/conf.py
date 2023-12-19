# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "Vuer"
copyright = "2023, Ge Yang"
author = "Ge Yang"

import sys
import os

sys.path.insert(0, os.path.abspath("../"))

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.doctest",
    "myst_parser",
]

templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]
autodoc_mock_imports = ["PIL", "aiohttp", "aiohttp_cors", "websockets"]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "furo"
html_theme_options = {
    "light_css_variables": {
        "color-brand-content": "blue",
        "color-admonition-background": "blue",
    },
}
html_static_path = ["_static"]
