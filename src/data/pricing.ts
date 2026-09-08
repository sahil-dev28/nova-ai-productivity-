export type BillingCycle = "monthly" | "annual";

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: Record<BillingCycle, string>;
  note: Record<BillingCycle, string>;
  cta: string;
  features: string[];
  popular: boolean;
};

export const pricingIntro = {
  eyebrow: "Pricing",
  title: "Simple plans, priced per seat",
  saveBadge: "Save 20%",
} as const;

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For a first team getting the work into one place.",
    price: { monthly: "$0", annual: "$0" },
    note: { monthly: "Free forever", annual: "Free forever" },
    cta: "Create workspace",
    features: [
      "Up to 10 teammates",
      "Unified projects and docs",
      "Three active automations",
      "30-day activity history",
    ],
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For teams running real delivery on a real cadence.",
    price: { monthly: "$18", annual: "$14" },
    note: {
      monthly: "per seat, billed monthly",
      annual: "per seat, billed annually",
    },
    cta: "Start 14-day trial",
    features: [
      "Everything in Starter",
      "Unlimited automations and agents",
      "Instant recall across the workspace",
      "Velocity, risk and load signals",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For organisations with procurement and a security review.",
    price: { monthly: "$42", annual: "$34" },
    note: {
      monthly: "per seat, billed monthly",
      annual: "per seat, billed annually",
    },
    cta: "Talk to sales",
    features: [
      "Everything in Pro",
      "SSO and SCIM provisioning",
      "Audit trails and retention rules",
      "Regional data residency",
      "Named success contact",
    ],
    popular: false,
  },
];
