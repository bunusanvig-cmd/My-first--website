"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent transition-all duration-300",
        scrolled ? "border-white/10 bg-slate-950/85 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-100 shadow-glow">
            DK
          </span>
          <div>
            <div className="text-sm font-semibold tracking-[0.22em] text-white">{siteConfig.name}</div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">AI Marketing Studio</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.slice(0, 6).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/70 transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <Button href="/book-consultation" variant="primary">
            Book Consultation
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

