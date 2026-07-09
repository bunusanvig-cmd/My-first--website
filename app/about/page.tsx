import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  Code2,
  GraduationCap,
  LineChart,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { Timeline } from "@/components/ui/timeline";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Digital DK, the experience behind the brand, and the approach used to build it.",
};

const skills = [
  { label: "AI Marketing Strategy", value: 92 },
  { label: "Brand Positioning", value: 88 },
  { label: "Automation Systems", value: 94 },
  { label: "SEO & Content Direction", value: 90 },
  { label: "Conversion Copywriting", value: 86 },
  { label: "Campaign Planning", value: 89 },
];

const achievements = [
  { value: "28+", label: "projects completed" },
  { value: "18+", label: "brands supported" },
  { value: "40+", label: "automations mapped" },
  { value: "95%", label: "strategy clarity" },
];

const certifications = [
  {
    title: "Google Analytics 4",
    detail: "Measurement foundations, event tracking, and performance analysis.",
  },
  {
    title: "HubSpot Inbound Marketing",
    detail: "Lead nurturing, funnel alignment, and lifecycle marketing principles.",
  },
  {
    title: "Meta Ads Foundations",
    detail: "Audience strategy, creative testing, and campaign optimization.",
  },
  {
    title: "AI Workflow Design",
    detail: "Prompt systems, automation logic, and practical AI-assisted operations.",
  },
];

const toolGroups = [
  {
    icon: BrainCircuit,
    title: "AI and research",
    items: ["ChatGPT", "Claude", "Perplexity", "Notion AI"],
  },
  {
    icon: Workflow,
    title: "Automation and delivery",
    items: ["Zapier", "Make", "Nodemailer", "HubSpot"],
  },
  {
    icon: LineChart,
    title: "Analytics and optimization",
    items: ["GA4", "Search Console", "Looker Studio", "Tag Manager"],
  },
  {
    icon: Code2,
    title: "Build and interface",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

const careerJourney = [
  {
    year: "2021",
    title: "Started with practical consulting",
    description:
      "Built a foundation in clear messaging, digital audits, and growth planning for small teams that needed direction fast.",
  },
  {
    year: "2023",
    title: "Added systems and automation",
    description:
      "Shifted from one-off recommendations to repeatable workflows, improving lead handling, follow-up speed, and execution quality.",
  },
  {
    year: "2025",
    title: "Expanded into AI-assisted marketing",
    description:
      "Integrated AI tools into research, copy, and planning so strategy could move faster without losing quality or control.",
  },
  {
    year: "2026",
    title: "Shaped Digital DK into a premium brand system",
    description:
      "Refined the public brand into a polished consulting presence built around trust, clarity, and conversion-focused design.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.16),_transparent_35%),linear-gradient(180deg,rgba(8,15,30,0.92),rgba(2,6,23,0.82))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <div className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl animate-drift" />
        <div className="absolute right-[-4rem] top-72 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl animate-floaty" />
      </div>

      <Section className="pt-14 sm:pt-18 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/85">
              <Sparkles className="h-4 w-4" />
              About Digital DK
            </div>

            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
                A digital marketer and consultant building AI-ready systems for modern brands.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                {siteConfig.name} combines strategy, design, automation, and content direction to create a polished
                online presence that feels credible, clear, and ready to scale.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Strategy-first consulting",
                "AI-assisted execution",
                "Clear brand positioning",
                "Automation-led workflows",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/72 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-white/[0.06]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/book-consultation" variant="primary" className="group shadow-glow">
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
              <Button href="/digital-dk-resume.pdf" variant="outline">
                Download Resume
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
                <div className="flex justify-center md:justify-start">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/20 blur-xl" />
                    <div className="relative grid h-56 w-56 place-items-center rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.16),_transparent_42%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.96))] text-center">
                      <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-100">
                        <BrainCircuit className="h-10 w-10" />
                      </div>
                      <div className="mt-4 space-y-1">
                        <div className="text-lg font-semibold text-white">Professional Profile</div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">Strategy, systems, and AI</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Biography</p>
                    <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base">
                      Digital DK is shaped around practical marketing execution. The work focuses on helping brands
                      communicate more clearly, use AI with intention, and create a smoother path from first visit to
                      meaningful action. The result is a digital presence that feels premium without becoming
                      complicated.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25">
                      <div className="flex items-center gap-3 text-sm font-medium text-white">
                        <BadgeCheck className="h-4 w-4 text-cyan-300" />
                        Mission
                      </div>
                      <p className="mt-3 text-sm leading-7 text-white/64">
                        Help brands communicate clearly and use intelligent systems to grow with more confidence.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25">
                      <div className="flex items-center gap-3 text-sm font-medium text-white">
                        <BadgeCheck className="h-4 w-4 text-cyan-300" />
                        Vision
                      </div>
                      <p className="mt-3 text-sm leading-7 text-white/64">
                        Build premium digital experiences that feel strategic, modern, and easy to scale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="career">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">Career Journey</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A path shaped by consulting, experimentation, and better systems.
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/68">
              The experience behind Digital DK has moved from practical marketing support into a broader focus on
              strategy, automation, AI-assisted workflows, and conversion-ready digital presence.
            </p>
          </div>

          <Timeline items={careerJourney} />
        </div>
      </Section>

      <Section id="skills">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Core strengths across strategy, execution, and system design.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-medium text-white">{skill.label}</div>
                <div className="text-sm text-cyan-100">{skill.value}%</div>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 transition-all duration-700"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="tools">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">AI & Marketing Tools</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The stack that supports the strategy and the delivery.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {toolGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-xs text-white/62"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section id="certifications">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">Certifications</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Selected training and professional learning.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-100">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/62">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="achievements">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">Achievements</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Selected outcomes and areas of impact.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.06]"
            >
              <div className="text-3xl font-semibold text-white">{item.value}</div>
              <div className="mt-2 text-sm leading-7 text-white/60">{item.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.16),_transparent_35%),linear-gradient(135deg,rgba(8,15,30,0.95),rgba(2,6,23,0.9))] p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Professional CTA</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to talk about strategy, automation, or a stronger digital presence?
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/68">
                If you want a clearer brand, a better workflow, or a more premium online presence, the next step is a
                focused conversation.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button href="/book-consultation" variant="primary">
                  Book Consultation
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact
                </Button>
                <Button href="/digital-dk-resume.pdf" variant="outline">
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-3 text-sm font-medium text-white">
                <Award className="h-4 w-4 text-cyan-300" />
                What you can expect
              </div>
              <div className="mt-4 space-y-3">
                {[
                  "Clear recommendations, not vague advice",
                  "Systems that reduce manual work",
                  "Messaging that supports trust and conversion",
                  "A premium finish that feels consistent across pages",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-white/66">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-cyan-100/85">
                <LineChart className="h-4 w-4" />
                Built for a responsive, dark-first experience.
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
