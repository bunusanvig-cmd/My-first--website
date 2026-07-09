"use client";

import { Facebook, Linkedin, Link as LinkIcon, Twitter } from "lucide-react";

export function ShareButtons({ title }: { title: string }) {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(pageUrl);

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:text-white"
      >
        <Twitter className="h-4 w-4" />
        X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:text-white"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:text-white"
      >
        <Facebook className="h-4 w-4" />
        Facebook
      </a>
      <button
        type="button"
        onClick={() => navigator.clipboard.writeText(pageUrl)}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:text-white"
      >
        <LinkIcon className="h-4 w-4" />
        Copy link
      </button>
    </div>
  );
}

