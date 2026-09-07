export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqIntro = {
  eyebrow: "FAQ",
  title: "Questions, answered",
  supportLead: "Still stuck?",
  supportEmail: "hello@nova.app",
  supportTail: "and a human replies within a day.",
} as const;

export const faqs: Faq[] = [
  {
    id: "setup",
    question: "How long does setup actually take?",
    answer:
      "Most teams are working in NOVA the same afternoon. Connecting your repos and calendars takes a few minutes, and the first workspace map is generated from that rather than from a migration project.",
  },
  {
    id: "no-code",
    question: "Do I need an engineer to build automations?",
    answer:
      "No. Automations are written in plain language and NOVA drafts the workflow from what you wrote. An engineer can open the steps and edit them, but nobody has to.",
  },
  {
    id: "migration",
    question: "Can we bring our existing projects across?",
    answer:
      "Yes. Imports keep issue history, comments and attachments, and links between tickets survive the move. You can run NOVA alongside your current tool while the team switches over.",
  },
  {
    id: "data",
    question: "What happens to our data?",
    answer:
      "Your workspace is encrypted in transit and at rest, and it is never used to train shared models. Enterprise workspaces can pin storage to a region and export everything on demand.",
  },
  {
    id: "trial",
    question: "What happens when the trial ends?",
    answer:
      "Nothing is deleted. The workspace drops to the Starter plan, keeps your projects and docs, and pauses the automations above the free limit until you pick a plan.",
  },
  {
    id: "annual",
    question: "How does the annual discount work?",
    answer:
      "Paying annually takes 20% off the per-seat price and bills once for the year. Seats added mid-term are prorated, and switching from monthly credits whatever you have already paid.",
  },
];
