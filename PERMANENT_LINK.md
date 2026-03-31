# Get a permanent link (like Vercel) – one-time setup

You get a link that **stays live** and doesn’t need your computer on. Takes about 5 minutes once.

---

## Step 1: Create a Vercel account (if you don’t have one)

1. Go to **https://vercel.com**
2. Click **“Sign Up”**
3. Choose **“Continue with GitHub”** (easiest – one click, no new password)

---

## Step 2: Deploy from your project (no GitHub needed)

1. Open a terminal in your project folder:
   ```bash
   cd /Users/pankymbhalati/Documents/client-projects/reap-solutions
   ```

2. Run:
   ```bash
   npx vercel
   ```

3. When it asks:
   - **“Log in?”** → It opens your browser; log in (or sign up with GitHub), then come back to the terminal.
   - **“Set up and deploy?”** → **Y**
   - **“Which scope?”** → Pick your account (press Enter).
   - **“Link to existing project?”** → **N**
   - **“What’s your project’s name?”** → **reap-solutions** (or press Enter).
   - **“In which directory is your code located?”** → **./** (press Enter).

4. Wait for the build to finish. At the end you’ll see something like:
   ```text
   Production: https://reap-solutions-xxxx.vercel.app
   ```
   **That URL is your permanent link.** Send it to your client; it stays working.

---

## Step 3 (optional): Deploy again after you make changes

Whenever you want to update the live site:

```bash
npx vercel --prod
```

Same link, updated content.

---

## If the build fails

- In **Vercel Dashboard** → your project → **Settings** → **Environment Variables**, add:
  - **Name:** `NODE_OPTIONS`  
  - **Value:** `--max-old-space-size=8192`  
  Then trigger a redeploy.

---

**Summary:** Run `npx vercel` in the project, log in once in the browser, answer the prompts, then use the URL it gives you as your permanent link.
