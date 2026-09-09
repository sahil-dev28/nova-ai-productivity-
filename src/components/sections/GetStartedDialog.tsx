"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, type RefObject } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getStarted } from "@/data/cta";

const schema = z.object({
  name: z.string().trim().min(1, getStarted.errors.name),
  email: z.email(getStarted.errors.email),
  company: z.string().trim().min(1, getStarted.errors.company),
});

type FormValues = z.infer<typeof schema>;

const FIELD =
  "h-12 w-full rounded-control border border-line-strong bg-surface px-4 text-[15px] text-ink placeholder:text-muted";

type GetStartedDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnFocusTo: RefObject<HTMLButtonElement | null>;
};

export function GetStartedDialog({
  open,
  onOpenChange,
  returnFocusTo,
}: GetStartedDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "" },
  });

  useEffect(() => {
    if (open) reset();
  }, [open, reset]);

  const fields = [
    { key: "name", type: "text", autoComplete: "name" },
    { key: "email", type: "email", autoComplete: "email" },
    { key: "company", type: "text", autoComplete: "organization" },
  ] as const;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          returnFocusTo.current?.focus();
        }}
      >
        <DialogHeader>
          <DialogTitle>{getStarted.title}</DialogTitle>
          <DialogDescription>{getStarted.supporting}</DialogDescription>
        </DialogHeader>

        <form
          noValidate
          onSubmit={handleSubmit(() => onOpenChange(false))}
          className="mt-7 flex flex-col gap-5"
        >
          {fields.map(({ key, type, autoComplete }) => (
            <div key={key} className="flex flex-col gap-2">
              <Label
                htmlFor={`get-started-${key}`}
                className="text-[14px] font-medium text-ink"
              >
                {getStarted.fields[key].label}
              </Label>

              <Input
                id={`get-started-${key}`}
                type={type}
                autoComplete={autoComplete}
                placeholder={getStarted.fields[key].placeholder}
                aria-invalid={errors[key] ? true : undefined}
                aria-describedby={errors[key] ? `${key}-error` : undefined}
                className={FIELD}
                {...register(key)}
              />

              {errors[key] ? (
                <p id={`${key}-error`} className="text-[14px] text-destructive">
                  {errors[key]?.message}
                </p>
              ) : null}
            </div>
          ))}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 h-12 rounded-control px-7 text-[15px] font-semibold transition-transform duration-300 ease-out-soft hover:-translate-y-0.5"
          >
            {getStarted.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
