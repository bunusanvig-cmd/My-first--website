"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { navigationLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/dk digital 1.png"
            alt={siteConfig.name}
            width={180}
            height={56}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "text-sm transition hover:text-white",
                pathname === item.href ? "text-white" : "text-white/70"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/book-consultation" variant="primary">
            Book Consultation
          </Button>
        </nav>

        <button
          type="button"
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn("border-t border-white/10 bg-slate-950/95 lg:hidden", open ? "block" : "hidden")}
      >
        <Container className="py-4">
          <nav className="grid gap-3" aria-label="Mobile navigation">
          <div className="grid gap-3">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "rounded-2xl border px-4 py-3 text-sm transition",
                  pathname === item.href
                    ? "border-cyan-400/25 bg-cyan-400/10 text-white"
                    : "border-white/10 bg-white/5 text-white/80"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/book-consultation" variant="primary" className="w-full" onClick={() => setOpen(false)}>
              Book Consultation
            </Button>
          </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
