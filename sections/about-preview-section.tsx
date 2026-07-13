import { Section } from "@/components/site/section";
import { Heading } from "@/components/site/heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";

export function AboutPreviewSection() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <Heading
            eyebrow="About"
            title="A strategic partner for brands that want to feel sharper, faster, and more premium."
            description="Digital DK blends AI, performance marketing, and high-touch consulting to help businesses grow with more clarity and less noise."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {["Strategy", "Automation", "SEO", "Campaigns", "Brand"].map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            <Button href="/about">Learn More</Button>
            <Button href="/contact" variant="secondary">
              Start a Conversation
            </Button>
          </div>
        </div>
        <div className="grid gap-6">
          <Card className="overflow-hidden">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(0,245,255,0.22),rgba(108,99,255,0.08)),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_35%)] p-6">
              <div className="flex h-full items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/45">Photo placeholder</div>
                  <div className="mt-3 text-2xl font-semibold text-white">Dharmendra Kumar Maurya</div>
                </div>
                <div className="text-right text-xs uppercase tracking-[0.22em] text-white/45">Butwal, Nepal</div>
              </div>
            </div>
          </Card>
          <Timeline
            items={[
              {
                year: "2021",
                title: "Started consulting",
                description: "Focused on helping businesses build cleaner, higher-converting digital systems.",
              },
              {
                year: "2023",
                title: "Expanded into AI automation",
                description: "Designed repeatable workflows that cut manual work and improved lead handling.",
              },
              {
                year: "2026",
                title: "Premium AI marketing brand",
                description: "Digital DK now blends strategy, content, performance, and automation in one system.",
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
