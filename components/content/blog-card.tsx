import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group h-full transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="flex items-center justify-between gap-4">
        <Badge>{post.category}</Badge>
        <span className="text-xs text-white/45">{post.readingTime}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/68">{post.excerpt}</p>
      <div className="mt-5 text-xs uppercase tracking-[0.25em] text-white/40">
        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition group-hover:translate-x-1"
      >
        Read article
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Card>
  );
}

