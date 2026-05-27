# Renan Soares — Portfolio Design System

A personal design system for **Renan Augusto da Costa Soares** — software engineer transitioning into cybersecurity / red-team. The portfolio is built on the discipline of Uber's **Base** design language with a single sharp accent (amber phosphor `#FFB800`) on a pure-black canvas. Hover affordance is **neon white** — separating *"this is hoverable"* from *"this is the action"*. Tasteful red-team flavor in the details. Clean, not sterile.

> Status: v0.1 — generated from a brief, awaiting iteration. See **Caveats & next steps** at the bottom.

---

## Index

| Path | What it is |
| --- | --- |
| `README.md` | This file — the brand brief, content + visual foundations, iconography. |
| `colors_and_type.css` | All design tokens (color, type, spacing, radii, motion) + semantic helper classes. **Single source of truth.** |
| `fonts/` | Font notes. (Geist + JetBrains Mono via Google Fonts CDN; substitution flagged.) |
| `assets/` | Logo glyph, social icons, project thumbnails. |
| `preview/` | Cards rendered into the Design System tab — colors, type, spacing, components. |
| `ui_kits/portfolio/` | Hi-fi recreation of the portfolio: About, Projects (with Drummer Simulator featured), Skills. Includes the magnetic-hover behavior and a click-thru `index.html`. |
| `SKILL.md` | Agent-readable skill manifest — lets Claude Code use this system in other projects. |

---

## Sources & inputs

This system was generated from a written brief, not a prior codebase or Figma file. Key inputs:

