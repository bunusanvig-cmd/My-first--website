import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Code2,
  Globe2,
  PenTool,
  Search,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the services available from Digital DK.",
};

const serviceHighlights = [
  "AI-led planning",
  "Conversion-minded design",
  "Automation-first systems",
  "Dark premium presentation",
];

const serviceIcons = {
  Sparkles,
  Search,
  Workflow,
  Target,
  PenTool,
  Globe2,
  BrainCircuit,
  Bot,
  Code2,
  BarChart3,
} as const;

export default function ServicesPage() {
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
              Services
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
                Modern services built for AI-aware growth and a premium brand presence.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                Each service is designed to stand on its own or slot into a larger growth system. The focus is
                strategy, execution, and a polished experience that feels clear from the first interaction.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/book-consultation" variant="primary" className="group shadow-glow">
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button href="#service-grid" variant="secondary">
                View Services
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {serviceHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Overview</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                ["10", "Core service offers"],
                ["AI", "Strategy-aware approach"],
                ["UX", "Dark premium layout"],
                ["1", "Reusable system"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.25rem] border border-white/10 bg-slate-950/45 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
                >
                  <div className="text-3xl font-semibold text-white">{value}</div>
                  <div className="mt-2 text-sm leading-6 text-white/62">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="service-grid">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">Service Cards</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ten services ready to preview, compare, and expand into full detail pages.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? Sparkles;

            return (
              <article
                key={service.slug}
                className="group flex h-full flex-col rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-100 transition duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55">
                    {service.shortTitle}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{service.description}</p>
                <p className="mt-4 text-sm leading-7 text-white/58">{service.overview}</p>

                <div className="mt-5 grid gap-3">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 text-sm leading-7 text-white/66">
                      <Target className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.process.slice(0, 3).map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62"
                    >
                      {step}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition group-hover:translate-x-1"
                  >
                    View service details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Button href="/book-consultation" variant="secondary" className="w-full">
                    Book Consultation
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.16),_transparent_35%),linear-gradient(135deg,rgba(8,15,30,0.95),rgba(2,6,23,0.9))] p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Call to Action</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Want help choosing the right service mix for your next phase?
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/68">
                Book a consultation and I&apos;ll help you map the best starting point based on your goals,
                timeline, and current growth stage.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Button href="/book-consultation" variant="primary">
                Book Consultation
              </Button>
              <Button href="/contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
