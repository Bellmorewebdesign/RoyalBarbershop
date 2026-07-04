# Royal Barber Shop — Website

A modern, sleek, **frontend-only** one-page website for **Royal Barber Shop**
in Bellmore, NY. Built with **React + Vite + Tailwind CSS**. No backend, no
forms, no fake booking — just a fast, premium marketing site that helps
customers call, get directions, browse services and trust the shop.

<p>
  <strong>2111 Bellmore Ave, Bellmore, NY 11710</strong><br />
  <strong>(646) 409-3677</strong> · Open 7 Days · ⭐ 4.7 (60 Google reviews)
</p>

## Quick start

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build → dist/
npm run preview # preview the production build locally
```

## Add the real photos

The site uses **only the shop's own local photos** — no stock or AI images.
Drop them into [`public/images/`](public/images/README.md) using the filenames
listed there. Until you do, each image slot shows a branded fallback panel so
nothing ever looks broken.

| Filename               | Section              |
| ---------------------- | -------------------- |
| `storefront-night.jpg` | Hero background      |
| `barber-kid-car.jpg`   | About (main)         |
| `interior-boy.jpg`     | About (overlap)      |
| `street-view.jpg`      | Visit / Location     |
| `storefront-day.jpg`   | Spare                |

Image paths live in `src/lib/images.js` if you want to rename them.

## Project structure

```
index.html                 # SEO meta + JSON-LD local business schema
src/
  main.jsx                 # React entry
  App.jsx                  # Page composition
  index.css                # Tailwind layers + custom animations/utilities
  lib/
    business.js            # Name, address, phone, links — single source of truth
    images.js              # Local image path map (+ replacement instructions)
  data/
    services.js            # Service cards
    reviews.js             # Google reviews + keywords
  hooks/
    useScrollReveal.js     # IntersectionObserver scroll-reveal
  components/
    Navbar.jsx  Hero.jsx  About.jsx  Services.jsx
    Reviews.jsx  Visit.jsx  Footer.jsx
    Logo.jsx  SmartImage.jsx  Stars.jsx  icons.jsx
public/
  images/                  # ← drop shop photos here
```

## Editing content

- **Business info** (phone, address, hours, rating, Maps link): `src/lib/business.js`
- **Services**: `src/data/services.js`
- **Reviews**: `src/data/reviews.js`
- **Colors / fonts / animations**: `tailwind.config.js` and `src/index.css`

## Notes

- Fully mobile responsive with a professional slide-in mobile menu.
- Smooth scrolling, scroll-reveal animations, animated buttons and hover effects.
- Respects `prefers-reduced-motion`.
- Fonts are self-hosted (no external requests).
- All buttons/links work: **Call** (`tel:`), **Get Directions** (Google Maps).

---

Powered by [Bellmore Web Design](https://Bellmorewebdesign.com)
