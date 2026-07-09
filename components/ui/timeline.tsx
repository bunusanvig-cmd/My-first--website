import { cn } from "@/lib/utils";

export function Timeline({
  items,
  className,
}: {
  items: { title: string; description: string; year?: string }[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-5", className)}>
      {items.map((item) => (
        <div key={item.title} className="relative pl-6">
          <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,245,255,0.7)]" />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-medium text-white">{item.title}</h3>
              {item.year ? <span className="text-xs text-cyan-100">{item.year}</span> : null}
            </div>
            <p className="mt-2 text-sm leading-7 text-white/70">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

