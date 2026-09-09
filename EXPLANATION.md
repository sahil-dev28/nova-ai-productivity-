# Short explanation

Notes on how I built the NOVA landing page and why I made the choices I made.
The README covers what it is and how to run it.

---

## Design decisions

### Colours

I started with purple on a near-black background, with soft glows behind the
cards. It worked, but it did not feel like a real company site. The glows made
everything look slightly blurry and unfinished, and the whole page was heavy
and a bit gloomy. Nothing about it said which company it belonged to.

So I moved to a rose pink. It is warmer, it gives the brand something of its
own, and it still suits a software product rather than looking playful. I
dropped the glows behind the cards at the same time and used thin borders
instead, which made the edges sharp and the layout easier to read.

Everything else stays neutral. One accent colour used in a few places does
more than five colours used everywhere.

Light mode uses a darker rose (`#c9184a`) rather than the same pink. The
bright pink reads fine on a dark background but it is too light on white and
fails contrast. So there are two values, one per theme.

Every colour is a CSS variable. `:root` holds the light values and `.dark`
overrides them. The theme toggle swaps one class on `<html>` and everything
follows from that. No component contains a hex code.

### Fonts

Bricolage Grotesque for headings, Manrope for body text.

I picked Bricolage because it has some personality at large sizes. A lot of
sites use Inter for everything, which is safe but says nothing.

Numbers in the statistics and pricing use tabular figures. In Bricolage the
digit `1` is much narrower than the others — "111" measures about 44px where
"000" measures about 94px at the same size. Without tabular figures the
counters visibly wobble as they count up and the three prices do not line up
with each other.

### The navbar

At first it was the logo on the left, links in the middle, button on the
right. On a wide screen that left two big empty gaps, and the logo sat on its
own with nothing near it, so the bar felt stretched and a bit empty.

Now the links sit right next to the logo, and the right side has the theme
toggle, a Sign in link and a Start free button. Grouping them that way gives
the bar two solid ends instead of three floating pieces, and it reads more
like a product than a brochure.

It also shrinks as you scroll. At the top it is full width and transparent
over the hero. Once the page moves it narrows into a smaller rounded bar with
a background and a blur. The width, height, corner radius, background and
border all animate together. That keeps the top of the page open, and stops
the bar from sitting on top of the text once you start scrolling.

### The wave in the hero

The dotted wave behind the headline is drawn in code, not an image. It is a
component that works out where every dot goes and renders them as SVG circles.

I did it that way because the dots need to change size across the band —
larger along the middle of the wave, fading to nothing at the edges. A CSS
background can repeat a dot but it can only draw one size, so it would have
looked flat.

Two parts of it took a while. The rows follow the curve instead of sitting in
straight lines, so the band keeps the same thickness as it bends — each row is
offset along the curve's normal rather than straight down. And the columns are
spaced by distance along the curve rather than by x position, because
otherwise the dots bunch together on the steep sections.

There is a hole masked out behind the headline. The text passes contrast
either way, but reading words over a field of dots is harder than reading them
over a flat colour.

### Testimonials

This started as three cards side by side. Three quotes competing for attention
meant none of them got read properly.

It is one card now, in a split layout with the heading on the left. It moves
to the next quote every five seconds. When it reaches the last one it travels
back across all of them to the first, so you see it going back rather than
jumping.

The timer does not stop when you take over. Clicking an arrow or dragging
restarts the countdown instead of ending it, so it keeps going after you have
finished looking. It pauses while you hover a quote, and while the section is
off screen.

---

## Technology choices

**Next.js + React.** The brief said React was preferred. Next gives routing,
the metadata and sitemap routes, image and font handling, and this page builds
to static HTML so there is no server needed to host it.

**TypeScript.** All the section content is typed, so if I add a testimonial
without an avatar or misspell a plan field, it fails at build instead of
rendering wrong.

**Tailwind v4.** The config lives in CSS now, which means the design tokens
and the utilities that use them sit in the same file. The whole palette, type
scale and spacing system is one block at the top of `globals.css`.

**shadcn/ui + Radix.** I did not want to write a dialog, accordion or sheet
from scratch and get the keyboard handling wrong. Radix gives focus traps,
Escape handling and the right ARIA. shadcn gives styled versions I can edit,
because the components live in my repo rather than in `node_modules`.

**react-hook-form + zod.** Two forms need validation. zod describes the shape
once and react-hook-form wires it to the inputs and the error messages.

**Embla.** For the testimonial carousel. Small, handles drag and touch, and
lets me drive it from my own buttons.

**No animation library.** This was the choice I thought about most. Adding
Motion or GSAP would have been quicker to write. I did not, for two reasons:
the bundle stays smaller, and I can explain and change every line of the
motion myself. A library would have been faster to build and harder to defend.

---

## Component structure

