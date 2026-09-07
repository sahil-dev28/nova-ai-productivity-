import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/card";
import { features, featuresIntro } from "@/data/features";

export function Features() {
  return (
    <Section id="features" tier="standard" aria-labelledby="features-title">
      <Reveal>
        <SectionHeading
          id="features-title"
          eyebrow={featuresIntro.eyebrow}
          title={featuresIntro.title}
          supporting={featuresIntro.supporting}
        />
      </Reveal>

      <Reveal>
        <ul className="mt-gap-cards grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {features.map(({ title, description, icon: Icon }) => (
            <li key={title}>
              <Card className="h-full gap-4 border border-line ring-0 [--card-spacing:24px] transition-[transform,border-color,box-shadow] duration-300 ease-out-soft hover:-translate-y-1.5 hover:border-accent-40 hover:shadow-lift">
                <div className="px-(--card-spacing)">
                  <span className="inline-flex size-11 items-center justify-center rounded-control bg-accent-08">
                    <Icon aria-hidden="true" className="size-5 text-accent" />
                  </span>

                  <h3 className="mt-5 text-h3 text-ink">{title}</h3>

                  <p className="mt-2.5 text-body text-muted">{description}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
