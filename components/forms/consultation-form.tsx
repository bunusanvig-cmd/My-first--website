"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/button";

const consultationSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  company: z.string().min(2, "Please enter your company or brand."),
  businessGoal: z.string().min(3, "Please share your business goal."),
  preferredDate: z.string().min(1, "Please choose a preferred date."),
  preferredTime: z.string().min(1, "Please choose a preferred time."),
  budget: z.string().min(2, "Please share your budget range."),
  message: z.string().min(20, "Please share a little more detail."),
});

type ConsultationValues = z.infer<typeof consultationSchema>;

const fieldClassName =
  "w-full rounded-[1.2rem] border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-400/30 focus:bg-slate-950/70 focus:ring-2 focus:ring-cyan-300/20";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      businessGoal: "",
      preferredDate: "",
      preferredTime: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: ConsultationValues) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to submit your request.");
      }

      reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Please try again.");
    }
  };

  const onInvalid = () => {
    setSubmitted(false);
    setSubmitError(null);
  };

  if (submitted) {
    return (
      <div className="grid min-h-[420px] place-items-center rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.14),_rgba(15,23,42,0.92))] p-8 text-center">
        <div className="max-w-md">
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-100/70">Success</div>
          <h3 className="mt-4 text-3xl font-semibold text-white">Your consultation request is in.</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Thanks for sharing the details. We&apos;ll review everything and follow up with the next steps.
          </p>
          <div className="mt-8">
            <Button href="/services" variant="secondary">
              View Services
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="grid gap-5">
      {submitError ? (
        <div className="rounded-[1.1rem] border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
          {submitError}
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message} {...register("name")} placeholder="Your name" />
        <Field
          label="Email"
          error={errors.email?.message}
          {...register("email")}
          placeholder="you@example.com"
          type="email"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message} {...register("phone")} placeholder="Phone number" />
        <Field label="Company" error={errors.company?.message} {...register("company")} placeholder="Company or brand" />
      </div>

      <Field
        label="Business Goal"
        error={errors.businessGoal?.message}
        {...register("businessGoal")}
        placeholder="What do you want to achieve?"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Preferred Date"
          error={errors.preferredDate?.message}
          {...register("preferredDate")}
          type="date"
        />
        <Field
          label="Preferred Time"
          error={errors.preferredTime?.message}
          {...register("preferredTime")}
          type="time"
        />
      </div>

      <Field label="Budget" error={errors.budget?.message} {...register("budget")} placeholder="e.g. $1,000 - $5,000" />

      <Field
        label="Message"
        error={errors.message?.message}
        {...register("message")}
        placeholder="Tell me more about your goals, timeline, and any details I should know."
        multiline
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.24em] text-white/45">
          Your request will be sent straight to the inbox for review.
        </p>
        <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Book Consultation"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  multiline,
  placeholder,
  type,
  ...props
}: {
  label: string;
  error?: string;
  multiline?: boolean;
  placeholder: string;
  type?: string;
} & UseFormRegisterReturn) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-white">{label}</span>
      {multiline ? (
        <textarea {...props} placeholder={placeholder} rows={6} className={fieldClassName} />
      ) : (
        <input {...props} type={type} placeholder={placeholder} className={fieldClassName} />
      )}
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
    </label>
  );
}
