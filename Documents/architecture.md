# isputnik Architecture

`isputnik.main` is the overview project for the isputnik family of repositories.
It introduces the platform, links to active apps, and keeps the shared product
direction in one small static site.

## Projects

### isputnik.home

Open source, self-hosted web application for a trusted household circle. It is
designed for a private home network, with local storage and administration under
the home server owner's control.

Core areas:

- Invite-only accounts and role-based access
- Personal and shared notes
- Media uploads, thumbnails, and library browsing
- Background jobs for processing and backups
- Simple administration for a home server owner
- Home-network first deployment with no required hosted service

Repository: https://github.com/isputnikdotnet/isputnik.home

### isputnik.player

Android audiobook player, code name **iSputnik Laika**, for local files,
bookmarks, progress, and offline downloads from `isputnik.home`.

Core areas:

- Local audiobook playback
- Metadata, cover art, bookmarks, and progress
- Kotlin, Jetpack Compose, Media3 ExoPlayer, Room
- Connection to `isputnik.home` for browsing and downloading books
- Offline listening after books are downloaded from the home server

Repository: https://github.com/isputnikdotnet/isputnik.player

### isputnik.main

Small static index for the project family.

Repository: https://github.com/isputnikdotnet/isputnik.main

## Principles

- **Private by default** - data should stay on infrastructure controlled by the
  family unless a deliberate integration is enabled.
- **Small enough to maintain** - prefer understandable systems over operational
  complexity.
- **Modular growth** - each app should be useful on its own while fitting the
  larger isputnik identity.
- **Recoverable** - backups, clear ownership, and simple recovery paths are core
  product behavior, not afterthoughts.

## Repository Role

This repository should stay lightweight:

- Static landing page
- Shared brand assets
- Cross-project overview documents
- Links to active app repositories as they are created
