import { BrandMark } from "@/components/common/BrandMark";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { trustedByLabel, trustedByLogos } from "@/data/trustedBy";

export function TrustedBy() {
  return (
    <Section tier="pendant" aria-label={trustedByLabel}>
      <Reveal>
        <p className="text-center text-eyebrow uppercase text-muted">
          {trustedByLabel}
        </p>

        <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] items-center gap-x-6 gap-y-8">
          {trustedByLogos.map((logo) => (
            <li
              key={logo.key}
              className="flex items-center justify-center gap-2.5 text-muted/70 transition-colors duration-200 hover:text-muted"
            >
              <BrandMark name={logo.key} />

              <span className="font-heading text-[17px] font-bold tracking-[0.16em]">
                {logo.name}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
