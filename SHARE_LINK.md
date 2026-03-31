# Get a shareable link for your client (2 steps)

## Step 1 – Start the site

**Terminal 1:** Run one of these (keep it running):

```bash
# Option A: Production (recommended – run once)
npm run build && npm run start

# Option B: If build is slow or fails, use dev server instead
REAP_DEV_IN_PLACE=1 npm run dev
```

Wait until you see: `Ready on http://localhost:3000` (or similar).

---

## Step 2 – Create the public link

**Terminal 2:** Open a new terminal in the same project folder and run:

```bash
npm run share
```

You’ll see a line like:

```
your url is: https://something-random.loca.lt
```

**That URL is the link to send your client.**

- Copy it and share it (e.g. by email or Slack).
- The first time someone opens it, they may see a “Click to continue” or “Enter password” page – the **password** is shown in Terminal 2 (often your tunnel ID). Enter it once and the site will load.
- Keep **both** terminals open while your client is reviewing. When you close them, the link will stop working.

---

## Summary

| Terminal 1        | Terminal 2    |
|-------------------|---------------|
| `npm run build && npm run start` (or dev) | `npm run share` |
| Leave running     | Copy the URL and send to client |

No Vercel or other signup needed. The link works as long as both commands are running and your computer is on and online.
