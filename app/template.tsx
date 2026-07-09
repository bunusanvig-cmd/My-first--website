"use client";

import type { ReactNode } from "react";
import { PageShell } from "@/components/site/page-shell";

export default function Template({ children }: { children: ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
