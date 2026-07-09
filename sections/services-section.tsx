import { Section } from "@/components/site/section";
import { Heading } from "@/components/site/heading";
import { ServiceCard } from "@/components/content/service-card";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <Section id="services">
      <Heading
        eyebrow="Services"
        title="Premium services built to create clarity, momentum, and measurable growth."
        description="Each service is structured to be strategic, practical, and ready for real-world execution."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Section>
  );
}

