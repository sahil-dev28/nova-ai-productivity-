import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { testimonials, testimonialsIntro } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section tier="light" ground="raised" aria-labelledby="testimonials-title">
      <div className="grid grid-cols-[0.85fr_minmax(0,1fr)] items-center gap-x-16 gap-y-12 max-split:grid-cols-1">
        <Reveal>
          <span
            aria-hidden="true"
            className="block font-heading text-[96px] leading-[0.55] font-bold text-accent"
          >
            &ldquo;
          </span>

          <SectionHeading
            number="04"
            id="testimonials-title"
            eyebrow={testimonialsIntro.eyebrow}
            title={testimonialsIntro.title}
            supporting={testimonialsIntro.supporting}
            className="mt-10"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <TestimonialsCarousel items={testimonials} />
        </Reveal>
      </div>
    </Section>
  );
}
