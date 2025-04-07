# Vuer Basics

`vuer.ai` has two main components: a server written in Python and a client app that runs in the web browser.

The server-side component is responsible for populating and manipulating 3D scenes.

The client-side component is a web application written in [TypeScript](https://www.typescriptlang.org/) and [react-three-fiber](https://github.com/pmndrs/react-three-fiber). The `vuer` web client receives data from the server through a websocket connection, hydrates the components within those messages, and then renders those components in the 3D scene using WebGL. This web-based client-server setup allows users to interact with objects in the 3D scene in real-time while taking full advantage of the power of AI and robotics libraries in Python.

In other words, [`vuer.ai`](https://vuer.ai) offers a powerful, component-based API in python for interacting and manipulating 3D scenes. Its web-client also offer native [webXR](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API) support, allowing users to interact with the scene with devices such as the [Oculus Quest 3](https://www.oculus.com/quest-3/), and the [Apple Vision Pro ](https://www.apple.com/vision/).

```{eval-rst}
.. toctree::
    :maxdepth: 1
    :hidden:

    Setting Up Your First Scene <basics/setting_a_scene.md>
    Async Programming 101 <basics/async_programming.md>
    Simpe Life-Cycle <basics/simple_life_cycle.md>
    Setting Up SSL Proxy for WebSocket <basics/ssl_proxy_webxr.md>
    Serviing Dynamic Content <basics/adding_html_handler.md>
```

