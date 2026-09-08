# NOVA — Landing Page

A dark-first landing page for NOVA, an AI productivity platform. Built from
`docs/layout.md` (structure, spacing, type scale, behaviour) and
`docs/tokens-and-copy.md` (palette and every string on the page).

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui

## Running it

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm lint
```

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin so canonical URLs, Open
Graph tags, `robots.txt` and `sitemap.xml` resolve absolutely. On Vercel it
falls back to `VERCEL_PROJECT_PRODUCTION_URL`, and to `http://localhost:3000`
otherwise.

## How it is put together

```
src/
  app/
    globals.css        the whole token layer — palette, .light overrides,
                       canvas, rhythm, type scale, breakpoints, motion
    layout.tsx         fonts, theme provider, skip link
    page.tsx           composes the eleven sections, nothing else
  components/
    common/            Container, Section, Eyebrow, SectionHeading,
                       Reveal, ThemeToggle, Logo, StatCounter, SocialIcon
    layout/            Nav, MobileMenu, Footer, BackToTop
    sections/          one file per section, in page order
    ui/                shadcn primitives, restyled through tokens only
  data/                typed content arrays, one per section
docs/                  the design spec and the token/copy reference
```

Every repeated list — features, stats, tabs, testimonials, plans, FAQs,
footer links, logos — lives in `src/data` as a typed array with an exported
type. Sections map over them; there are no content lists in JSX.

### Colour

Every colour is a CSS variable. Dark sits on `:root` so it paints before any
JS runs; `.light` on `<html>` redefines the same names. The theme toggle
flips that one class and nothing else in the page has to know. shadcn's
semantic tokens are remapped onto the NOVA palette in the same `@theme`
block, so the primitives inherit the design instead of being forked. No
component contains a raw hex value.

### Responsive

Grids use `auto-fit` + `minmax`, so reflow happens at content-driven widths
rather than at breakpoints. Tailwind's default breakpoints are cleared, which
means the compiled stylesheet can only ever contain the three the spec
allows — 1000px, 920px and 760px — plus `prefers-reduced-motion`. Everything
else is `clamp()`.

### Motion, and what happens without it

The resting style is always the visible state. Entrance animations are
opt-in: nothing hides itself until a `.nova-in` class lands on `<html>` after
mount, and every reveal shares one 3.5s failsafe that forces the finished
state if an observer never fires. Stat counters render their final value on
the server and only count once the band is 40% in view.

So a disabled-JS load, a print capture, a crashed bundle or
`prefers-reduced-motion` all render the page complete rather than blank.

### Metadata

`src/lib/site.ts` holds the one origin every metadata route reads. From it:
`metadataBase` and a canonical URL, Open Graph and Twitter card tags, a
`SoftwareApplication` + `Organization` + `WebSite` JSON-LD graph, a
`theme-color` per colour scheme, `robots.txt`, `sitemap.xml` and a web
manifest. The social card at `opengraph-image.tsx` and the touch icon at
`apple-icon.tsx` are generated at build time with `next/og`, so there is no
binary asset to keep in sync with the palette.

### Accessibility

One `h1`, no heading level skips, skip link as the first focusable element,
a 2px accent focus ring at 3px offset on everything interactive, 44px touch
targets on controls and 24px on footer links, `aria-expanded` on the
accordion and hamburger, `aria-current` on the active nav link,
`role="dialog"` + `aria-modal` on the mobile panel, `role="status"` on the
newsletter response, and a labelled focusable region around the testimonial
carousel so its off-screen cards are reachable without a pointer. Radix adds
`aria-controls` once the panel it points at is mounted; closed accordions and
the closed mobile sheet omit it rather than reference a missing id.
Decorative glows, gradients and icons are `aria-hidden`. `pnpm lint` runs the
full `jsx-a11y` recommended set, not just the subset `eslint-config-next`
enables.

## Notes on the content

Footer entries carry an optional `href`. The ones that map to a real section
link to it; the rest render as plain text rather than as anchors pointing at
`#`, so nothing on the page navigates nowhere. Give a `Social` or
`FooterLink` a real URL in `src/data/footerLinks.ts` and it becomes a link
again with no component change.

The palette, structure and all headline copy come from the design source.
Where the design file named a topic but not the words — the solutions tab
bodies and checklists, the plan feature lists, the FAQ question and answer
wording, the testimonial quotes, and the illustrative bar values in the
sprint chart — those were written for this build.
