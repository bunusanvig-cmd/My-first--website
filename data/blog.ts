export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  summary: string;
  tags: string[];
  author: string;
  date: string;
  readingTime: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-ai-is-changing-growth-marketing",
    title: "How AI Is Changing Growth Marketing",
    category: "AI Strategy",
    excerpt: "A practical view of how AI is reshaping targeting, personalization, and operational speed.",
    summary:
      "A practical look at how AI improves research, content planning, and campaign execution without replacing good marketing judgment.",
    tags: ["AI", "Strategy", "Growth"],
    content: [
      "AI is not replacing good marketing. It is amplifying it by removing friction, speeding up analysis, and making execution more consistent.",
      "The best teams use AI to improve research, content planning, creative iteration, and follow-up automation. That leaves more time for judgment and strategy.",
      "The real advantage comes from building systems that connect insight to action quickly.",
    ],
    author: "Dharmendra Kumar Maurya",
    date: "2026-06-18",
    readingTime: "5 min read",
    featured: true,
  },
  {
    slug: "why-most-ad-campaigns-fail",
    title: "Why Most Ad Campaigns Fail Before They Scale",
    category: "Performance",
    excerpt: "Most problems are not in the media buy. They start in the offer, message, or funnel.",
    summary:
      "A simple breakdown of why campaigns stall and how to fix the biggest friction points before scaling paid media.",
    tags: ["Performance", "Paid Ads", "Funnels"],
    content: [
      "A campaign can only scale if the offer is clear and the landing experience feels coherent.",
      "Too many teams optimize tiny ad metrics while the real leak sits in conversion design or follow-up.",
      "Testing should start with the strongest business assumptions first.",
    ],
    author: "Dharmendra Kumar Maurya",
    date: "2026-06-12",
    readingTime: "4 min read",
  },
  {
    slug: "building-a-premium-brand-with-clarity",
    title: "Building a Premium Brand With Clarity",
    category: "Brand Strategy",
    excerpt: "Premium brands win when they simplify, sharpen, and stay consistent across touchpoints.",
    summary:
      "Why clarity, focus, and consistent messaging matter more than overcomplicated branding systems.",
    tags: ["Branding", "Positioning", "Clarity"],
    content: [
      "Premium positioning is not only about visuals. It is about what you promise, how you speak, and how clearly your system communicates value.",
      "Brands that feel expensive usually feel more focused than their competitors.",
      "Clarity reduces friction in every part of the buyer journey.",
    ],
    author: "Dharmendra Kumar Maurya",
    date: "2026-06-05",
    readingTime: "6 min read",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const blogCategories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
