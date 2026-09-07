export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type SocialKey = "x" | "linkedin" | "github" | "youtube";

export type Social = {
  key: SocialKey;
  label: string;
  href: string;
};

export const footerBrand = {
  blurb:
    "The AI productivity platform for teams who would rather ship than coordinate.",
  copyright: "© 2026 NOVA Labs, Inc. All rights reserved.",
} as const;

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Automations", href: "#product" },
      { label: "Integrations", href: "#product" },
      { label: "Changelog", href: "#" },
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
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Press kit", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "Help centre", href: "#" },
      { label: "Security", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

export const socials: Social[] = [
  { key: "x", label: "NOVA on X", href: "#" },
  { key: "linkedin", label: "NOVA on LinkedIn", href: "#" },
  { key: "github", label: "NOVA on GitHub", href: "#" },
  { key: "youtube", label: "NOVA on YouTube", href: "#" },
];
