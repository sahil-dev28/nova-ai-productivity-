import { Ambient } from "@/components/common/Ambient";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { finalCta } from "@/data/cta";
import { GetStartedCta } from "./GetStartedCta";

export function FinalCta() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="relative overflow-hidden py-close"
    >
      <Ambient className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 size-[680px] -translate-x-1/2 animate-[nova-drift-a_26s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] blur-3xl" />
      </Ambient>

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <h2 id="cta-title" className="text-h2 text-balance text-ink">
              {finalCta.title}
            </h2>

            <p className="mx-auto mt-5 max-w-[560px] text-lead text-pretty text-muted">
              {finalCta.supporting}
            </p>

            <GetStartedCta />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
