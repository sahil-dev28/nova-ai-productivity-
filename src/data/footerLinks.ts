export type FooterLink = {
  label: string;
  href?: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type SocialKey = "x" | "linkedin" | "github" | "youtube";

export type Social = {
  key: SocialKey;
  label: string;
  href?: string;
};

export const footerBrand = {
  blurb:
    "The AI productivity platform for teams who would rather ship than coordinate.",
  copyright: "© 2026 NOVA Labs, Inc. All rights reserved.",
} as const;

export const newsletter = {
  title: "The monthly dispatch",
  blurb: "One email a month. Real workflows from real teams, nothing else.",
  label: "Work email",
  placeholder: "you@company.com",
  submit: "Subscribe",
  success: "You're on the list — check your inbox to confirm.",
  error: "Enter a valid work email to subscribe.",
} as const;

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Automations", href: "#product" },
      { label: "Integrations", href: "#product" },
      { label: "Changelog" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Engineering", href: "#solutions" },
      { label: "Marketing", href: "#solutions" },
      { label: "Design", href: "#solutions" },
      { label: "Operations", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About" },
      { label: "Careers" },
      { label: "Customers" },
      { label: "Press kit" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs" },
      { label: "Help centre" },
      { label: "Security" },
      { label: "Status" },
    ],
  },
];

export const socials: Social[] = [
  { key: "x", label: "NOVA on X" },
  { key: "linkedin", label: "NOVA on LinkedIn" },
  { key: "github", label: "NOVA on GitHub" },
  { key: "youtube", label: "NOVA on YouTube" },
];
