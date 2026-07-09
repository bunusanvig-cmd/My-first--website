import { Card } from "./card";

export function PricingCard({
  title,
  price,
  features,
}: {
  title: string;
  price: string;
  features: string[];
}) {
  return (
    <Card className="h-full">
      <p className="text-sm font-medium text-cyan-100">{title}</p>
      <div className="mt-4 text-3xl font-semibold text-white">{price}</div>
      <ul className="mt-6 space-y-3 text-sm text-white/72">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

