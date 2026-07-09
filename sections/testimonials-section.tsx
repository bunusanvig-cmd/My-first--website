import { Section } from "@/components/site/section";
import { Heading } from "@/components/site/heading";
import { testimonials } from "@/data/testimonials";
import { TestimonialSlider } from "@/components/content/testimonial-slider";

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <Heading
        eyebrow="Testimonials"
        title="Clients value the clarity, speed, and high-end attention to detail."
        description="A polished experience matters. So does the outcome."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-3">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </Section>
  );
}
