# Setting Up TLS for WebXR

## Why TLS is Required

Vuer is built on the WebXR protocol, which requires a secure (TLS/HTTPS) connection for security reasons. This means:

- **Web client** must be loaded via `https://` (e.g., `https://vuer.ai` or `https://<your-server>`)
- **WebSocket connection** must use `wss://` (e.g., `wss://<your-server>:8012`)

Without TLS, WebXR features will not work, and your VR/AR device won't be able to connect to Vuer.

## Setup Options

Choose the approach that best fits your needs:

| Method | Best For | Complexity | Cost |
|--------|----------|------------|------|
| [Self-signed certificate](self_signed_cert.md) | Local development, LAN access | Low | Free |
| [ngrok](ngrok_setup.md) | Quick setup, internet access | Low | Free tier available |
| [localtunnel](localtunnel_setup.md) | Free internet access | Low | Free |
| nginx reverse proxy | Advanced setups | Medium | Free |

```{admonition} Recommended for Beginners
:class: tip
- **VR headset on the same WiFi network as your computer?** → Use [self-signed certificates](self_signed_cert.md)
- **VR headset on a different network or need to share with others?** → Use [ngrok](ngrok_setup.md)
- **Don't want to pay for ngrok?** → Use [localtunnel](localtunnel_setup.md) (completely free alternative)
```

## Important Configuration Notes

When using any TLS setup (proxy or certificate), you need to configure two things correctly:

### 0. Client Certificate Configuration

By default, Vuer's HTTPS server does **not** require client certificates. If you see your browser asking for a client certificate when connecting:

**This means your server is configured for mutual TLS (mTLS)**. To fix this:

1. **Remove client certificate requirement** - Don't set `VUER_SSL_CA_CERT`
2. **Use standard HTTPS** - Just provide server cert and key:
   ```python
   app = Vuer(
       cert='/path/to/server.pem',
       key='/path/to/server-key.pem'
   )
   ```

**Mutual TLS is only activated when you provide a CA certificate** for client verification:

```python
# This requires client certificates
app = Vuer(
    cert='/path/to/server.pem',
    key='/path/to/server-key.pem',
    ca_cert='/path/to/ca.pem'  # Only set this if you want mTLS
)
```

For standard WebXR and local development, just use the first approach (no `ca_cert`).

### 1. Setting the WebSocket Endpoint

Pass the secure WebSocket endpoint to the Vuer web client using the `?ws=` query parameter:

```
https://vuer.ai?ws=wss://your-secure-endpoint
```

Examples:
```
# Using ngrok
https://vuer.ai?ws=wss://abc123.ngrok.io

# Using self-signed cert with local IP
https://vuer.ai?ws=wss://192.168.1.100:8012
```

### 2. Handling Static Files

When loading assets (URDF models, textures, etc.), the URL behavior depends on how you load the web client:

**Scenario A: Using `https://vuer.ai` web client**

You must use absolute URLs pointing to your secure server:

```python
# ✅ Correct - absolute URL with https
sess.upsert @ URDF(
    src='https://your-secure-endpoint/static/urdf/robot.urdf',
    key='robot',
)

# ❌ Wrong - relative path won't work
sess.upsert @ URDF(
    src='static/urdf/robot.urdf',
    key='robot',
)
```

**Scenario B: Self-hosting web client from your server**

Relative paths work fine:

```python
# ✅ Both work when using https://your-server
sess.upsert @ URDF(
    src='static/urdf/robot.urdf',  # Relative path
    key='robot',
)

sess.upsert @ URDF(
    src='https://your-server/static/urdf/robot.urdf',  # Absolute path
    key='robot',
)
```

---

## Setup Methods

### Self-Signed Certificates (Local Development)

Best for connecting your VR headset when it's on the same WiFi network as your development machine.

See the [self-signed certificate setup guide](self_signed_cert.md) for complete instructions.

### ngrok (Internet Access)

Best for connecting your VR headset from anywhere or sharing your Vuer session with remote users. Requires a free account.

See the [ngrok setup guide](ngrok_setup.md) for complete instructions.

### localtunnel (Free Alternative)

Best for connecting your VR headset from anywhere without creating an account. Completely free and open-source.

See the [localtunnel setup guide](localtunnel_setup.md) for complete instructions.

### nginx Reverse Proxy

```{admonition} Volunteers Needed!
:class: info
We're looking for contributors to create a comprehensive nginx setup guide. If interested, please submit a PR or contact the maintainers.
```
