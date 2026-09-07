export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  /** Which of the three fixed avatar gradients this person uses. */
  avatar: "one" | "two" | "three";
};

export const testimonialsIntro = {
  title: "Teams stopped managing the tool",
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
];
