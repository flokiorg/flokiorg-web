# Changelog

flokicoin.org is served by GitHub Pages from the **`static`** branch, which
holds the built Next.js export — not from `main`. Pushing `main` therefore
changes nothing that visitors see; a deploy is a separate step that builds and
updates `static`. Entries below are grouped by month, newest first, because
nothing here is versioned by release.

> **The live site is behind `main`.** The `static` tip is dated 2025-05-28,
> while `main` carries 55 commits made after it. Everything from 2025-08
> onwards in this file is written and merged but **not yet published**.

## [2026-05] — not yet deployed

### Changed

- tWallet renamed to **TUI Wallet**, and its "Recommended" tag replaced with a
  "TUI Wallet" tag.
- The wallets description now covers assets, nodes and operations.

### Added

- **flnd** and **Lokinode** added to the wallets list, with the requested sort
  order and tags.

## [2026-04] — not yet deployed

### Added

- **Tap Wallet** added to the wallets list, and Telegram to the socials.

## [2026-03] — not yet deployed

### Added

- A dedicated **Lokihub** section with a feature list and floating SVG, styled
  with gradients and a mobile-optimised layout.
- **Nostr** social link in the header, contact section and footer, with an SVG
  icon filled white for dark backgrounds.

### Changed

- The wallets section was reworked around dropdown selectors for wallets and
  explorers, with the wallet and explorer cards merged.
- Homepage order changed: Lokihub after Web of Fun, wallets after the roadmap.
- The header now hides and reveals on scroll, and its z-index stacking is
  fixed.
- Translations updated for the Lokihub banner and the reworked copy.

### Fixed

- The footer resources link pointed at the wrong path; it now goes to
  `lokihub/resources`.

## [2025-10] — not yet deployed

### Added

- Assets page, and a 150x150 asset format.

### Changed

- Legal documents and footer links consolidated.

### Fixed

- A broken i18n import.

## [2025-09] — not yet deployed

### Added

- Anchors for the Web of Fun and ecosystem sections.

### Changed

- Header layout improved.
- Donate page SEO title changed to "Support Flokicoin".
- Yarn pinned and configured (lockfile added, path and config aligned), and the
  package manifest tidied.
- README refreshed.

## [2025-08] — not yet deployed

### Changed

- Donation section reworked around a new donation widget, with styling fixes.

### Fixed

- A broken CSS import.

## [2025-05]

### Changed

- Migrated to Next.js. This is the last state that reached the live site.
- Milestones updated.

## [2025-04]

### Added

- Initial site.
