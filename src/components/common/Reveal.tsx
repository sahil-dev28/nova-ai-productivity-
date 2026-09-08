"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const FAILSAFE_MS = 3500;

const pending = new Set<() => void>();
let failsafe: ReturnType<typeof setTimeout> | null = null;

function register(reveal: () => void) {
  pending.add(reveal);

  failsafe ??= setTimeout(() => {
    for (const run of pending) run();
    pending.clear();
    failsafe = null;
  }, FAILSAFE_MS);

  return () => {
    pending.delete(reveal);
  };
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  stagger?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Reveal({
  children,
  delay = 0,
  stagger = false,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => setRevealed(true);
    const unregister = register(show);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        show();
        observer.unobserve(entry.target);
      },
      { threshold: 0.08, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      unregister();
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={stagger ? "group" : ""}
      data-revealed={revealed}
      className={className}
      style={{ ...style, "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
