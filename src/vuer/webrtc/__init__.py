"""WebRTC streaming support for Vuer.

Provides BGRArrayVideoStreamTrack, WebRTCStream, and WebRTCStreamManager
for hosting WebRTC video streams on Vuer's existing aiohttp server.

Requires: pip install vuer[webrtc]
"""

import asyncio
import fractions
import json
import time
from pathlib import Path

from aiohttp import web

_DEBUG_HTML_PATH = Path(__file__).parent / "debug.html"


async def serve_debug_page(request):
    """Serve the WebRTC debug page (standalone, no manager required)."""
    html = _DEBUG_HTML_PATH.read_text()
    return web.Response(content_type="text/html", text=html)


def _require_aiortc():
    """Lazy import of aiortc dependencies with a clear error message."""
    try:
        from aiortc import RTCPeerConnection, RTCSessionDescription
        from aiortc.contrib.media import MediaRelay
        from aiortc.rtcrtpsender import RTCRtpSender
        import av

        return RTCPeerConnection, RTCSessionDescription, MediaRelay, RTCRtpSender, av
    except ImportError:
        raise ImportError(
            "WebRTC support requires aiortc and av. Install with: pip install vuer[webrtc]"
        )


def _make_track_class():
    """Create BGRArrayVideoStreamTrack as a proper MediaStreamTrack subclass."""
    from aiortc import MediaStreamTrack
    import av as _av

    class _BGRArrayVideoStreamTrack(MediaStreamTrack):
        """MediaStreamTrack exposing BGR ndarrays as av.VideoFrame (latest-frame semantics)."""

        kind = "video"

        def __init__(self):
            super().__init__()
            self._queue: asyncio.Queue = asyncio.Queue(maxsize=1)
            self._start_time = None
            self._pts = 0
            self._av = _av
            self._fallback_resolution = (640, 480)  # (width, height), overridden by WebRTCStream

        async def recv(self):
            try:
                frame = await asyncio.wait_for(self._queue.get(), timeout=1.0)
            except asyncio.TimeoutError:
                w, h = self._fallback_resolution
                frame = self._av.VideoFrame(width=w, height=h, format="bgr24")
                frame.pts = self._pts
                frame.time_base = fractions.Fraction(1, 90000)
            return frame

        def push_frame(self, bgr_numpy, loop=None):
            """Push a BGR numpy array as a video frame (thread-safe).

            Args:
                bgr_numpy: numpy array in BGR format (H, W, 3).
                loop: asyncio event loop to schedule on.
            """
            if bgr_numpy is None:
                return

            try:
                video_frame = self._av.VideoFrame.from_ndarray(bgr_numpy, format="bgr24")

                if self._start_time is None:
                    self._start_time = time.time()
                    self._pts = 0
                else:
                    self._pts = int((time.time() - self._start_time) * 90000)

                video_frame.pts = self._pts
                video_frame.time_base = fractions.Fraction(1, 90000)
            except Exception:
                return

            target_loop = loop or asyncio.get_event_loop()
            if target_loop.is_closed():
                return

            def _put():
                try:
                    if self._queue.full():
                        self._queue.get_nowait()
                    self._queue.put_nowait(video_frame)
                except Exception:
                    pass

            target_loop.call_soon_threadsafe(_put)

    return _BGRArrayVideoStreamTrack


def _apply_sdp_bitrate(sdp, max_kbps):
    """Insert b=AS:<kbps> after each m=video line in the SDP."""
    lines = sdp.split("\r\n")
    result = []
    for line in lines:
        result.append(line)
        if line.startswith("m=video"):
            result.append(f"b=AS:{max_kbps}")
    return "\r\n".join(result)


def _apply_sdp_framerate(sdp, max_fps):
    """Insert a=framerate:<fps> after each m=video line in the SDP."""
    lines = sdp.split("\r\n")
    result = []
    for line in lines:
        result.append(line)
        if line.startswith("m=video"):
            result.append(f"a=framerate:{max_fps}")
    return "\r\n".join(result)


