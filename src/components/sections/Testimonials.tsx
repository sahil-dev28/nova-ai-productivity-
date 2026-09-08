import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { testimonials, testimonialsIntro } from "@/data/testimonials";

const AVATARS = {
  one: "bg-[linear-gradient(140deg,var(--avatar-1-from),var(--avatar-1-to))]",
  two: "bg-[linear-gradient(140deg,var(--avatar-2-from),var(--avatar-2-to))]",
  three:
    "bg-[linear-gradient(140deg,var(--avatar-3-from),var(--avatar-3-to))]",
} as const;

export function Testimonials() {
  return (
    <Section
      tier="light"
      ground="raised"
      aria-labelledby="testimonials-title"
    >
      <Reveal>
        <SectionHeading
          id="testimonials-title"
          title={testimonialsIntro.title}
        />
      </Reveal>

      <Reveal>
        <ul className="mt-gap-cards grid grid-cols-3 gap-4 max-carousel:flex max-carousel:snap-x max-carousel:snap-mandatory max-carousel:overflow-x-auto max-carousel:pb-2">
          {testimonials.map((person) => (
            <li
              key={person.id}
              className="max-carousel:w-[84%] max-carousel:shrink-0 max-carousel:snap-start"
            >
              <figure className="flex h-full flex-col rounded-card border border-line bg-surface p-7 transition-[transform,border-color,box-shadow] duration-300 ease-out-soft hover:-translate-y-1.5 hover:border-accent-40 hover:shadow-lift">
                <blockquote className="text-body text-ink">
                  <p>“{person.quote}”</p>
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-6">
                  <span
                    aria-hidden="true"
                    className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full font-heading text-[14px] font-bold text-accent-ink ${AVATARS[person.avatar]}`}
                  >
                    {person.initials}
                  </span>

                  <span>
                    <span className="block text-[15px] font-semibold text-ink">
                      {person.name}
                    </span>
                    <span className="block text-[13px] text-muted">
                      {person.role}, {person.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
