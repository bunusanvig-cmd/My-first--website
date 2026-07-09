import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/button";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Section } from "@/components/section";
import { portfolio, portfolioCategories } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore selected projects and case studies from Digital DK.",
};

export default function PortfolioPage() {
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
              Portfolio
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
                Selected projects showing strategy, execution, and measurable outcomes.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                Browse the grid, filter by category, and open each case study to see the challenge, approach, and
                result behind the work.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/book-consultation" variant="primary" className="group shadow-glow">
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button href="#portfolio-grid" variant="secondary">
                View Projects
              </Button>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">At a glance</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[ 
                ["4", "Featured projects"],
                ["4", "Primary categories"],
                ["1", "Case study system"],
                ["100%", "Dark presentation"],
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

      <Section id="portfolio-grid">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">Project Cards</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Filter projects by category and explore the work in detail.
          </h2>
        </div>

        <PortfolioGrid projects={portfolio} categories={portfolioCategories} />
      </Section>
    </div>
  );
}
