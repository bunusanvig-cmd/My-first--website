"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.92, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-cyan-400/30 bg-slate-950/90 text-cyan-100 shadow-glow backdrop-blur-xl transition hover:-translate-y-1"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}
