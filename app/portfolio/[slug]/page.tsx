import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, BrainCircuit, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { getProjectBySlug, portfolio } from "@/data/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolio.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

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
              <Sparkles className="h-4 w-4" />
              Case Study
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{project.description}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/portfolio" variant="secondary">
                Back to Portfolio
              </Button>
              <Button href="/book-consultation" variant="primary" className="group shadow-glow">
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Result</p>
                <div className="mt-3 text-3xl font-semibold text-white">{project.results}</div>
              </div>
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-100">
                <BrainCircuit className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {project.metrics.map((metric) => (
                <div key={metric} className="rounded-[1.25rem] border border-white/10 bg-slate-950/45 p-4 text-sm text-white/68">
                  <div className="flex items-center gap-3 text-white">
                    <BadgeCheck className="h-4 w-4 text-cyan-300" />
                    Key Metric
                  </div>
                  <p className="mt-3">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Challenge</p>
            <p className="mt-4 text-sm leading-7 text-white/68">{project.challenge}</p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Solution</p>
            <p className="mt-4 text-sm leading-7 text-white/68">{project.solution}</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Stack</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.technology.map((tool) => (
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
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Testimonial</p>
            <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-slate-950/45 p-5">
              <div className="flex items-center gap-3 text-sm font-medium text-white">
                <Workflow className="h-4 w-4 text-cyan-300" />
                Client feedback
              </div>
              <p className="mt-4 text-sm leading-7 text-white/68">“{project.testimonial}”</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.16),_transparent_35%),linear-gradient(135deg,rgba(8,15,30,0.95),rgba(2,6,23,0.9))] p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Call to Action</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Want a similar case study built around your brand?
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/68">
                Start with a consultation and we&apos;ll define the clearest way to turn your next project into a
                stronger result.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Button href="/book-consultation" variant="primary">
                Book Consultation
              </Button>
              <Button href="/portfolio" variant="outline">
                View More Work
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
