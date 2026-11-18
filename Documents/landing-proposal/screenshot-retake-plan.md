# Screenshot re-take — plan

Every product image on the new isputnik.net, captured again in one sitting so the site
reads as one product. Draft 2026-11-15, for review. Builds on `app-pages-plan.md` (step 3
there).

## In one sentence

Re-run the existing marketing rig against the demo site, switched to the **Orbit** theme
and the **top layout**, adding the pages that have no captures yet (Movies, Games) and
taking the TV again on the Fire TV — 42 web captures and 5 TV captures in all.

## What already exists (and is reused)

- **The rig:** `D:/Demo/scripts/marketing-shots.mjs` makes cropped PNG masters at 1440 px
  and writes them straight into this repo's `Assets/screenshots/`.
  `marketing-optimise.mjs` then makes the WebP sizes the pages load (`-720`, `-1080`,
  `-1440`). It is not the docs rig (`npm run docs:shots`); that one serves the user guides
  and stays as it is.
- **The demo site:** `D:/Demo/site`, port 4100, Demo Admin (`test@test.com`). It already
  runs the video engine beside it on :4310, with five public-domain films and one show
  (*Sherlock Holmes*, 1954). Its faces are NASA portraits, its photos come from Wikimedia
  Commons, and its family tree is invented.
- **The TV store captures:** seven 1920×1080 PNGs in `isputnik.tv/store/screenshots`, taken
  on the Fire TV against the demo server, never the family's own.

## Rules for every capture

1. **The demo site only** (`BASE=http://localhost:4100 DB_PATH=D:/Demo/site/data/db/isputnik.sqlite`).
   Never the dev server: its database holds the real family tree. *Personal* libraries are
   only Demo Admin's demo phone roll.
2. **Signed in as Demo Admin**, with the What's-new note marked seen, so it doesn't sit at
   the top of every Home capture.
3. **Orbit theme, top layout.** The site wears Orbit, so the app should too. Today every
   shot names `theme: "minimalist"`; this becomes one default (`orbit`) that a shot can
   override. The Appearance-picker shots (`theme-*`) stay one per theme, with Orbit added.
4. **1440 × 900 masters at 1x**, as now; headless Chrome still stalls on 2x. `home-phone`
   stays 390 px at 2x, which works.
5. **Look at every image before it ships.** This is a public repo, so no real names, faces,
   addresses or family photos. A shot that picks "the newest photo" changes when the demo
   library changes.

## Changes to the rig first

| Change | Why |
|---|---|
| Default theme `orbit`; add `theme-orbit` | The site is Orbit; Minimalist captures would clash |
| Re-frame the "library main page" shots | The rig's rule was "whole window, because the left navigation is the point". The top layout put that navigation in the top bar and the section tabs, so check each whole-window shot shows them, not a blank sidebar |
| Update old control-panel addresses | `control/maps`, `control/security`… still work through the aliases, but the addresses should be the v2 ones (`CONTROL_PATHS`) so a capture never lands on a redirect |
| A games server beside the demo | `site.mjs` starts video but not games. Start `isputnik.games` on its own port with a demo secret, pair it the way video is paired, and seed two members' finished matches so results and ratings aren't empty |
| Video shots wait for posters | Posters and backdrops load lazily from the engine. Wait for the images, not a fixed time |

## The shot list

✓ = re-take an existing shot · **new** = add to the rig.
The *Used on* column is what each capture serves, so nothing is taken twice.

### Landing page

| Shot | What | Used on | |
|---|---|---|---|
| `theme-orbit` | Home, Orbit | landing strip "At home" | **new** (replaces `theme-plain-dark`) |
| `home-phone` | Home on a phone | landing / Download | ✓ |
| `audiobooks-grid` · `ebooks-grid` · `gallery-grid` · `story-edit` · `family-tree` | see below | landing strip + app heroes | ✓ |
| `video-home` · `games-lobby` | see below | landing strip: add *Watch* and *Play* tabs | **new** |
| `wizard-type` | Add library, step 1: the four library types | How it works, step 2 | **new** (stand-in: docs shot 20, light theme) |
| `wizard-folder` | The folder picker over the demo media | How it works, step 3 | **new** (stand-in: docs shot 22) |

### Audiobooks — 6

`audiobooks-grid` (hero) ✓ · `audiobook-detail` ✓ · `audio-player` ✓ (now 500 px; take it at
1440 like the rest) · `audiobook-narrators` ✓ · `audiobook-edit` ✓ · `scan-layout-audiobooks` ✓

### Ebooks — 6

`ebooks-grid` (hero) ✓ · `ebook-reader` ✓ · `book-editions` ✓ · `ebook-authors` ✓ ·
`quotes` ✓ · `scan-layout-ebooks` ✓

### Photos — 7

`gallery-grid` (hero) ✓ · `gallery-memories` ✓ · `gallery-people` ✓ · `gallery-map` ✓ ·
`gallery-album` ✓ · `gallery-slideshows` ✓ · `gallery-voice-note` ✓

