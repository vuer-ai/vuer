"""
WebRTC Custom Track Example
============================

Low-level API: bind a custom MediaStreamTrack to a WebRTC stream.

This example uses aiortc's MediaPlayer to stream from a system camera
or a test video file. The track produces frames on its own — no
push_frame() needed.

Usage::

    pip install 'vuer[webrtc]'
    python custom_track.py
"""

from vuer import Vuer
from vuer.schemas import WebRTCVideoPlane

# You need aiortc for this example
from aiortc.contrib.media import MediaPlayer

app = Vuer(host="0.0.0.0", port=8012, free_port=True)

# Open a system camera (macOS: "default:none", Linux: "/dev/video0")
# Or use a video file: MediaPlayer("/path/to/video.mp4")
player = MediaPlayer("default:none", format="avfoundation", options={"framerate": "30"})

# Bind the player's video track directly to a stream.
stream = app.create_webrtc_stream("usb-camera", track=player.video)

# Ensure camera is released on shutdown
async def _close_player(app):
    player.video.stop()

app.app.on_shutdown.append(_close_player)


@app.spawn(start=True)
async def main(session):
    session.upsert(
        WebRTCVideoPlane(
            src=stream.endpoint,
            key="camera-video",
            distanceToCamera=10,
            height=3,
            aspect=4/3,
        ),
    )
    await session.forever()
