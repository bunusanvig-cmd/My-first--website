import { Section } from "@/components/site/section";

const clients = ["Nova Labs", "Himalayan Health", "Summit Capital", "Astra Studio", "Pulse Commerce", "Orbit SaaS"];

export function ClientsSection() {
  return (
    <Section className="py-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {clients.map((client) => (
          <div
            key={client}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-xs uppercase tracking-[0.24em] text-white/45"
          >
            {client}
          </div>
        ))}
      </div>
    </Section>
  );
}

