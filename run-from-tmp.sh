#!/usr/bin/env bash
# Run Next dev from /tmp to avoid ETIMEDOUT on synced drives. Keeps /tmp in sync with project.
# Use REAP_DEV_IN_PLACE=1 to run next dev in project dir (when not on synced drive).
set -e
SRC="$(cd "$(dirname "$0")" && pwd)"
if [ -n "$REAP_DEV_IN_PLACE" ]; then
  exec env NEXT_TELEMETRY_DISABLED=1 npx next dev "$@"
fi
DEST="/tmp/reap-solutions"
echo "Syncing to $DEST..."
rsync -a --exclude='.next' --exclude='node_modules' --exclude='assets' --exclude='.git' --timeout=10 "$SRC/" "$DEST/"
echo "Installing dependencies..."
(cd "$DEST" && npm install --prefer-offline --no-audit --no-fund 2>/dev/null || npm install)
echo "Starting dev server (edits in project folder will sync to /tmp every 3s)..."
(
  while true; do
    rsync -a --exclude='.next' --exclude='node_modules' --exclude='assets' --exclude='.git' --timeout=10 "$SRC/" "$DEST/" 2>/dev/null || true
    sleep 3
  done
) &
SYNC_PID=$!
trap "kill $SYNC_PID 2>/dev/null || true" EXIT
if [ -n "$REAP_DEV_LAN" ]; then
  echo ""
  echo "► To view on your phone: connect phone to same Wi‑Fi, then open in browser:"
  echo "  http://$(ipconfig getifaddr en0 2>/dev/null || hostname -I 2>/dev/null | awk '{print $1}'):3000"
  echo ""
fi
(cd "$DEST" && NEXT_TELEMETRY_DISABLED=1 npx next dev ${REAP_DEV_LAN:+--hostname 0.0.0.0})
