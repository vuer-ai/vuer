#!/bin/bash
# Test all coordinate transformation variants

INPUT="/Users/yanbinghan/fortyfive/vuer/bodies_data/session_20251216_162658.json"
OUTPUT_DIR="/Users/yanbinghan/fortyfive/vuer/bodies_data/test_variants"

mkdir -p "$OUTPUT_DIR"

echo "Testing all 31 transformation variants..."
echo ""

for i in {0..30}; do
    echo "================================================"
    echo "Testing Variant $i"
    echo "================================================"
    python src/vuer/utils/webxr2smpl_test_transforms.py \
        --variant $i \
        "$INPUT" \
        "$OUTPUT_DIR/variant_$i.json"
    echo ""
done

echo "================================================"
echo "All variants generated!"
echo "================================================"
echo ""
echo "Output files in: $OUTPUT_DIR"
echo ""
echo "To visualize each variant, run:"
echo ""
for i in {0..30}; do
    echo "# Variant $i:"
    echo "python src/vuer/utils/smpl_vuer_server.py \\"
    echo "    --smpl-model smpl_models/smpl/SMPL_MALE.pkl \\"
    echo "    --smpl-sequence $OUTPUT_DIR/variant_$i.json"
    echo ""
done
