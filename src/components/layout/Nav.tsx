"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import { navCta, navLinks } from "@/data/navLinks";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const SOLID_AFTER = 12;
const SPY_OFFSET = 140;

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      setSolid(window.scrollY > SOLID_AFTER);

      const current = sections.reduce<string | null>((found, section) => {
        return section.getBoundingClientRect().top <= SPY_OFFSET
          ? section.id
          : found;
      }, null);

      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex items-center gap-10 transition-[max-width,height,margin,border-radius,background-color,border-color] duration-500 ease-out-soft",
          solid
            ? "mt-3 h-16 max-w-[1040px] rounded-panel border border-line bg-nav px-6 backdrop-blur-[16px] backdrop-saturate-[160%]"
            : "mt-0 h-nav max-w-content rounded-none border border-transparent px-gutter",
        )}
      >
        <a
          href="#main"
          aria-label="NOVA, back to top"
          className="inline-flex min-h-11 shrink-0 items-center"
        >
          <Logo />
        </a>

        <nav aria-label="Primary" className="max-navbar:hidden">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeId === link.id ? "page" : undefined}
                  className="flex min-h-11 items-center text-[15px] font-medium text-muted transition-colors duration-200 hover:text-ink aria-[current=page]:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-5">
          <ThemeToggle className="size-10 rounded-control border-0 hover:border-0 hover:bg-surface-2" />

          <a
            href="#cta"
            className="text-[15px] font-medium text-ink transition-colors duration-200 hover:text-accent max-navbar:hidden"
          >
            Sign in
          </a>

          <Button
            asChild
            className="h-11 rounded-control px-5 text-[15px] font-semibold transition-transform duration-300 ease-out-soft hover:-translate-y-0.5 max-navbar:hidden"
          >
            <a href={navCta.href}>{navCta.label}</a>
          </Button>

          <MobileMenu activeId={activeId} />
        </div>
      </div>
    </header>
  );
}
