import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Globe2,
  LayoutGrid,
  PenTool,
  Sparkles,
  Star,
  ThumbsUp,
  Target,
  Workflow,
  Zap,
} from "lucide-react";
import { AnimatedCounter } from "@/components/content/animated-counter";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { blogPosts } from "@/data/blog";
import { faqs } from "@/data/faqs";
import { portfolio } from "@/data/portfolio";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site";

const serviceIcons = {
  "ai-marketing-strategy": Sparkles,
  "seo-optimization": Globe2,
  "marketing-automation": Workflow,
  "prompt-engineering": BrainCircuit,
  "ai-consulting": Code2,
  "chatbot-development": Bot,
  "content-marketing": PenTool,
  "email-marketing": Workflow,
  "social-media-marketing": Sparkles,
  "lead-generation": Target,
} as const;

const highlights = [
  "Strategy-first thinking",
  "AI-assisted execution",
  "Premium dark aesthetic",
  "Built for clarity and speed",
];

const heroSignals = [
  "Sharper positioning",
  "Better lead quality",
  "Cleaner automation",
  "Conversion-focused design",
];

const statCards = [
  {
    value: 28,
    suffix: "+",
    label: "Growth systems mapped",
    description: "Research, messaging, automation, and conversion flows shaped into one plan.",
  },
  {
    value: 18,
    suffix: "+",
    label: "Brands supported",
    description: "Founder-led teams, service businesses, and lean marketing squads.",
  },
  {
    value: 42,
    suffix: "%",
    label: "Lift in qualified leads",
    description: "Recent funnel improvements and campaign refinements across projects.",
  },
  {
    value: 4,
    suffix: "",
    label: "Core disciplines",
    description: "Strategy, SEO, automation, and content working as a single system.",
  },
];

const aiToolStacks = [
  {
    icon: BrainCircuit,
    title: "AI research and copy",
    description: "Prompting, ideation, and messaging tools that speed up strategic work.",
    tools: ["ChatGPT", "Claude", "Perplexity", "Notion AI"],
  },
  {
    icon: Workflow,
    title: "Automation and handoff",
    description: "Flow-based systems for lead capture, routing, and follow-up.",
    tools: ["Zapier", "Make", "Nodemailer", "HubSpot"],
  },
  {
    icon: BarChart3,
    title: "Analytics and insight",
    description: "Measurement and reporting that keep decisions grounded in data.",
    tools: ["GA4", "Search Console", "Looker Studio", "Tag Manager"],
  },
  {
    icon: LayoutGrid,
    title: "Build and design",
    description: "The implementation stack behind the polished site and landing pages.",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
  },
];

