import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-lg font-semibold text-white">{siteConfig.name}</div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
            AI-powered marketing, premium brand strategy, and automation systems for ambitious businesses.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Navigation</div>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/portfolio", "Portfolio"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="transition hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Services</div>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <ArrowUpRight className="h-4 w-4 text-cyan-300" />
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Contact</div>
          <div className="mt-4 grid gap-4 text-sm text-white/70">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition hover:text-white">
              <Mail className="h-4 w-4 text-cyan-300" />
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 transition hover:text-white">
              <Phone className="h-4 w-4 text-cyan-300" />
              {siteConfig.phone}
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-cyan-300" />
              {siteConfig.location}
            </div>
            <div className="mt-2 flex items-center gap-3">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-white/60 transition hover:text-cyan-200" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-white/60 transition hover:text-cyan-200" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-white/60 transition hover:text-cyan-200" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs uppercase tracking-[0.25em] text-white/40">
        Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
