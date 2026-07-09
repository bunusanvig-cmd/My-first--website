"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { TestimonialCard } from "./testimonial-card";
import { Button } from "@/components/ui/button";

export function TestimonialSlider({
  testimonials,
}: {
  testimonials: { name: string; company: string; rating: number; review: string }[];
}) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="transition-all duration-300">
        <TestimonialCard testimonial={current} />
      </div>
      <div className="flex items-center gap-3 lg:flex-col">
        <Button
          type="button"
          variant="secondary"
          onClick={() => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

