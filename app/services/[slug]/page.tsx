import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
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
import { getServiceBySlug, services } from "@/data/services";

const iconMap = {
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

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Sparkles;
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.16),_transparent_35%),linear-gradient(180deg,rgba(8,15,30,0.92),rgba(2,6,23,0.82))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <div className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl animate-drift" />
        <div className="absolute right-[-4rem] top-72 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl animate-floaty" />
      </div>

      <Section className="pt-14 sm:pt-18 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/85">
              <Icon className="h-4 w-4" />
              Service Detail
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{service.overview}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/book-consultation" variant="primary" className="group shadow-glow">
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button href="/services" variant="secondary">
                Back to Services
              </Button>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Pricing Placeholder</p>
                <div className="mt-3 text-3xl font-semibold text-white">{service.price}</div>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  Final pricing depends on scope, timeline, and support level. A discovery call will confirm the
                  best-fit package.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-100">
                <BrainCircuit className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.benefits.slice(0, 4).map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-[1.25rem] border border-white/10 bg-slate-950/45 p-4 text-sm leading-7 text-white/68"
                >
                  <div className="flex items-center gap-3 text-white">
                    <BadgeCheck className="h-4 w-4 text-cyan-300" />
                    Benefit
                  </div>
                  <p className="mt-3">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Service Overview</p>
            <p className="mt-5 text-sm leading-7 text-white/66">
              {service.overview} The service is structured to support both strategic direction and practical
              implementation so the work moves from idea to execution with fewer gaps.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Problems Solved</p>
            <div className="mt-5 space-y-4">
              {service.problems.map((problem) => (
                <div key={problem} className="flex items-start gap-3 text-sm leading-7 text-white/66">
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Benefits</p>
            <div className="mt-5 space-y-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 text-sm leading-7 text-white/66">
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Process</p>
            <div className="mt-5 space-y-4">
              {service.process.map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs font-semibold text-cyan-100">
                    {index + 1}
                  </div>
                  <div className="pt-1 text-sm leading-7 text-white/66">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Tools Used</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">FAQs</p>
            <div className="mt-5 space-y-4">
              {service.faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.2rem] border border-white/10 bg-slate-950/40 p-4 transition duration-300 open:border-cyan-400/20 open:bg-slate-950/60"
                >
                  <summary className="cursor-pointer list-none text-sm font-medium text-white">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-white/64">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Related Services</p>
            <div className="mt-5 space-y-4">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="flex items-center justify-between gap-4 rounded-[1.2rem] border border-white/10 bg-slate-950/40 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-slate-950/60"
                >
                  <div>
                    <div className="text-sm font-medium text-white">{related.title}</div>
                    <div className="mt-1 text-sm text-white/60">{related.shortTitle}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-cyan-300" />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Consultation CTA</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Want this service shaped around your specific goals?
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/66">
              Book a consultation and we&apos;ll map the scope, the best starting point, and the most effective next
              steps for your brand.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button href="/book-consultation" variant="primary">
                Book Consultation
              </Button>
              <Button href="/services" variant="outline">
                Explore More Services
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.16),_transparent_35%),linear-gradient(135deg,rgba(8,15,30,0.95),rgba(2,6,23,0.9))] p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Final CTA</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to make this service part of a larger growth system?
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/68">
                Let&apos;s map the right starting point, define the scope, and shape a plan that fits your current
                priorities.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Button href="/book-consultation" variant="primary">
                Book Consultation
              </Button>
              <Button href="/services" variant="outline">
                Explore More Services
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
