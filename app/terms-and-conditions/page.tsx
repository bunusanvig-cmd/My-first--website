import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { Heading } from "@/components/site/heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Digital DK.",
};

export default function TermsPage() {
  return (
    <Section className="pt-24">
      <Heading eyebrow="Legal" title="Terms & Conditions" />
      <Card className="mt-10">
        <div className="grid gap-5 text-sm leading-8 text-white/70">
          <p>All content on this website is provided for general information and promotional purposes.</p>
          <p>Project scope, deliverables, timelines, and fees are confirmed separately in writing.</p>
          <p>We reserve the right to update these terms at any time without prior notice.</p>
        </div>
      </Card>
    </Section>
  );
}

