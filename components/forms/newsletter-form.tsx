"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "@/lib/validation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import type { z } from "zod";

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (values: NewsletterValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error ?? "Something went wrong");
      }

      reset();
      toast({
        title: "You're subscribed",
        description: "You will receive the latest insights and updates.",
      });
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={compact ? "flex flex-col gap-3 sm:flex-row" : "grid gap-3 sm:grid-cols-[1fr_auto]"}
    >
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />
      <div className="flex-1">
        <Input type="email" placeholder="Enter your email" {...register("email")} />
        {errors.email ? <p className="mt-2 text-xs text-rose-300">{errors.email.message}</p> : null}
      </div>
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Joining..." : "Join Newsletter"}
      </Button>
    </form>
  );
}
