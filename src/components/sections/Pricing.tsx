import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { pricingIntro } from "@/data/pricing";
import { PricingPlans } from "./PricingPlans";

export function Pricing() {
  return (
    <Section id="pricing" tier="standard" aria-labelledby="pricing-title">
      <Reveal>
        <SectionHeading
          number="05"
          id="pricing-title"
          eyebrow={pricingIntro.eyebrow}
          title={pricingIntro.title}
        />
      </Reveal>

      <PricingPlans />
    </Section>
  );
}
