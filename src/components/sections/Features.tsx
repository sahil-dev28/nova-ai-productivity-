import type { CSSProperties } from "react";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/card";
import { features, featuresIntro } from "@/data/features";
import { cn } from "@/lib/utils";

const WIDE_TILES = [0, 3, 5];

export function Features() {
  return (
    <Section id="features" tier="standard" aria-labelledby="features-title">
      <Reveal>
        <SectionHeading
          number="01"
          id="features-title"
          eyebrow={featuresIntro.eyebrow}
          title={featuresIntro.title}
          supporting={featuresIntro.supporting}
        />
      </Reveal>

      <Reveal stagger>
        <ul className="mt-gap-cards grid gap-4 carousel:grid-cols-2 split:grid-cols-3">
          {features.map(({ title, description, icon: Icon }, index) => (
            <li
              key={title}
              data-stagger=""
              style={{ "--stagger-delay": `${index * 0.06}s` } as CSSProperties}
              className={cn(WIDE_TILES.includes(index) && "split:col-span-2")}
            >
              <Card className="h-full gap-4 border border-line ring-0 [--card-spacing:24px] transition-[translate,border-color,background-color] duration-500 ease-card hover:-translate-y-1 hover:border-accent-40 hover:bg-surface-2">
                <div className="px-(--card-spacing)">
                  <span className="inline-flex size-11 items-center justify-center rounded-control bg-accent-08">
                    <Icon aria-hidden="true" className="size-5 text-accent" />
                  </span>

                  <h3 className="mt-5 text-h3 text-ink">{title}</h3>

                  <p className="mt-2.5 max-w-[46ch] text-body text-muted">
                    {description}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
