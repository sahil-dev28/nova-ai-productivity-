import type { ReactNode } from "react";
import type { BrandKey } from "@/data/trustedBy";

const MARKS: Record<BrandKey, ReactNode> = {
  halcyon: (
    <path d="M12 4 21.5 13.2H17.2L12 8.2 6.8 13.2H2.5ZM12 12.6 19.5 19.9H15.2L12 16.8 8.8 19.9H4.5Z" />
  ),
  northwind: <path d="M12 2 20 21.5 12 17 4 21.5Z" />,
  cadence: (
    <>
      <rect x="3.5" y="13" width="4" height="7.5" rx="2" />
      <rect x="10" y="8.5" width="4" height="12" rx="2" />
      <rect x="16.5" y="3.5" width="4" height="17" rx="2" />
    </>
  ),
  meridian: (
    <>
      <circle
        cx="12"
        cy="12"
        r="8.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <rect x="2.1" y="10.7" width="19.8" height="2.6" />
    </>
  ),
  axiom: (
    <path fillRule="evenodd" d="M12 2.5 22 20.5H2ZM12 10.2 16.4 17.8H7.6Z" />
  ),
  lumen: (
    <path d="M12 1.8c1.1 5.9 4.3 9.1 10.2 10.2-5.9 1.1-9.1 4.3-10.2 10.2-1.1-5.9-4.3-9.1-10.2-10.2C7.7 10.9 10.9 7.7 12 1.8Z" />
  ),
};

export function BrandMark({ name }: { name: BrandKey }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-[18px] shrink-0"
    >
      {MARKS[name]}
    </svg>
  );
}
