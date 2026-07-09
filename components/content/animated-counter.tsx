"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setCurrent(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.span ref={ref} className="inline-block">
      {current}
      {suffix}
    </motion.span>
  );
}
