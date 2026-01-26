"""Tests for the Image component (3D scene image plane)."""

from pathlib import Path

import numpy as np
from PIL import Image as PILImage

from vuer.schemas import Image

ASSETS_DIR = Path(__file__).parent / "assets"
TEST_PNG_PATH = ASSETS_DIR / "dices.png"
TEST_JPEG_PATH = ASSETS_DIR / "dices.jpeg"


def test_image_from_url():
  """Test creating Image from URL string."""
  url = "https://example.com/image.png"
  plane = Image(src=url, key="url-plane")

  assert plane.tag == "Image"
  assert plane.key == "url-plane"
  # src is converted to rgb by __post_init__
  assert plane.rgb == url
  assert not hasattr(plane, "src")


def test_image_from_numpy():
  """Test creating Image from numpy array."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  plane = Image(arr, key="numpy-plane")

  assert plane.tag == "Image"
  assert plane.key == "numpy-plane"
  # src is converted to rgb by __post_init__
  assert isinstance(plane.rgb, bytes)
  assert not hasattr(plane, "src")


def test_image_from_file_path():
  """Test creating Image from file path."""
  plane = Image(str(TEST_PNG_PATH), key="file-plane")

  assert plane.tag == "Image"
  assert isinstance(plane.rgb, bytes)
  assert not hasattr(plane, "src")


def test_image_from_pil_image():
  """Test creating Image from PIL Image."""
  pil_img = PILImage.open(TEST_PNG_PATH)
  plane = Image(pil_img, key="pil-plane")

  assert plane.tag == "Image"
  assert isinstance(plane.rgb, bytes)
  assert not hasattr(plane, "src")


def test_image_with_position():
  """Test Image with position parameter."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  plane = Image(arr, position=[1, 2, -3], key="pos-plane")

  assert plane.tag == "Image"
  assert plane.position == [1, 2, -3]


def test_image_with_rotation():
  """Test Image with rotation parameter."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  plane = Image(arr, rotation=[0.5, 1.0, 0], key="rot-plane")

  assert plane.tag == "Image"
  assert plane.rotation == [0.5, 1.0, 0]


def test_image_with_scale_float():
  """Test Image with scalar scale parameter."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  plane = Image(arr, scale=2.5, key="scale-plane")

  assert plane.tag == "Image"
  assert plane.scale == 2.5


def test_image_with_scale_tuple():
  """Test Image with tuple scale parameter."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  plane = Image(arr, scale=[1.5, 2.0, 1.0], key="scale-tuple-plane")

  assert plane.tag == "Image"
  assert plane.scale == [1.5, 2.0, 1.0]


def test_image_with_opacity():
  """Test Image with opacity parameter."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  plane = Image(arr, opacity=0.5, key="opacity-plane")

  assert plane.tag == "Image"
  assert plane.opacity == 0.5


def test_image_full_transform():
  """Test Image with all transform parameters."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  plane = Image(
    arr,
    position=[0, 1, -2],
    rotation=[0, 0.5, 0],
    scale=2,
    opacity=0.8,
    key="full-transform-plane",
  )

  assert plane.tag == "Image"
  assert plane.position == [0, 1, -2]
  assert plane.rotation == [0, 0.5, 0]
  assert plane.scale == 2
  assert plane.opacity == 0.8


def test_image_jpeg_format():
  """Test Image with JPEG format."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  plane = Image(arr, format="jpeg", quality=80, key="jpeg-plane")

  assert plane.tag == "Image"
  assert isinstance(plane.rgb, bytes)
  # JPEG files start with FFD8
  assert plane.rgb[:2] == b"\xff\xd8"


def test_image_png_format():
  """Test Image with PNG format."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  plane = Image(arr, format="png", key="png-plane")

  assert plane.tag == "Image"
  assert isinstance(plane.rgb, bytes)
  # PNG files start with specific signature
  assert plane.rgb[:4] == b"\x89PNG"
