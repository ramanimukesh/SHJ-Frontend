#!/bin/bash
# Generates the narrow variants referenced by src/data/media.js, plus the
# manifest that tells the app which ones exist.
#
# Card and hero art shipped at its original width (up to 1600px) into slots that
# are 290-400 CSS px wide, so phones downloaded 5-10x the pixels they showed.
# Each source gets a 480w and a 960w JPEG here; media.js turns the manifest into
# a srcset and the browser picks. Sources narrower than a target are skipped —
# upscaling would add bytes without adding detail, and the manifest records that
# so the original stays the only candidate.
#
# Re-run after adding or replacing anything in public/stl.
set -euo pipefail
cd "$(dirname "$0")/.."

OUT=public/stl/rs
MANIFEST=src/data/imageVariants.json
mkdir -p "$OUT"

entries=""
for src in public/stl/*.jpg public/stl/*.jpeg public/stl/*.png public/stl/*.webp; do
  [ -f "$src" ] || continue
  base=$(basename "$src"); stem="${base%.*}"
  width=$(sips -g pixelWidth "$src" | awk '/pixelWidth/{print $2}')
  height=$(sips -g pixelHeight "$src" | awk '/pixelHeight/{print $2}')
  widths=""
  for w in 480 960; do
    [ "$width" -gt "$w" ] || continue
    sips -s format jpeg -s formatOptions 58 --resampleWidth "$w" \
         "$src" --out "$OUT/${stem}-${w}.jpg" >/dev/null
    widths="${widths}${widths:+,}$w"
  done
  # Public URL is the path with the leading `public` stripped.
  entries="${entries}${entries:+,}\"${src#public}\":{\"stem\":\"$stem\",\"w\":$width,\"h\":$height,\"variants\":[$widths]}"
done

printf '{%s}' "$entries" \
  | node -e "const s=require('fs').readFileSync(0,'utf8');process.stdout.write(JSON.stringify(JSON.parse(s),null,2)+'\n')" \
  > "$MANIFEST"

echo "Wrote $(ls "$OUT" | wc -l | tr -d ' ') variants and $MANIFEST"
