import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}
