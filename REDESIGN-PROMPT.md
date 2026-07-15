# Bodywise Redesign Prompt (Fable 5 tuned)

How to use: open Claude Code in this repo, set effort to the highest available setting (/effort), then paste everything below the line. You'll be asked to weigh in exactly twice: once to pick a design direction, once to approve the homepage.

---

I'm redesigning feelbodywise.com for Laura, a Toronto-based Holistic Reproductive Health Practitioner who teaches the Fertility Awareness Method to all people with menstrual cycles. Her practice is gender-expansive, trauma-informed, and feminist. People land on this site anxious, deciding whether to trust a stranger with something intimate, so the site sells trust in a human, not software. The current site is clean but reads like a template. I want a redesign strong enough that it looks like a boutique studio designed it for Laura specifically.

Current state: the whole site is in this repo. 8 static HTML pages, Tailwind via CDN with an inline config, a brand stylesheet at `css/styles.css`, vanilla JS in `js/main.js`. Read the pages, the stylesheet, and `README.md` before deciding anything. Ignore `/v1/` entirely, it's a frozen archive of the old Wix site.

## Design brief

You tend to converge toward generic, "on distribution" design. That would fail here. Make choices that feel designed for this specific brand, and commit to them.

What you have to work with:

- The logo is fixed, and its palette is the brand: deep plum #3a2130, berry #d10a6b, warm orange #e2913f, cream #fbf6ef, blush #f8e7ef, sand #f4ecdd. Dominant fields with sharp accents beat evenly distributed color.
- Fraunces is already loaded but only used as a minor accent. It's a variable font with optical sizing and SOFT/WONK axes, and it could carry this whole redesign as the display face. Choose body type to match. Never Inter, Roboto, Poppins, Open Sans, Lato, or system defaults.
- Laura's portraits, the AFAP accreditation badge, and the partner logos are the trust assets. The current stock imagery (watermelons, mountains, succulents) is incoherent; replace it with one consistent visual system of your choosing.

The direction is warm editorial: a beautifully typeset wellness journal, not a SaaS page. Typography does the heavy lifting. Backgrounds carry warmth and depth rather than flat white. The inclusivity statement ("If you have a menstrual cycle, you can learn to practice fertility awareness too") is the emotional heart of the brand; give it the most beautiful moment on the site. Present pricing calmly, because this audience worries about cost. No urgency tactics.

Motion restraint is part of the brief, not a limitation: Laura does not want an animated site. One orchestrated hero reveal on load, quiet hover states, at most a gentle one-time fade as sections enter. Nothing moves while someone is reading. Everything respects prefers-reduced-motion. No parallax, scroll-jacking, marquees, floating shapes, or animated gradients.

Never: purple gradients, glassmorphism, emoji as icons, three identical icon-title-text cards, the cookie-cutter SaaS hero, cursive scripts, anything that looks like a template.

## Constraints

1. Keep the stack exactly as is: static HTML, Tailwind CDN, `css/styles.css`, vanilla JS. No build step, no frameworks, no new libraries.
2. All 8 pages, one design system. Keep Laura's copy as written. Typographic polish is fine; rewriting her voice is not. If you see copy problems, list them at the end rather than fixing them. Never invent testimonials, statistics, or outcomes.
3. Preserve and keep wired up: the Formspree placeholders (`REPLACE_ME` action URLs), the `EMAIL_TODO` mailto on the contact page, the Book a Call CTAs (currently pointing at contact.html pending a scheduler), the AFAP badge, partner logos, the land acknowledgment in the footer, `sitemap.xml` and `robots.txt`.
4. Accessibility is a brand value for this practice: WCAG AA contrast everywhere (berry and orange on cream need checking), visible focus states, semantic structure, alt text, keyboard-navigable mobile menu. Mobile-first; verify at 375px.
5. Zero em dashes in any page copy.

## How to work

When you have enough information to act, act. Don't re-derive what's established here or survey options you won't pursue. If you're weighing a design choice, make a recommendation and move.

Two checkpoints where I genuinely need to weigh in, and no others:

1. **Direction.** Present 2 or 3 named design concepts, each a short paragraph covering palette use, type pairing, and one signature idea, with your recommendation. Wait for my pick.
2. **Homepage.** Build it fully in the chosen direction. Wait for my review, then roll the system across the other 7 pages without further pauses.

Verify your own work: after the rollout, check the full site against this brief using fresh subagents (contrast, reduced motion, mobile nav, every link and form, cross-page consistency) and fix what they find. Before reporting done, audit each claim against something you actually ran or checked this session; if something isn't verified, say so. Lead with the outcome, then list what's still open for me (Formspree IDs, Laura's real email, the scheduler link).
