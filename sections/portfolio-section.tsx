import Link from "next/link";
import { Section } from "@/components/site/section";
import { Heading } from "@/components/site/heading";
import { ProjectCard } from "@/components/content/project-card";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function PortfolioSection() {
  return (
    <Section id="portfolio">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Heading
          eyebrow="Portfolio"
          title="A selection of work shaped for stronger positioning and more efficient growth."
          description="Each case study combines strategy, systems, and execution with a premium finish."
        />
        <Button href="/portfolio" variant="secondary">
          View All Projects
        </Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {portfolio.slice(0, 4).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

