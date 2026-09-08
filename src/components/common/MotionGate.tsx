"use client";

import { useEffect } from "react";

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