- Brand voice cues: portfolio (not a product), "clean but with personality," "not vibe-coded," subtle animal + drums + tech references.
- Aesthetic anchor: **Uber Base** (https://base.uber.com) for the structural discipline — type hierarchy, generous whitespace, clean grid, monochrome with one accent.
- Interaction reference: **Google Antigravity** site hover — magnetic pull with spring damping. Implemented in `ui_kits/portfolio/MagneticHover.jsx`.
- Subject: Renan Soares — GitHub `RenanACS`, IG `renanacsoares`, LinkedIn `renan-augusto-soares-883983411`.

No proprietary brand assets were supplied. The logo glyph is a custom monogram (`RS` in a hairline-stroke square) generated for this project — replace freely.

---

## Content fundamentals

The voice is **direct, first-person, low-ego, technical**. Like a `man` page written by someone who reads.

| | |
| --- | --- |
| **Person** | First-person singular. "I build," "I broke into," "I'm learning." Never "we." Never "Renan does." |
| **Tense** | Present-active. "I drum" not "I'm a drummer." "I ship code" not "I've shipped code." |
| **Tone** | Confident-quiet. State the thing, don't sell it. No exclamation marks. |
| **Casing** | Sentence case for prose. **lowercase** for mono micro-copy and section tags (`projects/`, `// 2024 →`, `skills.list()`). ALL-CAPS reserved for eyebrows (e.g. `RED TEAM`, `CASE STUDY`). |
| **Length** | Short sentences. A heading is at most one line. A project blurb fits in two. |
| **Numbers** | Always numerals (`3 years`, not "three years"). Pair with mono. |
| **Emoji** | **None on the page itself.** The brand is monochrome — emoji glyphs fight the system. Use the **line-icon** vocabulary in `assets/icons/` (cat, dog, drum, lock, keyboard) wherever you'd reach for an emoji. Emoji is fine in source comments, commit messages, console easter eggs — just not in the rendered UI. |
| **Tech vocabulary** | OK to reference real tools, OS names, CVE numbers, port numbers, etc. — they double as visual texture. e.g. `nmap -sV`, `CVE-2024-XXXX`, `:8080`. |
| **Forbidden** | "Passionate," "ninja," "rockstar," "wizard," "synergy," gradient hero text, "🚀", AI-shop em dashes between every clause. |

**Example copy:**

> Hi, I'm Renan. I write code by day, drum by night, and break things on purpose on weekends. Heading toward red team.

> `projects/` Drummer Simulator — a playable kit in the browser. Web Audio + Canvas. WIP.

> `skills/` Currently shipping: TypeScript, Go, Linux, Burp Suite, nmap. Currently studying: OSCP, kernel internals.

---

## Visual foundations

### Colors

- **Canvas: `#000000`.** Pure black, never off-black. The portfolio is one continuous black plane.
- **Surfaces.** Cards sit on `#121215` with a 1px `rgba(255,255,255,0.08)` hairline. **No drop shadows** — borders + a single accent glow do all the lifting.
- **Foreground.** White with opacity tiers: `0.92 / 0.64 / 0.40 / 0.24`. We never use a colored gray; opacity-of-white only.
- **Accent (amber `#FFB800`)** is the **action color**. Reserved for filled CTAs, the active dot in the nav, status indicators, and the cursor radial glow. Used *once per screen* as a fill — never as a hover state. Amber-soft `rgba(255,184,0,0.16)` for the focal CTA's halo.
- **Hover is neon-white**, not chromatic. Cards, surfaces, linked icons brighten their hairline to `rgba(255,255,255,0.5)` with a 32px white halo. Two affordances: **white = "hoverable"**, **amber = "action"**.
- **Signal colors** (sparingly, red-team flavored): `#2BD37B` "live," `#FF8A3D` "advisory," `#FF4D4D` "critical." Used as 6px dots, 1px borders, or mono tags — never as fills.

### Type

- **Geist** (sans, substitute for Uber Move) for everything visible.
- **JetBrains Mono** for: eyebrows, captions, code, tags, project metadata, status dots labels, the cursor coordinate readout. Mono carries the red-team flavor without resorting to terminal theatrics.
- Display weight is **600** (semibold), body is **400**, eyebrow is **500 mono**. Bold (700) is almost never needed.
- Tracking is **tight** on headlines (`-0.035em`), normal on body, **wide** on caps eyebrows (`+0.14em`).
- Line-height ladder: display `0.96` → h1 `1.04` → h2 `1.12` → h3 `1.3` → body `1.6`.

### Layout

- 12-column grid, 80px gutters at desktop, 24px on mobile. Content max-width **1200px** with **96px** outer padding.
- Sections separated by **128px** vertical space, never less than **64px**.
- Section headers anchored top-left with a mono eyebrow above (`01 / ABOUT`).
- A persistent **fixed top nav** (left logo, right links). No footer chrome — the contact section *is* the footer.

### Backgrounds

- Always solid `#000`. **No gradients.** No images behind text. No noise textures. No starfields.
- The only "background motion" is the optional **magnetic cursor field** — a faint 1px accent dot that follows the mouse, plus a 600px-radius soft accent glow at very low opacity that drifts with the cursor on the hero only. Disabled below 1024px and on touch.

### Borders, radii, cards

- Hairlines everywhere: `1px solid rgba(255,255,255,0.08)`.
- Radii are **tight**: `4 / 6 / 10 / 14`, plus `999` for pill tags. No "soft fluffy" radii like 24+. Most cards use **10px**.
- A card is: `#121215` fill, 1px hairline, 10px radius, **inset 1px top highlight** at `rgba(255,255,255,0.06)` to feel etched. On hover: hairline brightens, card lifts via **transform** (not box-shadow) by `-2px`, and tilts ±0.5° toward the cursor.

### Shadows / elevation

- We avoid drop-shadows on pure black — they read as fuzz. Elevation is communicated by **brighter borders** and the **inset top highlight**, not by darker shadows.
- The **only** shadow in the system is `--rs-glow`: a soft 40px accent halo used on the primary CTA when focused/hovered. Used very rarely.

### Animation

- **Default easing** is `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out, snappy in, soft landing).
- **Spring easing** `cubic-bezier(0.34, 1.56, 0.64, 1)` for magnetic-cursor pulls and small bouncy emoji bumps.
- **Durations**: 120 / 200 / 320 / 560ms. Never longer than 560ms for UI feedback.
- Hover: 200ms; press: 120ms; scroll-in: 320ms (fade + 12px translate); magnetic pull: spring with ~24px max displacement.
- No bouncing wholesale, no "AI parallax." Motion supports the cursor's relationship to the thing, nothing else.

### Hover & press states

- **Hover (interactive card / surface):** hairline brightens from `rgba(255,255,255,0.08)` to `rgba(255,255,255,0.5)`, a 32px white halo emerges, transform `translateY(-2px)` and a ~0.5° tilt toward the cursor. **No chromatic.**
- **Hover (link in prose):** underline color shifts to `--rs-accent` (amber), text color to `--rs-accent-hi`. The one place amber bleeds into hover.
- **Hover (primary button — already amber fill):** background lightens to `--rs-accent-hi` (`#FFCC33`).
- **Press:** `scale(0.97)` 120ms, no color change.
- **Focus-visible:** 2px outline in `--rs-accent` at 2px offset, radius matches the element.

### Transparency / blur

- Used twice and only twice: **the top nav's backdrop** (`backdrop-filter: blur(16px); background: rgba(0,0,0,0.6); border-bottom: 1px solid var(--rs-line);`) and **the focused project card's overlay** (`rgba(0,0,0,0.6)` over the rest of the grid). Nowhere else.

### Imagery

- B&W or duotone (white on black) — no full-color photos. If a project demands a screenshot, render it inside a `#121215` card with a hairline border and a 10px radius mat.

---

## Iconography

**No icon library is imported by default** — the system uses a *very* small set of hand-drawn line icons.

The vocabulary, in order of use:

1. **Logo glyph.** `assets/logo.svg` — `RS` monogram in a 24×24 hairline square. Used in the top-left of the nav and as the favicon.
2. **Line icons.** `assets/icons/` — 16×16 SVGs at **1.3–1.4px stroke**, all using `currentColor`, no fills (except dot details). The set: `cat.svg`, `dog.svg`, `drum.svg`, `lock.svg`, `keyboard.svg`. These **replace what would have been emojis** — they're how the brand signals "music," "red team," "personal" without breaking the monochrome plane.
3. **Social glyphs.** `assets/social/{github,linkedin,instagram}.svg` — same 16×16, 1.4px stroke, currentColor convention.
4. **Status dots.** 6px circles in `--rs-live` / `--rs-warn` / `--rs-crit` — used in project cards to indicate state.

**Color emojis are not used in the rendered UI.** The system is black + white + amber; native emoji glyphs fight that. Emojis are fine in source comments, console easter eggs, commit messages — just not visible on the page.

**If more icons are ever needed** for a one-off, use **Lucide** (https://lucide.dev) at `stroke-width: 1.4` — its hairline aesthetic matches the system. Pull the specific SVG, don't include the whole library.

We do **not** use: Material Symbols, FontAwesome, color emoji on-page, gradient icons, or 3D-ish icons.

---

## Caveats & next steps

- **Geist is a substitute for Uber Move** (proprietary). It's close, but if you can license Move or want a different sub (e.g. Söhne, Roobert), point me at the files and I'll swap.
- The **drum / cat SVG marks** are emoji until you decide if you want custom-drawn ones. (Recommended: keep emoji — it's the rare honest place to use them.)
- **Drummer Simulator** is currently a placeholder card. When you have screenshots or a live URL, drop them into `assets/projects/` and I'll wire them in.
- The **magnetic cursor** is implemented and gated to >=1024px non-touch. Tune the spring constants if it feels too lively / too sleepy.

See `ui_kits/portfolio/README.md` for the UI kit details.
