import type { Metadata } from "next";
import { ArrowRight, CalendarDays, Clock3, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Digital DK for consulting, strategy, and digital support.",
};

const contactDetails = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: "#",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.16),_transparent_35%),linear-gradient(180deg,rgba(8,15,30,0.92),rgba(2,6,23,0.82))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <div className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl animate-drift" />
        <div className="absolute right-[-4rem] top-72 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl animate-floaty" />
      </div>

      <Section className="pt-14 sm:pt-18 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/85">
              <Sparkles className="h-4 w-4" />
              Contact
            </div>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
                Start a conversation about your next digital move.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                Reach out for consulting, strategy support, or a fresh direction for your brand. This page is set
                up with validation and a submit flow that sends the request straight to Gmail.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/services" variant="secondary">
                View Services
              </Button>
              <Button href="/book-consultation" variant="primary" className="group shadow-glow">
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Contact details</p>
            <div className="mt-5 space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 rounded-[1.25rem] border border-white/10 bg-slate-950/45 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
                  >
                    <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.label}</div>
                      <div className="mt-1 text-sm leading-7 text-white/62">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { icon: CalendarDays, label: "Response window", value: "1-2 business days" },
                { icon: Clock3, label: "Best time", value: "Mon-Fri, 9 AM - 6 PM" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-slate-950/45 p-4">
                    <div className="flex items-center gap-3 text-sm font-medium text-white">
                      <Icon className="h-4 w-4 text-cyan-300" />
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm text-white/62">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Map placeholder</p>
              <div className="mt-5 grid min-h-[22rem] place-items-center rounded-[1.4rem] border border-dashed border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.12),_transparent_40%),linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,0.95))] p-6 text-center">
                <div className="space-y-3">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-100">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">Interactive map placeholder</h2>
                  <p className="max-w-md text-sm leading-7 text-white/62">
                    Reserve this area for a map embed, studio location, or service area visualization later.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">What to include</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-white/66">
                <p>Consulting inquiries</p>
                <p>Service questions</p>
                <p>Project scope discussions</p>
                <p>General brand or digital strategy guidance</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Contact form</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Send a message</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/64">
              The form includes validation, real email delivery, and success feedback after the message is sent.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
