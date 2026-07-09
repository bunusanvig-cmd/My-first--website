import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

export function Badge({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-100",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

