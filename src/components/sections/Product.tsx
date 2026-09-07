import { CheckIcon } from "lucide-react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { productBlocks } from "@/data/product";
import { cn } from "@/lib/utils";
import { ProductVisual } from "./ProductVisual";

export function Product() {
  return (
    <Section id="product" tier="anchor" ground="raised" aria-label="Product">
      <div className="flex flex-col gap-gap-blocks">
        {productBlocks.map((block, index) => (
          <Reveal key={block.id}>
            <div className="grid grid-cols-2 items-center gap-x-16 gap-y-10 max-split:grid-cols-1">
              {/* Text always renders first in the DOM, so the stacked
                  order stays copy-then-visual at every width. */}
              <div className={cn(index % 2 === 1 && "split:order-2")}>
                <Eyebrow>{block.eyebrow}</Eyebrow>

                <h2 className="mt-4 text-h2-block text-balance text-ink">
                  {block.title}
                </h2>

                <p className="mt-5 max-w-[520px] text-lead text-muted">
                  {block.body}
                </p>

                <ul className="mt-7 flex flex-col gap-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-08"
                      >
                        <CheckIcon className="size-3 text-accent" />
                      </span>
                      <span className="text-body text-muted">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ProductVisual visual={block.visual} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
