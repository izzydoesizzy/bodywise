# v1 — Exact replica of the original feelbodywise.com (Wix)

This folder is a **pixel-faithful frozen snapshot** of Laura's original Wix site, captured as plain
HTML / CSS / JS with every asset pulled local. It is the "before" — the exact original — kept
alongside the clean rebuild at the repo root (the "after").

## How it was made

The original is a Wix site that renders with JavaScript. To make a self-contained static copy, each of
the 8 pages was loaded in a real headless browser (Chromium via Puppeteer), fully rendered (including
lazy-loaded images and scroll animations), then the finished DOM was saved with all of Wix's own CSS
baked in. Every image, font, and stylesheet it referenced was downloaded into `assets/`, and all URLs
were rewritten to point local. Internal nav links were rewritten to the local `.html` files so the
clone browses standalone.

## What's faithful vs. what changed

- **Faithful:** layout, typography, colours, spacing, images, logos, copy — visually identical to the
  live site at desktop width.
- **Neutralized:** Wix's runtime JavaScript was removed (it can't run detached from Wix's servers and
  would blank the page or phone home). So JS-driven behaviors don't function: form submissions, the
  mobile hamburger menu, and any Wix widget that renders client-side (e.g. an embedded form/booking
  block on the Contact page shows as empty space, as it did in the raw page before JS ran).
- **Kept external:** genuinely third-party links the real site uses stay pointed at their services —
  Stripe checkout (`buy.stripe.com`) and the HoneyBook booking portal (`bodywise.hbportal.co`).

## Files

```
v1/
├── index.html + 7 page files   # frozen Wix markup
└── assets/                      # all images, fonts, and CSS, local (~6 MB)
```

## Preview

```bash
# from the repo root
python3 -m http.server 8000
# then open http://localhost:8000/v1/index.html
```

> This is an archival/reference replica. For the version to actually deploy and edit going forward,
> use the clean rebuild at the repo root — see the top-level `README.md`.
