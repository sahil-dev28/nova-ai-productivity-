import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

/**
 * Padding is tiered by a section's weight rather than applied flat, so
 * the page reads with a pulse instead of a metronome.
 */
const TIERS = {
  anchor: "py-anchor",
  anchorLight: "py-anchor-light",
  standard: "py-standard",
  light: "py-light",
  band: "py-band",
  close: "py-close",
  hero: "pt-hero-top pb-hero-bottom",
  pendant: "pt-0 pb-pendant-bottom",
} as const;

const GROUNDS = {
  base: "bg-bg",
  raised: "bg-bg-2",
} as const;

type SectionProps = {
  children: ReactNode;
  tier: keyof typeof TIERS;
  ground?: keyof typeof GROUNDS;
  /** Omit the inner Container when a section needs to bleed full width. */
  bleed?: boolean;
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
};

export function Section({
  children,
  tier,
  ground = "base",
  bleed = false,
  id,
  className,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative", TIERS[tier], GROUNDS[ground], className)}
      {...rest}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
