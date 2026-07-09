import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/content/animated-counter";
import { ArrowRight, BarChart3, BrainCircuit, Sparkles, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(108,99,255,0.24),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(0,245,255,0.16),_transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.98))]" />
      <div className="absolute inset-0 bg-ai-grid bg-[size:72px_72px] opacity-[0.08]" />
      <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-drift" />
      <div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl animate-floaty" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <Badge className="mb-6">AI Marketing Expert & Consultant</Badge>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build a premium growth engine with AI, automation, and strategic marketing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Helping businesses grow faster with AI automation, digital marketing, and intelligent growth strategies.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/book-consultation">
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="secondary">
              View Services
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Card>
              <div className="flex items-center gap-3 text-cyan-100">
                <BrainCircuit className="h-5 w-5" />
                <span className="text-sm font-medium">AI Systems</span>
              </div>
              <div className="mt-4 text-3xl font-semibold text-white">
                <AnimatedCounter value={40} suffix="+" />
              </div>
              <p className="mt-2 text-sm text-white/65">workflows simplified</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 text-cyan-100">
                <BarChart3 className="h-5 w-5" />
                <span className="text-sm font-medium">Growth</span>
              </div>
              <div className="mt-4 text-3xl font-semibold text-white">
                <AnimatedCounter value={95} suffix="%" />
              </div>
              <p className="mt-2 text-sm text-white/65">focus on measurable outcomes</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 text-cyan-100">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-medium">Speed</span>
              </div>
              <div className="mt-4 text-3xl font-semibold text-white">
                <AnimatedCounter value={3} suffix="x" />
              </div>
              <p className="mt-2 text-sm text-white/65">faster launch cycles</p>
            </Card>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
          <Card className="relative overflow-hidden p-0">
            <div className="bg-[radial-gradient(circle_at_top_right,_rgba(0,245,255,0.22),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.9),rgba(15,23,42,0.65))] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.32em] text-white/45">Digital DK</div>
                  <div className="mt-2 text-2xl font-semibold text-white">AI Growth Command Center</div>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-100">
                  <Sparkles className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Projects", value: "28+" },
                  { label: "Clients served", value: "18+" },
                  { label: "Lead uplift", value: "31%" },
                  { label: "Automation wins", value: "42" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs uppercase tracking-[0.26em] text-white/40">{item.label}</div>
                    <div className="mt-3 text-3xl font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span>Live campaign health</span>
                  <span className="text-cyan-100">98%</span>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
