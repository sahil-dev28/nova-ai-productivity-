import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { steps, stepsIntro } from "@/data/steps";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tier="standard" aria-labelledby="how-it-works-title">
      <Reveal>
        <SectionHeading
          number="02"
          id="how-it-works-title"
          eyebrow={stepsIntro.eyebrow}
          title={stepsIntro.title}
        />
      </Reveal>

      <Reveal>
        <div className="relative mt-gap-steps">
          <span
            aria-hidden="true"
            data-connector=""
            className="absolute top-[27px] right-0 left-0 h-px bg-line max-carousel:hidden"
          />

          <ol className="relative grid grid-cols-3 gap-10 max-carousel:grid-cols-1">
            {steps.map((step) => (
              <li key={step.number}>
                <span className="inline-flex size-[54px] items-center justify-center rounded-full border border-line bg-bg font-heading text-[17px] font-bold text-accent">
                  {step.number}
                </span>

                <h3 className="mt-6 text-h3 text-ink">{step.title}</h3>

                <p className="mt-2.5 max-w-[340px] text-body text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Section>
  );
}
