# isputnik Architecture

`isputnik.main` is the overview project for the isputnik family of repositories.
It introduces the platform, links to active apps, and keeps the shared product
direction in one small static site.

## Projects

### isputnik.home

The first app in the orbit. It is planned as a private, self-hosted web
application for a trusted household circle.

Core areas:

- Invite-only accounts and role-based access
- Personal and shared notes
- Media uploads, thumbnails, and library browsing
- Background jobs for processing and backups
- Simple administration for a home server owner

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

