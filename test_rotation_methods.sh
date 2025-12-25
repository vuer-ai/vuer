#!/bin/bash
# Test all rotation computation methods with the working coordinate transforms

INPUT="/Users/yanbinghan/fortyfive/vuer/bodies_data/session_20251216_162658.json"
OUTPUT_DIR="/Users/yanbinghan/fortyfive/vuer/bodies_data/rotation_tests"

mkdir -p "$OUTPUT_DIR"

echo "Testing rotation computation methods..."
echo "Using coordinate transforms from variants 4, 5, 14 (which got legs right)"
echo ""

# Test all combinations
for coord in 4 5 14; do
    for method in {0..7}; do
        echo "================================================"
        echo "Coord Transform: Variant $coord, Rotation Method: $method"
        echo "================================================"
        python src/vuer/utils/webxr2smpl_rotation_variants.py \
            "$INPUT" \
            "$OUTPUT_DIR/coord${coord}_method${method}.json" \
            --coord $coord \
            --method $method
        echo ""
    done
done

echo "================================================"
echo "All combinations generated!"
echo "================================================"
echo "Total: 3 coord transforms × 8 rotation methods = 24 files"
echo ""
echo "Output files in: $OUTPUT_DIR"
echo ""
echo "To visualize:"
echo "python src/vuer/utils/smpl_vuer_server.py \\"
echo "    --smpl-model smpl_models/smpl/SMPL_MALE.pkl \\"
echo "    --smpl-sequence $OUTPUT_DIR/coord4_method1.json"
