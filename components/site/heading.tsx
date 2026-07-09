import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Heading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">{eyebrow}</div>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-white/68">{description}</p> : null}
    </div>
  );
}

