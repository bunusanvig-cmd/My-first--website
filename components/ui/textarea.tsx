import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20",
        className
      )}
      {...props}
    />
  );
}

