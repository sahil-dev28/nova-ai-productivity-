"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/common/Container";
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-nav transition-colors duration-200",
        solid &&
          "border-b border-line bg-nav backdrop-blur-[16px] backdrop-saturate-[160%]",
      )}
    >
      <Container className="flex h-full items-center justify-between gap-6">
        <a
          href="#main"
          aria-label="NOVA, back to top"
          className="inline-flex min-h-11 items-center"
        >
          <Logo />
        </a>

        <nav aria-label="Primary" className="max-navbar:hidden">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeId === link.id ? "page" : undefined}
                  className="flex min-h-11 items-center rounded-control px-3.5 text-[15px] font-medium text-muted transition-colors duration-200 hover:text-ink aria-[current=page]:bg-surface-2 aria-[current=page]:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Button
            asChild
            className="h-11 rounded-control px-5 text-[15px] font-semibold transition-transform duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_var(--glow)] max-navbar:hidden"
          >
            <a href={navCta.href}>{navCta.label}</a>
          </Button>
          <MobileMenu activeId={activeId} />
        </div>
      </Container>
    </header>
  );
}
