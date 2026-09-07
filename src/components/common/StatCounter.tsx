"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import type { Stat } from "@/data/stats";

/** Counters run at threshold .4 rather than the .08 used for reveals. */
const THRESHOLD = 0.4;

/**
 * The finished number is what renders on the server and what stays on
 * screen if the observer never fires. Counting is the enhancement, not
 * the source of the value — so no JS, reduced motion or a frozen clock
 * all leave a correct figure on the page.
 */
export function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setCounting(true);
        observer.unobserve(entry.target);
      },
      { threshold: THRESHOLD },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {counting ? (
        <CountUp
          end={stat.value}
          decimals={stat.decimals}
          separator={stat.separator}
          suffix={stat.suffix}
          duration={1.6}
          easingFn={(t, b, c, d) => c * ((t = t / d - 1) * t * t + 1) + b}
        />
      ) : (
        stat.display
      )}
    </span>
  );
}
