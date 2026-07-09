import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({
  project,
}: {
  project: {
    title: string;
    category: string;
    description: string;
    results: string;
    technology: string[];
    testimonial: string;
  };
}) {
  return (
    <Card className="group h-full transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="aspect-[16/10] rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.2),_rgba(17,24,39,0.95)_60%)] p-5">
        <div className="flex h-full flex-col justify-between">
          <Badge>{project.category}</Badge>
          <div className="grid gap-2">
            <div className="text-xs uppercase tracking-[0.28em] text-white/45">Image placeholder</div>
            <div className="text-lg font-semibold text-white">{project.title}</div>
          </div>
        </div>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/68">{project.description}</p>
      <div className="mt-5 text-sm font-medium text-cyan-100">{project.results}</div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technology.map((tool) => (
          <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
            {tool}
          </span>
        ))}
      </div>
      <blockquote className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/70">
        "{project.testimonial}"
      </blockquote>
    </Card>
  );
}

