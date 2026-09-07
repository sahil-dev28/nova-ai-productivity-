import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p className={cn("text-eyebrow uppercase text-accent", className)}>
      {children}
    </p>
  );
}
