import { Section } from "@/components/site/section";
import { Heading } from "@/components/site/heading";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  return (
    <Section id="faq">
      <Heading
        eyebrow="FAQ"
        title="Common questions, answered clearly."
        description="Everything is designed to feel simple, transparent, and easy to move forward with."
      />
      <div className="mt-10">
        <Accordion items={faqs.map((item) => ({ title: item.question, content: item.answer }))} />
      </div>
    </Section>
  );
}

