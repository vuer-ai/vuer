# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "Vuer"
copyright = "2023, Ge Yang"
author = "Ge Yang"
version = "0.0.11"

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
source_suffix = [".rst", ".md"]
html_sidebars = {
    "**": [
        "sidebar/scroll-start.html",
        "sidebar/brand.html",
        "sidebar/search.html",
        "sidebar/navigation.html",
        "sidebar/ethical-ads.html",
        "sidebar/scroll-end.html",
    ]
}
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]
autodoc_mock_imports = [
    "PIL",
    "aiohttp",
    "aiohttp_cors",
    "websockets",
]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# we use the default.
# html_title = f"{project} v{version} documentation"
# we use lower case here, different from project title
html_title = "vuer"
html_theme = "furo"
html_theme_options = {
    "light_css_variables": {
        "color-brand-content": "blue",
        "color-admonition-background": "blue",
    },
    "light_logo": "logos/logo_light.png",
    "dark_logo": "logos/logo_dark.png",
}
html_static_path = ["_static"]

html_context = {}