"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

interface BrandNavProps {
  brand: string;
  accent: string;
  links: NavLink[];
}

export default function BrandNav({ brand, accent, links }: BrandNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        background: "linear-gradient(to bottom, rgba(7,7,7,0.85) 0%, transparent 100%)",
        backdropFilter: "blur(4px)",
      }}
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-xs tracking-[0.25em] text-white/40 hover:text-white/70 transition-colors duration-200 uppercase"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        <span className="text-base leading-none">←</span>
        <span>Confluence</span>
      </Link>

      <span
        className="text-sm font-bold tracking-[0.15em] uppercase"
        style={{ fontFamily: "var(--font-syne)", color: accent }}
      >
        {brand}
      </span>

      <div className="flex items-center gap-7">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-200"
              style={{
                fontFamily: "var(--font-syne)",
                color: active ? accent : "rgba(242,238,231,0.35)",
              }}
              onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,238,231,0.7)"; }}
              onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,238,231,0.35)"; }}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
