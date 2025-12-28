"""
WebXR Mesh Detection Example
=============================

This example demonstrates how to use the WebXRMesh component to detect and
visualize real-world environment geometry in WebXR AR sessions.

The example shows both usage modes:
1. Auto-Update mode: Automatically receive mesh updates when changes occur (efficient)
2. RPC mode: Request mesh data on-demand

Requirements:
- WebXR-compatible device with mesh detection support (e.g., Quest 3, ARCore devices)
- WebXR session must be initialized with 'mesh-detection' feature
- Immersive-ar mode must be active

The example provides two modes of operation which can be toggled by changing
the USE_AUTO_UPDATE_MODE flag
"""

from params_proto import EnvVar

from asyncio import sleep
import dotvar.auto_load  # noqa

import json
from pathlib import Path
from typing import Dict, Any, List, Optional
from asyncio import sleep

from vuer import Vuer, VuerSession
from vuer.schemas import Scene, WebXRMesh

# Toggle between auto-update mode and RPC mode
USE_AUTO_UPDATE_MODE = True

app = Vuer(
    domain="192.168.2.141",
    cors="https://192.168.2.141:8012",
    # SSL/TLS configuration (all None = HTTP mode)
    cert=EnvVar("SSL_CERT", default=None).get(),  # Path to SSL certificate file
    key=EnvVar("SSL_KEY", default=None).get(), # Path to SSL private key file
    ca_cert=EnvVar("SSL_CA_CERT", default=None).get(),  # Path to CA certificate for client verification
    host="0.0.0.0",
    port=8012
)

if USE_AUTO_UPDATE_MODE:
    # ============================================================================
    # AUTO-UPDATE MODE: Receive mesh data only when changes occur
    # ============================================================================

    @app.add_handler("WEBXR_MESH_UPDATE")
    async def handle_mesh_update(event, session):
        """
        Handler for WEBXR_MESH_UPDATE events when auto-update is enabled.

        This handler is called only when mesh changes are detected (new/updated/removed meshes).
        """
        meshes = event.value.get('meshes', [])

        if not meshes:
            print("No meshes detected yet")
            return

        print(f"\n--- Mesh update received at {event.ts} ---")
        print(f"Total meshes detected: {len(meshes)}")

        for i, mesh in enumerate(meshes):
            vertices = mesh.get('vertices', [])
            indices = mesh.get('indices', [])
            semantic_label = mesh.get('semanticLabel', 'unknown')
            matrix = mesh.get('matrix', [])

            num_vertices = len(vertices) // 3 if vertices else 0
            num_triangles = len(indices) // 3 if indices else 0

            print(f"  Mesh {i + 1}:")
            print(f"    Semantic label: {semantic_label}")
            print(f"    Vertices: {num_vertices}")
            print(f"    Triangles: {num_triangles}")
            print(f"    Transform matrix: {matrix[:4]}... (showing first 4 elements)")


    @app.spawn(start=True)
    async def main_auto_update(session: VuerSession):
        """
        Main function for auto-update mode.

        Sets up the scene with WebXRMesh component that automatically detects
        and reports changes in the mesh environment.
        """
        # # Get local IP address for Quest 3 access
        # import socket
        # hostname = socket.gethostname()
        # local_ip = socket.gethostbyname(hostname)

        print("Starting WebXR Mesh Detection (Auto-Update Mode)")

        # Create a minimal scene with ONLY WebXRMesh (disable all defaults)
        session.upsert(
            WebXRMesh(
                key="webxr-mesh",
                autoUpdate=True,   # Enable auto-update (default)
                color="#3b82f6",   # Blue color for meshes
                opacity=0.15,      # Semi-transparent
            ),
            to="bgChildren",
        )

        # Keep the session alive
        await session.forever()


else:
    # ============================================================================
    # RPC MODE: Request mesh data on-demand
    # ============================================================================

    @app.spawn(start=True)
    async def main_rpc(session: VuerSession):
        """
        Main function for RPC mode.

        Sets up the scene with WebXRMesh component (auto-update disabled) and periodically
        requests mesh data on-demand using RPC.
        """
        # Get local IP address for Quest 3 access
        import socket
        hostname = socket.gethostname()
        local_ip = socket.gethostbyname(hostname)

        print("Starting WebXR Mesh Detection (RPC Mode)")

        # Create a minimal scene with ONLY WebXRMesh (disable all defaults)
        session.set(Scene(
            children=[
                WebXRMesh(
                    key="webxr-mesh",
                    autoUpdate=False,  # Disable auto-update, use RPC only
                    color="#10b981",   # Green color for meshes
                    opacity=0.2,       # Semi-transparent
                )
            ],
            defaultLights=False,        # Disable default lighting
            defaultOrbitControls=False, # Disable orbit controls
            grid=False,                 # Disable grid
            bgChildren=[],              # No background children
        ))

        # Wait a bit for the AR session to initialize
        await sleep(2)
        print("\nStarting mesh data requests...\n")

        # Periodically request mesh data
        for i in range(10):  # Request 10 times
            try:
                print(f"--- Request {i + 1} ---")

                # Request mesh data from the client
                mesh_data = await session.get_webxr_mesh(key="webxr-mesh", ttl=5.0)

                meshes = mesh_data.value.get('meshes', [])

                if not meshes:
                    print("No meshes detected yet")
                else:
                    print(f"Retrieved {len(meshes)} meshes")

                    for j, mesh in enumerate(meshes):
                        vertices = mesh.get('vertices', [])
                        indices = mesh.get('indices', [])
                        semantic_label = mesh.get('semanticLabel', 'unknown')

                        num_vertices = len(vertices) // 3 if vertices else 0
                        num_triangles = len(indices) // 3 if indices else 0

                        print(f"  Mesh {j + 1}: {semantic_label}, "
                              f"{num_vertices} vertices, {num_triangles} triangles")

            except TimeoutError:
                print("Timeout waiting for mesh data response")
            except Exception as e:
                print(f"Error requesting mesh data: {e}")

            # Wait before next request
            await sleep(3)

        print("\nDemo completed. Keeping session alive...")
        await session.forever()