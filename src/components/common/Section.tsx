import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

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
  bleed?: boolean;
  id?: string;
  className?: string;
  "aria-label"?: string;
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
