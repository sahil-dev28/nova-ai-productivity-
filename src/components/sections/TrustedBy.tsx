import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { trustedByLabel, trustedByLogos } from "@/data/trustedBy";

/**
 * Hangs off the hero rather than starting a new block — no top padding,
 * so the first real gap on the page arrives before Features.
 */
export function TrustedBy() {
  return (
    <section aria-label={trustedByLabel} className="pt-0 pb-pendant-bottom">
      <Container>
        <Reveal>
          <p className="text-center text-eyebrow uppercase text-muted">
            {trustedByLabel}
          </p>

          <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] items-center gap-x-6 gap-y-8">
            {trustedByLogos.map((logo) => (
              <li
                key={logo.name}
                className="text-center font-heading text-[17px] font-bold tracking-[0.16em] text-muted/70 transition-colors duration-200 hover:text-muted"
              >
                {logo.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
