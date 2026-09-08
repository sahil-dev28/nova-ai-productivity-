import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/hero";
import { cn } from "@/lib/utils";
import { HeroMockup } from "./HeroMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-hero-top pb-hero-bottom">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 size-[620px] animate-[nova-drift-a_26s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] blur-3xl" />
        <div className="absolute -top-24 right-[-12rem] size-[520px] animate-[nova-drift-b_19s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,var(--glow-2),transparent_70%)] blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-[1fr_1.02fr] items-center gap-x-16 gap-y-gap-cards max-split:grid-cols-1">
          <div>
            <Reveal delay={0.05}>
              <span className="inline-flex min-h-8 items-center gap-2 rounded-full border border-accent-40 bg-accent-08 px-3.5 py-1.5 text-[12.5px] font-semibold text-accent">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-accent"
                />
                {hero.badge}
              </span>
            </Reveal>

            <Reveal delay={0.14}>
              <h1 className="mt-6 text-h1 text-ink">
                {hero.headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-6 max-w-[520px] text-lead text-muted">
                {hero.lead}
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                {hero.ctas.map((cta) => (
                  <Button
                    key={cta.href}
                    asChild
                    variant={cta.variant === "primary" ? "default" : "outline"}
                    className={cn(
                      "h-12 rounded-control px-6 text-[15px] font-semibold transition-transform duration-300 ease-out-soft hover:-translate-y-0.5",
                      cta.variant === "primary"
                        ? "hover:shadow-[0_16px_36px_-14px_var(--glow)]"
                        : "border-line-strong bg-transparent text-ink hover:border-accent-40 hover:bg-transparent",
                    )}
                  >
                    <a href={cta.href}>{cta.label}</a>
                  </Button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.44}>
              <p className="mt-6 text-[13.5px] text-muted">{hero.footnote}</p>
            </Reveal>
          </div>

          <Reveal delay={0.5}>
            <HeroMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
