# NOVA Landing — Layout

Design spec for `NOVA Landing.dc.html` and its React equivalent in `src/`.

---

## 1. Canvas

| Token | Value |
| --- | --- |
| Content max width | `1200px` |
| Gutter | `24px`, all breakpoints |
| Spacing system | 8px base (4px half-steps for optical fixes) |
| Nav height | `72px` |
| Scroll padding top | `96px` so anchors don't land under the nav |

Section grounds alternate between `--bg` and `--bg-2`, with `1px` hairline borders on the raised
blocks. Never more than two grounds in play.

---

## 2. Vertical rhythm

Padding is tiered by a section's weight rather than applied flat, so the page has a pulse instead of
a metronome.

| Tier | Block padding | Sections |
| --- | --- | --- |
| Anchor | `clamp(88px, 9vw, 152px)` | Product |
| Anchor (light) | `clamp(80px, 8.5vw, 136px)` | FAQ |
| Standard | `clamp(72px, 8vw, 128px)` | Features, How it works, Solutions, Pricing |
| Light | `clamp(72px, 7.5vw, 116px)` | Testimonials |
| Band | `clamp(56px, 6vw, 88px)` | Stats |
| Close | `clamp(80px, 9vw, 140px)` | Final CTA |
| Hero | `168px` top / `clamp(56px, 6vw, 88px)` bottom | Hero |
| Pendant | `0` top / `clamp(64px, 7vw, 96px)` bottom | Trusted by |

Hero + Trusted by read as **one unit** — the strip has no top padding, so the logos hang off the hero
and the first real gap arrives before Features.

**Heading-to-content gaps** (all fluid, so they compress with the section padding):

| Gap | Value |
| --- | --- |
| Eyebrow to H2 | `16px` |
| H2 to supporting line | `16-20px` |
| Intro block to card grid | `clamp(40px, 4.5vw, 64px)` |
| Intro block to steps row | `clamp(48px, 5vw, 72px)` |
| Intro block to tab row | `clamp(32px, 3.5vw, 48px)` |
| Tab row to panel | `24px` |
| Between product blocks | `clamp(64px, 7vw, 104px)` |
| Card grid gap | `16px` |

---

## 3. Type scale

Headings **Space Grotesk**, body **Manrope**.

| Role | Size | Weight | Tracking |
| --- | --- | --- | --- |
| H1 hero | `clamp(42px, 6.2vw, 76px)` | 700 | `-0.035em` |
| H2 section | `clamp(30px, 3.6vw, 46px)` | 700 | `-0.03em` |
| H2 product block | `clamp(28px, 3.2vw, 40px)` | 700 | `-0.03em` |
| H3 card | `19-21px` | 600 | `-0.01em` |
| Body lead | `clamp(16px, 1.4vw, 19px)` | 400 | — |
| Body | `15-17px` | 400 | — |
| Eyebrow / small caps | `11.5px` uppercase | 700 | `0.2em` |
| Stat numeral | `clamp(38px, 4.6vw, 58px)` | 700 | `-0.04em` |
| Price | `44px` | 700 | `-0.04em` |

Line height `1.02` on the hero, `1.08-1.1` on section headings, `1.6` on body. Measure capped at
`520-640px`.

---

## 4. Surfaces

| Property | Value |
| --- | --- |
| Card radius | `16px` (`14px` accordion, `12px` controls, `18px` tab panel) |
| Card border | `1px solid var(--border)` |
| Card fill | `var(--surface)` — 2.8% white in dark, `#fff` in light |
| Panel shadow | `0 24px 60px -30px rgba(0,0,0,.9)` |
| Card hover | `translateY(-6px)` + accent border + `0 26px 50px -30px var(--glow)` |
| Button hover | `translateY(-2px)` + accent glow |
| Glow fields | Radial gradients behind the hero and final CTA only |

Transitions: `.2s` color/border, `.3s cubic-bezier(.2,.7,.2,1)` transform, `.8s` reveals.

---

## 5. Section stack

