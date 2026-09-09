export type Stat = {
  display: string;
  value: number;
  decimals: number;
  suffix: string;
  separator: string;
  label: string;
};

export const statsIntro = {
  eyebrow: "Statistics",
} as const;

export const stats: Stat[] = [
  {
    display: "4,200+",
    value: 4200,
    decimals: 0,
    suffix: "+",
    separator: ",",
    label: "Product teams building on NOVA",
  },
  {
    display: "3.4M",
    value: 3.4,
    decimals: 1,
    suffix: "M",
    separator: "",
    label: "Hours of busywork automated",
  },
  {
    display: "99.98%",
    value: 99.98,
    decimals: 2,
    suffix: "%",
    separator: "",
    label: "Platform uptime, trailing year",
  },
  {
    display: "42%",
    value: 42,
    decimals: 0,
    suffix: "%",
    separator: "",
    label: "Faster average cycle time",
  },
];
