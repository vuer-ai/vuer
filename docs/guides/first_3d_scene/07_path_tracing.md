# 3.1.7 Path Tracing Renders

## Overview

Path tracing is a rendering technique that simulates light transport for photorealistic results. Unlike real-time rasterization, path tracing accurately models:

- **Global illumination**: Light bouncing between surfaces
- **Caustics**: Light focused through glass or water
- **Soft shadows**: Realistic penumbra from area lights
- **Color bleeding**: Colored light bouncing onto nearby surfaces
- **Realistic reflections and refractions**: Physically accurate light paths

Vuer includes a WebGL-based path tracer for high-quality offline renders directly in the browser.

## When to Use Path Tracing

**Path tracing is ideal for:**
- Final renders and presentations
- Product visualization
- Architectural visualization
- Scientific visualization requiring accuracy
- Marketing materials

**Not recommended for:**
- Real-time interaction (too slow)
- VR/AR applications
- Animations (unless pre-rendered)
- Mobile devices

## Enabling Path Tracing

Path tracing is accessed through the Leva control panel:

1. Open your scene in a browser
2. Navigate to the **Render.Pathtracer** section in Leva
3. Enable the path tracer
4. Adjust parameters as needed
5. Wait for convergence (progressive rendering)

## Path Tracer Parameters

The path tracer exposes several controls through the Leva UI:

### Core Parameters

```javascript
// Default configuration (for reference)
{
  enabled: true,              // Enable/disable path tracer
  minSamples: 1,             // Minimum samples before display
  samples: 20,               // Total samples per pixel
  tiles: 3,                  // Tile subdivision (3x3 = 9 tiles)
  bounces: 4,                // Maximum light bounces
  resolutionFactor: 2,       // Render resolution multiplier
  renderPriority: 1,         // Render queue priority
  multipleImportanceSampling: true,  // MIS for better convergence
}
```

### Parameter Guide

#### Samples (Quality)

Controls image quality and noise levels.

- **Low (5-10 samples)**: Fast preview, very noisy
- **Medium (20-50 samples)**: Interactive preview, some noise
- **High (100-500 samples)**: Production quality, minimal noise
- **Very High (1000+ samples)**: Pristine quality, very slow

```
samples: 20    → Good for quick previews
samples: 100   → Good for reviews
samples: 500   → Good for final renders
```

#### Bounces (Light Transport)

Maximum number of times light can bounce between surfaces.

- **1 bounce**: Direct lighting only (no global illumination)
- **2-3 bounces**: Basic indirect lighting
- **4-6 bounces**: Good global illumination (recommended)
- **8+ bounces**: Maximum accuracy (diminishing returns)

**Effect on scenes:**
```
bounces: 1  → Hard shadows, no color bleeding
bounces: 4  → Soft indirect light, color bleeding
bounces: 8  → Maximum realism, subtle improvements
```

#### Tiles (Progressive Rendering)

Divides the image into tiles for progressive feedback.

- **1 tile**: Renders entire image at once (slower initial feedback)
- **2 tiles**: 2x2 grid (4 tiles total)
- **3 tiles**: 3x3 grid (9 tiles total) - recommended
- **4+ tiles**: Many small tiles (faster initial preview)

**Trade-offs:**
- More tiles: Faster initial preview, see progress sooner
- Fewer tiles: Less overhead, faster final convergence

#### Resolution Factor

Multiplier for render resolution vs. display resolution.

- **0.5**: Half resolution (4x faster, lower quality)
- **1.0**: Native resolution
- **2.0**: 2x supersampling (4x slower, sharper)
- **4.0**: 4x supersampling (16x slower, maximum quality)

```
resolutionFactor: 0.5  → Fast draft
resolutionFactor: 1.0  → Standard quality
resolutionFactor: 2.0  → High quality
```

#### Multiple Importance Sampling (MIS)

Advanced sampling technique that combines light sampling and BRDF sampling.

- **Enabled**: Better convergence, fewer samples needed (recommended)
- **Disabled**: Simpler but may converge slower

**When to enable:**
- Complex lighting setups
- Mixed direct/indirect lighting
- Scenes with both bright and dark areas

**When to disable:**
- Debugging sampling issues
- Very simple scenes with minimal lighting

## Materials for Path Tracing

Path tracing works best with physically-based materials:

### Perfect Glass

```python
from vuer.schemas import Sphere

Sphere(
    args=[0.5, 64, 64],
    position=[0, 0.5, 0],
    materialType="physical",
    material=dict(
        color="#ffffff",
        transmission=1.0,        # Full transparency
        thickness=0.3,           # Glass thickness for absorption
        roughness=0.0,           # Perfect clarity
        ior=1.5,                 # Refractive index (1.5 = glass)
        reflectivity=0.5,
    ),
    key="glass-sphere"
)
```

### Brushed Metal

