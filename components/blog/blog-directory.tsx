"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/content/blog-card";
import type { BlogPost } from "@/data/blog";
import { Card } from "@/components/ui/card";

const categories = ["All", "AI Strategy", "Performance", "Brand Strategy"];

export function BlogDirectory({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return posts.filter((post) => {
      const matchesQuery =
        !normalized ||
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized);
      const matchesCategory = category === "All" || post.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [category, posts, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visiblePosts = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="grid gap-10">
      <Card className="grid gap-4">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="text-sm font-medium text-cyan-100">Search</div>
            <Input
              className="mt-3"
              placeholder="Search posts"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <Button
                key={item}
                type="button"
                variant={category === item ? "primary" : "secondary"}
                onClick={() => {
                  setCategory(item);
                  setPage(1);
                }}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {filtered.some((post) => post.featured) ? (
        <Card className="border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.15),_rgba(17,24,39,0.92))]">
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-100/70">Featured post</div>
          {filtered
            .filter((post) => post.featured)
            .slice(0, 1)
            .map((post) => (
              <div key={post.slug} className="mt-4 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/70">{post.excerpt}</p>
                </div>
                <Button href={`/blog/${post.slug}`}>Read featured</Button>
              </div>
            ))}
        </Card>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visiblePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm text-white/55">
          Showing {visiblePosts.length} of {filtered.length} posts
        </div>
        <div className="flex gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

