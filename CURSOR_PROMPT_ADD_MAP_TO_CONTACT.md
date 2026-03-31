# Cursor prompt: Add the same map to my contact page (from reap-solutions)

Use this prompt in your **other project** in Cursor. Paste it into the chat and attach or paste the reference code when asked.

---

## Prompt to paste in Cursor (other project)

```
I need to add a map to my contact page, matching how it's done in another Next.js project (reap-solutions).

**Reference implementation (from reap-solutions):**
- Contact page: app/(public)/contact/page.tsx — it uses a WorldMap component and a contact form.
- Map component: components/ui/world-map.tsx — this is the map UI (likely SVG world map or Leaflet/Mapbox).

**What I need you to do:**
1. Install any map-related dependencies used in the reference (e.g. react-simple-maps, leaflet, mapbox-gl, d3-geo — check the reference component’s imports).
2. Add a WorldMap (or equivalent) component to my project, matching the reference’s behavior and props (e.g. markers, zoom, styling).
3. Add the map to my contact page in the same way: same layout (e.g. map beside or above/below the contact form), same sizing and styling approach.
4. If the reference uses env vars (e.g. map API keys), add placeholders in my .env.example and use them in the component.

**Constraints:**
- Keep the map a client component if the reference uses "use client" (e.g. for interactivity or browser APIs).
- If the reference uses dynamic import (e.g. next/dynamic) for the map to avoid SSR issues, do the same.
- Preserve my existing contact form and page structure; only add the map and any wrapper layout needed.

I’ll paste the contents of the reference contact page and world-map component below (or attach the files). Use that as the source of truth for behavior and dependencies.
```

---

## What it usually takes to add a map like this

1. **Dependencies**  
   The map component will import a library (e.g. `react-simple-maps`, `leaflet`, `react-leaflet`, `mapbox-gl`, `react-map-gl`). Install the same one in your other project:
   ```bash
   npm install <package-name>
   ```
   (Check the top of `world-map.tsx` for `import ... from '...'`.)

2. **Client component**  
   If the map uses browser APIs (e.g. `window`, `document`) or state/effects for interactivity, the component (or a wrapper) must have `"use client"` at the top.

3. **SSR / Next.js**  
   If the map library expects `window` or a DOM node on mount, it’s common to:
   - Render the map only on the client (e.g. with `dynamic(..., { ssr: false })` from `next/dynamic`), or
   - Guard usage inside `useEffect` so it runs only in the browser.

4. **Contact page layout**  
   The contact page typically:
   - Imports the map component and the contact form.
   - Renders them in a layout (e.g. two columns: map + form, or map above/below form).
   - Passes any props the map needs (e.g. markers, center, zoom).

5. **API keys (if any)**  
   If the reference uses Mapbox/Google Maps/etc., it will use an env var (e.g. `NEXT_PUBLIC_MAPBOX_TOKEN`). Add the same env var to your other project and use it in the map component.

6. **Styling**  
   Copy the same classNames, container dimensions (e.g. `h-[400px]`, `w-full`), and any CSS so the map looks and behaves the same.

---

## If you’re stuck in the other project

Paste this into Cursor in that project:

```
My contact page has a map component but it’s not working. [Describe the issue: e.g. “map is blank”, “hydration error”, “window is not defined”.]

Reference code from my other project (reap-solutions):
[Paste the full contents of world-map.tsx and contact/page.tsx here]

Match the pattern from the reference: same imports, same "use client" or dynamic import, same env vars and props. Fix the implementation so the map renders and behaves like the reference.
```

---

## Files to copy from reap-solutions (this project)

Open these in reap-solutions and paste them into the Cursor prompt in your other project:

1. **`app/(public)/contact/page.tsx`** — contact page layout and map usage  
2. **`components/ui/world-map.tsx`** — map component  
3. **From `package.json`** — the lines that list map-related packages (e.g. `react-simple-maps`, `leaflet`, etc.)

Once you have those, use the prompts above in your other project so Cursor can replicate the same map setup.
