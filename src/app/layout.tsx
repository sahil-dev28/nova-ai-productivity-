import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { MotionGate } from "@/components/common/MotionGate";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOVA — Build Better. Work Smarter.",
  description:
    "NOVA is the AI productivity platform where your team plans projects, automates the repetitive work and collaborates — all in one place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ThemeProvider>
          <MotionGate />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
