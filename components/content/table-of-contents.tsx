import Link from "next/link";

export function TableOfContents({ headings }: { headings: { id: string; label: string }[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-medium text-cyan-100">On this page</div>
      <nav className="mt-4 grid gap-3 text-sm text-white/65">
        {headings.map((heading) => (
          <Link key={heading.id} href={`#${heading.id}`} className="transition hover:text-white">
            {heading.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

