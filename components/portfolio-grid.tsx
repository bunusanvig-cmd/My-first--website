"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/portfolio";

export function PortfolioGrid({
  projects,
  categories,
}: {
  projects: Project[];
  categories: readonly string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="space-y-8">
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
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
