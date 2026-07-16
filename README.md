# DINAKO Multi Solutions — Marketing Website

A responsive, SEO-optimized single-page marketing site built with **React 18 + Vite + Tailwind CSS**.

## Structure
```
src/
  components/
    Nav.jsx           Sticky header + mobile menu
    Hero.jsx           Landing hero section
    Services.jsx       6 core service cards
    About.jsx           Founder / about section
    Opportunity.jsx    "Become a Financial Planner" career section
    FAQ.jsx             Accordion FAQ
    Contact.jsx         Contact / CTA block
    Footer.jsx
    FloatingCTA.jsx     Floating Call + WhatsApp buttons
    Icon.jsx            Inline SVG icon set (no external icon library, faster load)
    Reveal.jsx          Scroll-reveal animation wrapper
  data.js               All site copy/content — edit this file to change text
  App.jsx
  main.jsx
  index.css
index.html               SEO meta tags, Open Graph, JSON-LD schema
tailwind.config.js       Brand color tokens (navy / gold / emerald / cream)
```

## Getting started

```bash
npm install
npm run dev        # start local dev server (http://localhost:5173)
npm run build       # production build → dist/
npm run preview     # preview the production build locally
```

## Editing content
Almost all text (services, career-opportunity content, FAQs, phone number) lives in `src/data.js`. Update it there — no need to touch component files for copy changes.

## Deploying
The `dist/` folder produced by `npm run build` is static and can be deployed to:
- **Vercel**: `vercel deploy` (auto-detects Vite)
- **Netlify**: drag-and-drop the `dist/` folder, or connect the repo (build command `npm run build`, publish directory `dist`)
- Any static host (GitHub Pages, Cloudflare Pages, S3, etc.)

## Before going live
1. Replace `https://dinakomultisolutions.in/` in `index.html` and `public/sitemap.xml` with your real domain.
2. Add a real `og-image.jpg` (1200×630px) to `public/` for social sharing previews.
3. Update the phone number / contact details in `src/data.js` if they change.
4. If this business operates in a regulated space (financial advisory, insurance), have the "career opportunity" copy in `Opportunity.jsx` / `data.js` reviewed against SEBI/IRDAI advertising guidelines before publishing.