```python
from vuer.schemas import Box

Box(
    args=[1, 1, 1],
    position=[2, 0.5, 0],
    materialType="physical",
    material=dict(
        color="#c0c0c0",
        roughness=0.3,           # Slight roughness for brushed look
        metalness=1.0,           # Full metal
        clearcoat=0.5,           # Protective coating
        clearcoatRoughness=0.1,
    ),
    key="metal-box"
)
```

### Translucent Material

```python
from vuer.schemas import Torus

Torus(
    args=[0.5, 0.2, 32, 64],
    position=[0, 1, 0],
    materialType="physical",
    material=dict(
        color="#ffcccc",
        transmission=0.7,        # Partial transparency
        thickness=0.5,
        roughness=0.1,
        ior=1.3,                 # Lower IOR for organic materials
    ),
    key="translucent-torus"
)
```

### Subsurface Scattering (SSS)

While true SSS requires specialized materials, approximate it:

```python
from vuer.schemas import Sphere

Sphere(
    args=[0.5, 64, 64],
    position=[-2, 0.5, 0],
    materialType="physical",
    material=dict(
        color="#ffddcc",
        transmission=0.3,        # Allow some light through
        thickness=0.8,           # Thicker for more scattering
        roughness=0.2,
        ior=1.4,
        attenuationColor="#ff9966",  # Color absorbed internally
        attenuationDistance=0.5,
    ),
    key="sss-sphere"
)
```

## Lighting for Path Tracing

### Area Lights (Recommended)

Area lights create soft, realistic shadows:

```python
from vuer.schemas import RectAreaLight

# Large softbox light
RectAreaLight(
    key="softbox",
    position=[0, 3, 3],
    intensity=50,
    width=2,                 # Wide area for soft shadows
    height=2,
    color="#ffffff",
)

# Colored fill light
RectAreaLight(
    key="fill",
    position=[-3, 2, 1],
    intensity=20,
    width=1.5,
    height=1.5,
    color="#b3d9ff",         # Cool blue fill
)
```

### Point Lights (Caustics)

Point lights can create interesting caustics through glass:

```python
from vuer.schemas import PointLight

PointLight(
    key="caustic-light",
    position=[0, 2, 0],
    intensity=100,           # Bright for visible caustics
    color="#ffffff",
    castShadow=True,
)
```

### Emissive Surfaces

Self-illuminating materials act as area lights:

```python
from vuer.schemas import Plane

# Ceiling light panel
Plane(
    args=[2, 2],
    position=[0, 3, 0],
    rotation=[-1.57, 0, 0],  # Face down
    materialType="standard",
    material=dict(
        color="#ffffff",
        emissive="#fff9e6",
        emissiveIntensity=5.0,  # Bright enough to illuminate scene
    ),
    key="ceiling-light"
)
```

## Environment Lighting

### HDRI Environment Maps

For maximum realism, use HDRI environment maps:

```python
from vuer.schemas import Scene, SceneBackground

Scene(
    # Load HDRI background
    SceneBackground(
        src="https://example.com/studio_hdri.hdr",
        key="hdri-background"
    ),

    # Your scene objects...

    # Optional: Adjust environment intensity
    # (Note: This may need to be set through additional scene properties)
)
```

