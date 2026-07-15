# Bodywise — feelbodywise.com

Static marketing site for **Bodywise**, Laura's gender-expansive Fertility Awareness Method (FAM)
education and sexual/reproductive-health practice. This is a clean, self-owned rebuild that moves the
site **off Wix**. All content and images are local; nothing loads from the old Wix site.

Built as plain HTML + [Tailwind CSS](https://tailwindcss.com) (via CDN), with a small brand
stylesheet and a touch of vanilla JavaScript. No build step, no framework, no server required.

This is **v2** in the repo. See the top-level [`README.md`](../README.md) for how the versions relate.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `what-is-fam.html` | What is Fertility Awareness? |
| `fa-for-avoiding-pregnancy.html` | FA for Avoiding Pregnancy |
| `fa-for-achieving-pregnancy.html` | FA for Achieving Pregnancy |
| `counselling.html` | Counselling & Practical Support |
| `about-working-with-me.html` | About Working With Me |
| `workshops-trainings.html` | Workshops & Trainings |
| `contact.html` | Contact |

## Structure

```
bodywise/
├── *.html            # the 8 pages (self-contained; header/footer repeated in each)
├── css/styles.css    # brand colours, fonts, buttons, cards, nav
├── js/main.js        # mobile menu toggle + footer year
├── images/           # all photos, logo, favicons, partner + AFAP badge (local)
├── robots.txt
├── sitemap.xml
└── .nojekyll         # lets GitHub Pages serve files as-is
```

## Preview locally

No build needed. From the repo root, run any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/v2/
```

## Before going live — 3 things to fill in

The old Wix site used Wix's built-in forms and booking, which don't work on a static site. The rebuild
wires them to [Formspree](https://formspree.io) (free tier) with placeholders. Search the project for
each token and replace it:

1. **`REPLACE_ME`** — every form (newsletter signup, contact, counselling, workshop, waitlist) posts to
   `https://formspree.io/f/REPLACE_ME`. Create a free Formspree form and paste its ID. One shared ID is
   fine; you can also make separate ones per form.
2. **`EMAIL_TODO`** — on `contact.html`, replace with Laura's real email for the "prefer email" link.
3. **Booking link** — the "Book a Call" button and "Book Now" CTAs currently point to `contact.html`.
   If Laura uses a scheduler (Calendly, Acuity, etc.), swap those `href="contact.html"` links (marked
   with a `<!-- TODO -->` comment) for the booking URL.

Optional: confirm the domain in `sitemap.xml` and `robots.txt` (currently `feelbodywise.com`).

## Deploy

Any static host works:

- **GitHub Pages** — repo Settings → Pages → deploy from `main` branch, root. `.nojekyll` is already present.
- **Netlify / Vercel** — drag-and-drop the folder, or connect the repo. No build command; publish directory is the root.

Point `feelbodywise.com` at the new host once you're happy with it.

## Notes on content

Copy is reproduced from the live site. A couple of dated references remain verbatim (e.g. cohort
enrolment months) — update these in the relevant `.html` file as they change. Pricing shown:
programs `$356` / `$1458 CAD`, counselling `$150 CAD` per 50-min session, workshops `$2000–$2500 CAD`.
