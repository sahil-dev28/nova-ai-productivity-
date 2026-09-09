import { Eyebrow } from "@/components/common/Eyebrow";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { StatCounter } from "@/components/common/StatCounter";
import { stats, statsIntro } from "@/data/stats";

export function Stats() {
  return (
    <Section
      tier="band"
      ground="raised"
      aria-labelledby="stats-title"
      className="border-y border-line"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <Eyebrow id="stats-title" className="text-muted">
            {statsIntro.eyebrow}
          </Eyebrow>

          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </div>

        <dl className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-8 gap-y-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-heading text-stat tabular-nums text-ink">
                <StatCounter stat={stat} />
              </dd>
              <dt className="mt-3 max-w-[220px] text-body text-muted">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
