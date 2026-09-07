import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** 1200px measure with the 24px gutter the spec keeps at every width. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-gutter", className)}>
      {children}
    </div>
  );
}
