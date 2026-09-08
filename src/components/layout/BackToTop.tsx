"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SHOW_AFTER = 700;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0 })}
      className={cn(
        "fixed right-6 bottom-6 z-40 inline-flex size-11 items-center justify-center rounded-full border border-line bg-nav text-ink backdrop-blur-[16px] transition-opacity duration-300",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <ArrowUpIcon aria-hidden="true" className="size-[18px]" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
