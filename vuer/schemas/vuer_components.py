from typing import List

from .scene_components import SceneElement


class ContribLoader(SceneElement):
    """
    ContribLoader is a specialized SceneElement responsible for handling
    external library contributions. It manages the loading of a library
    including its version, entry point, and development mode flag.

    the library needs to be in umd format, and accesses the shared vuer
    components via globals:

    ```typescript
    declare global {
      interface Window {
        React: typeof React;
        ReactDOM: typeof ReactDOM;
        VUER: typeof VUER;
        THREE: typeof THREE;
        JSX: typeof JSX;
        FIBER: typeof FIBER;
      }
    }
    ```

    Attributes:
        tag (private str): Identifier for the component. Default is "ContribLoader".

        url (str | None): The URL from which the external library is loaded.
        library (str | None): The name of the external library being managed.
        version (str): The version of the external library. Default is "latest".
        main (str): The relative path to the main entry point of the library.
                    Default is "dist/index.js". This needs to be an umd module.
        dev (bool): A flag to denote whether the library is in development mode.
                    Default is False. When in development mode, it loads from
                    `third_party/${fileName}?ts=${Date.now()}`
    """
    tag = "ContribLoader"
    url = None
    library = None
    version = "latest"
    main = "dist/index.js"
    dev = False


