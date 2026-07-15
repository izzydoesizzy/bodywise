# Bodywise — feelbodywise.com

Website for **Bodywise**, Laura's gender-expansive Fertility Awareness Method (FAM) education and
sexual/reproductive-health practice (Toronto). This repo holds the site's migration off Wix, plus
successive design versions. All are plain static HTML/CSS/JS, no build step.

## Versions

| Folder | What it is |
|--------|-----------|
| [`v1/`](v1/) | **Exact frozen replica** of the original Wix site. Pixel-faithful archive, all assets local. Reference only. |
| [`v2/`](v2/) | **Clean rebuild** off Wix. Editable, self-owned, reproduces the original content and look. |
| [`v3/`](v3/) | **Boutique redesign** (in progress). Warm-editorial direction; same copy, new design system. |

The live site to deploy will be whichever version is current (v2, then v3). `v1/` is an archive.

## Preview any version locally

No build needed. From the repo root:

```bash
python3 -m http.server 8000
# then open:
#   http://localhost:8000/v3/   (redesign)
#   http://localhost:8000/v2/   (clean rebuild)
#   http://localhost:8000/v1/   (original Wix archive)
```

## Before going live — placeholders to fill in (v2 / v3)

The old Wix forms and booking don't work on a static site, so they're wired to placeholders:

1. **`REPLACE_ME`** — Formspree form ID in every form's action URL. Create a free
   [Formspree](https://formspree.io) form and paste its ID.
2. **`EMAIL_TODO`** — Laura's real email for the `mailto:` link on `contact.html`.
3. **Booking link** — the "Book a Call" CTAs point at `contact.html` pending a scheduler
   (Calendly/Acuity); swap those `href`s (marked with `<!-- TODO -->`) for the booking URL.

Optional: confirm the domain in each version's `sitemap.xml` / `robots.txt` (currently `feelbodywise.com`).

## Deploy

Any static host (GitHub Pages, Netlify, Vercel). Serve the current version's folder at the domain
root, then point `feelbodywise.com` at it. `.nojekyll` at the repo root lets GitHub Pages serve files
as-is.
