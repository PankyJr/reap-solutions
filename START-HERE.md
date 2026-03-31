# Get the site running for the client

## If you get `ETIMEDOUT: connection timed out, read`

The project is on iCloud/synced storage, so Node times out when reading files.

**Easiest fix – one command from this folder:**

```bash
npm run run:local
```

That copies the project to your **Desktop** and starts the dev server there. Wait for “Ready”, then open http://localhost:3000.

**Or do it manually:**

```bash
cp -R "$(pwd)" ~/Desktop/reap-solutions
cd ~/Desktop/reap-solutions
npm install
npm run dev
```

Then open http://localhost:3000. From then on, open the **Desktop** folder in Cursor and run `npm run dev` from there so you don’t hit ETIMEDOUT again.

---

## Option A: Development (for testing)

In terminal:

```bash
cd /Users/pankymbhalati/Documents/client-projects/reap-solutions
npm run dev
```

Wait until you see **Ready** (first time can take a few minutes). Then open **http://localhost:3000**.

---

## Option B: Production (for demo or deploy)

In terminal:

```bash
cd /Users/pankymbhalati/Documents/client-projects/reap-solutions
npm run demo
```

That builds and starts the site. Then open **http://localhost:3000**. (Or run `npm run build` then `npm run start` yourself.)

---

## If something fails

- **ChunkLoadError / timeout on a page:** Don’t delete `.next` unless you have to. If you do, run `npm run dev` again and wait for Ready.
- **ETIMEDOUT when running commands:** Run the same command again, or run from a local folder (not a synced/network drive).

Your `package.json` dev script is already set to:  
`NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS='--max-old-space-size=8192' next dev`

Training, Services, and Home pages are wired correctly. Once you see Ready or the production server is up, the app is good to show the client.
