---
name: renan-soares-design
description: Use this skill to generate well-branded interfaces and assets for Renan Soares's personal portfolio brand, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. The brand is Uber-Base-clean on pure black with a single amber accent (#FFB800), neon-white hover affordance, monochrome line iconography, and a magnetic-cursor interaction model.
user-invocable: true
---

Read the `README.md` file within this skill first, then explore:

- `colors_and_type.css` — all design tokens (color, type, spacing, radii, motion) and semantic helper classes. The single source of truth.
- `assets/` — logo monogram, social glyphs, line icons (cat, dog, drum, lock, keyboard). **There are no color emojis on the page; use these line icons instead.**
- `preview/` — small reference cards for each token group.
- `ui_kits/portfolio/` — a working hi-fi recreation of the portfolio (Nav, Hero, About, Projects, Skills, Contact) with the magnetic-cursor behavior built in. Lift these JSX components directly when prototyping new screens.

If creating visual artifacts (slides, mocks, throwaway prototypes), import `colors_and_type.css` and copy assets out of `assets/`. The recipe for a generic page:
1. Pure black canvas, no gradients, no images behind text.
2. Geist (sans) + JetBrains Mono. Mono for eyebrows, captions, code, tags.
3. Amber `#FFB800` only as a fill for the *one* primary action per screen.
4. Hover state on cards/links = neon-white halo (`rgba(255,255,255,0.5)` border + 32px white glow). Never amber on hover.
5. Cards: `#121215` + 1px hairline + 10px radius + inset top highlight. No drop shadows.
6. Status dots (6px): green `#2BD37B` live, orange `#FF8A3D` advisory, red `#FF4D4D` critical.
7. Iconography: copy from `assets/icons/` or `assets/social/`. Never reach for color emoji.

If working on production code, copy the tokens from `colors_and_type.css` and read the rules in README.md to act as an expert in this brand.

If the user invokes this skill without other guidance, ask them what they want to build (slide, screen, prototype, asset), ask a few clarifying questions, and produce HTML artifacts (or production code, if that's what they need) in this brand.
