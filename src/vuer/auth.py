"""Access tokens, roles and origin checks for the vuer server.

A vuer server that runs with ``auth=True`` accepts a WebSocket only when the
handshake carries a valid access token. A token is a short string that the
server (or the ``vuer token`` command, with the same secret) signs with
HMAC-SHA256::

    <base64url(payload)>.<base64url(signature)>

The payload is ``{"v": 1, "role", "nonce", "exp"}``, plus ``"uses"`` when the
token is not single-use (``0`` means any number of uses until it expires). The
signature covers ``b"vuer-access-v1." + payload`` so that a vuer token cannot
be used for another purpose that shares the same secret.

Roles:

- ``viewer``: sees the scene. The server does not give the events of a viewer
  to the application handlers, except ``INIT`` and RPC responses.
- ``controller``: full access, the same as a session on a server without auth.

The server counts the redemptions of each token in memory. Each redemption
makes its own session. This design follows the access links of robot-env
(``rigs token --uses N | --reusable``).
"""

import base64
import hashlib
import hmac
import json
import math
import os
import secrets
import stat
import time
from fnmatch import fnmatch
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Union

ROLES = ("viewer", "controller")
MAX_USES = 50  # largest counted number of redemptions of one token
MAX_TTL = 7 * 24 * 3600  # longest token lifetime, in seconds
DEFAULT_TTL = 600
_DOMAIN = b"vuer-access-v1."

# Events that the server gives to application handlers from a viewer session.
# RPC responses (``<ETYPE>_RESPONSE@<uuid>``) are also given, see ``viewer_may_send``.
VIEWER_EVENTS = ("INIT",)

# Default origin allow-list (fnmatch patterns). It does not contain ``*``.
DEFAULT_ORIGINS = ",".join(
  [
    "https://vuer.ai",
    "https://*.vuer.ai",
    "http://localhost:*",
    "https://localhost:*",
    "http://127.0.0.1:*",
    "https://127.0.0.1:*",
  ]
)


def _b64encode(data: bytes) -> str:
  return base64.urlsafe_b64encode(data).rstrip(b"=").decode()


def _b64decode(text: str) -> bytes:
  return base64.b64decode(text + "=" * (-len(text) % 4), altchars=b"-_", validate=True)


def _key(secret: Union[str, bytes]) -> bytes:
  return secret.encode() if isinstance(secret, str) else secret


def issue_token(
  secret: Union[str, bytes],
  *,
  role: str = "viewer",
  ttl: float = DEFAULT_TTL,
  uses: Optional[int] = 1,
  now: Optional[float] = None,
) -> str:
  """Sign an access token.

  :param secret: The server secret.
  :param role: ``"viewer"`` or ``"controller"``.
  :param ttl: Lifetime in seconds (1 to ``MAX_TTL``).
  :param uses: Number of redemptions (1 to ``MAX_USES``), or ``None`` for any
      number of redemptions until the token expires.
  :return: The token string.
  """
  if role not in ROLES:
    raise ValueError(f"Unknown role {role!r}; use one of {ROLES}")
  if type(ttl) not in (int, float) or not math.isfinite(ttl) or not 0 < ttl <= MAX_TTL:
    raise ValueError(f"Token lifetime must be between 1 and {MAX_TTL} seconds")
  if uses is not None and (type(uses) is not int or not 1 <= uses <= MAX_USES):
    raise ValueError(f"Token uses must be between 1 and {MAX_USES}, or None (reusable)")
  now = time.time() if now is None else now
  payload = {"v": 1, "role": role, "nonce": secrets.token_urlsafe(16), "exp": now + ttl}
  if uses != 1:
    payload["uses"] = 0 if uses is None else uses
  encoded = _b64encode(json.dumps(payload, separators=(",", ":")).encode())
  signature = hmac.new(_key(secret), _DOMAIN + encoded.encode(), hashlib.sha256).digest()
  return encoded + "." + _b64encode(signature)


def verify_token(secret: Union[str, bytes], token: str, *, now: Optional[float] = None) -> Optional[dict]:
  """Check the signature, the payload and the expiry of a token.

  :return: The payload with ``uses`` set (``None`` = reusable), or ``None`` if
      the token is not valid. This does not count redemptions.
  """
  now = time.time() if now is None else now
  try:
    if not isinstance(token, str) or len(token) > 1024:
      return None
    encoded, signature = token.split(".")
    expected = hmac.new(_key(secret), _DOMAIN + encoded.encode(), hashlib.sha256).digest()
    if not hmac.compare_digest(expected, _b64decode(signature)):
      return None
    payload = json.loads(_b64decode(encoded))
    base = {"v", "role", "nonce", "exp"}
    if not (
      isinstance(payload, dict)
      and set(payload) in (base, base | {"uses"})
      and type(payload["v"]) is int
      and payload["v"] == 1
      and payload["role"] in ROLES
      and isinstance(payload["nonce"], str)
      and len(payload["nonce"]) == 22
      and type(payload["exp"]) in (int, float)
      and math.isfinite(payload["exp"])
      and now < payload["exp"] <= now + MAX_TTL
    ):
      return None
    uses = payload.get("uses", 1)
    if type(uses) is not int or not 0 <= uses <= MAX_USES or ("uses" in payload and uses == 1):
      return None
    return {**payload, "uses": uses or None}
  except (ValueError, TypeError, UnicodeError):
    return None


