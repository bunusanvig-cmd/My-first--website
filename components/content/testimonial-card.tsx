import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialCard({
  testimonial,
}: {
  testimonial: { name: string; company: string; rating: number; review: string };
}) {
  return (
    <Card className="h-full">
      <div className="flex gap-1 text-cyan-300">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-white/72">{testimonial.review}</p>
      <div className="mt-6 text-sm font-medium text-white">{testimonial.name}</div>
      <div className="text-xs uppercase tracking-[0.22em] text-white/40">{testimonial.company}</div>
    </Card>
  );
}

