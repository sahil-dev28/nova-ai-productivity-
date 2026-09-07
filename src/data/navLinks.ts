export type NavLink = {
  label: string;
  /** Id of the section this link scrolls to, also used for the scrollspy. */
  id: string;
};

export const navLinks: NavLink[] = [
  { label: "Features", id: "features" },
  { label: "Product", id: "product" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export const navCta = {
  label: "Start free",
  href: "#cta",
} as const;