class TokenLedger:
  """Counts the redemptions of each token in memory.

  A token is redeemed once for each session that it opens. A single-use token
  opens one session; an N-use token opens N sessions; a reusable token opens
  sessions until it expires.
  """

  def __init__(self, secret: Union[str, bytes]):
    self.secret = secret
    self._used: Dict[str, int] = {}  # token -> number of redemptions
    self._expiry: Dict[str, float] = {}

  def redeem(self, token: str, *, now: Optional[float] = None) -> Optional[str]:
    """Redeem a token for one session.

    :return: The role of the session, or ``None`` if the token is not valid,
        has expired, or has no uses left.
    """
    now = time.time() if now is None else now
    self._prune(now)
    payload = verify_token(self.secret, token, now=now)
    if payload is None:
      return None
    used = self._used.get(token, 0)
    if payload["uses"] is not None and used >= payload["uses"]:
      return None
    self._used[token] = used + 1
    self._expiry[token] = payload["exp"]
    return payload["role"]

  def _prune(self, now: float):
    for token in [t for t, exp in self._expiry.items() if exp <= now]:
      self._expiry.pop(token, None)
      self._used.pop(token, None)


def default_secret_file() -> Path:
  return Path(os.environ.get("XDG_DATA_HOME", Path.home() / ".local/share")) / "vuer/auth-secret"


def load_secret(path: Union[str, Path, None] = None, *, create: bool = True) -> str:
  """Return the server secret.

  The ``VUER_AUTH_SECRET`` environment variable wins. Otherwise the secret is
  read from an owner-only file (mode 0600 in a 0700 directory), by default
  ``~/.local/share/vuer/auth-secret``, which is created on first use.
  """
  env = os.environ.get("VUER_AUTH_SECRET")
  if env and path is None:
    return env
  path = Path(path) if path is not None else default_secret_file()
  path = path.expanduser().absolute()
  if create:
    path.parent.mkdir(mode=0o700, parents=True, exist_ok=True)
    try:
      fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_EXCL | os.O_NOFOLLOW, 0o600)
    except FileExistsError:
      pass
    else:
      with os.fdopen(fd, "w") as file:
        file.write(secrets.token_urlsafe(32) + "\n")
  directory = path.parent.stat()
  if directory.st_uid != os.getuid() or stat.S_IMODE(directory.st_mode) & 0o077:
    raise ValueError(f"The secret directory {path.parent} must be owned by this user, with no group or other access")
  fd = os.open(path, os.O_RDONLY | os.O_NOFOLLOW)
  with os.fdopen(fd) as file:
    info = os.fstat(file.fileno())
    if not stat.S_ISREG(info.st_mode) or info.st_uid != os.getuid() or stat.S_IMODE(info.st_mode) & 0o077:
      raise ValueError(f"The secret file {path} must be a regular file owned by this user, with mode 0600")
    secret = file.read(1024).strip()
  if len(secret) < 32:
    raise ValueError(f"The secret in {path} is too short")
  return secret


def token_from_request(request) -> Optional[str]:
  """Return the access token of an HTTP or WebSocket upgrade request.

  Browsers put it in the ``token`` query parameter (they cannot set headers on
  a WebSocket upgrade). Other clients can send ``Authorization: Bearer <token>``.
  """
  header = request.headers.get("Authorization", "")
  if header[:7].lower() == "bearer ":
    return header[7:].strip() or None
  return request.query.get("token") or None


def viewer_may_send(etype: str, allowed: Iterable[str] = VIEWER_EVENTS) -> bool:
  """True if the server gives this event type from a viewer session to the handlers."""
  return etype in allowed or "_RESPONSE@" in etype


def parse_origins(origins: Union[str, Iterable[str], None]) -> List[str]:
  if origins is None:
    return []
  if isinstance(origins, str):
    origins = origins.split(",")
  return [o.strip().rstrip("/") for o in origins if o and o.strip()]


def origin_allowed(origin: Optional[str], patterns: Iterable[str]) -> bool:
  """True if the ``Origin`` matches one of the fnmatch patterns.

  ``*`` allows every origin. A missing origin is allowed: browsers always send
  one, so a request without it comes from a non-browser client.
  """
  if not origin:
    return True
  origin = origin.rstrip("/").lower()
  for pattern in patterns:
    pattern = pattern.lower()
    if pattern == "*" or origin == pattern:
      return True
    if any(c in pattern for c in "*?[") and fnmatch(origin, pattern) and _host_safe(origin, pattern):
      return True
  return False


def _host_safe(origin: str, pattern: str) -> bool:
  """Stop ``*`` in a host pattern from matching across dots or ports.

  ``https://*.vuer.ai`` must match ``https://app.vuer.ai`` but not
  ``https://evil.com/.vuer.ai`` or ``https://evil.com:1.vuer.ai``; ``http://localhost:*``
  must match a port number only.
  """
  scheme, _, host = origin.partition("://")
  if not scheme or "/" in host or "@" in host:
    return False
  if pattern.endswith(":*"):
    hostname, _, port = host.rpartition(":")
    return port.isdigit() and fnmatch(hostname, pattern.partition("://")[2][:-2])
  return ":" not in host or host.rpartition(":")[2].isdigit()
