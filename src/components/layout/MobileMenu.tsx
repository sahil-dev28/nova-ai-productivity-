"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navCta, navLinks } from "@/data/navLinks";

export function MobileMenu({ activeId }: { activeId: string | null }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="hidden size-11 items-center justify-center rounded-control border border-line text-ink transition-colors duration-200 hover:border-accent-40 max-navbar:inline-flex"
        >
          <MenuIcon aria-hidden="true" className="size-5" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="top"
        showCloseButton
        aria-modal="true"
        className="gap-0 border-b-0 bg-bg px-gutter pt-nav pb-gutter data-[side=top]:h-dvh data-open:slide-in-from-top-2 data-closed:slide-out-to-top-2"
      >
        <SheetTitle className="sr-only">Site menu</SheetTitle>

        <nav aria-label="Mobile" className="flex flex-col gap-2 pt-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              aria-current={activeId === link.id ? "page" : undefined}
              className="flex min-h-11 items-center border-b border-line font-heading text-2xl font-semibold tracking-[-0.02em] text-ink transition-colors duration-200 aria-[current=page]:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex items-center gap-3">
          <ThemeToggle />
          <Button
            asChild
            className="h-11 flex-1 rounded-control px-6 text-[15px] font-semibold"
          >
            <a href={navCta.href} onClick={() => setOpen(false)}>
              {navCta.label}
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
