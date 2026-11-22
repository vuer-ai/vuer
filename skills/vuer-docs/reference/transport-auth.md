# Access tokens and roles

Pull requests: vuer-ai/vuer#176 (server), vuer-ai/vuer-ts#181 (client).

Auth is **off** by default. With auth off, local use does not change.

## Turn on auth

```python
from vuer import Vuer

app = Vuer(auth=True)  # or: export VUER_AUTH=1
```

With auth on, every WebSocket needs a token. The server checks the token
before the upgrade. A bad, expired or used-up token gets **HTTP 401**.

At start, the server prints a one-time `controller` link that is valid for 10
minutes.

### The secret

The server signs tokens with a secret. It reads the secret from:

1. `Vuer(auth_secret=...)`,
2. the `VUER_AUTH_SECRET` environment variable,
3. the file `~/.local/share/vuer/auth-secret`. The server makes this file on
   first use, with mode 0600.

The `vuer token` command uses the same secret. Thus it can make links for a
server that runs on the same computer.

## Roles

| Role | Access |
| --- | --- |
| `viewer` | Sees the scene. The app does not get its events, except `INIT` and RPC responses. |
| `controller` | Full access. |

Each session has `session.role` (`None` when auth is off). You can filter spawn
handlers by role:

```python
@app.spawn(role="controller")
async def operator(session):
    ...
```

`Vuer(viewer_events=("INIT",))` sets the event types that the app gets from
viewers.

## Links

A token is one-time by default. A link can also be N-use (up to 50 sessions) or
reusable until it expires. Each use opens its own session.

```python
token = app.issue_token("viewer", ttl=600, uses=1)     # one person
token = app.issue_token("viewer", ttl=3600, uses=5)    # five people
token = app.issue_token("viewer", ttl=3600, uses=None) # anyone, until expiry
print(app.share_url(token))                            # <client url>#token=...
```

From the shell:

```bash
vuer token --role viewer                     # one-time token
vuer token --role viewer --uses 5 --url http://localhost:8012
vuer token --role viewer --reusable --ttl 3600
vuer token --role controller
```

| Flag | Default | Meaning |
| --- | --- | --- |
| `--role` | `viewer` | `viewer` or `controller` |
| `--ttl` | `600` | Lifetime in seconds (up to 7 days) |
| `--uses` | `1` | Number of sessions (1–50) |
| `--reusable` | off | Any number of sessions until expiry. Do not use with `--uses`. |
| `--url` | — | Print `<url>#token=<token>` instead of the bare token |
| `--secret-file` | — | Secret file to use |

The design is the same as robot-env's `rigs token --uses N | --reusable`: an
HMAC-SHA256 signed payload `v, role, nonce, exp` (plus `uses` when it is not 1;
`0` means reusable). The server counts redemptions in memory.

## How clients send the token

| Client | Location of the token |
| --- | --- |
| Browser | `#token=` on the page URL (preferred: the browser does not send the fragment to servers), or `?token=`. The client adds it to the WebSocket URL as `?token=`, then removes it from the address bar. |
| Python | `VuerClient(token=...)` or `VUER_TOKEN`. It sends `Authorization: Bearer <token>`. |

The browser client stores the role from `SERVER_INFO`. Use `useVuerRole()` to
read it. A viewer client does not send events that the server drops.

## `/relay`

With auth on, `POST /relay` needs a `controller` token.

## Origin allow-list (`VUER_CORS`)

`VUER_CORS` is a comma-separated list of origin patterns (fnmatch). The server
uses it for HTTP CORS **and** for the `Origin` header of WebSocket upgrades.
A WebSocket from an origin that is not in the list gets **HTTP 403**.
Same-origin pages and clients with no `Origin` header (Python, curl) are always
allowed.

The default list:

```text
https://vuer.ai, https://*.vuer.ai,
http://localhost:*, https://localhost:*,
http://127.0.0.1:*, https://127.0.0.1:*,
https://dash.ml
```

A `*` in a host pattern does not match across dots or ports.

> **Warning:** In 0.1.x the default list ended in `*`, so every origin was allowed. To add
> origins, set `VUER_CORS` to the full list. To get the old behavior, set
> `VUER_CORS="*"`. The server shows a warning when `*` is set and auth is on.
