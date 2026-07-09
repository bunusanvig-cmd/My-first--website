import { Section } from "@/components/site/section";
import { Heading } from "@/components/site/heading";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/content/blog-card";
import { Button } from "@/components/ui/button";

export function BlogPreviewSection() {
  return (
    <Section id="blog">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Heading
          eyebrow="Blog"
          title="Thoughts on AI marketing, performance, and brand clarity."
          description="Practical ideas for founders and marketers who want to build with more intention."
        />
        <Button href="/blog" variant="secondary">
          Explore Blog
        </Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blogPosts.slice(0, 3).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </Section>
  );
}

