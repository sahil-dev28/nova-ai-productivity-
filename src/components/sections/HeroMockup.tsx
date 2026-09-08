import { SparklesIcon } from "lucide-react";
import { Ambient } from "@/components/common/Ambient";

const ROWS = [
  { title: "Migrate billing webhooks", meta: "Due Thu", tone: "accent" },
  { title: "Draft Q3 roadmap review", meta: "In review", tone: "muted" },
  { title: "Cut 2.4 release notes", meta: "Blocked", tone: "muted" },
  { title: "Triage support backlog", meta: "Automated", tone: "accent" },
] as const;

export function HeroMockup() {
  return (
    <Ambient className="relative animate-[nova-float_9s_ease-in-out_infinite]">
      <div className="rounded-panel border border-line bg-bg-2 shadow-panel">
        <div className="flex items-center gap-2 border-b border-line px-5 py-4">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="ml-3 text-[13px] font-medium text-muted">
            Sprint 24 · Platform
          </span>
        </div>

        <ul className="flex flex-col gap-2 p-5">
          {ROWS.map((row) => (
            <li
              key={row.title}
              className="flex items-center justify-between gap-4 rounded-control border border-line bg-surface px-4 py-3.5"
            >
              <span className="flex items-center gap-3">
                <span
                  className={
                    row.tone === "accent"
                      ? "size-2 rounded-full bg-accent"
                      : "size-2 rounded-full bg-line-strong"
                  }
                />
                <span className="text-[14px] font-medium text-ink">
                  {row.title}
                </span>
              </span>
              <span className="text-[12.5px] text-muted">{row.meta}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -bottom-5 left-6 flex animate-[nova-pulse_2.8s_ease-in-out_infinite] items-center gap-2 rounded-full border border-accent-40 bg-bg-2 px-4 py-2.5">
        <SparklesIcon className="size-4 text-accent" />
        <span className="text-[13px] font-semibold text-ink">
          Agent closed 6 tasks
        </span>
      </div>
    </Ambient>
  );
}
