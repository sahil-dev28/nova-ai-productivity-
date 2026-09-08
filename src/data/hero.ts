export type HeroCta = {
  label: string;
  href: string;
  variant: "primary" | "ghost";
};

export const hero = {
  badge: "NOVA 3.0 is live",
  headline: ["Build Better.", "Work Smarter."],
  lead: "NOVA is the AI productivity platform where your team plans projects, automates the repetitive work and collaborates — all in one place.",
  footnote: "Free for 14 days · Set up in under 5 minutes",
  ctas: [
    { label: "Start free — no card", href: "#cta", variant: "primary" },
    { label: "Watch the tour", href: "#product", variant: "ghost" },
  ] satisfies HeroCta[],
} as const;
