# Royal Barber Shop — Website

A modern, light and **joyous local-barbershop** website for **Royal Barber Shop**
in Bellmore, NY. It is a **plain static site** — just HTML, CSS and vanilla
JavaScript. **No build step, no backend, no forms.** That means it runs directly
on GitHub Pages (or any static host) with nothing to compile.

<p>
  <strong>2111 Bellmore Ave, Bellmore, NY 11710</strong><br />
  <strong>(646) 409-3677</strong> · Open 7 Days · ⭐ 4.7 (60 Google reviews)
</p>

## View it locally

No tools required — just open `index.html` in a browser. Or run a tiny local
server so paths behave exactly like they will on GitHub Pages:

```bash
# Python 3
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy on GitHub Pages

1. Push these files to your repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**.
4. Choose the branch (e.g. `main`) and folder **`/ (root)`**, then **Save**.
5. Your site publishes at `https://<user>.github.io/<repo>/`.

All asset paths are **relative** (`./assets/...`, `./images/...`), so the site
works whether it's served from the domain root or a project subpath. A
`.nojekyll` file is included so GitHub Pages serves the files as-is.

> Note: the earlier all-white page happened because the old version was a
> React/Vite app that needs to be *built* first — GitHub Pages was serving the
> raw source (`/src/main.jsx` → 404). This static version has no build step, so
> that can't happen.

## Files

```
index.html            # The whole one-page site
.nojekyll             # Tell GitHub Pages to skip Jekyll processing
assets/
  css/styles.css      # All styling (light theme, animations)
  js/main.js          # Scroll reveal, sticky nav, mobile menu, counters
images/               # Logo + shop photos (see images/README.md)
```

## The photos & logo

The site uses **only the shop's own images**, stored in `images/`:

| File                   | Where it's used            |
| ---------------------- | -------------------------- |
| `Transparent_logo.png` | Nav, hero, footer (logo)   |
| `storefront-day.png`   | Hero photo                 |
| `barber-kid-car.png`   | Hero (small inset)         |
| `interior-boy.png`     | About photo                |
| `storefront-night.png` | "Walk right in" CTA band   |
| `street-view.png`      | Visit / Location           |
| `normal_logo.png`      | Spare (white-background logo) |

To swap a photo, replace the file in `images/` (keep the same name), or update
the `src="./images/..."` reference in `index.html`.

## Editing content

Everything lives in `index.html` — phone number, address, services, reviews and
links are all plain HTML, easy to edit. Colors and fonts are CSS variables at
the top of `assets/css/styles.css`.

- **Phone:** search `6464093677` (dial link) and `(646) 409-3677` (display).
- **Directions link:** search `google.com/maps`.

---

Powered by [Bellmore Web Design](https://Bellmorewebdesign.com)
