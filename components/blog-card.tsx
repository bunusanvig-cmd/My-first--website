import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Sparkles } from "lucide-react";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-100/80">
          {post.category}
        </span>
        {post.featured ? (
          <div className="inline-flex rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-2 text-cyan-100">
            <Sparkles className="h-4 w-4" />
          </div>
        ) : null}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/62">{post.excerpt}</p>
      <p className="mt-4 text-sm leading-7 text-white/68">{post.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-white/45">
        <span className="inline-flex items-center gap-2">
          <CalendarDays className="h-3.5 w-3.5 text-cyan-300" />
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock3 className="h-3.5 w-3.5 text-cyan-300" />
          {post.readingTime}
        </span>
      </div>

      <div className="mt-6">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition group-hover:translate-x-0.5"
        >
          Read article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
