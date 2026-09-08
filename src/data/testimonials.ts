export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatar: "one" | "two" | "three" | "four";
};

export const testimonialsIntro = {
  title: "Teams stopped managing the tool",
  supporting: "Hear it first hand, from the people who run their week on NOVA.",
} as const;

export const testimonials: Testimonial[] = [
  {
    id: "priya",
    quote:
      "We replaced four tools with NOVA and the sprint got quieter, not busier. It was the calmest quarter my team has had in a year.",
    name: "Priya Raghunathan",
    role: "VP Engineering",
    company: "Halcyon",
    initials: "PR",
    avatar: "one",
  },
  {
    id: "marcus",
    quote:
      "The automations actually read context. Launch checklists assign themselves now, and nobody has spent a Friday chasing status since.",
    name: "Marcus Bell",
    role: "Head of Marketing",
    company: "Northwind",
    initials: "MB",
    avatar: "two",
  },
  {
    id: "sofia",
    quote:
      "Every design decision has a home you can trace back to. New designers stop asking why something looks the way it does — they can just read it.",
    name: "Sofia Lindqvist",
    role: "Design Director",
    company: "Cadence",
    initials: "SL",
    avatar: "three",
  },
  {
    id: "dele",
    quote:
      "Our weekly ops review used to open with twenty minutes of reconciling dashboards. The numbers are settled before anyone joins the call now.",
    name: "Dele Okonkwo",
    role: "Head of Operations",
    company: "Fernbank",
    initials: "DO",
    avatar: "four",
  },
];
