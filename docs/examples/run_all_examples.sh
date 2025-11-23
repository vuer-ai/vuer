#!/bin/bash
# Run all Python example scripts in the docs/examples directory and subdirectories

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Running all Python examples in $SCRIPT_DIR (including subdirectories)"
echo ""

# Find all .py files in current directory and subdirectories
find . -name "*.py" -type f | sort | while read -r script; do
    echo "========================================"
    echo "Running: $script"
    echo "========================================"
    python "$script"
    echo ""
done

echo "Done!"
