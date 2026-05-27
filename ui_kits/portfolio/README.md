# Portfolio UI Kit — Renan Soares

Hi-fi recreation of the portfolio. **Single-page**, three sections, dark canvas with the magnetic cursor enabled.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole portfolio, served via Babel + React. **Open this.** |
| `MagneticHover.jsx` | `<Magnetic>` wrapper — spring-pulls any child toward the cursor. The Antigravity nod. |
| `Cursor.jsx` | Custom cursor (1px accent ring + soft 600px glow that drifts). Hidden below 1024px / on touch. |
| `Nav.jsx` | Fixed top nav with blurred backdrop. Logo, section links, social glyphs. |
| `Hero.jsx` | The opening — name, eyebrow, the one-line bio, primary CTA, "currently" status. |
| `About.jsx` | Two-column about block — bio + side panel with the personal facts (drums, cats, study log). |
| `Projects.jsx` | Three project cards. Drummer Simulator is equal-weight per the brief. |
| `Skills.jsx` | Tech stack grouped into shipping / studying / familiar, with status pills. |
| `Contact.jsx` | The footer-but-not-a-footer. Big mailto CTA + socials. |
| `components.jsx` | `Button`, `Pill`, `Eyebrow`, `SectionHeader`, `SocialIcon` — shared primitives. |

## Behavior captured

- **Magnetic hover** on every interactive element (buttons, project cards, social icons). Spring with `cubic-bezier(0.34, 1.56, 0.64, 1)`, max ~24px displacement, disabled on touch + <1024px.
- **Custom cursor** — a 1px accent ring + a soft 600px radial glow that drifts behind it. The site cursor is hidden on the canvas; native cursor returns over text inputs.
- **Subtle card tilt** toward the pointer (±0.5°) on hover.
- **Scroll-in fade-up** for sections (320ms, 12px translate, default ease-out).
- **Tab is highlighted in the nav** based on scroll position (intersection observer).

## Known limitations

- Drummer Simulator card is a visual placeholder; the play button doesn't actually load Web Audio.
- The 404 / "dog" easter egg page isn't built — would be a separate route.
- Form fields aren't present (no contact form by design — the CTA is mailto + socials).
