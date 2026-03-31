#!/bin/bash
# Run this when you get ETIMEDOUT. It copies the project to Desktop (local disk) and runs dev from there.
set -e
DESKTOP_PROJECT="$HOME/Desktop/reap-solutions"
SOURCE_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Copying project to Desktop (this may take a minute)..."
rsync -a --exclude='.next' --exclude='node_modules' "$SOURCE_DIR/" "$DESKTOP_PROJECT/"

echo "Installing dependencies in Desktop copy..."
(cd "$DESKTOP_PROJECT" && npm install)

echo "Starting dev server from Desktop..."
(cd "$DESKTOP_PROJECT" && npm run dev)
