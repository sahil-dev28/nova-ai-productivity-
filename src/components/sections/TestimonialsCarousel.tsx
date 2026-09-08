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
      stopOnInteraction: true,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start", duration: 30 },
    [autoplay],
  );

  const shellRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState(0);

  const setViewport = useCallback(
    (node: HTMLDivElement | null) => {
      viewportRef.current = node;
      emblaRef(node);
    },
    [emblaRef],
  );

  const reading = useRef(false);
  const keyboardFocus = useRef(false);
  const onScreen = useRef(true);

  const sync = useCallback(() => {
    const plugin = emblaApi?.plugins().autoplay;
    if (!plugin) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced || reading.current || keyboardFocus.current || !onScreen.current) {
      plugin.stop();
    } else {
      plugin.play();
    }
  }, [emblaApi]);

  const goPrev = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollPrev()) emblaApi.scrollPrev();
    else emblaApi.scrollTo(emblaApi.scrollSnapList().length - 1);
    sync();
  }, [emblaApi, sync]);

  const goNext = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) emblaApi.scrollNext();
    else emblaApi.scrollTo(0);
    sync();
  }, [emblaApi, sync]);

  useEffect(() => {
    const shell = shellRef.current;
    const viewport = viewportRef.current;
    if (!emblaApi || !shell || !viewport) return;

    const readSelected = () => setSelected(emblaApi.selectedScrollSnap());

    readSelected();

    emblaApi
      .on("select", readSelected)
      .on("reInit", readSelected)
      .on("pointerUp", sync);

    const startReading = () => {
      reading.current = true;
      sync();
    };

    const stopReading = () => {
      reading.current = false;
      sync();
    };

    viewport.addEventListener("mouseenter", startReading);
    viewport.addEventListener("mouseleave", stopReading);

    const focusIn = (event: FocusEvent) => {
      const target = event.target;
      if (target instanceof Element && target.matches(":focus-visible")) {
        keyboardFocus.current = true;
        sync();
      }
    };

    const focusOut = () => {
      keyboardFocus.current = false;
      sync();
    };

    shell.addEventListener("focusin", focusIn);
    shell.addEventListener("focusout", focusOut);

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
        .off("pointerUp", sync);

      viewport.removeEventListener("mouseenter", startReading);
      viewport.removeEventListener("mouseleave", stopReading);

      shell.removeEventListener("focusin", focusIn);
      shell.removeEventListener("focusout", focusOut);

      motion.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, [emblaApi, sync]);

  return (
    <div
      ref={shellRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
    >
      <div
        ref={setViewport}
        className="cursor-grab overflow-hidden active:cursor-grabbing"
      >
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
