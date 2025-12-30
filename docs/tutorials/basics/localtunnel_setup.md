# Using localtunnel with Vuer

`localtunnel` is a free, open-source tunneling service that exposes your local server with SSL/TLS encryption. Unlike ngrok, it requires no account creation and is completely free, making it an excellent option for quick testing or when you don't want to pay for ngrok's premium features.

## Installation

Install localtunnel globally using npm:

```bash
npm install -g localtunnel
```

**Note:** You'll need Node.js and npm installed on your system. If you don't have them:
- **Mac users:** `brew install node`
- **Other platforms:** See the [official Node.js installation guide](https://nodejs.org/)

## Basic Usage

No authentication or account setup is required. Simply start localtunnel with:

```bash
lt --port 8012
```

You should see output like:
```
your url is: https://abc-xyz-123.loca.lt
```

**Note:** The URL will be randomly generated and will change each time you restart localtunnel.

This successfully promotes your local Vuer server from `ws://localhost:8012` to `wss://abc-xyz-123.loca.lt` (note the `wss` protocol for secure WebSocket).

### First-Time Access

The first time you access a localtunnel URL, you'll need to enter a passcode for security. This is a one-time step per session:

1. Open the localtunnel URL in your browser
2. You'll see a page asking for the "Tunnel Password"
3. The password is displayed in your terminal where you ran the `lt` command
4. Enter the password and click "Submit"
5. Your browser will remember this for the current session

### Connecting to Your Vuer Server

Once localtunnel is running and you've entered the passcode, use the generated URL to connect:

```
https://vuer.ai/?ws=wss://abc-xyz-123.loca.lt
```

Replace `abc-xyz-123.loca.lt` with your actual localtunnel URL.

**Note:** If you change the Vuer port (e.g., `app = Vuer(port=3012)`), you need to update the localtunnel command accordingly:
```bash
lt --port 3012
```
The connection URL will use the new localtunnel-generated domain.

## Using Custom Subdomains

You can request a custom subdomain for easier remembering (subject to availability):

```bash
lt --port 8012 --subdomain my-vuer-demo
```

If available, you'll get:
```
your url is: https://my-vuer-demo.loca.lt
```

Then connect with:
```
https://vuer.ai/?ws=wss://my-vuer-demo.loca.lt
```

**Note:** Custom subdomains are first-come, first-served. If your desired subdomain is taken, you'll receive an error and need to try a different name.

## Serving Static Files

When using localtunnel with the `https://vuer.ai` web client, you must use absolute URLs for static assets:

```python
# ✅ Correct - absolute URL with https
sess.upsert @ URDF(
    src='https://abc-xyz-123.loca.lt/static/urdf/robot.urdf',
    key='robot',
)

# ❌ Wrong - relative path won't work
sess.upsert @ URDF(
    src='static/urdf/robot.urdf',
    key='robot',
)
```

Replace `abc-xyz-123.loca.lt` with your actual localtunnel URL.