# NOVA — Tokens & Copy Reference

Single source of truth for the palette and every string on the page. Mirrors
`NOVA Landing.dc.html`. Components read these through CSS variables declared in
`src/app/globals.css` and through the typed arrays in `src/data/` — no raw hex
and no hardcoded lists live in JSX.

---

## Palette

Every color is a CSS variable. `html.light` redefines the same names, so the
theme toggle flips one class and nothing else changes.

| Variable | Dark | Light | Used for |
| --- | --- | --- | --- |
| `--bg` | `#08080A` | `#FBFBFC` | Page ground, standard sections |
| `--bg-2` | `#0C0C10` | `#F4F4F7` | Raised sections, mockup body, footer |
| `--surface` | `rgba(255,255,255,.028)` | `#FFFFFF` | Card fill |
| `--surface-2` | `rgba(255,255,255,.05)` | `#F6F6F9` | Active nav pill, muted chips |
| `--border` | `rgba(255,255,255,.09)` | `rgba(12,12,20,.10)` | Hairlines, card borders |
| `--border-strong` | `rgba(255,255,255,.16)` | `rgba(12,12,20,.20)` | Ghost buttons, inputs |
| `--text` | `#F2F2F5` | `#101014` | Primary ink |
| `--muted` | `#9C9CA9` | `#55555F` | Body copy, labels (>= 4.5:1 both themes) |
| `--accent` | `#7C5CFF` | `#5B3FE8` | CTAs, eyebrows, highlights |
| `--accent-ink` | `#FFFFFF` | `#FFFFFF` | Type on accent fills |
| `--accent-08` | `rgba(124,92,255,.08)` | `rgba(91,63,232,.06)` | Icon wells, popular plan fill |
| `--accent-18` | `rgba(124,92,255,.18)` | `rgba(91,63,232,.14)` | Reserved tint step |
| `--accent-40` | `rgba(124,92,255,.42)` | `rgba(91,63,232,.38)` | Accent borders, hover rings |
| `--glow` | `rgba(124,92,255,.35)` | `rgba(91,63,232,.22)` | Gradient glows, lift shadows |
| `--nav` | `rgba(8,8,10,.72)` | `rgba(251,251,252,.75)` | Scrolled nav + back-to-top fill |
| `--shadow` | `0 24px 60px -30px rgba(0,0,0,.9)` | `0 20px 50px -28px rgba(16,16,30,.28)` | Panel shadow |

**Non-variable accents.** The logo mark and testimonial avatars use fixed
gradients, exposed as variables so components stay hex-free:
`--mark-from`/`--mark-to` (`var(--accent)` to `#22D3EE`), avatars
`#7C5CFF -> #4F2ED9`, `#22D3EE -> #0E7490`, `#F472B6 -> #9D2E6E`. The hero's
secondary glow is `--glow-2`, cyan `rgba(34,211,238,.22)`.

**Fonts.** Space Grotesk (headings, 400-700), Manrope (body, 400-700), both via
`next/font/google`.

---

## Copy

### Brand

- **Wordmark:** NOVA
- **Tagline:** Build Better. Work Smarter.
- **Footer blurb:** The AI productivity platform for teams who would rather ship than coordinate.
- **Copyright:** (c) 2026 NOVA Labs, Inc. All rights reserved.

### Nav — `src/data/navLinks.ts`

Features - Product - Pricing - FAQ. CTA: **Start free**

### Hero

- **Badge:** NOVA 3.0 is live
- **H1:** Build Better. / Work Smarter.
- **Lead:** NOVA is the AI productivity platform where your team plans projects, automates the repetitive work and collaborates — all in one place.
- **CTAs:** Start free — no card / Watch the tour
- **Footnote:** Free for 14 days - Set up in under 5 minutes

### Trusted by — `src/data/trustedBy.ts`

Label: Trusted by 4,000+ product teams.
Logos: HALCYON - NORTHWIND - CADENCE - MERIDIAN - AXIOM - LUMEN

### Features — `src/data/features.ts`

Eyebrow **Features** — H2 *Everything the work needs. Nothing it doesn't.* —
Sub *Six primitives that replace the sprawl of tabs your team lives in today.*

