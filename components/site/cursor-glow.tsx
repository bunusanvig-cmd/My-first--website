"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden opacity-70 lg:block"
      style={{
        background: `radial-gradient(700px circle at ${position.x}px ${position.y}px, rgba(0,245,255,0.12), transparent 40%)`,
      }}
    />
  );
}

