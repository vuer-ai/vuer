"""Vuer Client - Connect to a Vuer server and send/receive events.

Example usage::

    import asyncio
    from vuer import VuerClient
    from vuer.events import ClientEvent

    class MyEvent(ClientEvent):
        etype = "MY_EVENT"

    async def main():
        async with VuerClient(URI="ws://localhost:8012") as client:
            # Fire-and-forget with @ syntax (no await needed)
            client.send @ MyEvent(value={"key": "value"})

            # Awaitable with parentheses
            await client.send(MyEvent(value={"data": 123}))

            # Receive events from the server
            async for event in client:
                print(f"Received: {event}")

    asyncio.run(main())

Configuration via environment variables:
    VUER_CLIENT_URI: WebSocket URI to connect to (default ws://localhost:8012)
    WEBSOCKET_MAX_SIZE: Maximum WebSocket message size in bytes (default 256MB)
"""

import asyncio
import platform
from typing import AsyncIterator, Optional, Union

from msgpack import packb, unpackb
from params_proto import EnvVar

from vuer.events import ClientEvent


def get_client_info() -> dict:
  """Gather Python client system information.

  Returns a dictionary with system info for the INIT event:

  Common fields (shared with browser client):
    - client: Always "python" to distinguish from browser clients
    - clientVersion: The vuer library version
    - timezone: IANA timezone name (e.g., "America/Los_Angeles")
    - timezoneOffset: Timezone offset in minutes from UTC

  Python-specific fields:
    - pythonVersion: Python version string (e.g., "3.11.13")
    - platform: Operating system name (e.g., "Darwin", "Linux", "Windows")
    - platformVersion: OS kernel version string
    - machine: Machine architecture (e.g., "x86_64", "arm64")
  """
  try:
    from datetime import datetime

    # Get IANA timezone name (Python 3.9+ with zoneinfo)
    try:
      tz_info = datetime.now().astimezone().tzinfo
      tz_name = getattr(tz_info, "key", None) or getattr(tz_info, "zone", None)
    except Exception:
      tz_name = None

    # Fallback to time.tzname if IANA name not available
    if tz_name is None:
      import time

      tz_name = time.tzname[0] if time.tzname else None

    # Calculate offset in minutes from UTC (positive for west of UTC, like browser)
    local_offset = datetime.now().astimezone().utcoffset()
    tz_offset = int(-local_offset.total_seconds() // 60) if local_offset else None
  except Exception:
    tz_name = None
    tz_offset = None

  # Get vuer version
  try:
    from importlib.metadata import version

    client_version = version("vuer")
  except Exception:
    client_version = "unknown"

  return {
    # Common fields
    "client": "python",
    "clientVersion": client_version,
    "timezone": tz_name,
    "timezoneOffset": tz_offset,
    # Python-specific fields
    "pythonVersion": platform.python_version(),
    "platform": platform.system(),
    "platformVersion": platform.release(),
    "machine": platform.machine(),
  }


def _default_encoder(obj):
  """Custom encoder for msgpack to handle numpy types."""
  try:
    import numpy as np

    if isinstance(obj, np.ndarray):
      return obj.tolist()
    if isinstance(obj, (np.integer, np.floating)):
      return obj.item()
  except ImportError:
    pass
  raise TypeError(f"Cannot serialize object of type {type(obj)}")


class AsyncAt:
  """Wrapper to support both @ syntax (fire-and-forget) and await for async operations."""

  def __init__(self, coro_fn):
    self._coro_fn = coro_fn

  async def _fire_and_forget(self, event: ClientEvent):
    """Wrapper that suppresses connection closed exceptions."""
    try:
      await self._coro_fn(event)
    except Exception:
      pass  # Silently ignore errors in fire-and-forget mode

  def __matmul__(self, event: ClientEvent):
    """Fire-and-forget: client.send @ event (no await needed)"""
    asyncio.create_task(self._fire_and_forget(event))

  def __call__(self, event: ClientEvent):
    """Awaitable: await client.send(event)"""
    return self._coro_fn(event)


class VuerClient:
  """Client for connecting to a Vuer server.

  Supports sending ClientEvents and receiving ServerEvents via websocket.

  Example::

      async with VuerClient(uri="ws://localhost:8012") as client:
          # Using @ syntax (fire and forget)
          client.send @ ClientEvent(etype="CUSTOM", value="hello")

          # Using await
          await client.send(ClientEvent(etype="CUSTOM", value="hello"))

          event = await client.recv()
          print(event)

  Configuration (via constructor or environment variables):
      uri: WebSocket URI to connect to (env: VUER_CLIENT_URI, default ws://localhost:8012).
      max_size: Maximum WebSocket message size (env: WEBSOCKET_MAX_SIZE, default 256MB).
      ssl_verify: Whether to verify SSL certificates (env: VUER_SSL_VERIFY, default True).
  """

  uri: str = EnvVar @ "VUER_CLIENT_URI" | "ws://localhost:8012"
  websocket_max_size: int = EnvVar @ "WEBSOCKET_MAX_SIZE" | 2**28
  ssl_verify: bool = EnvVar @ "VUER_SSL_VERIFY" | True

  _ws = None
  _connected = False

  def __init__(self, uri: str = None, max_size: int = None, ssl_verify: bool = None, **kwargs):
    """Initialize the Vuer client.

    :param uri: WebSocket URI to connect to (e.g., "ws://localhost:8012")
    :param max_size: Maximum websocket message size in bytes (default 256MB)
    :param ssl_verify: Whether to verify SSL certificates (default True, env: VUER_SSL_VERIFY).
        Set to False for self-signed certs (e.g., ngrok tunnels).
    :param kwargs: Additional keyword arguments passed to websockets.connect()
        (e.g., ssl=ssl_context for custom SSL/TLS configuration)
    """
    if uri is not None:
      self.uri = uri
    if max_size is not None:
      self.websocket_max_size = max_size
    if ssl_verify is not None:
      self.ssl_verify = ssl_verify

    if not self.ssl_verify and "ssl" not in kwargs:
      import ssl

      ssl_ctx = ssl.create_default_context()
      ssl_ctx.check_hostname = False
      ssl_ctx.verify_mode = ssl.CERT_NONE
      kwargs["ssl"] = ssl_ctx

    self._connect_kwargs = kwargs

  async def connect(self) -> "VuerClient":
    """Connect to the Vuer server and send INIT event with client info.

    :return: Self for chaining
    """
    try:
      from websockets.asyncio.client import connect
    except ImportError:
      from websockets import connect

    self._ws = await connect(self.uri, max_size=self.websocket_max_size, **self._connect_kwargs)
    self._connected = True

    # Send INIT event with Python client system info (matches browser's INIT event)
    init_event = ClientEvent(etype="INIT", value=get_client_info())
    await self._send(init_event)

    return self

  async def close(self) -> None:
    """Close the connection."""
    if self._ws is not None:
      await self._ws.close()
      self._ws = None
      self._connected = False

  async def __aenter__(self) -> "VuerClient":
    """Async context manager entry."""
    return await self.connect()

  async def __aexit__(self, exc_type, exc_val, exc_tb) -> None:
    """Async context manager exit."""
    await self.close()

  def __aiter__(self) -> AsyncIterator[ClientEvent]:
    """Iterate over received events."""
    return self

  async def __anext__(self) -> ClientEvent:
    """Get next event from server."""
    event = await self.recv()
    if event is None:
      raise StopAsyncIteration
    return event

  @property
  def connected(self) -> bool:
    """Check if client is connected."""
    return self._connected and self._ws is not None

  async def _send(self, event: ClientEvent) -> None:
    """Internal send implementation.

    :param event: The ClientEvent to send
    :raises ConnectionError: If not connected
    :raises TypeError: If event is not a ClientEvent
    """
    if not self.connected:
      raise ConnectionError("Not connected to server. Call connect() first.")

    if not isinstance(event, ClientEvent):
      raise TypeError(f"Expected ClientEvent, got {type(event).__name__}")

    event_obj = event._serialize()

    # Convert timestamp to milliseconds (matching server behavior)
    if "ts" in event_obj and isinstance(event_obj["ts"], float):
      event_obj["ts"] = int(event_obj["ts"] * 1000)

    event_bytes = packb(
      event_obj, use_single_float=True, use_bin_type=True, default=_default_encoder
    )
    await self._ws.send(event_bytes)

  @property
  def send(self) -> AsyncAt:
    """Send a ClientEvent to the Vuer server.

    Supports both @ syntax and await::

        # Fire and forget with @ syntax
        client.send @ ClientEvent(etype="CUSTOM", value="data")

        # Awaitable
        await client.send(ClientEvent(etype="CUSTOM", value="data"))

    :return: AsyncAt wrapper supporting @ and await
    """
    return AsyncAt(self._send)

  async def recv(self, timeout: Optional[float] = None) -> Union[ClientEvent, None]:
    """Receive a ClientEvent from the server.

    :param timeout: Optional timeout in seconds
    :return: ClientEvent or None if connection closed
    :raises ConnectionError: If not connected
    """
    if not self.connected:
      raise ConnectionError("Not connected to server. Call connect() first.")

    try:
      if timeout is not None:
        msg = await asyncio.wait_for(self._ws.recv(), timeout=timeout)
      else:
        msg = await self._ws.recv()

      payload = unpackb(msg, raw=False)
      return ClientEvent(**payload)

    except asyncio.TimeoutError:
      return None
    except Exception:
      self._connected = False
      return None


if __name__ == "__main__":
  import asyncio

  from vuer.events import ClientEvent

  class HelloEvent(ClientEvent):
    etype = "HELLO"

  class PingEvent(ClientEvent):
    etype = "PING"

  async def example_client():
    """Example showing how to use VuerClient."""
    print("Connecting to Vuer server at ws://localhost:8012...")

    try:
      async with VuerClient(URI="ws://localhost:8012") as client:
        print("Connected!")

        # Send a client event using @ syntax (fire-and-forget)
        client.send @ HelloEvent(value={"message": "Hello from client!"})
        print("Sent event using @ syntax")

        # Send a client event using parentheses
        await client.send(PingEvent(value={"ts": 12345}))
        print("Sent event using parentheses")

        # Listen for events from the server
        print("Listening for events (Ctrl+C to exit)...")
        async for event in client:
          print(f"Received event: {event}")

    except ConnectionRefusedError:
      print("""
Could not connect. Make sure a Vuer server is running:

  from vuer import Vuer, VuerSession
  from vuer.events import ClientEvent
  app = Vuer()

  @app.add_handler('HELLO')
  async def on_hello(event, sess):
      print('Got hello:', event.value)

  @app.spawn(start=True)
  async def main(session: VuerSession):
      await session.forever()
""")

  asyncio.run(example_client())
