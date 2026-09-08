"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/data/testimonials";

const AUTOPLAY_DELAY = 5000;

const AVATARS = {
  one: "bg-[linear-gradient(140deg,var(--avatar-1-from),var(--avatar-1-to))]",
  two: "bg-[linear-gradient(140deg,var(--avatar-2-from),var(--avatar-2-to))]",
  three:
    "bg-[linear-gradient(140deg,var(--avatar-3-from),var(--avatar-3-to))]",
  four: "bg-[linear-gradient(140deg,var(--avatar-4-from),var(--avatar-4-to))]",
} as const;

const CONTROL =
  "inline-flex h-11 items-center justify-center px-2 text-muted transition-colors duration-300 ease-out-soft hover:text-ink";

function LongArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 12"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M1 6h53" />
      <path d="M48.5 1 54 6l-5.5 5" />
    </svg>
  );
}

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [autoplay] = useState(() =>
    Autoplay({
      delay: AUTOPLAY_DELAY,
      playOnInit: false,
      // Hover, focus and visibility are handled below so that nothing resumes
      // playback behind our back. stopOnInteraction stays on for one reason:
      // with it off the plugin binds its own pointerUp handler that restarts
      // autoplay after every drag, which would undo the halt.
      stopOnInteraction: true,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  );

  // Deliberately not looping. Without loop the reset off the last testimonial
  // travels back across every card that was already shown rather than
  // seam-jumping to the first, and because that rewind covers the whole track
  // in one scroll it reads as a quick sweep right. Autoplay does it for us:
  // the plugin falls back to scrollTo(0) once canScrollNext goes false.
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start", duration: 30 },
    [autoplay],
  );

  const shellRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);

  // Autoplay runs only when every one of these says it may.
  const halted = useRef(false);
  const engaged = useRef(false);
  const onScreen = useRef(true);

  const sync = useCallback(() => {
    const plugin = emblaApi?.plugins().autoplay;
    if (!plugin) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced || halted.current || engaged.current || !onScreen.current) {
      plugin.stop();
    } else {
      plugin.play();
    }
  }, [emblaApi]);

  const halt = useCallback(() => {
    halted.current = true;
    sync();
  }, [sync]);

  // The arrows wrap the same way the timer does, sweeping across the track
  // instead of dead-ending at either edge.
  const goPrev = useCallback(() => {
    halt();
    if (!emblaApi) return;
    if (emblaApi.canScrollPrev()) emblaApi.scrollPrev();
    else emblaApi.scrollTo(emblaApi.scrollSnapList().length - 1);
  }, [emblaApi, halt]);

  const goNext = useCallback(() => {
    halt();
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) emblaApi.scrollNext();
    else emblaApi.scrollTo(0);
  }, [emblaApi, halt]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!emblaApi || !shell) return;

    const readSelected = () => setSelected(emblaApi.selectedScrollSnap());

    readSelected();

    emblaApi
      .on("select", readSelected)
      .on("reInit", readSelected)
      .on("pointerDown", halt);

    const engage = () => {
      engaged.current = true;
      sync();
    };

    const release = () => {
      engaged.current = false;
      sync();
    };

    shell.addEventListener("mouseenter", engage);
    shell.addEventListener("mouseleave", release);
    shell.addEventListener("focusin", engage);
    shell.addEventListener("focusout", release);

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    motion.addEventListener("change", sync);

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen.current = entry.isIntersecting;
        sync();
      },
      { rootMargin: "15% 0px" },
    );

    observer.observe(shell);
    sync();

    return () => {
      emblaApi
        .off("select", readSelected)
        .off("reInit", readSelected)
        .off("pointerDown", halt);

      shell.removeEventListener("mouseenter", engage);
      shell.removeEventListener("mouseleave", release);
      shell.removeEventListener("focusin", engage);
      shell.removeEventListener("focusout", release);

      motion.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, [emblaApi, halt, sync]);

  return (
    <div
      ref={shellRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
    >
      <div ref={emblaRef} className="overflow-hidden">
        <ul className="-ml-8 flex items-stretch">
          {items.map((person) => (
            <li
              key={person.id}
              className="min-w-0 shrink-0 grow-0 basis-full pl-8"
            >
              <figure className="flex h-full flex-col justify-between rounded-card border border-line bg-surface p-8 split:min-h-[356px] split:p-11">
                <blockquote className="text-lead text-ink">
                  <p>&ldquo;{person.quote}&rdquo;</p>
                </blockquote>

                <figcaption className="mt-10 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className={`inline-flex size-14 shrink-0 items-center justify-center rounded-full font-heading text-[15px] font-bold text-accent-ink ${AVATARS[person.avatar]}`}
                  >
                    {person.initials}
                  </span>

                  <span>
                    <span className="block text-[20px] font-semibold text-ink">
                      {person.name}
                    </span>
                    <span className="mt-1.5 block text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
                      {person.role}, {person.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <p aria-live="off" className="sr-only">
        Testimonial {selected + 1} of {items.length}
      </p>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button type="button" onClick={goPrev} className={CONTROL}>
          <LongArrow className="h-3 w-14 rotate-180" />
          <span className="sr-only">Previous testimonial</span>
        </button>

        <button type="button" onClick={goNext} className={CONTROL}>
          <LongArrow className="h-3 w-14" />
          <span className="sr-only">Next testimonial</span>
        </button>
      </div>
    </div>
  );
}
