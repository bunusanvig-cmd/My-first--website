import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Phone is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message should be a little longer"),
  honeypot: z.string().max(0).default(""),
});

export const consultationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Phone is required"),
  company: z.string().min(2, "Company is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  businessGoal: z.string().min(8, "Please add your business goal"),
  budget: z.string().min(1, "Please share your budget"),
  message: z.string().min(10, "Message should be a little longer"),
  honeypot: z.string().max(0).default(""),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  honeypot: z.string().max(0).default(""),
});
