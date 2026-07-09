export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  results: string;
  challenge: string;
  solution: string;
  technology: string[];
  testimonial: string;
  metrics: string[];
};

export const portfolio = [
  {
    slug: "ai-growth-blueprint-saas-launch",
    title: "AI Growth Blueprint for a SaaS Launch",
    category: "AI Strategy",
    description: "Repositioned the offer, redesigned the funnel, and built an automation-first launch plan.",
    results: "42% higher qualified leads in the first 60 days",
    challenge: "The launch lacked a clear differentiation point and the funnel was too manual to scale efficiently.",
    solution:
      "We clarified the value proposition, mapped a lean launch workflow, and added automation to reduce response delays.",
    technology: ["Next.js", "GA4", "HubSpot", "Zapier"],
    testimonial:
      "The clarity and structure were exactly what we needed to move faster without losing quality.",
    metrics: ["42% higher qualified leads", "Faster follow-up cycles", "Stronger offer clarity"],
  },
  {
    slug: "seo-revamp-local-service-brand",
    title: "SEO Revamp for a Local Service Brand",
    category: "SEO",
    description: "Improved local visibility through content mapping, technical cleanup, and intent-led pages.",
    results: "Top 3 rankings for several high-intent keywords",
    challenge: "The site had technical issues and the content lacked a clear keyword and intent structure.",
    solution:
      "We reorganized the information architecture, optimized key pages, and built a more focused local search strategy.",
    technology: ["Search Console", "Ahrefs", "Next.js"],
    testimonial:
      "We finally had a search strategy that felt practical, measurable, and easy to execute.",
    metrics: ["Top 3 keyword rankings", "Cleaner site structure", "Higher intent traffic"],
  },
  {
    slug: "performance-campaign-system-coaching-brand",
    title: "Performance Campaign System for a Coaching Brand",
    category: "Performance Marketing",
    description: "Created testing frameworks and landing page variants to improve lead conversion efficiency.",
    results: "31% reduction in cost per lead",
    challenge: "Ad spend was being used without a consistent testing framework or strong landing page alignment.",
    solution:
      "We introduced a clear offer test plan, campaign structure, and landing page variants to improve conversion efficiency.",
    technology: ["Meta Ads", "Google Ads", "Analytics"],
    testimonial:
      "A disciplined system replaced guesswork, and the results became easier to scale.",
    metrics: ["31% lower cost per lead", "Better campaign visibility", "More efficient budget use"],
  },
  {
    slug: "automation-engine-lead-gen-funnel",
    title: "Automation Engine for a Lead Gen Funnel",
    category: "Automation",
    description: "Connected form submissions, follow-up sequences, and task routing across the sales team.",
    results: "Response time reduced from hours to minutes",
    challenge: "Leads were being handled manually, which caused slower response times and inconsistent follow-up.",
    solution:
      "We connected the lead capture flow to automated routing and follow-up so the team could respond much faster.",
    technology: ["Zapier", "Make", "Nodemailer"],
    testimonial:
      "This removed a huge amount of manual work from our process and made our team more responsive.",
    metrics: ["Minutes instead of hours", "Less manual work", "Better lead handling"],
  },
];

export function getProjectBySlug(slug: string) {
  return portfolio.find((project) => project.slug === slug);
}

export const portfolioCategories = ["All", ...Array.from(new Set(portfolio.map((project) => project.category)))];
