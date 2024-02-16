# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "Vuer"
copyright = "2023, Ge Yang"
author = "Ge Yang"
with open("../VERSION", "r") as f:
    version = f.read()
    version = version.strip()

import sys
import os

sys.path.insert(0, os.path.abspath("../"))

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.doctest",
    "sphinx.ext.viewcode",
    "sphinx.ext.mathjax",
    "myst_parser",
    "sphinx_copybutton",
    "sphinxcontrib.video",
]

video_enforce_extra_source = True

rst_epilog = f".. |version| replace:: {version}"


def setup(app):
    """This setup function is called to register the replacement.

    Example from:
    - [Substitutions-Inside-Sphinx-Code-Blocks-Arent-Replaced](
        https://stackoverflow.com/questions/8821511 )
    """

    def versioning(app, docname, source):
        source[0] = source[0].replace("{VERSION}", version)

    app.add_config_value("REPLACEMENT_LIST", {}, True)
    app.connect("source-read", versioning)


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
# Pull documentation types from hints
autodoc_typehints = "both"
autodoc_class_signature = "separated"
autodoc_default_options = {
    "members": True,
    "member-order": "bysource",
    "undoc-members": False,
    "inherited-members": False,
    "exclude-members": "__init__, __post_init__",
    "imported-members": False,
}
myst_enable_extensions = [
    "dollarmath",
    "amsmath",
    "deflist",
    "fieldlist",
    "html_admonition",
    "html_image",
    "colon_fence",
    "smartquotes",
    "replacements",
    "strikethrough",
    "substitution",
    "tasklist",
    "attrs_inline",
    "attrs_block",
]
myst_enable_checkboxes = True

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# we use the default.
# html_title = f"{project} v{version} documentation"
# we use lower case here, different from project title
html_title = "vuer"
html_theme = "furo"
html_theme_options: Dict[str, Any] = {
    # "light_css_variables": {
    #     "color-brand-content": "blue",
    #     "color-admonition-background": "blue",
    # },
    "light_logo": "logos/logo_light.png",
    "dark_logo": "logos/logo_dark.png",
    "footer_icons": [
        {
            "name": "GitHub",
            "url": "https://github.com/vuer-ai/vuer",
            "html": """
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
            """,
            "class": "",
        },
    ],
    "source_repository": "https://github.com/vuer-ai/vuer/",
    "source_branch": "main",
    "source_directory": "docs/",
}
html_static_path = ["_static"]

html_context = {}
