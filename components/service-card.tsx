import Link from "next/link";
import { ArrowRight, Globe2, PenTool, Rocket, Search, Sparkles, Target, Workflow } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap = {
  Sparkles,
  Search,
  Rocket,
  Workflow,
  Target,
  PenTool,
  Globe2,
} as const;

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Sparkles;

  return (
    <article className="group flex h-full flex-col rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]">
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

      <div className="mt-5 flex flex-wrap gap-2">
        {service.tools.slice(0, 3).map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition group-hover:translate-x-0.5"
        >
          Explore service
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
