"use client";

import { useEffect, useState } from "react";
import { Ambient } from "@/components/common/Ambient";
import { Container } from "@/components/common/Container";
import { HalftoneWave } from "@/components/common/HalftoneWave";
import {
  easeOut,
  mix,
  useScrollProgress,
} from "@/components/common/useScrollProgress";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/hero";
import { cn } from "@/lib/utils";
import { HeroMockup } from "./HeroMockup";

const ENTRANCE_STEPS = [200, 340, 480, 620, 760];

export function Hero() {
  const [step, setStep] = useState(-1);
  const lift = easeOut(useScrollProgress());

  useEffect(() => {
    let cancelled = false;

    const advance = (index: number) => {
      if (!cancelled) setStep(index);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() =>
        advance(ENTRANCE_STEPS.length),
      );
      return () => {
        cancelled = true;
        cancelAnimationFrame(frame);
      };
    }

    const timers = ENTRANCE_STEPS.map((delay, index) =>
      setTimeout(() => advance(index), delay),
    );

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  const enters = (index: number) =>
    cn(
      "transition-[opacity,translate] duration-700 ease-out-soft",
      step >= index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
    );

  return (
    <>
      <section className="relative flex h-[66vh] min-h-[420px] items-center overflow-hidden pt-nav">
        <HalftoneWave />

        <Ambient className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 size-[680px] -translate-x-1/2 animate-[nova-drift-a_26s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] blur-3xl" />
        </Ambient>

        <Container className="relative z-10">
          <div className="mx-auto max-w-[860px] text-center">
            <h1 className={`text-h1 text-balance text-ink ${enters(0)}`}>
              {hero.headline.join(" ")}
            </h1>

            <p
              className={`mx-auto mt-6 max-w-[560px] text-body text-pretty text-muted ${enters(1)}`}
            >
              {hero.lead}
            </p>

            <div
              className={cn(
                "mt-9 flex flex-wrap items-center justify-center gap-3",
                enters(2),
              )}
            >
              {hero.ctas.map((cta) => (
                <Button
                  key={cta.href}
                  asChild
                  variant={cta.variant === "primary" ? "default" : "outline"}
                  className={cn(
                    "h-12 rounded-control px-6 text-[15px] font-semibold transition-transform duration-300 ease-out-soft hover:-translate-y-0.5",
                    cta.variant === "primary"
                      ? ""
                      : "border-accent-40 bg-transparent text-accent backdrop-blur-[10px] hover:border-accent hover:bg-accent-08",
                  )}
                >
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              ))}
            </div>

            <p className={`mt-7 text-[13px] text-muted ${enters(3)}`}>
              {hero.footnote}
            </p>
          </div>
        </Container>
      </section>

      <section className="relative z-10 pb-24">
        <Container>
          <div
            className={cn(
              "mx-auto max-w-[840px] origin-top transition-[opacity,translate] duration-1000 ease-out-soft",
              step >= 4 ? "opacity-100" : "translate-y-16 opacity-0",
            )}
          >
            <div
              className="relative rounded-panel p-px"
              style={{
                transform: `translateY(${mix(56, 0, lift)}px) scale(${mix(0.97, 1, lift)})`,
                background:
                  "linear-gradient(160deg, var(--accent-40), transparent 45%, var(--accent-18))",
                boxShadow: `0 0 0 1px var(--accent-18), 0 40px 120px -40px var(--glow)`,
              }}
            >
              <div className="overflow-hidden rounded-panel bg-bg">
                <HeroMockup />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
