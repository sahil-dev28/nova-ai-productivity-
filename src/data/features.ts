import {
  ActivityIcon,
  LayersIcon,
  SearchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const featuresIntro = {
  eyebrow: "Features",
  title: "Everything the work needs. Nothing it doesn't.",
  supporting:
    "Six primitives that replace the sprawl of tabs your team lives in today.",
} as const;

export const features: Feature[] = [
  {
    title: "Unified projects",
    description:
      "Roadmaps, sprints and docs in one graph, so nothing lives in a stale spreadsheet.",
    icon: LayersIcon,
  },
  {
    title: "Agentic automations",
    description:
      "Describe a rule in plain English. NOVA builds it, runs it and flags the edge cases.",
    icon: SparklesIcon,
  },
  {
    title: "Live collaboration",
    description:
      "Comments, decisions and approvals attached to the work instead of a thread nobody reads.",
    icon: UsersIcon,
  },
  {
    title: "Signal, not dashboards",
    description:
      "Velocity, risk and load calculated from real activity — refreshed the moment work moves.",
    icon: ActivityIcon,
  },
  {
    title: "Instant recall",
    description:
      "Ask across every task, doc and thread. Answers come back with their sources attached.",
    icon: SearchIcon,
  },
  {
    title: "Enterprise ready",
    description:
      "SSO, SCIM, audit trails and regional data residency available on every workspace.",
    icon: ShieldCheckIcon,
  },
];
