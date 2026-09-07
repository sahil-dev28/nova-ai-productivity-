export type SolutionMetric = {
  value: string;
  label: string;
};

export type Solution = {
  id: string;
  tab: string;
  headline: string;
  body: string;
  checklist: string[];
  metrics: SolutionMetric[];
};

export const solutionsIntro = {
  eyebrow: "Use cases",
  title: "Built for the way each team works",
} as const;

export const solutions: Solution[] = [
  {
    id: "engineering",
    tab: "Engineering",
    headline: "Sprints that survive the second week",
    body: "Scope, dependencies and on-call all read from the same board, so a slipped ticket moves the plan instead of quietly rotting in a backlog.",
    checklist: [
      "Dependencies re-date themselves when an estimate changes",
      "Pull requests attach to the ticket that asked for them",
      "Standup notes drafted from the week's real activity",
    ],
    metrics: [
      { value: "-38%", label: "planning time" },
      { value: "2.1×", label: "issues closed" },
    ],
  },
  {
    id: "marketing",
    tab: "Marketing",
    headline: "Campaigns that never lose a deadline",
    body: "Every launch runs off one calendar with the assets, the approvals and the owner attached, so nothing waits on someone remembering to chase it.",
    checklist: [
      "Briefs, assets and approvals live on the campaign itself",
      "Reminders fire from the schedule, not from a person",
      "Post-launch recaps assembled while the numbers are warm",
    ],
    metrics: [
      { value: "4 days", label: "faster prep" },
      { value: "92%", label: "on-time delivery" },
    ],
  },
  {
    id: "design",
    tab: "Design",
    headline: "Critique attached to the work",
    body: "Feedback lands on the frame it is about and stays there, so the reason behind a decision is still findable three months later.",
    checklist: [
      "Comments anchored to the artboard, not to a thread",
      "Decisions logged with the version that settled them",
      "Handoff notes generated from what actually changed",
    ],
    metrics: [
      { value: "-51%", label: "handoff clarifications" },
      { value: "3.5k", label: "decisions logged" },
    ],
  },
  {
    id: "operations",
    tab: "Operations",
    headline: "Process that runs without a chaser",
    body: "Intake, routing and escalation are rules rather than habits, so requests find an owner the moment they arrive.",
    checklist: [
      "Requests routed by rota, load and working hours",
      "Escalation fires on age, not on someone noticing",
      "Every queue reports its own backlog and median age",
    ],
    metrics: [
      { value: "6 hrs", label: "saved per operator" },
      { value: "100%", label: "requests owned" },
    ],
  },
];
