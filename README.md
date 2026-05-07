# Veritas Layer — Premium Landing Page

**World-class, mobile-optimized landing page for Veritas Layer**  
The Universal Trust & Verification Middleware for the AI Economy.

## What's included

- `index.html` — Fully responsive, production-ready single-page site
- `styles.css` — All custom premium styling (futuristic dark theme)
- `script.js` — Interactive features (waitlist modal, mobile menu, smooth scroll, form handling)
- `vercel.json` — Production Vercel configuration (clean URLs + security headers)
- `.vercelignore` — Keeps deployment lean and clean

## Design highlights

- Clean minimalist futuristic aesthetic (dark theme)
- **Mobile-first button sizing** — fixed oversized buttons on mobile
- Strong typography + generous spacing
- Glassmorphism cards + subtle micro-interactions
- Fully functional waitlist modal with fake submission flow
- Smooth scroll navigation
- Keyboard accessible (ESC closes modals/menus)

## How to use

1. Open `index.html` directly in any modern browser (Chrome, Safari, Firefox, Edge)
2. No build step required — everything is self-contained with Tailwind via CDN
3. For production: replace Tailwind CDN with your own build if desired

## Customization

- Colors are defined via CSS variables and Tailwind classes (primary accent: `#00D4FF`)
- All content is easily editable in `index.html`
- Founder details, roadmap dates, and copy are ready for real updates

## Deployment on Vercel (recommended)

This project is optimized for **zero-config deployment** on Vercel.

### Quick deploy

1. Push the folder to GitHub / GitLab
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel automatically detects the static site and uses `vercel.json`
4. Your site is live in under 30 seconds

### What the config does

- `vercel.json` → Enables clean URLs, adds enterprise-grade security headers (important for a trust/verification product)
- `.vercelignore` → Excludes unnecessary files from the production build

### Custom domain

After deployment, go to your project → Settings → Domains and add your custom domain (e.g. `veritaslayer.com`).

## Files

```
veritas-layer-website/
├── index.html
├── styles.css
├── script.js
├── vercel.json
├── .vercelignore
└── README.md
```

## Next steps (recommended)

- Connect the waitlist form to a real backend (ConvertKit, Supabase, Formspree, etc.)
- Add analytics (Plausible, Vercel Analytics, or PostHog)
- Set up a custom domain + SSL (automatic on Vercel)
- Consider adding a real favicon and OG image for social sharing

Built to Silicon Valley standards. Ready for investor demos and early user acquisition.

**Founder:** Naallah Mustopha  
**Contact:** mustopha.naallah@veritaslayer.digital

---

© 2026 Veritas Layer. All rights reserved.