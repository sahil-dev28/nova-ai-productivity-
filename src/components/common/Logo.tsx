import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="relative size-7 overflow-hidden rounded-[9px] bg-[linear-gradient(140deg,var(--mark-from),var(--mark-to))]"
      >
        <span className="absolute inset-0 animate-[nova-sweep_4.5s_ease-in-out_infinite] bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,.55)_50%,transparent_65%)]" />
      </span>
      <span className="font-heading text-[19px] font-bold tracking-[-0.03em] text-ink">
        NOVA
      </span>
    </span>
  );
}
