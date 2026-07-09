"use client";

import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <div className="grid min-h-[60vh] place-items-center px-4">
      <motion.div
        role="status"
        aria-live="polite"
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full max-w-sm rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 text-center shadow-2xl backdrop-blur-xl"
      >
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
          <motion.div
            aria-hidden="true"
            className="h-6 w-6 rounded-full border-2 border-cyan-300 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="mt-5 text-sm uppercase tracking-[0.28em] text-cyan-100/70">Loading</div>
        <p className="mt-3 text-sm leading-7 text-white/70">Loading the Digital DK experience...</p>
      </motion.div>
    </div>
  );
}
