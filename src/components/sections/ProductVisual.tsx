import type { CSSProperties } from "react";
import type { ProductVisual as Visual } from "@/data/product";

const TAG_TONE = {
  Trigger: "text-muted",
  AI: "text-accent",
  Auto: "text-muted",
  Live: "text-accent",
} as const;

export function ProductVisual({ visual }: { visual: Visual }) {
  if (visual.kind === "chart") {
    return (
      <div className="rounded-panel border border-line bg-bg-2 p-6 shadow-panel">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-[13px] font-medium text-muted">{visual.caption}</p>
          <p className="font-heading text-[15px] font-bold text-accent">
            {visual.delta}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="mt-6 flex h-40 items-end gap-2.5 border-b border-line"
        >
          {visual.bars.map((bar, index) => (
            <span
              key={bar.label}
              data-bar=""
              className="flex-1 rounded-t-[6px] bg-[linear-gradient(180deg,var(--accent),var(--accent-40))]"
              style={
                {
                  height: `${bar.value}%`,
                  "--bar-delay": `${index * 70}ms`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <dl className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-4">
          {visual.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-[22px] font-bold tracking-[-0.03em] text-ink">
                {stat.value}
              </dd>
              <p className="mt-1 text-[12.5px] text-muted">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  return (
    <ol className="flex flex-col gap-3 rounded-panel border border-line bg-bg-2 p-6 shadow-panel">
      {visual.steps.map((step) => (
        <li
          key={step.label}
          className="flex items-center justify-between gap-4 rounded-control border border-line bg-surface px-4 py-3.5"
        >
          <span className="text-[14px] font-medium text-ink">{step.label}</span>
          <span
            className={`shrink-0 text-eyebrow uppercase ${TAG_TONE[step.tag]}`}
          >
            {step.tag}
          </span>
        </li>
      ))}
    </ol>
  );
}
