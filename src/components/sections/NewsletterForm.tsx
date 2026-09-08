"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { finalCta } from "@/data/cta";

const schema = z.object({
  email: z.email(finalCta.error),
});

type FormValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const email = register("email");
  const message = errors.email?.message ?? (subscribed ? finalCta.success : "");

  return (
    <form
      noValidate
      onSubmit={handleSubmit(() => {
        setSubscribed(true);
        reset();
      })}
      className="mt-9"
    >
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Label htmlFor="newsletter-email" className="sr-only">
          Work email
        </Label>

        <Input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder={finalCta.placeholder}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby="newsletter-status"
          className="h-12 w-full max-w-[320px] rounded-control border border-line-strong bg-surface px-4 text-[15px] text-ink placeholder:text-muted"
          {...email}
          onChange={(event) => {
            setSubscribed(false);
            return email.onChange(event);
          }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 rounded-control px-7 text-[15px] font-semibold transition-transform duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-14px_var(--glow)]"
        >
          {finalCta.submit}
        </Button>
      </div>

      <p
        id="newsletter-status"
        role="status"
        className={
          errors.email
            ? "mt-4 text-[14px] text-destructive"
            : "mt-4 text-[14px] text-accent"
        }
      >
        {message}
      </p>
    </form>
  );
}
