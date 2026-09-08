function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const site = {
  url: new URL(resolveSiteUrl()),
  name: "NOVA",
  title: "NOVA — Build Better. Work Smarter.",
  tagline: "Build Better. Work Smarter.",
  description:
    "NOVA is the AI productivity platform where your team plans projects, automates the repetitive work and collaborates — all in one place.",
  themeColor: { dark: "#08080a", light: "#fbfbfc" },
} as const;
