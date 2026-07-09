import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function FloatingLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/60 backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

