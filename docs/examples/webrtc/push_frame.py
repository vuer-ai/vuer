"""
WebRTC Push Frame Example
=========================

High-level API: push BGR numpy arrays to a WebRTC stream.

The stream is hosted on Vuer's built-in server — no separate process needed.
Open the Vuer client URL in a browser to see the video.

Usage::

    pip install 'vuer[webrtc]'
    python push_frame.py
"""

import threading
import time
import numpy as np
from vuer import Vuer
from vuer.schemas import WebRTCVideoPlane

app = Vuer(host="0.0.0.0", port=8012, free_port=True)

# Create a stream before app.start() — route gets registered automatically.
stream = app.create_webrtc_stream("test")


def push_loop():
    """Generate test pattern frames and push them to the stream (runs in a thread)."""
    stream.wait_ready_sync()

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
        stream.push_frame(frame)
        i += 2
        time.sleep(1 / 30)


# Start push thread BEFORE app.spawn(start=True), which blocks in run_forever().
threading.Thread(target=push_loop, daemon=True).start()


@app.spawn(start=True)
async def main(session):
    session.upsert(
        WebRTCVideoPlane(
            src=stream.endpoint,
            key="test-video",
            distanceToCamera=3,
            height=3,
            aspect=4/3,
        ),
    )
    await session.forever()
