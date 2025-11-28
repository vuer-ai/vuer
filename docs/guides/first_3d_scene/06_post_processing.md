# 3.1.6 Post-processing and Render Passes

Post-processing effects add visual polish to your 3D scenes through screen-space effects applied after the main render pass. Vuer includes bloom effects for glowing highlights and can be extended with additional passes like ambient occlusion, depth of field, and more.

## Render Modes

Vuer supports multiple render modes that can be toggled through the web interface:

- **RGB** (default): Standard rendering without post-processing
- **Post-process**: Applies post-processing effects like bloom
- **Depth**: Visualizes scene depth
- **Normal**: Shows surface normals
- **Path tracer**: Photorealistic rendering (covered in next section)

### Accessing Render Modes

The render mode can be controlled through the Leva control panel in the Vuer web interface:

1. Open your scene in a browser
2. Look for the render settings panel (usually top-right)
3. Select "Render Mode" dropdown
4. Choose from available modes: `rgb`, `postprocess`, `depth`, `normal`, or `pathtracer`

## Bloom Effect

Bloom creates a glow around bright areas in your scene, essential for:
- Light sources and emissive materials
- Metallic reflections
- Glass and transparent objects
- HDR rendering

### How Bloom Works

The bloom effect:
1. Identifies bright pixels above a luminance threshold
2. Blurs these bright areas with multiple passes
3. Composites the blurred result back onto the original image

### Bloom Parameters

The default bloom configuration in Vuer:

```javascript
// Frontend configuration (for reference)
<Bloom
  luminanceThreshold={1}    // Brightness threshold (0-1+)
  intensity={0.15}          // Bloom strength
  levels={9}                // Mipmap blur levels
  mipmapBlur={true}         // Use mipmapped blurring
/>
```

**Parameter Explanations:**

- **luminanceThreshold**: Only pixels brighter than this value will bloom (default: 1.0)
  - Lower values: More bloom effect
  - Higher values: Only very bright objects bloom

- **intensity**: Controls how strong the bloom effect appears (default: 0.15)
  - 0.0: No bloom
  - 0.5: Strong bloom
  - 1.0+: Very intense bloom

- **levels**: Number of blur passes for smooth falloff (default: 9)
  - More levels: Smoother, wider bloom
  - Fewer levels: Sharper, tighter bloom

- **mipmapBlur**: Uses mipmaps for performance (default: true)

## Creating Bloom-Friendly Materials

To maximize bloom effects, use materials with high emissive or metallic properties:

### Emissive Materials

```python
from vuer.schemas import Sphere

# Glowing sphere
Sphere(
    args=[0.5],
    position=[0, 1, 0],
    materialType="standard",
    material=dict(
        color="#ffffff",
        emissive="#ff6600",      # Orange glow
        emissiveIntensity=2.0,   # Bright enough to bloom
    ),
    key="glowing-orb"
)
```

### Metallic Reflections

```python
from vuer.schemas import Box

# Glossy metal box
Box(
    args=[1, 1, 1],
    position=[2, 0.5, 0],
    materialType="standard",
    material=dict(
        color="#c9a86a",
        roughness=0.05,          # Very smooth
        metalness=1.0,           # Full metal
        envMapIntensity=2.0,     # Strong reflections
    ),
    key="glossy-metal"
)
```

### Glass with Bloom

```python
from vuer.schemas import Torus

# Glass torus with refractive bloom
Torus(
    args=[0.5, 0.15, 32, 64],
    position=[0, 1, 0],
    materialType="physical",
    material=dict(
        color="#ffffff",
        transmission=1.0,        # Full transparency
        thickness=0.5,
        roughness=0.0,           # Perfect clarity
        ior=1.5,                 # Glass refractive index
        envMapIntensity=1.5,
    ),
    key="glass-ring"
)
```

## Lighting for Post-Processing

Proper lighting enhances post-processing effects:

### High Dynamic Range (HDR) Lighting

```python
from vuer.schemas import Scene, SpotLight, RectAreaLight, AmbientLight

Scene(
    # Bright key light for bloom
    SpotLight(
        key="key-light",
        position=[-5, 5, 2],
        intensity=80,            # High intensity for bloom
        angle=0.4,
        penumbra=0.8,
        color="#ff9f5a",
        castShadow=True,
    ),

    # Soft fill with area light
    RectAreaLight(
        key="fill",
        position=[4, 3, 4],
        intensity=15,
        width=3,
        height=3,
        color="#e8d5ff",
    ),

    # Low ambient to preserve contrast
    AmbientLight(
        key="ambient",
        intensity=0.1,
        color="#4a5568",
    ),

    # Your scene objects...

    # Important: Use tone mapping for HDR
    toneMapping="ACESFilmic",
    toneMappingExposure=1.0,
)
```

## Tone Mapping

Tone mapping converts HDR values to displayable range while preserving detail:

### Available Tone Mapping Modes

