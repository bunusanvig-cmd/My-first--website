"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ToastMessage = { id: number; title: string; description?: string };

type ToastContextValue = {
  toast: (message: Omit<ToastMessage, "id">) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const value = useMemo<ToastContextValue>(
    () => ({
      toast: (message) => {
        const id = Date.now();
        setToasts((current) => [...current, { ...message, id }]);
        window.setTimeout(() => {
          setToasts((current) => current.filter((item) => item.id !== id));
        }, 3500);
      },
    }),
    []
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-5 right-5 z-50 space-y-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto max-w-sm rounded-2xl border border-cyan-400/20 bg-slate-950/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            <div className="text-sm font-semibold text-white">{toast.title}</div>
            {toast.description ? (
              <p className="mt-1 text-sm leading-6 text-white/65">{toast.description}</p>
            ) : null}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return context;
}

