# isputnik.main

Overview landing page for the isputnik projects, served at <https://isputnik.net>.

This repository is the public-facing index for related isputnik repos:

- `isputnik.home` - open source, self-hosted family media library: audiobook
  and ebook libraries, a photo and video gallery with face recognition, stories,
  a family tree, collections, quotes, backups, multi-user accounts, and offline
  PWA support - deployed via Docker or the Unraid Community Applications template
- `isputnik.main` - this lightweight overview site

## Project layout

- `index.html` - static landing page
- `styles.css` - landing page styling
- `Assets/brand/` - shared brand marks and app icons
- `Assets/screenshots/` - product screenshots, see below
- `Documents/architecture.md` - high-level platform architecture notes

## Open locally

Open `index.html` directly in a browser. No build step is required.

## Screenshots

Every picture on the page was captured from a demo install of isputnik.home
built entirely from public-domain and CC0 material - Standard Ebooks and Project
Gutenberg texts, LibriVox recordings, openly licensed photographs, NASA
portraits - so nothing in them is anyone's private library. The people in the
face-recognition shot are astronauts, under their own names.

`Assets/screenshots/*.png` are the 1440px masters; `*-<width>.webp` are what the
page serves through `srcset`. Both are committed, so a new width can be cut
without the demo server running.

They are produced by two scripts that live with the demo content rather than
here (they need the app's dependencies and a running server):

```bash
# in the demo content folder, with the demo server up
node scripts/marketing-shots.mjs      # captures the masters
node scripts/marketing-optimise.mjs   # cuts the WebP derivatives
```

Captures are cropped to the feature they show - a shelf, a row of faces, a map -
rather than a whole window, and several are taken in the app's dark theme
because the hero of this page is dark navy. The rig switches the demo account's
theme for the shot and switches it back.
