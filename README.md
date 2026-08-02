# Faiza Novansa — Digital Experience

A hand-built, single-page site for Faiza Novansa: web developer, AI builder,
and cybersecurity learner. Pure HTML, modern CSS, and vanilla JavaScript —
no frameworks, no build step.

## Structure

```
index.html              Page markup and SEO/meta tags
style.css                Design tokens, layout, motion
script.js                Interactions, reveal-on-scroll, easter eggs
robots.txt                Crawler rules
sitemap.xml               Sitemap for search engines
manifest.webmanifest      PWA manifest
favicon.svg                Brand mark favicon
```

## Before going live — replace these placeholders

1. **Portrait** — in `index.html`, inside `.hero__portrait`, swap the
   `.portrait-placeholder` block for:
   ```html
   <img src="portrait.jpg" alt="Faiza Novansa" class="portrait-image">
   ```
   Recommended: ~1000×1250px, soft/even lighting, plain or blurred
   background. The frame, glow, and spacing are already tuned for it.

2. **Instagram / TikTok usernames** — replace `USERNAME` in both
   `index.html` (Connect links + JSON-LD) with the real handles.

3. **WhatsApp Channel link** — in `script.js`, set `WHATSAPP_LINK` to the
   real channel URL.

4. **Open Graph image** — add an `og-image.png` (1200×630px recommended)
   to the root and confirm the path in `index.html`'s `<meta property="og:image">`.

5. **Projects** — as real projects ship, replace the "Currently Building /
   Future Release" cards in the Projects section with real names, links,
   and descriptions.

## Local preview

No build tools required — open `index.html` directly in a browser, or serve
the folder with any static server, e.g.:

```bash
python3 -m http.server 8000
```

## Deployment (GitHub Pages)

Push this folder to the `faizanovansa.github.io` repository's default
branch. GitHub Pages will serve `index.html` automatically at
`https://faizanovansa.github.io`.

## Notes

- Respects `prefers-reduced-motion`.
- Keyboard-navigable, with visible focus states.
- Three tiny easter eggs: Konami code, a 5-click on the logo mark, and a
  console greeting — all toast-only, nothing intrusive.
