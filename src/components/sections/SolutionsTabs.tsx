"use client";

import { CheckIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { solutions } from "@/data/solutions";

/**
 * Radix keeps only the active panel mounted and owns the roving focus,
 * the tablist/tab/tabpanel roles and the aria-selected wiring, which is
 * the whole of the spec's tab contract.
 */
export function SolutionsTabs() {
  return (
    <Tabs defaultValue={solutions[0].id} className="mt-gap-tabs gap-6">
      <TabsList className="flex h-auto flex-wrap gap-2 bg-transparent p-0">
        {solutions.map((solution) => (
          <TabsTrigger
            key={solution.id}
            value={solution.id}
            className="min-h-11 rounded-control border border-line bg-surface px-5 text-[15px] font-semibold text-muted transition-colors duration-200 data-[state=active]:border-accent-40 data-[state=active]:bg-accent-08 data-[state=active]:text-ink"
          >
            {solution.tab}
          </TabsTrigger>
        ))}
      </TabsList>

      {solutions.map((solution) => (
        <TabsContent key={solution.id} value={solution.id}>
          <div className="grid grid-cols-[1fr_0.85fr] gap-x-12 gap-y-8 rounded-panel border border-line bg-surface p-8 shadow-panel max-split:grid-cols-1">
            <div>
              <h3 className="text-h2-block text-balance text-ink">
                {solution.headline}
              </h3>

              <p className="mt-4 max-w-[520px] text-lead text-muted">
                {solution.body}
              </p>
            </div>

            <div>
              <ul className="flex flex-col gap-3">
                {solution.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-08"
                    >
                      <CheckIcon className="size-3 text-accent" />
                    </span>
                    <span className="text-body text-muted">{item}</span>
                  </li>
                ))}
              </ul>

              <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
                {solution.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dd className="font-heading text-[26px] font-bold tracking-[-0.03em] text-accent">
                      {metric.value}
                    </dd>
                    <dt className="mt-1 text-[13px] text-muted">
                      {metric.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
