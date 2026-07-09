export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  overview: string;
  problems: string[];
  benefits: string[];
  process: string[];
  tools: string[];
  faqs: { question: string; answer: string }[];
  price: string;
};

export const services: Service[] = [
  {
    slug: "ai-marketing-strategy",
    title: "AI Marketing Strategy",
    shortTitle: "AI Strategy",
    description: "Build a growth roadmap powered by data, automation, and sharper decision-making.",
    icon: "Sparkles",
    overview:
      "We map the full customer journey, identify high-leverage opportunities, and design an AI-assisted growth system that aligns marketing, sales, and operations.",
    problems: [
      "Teams that are unsure where AI adds real value",
      "Marketing plans that are too reactive and disconnected",
      "Slow decision-making across sales and operations",
      "Wasted time on low-impact experiments",
    ],
    benefits: [
      "Clear growth priorities",
      "Faster experiment cycles",
      "Better conversion paths",
      "Lower acquisition waste",
    ],
    process: [
      "Discovery and audit",
      "Funnel and channel analysis",
      "Strategy sprint",
      "Implementation roadmap",
    ],
    tools: ["ChatGPT", "GA4", "HubSpot", "Looker Studio"],
    faqs: [
      {
        question: "Who is this best for?",
        answer: "Businesses that want a practical plan for using AI to improve acquisition, conversion, and retention.",
      },
      {
        question: "Do you also help implement?",
        answer: "Yes. The strategy is built to be implementation-ready, with priorities and workflows your team can action.",
      },
    ],
    price: "Starting at $750",
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    shortTitle: "SEO",
    description: "Increase visibility with technical, content, and AI-enhanced search optimization.",
    icon: "Search",
    overview:
      "We refine site architecture, content intent, and technical SEO so your brand ranks for the queries that matter most.",
    problems: [
      "Weak organic visibility for important search terms",
      "Pages that do not match search intent",
      "Technical issues that slow indexing and performance",
      "Content that lacks structure and authority",
    ],
    benefits: ["Higher organic visibility", "Stronger topical authority", "Better page speed", "More qualified traffic"],
    process: ["Audit", "Keyword mapping", "Content optimization", "Link and technical fixes"],
    tools: ["Search Console", "Ahrefs", "Screaming Frog", "Next.js"],
    faqs: [
      {
        question: "Can this work for local businesses?",
        answer: "Yes. We can shape the strategy around local, regional, or global search goals.",
      },
      {
        question: "How long until results appear?",
        answer: "Many improvements start compounding within weeks, with stronger movement over 2 to 4 months.",
      },
    ],
    price: "Starting at $600",
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    shortTitle: "Automation",
    description: "Remove manual work and create reliable lifecycle journeys that convert more leads.",
    icon: "Workflow",
    overview:
      "From lead capture to follow-up and retention, we design automation flows that keep momentum moving without extra overhead.",
    problems: [
      "Manual follow-up that slows lead response",
      "Repetitive tasks that waste team time",
      "Missed opportunities because systems do not connect",
      "Inconsistent customer journeys across channels",
    ],
    benefits: ["Less repetitive work", "Faster lead response", "More consistent follow-up", "Stronger retention"],
    process: ["Journey mapping", "Trigger design", "Copy and build", "QA and monitoring"],
    tools: ["Zapier", "Make", "HubSpot", "Nodemailer"],
    faqs: [
      {
        question: "Is automation only for big teams?",
        answer: "Not at all. Small teams often see the biggest benefit because they save so much time.",
      },
      {
        question: "Can you connect multiple tools?",
        answer: "Yes. We can design flows that connect forms, CRMs, email tools, and internal systems.",
      },
    ],
    price: "Starting at $800",
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    shortTitle: "Prompts",
    description: "Design reusable prompts and workflows that make AI output more reliable and on-brand.",
    icon: "BrainCircuit",
    overview:
      "We build prompt frameworks for research, copy, planning, and operational support so AI becomes a dependable part of the workflow.",
    problems: [
      "Inconsistent AI outputs across the team",
      "Prompts that are not reusable or documented",
      "Time lost rewriting the same instructions",
      "AI content that does not sound on-brand",
    ],
    benefits: ["More consistent outputs", "Faster content creation", "Better AI governance", "Reusable prompt systems"],
    process: ["Use-case mapping", "Prompt design", "Testing and refinement", "Documentation"],
    tools: ["ChatGPT", "Claude", "Perplexity", "Notion"],
    faqs: [
      {
        question: "What does prompt engineering improve?",
        answer: "It improves consistency, accuracy, and the usefulness of AI-assisted tasks across the team.",
      },
      {
        question: "Can prompts be shared across a team?",
        answer: "Yes. We can document them so they are easy to reuse and scale across common use cases.",
      },
    ],
    price: "Starting at $650",
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    shortTitle: "AI Consulting",
    description: "Get practical guidance on where and how AI can support marketing and operations.",
    icon: "Code2",
    overview:
      "We identify the best opportunities for AI adoption and turn them into a practical, low-friction plan your team can actually use.",
    problems: [
      "No clear AI adoption plan",
      "Tool overload and decision fatigue",
      "Pilot projects that never turn into systems",
      "Teams unsure how to operationalize AI",
    ],
    benefits: ["Clear AI roadmap", "Lower experimentation waste", "Better tool selection", "Faster adoption"],
    process: ["Discovery call", "AI opportunity audit", "Use-case prioritization", "Implementation guidance"],
    tools: ["ChatGPT", "Claude", "GA4", "Notion"],
    faqs: [
      {
        question: "Is this a strategy-only service?",
        answer: "It can be advisory, hands-on, or a mix of both depending on what your team needs.",
      },
      {
        question: "Do you help choose tools too?",
        answer: "Yes. Part of the work is matching the right tools to the right use case.",
      },
    ],
    price: "Starting at $700",
  },
  {
    slug: "chatbot-development",
    title: "Chatbot Development",
    shortTitle: "Chatbots",
    description: "Build helpful AI chat experiences that answer questions and support conversion.",
    icon: "Bot",
    overview:
      "We design conversational assistants that guide users, reduce support friction, and move people toward the next step.",
    problems: [
      "Slow responses to common questions",
      "Support teams handling repetitive inquiries",
      "Website visitors who need guidance before converting",
      "Missed leads outside business hours",
    ],
    benefits: ["24/7 assistance", "Faster responses", "Better lead capture", "Improved user experience"],
    process: ["Conversation mapping", "Script design", "Build and test", "Launch and refine"],
    tools: ["ChatGPT", "Nodemailer", "Next.js", "Forms"],
    faqs: [
      {
        question: "Can the chatbot handle lead capture?",
        answer: "Yes. It can route qualified users into your contact or consultation flow.",
      },
      {
        question: "Can it be trained on my content?",
        answer: "We can shape the bot around your site content, FAQs, and desired brand tone.",
      },
    ],
    price: "Starting at $900",
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content",
    description: "Create content that teaches, builds authority, and supports search visibility.",
    icon: "PenTool",
    overview:
      "We develop blog, landing page, and authority content that matches user intent while supporting broader growth goals.",
    problems: [
      "Content that does not build authority",
      "Publishing without a clear strategic plan",
      "Traffic that does not move toward conversion",
      "A content engine that feels inconsistent",
    ],
    benefits: ["Stronger thought leadership", "Better SEO support", "More consistent publishing", "Higher trust"],
    process: ["Content audit", "Topic planning", "Draft and edit", "Publish and refine"],
    tools: ["Notion", "ChatGPT", "Google Docs", "Search Console"],
    faqs: [
      {
        question: "Do you write the content too?",
        answer: "Yes. The service can include planning, writing, and optimization support.",
      },
      {
        question: "Can content support lead gen?",
        answer: "Absolutely. Strong content can attract the right audience and nurture them toward action.",
      },
    ],
    price: "Starting at $550",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    shortTitle: "Email",
    description: "Build email systems that nurture leads, increase retention, and support launches.",
    icon: "Workflow",
    overview:
      "We craft email sequences and campaigns that feel useful, relevant, and aligned with your conversion goals.",
    problems: [
      "Leads that are not nurtured after the first touch",
      "Email campaigns that feel generic or disconnected",
      "Low retention from weak follow-up",
      "Manual sending that does not scale",
    ],
    benefits: ["Higher open rates", "Better nurture flows", "Stronger retention", "More repeat engagement"],
    process: ["Audience mapping", "Sequence planning", "Copy and design", "Testing and sending"],
    tools: ["Nodemailer", "Mailchimp", "HubSpot", "Brevo"],
    faqs: [
      {
        question: "Can you write the emails?",
        answer: "Yes. We can help with the full sequence, from welcome flows to campaign messages.",
      },
      {
        question: "Do you manage automation too?",
        answer: "Yes. The email strategy can be connected to the broader automation system.",
      },
    ],
    price: "Starting at $650",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social",
    description: "Plan a consistent social presence that supports brand trust and demand creation.",
    icon: "Sparkles",
    overview:
      "We align content themes, posting rhythm, and campaign goals so social becomes a strategic channel instead of noise.",
    problems: [
      "Posting without a clear message or goal",
      "Social content that does not support demand creation",
      "Inconsistent publishing cadence",
      "Weak authority and engagement across channels",
    ],
    benefits: ["Clearer content themes", "Stronger consistency", "Better engagement", "Brand authority"],
    process: ["Channel audit", "Content pillars", "Calendar planning", "Performance review"],
    tools: ["Canva", "ChatGPT", "Instagram", "LinkedIn"],
    faqs: [
      {
        question: "Which platforms do you cover?",
        answer: "We can shape the strategy around the platforms where your audience is most active.",
      },
      {
        question: "Do you also help with content ideas?",
        answer: "Yes. The service includes positioning-led content direction and campaign ideas.",
      },
    ],
    price: "Starting at $500",
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    shortTitle: "Leads",
    description: "Create a dependable pipeline with landing pages, offers, and high-intent conversion assets.",
    icon: "Target",
    overview:
      "We turn traffic into qualified leads with offer positioning, funnel design, and conversion-focused messaging.",
    problems: [
      "Traffic that does not convert into leads",
      "Offers that are not clearly positioned",
      "Landing pages with weak conversion structure",
      "Poor lead quality from broad messaging",
    ],
    benefits: ["Higher lead quality", "Better conversion rates", "Stronger funnel clarity", "More sales-ready prospects"],
    process: ["Offer mapping", "Landing page design", "Conversion copy", "Testing and refinement"],
    tools: ["Framer Motion", "Next.js", "Forms", "Analytics"],
    faqs: [
      {
        question: "Do you build the landing page too?",
        answer: "Yes. The strategy can be paired with a high-converting landing page implementation.",
      },
      {
        question: "Can this be used for B2B?",
        answer: "Absolutely. We shape the approach around audience intent and the sales cycle.",
      },
    ],
    price: "Starting at $700",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
