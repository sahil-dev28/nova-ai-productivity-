"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-control border border-line text-muted transition-colors duration-200 hover:border-accent-40 hover:text-ink",
        className,
      )}
    >
      <SunIcon aria-hidden="true" className="size-[18px] light:hidden" />
      <MoonIcon aria-hidden="true" className="hidden size-[18px] light:block" />
      <span className="sr-only light:hidden">Switch to light theme</span>
      <span className="sr-only hidden light:inline">Switch to dark theme</span>
    </button>
  );
}
