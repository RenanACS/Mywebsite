# Fonts

This design system loads fonts via Google Fonts CDN inside `colors_and_type.css`:

- **Geist** (Google Fonts) — used as a substitute for **Uber Move**, which is proprietary and not freely licensable. Geist is geometric, neutral, and very close in feel to Uber Move's UI weights. **If you want a closer match, please supply the Uber Move font files (or another licensed alternative) and drop them here.**
- **JetBrains Mono** (Google Fonts) — used for code, eyebrows, captions, CVE/hash/path-style details.

To self-host: download the `.woff2` files for each weight you use (400/500/600/700 for Geist, 400/500/600 for JetBrains Mono), put them in this folder, and replace the `@import` at the top of `colors_and_type.css` with `@font-face` declarations.
