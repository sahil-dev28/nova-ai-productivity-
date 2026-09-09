import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  id,
  className,
}: {
  children: string;
  id?: string;
  className?: string;
}) {
  return (
    <p id={id} className={cn("text-eyebrow uppercase text-accent", className)}>
      {children}
    </p>
  );
}
