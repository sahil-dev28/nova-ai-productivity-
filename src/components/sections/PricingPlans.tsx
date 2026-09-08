"use client";

import { CheckIcon } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  pricingIntro,
  pricingPlans,
  type BillingCycle,
} from "@/data/pricing";
import { cn } from "@/lib/utils";

export function PricingPlans() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const switchId = useId();

  return (
    <>
      <div className="mt-gap-tabs flex flex-wrap items-center justify-center gap-4">
        <div className="flex min-h-11 items-center gap-3 rounded-control border border-line bg-surface px-4">
          <Label
            htmlFor={switchId}
            className={cn(
              "text-[14px] font-semibold transition-colors duration-200",
              cycle === "monthly" ? "text-ink" : "text-muted",
            )}
          >
            Monthly
          </Label>

          <Switch
            id={switchId}
            checked={cycle === "annual"}
            onCheckedChange={(checked) =>
              setCycle(checked ? "annual" : "monthly")
            }
            aria-label="Bill annually"
            className="relative before:absolute before:inset-x-0 before:-inset-y-3.5 before:content-['']"
          />

          <Label
            htmlFor={switchId}
            className={cn(
              "text-[14px] font-semibold transition-colors duration-200",
              cycle === "annual" ? "text-ink" : "text-muted",
            )}
          >
            Annual
          </Label>
        </div>

        <span className="rounded-full border border-accent-40 bg-accent-08 px-3 py-1.5 text-[12.5px] font-semibold text-accent">
          {pricingIntro.saveBadge}
        </span>
      </div>

      <ul className="mt-gap-cards grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-start gap-4">
        {pricingPlans.map((plan) => (
          <li key={plan.id}>
            <div
              className={cn(
                "flex h-full flex-col rounded-card border p-7 transition-[transform,border-color,box-shadow] duration-300 ease-out-soft hover:-translate-y-1.5 hover:shadow-lift",
                plan.popular
                  ? "border-accent-40 bg-accent-08"
                  : "border-line bg-surface hover:border-accent-40",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-h3 text-ink">{plan.name}</h3>

                {plan.popular ? (
                  <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold tracking-[0.08em] text-accent-ink uppercase">
                    Most popular
                  </span>
                ) : null}
              </div>

              <p className="mt-2.5 text-body text-muted">{plan.description}</p>

              <p className="mt-7 font-heading text-price text-ink">
                {plan.price[cycle]}
              </p>
              <p className="mt-2 text-[13.5px] text-muted">{plan.note[cycle]}</p>

              <ul className="mt-7 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-08"
                    >
                      <CheckIcon className="size-3 text-accent" />
                    </span>
                    <span className="text-body text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.popular ? "default" : "outline"}
                className={cn(
                  "mt-8 h-12 w-full rounded-control text-[15px] font-semibold",
                  !plan.popular &&
                    "border-line-strong bg-transparent text-ink hover:border-accent-40 hover:bg-transparent",
                )}
              >
                <a href="#cta">{plan.cta}</a>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