const featuredPosts = [...blogPosts.filter((post) => post.featured), ...blogPosts.filter((post) => !post.featured)].slice(
  0,
  3
);

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.22),_transparent_38%),radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.08),_transparent_30%),linear-gradient(180deg,rgba(8,15,30,0.92),rgba(2,6,23,0.84))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <div className="absolute left-[-8rem] top-28 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl animate-drift" />
        <div className="absolute right-[-6rem] top-64 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl animate-floaty" />
      </div>

      <Section className="relative overflow-hidden pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/90">
              <Sparkles className="h-4 w-4" />
              AI-powered digital consulting
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-7xl">
                AI marketing systems for brands that want sharper growth and less friction.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                {siteConfig.name} helps founders and service brands turn strategy into momentum with positioning,
                automation, search, and conversion-focused execution that feels premium from the first click.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/book-consultation" variant="primary" className="group shadow-glow">
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button href="/services" variant="secondary" className="group">
                View Services
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </Button>
              <Button href="/portfolio" variant="outline" className="group">
                See Portfolio
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/72 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-white/[0.06]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/60">Digital DK system</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Modern marketing command center</h2>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-100">
                  <BrainCircuit className="h-6 w-6" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {heroSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-2xl border border-white/10 bg-slate-950/45 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-3 text-sm font-medium text-white/85">
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                      {signal}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/60">
                      Built to improve how the brand is understood, discovered, and converted.
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/55 p-5">
                <div className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <BadgeCheck className="h-4 w-4 text-cyan-300" />
                  A clean launch point for a premium growth brand
                </div>
                <div className="mt-4 space-y-3">
                  {["Consulting-first UX", "Responsive layouts", "Reusable components"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/64">
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="about" className="pt-4">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">About Preview</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built for founders who want one clear growth system, not five disconnected tactics.
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/68">
              This homepage is designed as a polished starting point for a consulting brand. The focus is clarity,
              trust, and a premium visual system that can expand into service pages, case studies, and blog content.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Consulting", "Automation", "Growth", "Brand systems"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: BriefcaseBusiness,
                title: "Business clarity",
                text: "A digital foundation that helps visitors understand the offer in seconds.",
              },
              {
                icon: Zap,
                title: "Fast presentation",
                text: "Strong hierarchy and lightweight components keep the experience responsive and sharp.",
              },
              {
                icon: LayoutGrid,
                title: "Reusable structure",
                text: "The layout is ready to scale into service, blog, and conversion pages later.",
              },
              {
                icon: ThumbsUp,
                title: "Trust-led design",
                text: "Testimonials, FAQs, and service previews support credibility without clutter.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]"
                >
                  <div className="inline-flex rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-100 transition duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/60">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section id="stats">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Statistics</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Measured results that make the strategy feel real.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/62">
            These numbers highlight the kind of momentum the brand is built to support across positioning,
            automation, and conversion work.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-4xl font-semibold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-100">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{stat.label}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{stat.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="services">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Services Preview</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ten focused ways to support modern growth.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <p className="max-w-2xl text-sm leading-7 text-white/62">
              A concise service grid keeps the homepage informative while still giving each offer room to breathe.
            </p>
            <Button href="/services" variant="secondary" className="sm:self-start">
              View All Services
            </Button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];

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
                    {service.price}
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
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition hover:text-cyan-50"
                  >
                    Explore service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="ai-tools">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">AI Tools</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The stack behind the strategy.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/62">
            A practical blend of AI, analytics, automation, and build tools keeps the workflow fast and the output
            consistent.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {aiToolStacks.map((stack) => {
            const Icon = stack.icon;

            return (
              <div
                key={stack.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{stack.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/62">{stack.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {stack.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-xs text-white/62"
                        >
                          {tool}
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

      <Section id="portfolio">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Portfolio Preview</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Recent examples of strategic, measurable work.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <p className="max-w-2xl text-sm leading-7 text-white/62">
              Featured case studies show how positioning, automation, and conversion thinking work together in a
              premium delivery system.
            </p>
            <Button href="/portfolio" variant="secondary" className="sm:self-start">
              View All Projects
            </Button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {portfolio.slice(0, 3).map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-100/75">
                  {project.category}
                </span>
                <div className="rounded-full border border-white/10 bg-slate-950/50 p-2 text-white/55 transition duration-300 group-hover:text-cyan-100">
                  <BriefcaseBusiness className="h-4 w-4" />
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{project.description}</p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Outcome</p>
                <p className="mt-2 text-sm leading-7 text-white/78">{project.results}</p>
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
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition hover:text-cyan-50"
                >
                  View case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="testimonials">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Trust signals from recent collaborations.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]"
            >
              <div className="flex gap-1 text-cyan-300">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={`${item.name}-${index}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-7 text-white/72">"{item.review}"</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <div className="font-medium text-white">{item.name}</div>
                <div className="text-sm text-white/52">{item.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="blog">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Blog Preview</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Practical thinking for AI, growth, and premium positioning.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <p className="max-w-2xl text-sm leading-7 text-white/62">
              The latest articles keep the brand voice sharp while giving visitors something useful to take away.
            </p>
            <Button href="/blog" variant="secondary" className="sm:self-start">
              Read the Blog
            </Button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <Section id="faq">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A few quick answers before we move forward.
          </h2>
        </div>

        <div className="grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5 transition duration-300 open:border-cyan-400/25 open:bg-white/[0.07]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-medium text-white">
                <span>{item.question}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-white/45 transition duration-300 group-open:rotate-180 group-open:text-cyan-100" />
              </summary>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-white/66">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.16),_transparent_35%),linear-gradient(135deg,rgba(8,15,30,0.95),rgba(2,6,23,0.9))] p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Final CTA</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to shape a cleaner, more confident digital presence?
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/68">
                If you want stronger positioning, better lead flow, and a cleaner system, the next step starts with a
                short conversation.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Button href="/book-consultation" variant="primary">
                Book Consultation
              </Button>
              <Button href="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
