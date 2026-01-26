"""Tests for the Img component."""

from pathlib import Path

import numpy as np
import pytest
from PIL import Image as PILImage

from vuer.schemas import Img

ASSETS_DIR = Path(__file__).parent / "assets"
TEST_PNG_PATH = ASSETS_DIR / "dices.png"
TEST_JPEG_PATH = ASSETS_DIR / "dices.jpeg"


def test_img_from_url():
  """Test creating Img from URL string."""
  url = "https://example.com/image.png"
  img = Img(src=url, key="url-img")

  assert img.tag == "Img"
  assert img.src == url
  assert img.key == "url-img"


def test_img_from_file_path_string():
  """Test creating Img from file path as string."""
  img = Img(str(TEST_PNG_PATH), key="file-img")

  assert img.tag == "Img"
  assert img.key == "file-img"
  assert isinstance(img.src, bytes)
  assert len(img.src) > 0


def test_img_from_file_path_object():
  """Test creating Img from Path object."""
  img = Img(TEST_PNG_PATH, key="path-img")

  assert img.tag == "Img"
  assert img.key == "path-img"
  assert isinstance(img.src, bytes)


def test_img_from_numpy_uint8():
  """Test creating Img from numpy array with uint8 dtype."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  img = Img(arr, key="numpy-uint8-img")

  assert img.tag == "Img"
  assert img.key == "numpy-uint8-img"
  assert isinstance(img.src, bytes)
  assert len(img.src) > 0


def test_img_from_numpy_float():
  """Test creating Img from numpy array with float dtype (0-1 range)."""
  arr = np.random.rand(64, 64, 3).astype(np.float32)
  img = Img(arr, key="numpy-float-img")

  assert img.tag == "Img"
  assert img.key == "numpy-float-img"
  assert isinstance(img.src, bytes)


def test_img_from_numpy_float64():
  """Test creating Img from numpy array with float64 dtype."""
  arr = np.random.rand(64, 64, 3)
  img = Img(arr, key="numpy-float64-img")

  assert img.tag == "Img"
  assert isinstance(img.src, bytes)


def test_img_from_pil_image():
  """Test creating Img from PIL Image."""
  pil_img = PILImage.open(TEST_PNG_PATH)
  img = Img(pil_img, key="pil-img")

  assert img.tag == "Img"
  assert img.key == "pil-img"
  assert isinstance(img.src, bytes)


def test_img_jpeg_format():
  """Test creating Img with JPEG format."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  img = Img(arr, format="jpeg", key="jpeg-img")

  assert img.tag == "Img"
  assert isinstance(img.src, bytes)
  # JPEG files start with FFD8
  assert img.src[:2] == b"\xff\xd8"


def test_img_png_format():
  """Test creating Img with PNG format (default)."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  img = Img(arr, format="png", key="png-img")

  assert img.tag == "Img"
  assert isinstance(img.src, bytes)
  # PNG files start with specific signature
  assert img.src[:4] == b"\x89PNG"


def test_img_jpeg_quality():
  """Test creating Img with JPEG format and quality setting."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)

  img_low = Img(arr, format="jpeg", quality=10, key="jpeg-low")
  img_high = Img(arr, format="jpeg", quality=95, key="jpeg-high")

  # Higher quality should generally produce larger file
  assert len(img_high.src) > len(img_low.src)


def test_img_from_binary_src():
  """Test creating Img from binary data passed to src."""
  with open(TEST_PNG_PATH, "rb") as f:
    binary_data = f.read()

  img = Img(src=binary_data, key="binary-img")

  assert img.tag == "Img"
  assert img.src == binary_data


def test_img_data_and_src_mutually_exclusive():
  """Test that data and src cannot be used together."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)

  with pytest.raises(AssertionError):
    Img(arr, src="https://example.com/image.png", key="error-img")


def test_img_empty_data():
  """Test creating Img with None data."""
  img = Img(None, key="empty-img")
  assert not hasattr(img, "src") or img.src is None


def test_img_empty_list_data():
  """Test creating Img with empty list data."""
  img = Img([], key="empty-list-img")
  assert not hasattr(img, "src") or img.src is None


def test_img_grayscale_numpy():
  """Test creating Img from grayscale numpy array expanded to RGB."""
  arr = np.random.randint(0, 255, (64, 64), dtype=np.uint8)
  arr_rgb = np.stack([arr, arr, arr], axis=-1)
  img = Img(arr_rgb, key="grayscale-img")

  assert img.tag == "Img"
  assert isinstance(img.src, bytes)


def test_img_pil_jpeg_format():
  """Test creating Img from PIL Image with JPEG format."""
  # Use JPEG file since PNG has RGBA which JPEG doesn't support
  pil_img = PILImage.open(TEST_JPEG_PATH)
  img = Img(pil_img, format="jpeg", key="pil-jpeg-img")

  assert isinstance(img.src, bytes)
  assert img.src[:2] == b"\xff\xd8"


def test_img_file_path_jpeg_format():
  """Test creating Img from file path with JPEG format."""
  # Use JPEG file directly
  img = Img(str(TEST_JPEG_PATH), format="jpeg", key="file-jpeg-img")

  assert isinstance(img.src, bytes)
  assert img.src[:2] == b"\xff\xd8"


def test_img_b64_format_not_supported_for_pil():
  """Test that b64 formats raise error for PIL images."""
  pil_img = PILImage.open(TEST_PNG_PATH)

  with pytest.raises(AssertionError, match="does not support base64"):
    Img(pil_img, format="b64png", key="b64-pil-img")


def test_img_b64_format_not_supported_for_file_path():
  """Test that b64 formats raise error for file paths."""
  with pytest.raises(AssertionError, match="does not support base64"):
    Img(str(TEST_PNG_PATH), format="b64png", key="b64-file-img")


def test_img_preserves_kwargs():
  """Test that additional kwargs are preserved."""
  arr = np.random.randint(0, 255, (64, 64, 3), dtype=np.uint8)
  img = Img(arr, key="kwargs-img", className="my-class", style={"width": "100px"})

  assert img.key == "kwargs-img"
  assert img.className == "my-class"
  assert img.style == {"width": "100px"}
