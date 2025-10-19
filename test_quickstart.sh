#!/bin/bash
set -e

echo "=== Vuer Installation Test ==="
echo ""

# Test 1: Verify imports
echo "1. Testing imports..."
python -c "
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box
print('   ✓ All imports successful')
"

# Test 2: Verify session.forever() exists
echo "2. Checking session.forever() method..."
python -c "
from vuer import VuerSession
import inspect
assert hasattr(VuerSession, 'forever'), 'forever() method not found'
sig = inspect.signature(VuerSession.forever)
print(f'   ✓ session.forever{sig} exists')
"

# Test 3: Create a test file
echo "3. Creating test scene file..."
cat > /tmp/vuer_test_scene.py << 'EOF'
from vuer import Vuer, VuerSession
from vuer.schemas import Scene, Box

app = Vuer(port=8014)  # Use port 8014 to avoid conflicts

@app.spawn(start=True)
async def main(session: VuerSession):
    print("✓ Session started!")

    session.set @ Scene(
        Box(
            args=[0.3, 0.3, 0.3],
            position=[0, 0, 0],
            material=dict(color="green"),
            key="test-box",
        ),
    )

    print("✓ Scene created with green box")
    print("✓ Server running at https://vuer.ai?ws=ws://localhost:8014")
    print("✓ session.forever() is keeping the server alive")
    print("")
    print("Press Ctrl+C to stop the server")

    await session.forever()
EOF

echo "   ✓ Test file created at /tmp/vuer_test_scene.py"

# Test 4: Show the test file
echo ""
echo "4. Test file contents:"
echo "   ------------------------"
cat /tmp/vuer_test_scene.py | sed 's/^/   /'
echo "   ------------------------"

echo ""
echo "=== All Tests Passed! ==="
echo ""
echo "To run the test scene:"
echo "  python /tmp/vuer_test_scene.py"
echo ""
echo "Then open in browser:"
echo "  https://vuer.ai?ws=ws://localhost:8014"
echo ""
