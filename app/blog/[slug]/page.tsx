import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock3, Sparkles } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.16),_transparent_35%),linear-gradient(180deg,rgba(8,15,30,0.92),rgba(2,6,23,0.82))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <div className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl animate-drift" />
        <div className="absolute right-[-4rem] top-72 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl animate-floaty" />
      </div>

      <Section className="pt-14 sm:pt-18 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/85">
              <Sparkles className="h-4 w-4" />
              {post.category}
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{post.excerpt}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/55">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-cyan-300" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-cyan-300" />
                {post.readingTime}
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/blog" variant="secondary">
                Back to Blog
              </Button>
              <Button href="/book-consultation" variant="primary" className="group shadow-glow">
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Article summary</p>
            <p className="mt-4 text-sm leading-7 text-white/68">{post.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-6">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Author</p>
              <div className="mt-4 text-xl font-semibold text-white">{post.author}</div>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Sample article content designed to fit the same dark, premium style as the rest of the site.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/55">Post tags</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <div className="space-y-8">
              {post.content.map((paragraph, index) => (
                <section key={index} className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">Section {index + 1}</h2>
                  <p className="text-base leading-8 text-white/70">{paragraph}</p>
                </section>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">Related</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            More sample articles to explore.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {relatedPosts.map((item) => (
            <BlogCard key={item.slug} post={item} />
          ))}
        </div>
      </Section>
    </div>
  );
}
