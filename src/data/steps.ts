export type Step = {
  number: string;
  title: string;
  description: string;
};

export const stepsIntro = {
  eyebrow: "How it works",
  title: "Three steps to a calmer week",
} as const;

export const steps: Step[] = [
  {
    number: "01",
    title: "Connect your stack",
    description:
      "Link the repos, calendars and tools you already use. NOVA maps the work in minutes, not quarters.",
  },
  {
    number: "02",
    title: "Describe the workflow",
    description:
      "Write the rule the way you'd explain it to a teammate. Review the draft, then switch it on.",
  },
  {
    number: "03",
    title: "Ship on a calmer cadence",
    description:
      "Standups write themselves, blockers surface early and the roadmap stays honest.",
  },
];
