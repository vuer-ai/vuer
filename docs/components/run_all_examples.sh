#!/bin/bash
# Run all Python example scripts in the docs/examples directory

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Running all Python examples in $SCRIPT_DIR"
echo ""

for script in *.py; do
    echo "========================================"
    echo "Running: $script"
    echo "========================================"
    python "$script"
    echo ""
done

echo "Done!"
