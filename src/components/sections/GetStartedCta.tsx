"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { finalCta } from "@/data/cta";
import { GetStartedDialog } from "./GetStartedDialog";

export function GetStartedCta() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="mt-9 flex justify-center">
      <Button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="h-12 rounded-control px-8 text-[15px] font-semibold transition-transform duration-300 ease-out-soft hover:-translate-y-0.5"
      >
        {finalCta.submit}
      </Button>

      <GetStartedDialog
        open={open}
        onOpenChange={setOpen}
        returnFocusTo={triggerRef}
      />
    </div>
  );
}
