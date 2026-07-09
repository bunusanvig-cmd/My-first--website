import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";

export default function NotFound() {
  return (
    <Section className="py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">404</div>
        <h1 className="mt-4 text-4xl font-semibold text-white">This page does not exist.</h1>
        <p className="mt-4 text-base leading-8 text-white/70">
          The page you are looking for may have moved or was never created.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Back Home</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </Section>
  );
}
