import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Sparkles } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-100 transition duration-300 group-hover:scale-105">
          <BriefcaseBusiness className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55">
          {project.category}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/62">{project.description}</p>

      <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-slate-950/45 p-4">
        <div className="flex items-center gap-3 text-sm font-medium text-white">
          <Sparkles className="h-4 w-4 text-cyan-300" />
          Outcome
        </div>
        <p className="mt-3 text-sm leading-7 text-white/66">{project.results}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technology.map((tool) => (
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
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition group-hover:translate-x-0.5"
        >
          View case study
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
