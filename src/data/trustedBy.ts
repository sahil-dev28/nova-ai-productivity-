export type BrandKey =
  | "halcyon"
  | "northwind"
  | "cadence"
  | "meridian"
  | "axiom"
  | "lumen";

export type TrustedLogo = {
  /** Selects the drawn mark in BrandMark. */
  key: BrandKey;
  name: string;
};

export const trustedByLabel = "Trusted by 4,000+ product teams";

export const trustedByLogos: TrustedLogo[] = [
  { key: "halcyon", name: "HALCYON" },
  { key: "northwind", name: "NORTHWIND" },
  { key: "cadence", name: "CADENCE" },
  { key: "meridian", name: "MERIDIAN" },
  { key: "axiom", name: "AXIOM" },
  { key: "lumen", name: "LUMEN" },
];
