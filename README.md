# NOVA — AI Productivity Platform

A landing page for a made-up company called NOVA. It is a single page with
thirteen sections, works on phones and desktops, and has a light and a dark
theme.

**Live demo:** _add your Vercel URL here_
**Repo:** https://github.com/sahil-dev28/nova-ai-productivity-

---

## What I used

| Tool | Why |
| --- | --- |
| Next.js 16 + React 19 | App Router, and the whole page builds to static HTML |
| TypeScript | Catches my mistakes before the browser does |
| Tailwind CSS v4 | Config lives in CSS now, so tokens and utilities sit in one file |
| shadcn/ui + Radix | Accessible button, dialog, accordion, tabs, switch, sheet |
| react-hook-form + zod | Form state and validation without writing it myself |
| Embla Carousel | The testimonial slider |
| next-themes | Light and dark switching |
| react-countup | The statistics counters |
| lucide-react | Icons |

No animation library. I explain why further down.

## Running it

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm lint
```

If you deploy it somewhere, set `NEXT_PUBLIC_SITE_URL` to that address. The
sitemap, robots file and social card need a full URL to work. On Vercel it
picks up the deployment URL on its own.

## Sections

Nav, Hero, Trusted By, Features, Product, How It Works, Statistics,
Solutions, Testimonials, Pricing, FAQ, Final CTA, Footer.

Each one is its own file in `src/components/sections`, in page order.

## What works on the page

Required:

- Responsive navigation with a hamburger menu on mobile
- Smooth scrolling to sections, and the nav link for the section you are in
  gets highlighted
- FAQ accordion
- Hover effects on buttons and cards
- All navigation links work

Extra:

- Light and dark mode
- Statistics that count up when you scroll to them
- Scroll animations
- Testimonial carousel
- Monthly / annual pricing toggle
- A sign-up modal on the Get started button
- Newsletter with email validation in the footer
- Back-to-top button

## How the files are organised

```
src/
  app/
    globals.css     all the colours, spacing, type sizes and keyframes
    layout.tsx      fonts, theme provider, skip link
    page.tsx        just lists the sections in order
  components/
    common/         small pieces used everywhere (Container, Section,
                    SectionHeading, Reveal, HalftoneWave, Logo...)
    layout/         Nav, MobileMenu, Footer, NewsletterForm, BackToTop
    sections/       one file per section
    ui/             shadcn components
  data/             the text and lists for each section
  lib/              small helpers
```

All the repeated content — features, plans, FAQs, testimonials, footer
links — lives in `src/data` as typed arrays. The section files loop over
them. I did it this way so changing a price or adding a feature means
editing one line of data instead of hunting through JSX.

## Design decisions

### Colours

I started with purple on a near-black background with soft glows behind the
cards. Then I looked at it properly and realised that is what almost every AI
product page looks like right now. It was not wrong, it was just forgettable.

So I moved to a rose pink. It is warmer, fewer sites use it, and it still
suits a software product. Everything else is neutral. One accent colour used
in a few places does more than five colours everywhere.

Light mode uses a darker rose (`#c9184a`) instead of the same pink. The
bright pink looks fine on a dark background but it is too light on white and
fails contrast. Two different values, one for each theme.

Every colour is a CSS variable. `:root` holds the light values and `.dark`
overrides them. The theme toggle swaps one class on `<html>` and everything
follows. No component has a hex code in it.

### Fonts

Bricolage Grotesque for headings, Manrope for body text.

I picked Bricolage because it has some personality at large sizes. A lot of
sites use Inter for everything, which is safe but says nothing.

Numbers in the statistics and pricing use tabular figures. In Bricolage the
digit `1` is much narrower than the others, so without this the counters
visibly wobble while they count up and the three prices do not line up. It
is a small thing that looks broken if you skip it.

### The navbar

At first the nav had the logo on the left, the links in the middle and a
button on the right. That is the most common layout on the web and it looked
like a template.

Now the links sit right next to the logo and the right side has the theme
toggle, a Sign in link and a Start free button. It reads more like a product
than a brochure.

When you scroll, the bar shrinks. It starts full width and see-through over
the hero, then it narrows into a smaller rounded bar with a background and a
blur once the page moves. The width, height, corner radius and colour all
animate together. It keeps the top of the page open and stops the bar from
sitting on top of the text underneath it once you start scrolling.

### The wave in the hero

The dotted wave behind the headline is drawn in code, not an image file. It
is a React component that works out where each dot goes and renders them as
SVG circles.

I did it that way because the dots need to change size across the band —
bigger along the middle of the wave, fading to nothing at the edges. A CSS
background can repeat a dot but it can only draw one size, so it would have
looked flat.

