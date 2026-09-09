import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  number?: string;
  eyebrow?: string;
  title: ReactNode;
  supporting?: ReactNode;
  id?: string;
  className?: string;
};

export function SectionHeading({
  number,
  eyebrow,
  title,
  supporting,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      {number || eyebrow ? (
        <div className="flex items-center gap-4">
          {number ? (
            <span className="text-eyebrow tabular-nums text-accent">
              {number}
            </span>
          ) : null}

          {eyebrow ? <Eyebrow className="text-muted">{eyebrow}</Eyebrow> : null}

          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </div>
      ) : null}

      <h2 id={id} className="mt-7 text-h2 text-balance text-ink">
        {title}
      </h2>

      {supporting ? (
        <p className="mt-5 max-w-[560px] text-lead text-pretty text-muted">
          {supporting}
        </p>
      ) : null}
    </div>
  );
}