```python
Scene(
    # Your objects...

    # Choose one:
    toneMapping="NoToneMapping",     # No tone mapping
    toneMapping="Linear",            # Simple linear mapping
    toneMapping="Reinhard",          # Classic Reinhard
    toneMapping="Cineon",            # Film-like
    toneMapping="ACESFilmic",        # Industry standard (recommended)

    toneMappingExposure=1.0,         # Adjust overall brightness
)
```

### Tone Mapping Examples

```python
# Bright, high-contrast scene
Scene(
    # High-intensity lights...
    toneMapping="ACESFilmic",
    toneMappingExposure=1.2,         # Slightly brighter
)
```

```python
# Dark, moody scene
Scene(
    # Low lights...
    toneMapping="ACESFilmic",
    toneMappingExposure=0.7,         # Darker exposure
)
```

```python
# Natural daylight
Scene(
    # Sun simulation...
    toneMapping="Reinhard",
    toneMappingExposure=1.0,
)
```

## Advanced Effects (Future)

While currently available through the frontend, future versions may expose:

### Ambient Occlusion (AO/SSAO/HBAO)

Adds subtle shadowing in corners and crevices for more realistic depth perception.

### Depth of Field (DOF)

Creates camera-like focus blur:
- Sharp focus plane
- Blurred foreground and background
- Bokeh effects

### Screen Space Reflections (SSR)

Real-time reflections based on visible pixels.

### Color Grading

Adjust colors, contrast, and saturation:
- Film looks
- Color correction
- Stylized rendering

## Performance Considerations

Post-processing adds computational overhead:

1. **Bloom**: Moderate cost
   - Multiple blur passes
   - Scales with screen resolution
   - Use `mipmapBlur` for better performance

2. **Multiple Effects**: Costs stack
   - Each effect runs in sequence
   - Consider disabling for VR/mobile

3. **Resolution Scaling**: Reduce render resolution for better FPS
   - Post-processing on lower resolution
   - Upscale to display

## Best Practices

1. **Start subtle**: Begin with low intensity and increase as needed
2. **Match lighting**: Ensure lights are bright enough to create bloom
3. **Use tone mapping**: Essential for HDR workflows
4. **Test on target hardware**: Post-processing may be slow on mobile/VR
5. **Disable in VR mode**: Vuer automatically disables post-processing in VR for performance

## Common Issues

### Bloom Not Visible

**Problem**: No glow appears despite enabling post-processing

**Solutions**:
- Increase light intensity (try 50-100 for spot lights)
- Lower `luminanceThreshold` (if customizable)
- Add emissive materials with high `emissiveIntensity`
- Enable tone mapping: `toneMapping="ACESFilmic"`

### Scene Too Dark/Bright

**Problem**: Post-processing changes overall brightness

**Solution**:
```python
Scene(
    # Adjust exposure
    toneMappingExposure=1.5,  # Increase for brighter
    # OR
    toneMappingExposure=0.7,  # Decrease for darker
)
```

### Performance Issues

**Problem**: Low frame rate with post-processing

**Solutions**:
1. Reduce screen resolution
2. Simplify bloom (fewer levels)
3. Use simpler tone mapping (Linear vs ACESFilmic)
4. Test with post-processing disabled

## Example: Complete Scene with Post-Processing

```python
from vuer import Vuer
from vuer.schemas import Scene, Sphere, Box, SpotLight, AmbientLight

app = Vuer()

@app.spawn(start=True)
async def main(session):
    session.upsert @ Scene(
        # Glowing sphere
        Sphere(
            args=[0.5],
            position=[0, 1, 0],
            materialType="standard",
            material=dict(
                color="#ffffff",
                emissive="#00ff88",
                emissiveIntensity=3.0,
            ),
            key="glow-sphere"
        ),

        # Metallic box for reflective bloom
        Box(
            args=[1, 1, 1],
            position=[2, 0.5, 0],
            materialType="standard",
            material=dict(
                color="#ffd700",
                roughness=0.1,
                metalness=1.0,
                envMapIntensity=2.0,
            ),
            key="metal-box"
        ),

        # Bright key light
        SpotLight(
            key="key",
            position=[-4, 5, 2],
            intensity=100,
            angle=0.5,
            color="#ffffff",
            castShadow=True,
        ),

        # Ambient for base visibility
        AmbientLight(
            key="ambient",
            intensity=0.15,
        ),

        # Enable HDR tone mapping
        toneMapping="ACESFilmic",
        toneMappingExposure=1.0,
    )
```

**To see the bloom effect:**
1. Run this script
2. Open the scene in your browser
3. In the Leva panel, change "Render Mode" to "postprocess"
4. Observe the glow around the sphere and reflections on the box

## Next Steps

- See [Path Tracing Renders](07_path_tracing.md) for photorealistic rendering
- Learn about [Materials and Textures](03_materials_and_textures.md) for better visual results
- Explore [Lighting](05_lights.md) for effective scene illumination
