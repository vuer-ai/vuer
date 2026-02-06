# Using ngrok with Vuer

`ngrok` is a popular tunneling service that can expose your local server with SSL/TLS encryption.

## Installation

For Mac users:
```bash
brew install ngrok
```

For other platforms, see the [official ngrok installation guide](https://ngrok.com/docs/guides).

After installation, you'll need to sign up for a free account at [ngrok.com](https://ngrok.com) and authenticate:
```bash
ngrok config add-authtoken YOUR_AUTHTOKEN
```

## Free Tier (No Subscription Required)

The ngrok free tier works perfectly for WebXR development. Simply start ngrok with:

```bash
ngrok http 8012
```

You should see output like:
```
Forwarding
https://1a2b-3c4d-5e6f.ngrok-free.app -> http://localhost:8012
```

**Note:** The URL will be randomly generated and will change each time you restart ngrok.

This successfully promotes your local vuer server from `ws://localhost:8012` to `wss://1a2b-3c4d-5e6f.ngrok-free.app` (note the double `wss` in the protocol).

### Connecting to Your Vuer Server (Free Tier)

Once ngrok is running, use the randomly generated URL to connect:

```
https://vuer.ai/?ws=wss://1a2b-3c4d-5e6f.ngrok-free.app
```

**Note:** If you change the Vuer port (e.g., `app = Vuer(port=3012)`), you need to update the ngrok command accordingly:
```bash
ngrok http 3012
```
The connection URL remains the same format, just with the new ngrok-generated domain.


## Paid Tier (Personal Subscription - For Custom Subdomains)

If you have a **Personal subscription plan**, you can use custom subdomains that remain consistent across restarts.

### Configuration with Persistent Subdomains

1. Edit the ngrok configuration:
   ```bash
   ngrok config edit
   ```

2. Add the following below your `authtoken`:
   ```yaml
   endpoints:
       - name: vuer-demo
         url: https://{YOUR_USERNAME}-vuer-port.ngrok.app
         upstream:
           url: 8012
       - name: vuer-dev
         url: https://{YOUR_USERNAME}-dev.ngrok.app
         upstream:
           url: 3000
   ```

3. Start all configured tunnels:
   ```bash
   ngrok start --all
   ```

### Quick Start with Custom Subdomain

```bash
ngrok http --subdomain=YOUR_USERNAME-vuer-port 8012
```

You should see output like:
```
Forwarding
https://YOUR_USERNAME-vuer-port.ap.ngrok.io -> http://localhost:8012
```

### Connecting to Your Vuer Server (Paid Tier)

```
https://vuer.ai/?ws=wss://YOUR_USERNAME-vuer-port.ap.ngrok.io
```

**Note:** If you change the Vuer port (e.g., `app = Vuer(port=3012)`), you need to update the ngrok command accordingly:
```bash
ngrok http --subdomain=YOUR_USERNAME-vuer-port 3012
```
The connection URL remains the same since you're using a custom subdomain.

## Connecting a Python Client via ngrok

When connecting a `VuerClient` to a Vuer server through ngrok (especially TCP tunnels), you may encounter SSL certificate verification errors with self-signed certificates. Use `ssl_verify=False` to disable verification:

```python
from vuer import VuerClient

async with VuerClient(uri="wss://7.tcp.ngrok.io:26620", ssl_verify=False) as client:
    ...
```

Or set the environment variable:
```bash
VUER_SSL_VERIFY=false python client.py
```