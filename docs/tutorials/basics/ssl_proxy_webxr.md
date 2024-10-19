# Setting Up TLS for WebXR


Vuer is built upon webXR protocol, which requires a transport layer
secure (TLS) connection to the server. This means that both the vuer 
web-client (what you load via `https://vuer.ai` or `https://<your-ip>`) 
and the vuer websocket connection (what you load via `wss://<your-ip>:8012`)
must be secure.

This adds a bit of overhead to the setup. There are **two recommended ways:**

1. **use ngrok as a proxy.** This is a paid service with a free-tier.
2. **use [localtunnel](https://localtunnel.me) as a proxy**. This is free. You need to fill-in a passcode.

You can also use `nginx` as a reverse proxy, or setup a self-signed certificate
with Let's Encrypt, and pass the cert to vuer during launch.

```{admonition} Note from Ge: Volunteers Needed!
:class: Info
I am looking for volunteers to help make this tutorial more
complete. If you are interested, please feel free to drop an email, or start
a PR.
```

When using an SSL proxy, there are two things to pay attention to:

- ✅ setting the websocket endpoint correctly in the vuer web-client,
- ✅ making sure static files are requested from the correct url.
  `http://localhost:8012/static/` will not do!

**Step 1: Setting the websocket endpoint:** 

You pass the TLS websocket endpoint via the query parameter 
`?ws=xxx` into vuer's web-client. Note the repeated `ws` and
then `wss://` in the query string:

```
https://vuer.ai?ws=wss://xxxxx.ngrok.io
```

**Step 2: Change the static file endpoint:** 

In your components, for example an URDF component, you can change
the `src` attribute to point to the correct url. For example, if 
you start with this

```python
sess.upsert @ URDF(
    src='static/urdf/robot.urdf',
    key='robot',
)
```
**and** you are loading the web-client from `https://<your-domain-name-with-ssl>`,
it should be okay. But if you are using `https://vuer.ai`, you need to change
the localhost to your own domain name with ssl. For example, right now
you have the following `src`:

```python
sess.upsert @ URDF(
    src='http://localhost:8012/static/urdf/robot.urdf',
    key='robot',
)
```
You need to change it to

```python
sess.upsert @ URDF(
    src='https://<your-domain-name-with-ssl>/static/urdf/robot.urdf',
    key='robot',
)
```

## Using ngrok as a proxy

First install `ngrok` on your local machine following the
[instructions](https://ngrok.com/docs).

Once you have installed
`ngrok`, you can use it as a proxy to turn your local, non-SSL
socket end point `ws://localhost:8012` into to `wss://xxxx.ngrok.io`,
(note the double w[ss] in the protocol), and for the static file
end point `http://localhost:8012/static/` into `https://xxxx.ngrok.io/static/`.

```{admonition} Volunteers Needed!
:class: Info
I am looking for volunteers to help make this tutorial more
complete. If you are interested, please feel free to drop an email, or start
a PR.
```

## Using localtunnel as a proxy

Please first go through `localtunnel`'s documentation here: [https://localtunnel.me](https://localtunnel.me).

```{admonition} Volunteers Needed!
:class: Info
I am looking for volunteers to help make this tutorial more
complete. If you are interested, please feel free to drop an email, or start
a PR.
```

## Using Let's Encrypt to create a self-signed certificate

Please refer to this tutorial: [https://letsencrypt.org/docs/certificates-for-localhost/](https://letsencrypt.org/docs/certificates-for-localhost/)

and then pass the `cert.pem` and `key.pem` to vuer during launch:

```shell
vuer --cert cert.pem --key key.pem --port 8012
```

For the full list of options, please refer to the [vuer documentation](https://docs.vuer.ai/en/{VERSION}/api/vuer.html#vuer.Vuer.cert).

