import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950 p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 text-white/70 transition hover:bg-white/5 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className={cn("text-sm leading-7 text-white/75")}>{children}</div>
      </div>
    </div>
  );
}

