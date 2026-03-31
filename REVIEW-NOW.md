# Review & send to client (run from THIS folder)

## Option 1: Dev server (fastest if it starts)

```bash
cd /Users/pankymbhalati/Documents/client-projects/reap-solutions
npm run dev
```

Wait for **Ready**, then open **http://localhost:3000**.  
Check: Home (video hero), Solutions, Training, Contact (white hero).

---

## Option 2: Build once, then serve (use if dev hits ETIMEDOUT)

```bash
cd /Users/pankymbhalati/Documents/client-projects/reap-solutions
npm run review
```

Wait for the build to finish (can take a few minutes). When it says the server is running, open **http://localhost:3000**. This serves the built site (no compilation on refresh). Same URL for review.

---

## Before sending to client

- Click through: Home → About → Solutions → Training → Contact.
- Confirm Contact page has **white** hero with “Contact” and “Let’s talk transformation.”
- When happy: deploy (e.g. Vercel) or zip the project and send.

All edits are in this folder; no need to use the Desktop copy.
