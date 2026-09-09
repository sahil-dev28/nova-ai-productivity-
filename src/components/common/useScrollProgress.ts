"use client";

import { useEffect, useState } from "react";

export function useScrollProgress(span = 0.45) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;

    const update = () => {
      frame = 0;
      if (reduced) {
        setProgress(1);
        return;
      }
      const distance = window.innerHeight * span;
      setProgress(Math.min(Math.max(window.scrollY / distance, 0), 1));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);

    if (!reduced) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [span]);

  return progress;
}

export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
export const mix = (from: number, to: number, t: number) =>
  from + (to - from) * t;
