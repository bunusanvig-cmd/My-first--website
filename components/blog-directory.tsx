"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/button";
import { BlogCard } from "@/components/blog-card";
import type { BlogPost } from "@/data/blog";

export function BlogDirectory({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: readonly string[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesQuery =
        search.length === 0 ||
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.summary.toLowerCase().includes(search) ||
        post.tags.some((tag) => tag.toLowerCase().includes(search));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, posts, query]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="flex items-center gap-3 rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-white/70">
          <Search className="h-4 w-4 text-cyan-300" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search posts, topics, or tags"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
          />
        </label>

        <div className="text-sm text-white/55">
          {filteredPosts.length} post{filteredPosts.length === 1 ? "" : "s"} found
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const active = activeCategory === category;

          return (
            <Button
              key={category}
              type="button"
              variant={active ? "primary" : "secondary"}
              className={active ? "shadow-glow" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