**Where to find HDRIs:**
- [Poly Haven](https://polyhaven.com/hdris) - Free, CC0 HDRIs
- [HDRI Haven](https://hdrihaven.com/) - Free HDR maps
- [HDR Labs](http://www.hdrlabs.com/) - sIBL archives

## Optimization Strategies

### Start Low, Go High

Progressive workflow for faster iteration:

```
1. Draft: samples=5, bounces=2, resolution=0.5
   → Quick preview in seconds

2. Review: samples=50, bounces=4, resolution=1.0
   → Acceptable quality in ~1 minute

3. Final: samples=500, bounces=6, resolution=2.0
   → Production quality (be patient!)
```

### Adaptive Sampling

Focus samples where needed:

1. Start with low sample count
2. Identify noisy areas
3. Use tiles to prioritize complex regions
4. Increase samples only where necessary

### Material Optimization

- Use simpler materials for occluded objects
- Reduce unnecessary transparency
- Limit IOR complexity (use 1.5 for most glass)
- Avoid extreme roughness values (0.0 or 1.0 can be slow)

### Lighting Optimization

- Use fewer, larger area lights instead of many small ones
- Limit emissive surface count
- Disable shadows on minor lights
- Use environment lighting as primary source when possible

## Render Settings

### Draft (Interactive)

```javascript
{
  samples: 5,
  bounces: 2,
  tiles: 4,
  resolutionFactor: 0.5,
}
```
**Use for**: Layout, camera positioning, material setup

### Preview (Review)

```javascript
{
  samples: 50,
  bounces: 4,
  tiles: 3,
  resolutionFactor: 1.0,
}
```
**Use for**: Client reviews, progress checks

### Production (Final)

```javascript
{
  samples: 500,
  bounces: 6,
  tiles: 2,
  resolutionFactor: 2.0,
}
```
**Use for**: Final deliverables, print materials

### Maximum Quality

```javascript
{
  samples: 2000,
  bounces: 8,
  tiles: 1,
  resolutionFactor: 4.0,
}
```
**Use for**: Extreme closeups, marketing hero shots

## Common Issues

### Render Too Noisy

**Problem**: Image has visible grain/noise

**Solutions**:
1. Increase `samples` (double it)
2. Enable `multipleImportanceSampling`
3. Increase `bounces` for dark interiors
4. Check light intensities (too dark = more noise)

### Render Too Dark

**Problem**: Scene appears darker than real-time preview

**Solutions**:
1. Increase light intensities (try 2-3x)
2. Add ambient/environment lighting
3. Check material absorption (reduce `thickness` for transmissive)
4. Increase `bounces` for better indirect lighting

### Fireflies (Bright Pixels)

**Problem**: Random very bright pixels

**Solutions**:
1. Reduce extreme emissive intensities
2. Enable `multipleImportanceSampling`
3. Avoid perfectly smooth (roughness=0) metals with bright lights
4. Increase samples for better convergence

### Render Slow/Frozen

**Problem**: Path tracer takes forever or stops responding

**Solutions**:
1. Reduce `samples` and increase incrementally
2. Lower `resolutionFactor` to 0.5 or 1.0
3. Reduce `bounces` to 3-4
4. Simplify complex materials (especially transmission)
5. Use fewer area lights

### Caustics Not Visible

**Problem**: Expected light patterns through glass missing

**Solutions**:
1. Increase `bounces` to at least 6
2. Use point/spot lights (better caustics than area lights)
3. Increase light intensity
4. Ensure glass has correct IOR (~1.5)
5. Increase `samples` significantly (caustics are noisy)

## Example: Complete Path-Traced Scene

```python
from vuer import Vuer
from vuer.schemas import (
    Scene, Sphere, Plane, Box,
    RectAreaLight, AmbientLight
)

app = Vuer()

@app.spawn(start=True)
async def main(session):
    session.upsert @ Scene(
        # Glass sphere for caustics
        Sphere(
            args=[0.5, 64, 64],
            position=[0, 0.5, 0],
            materialType="physical",
            material=dict(
                color="#ffffff",
                transmission=1.0,
                thickness=0.2,
                roughness=0.0,
                ior=1.5,
            ),
            key="glass-sphere",
            castShadow=True,
            receiveShadow=True,
        ),

        # Metallic box
        Box(
            args=[0.8, 0.8, 0.8],
            position=[2, 0.4, 0],
            materialType="physical",
            material=dict(
                color="#ffd700",
                roughness=0.2,
                metalness=1.0,
            ),
            key="gold-box",
            castShadow=True,
            receiveShadow=True,
        ),

        # Floor
        Plane(
            args=[10, 10],
            rotation=[-1.57, 0, 0],
            materialType="standard",
            material=dict(
                color="#e0e0e0",
                roughness=0.8,
            ),
            key="floor",
            receiveShadow=True,
        ),

        # Main area light
        RectAreaLight(
            key="key-light",
            position=[2, 3, 2],
            intensity=100,
            width=1.5,
            height=1.5,
            color="#ffffff",
        ),

        # Fill light
        RectAreaLight(
            key="fill-light",
            position=[-2, 2, 2],
            intensity=30,
            width=2,
            height=2,
            color="#d4e4ff",
        ),

        # Ambient
        AmbientLight(
            key="ambient",
            intensity=0.1,
        ),
    )
```

**To render:**
1. Run the script and open in browser
2. Open Leva panel (top-right)
3. Go to **Render.Pathtracer** section
4. Click "enabled" checkbox
5. Adjust settings:
   - Start with `samples: 20` for preview
   - Increase to `samples: 200+` for final
6. Wait for progressive render to complete

## Saving Renders

Currently, rendered images can be saved via browser:

1. Wait for render to complete
2. Right-click on canvas
3. Select "Save image as..."
4. Choose location and format (PNG recommended)

## Best Practices

1. **Start simple**: Test with low samples first
2. **Progressive refinement**: Gradually increase quality
3. **Use physically-based materials**: Better results with PBR
4. **Proper lighting**: Area lights give best results
5. **Patience**: High-quality renders take time
6. **Save incrementally**: Save intermediate results
7. **Test on simple scenes**: Verify settings before final render

## Limitations

Current path tracer limitations:

- WebGL-based (limited by browser GPU)
- No denoising (requires high sample counts)
- Progressive rendering only (no batch mode)
- Limited to browser viewport size
- No animation support
- VR mode not supported

## Next Steps

- Review [Post-processing Effects](06_post_processing.md) for real-time visual enhancements
- Learn about [Materials and Textures](03_materials_and_textures.md) for physically-based materials
- Explore [Lighting](05_lights.md) for effective scene illumination
- Check out [Camera Control](04_camera_control.md) for perfect framing

## Further Reading

- [Physically Based Rendering (PBR) Guide](https://learnopengl.com/PBR/Theory)
- [Path Tracing Theory](https://raytracing.github.io/)
- [Material Properties Reference](https://refractiveindex.info/)