| # | Section | Layout at >=1024px | Collapse |
| --- | --- | --- | --- |
| 1 | Nav | logo, links, toggle + CTA, `72px` fixed | <=920px: hamburger + full-screen panel |
| 2 | Hero | 2-col `1fr / 1.02fr`, copy left, mockup right | <=1000px: stacked, mockup below |
| 3 | Trusted by | 6-up `auto-fit minmax(140px, 1fr)` | wraps 3-up, then 2-up |
| 4 | Features | 3-up `auto-fit minmax(300px, 1fr)`, 6 cards | 2-up, then 1-up |
| 5 | Product | two alternating 2-col blocks (text / visual) | <=1000px: stacked, text first |
| 6 | How it works | 3-up with a hairline connector at `top: 27px` | <=760px: stacked, connector hidden |
| 7 | Stats | 4-up `auto-fit minmax(200px, 1fr)` | 2-up, then 1-up |
| 8 | Solutions | tab row + panel `1fr / .85fr` | <=1000px: panel stacks; tabs wrap |
| 9 | Testimonials | 3-up cards | <=760px: scroll-snap carousel, 84% slides |
| 10 | Pricing | 3-up `auto-fit minmax(280px, 1fr)`, Pro highlighted | 1-up, Pro stays highlighted |
| 11 | FAQ | `0.7fr / 1fr` — intro left, accordion right | <=1000px: stacked |
| 12 | Final CTA | centered `720px` column, inline email form | input + button wrap |
| 13 | Footer | `1fr / 2fr` — brand + 4 link columns | <=1000px: stacked; columns `auto-fit 130px` |

Grids use `auto-fit` + `minmax` rather than breakpoint-specific column counts, so reflow happens at
content-driven widths.

---

## 6. Breakpoints

| Width | What changes |
| --- | --- |
| 1440 | Design target. Full 1200px content, all grids at max columns. |
| 1024 | Same structure; `clamp()` steps type and padding down. |
| 1000 | `[data-mq="split"]` two-column blocks collapse to one. |
| 920 | Nav links and desktop CTA hide; hamburger appears. |
| 768 | Feature/pricing grids 2-up to 1-up; hero fully stacked. |
| 760 | Steps connector hidden; testimonials become a carousel. |
| 375 | Single column, `24px` gutters, no horizontal scroll. |

Three media queries total (`1000px`, `920px`, `760px`) plus `prefers-reduced-motion`; everything else
is fluid.

---

## 7. Interaction & motion

**Chrome**
- Nav transparent at rest; gains `blur(16px) saturate(160%)`, `--nav` fill and a bottom border past `12px` scroll. Active link = topmost section within `140px` of the viewport top.
- Mobile menu: full-screen panel, fade + `translateY(-8px)`, `body` scroll locked, Escape closes.
- Back to top fades in past `700px`.
- Theme toggle flips `.light` on `<html>`; every color is a variable, so nothing else changes.

**Entrance**
- Sections fade up `26px` on first intersection (`threshold .08`, `-12%` bottom margin), then unobserve.
- Hero staggers badge, headline, lead, CTAs, footnote (`0.05s`-`0.44s`), mockup last at `0.5s`.
- Chart bars grow from the baseline with a 70ms stagger; the steps connector draws left to right.
- Stat counters run 1.6s ease-out cubic at `threshold .4`, decimals preserved per stat.

**Ambient**
- Hero glow fields drift and breathe on offset 26s / 19s cycles.
- Product mockup floats on a 9s loop; the AI-agent chip pulses a faint glow.
- A light sweep crosses the logo mark every 4.5s.

**Controls**
- Tabs: `role="tablist"`, one panel rendered at a time.
- Pricing toggle swaps price and note line; "Save 20%" sits outside the control.
- Accordion: one open at a time, `grid-template-rows: 0fr to 1fr`, chevron rotates `180deg`.

**Degradation rule.** The resting style is always the visible state. Entrance animations are opt-in —
they only play once a `.nova-in` class lands on the root after mount — and the observers share a
3.5s timeout that forces reveals, bar transforms and final counter values. So a frozen clock, a
disabled-JS load, a print capture or `prefers-reduced-motion` all render the page complete.

---

## 8. Accessibility

- One `h1` (hero); section `h2`s; card `h3`s. No level skips.
- Skip link as the first focusable element.
- `:focus-visible` ring `2px` accent, `3px` offset, on every interactive element.
- Minimum touch target `44px` — nav toggle, hamburger, tabs, socials, inputs, buttons.
- `aria-expanded` + `aria-controls` on the accordion and hamburger; `aria-current="page"` on the active nav link; `role="dialog"` + `aria-modal` on the mobile panel; `role="status"` on the newsletter response.
- Body text >= 4.5:1 in both themes — muted is `#9C9CA9` on `#08080A` (dark) and `#55555F` on `#FBFBFC` (light). Accent type only at label weight or larger.
- Decorative glows, gradients and icons are `aria-hidden`.
