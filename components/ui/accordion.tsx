import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Accordion({
  items,
  className,
}: {
  items: { title: string; content: ReactNode }[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => (
        <details
          key={item.title}
          className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white">
            <span>{item.title}</span>
            <ChevronDown className="h-5 w-5 text-cyan-200 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="pt-4 text-sm leading-7 text-white/72">{item.content}</div>
        </details>
      ))}
    </div>
  );
}

