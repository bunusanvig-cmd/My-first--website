"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import type { z } from "zod";

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
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
        title: "Message sent",
        description: "Thanks for reaching out. I will get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Message failed",
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" {...register("name")} />
        {errors.name ? <p className="mt-2 text-xs text-rose-300">{errors.name.message}</p> : null}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email ? <p className="mt-2 text-xs text-rose-300">{errors.email.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="9805835865" {...register("phone")} />
          {errors.phone ? <p className="mt-2 text-xs text-rose-300">{errors.phone.message}</p> : null}
        </div>
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="How can we help?" {...register("subject")} />
        {errors.subject ? <p className="mt-2 text-xs text-rose-300">{errors.subject.message}</p> : null}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Tell us about your goals..." {...register("message")} />
        {errors.message ? <p className="mt-2 text-xs text-rose-300">{errors.message.message}</p> : null}
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
