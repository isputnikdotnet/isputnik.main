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

`Assets/screenshots/*.png` are the masters; `*-<width>.webp` are what the page
serves. Both are committed, so a new width can be cut without the demo server
running. The hero, the Appearance picker and the closing band use `srcset`; the
cards in the feature rail name one exact width each, because the script that
builds them swaps `src` by filename.

The Appearance picker shows the Home page in each theme (`theme-*.png`). Five
are captured; `theme-system.png` is composed by the optimise script from the
two Plain captures, because System is whichever of those the device asks for.

They are produced by two scripts that live with the demo content rather than
here (they need the app's dependencies and a running server):

```bash
# in the demo content folder, with the demo server up
node scripts/marketing-shots.mjs      # captures the masters
node scripts/marketing-optimise.mjs   # cuts the WebP derivatives
```

A shot is framed one of two ways. An index page - a shelf, People, the family
tree - is captured as the whole app window at 1440x1120, because the left
navigation is half the point: a bare cover grid says "a grid of covers", where
the app around it says "a library you navigate". Everything else is cropped to
the thing itself: a dialog, an editions block, the protection score.

The page wears the app's default theme, Minimalist, with its exact colour
values, and so does every shot of the app, so that a strip of them reads as one
product rather than a set of unrelated crops. The only exception is the
Appearance picker, which needs the same page captured once per theme. The rig
switches the demo account's theme for the shot and switches it back.
