#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
if command -v pandoc >/dev/null 2>&1; then
  pandoc output/print-master.md -o output/marine-handbook.pdf --css build/print.css --toc --standalone
else
  echo "Pandoc is required to build PDF. Install pandoc, then run build/build-pdf.sh" >&2
  exit 1
fi
