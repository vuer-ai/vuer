# Using Self-Signed Certificates for Local Development

For local development, you can create a self-signed certificate and use it directly with Vuer. This approach doesn't require a proxy service, but browsers will show a security warning (which is expected for self-signed certificates).

```{admonition} Production Use
:class: warning
For production deployments with a public domain, use [Let's Encrypt](https://letsencrypt.org/) to obtain a trusted certificate. For localhost/local network development, the self-signed approach below is recommended.
```

## Step 1: Generate a Self-Signed Certificate

Run the following command in your terminal to create the certificate files:

```bash
openssl req -x509 -newkey rsa:2048 \
  -keyout key.pem \
  -out cert.pem \
  -days 365 \
  -nodes \
  -subj "/CN=localhost"
```

This creates two files:
- `key.pem`: the private key
- `cert.pem`: the certificate (valid for 365 days)

Set the proper permissions so Vuer can read them:

```bash
chmod 644 key.pem
chmod 644 cert.pem
```

## Step 2: Launch Vuer with TLS

You can use the certificate like this:

```python
from vuer import Vuer

# Create Vuer instance with TLS
# host="0.0.0.0" allows connections from any network interface,
# enabling access from other devices on your local network (e.g., VR headsets)
vuer = Vuer(host="0.0.0.0", port=8012)
vuer.cert = './cert.pem'
vuer.key = './key.pem'

# Your Vuer code here...
```

## Step 3: Access the Secure Service

Find your local IP address (e.g., `192.168.1.100`). You have two options for accessing Vuer:

**Option A: Self-Hosted Web Client**

Access Vuer directly from your local server:

```
https://<your-local-IP>:8012/?ws=wss://<your-local-IP>:8012
```

Example:
```
https://192.168.1.100:8012/?ws=wss://192.168.1.100:8012
```

**Option B: Using vuer.ai Web Client**

Alternatively, use the hosted Vuer web client and point it to your local websocket:

```
https://vuer.ai/?ws=wss://<your-local-IP>:8012
```

Example:
```
https://vuer.ai/?ws=wss://192.168.1.100:8012
```

This option is convenient because you don't need to serve the web client yourself. However, if you're loading static files (like URDF models or textures), you must use absolute URLs instead of relative paths. For example:

```python
sess.upsert @ URDF(
    src='https://192.168.1.100:8012/static/urdf/robot.urdf',
    key='robot',
)
```

Instead of:
```python
sess.upsert @ URDF(
    src='static/urdf/robot.urdf',  # This won't work with vuer.ai
    key='robot',
)
```

```{admonition} Certificate Warning
:class: note
Since the certificate is self-signed, your browser will show a security warning. This is expected in local development. You'll need to click through the warning to proceed (usually "Advanced" → "Proceed to site").
```