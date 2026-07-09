import { Section } from "@/components/site/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <Section>
      <Card className="overflow-hidden">
        <div className="bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.25),_transparent_35%),linear-gradient(135deg,rgba(17,24,39,0.95),rgba(15,23,42,0.72))] p-8 sm:p-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">Ready to grow?</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s build a premium AI marketing system for your brand.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/68">
              If you want stronger positioning, better lead flow, and a cleaner system, the next step starts with a
              conversation.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/book-consultation">Book Consultation</Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}

