"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { newsletter } from "@/data/footerLinks";

const schema = z.object({
  email: z.email(newsletter.error),
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
  const message = errors.email?.message ?? (subscribed ? newsletter.success : "");

  return (
    <form
      noValidate
      onSubmit={handleSubmit(() => {
        setSubscribed(true);
        reset();
      })}
    >
      <div className="flex flex-wrap items-center gap-3">
        <Label htmlFor="newsletter-email" className="sr-only">
          {newsletter.label}
        </Label>

        <Input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder={newsletter.placeholder}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby="newsletter-status"
          className="h-11 w-full max-w-[260px] rounded-control border border-line-strong bg-surface px-4 text-[15px] text-ink placeholder:text-muted"
          {...email}
          onChange={(event) => {
            setSubscribed(false);
            return email.onChange(event);
          }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-11 rounded-control px-5 text-[15px] font-semibold transition-transform duration-300 ease-out-soft hover:-translate-y-0.5"
        >
          {newsletter.submit}
        </Button>
      </div>

      <p
        id="newsletter-status"
        role="status"
        className={
          errors.email
            ? "mt-3 text-[13.5px] text-destructive"
            : "mt-3 text-[13.5px] text-accent"
        }
      >
        {message}
      </p>
    </form>
  );
}
