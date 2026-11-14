# Changelog

flokicoin.org is served by **Cloudflare**, which builds from `main`. Entries
below are grouped by month, newest first, because nothing here is versioned by
release.

> A `static` branch and a GitHub Pages configuration pointing at it still
> exist, and that Pages config reports flokicoin.org as its URL. It is a
> leftover from the previous setup: the `static` tip is dated 2025-05-28, while
> the live site serves content from `main` well after that date. Do not deploy
> from `static` — it would roll the site back about a year.

## [2026-10]

### Changed

- The Tokenization roadmap milestone now lists only **Taproot-Assets**. Runes
  and Ordinals are no longer advertised; tokenization is Lightning-native.
  (#13)

## [2026-05]

### Changed

- tWallet renamed to **TUI Wallet**, and its "Recommended" tag replaced with a
  "TUI Wallet" tag.
- The wallets description now covers assets, nodes and operations.

### Added

- **flnd** and **Lokinode** added to the wallets list, with the requested sort
  order and tags.

## [2026-04]

### Added

- **Tap Wallet** added to the wallets list, and Telegram to the socials.

## [2026-03]

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

## [2025-10]

### Added

- Assets page, and a 150x150 asset format.

### Changed

- Legal documents and footer links consolidated.

### Fixed

- A broken i18n import.

## [2025-09]

### Added

- Anchors for the Web of Fun and ecosystem sections.

### Changed

- Header layout improved.
- Donate page SEO title changed to "Support Flokicoin".
- Yarn pinned and configured (lockfile added, path and config aligned), and the
  package manifest tidied.
- README refreshed.

## [2025-08]

### Changed

- Donation section reworked around a new donation widget, with styling fixes.

### Fixed

- A broken CSS import.

## [2025-05]

### Changed

- Migrated to Next.js.
- Milestones updated.

## [2025-04]

### Added

- Initial site.
