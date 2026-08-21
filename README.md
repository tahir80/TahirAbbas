# Tahir Abbas — personal website

A simple, static personal/academic website. No build step — plain HTML, CSS, and
vanilla JS. Open any `.html` file directly in a browser to preview it locally.

## Structure

```
index.html            Home page (bio, highlights, recent publications/news)
publications.html     Full publications list with type filters
news.html              Full news list
awards.html            Awards & funding list
assets/css/style.css   All styling — colors and fonts are set as CSS variables
                        at the top of the file
assets/js/
  publications-data.js  ← edit this to add/change a publication
  news-data.js           ← edit this to add/change a news item
  awards-data.js          ← edit this to add/change an award or grant
  publications-render.js  (rendering logic — usually no need to touch)
  main.js                 (nav highlighting — usually no need to touch)
assets/img/             Avatar, publication thumbnails, award images
```

## How to update the site

**Add a publication:** open `assets/js/publications-data.js`, copy one of the
existing entries, edit the fields, and paste it into the `PUBLICATIONS` array
(anywhere — it's sorted by year automatically). Each entry supports a
`type` (journal / conference / workshop / preprint / software / thesis),
an optional `award` tag, an optional `thumb` image, and an optional `url` link.

**Add a news item or award:** same pattern, in `news-data.js` / `awards-data.js`.

**Add a real photo:** replace `assets/img/avatar-placeholder.svg` with a real
image file (e.g. `avatar.jpg`), then update the `src` in `index.html`'s hero
section to match.

**Edit the bio:** it's the paragraph inside `<p class="hero-bio">` in
`index.html`. The "Draft bio" note is a `<span class="edit-note">` — delete
that line once the bio is finalized.

**Fill in real profile links:** the Google Scholar, LinkedIn, and ORCID links
in `index.html`'s hero section are currently placeholders (`href="#"`) —
replace them with the real URLs.

## Deploying with GitHub Pages

1. Push this repository to GitHub (see instructions below if this wasn't done
   automatically).
2. On GitHub, go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`.
4. Save. The site will be live in a minute or two at
   `https://tahir80.github.io/TahirAbbas/`.

No build step, no Jekyll config needed — the `.nojekyll` file in this repo
tells GitHub Pages to serve the files as-is.
