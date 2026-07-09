import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { Heading } from "@/components/site/heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Digital DK.",
};

export default function PrivacyPolicyPage() {
  return (
    <Section className="pt-24">
      <Heading eyebrow="Legal" title="Privacy Policy" />
      <Card className="mt-10">
        <div className="grid gap-5 text-sm leading-8 text-white/70">
          <p>We only collect information you submit through our forms or contact channels.</p>
          <p>Data is used to respond to inquiries, provide services, and improve the experience.</p>
          <p>We do not sell personal data. If you want data removed, contact us directly by email.</p>
        </div>
      </Card>
    </Section>
  );
}

