import { cn } from "@/lib/utils";

export function Logo({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "relative overflow-hidden bg-[linear-gradient(140deg,var(--mark-from),var(--mark-to))]",
          compact ? "size-5 rounded-[7px]" : "size-7 rounded-[9px]",
        )}
      >
        <span className="absolute inset-0 animate-[nova-sweep_4.5s_ease-in-out_infinite] bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,.55)_50%,transparent_65%)]" />
      </span>
      <span
        className={cn(
          "font-heading font-bold tracking-[-0.03em] text-ink",
          compact ? "text-[15px]" : "text-[19px]",
        )}
      >
        nova
      </span>
    </span>
  );
}
