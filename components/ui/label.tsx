import { cn } from "@/lib/utils";
import type { LabelHTMLAttributes, ReactNode } from "react";

export function Label({
  className,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { children: ReactNode }) {
  return (
    <label className={cn("mb-2 block text-sm font-medium text-white/80", className)} {...props}>
      {children}
    </label>
  );
}

