# Setting Up TLS for WebXR

## Why TLS is Required

**To use Vuer with your VR headset (Quest, Vision Pro, etc.) or AR device, you must set up TLS/HTTPS.**

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
| [localtunnel](#using-localtunnel-as-a-proxy) | Free internet access | Low | Free |
| nginx reverse proxy | Advanced setups | Medium | Free |

```{admonition} Recommended for Beginners
:class: tip
- **VR headset on the same WiFi network as your computer?** → Use [self-signed certificates](self_signed_cert.md)
- **VR headset on a different network or need to share with others?** → Use [ngrok](ngrok_setup.md)
```

## Important Configuration Notes

When using any TLS setup (proxy or certificate), you need to configure two things correctly:

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

### Using Self-Signed Certificates (Local Development)

**Best for:** Connecting your VR headset when it's on the same WiFi network as your development machine

For detailed instructions on setting up and using self-signed certificates with Vuer for local development, please see the [self-signed certificate setup guide](self_signed_cert.md).

**Quick overview:**
1. Generate certificates with OpenSSL
2. Configure Vuer to use the certificates
3. Access via `https://<your-local-IP>:8012`

### Using ngrok (Internet Access)

**Best for:** Connecting your VR headset from anywhere (different WiFi network), or sharing your Vuer session with remote users

For detailed instructions on setting up and using ngrok with Vuer, including both free tier and paid subscription options, please see the [ngrok setup guide](ngrok_setup.md).

**Quick overview:**
1. Install and authenticate ngrok
2. Start ngrok tunnel: `ngrok http 8012`
3. Access via the ngrok URL: `https://abc123.ngrok.io`

### Using localtunnel (Free Alternative)

**Best for:** Quick testing with your VR headset without creating an account

[localtunnel](https://localtunnel.me) provides free tunneling service similar to ngrok, but requires entering a passcode when accessing.

**Installation:**
```bash
npm install -g localtunnel
```

**Usage:**
```bash
# Start your Vuer server first
# Then create a tunnel
lt --port 8012
```

You'll receive a URL like `https://xyz.loca.lt`. Access it via:
```
https://vuer.ai?ws=wss://xyz.loca.lt
```

```{admonition} Volunteers Needed!
:class: info
We're looking for contributors to expand this section with detailed localtunnel examples. If interested, please submit a PR or contact the maintainers.
```

### Using nginx as a Reverse Proxy

```{admonition} Volunteers Needed!
:class: info
We're looking for contributors to create a comprehensive nginx setup guide. If interested, please submit a PR or contact the maintainers.
```