Worth adding later, not needed now: a Review-mode capture and the phone-backup page.

### Stories — 4

`story-hero` (hero) ✓ (now 1016 px; capture at 1440) · `story-edit` ✓ · `story-add-block` ✓ ·
`story-map-block` ✓

### Family tree — 5

`family-tree` (hero) ✓ · `family-person` ✓ · `family-families` ✓ · `family-timeline` ✓ ·
`family-gedcom` ✓

### Movies & TV — 5, all new

| Shot | What | Setup |
|---|---|---|
| `video-home` (hero) | The video page: the featured film over its rows | none |
| `video-film` | *His Girl Friday*'s page: poster, cast, sound tracks | none |
| `video-player` | *Sherlock Holmes* with **Skip intro** showing | an intro mark on the season; seek inside it |
| `video-cast` | Cary Grant's person page | TMDB metadata already in the demo catalogue |
| `video-download` | The Download dialog for a season, 480p chosen | open it and stop before preparing |

### Family games — 5, all new

| Shot | What | Setup |
|---|---|---|
| `games-lobby` (hero) | Every game, with the household's results | a few finished matches seeded |
| `games-chess` | A middle game against the computer, coach open | a saved game, not a live one |
| `games-dominoes` | A hand of *Kozyol* in progress | against the computer |
| `games-sputnik` | Sputnik Catch mid-game | pause it to capture |
| `games-invite` | The invitation window with its QR code | QR of the demo server's address only |

### iSputnik TV — 5, on the Fire TV

The TV wears the account's theme (always its dark form), so set Demo Admin to Orbit and
retake with `adb exec-out screencap -p`. Then convert with the same sharp step used for
`shots/` (1440 + 720 WebP) and move them into `Assets/screenshots/tv-*`.

`tv-movies` (hero) · `tv-show` · `tv-film` · `tv-player` (Skip intro) · `tv-profiles`
(Who's watching?). Photos on the TV (`5-photos`, `6-photo-slideshow`) also come from the
demo server, so they are safe to add as a sixth.

## Totals

| | Re-take | New | |
|---|---|---|---|
| Web | 29 | 13 (`theme-orbit`, 2 wizard, 5 video, 5 games) | 1440 px masters → WebP |
| TV | 5 | — | adb, 1920 × 1080 → WebP |

Roughly an afternoon once the games server is beside the demo: the rig runs the whole web
set in one go, and its states (a files-type cleanup in review for `duplicate-card`, and so
on) are recorded in `D:/Demo/README.md`.

## Order of work

1. Rebuild the demo on current `main` (`node D:/Demo/scripts/site.mjs --build`) and mark
   What's-new seen.
2. Rig changes from the table above. Put the games server in `site.mjs` and seed matches.
3. Run the web set; review every image at full size; re-run individual shots as needed
   (`node scripts/marketing-shots.mjs video-film games-chess`).
4. `marketing-optimise.mjs`; `node build-app-pages.mjs` picks the new WebP up by name.
   The dashed placeholders on Movies and Games disappear by themselves.
5. TV set on the Fire TV.
6. Look through all eight app pages and the landing strip together, in Orbit, before any
   of it goes live.

## Status — 2026-11-17

Web set taken in Orbit against the demo on **4.90.0** (worktree `.claude/worktrees/shots-490`, `DEMO_REPO` points the demo scripts at it) with video engine 0.41.0: 43 captures, WebP made, pages rebuilt. Changes from the list above:

- **Themes section added** to the landing page (Make it yours), using the seven `theme-*` captures; `theme-orbit` is new.
- **video-cast and video-player dropped:** the demo catalogue has no cast credits and no intro marks. Movies shows `video-film`, `video-download` and the TV's `tv-show`; `video-show` was taken but its episodes have no stills, so it is unused.
- **scan-layout-* not re-taken** (still light, framing clips the left edge) and taken off the Audiobooks and Ebooks pages.
- **Games done (same day):** `site.mjs` now starts isputnik.games 0.28.0 on :4210 beside the demo, paired by env; `scripts/games-seed.mjs` posts results against the computer for Demo Admin and Sam through the gateway. Five shots: `games-lobby` (leaderboard on vs Computer), `games-chess` (an Italian-game position played on one screen), `games-dominoes`, `games-sputnik`, `games-invite`. The landing strip has a Play tab.
- **Still to do:** the TV set in Orbit on the Fire TV; `scan-layout-*`.

## Open questions

- **Old Minimalist captures:** keep them for the user guides' sake, or delete them once the
  Orbit set is in? The guides use their own PNGs (`docs/users/images`), so the site's old
  ones can go.
- **Landing strip:** add *Watch* and *Play* tabs (proposed), or keep it to home's own apps?
- **Light-theme version:** the site is dark only. Skip a light set unless the site gets a
  light mode.
