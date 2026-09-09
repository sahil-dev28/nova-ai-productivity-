import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { solutionsIntro } from "@/data/solutions";
import { SolutionsTabs } from "./SolutionsTabs";

export function Solutions() {
  return (
    <Section id="solutions" tier="standard" aria-labelledby="solutions-title">
      <Reveal>
        <SectionHeading
          number="03"
          id="solutions-title"
          eyebrow={solutionsIntro.eyebrow}
          title={solutionsIntro.title}
        />

        <SolutionsTabs />
      </Reveal>
    </Section>
  );
}
