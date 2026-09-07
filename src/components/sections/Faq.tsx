import { Reveal } from "@/components/common/Reveal";
import { Eyebrow } from "@/components/common/Eyebrow";
import { Section } from "@/components/common/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqIntro, faqs } from "@/data/faqs";

export function Faq() {
  return (
    <Section
      id="faq"
      tier="anchorLight"
      ground="raised"
      aria-labelledby="faq-title"
    >
      <div className="grid grid-cols-[0.7fr_1fr] gap-x-16 gap-y-10 max-split:grid-cols-1">
        <Reveal>
          <Eyebrow className="mb-4">{faqIntro.eyebrow}</Eyebrow>

          <h2 id="faq-title" className="text-h2 text-balance text-ink">
            {faqIntro.title}
          </h2>

          <p className="mt-5 max-w-[420px] text-lead text-muted">
            {faqIntro.supportLead}{" "}
            <a
              href={`mailto:${faqIntro.supportEmail}`}
              className="font-semibold text-accent underline underline-offset-4"
            >
              {faqIntro.supportEmail}
            </a>{" "}
            {faqIntro.supportTail}
          </p>
        </Reveal>

        <Reveal>
          {/* type="single" collapsible is the spec's one-open-at-a-time.
              Radix supplies aria-expanded and aria-controls on each
              trigger and the panel ids they point at. */}
          <Accordion type="single" collapsible className="gap-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-accordion border border-line bg-surface not-last:border-b"
              >
                <AccordionTrigger
                  className={[
                    "px-5 py-5 text-left text-[17px] font-semibold text-ink hover:no-underline",
                    // shadcn swaps a down chevron for an up one. The spec
                    // wants a single chevron that turns, so the second is
                    // dropped and the first is pinned visible and rotated.
                    "[&_[data-slot=accordion-trigger-icon]]:transition-transform [&_[data-slot=accordion-trigger-icon]]:duration-300",
                    "[&_[data-slot=accordion-trigger-icon]:last-of-type]:hidden!",
                    "[&_[data-slot=accordion-trigger-icon]:first-of-type]:block!",
                    "aria-expanded:[&_[data-slot=accordion-trigger-icon]:first-of-type]:rotate-180",
                  ].join(" ")}
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="px-5 pb-5 text-body text-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