```
src/
  app/
    globals.css     colours, spacing, type sizes, breakpoints, keyframes
    layout.tsx      fonts, theme provider, skip link
    page.tsx        lists the sections in order, nothing else
  components/
    common/         reusable pieces: Container, Section, SectionHeading,
                    Eyebrow, Reveal, Ambient, MotionGate, HalftoneWave,
                    Logo, StatCounter, ThemeToggle
    layout/         Nav, MobileMenu, Footer, NewsletterForm, BackToTop
    sections/       one file per section, named after the section
    ui/             shadcn components
  data/             the content for each section, as typed arrays
  lib/              small helpers
```

**Content is separate from layout.** Every repeated list — features, plans,
FAQs, testimonials, footer links, logos — lives in `src/data` as a typed array
with an exported type. The section components loop over them. Changing a price
or adding a feature is a one-line edit in a data file, not a hunt through JSX.

**Sections share primitives.** `Section` handles the vertical rhythm and
background tier. `SectionHeading` renders the number, the label, the rule and
the heading, so all five numbered sections look the same without repeating the
markup. `Container` holds the max width and gutter.

**Motion is four small components.** This is what replaced an animation
library:

- `Reveal` — uses IntersectionObserver to fade sections in as they enter the
  viewport. All instances share one 3.5 second failsafe timer, so if an
  observer never fires, the content appears anyway instead of staying
  invisible.
- `Ambient` — pauses background animations when they scroll off screen, so the
  browser is not animating things nobody can see.
- `MotionGate` — adds a class to `<html>` after mount, and only if the user has
  not asked for reduced motion. Entrance animations are opt-in, which means
  with JavaScript off, or reduced motion on, the page renders finished rather
  than blank.
- `useScrollProgress` — reports scroll position as a number from 0 to 1,
  throttled to one animation frame. The hero card uses it to rise as you
  scroll.

**Accessibility is built in rather than added after.** One `h1` and no skipped
heading levels, a skip link as the first focusable element, visible focus
rings, 44px touch targets, `aria-expanded` on the accordion and hamburger,
`aria-current` on the active nav link, and form errors tied to their inputs
with `aria-describedby` and announced with `role="status"`. Decorative things
like the wave and the glows are `aria-hidden`. `pnpm lint` runs the full
`jsx-a11y` rule set rather than the smaller default.

---

## Challenges faced

**Type sizes were silently disappearing.** Every small caps label was
rendering at 17px instead of 11.5px, with the wrong weight and no letter
spacing. It took a while to find because the class was right there in the JSX.
The `cn` helper is tailwind-merge underneath, which groups classes by the CSS
property they set. My type scale uses names like `text-eyebrow`, and Tailwind
treats anything starting with `text-` as a colour. So when a class list had
`text-eyebrow` and `text-accent` together, it decided both were colours, kept
the last one and dropped the size. Fixed by telling the merger that those
names are font sizes.

**The page jumped sideways when the modal opened.** Radix stops the background
scrolling by hiding overflow on the body. That removes the scrollbar, which
makes the page 15px wider. The navbar is centred and fixed, so it slid 7px
right and back again. I fixed it with `scrollbar-gutter: stable`, which keeps
the scrollbar's space reserved. Then the content started shifting the other
way, because Radix already adds a margin to compensate and the space was now
being counted twice. So I turned that margin off and let the gutter handle it.
Fixing the first thing created the second one, which was a good lesson in
checking the whole page after a fix rather than just the part I was looking
at.

**The navbar sat on top of the text.** Making the bar transparent looked good
at the top of the page and unreadable everywhere else — the logo overlapped
paragraphs as you scrolled past. Giving it a background and a blur once you
start scrolling fixed it.

**The pricing cards were uneven.** The grid was set to `items-start`, so each
card sized itself to its own content. Starter and Enterprise only matched
while their feature lists happened to be the same length, and Enterprise has
one more item. `items-stretch` makes the row set one height for all three. The
Pro card then hangs out of that row with a negative margin, so it is taller on
purpose rather than by accident.

**Light mode flashed dark on load.** I set light as the default in the theme
provider, but the CSS still had the dark values on `:root`. So the first paint
was dark and it corrected once JavaScript ran. I swapped the blocks around, so
`:root` is light and `.dark` overrides it. Now the stylesheet and the app agree
on what the default is.

**Text was hard to read over the wave.** The contrast was fine on paper — six
to one — but the words sat on top of live dots, and the background changed
under every letter. The mask I had cut out only covered the headline, not the
paragraph below it. Widening it fixed the reading, and it was a reminder that a
contrast number does not tell you everything.

---

## How AI tools were used

I used Claude Code as an assistant while building this, mainly for debugging,
checking my reasoning on accessibility, and writing repetitive code faster.
Most of the problems listed above were found by measuring the page — computed
styles, element positions before and after an interaction — which is slow by
hand.

The decisions are mine. The brand and colours, the fonts, the layout of each
section, how the navbar behaves, the wave in the hero, the testimonial
carousel, and the choice not to use an animation library were all mine to
make, and I changed direction several times before settling.

I read everything that went into the repo. The two things I did not understand
at first were the tailwind-merge behaviour and the scroll-lock margin, so I
worked through both until I could explain them — which is why they are written
up above rather than quietly fixed.
