"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { Button } from "@/components/button";
import { contactSchema } from "@/lib/validation";
import type { z } from "zod";

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to send your message.");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setSubmitted(false);
      setSubmitError(error instanceof Error ? error.message : "Please try again.");
    }
  };

  const onInvalid = () => {
    setSubmitted(false);
    setSubmitError(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Your name"
          error={errors.name?.message}
          inputProps={register("name")}
          placeholder="Enter your name"
        />
        <Field
          label="Email address"
          error={errors.email?.message}
          inputProps={register("email")}
          placeholder="Enter your email"
          type="email"
        />
      </div>
      <Field
        label="Phone number"
        error={errors.phone?.message}
        inputProps={register("phone")}
        placeholder="Enter your phone number"
      />
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />

      <Field
        label="Subject"
        error={errors.subject?.message}
        inputProps={register("subject")}
        placeholder="What would you like to discuss?"
      />

      <Field
        label="Message"
        error={errors.message?.message}
        inputProps={register("message")}
        placeholder="Tell me a little more about your goals, timeline, or current challenge."
        multiline
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.24em] text-white/45">Messages are sent directly through Gmail.</p>
        <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>

      {submitError ? (
        <div className="rounded-[1.25rem] border border-rose-400/20 bg-rose-400/10 p-4 text-sm leading-7 text-rose-50">
          {submitError}
        </div>
      ) : null}

      {submitted ? (
        <div className="rounded-[1.25rem] border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
          Thanks. Your message was sent and I&apos;ll get back to you soon.
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  inputProps,
  placeholder,
  multiline,
  type = "text",
}: {
  label: string;
  error?: string;
  inputProps: UseFormRegisterReturn;
  placeholder: string;
  multiline?: boolean;
  type?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-white">{label}</span>
      {multiline ? (
        <textarea
          {...inputProps}
          rows={6}
          placeholder={placeholder}
          className="w-full rounded-[1.2rem] border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-400/30 focus:bg-slate-950/70 focus:ring-2 focus:ring-cyan-300/20"
        />
      ) : (
        <input
          {...inputProps}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-[1.2rem] border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-400/30 focus:bg-slate-950/70 focus:ring-2 focus:ring-cyan-300/20"
        />
      )}
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
    </label>
  );
}