class WebRTCStream:
    """A single WebRTC stream that can serve video to multiple peers.

    Two usage modes:
    - High-level: omit track, use push_frame(bgr_numpy) to send frames.
    - Low-level: provide a custom track, frames come from the track itself.
    """

    def __init__(
        self,
        stream_id,
        vuer,
        track=None,
        codec="H264",
        max_bitrate=None,
        max_framerate=None,
        resolution=None,
    ):
        """
        Args:
            stream_id: Unique identifier for the stream.
            vuer: The Vuer server instance.
            track: Optional custom MediaStreamTrack. If None, creates an
                   internal track and enables push_frame().
            codec: Preferred codec ("H264" or "VP8"). Default "H264".
            max_bitrate: Maximum bitrate in bps (e.g. 2_000_000 for 2 Mbps).
                         None means encoder default.
            max_framerate: Maximum frames per second (e.g. 15, 30).
                           None means no limit.
            resolution: Tuple of (width, height) for the black fallback frame
                        when no frames are being pushed. Default (640, 480).
        """
        RTCPeerConnection, RTCSessionDescription, MediaRelay, RTCRtpSender, av = _require_aiortc()

        self.stream_id = stream_id
        self._vuer = vuer
        self._codec = (codec or "H264").lower()
        self._max_bitrate = max_bitrate
        self._max_framerate = max_framerate
        self._resolution = resolution or (640, 480)
        self._pcs = set()
        self._relay = MediaRelay()
        self._loop = None

        if track is None:
            TrackClass = _make_track_class()
            self._internal_track = TrackClass()
            self._internal_track._fallback_resolution = self._resolution
            self._track = self._internal_track
        else:
            self._internal_track = None
            self._track = track

    @property
    def ready(self):
        """Whether the stream's event loop has been set (server is running)."""
        return self._loop is not None

    def wait_ready_sync(self, timeout=10):
        """Block the current thread until the stream is ready.

        Args:
            timeout: Maximum seconds to wait. Raises TimeoutError if exceeded.
        """
        deadline = time.time() + timeout
        while not self.ready:
            if time.time() > deadline:
                raise TimeoutError(
                    f"WebRTC stream '{self.stream_id}' not ready after {timeout}s. "
                    "Is the server running?"
                )
            time.sleep(0.05)

    def push_frame(self, bgr_numpy):
        """Push a BGR numpy frame to the stream (thread-safe).

        Only available when no custom track was provided.
        """
        if self._internal_track is None:
            raise RuntimeError(
                "push_frame() is not available when a custom track is provided. "
                "The custom track produces its own frames."
            )
        self._internal_track.push_frame(bgr_numpy, loop=self._loop)

    @property
    def endpoint(self):
        """Full URL for this stream's offer endpoint."""
        v = self._vuer
        proto = "https" if v.cert else "http"
        host = v.local_ip if v.host == "0.0.0.0" else v.host
        return f"{proto}://{host}:{v.port}/webrtc/offer/{self.stream_id}"

    @property
    def url(self):
        """Path-only URL for this stream's offer endpoint."""
        return f"/webrtc/offer/{self.stream_id}"

    async def handle_offer(self, request):
        """Handle an SDP offer and return an SDP answer."""
        RTCPeerConnection, RTCSessionDescription, MediaRelay, RTCRtpSender, av = _require_aiortc()

        params = await request.json()
        offer = RTCSessionDescription(sdp=params["sdp"], type=params["type"])

        pc = RTCPeerConnection()
        self._pcs.add(pc)

        # Subscribe via relay so encoding happens once globally
        relayed_track = self._relay.subscribe(self._track)
        transceiver = pc.addTransceiver(relayed_track, direction="sendonly")

        # Set codec preferences
        capabilities = RTCRtpSender.getCapabilities("video")
        codec = self._codec
        codec_map = {"h264": "video/H264", "vp8": "video/VP8"}
        mime = codec_map.get(codec, "video/H264")
        preferred = [c for c in capabilities.codecs if c.mimeType == mime]
        if preferred:
            transceiver.setCodecPreferences(preferred)

        @pc.on("connectionstatechange")
        async def on_connectionstatechange():
            if pc.connectionState in ("failed", "closed"):
                self._pcs.discard(pc)
                await pc.close()

        await pc.setRemoteDescription(offer)
        answer = await pc.createAnswer()
        await pc.setLocalDescription(answer)

        sdp = pc.localDescription.sdp

        # Apply bitrate constraint via SDP b=AS: line (kbps)
        if self._max_bitrate is not None:
            max_kbps = self._max_bitrate // 1000
            sdp = _apply_sdp_bitrate(sdp, max_kbps)

        # Apply framerate constraint via SDP a=framerate: line
        if self._max_framerate is not None:
            sdp = _apply_sdp_framerate(sdp, self._max_framerate)

        return web.Response(
            content_type="application/json",
            text=json.dumps(
                {"sdp": sdp, "type": pc.localDescription.type}
            ),
        )

    def set_loop(self, loop):
        self._loop = loop

    async def cleanup(self):
        """Close all peer connections for this stream."""
        coros = [pc.close() for pc in self._pcs]
        self._pcs.clear()
        for coro in coros:
            try:
                await coro
            except Exception:
                pass


class WebRTCStreamManager:
    """Manages multiple WebRTC streams and dispatches offer requests."""

    def __init__(self):
        self._streams = {}

    def create_stream(self, stream_id, vuer, **kwargs):
        """Create and register a new WebRTC stream."""
        if stream_id in self._streams:
            raise ValueError(f"WebRTC stream '{stream_id}' already exists")
        stream = WebRTCStream(stream_id, vuer, **kwargs)
        self._streams[stream_id] = stream
        return stream

    async def offer_handler(self, request):
        """Route handler for /webrtc/offer/{stream_id}."""
        stream_id = request.match_info["stream_id"]
        stream = self._streams.get(stream_id)
        if stream is None:
            return web.Response(
                status=404,
                text=json.dumps({"error": f"Stream '{stream_id}' not found"}),
                content_type="application/json",
            )
        return await stream.handle_offer(request)

    def set_loop(self, loop):
        """Propagate event loop reference to all streams."""
        for stream in self._streams.values():
            stream.set_loop(loop)

    @property
    def streams(self):
        return dict(self._streams)

    async def cleanup_all(self):
        """Cleanup all streams."""
        for stream in self._streams.values():
            await stream.cleanup()
