import Link from "next/link";
import { ArrowRight, Sparkles, Search, Workflow, Target, PenTool, BrainCircuit, Bot, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Service } from "@/data/services";

const iconMap = {
  Sparkles,
  Search,
  Workflow,
  Target,
  PenTool,
  BrainCircuit,
  Bot,
  Code2,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Sparkles;

  return (
    <Card className="group flex h-full flex-col justify-between transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-glow">
      <div>
        <div className="flex items-center justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-100">
            <Icon className="h-5 w-5" />
          </div>
          <Badge>{service.shortTitle}</Badge>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/68">{service.description}</p>
        <p className="mt-4 text-sm leading-7 text-white/58">{service.overview}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.benefits.slice(0, 2).map((benefit) => (
            <span
              key={benefit}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62"
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition group-hover:translate-x-1"
        >
          Explore service
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/book-consultation"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
        >
          Book consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
