# Tahir Abbas — personal website

Academic personal website, built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll starter
(v1.x, "thin starter" architecture — layouts/styles live in versioned `al_folio_*` gems, this repo holds
content and config).

Previously a hand-written static HTML/CSS/JS site; migrated to al-folio for built-in publications
rendering (BibTeX), a CV page, and a maintained theme.

## Structure

```
_config.yml            Site settings: name, nav, feature flags, theme options
_data/cv.yml            CV content: education, experience, awards, interests
_data/socials.yml       Email / GitHub / LinkedIn / Google Scholar links
_bibliography/papers.bib  Publications — one BibTeX entry per paper
_news/                  News items, one file per entry (shown on the home page and /news/)
_teachings/             Courses, one file per course (shown on /teaching/)
_pages/about.md          Home page bio
assets/img/              Profile photo, publication thumbnails
```

## How to update the site

**Add a publication:** open `_bibliography/papers.bib`, copy an entry, and edit the fields.
Add `selected = {true}` to feature it on the home page. See
[docs/CUSTOMIZE.md](docs/CUSTOMIZE.md) for the full field reference (`abbr`, `award`, `preview`, `pdf`, `url`, …).

**Add a news item:** add a new file to `_news/` (copy an existing one) with a `date` in its front matter —
items are sorted newest first.

**Add or update a course:** add or edit a file in `_teachings/`.

**Edit the bio, profile photo, or social links:** `_pages/about.md` and `_data/socials.yml`.

**Edit education / experience / awards:** `_data/cv.yml`.

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000/TahirAbbas/` (note the base path — it matches `baseurl` in `_config.yml`).

## Deploying with GitHub Pages

`.github/workflows/deploy.yml` builds the site and pushes it to the `gh-pages` branch on every push to
`main`. In **Settings → Pages**, set **Source** to `Deploy from a branch`, branch `gh-pages`, folder `/ (root)`.

## Template docs

This repo is generated from al-folio; see [docs/README.md](docs/README.md) and
[docs/CUSTOMIZE.md](docs/CUSTOMIZE.md) for the full theme documentation (feature flags, plugins,
collections, etc.).
