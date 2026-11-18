# Landing page visual proposal

Open `index.html` in a browser. This is a standalone, responsive proposal; the production landing page is unchanged. No build, external fonts, packages, or network connection is needed to view it. Documentation and repository links lead to the real projects.

`desktop.png` and `mobile.png` are full-page browser captures of the proposal. Browser verification passed at 1440, 390, and 320 pixels with no horizontal page overflow. All six screenshot selections load, and the enlarged screenshot dialog opens and closes correctly. To reproduce the checks and captures with installed Chrome and Node 22+, run `node Documents/landing-proposal/verify.mjs` from the repository root; `PROPOSAL_BROWSER` can override the browser executable path.

## Direction

**Your digital library. At home. All yours.**

The books you love. The movies you return to. The photos and stories you keep. Bring them home to a library on your own server.

The current landing page emphasizes memories and includes several separate feature carousels, detailed administration explanations, and a large theme picker. This proposal gives the broader product a simpler introduction: one navigation bar, one screenshot gallery, a compact introduction to video/games/TV, a concrete explanation of connections, and a clear installation link.

The revised proposal uses the home app's **Orbit** theme: the exact navy canvas (`#050c17`), cool white text (`#e9f1f7`), muted blue text (`#92a6b8`), cyan accent (`#24d1e0`), and surface/border tokens from `isputnik.home/apps/web/src/styles/tokens.css`. Cyan buttons use Orbit's dark label color (`#04121c`). Theme styling is in `orbit.css`.

The hero uses `sputnik-scene-orbit.png`, a new version of the original `Assets/brand/sputnik-scene.webp` generated with the built-in image tool. The smaller satellite retains its retro engraved style, with silver-blue lighting, cyan orbit lines, and a midnight-navy background in place of the original gold and orange cast. Left-aligned copy stays readable with contrast overlays and fades into the navy canvas. The image scrolls away before the product details. The original artwork remains intact. See `artwork-prompt.md` for the exact generation prompt.

The copy foregrounds the digital library, names movies in the hero, and introduces movies and TV through iSputnik.video. The installation note identifies video as an optional container.

Real app captures provide the visual weight. The device diagram explains the relationship between the home server and its clients without implying that they are separate libraries.

## Scope and content

- The screenshot selector and enlarged view work. All six screenshots are existing repository assets.
- Video, games, and the Android TV / Fire TV app have dedicated introductions and repository links.
- Games and video are explicitly described as optional connected apps at installation. They are not represented as part of a single-container installation.
- The connection story concerns shared content, people, and devices; it does not promise universal cross-app playback or game-progress synchronization.
- The home-server and ownership language is grounded in the existing landing page and project documentation.
- Screenshot assets predate the new games and video navigation and the Orbit theme. The initial capture uses the existing Plain Dark theme; other captures retain their original Minimalist theme. These are authentic older screenshots, not representations of the current Orbit interface. Before production, replace them with current Orbit captures and consider adding actual video, games, and TV screenshots to the same gallery. No invented product screenshots are used here.
- Details such as backup modes, security scores, offline maps, and theme selection belong in documentation or a deeper feature page instead of the primary landing-page story.

## References reviewed

- https://bookorbit.app/ — reference for brevity and a product-first introduction, not a template to copy.
- Local `index.html`, `styles.css`, `README.md`, and `Documents/architecture.md`.
- https://github.com/isputnikdotnet/isputnik.home — current deployment and connected-app documentation.
- https://github.com/isputnikdotnet — games, video, player, and TV project descriptions.
