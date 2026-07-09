import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: Linkedin },
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "Facebook", icon: Facebook },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <Container className="grid gap-12 py-16 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-4">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white">{siteConfig.name}</div>
          <p className="max-w-sm text-sm leading-7 text-white/65">{siteConfig.description}</p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Quick Links</div>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Contact</div>
          <div className="mt-4 grid gap-4 text-sm text-white/70">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition hover:text-white">
              <Mail className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 transition hover:text-white">
              <Phone className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              {siteConfig.location}
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Social</div>
          <div className="mt-4 flex items-center gap-4" role="group" aria-label="Social links">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/65 transition hover:border-cyan-400/35 hover:bg-cyan-400/10 hover:text-cyan-100"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <div className="flex flex-col gap-2 text-center text-xs uppercase tracking-[0.24em] text-white/45 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <span>Copyright {year} {siteConfig.name}</span>
            <span>All rights reserved</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
