import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  supporting?: ReactNode;
  id?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  supporting,
  id,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
      <h2 id={id} className="text-h2 text-balance text-ink">
        {title}
      </h2>
      {supporting ? (
        <p
          className={cn(
            "mt-5 max-w-[640px] text-lead text-muted",
            align === "center" && "mx-auto text-pretty",
          )}
        >
          {supporting}
        </p>
      ) : null}
    </div>
  );
}
