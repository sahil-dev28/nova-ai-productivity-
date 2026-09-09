export const finalCta = {
  title: "Start building better this week",
  supporting:
    "Jump straight into a free workspace. Set up in under five minutes, no card needed.",
  submit: "Get started",
} as const;

export const getStarted = {
  title: "Create your workspace",
  supporting:
    "Three details and your team is set up. Free for 14 days, no card needed.",
  fields: {
    name: { label: "Full name", placeholder: "Priya Raghunathan" },
    email: { label: "Work email", placeholder: "you@company.com" },
    company: { label: "Company", placeholder: "Halcyon" },
  },
  submit: "Create workspace",
  errors: {
    name: "Tell us what to call you.",
    email: "Enter a valid work email to continue.",
    company: "Tell us where you work.",
  },
} as const;
