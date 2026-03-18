"""
Standalone WebRTC Server (without Vuer)
=======================================

A minimal standalone aiohttp + aiortc server for reference.
This is what teleimager's image_server.py does — run a separate
WebRTC server process/thread.

Use this approach when:
- You don't need Vuer's scene graph or XR features.
- You want a standalone video streaming endpoint.
- You need full control over the aiohttp app.

For the Vuer-integrated approach (recommended), see push_frame.py
and custom_track.py. The Vuer integration eliminates the need for
a separate server by hosting WebRTC signaling on Vuer's existing
aiohttp server.

Usage::

    pip install aiortc av aiohttp
    python standalone_server.py
"""

import asyncio
import fractions
import json
import time

import av
import numpy as np
from aiohttp import web
from aiortc import MediaStreamTrack, RTCPeerConnection, RTCSessionDescription
from aiortc.contrib.media import MediaRelay
from aiortc.rtcrtpsender import RTCRtpSender


class BGRArrayVideoStreamTrack(MediaStreamTrack):
    kind = "video"

    def __init__(self):
        super().__init__()
        self._queue = asyncio.Queue(maxsize=1)
        self._start_time = None
        self._pts = 0

    async def recv(self):
        return await self._queue.get()

    def push_frame(self, bgr_numpy, loop=None):
        video_frame = av.VideoFrame.from_ndarray(bgr_numpy, format="bgr24")
        if self._start_time is None:
            self._start_time = time.time()
            self._pts = 0
        else:
            self._pts = int((time.time() - self._start_time) * 90000)
        video_frame.pts = self._pts
        video_frame.time_base = fractions.Fraction(1, 90000)

        target_loop = loop or asyncio.get_event_loop()

        def _put():
            try:
                if self._queue.full():
                    self._queue.get_nowait()
                self._queue.put_nowait(video_frame)
            except Exception:
                pass

        target_loop.call_soon_threadsafe(_put)


pcs = set()
track = BGRArrayVideoStreamTrack()
relay = MediaRelay()


async def offer(request):
    params = await request.json()
    desc = RTCSessionDescription(sdp=params["sdp"], type=params["type"])

    pc = RTCPeerConnection()
    pcs.add(pc)

    relayed = relay.subscribe(track)
    transceiver = pc.addTransceiver(relayed, direction="sendonly")

    # Prefer H264
    caps = RTCRtpSender.getCapabilities("video")
    h264 = [c for c in caps.codecs if c.mimeType == "video/H264"]
    if h264:
        transceiver.setCodecPreferences(h264)

    @pc.on("connectionstatechange")
    async def on_state():
        if pc.connectionState in ("failed", "closed"):
            pcs.discard(pc)
            await pc.close()

    await pc.setRemoteDescription(desc)
    answer = await pc.createAnswer()
    await pc.setLocalDescription(answer)

    return web.Response(
        content_type="application/json",
        text=json.dumps({"sdp": pc.localDescription.sdp, "type": pc.localDescription.type}),
    )


async def generate_frames():
    """Push test pattern frames at 30fps — colored blocks that scroll."""
    loop = asyncio.get_event_loop()
    W, H = 640, 480
    BLOCK = 80
    colors = [
        (180, 60, 60), (60, 180, 60), (60, 60, 180),
        (180, 180, 60), (60, 180, 180), (180, 60, 180),
    ]
    i = 0
    while True:
        frame = np.zeros((H, W, 3), dtype=np.uint8)
        offset = i % BLOCK
        idx = 0
        for y in range(-BLOCK + offset, H, BLOCK):
            for x in range(-BLOCK + offset, W, BLOCK):
                c = colors[idx % len(colors)]
                y0, y1 = max(0, y), min(H, y + BLOCK)
                x0, x1 = max(0, x), min(W, x + BLOCK)
                frame[y0:y1, x0:x1] = c
                idx += 1
        track.push_frame(frame, loop)
        i += 2
        await asyncio.sleep(1 / 30)


async def on_startup(app):
    asyncio.ensure_future(generate_frames())


async def on_shutdown(app):
    coros = [pc.close() for pc in pcs]
    await asyncio.gather(*coros)


if __name__ == "__main__":
    import aiohttp_cors

    app = web.Application()
    cors = aiohttp_cors.setup(app, defaults={
        "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
            allow_methods="*",
        )
    })
    resource = app.router.add_resource("/offer")
    cors.add(resource.add_route("POST", offer))
    app.on_startup.append(on_startup)
    app.on_shutdown.append(on_shutdown)
    web.run_app(app, host="0.0.0.0", port=8013)
