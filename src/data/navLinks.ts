export type NavLink = {
  label: string;
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