Two details took a while to get right. The rows follow the curve rather than
sitting in straight lines, so the band keeps the same thickness as it bends.
And the columns are spaced by distance along the curve, not by x position,
otherwise the dots bunch up on the steep parts.

There is a hole masked out behind the headline. The text passes contrast
either way, but reading words over a field of moving dots is harder than
reading them over a flat colour.

### Testimonials

This started as three cards side by side. Three quotes competing for
attention meant none of them got read.

It is one card now, in a split layout with the heading on the left. It slides
to the next quote every five seconds. When it reaches the last one it travels
back across all of them to the first, so you can see it going back instead of
it just jumping.

The timer does not stop when you take over. Clicking an arrow or dragging
restarts the countdown instead of killing it, so the carousel keeps going
after you have finished looking. It pauses while you hover over a quote, and
while the section is off screen.

### Animation

I did not use an animation library. Everything is CSS transitions and
keyframes, driven by a few small components:

- `Reveal` — uses IntersectionObserver to fade sections in as they come into
  view. It shares one 3.5 second timer as a backup, so if an observer never
  fires the content still appears instead of staying invisible.
- `Ambient` — pauses background animations when they scroll off screen, so
  the browser is not animating things nobody can see.
- `MotionGate` — adds a class to `<html>` after mount, and only if the user
  has not asked for reduced motion. Entrance animations are opt-in, so with
  JavaScript off or reduced motion on, the page renders finished instead of
  blank.
- `useScrollProgress` — reports how far you have scrolled as a number from 0
  to 1, throttled to one frame. The hero card uses it to rise as you scroll.

I chose this over adding a library for two reasons. It keeps the bundle
smaller, and I can explain and change every line of it. A library would have
been faster to write and harder to defend.

## Problems I ran into

**Type sizes were silently disappearing.** Every small caps label on the page
was rendering at 17px instead of 11.5px, with no letter spacing and the wrong
weight. It took me a while to find because the class was right there in the
JSX. The `cn` helper is tailwind-merge underneath, which groups classes by
what CSS property they set. My type scale uses names like `text-eyebrow`, and
Tailwind treats anything starting with `text-` as a colour. So when a class
list had `text-eyebrow` and `text-accent` together, it decided they were both
colours, kept the last one and dropped the size. Fixed by telling the merger
those names are font sizes.

**The page jumped sideways when the modal opened.** Radix stops the page
scrolling by hiding overflow on the body, which makes the scrollbar
disappear, which makes the page 15px wider. The navbar is centred and fixed,
so it slid 7px to the right and back again. I fixed it with
`scrollbar-gutter: stable`, which keeps the scrollbar's space reserved. Then
the content started shifting the other way, because Radix already adds a
margin to compensate and now the gap was being counted twice. So I had to
turn that margin off and let the gutter handle it.

**The navbar sat on top of the text.** When I made the bar transparent it
looked good at the top of the page and unreadable everywhere else, with the
logo overlapping paragraphs. Giving it a background and a blur once you
scroll fixed it.

**The pricing cards were uneven.** The grid was set to `items-start`, so each
card sized itself to its own content. Starter and Enterprise only matched
while their feature lists were the same length, and Enterprise has one more
item. Switching to `items-stretch` makes the row set one height for all
three. The Pro card then hangs out of that row with a negative margin so it
is taller on purpose.

**Light mode flashed dark on load.** I set light as the default in the theme
provider, but the CSS still had the dark values on `:root`. So the first
paint was dark and it corrected itself after the JavaScript ran. I swapped
the two blocks around, so `:root` is light and `.dark` overrides it. Now the
stylesheet and the app agree on what the default is.

## Accessibility

- One `h1`, and heading levels do not skip
- Skip link is the first thing you can tab to
- Visible focus ring on everything interactive
- 44px touch targets on controls
- `aria-expanded` on the accordion and hamburger, `aria-current` on the
  active nav link
- The modal traps focus, closes on Escape, and puts focus back on the button
  that opened it
- Form errors are linked to their input with `aria-describedby` and announced
  with `role="status"`
- Decorative things like the wave and the glows are `aria-hidden`
- `pnpm lint` runs the full `jsx-a11y` rule set

## Screenshots

_Add screenshots here — hero, features, pricing, and one on mobile._

## AI tools used

I used Claude Code while building this. Mostly for working through bugs,
checking my reasoning on layout and accessibility, and writing repetitive
parts faster.

The design decisions are mine — the colours, the navbar behaviour, the wave,
the testimonial layout, and how the sections are structured. I reviewed
everything that went in and I can explain any of it.
