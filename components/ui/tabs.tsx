import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Tabs({
  tabs,
  className,
}: {
  tabs: { label: string; content: ReactNode }[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-3", className)}>
      {tabs.map((tab) => (
        <div
          key={tab.label}
          className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <div className="mb-2 text-sm font-semibold text-cyan-100">{tab.label}</div>
          <div className="text-sm leading-7 text-white/70">{tab.content}</div>
        </div>
      ))}
    </div>
  );
}