| Title | Description |
| --- | --- |
| Unified projects | Roadmaps, sprints and docs in one graph, so nothing lives in a stale spreadsheet. |
| Agentic automations | Describe a rule in plain English. NOVA builds it, runs it and flags the edge cases. |
| Live collaboration | Comments, decisions and approvals attached to the work instead of a thread nobody reads. |
| Signal, not dashboards | Velocity, risk and load calculated from real activity — refreshed the moment work moves. |
| Instant recall | Ask across every task, doc and thread. Answers come back with their sources attached. |
| Enterprise ready | SSO, SCIM, audit trails and regional data residency available on every workspace. |

### Product — `src/data/product.ts`

**Block 1** — eyebrow *One workspace*, H2 *Plans that stay honest about the work*.
Body: Roadmaps, sprints and docs share one source of truth. When a task slips,
the timeline, the owner and the weekly update all know about it.
Points: Dependencies that update themselves when dates move - Docs that stay
linked to the tickets they describe - Weekly updates drafted from real activity.
Visual: *Sprint 24 - velocity*, +18% — 128 Issues closed / 4.1d Median cycle /
3 Blockers open.

**Block 2** — eyebrow *Automations*, H2 *Hand the busywork to an agent that reads context*.
Body: Describe the rule in plain language. NOVA drafts the workflow, watches it
run and tells you when something needs a human.
Points: Plain-language rules, editable at every step - Dry runs before anything
touches production - Escalation to a human when confidence drops.
Flow: New bug reported in #support (Trigger) -> Classify severity and area (AI)
-> Assign owner from rotation (Auto) -> Post summary to the sprint (Live).

### How it works — `src/data/steps.ts`

Eyebrow **How it works** — H2 *Three steps to a calmer week*

| # | Title | Description |
| --- | --- | --- |
| 01 | Connect your stack | Link the repos, calendars and tools you already use. NOVA maps the work in minutes, not quarters. |
| 02 | Describe the workflow | Write the rule the way you'd explain it to a teammate. Review the draft, then switch it on. |
| 03 | Ship on a calmer cadence | Standups write themselves, blockers surface early and the roadmap stays honest. |

### Stats — `src/data/stats.ts`

4,200+ Product teams building on NOVA - 3.4M Hours of busywork automated -
99.98% Platform uptime, trailing year - 42% Faster average cycle time

### Solutions — `src/data/solutions.ts`

Eyebrow **Use cases** — H2 *Built for the way each team works*

| Tab | Headline | Metrics |
| --- | --- | --- |
| Engineering | Sprints that survive the second week | -38% planning time - 2.1x issues closed |
| Marketing | Campaigns that never lose a deadline | 4 days faster prep - 92% on-time delivery |
| Design | Critique attached to the work | -51% handoff clarifications - 3.5k decisions logged |
| Operations | Process that runs without a chaser | 6 hrs saved per operator - 100% requests owned |

### Testimonials — `src/data/testimonials.ts`

H2 *Teams stopped managing the tool*

- Priya Raghunathan, VP Engineering, Halcyon — on replacing four tools and the calmest sprint in a year.
- Marcus Bell, Head of Marketing, Northwind — on automations that read context and self-assigning checklists.
- Sofia Lindqvist, Design Director, Cadence — on every design decision having a traceable home.

### Pricing — `src/data/pricing.ts`

Eyebrow **Pricing** — H2 *Simple plans, priced per seat* — toggle Monthly /
Annual, **Save 20%**

| Plan | Monthly | Annual | CTA |
| --- | --- | --- | --- |
| Starter | $0 free forever | $0 | Create workspace |
| **Pro** (most popular) | $18/seat | $14/seat | Start 14-day trial |
| Enterprise | $42/seat | $34/seat | Talk to sales |

### FAQ — `src/data/faqs.ts`

Eyebrow **FAQ** — H2 *Questions, answered* — Support line: hello@nova.app, a
human replies within a day. Six questions: setup time - no-code automations -
migration - data handling - trial end - annual discount.

### Final CTA

H2 *Start building better this week*.
Sub: Get the monthly NOVA dispatch — one email, real workflows from real teams.
Or jump straight into a free workspace.
Input `you@company.com` — button **Get started**.
Success: You're on the list — check your inbox for a confirmation.
Error: Enter a valid work email to continue.

### Footer — `src/data/footerLinks.ts`

Columns: **Product** (Features, Automations, Integrations, Changelog) -
**Solutions** (Engineering, Marketing, Design, Operations) - **Company** (About,
Careers, Customers, Press kit) - **Resources** (Docs, Help centre, Security,
Status). Socials: X - LinkedIn - GitHub - YouTube
