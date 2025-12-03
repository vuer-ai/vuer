
# KeyboardMonitor

The `KeyboardMonitor` component captures keyboard events from the browser and sends them to your Python backend through WebSocket. This invisible component enables keyboard-based interactions in your Vuer applications.

This is ideal for:
- Building keyboard-controlled interfaces
- Implementing keyboard shortcuts
- Creating interactive applications with key bindings
- Capturing user input for text-based interactions
- Game controls and navigation

## Basic Usage

A minimal example that monitors keyboard events:

```python
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, KeyboardMonitor, DefaultScene

app = Vuer()

@app.add_handler("KeyDown")
async def on_key_down(event, session: VuerSession):
    key_data = event.value
    print(f"Key pressed: {key_data['key']}")
    print(f"Key code: {key_data['code']}")
    if key_data['ctrlKey']:
        print("Ctrl modifier active")

@app.spawn(start=True)
async def main(session: VuerSession):
    session.set @ DefaultScene(
        KeyboardMonitor(
            enableKeyDown=True,
            enableKeyUp=True,
            key="keyboard-monitor",
        ),
    )

    await session.forever()
```

## Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `key` | str | - | Unique identifier for the component |
| `enableKeyDown` | bool | `False` | Enable monitoring of keydown events |
| `enableKeyUp` | bool | `False` | Enable monitoring of keyup events |
| `enableKeyPress` | bool | `False` | Enable monitoring of keypress events |

**Note**: At least one event type must be enabled for the component to be useful.

## Event Types

The component sends three types of events to Python handlers:

### KeyDown
Triggered when a key is pressed down. Repeats if the key is held.

```python
@app.add_handler("KeyDown")
async def on_key_down(event, session):
    print(f"Key down: {event.value['key']}")
```

### KeyUp
Triggered when a key is released.

```python
@app.add_handler("KeyUp")
async def on_key_up(event, session):
    print(f"Key up: {event.value['key']}")
```

### KeyPress
Triggered when a key that produces a character value is pressed.

```python
@app.add_handler("KeyPress")
async def on_key_press(event, session):
    print(f"Key press: {event.value['key']}")
```

## Event Data Format

All keyboard events contain the following data in `event.value`:

```python
{
    'key': str,           # Character value (e.g., 'a', 'Enter', 'ArrowUp')
    'code': str,          # Physical key code (e.g., 'KeyA', 'Space', 'ArrowUp')
    'shiftKey': bool,     # True if Shift key is pressed
    'ctrlKey': bool,      # True if Ctrl key is pressed
    'altKey': bool,       # True if Alt key is pressed
    'metaKey': bool,      # True if Meta/Command key is pressed
    'repeat': bool,       # True if key is being held down
    'isComposing': bool,  # True if part of an IME composition
}
```

### Key vs Code

- **key**: The character or action represented (e.g., `'a'`, `'A'`, `'Enter'`, `'ArrowUp'`)
- **code**: The physical key location (e.g., `'KeyA'`, `'Space'`, `'ArrowUp'`)

For most use cases, use `key` for character input and `code` for keyboard layout-independent bindings.

## Notes

- The component is invisible and does not render any visual elements
- Keyboard events are only captured when the browser window has focus
- Some browser shortcuts (like Ctrl+T, Ctrl+W) cannot be prevented
- For text input, consider using HTML input elements instead
- The component automatically handles keyboard focus management

## Related Components

- [Hands](hands.md) - Hand tracking for VR/AR interactions
- [MotionControllers](motion_controllers.md) - VR controller input
- [Movable](movable.md) - Interactive object manipulation
