export type ChartBar = {
  label: string;
  /** Percent of the plot height. Illustrative — the panel is a mock. */
  value: number;
};

export type ProductStat = {
  value: string;
  label: string;
};

export type FlowStep = {
  label: string;
  tag: "Trigger" | "AI" | "Auto" | "Live";
};

export type ProductVisual =
  | {
      kind: "chart";
      caption: string;
      delta: string;
      bars: ChartBar[];
      stats: ProductStat[];
    }
  | { kind: "flow"; steps: FlowStep[] };

export type ProductBlock = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  visual: ProductVisual;
};

export const productBlocks: ProductBlock[] = [
  {
    id: "one-workspace",
    eyebrow: "One workspace",
    title: "Plans that stay honest about the work",
    body: "Roadmaps, sprints and docs share one source of truth. When a task slips, the timeline, the owner and the weekly update all know about it.",
    points: [
      "Dependencies that update themselves when dates move",
      "Docs that stay linked to the tickets they describe",
      "Weekly updates drafted from real activity",
    ],
    visual: {
      kind: "chart",
      caption: "Sprint 24 · velocity",
      delta: "+18%",
      bars: [
        { label: "Week 1", value: 42 },
        { label: "Week 2", value: 58 },
        { label: "Week 3", value: 51 },
        { label: "Week 4", value: 70 },
        { label: "Week 5", value: 64 },
        { label: "Week 6", value: 83 },
        { label: "Week 7", value: 96 },
      ],
      stats: [
        { value: "128", label: "Issues closed" },
        { value: "4.1d", label: "Median cycle" },
        { value: "3", label: "Blockers open" },
      ],
    },
  },
  {
    id: "automations",
    eyebrow: "Automations",
    title: "Hand the busywork to an agent that reads context",
    body: "Describe the rule in plain language. NOVA drafts the workflow, watches it run and tells you when something needs a human.",
    points: [
      "Plain-language rules, editable at every step",
      "Dry runs before anything touches production",
      "Escalation to a human when confidence drops",
    ],
    visual: {
      kind: "flow",
      steps: [
        { label: "New bug reported in #support", tag: "Trigger" },
        { label: "Classify severity and area", tag: "AI" },
        { label: "Assign owner from rotation", tag: "Auto" },
        { label: "Post summary to the sprint", tag: "Live" },
      ],
    },
  },
];
