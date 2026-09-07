"use client";

import { useEffect } from "react";

/**
 * Entrance animations are opt-in. Nothing is hidden until this lands
 * `.nova-in` on <html> after mount, which means a disabled-JS load, a
 * print capture or a crashed bundle all still render the page complete.
 */
export function MotionGate() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) return;

    document.documentElement.classList.add("nova-in");

    return () => document.documentElement.classList.remove("nova-in");
  }, []);

  return null;
}
