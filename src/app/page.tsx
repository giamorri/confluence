"use client";

import Link from "next/link";
import { motion } from "motion/react";

const brands = [
  {
    id: "football",
    label: "CONFLUENCE FC",
    slug: "FOOTBALL",
    descriptor: "Where the game lives",
    accent: "#B6FF00",
    dim: "#B6FF0040",
    panelClass: "panel-fc",
    href: "/football",
    number: "01",
  },
  {
    id: "music",
    label: "CONFLUENCE MUSIC",
    slug: "MUSIC",
    descriptor: "Sound without borders",
    accent: "#E8302A",
    dim: "#E8302A40",
    panelClass: "panel-music",
    href: "/music",
    number: "02",
  },
  {
    id: "clothing",
    label: "CONFLUENCE CLOTHING",
    slug: "CLOTHING",
    descriptor: "Wear the collective",
    accent: "#C8BFA8",
    dim: "#C8BFA840",
    panelClass: "panel-cloth",
    href: "/clothing",
    number: "03",
  },
];

export default function Home() {
  return (
    <main className="relative h-dvh overflow-hidden bg-[#070707]">
      {/* Header */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <span
          className="text-[10px] tracking-[0.35em] uppercase"
          style={{ fontFamily: "var(--font-syne)", color: "rgba(242,238,231,0.3)" }}
        >
          The Collective
        </span>
        <span
          className="text-sm font-extrabold tracking-[0.2em]"
          style={{ fontFamily: "var(--font-syne)", color: "#F2EEE7" }}
        >
          CONFLUENCE
        </span>
        <span
          className="text-[10px] tracking-[0.35em] uppercase"
          style={{ fontFamily: "var(--font-syne)", color: "rgba(242,238,231,0.3)" }}
        >
          Est. 2024
        </span>
      </motion.header>

      {/* Triptych */}
      <div className="triptych">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.id}
            className={`panel ${brand.panelClass}`}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.18 + i * 0.13,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              borderRight: i < 2 ? "1px solid rgba(242,238,231,0.06)" : "none",
            }}
          >
            <Link
              href={brand.href}
              className="flex flex-col justify-between h-full p-8 pt-24 pb-10 group"
              aria-label={brand.label}
            >
              {/* Watermark word */}
              <div
                className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 select-none pointer-events-none leading-none font-extrabold whitespace-nowrap transition-opacity duration-500 opacity-[0.055] group-hover:opacity-[0.13]"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(4rem, 11vw, 9rem)",
                  color: brand.accent,
                  letterSpacing: "-0.02em",
                }}
              >
                {brand.slug}
              </div>

              {/* Top: index + label */}
              <div className="relative z-10">
                <div
                  className="text-[10px] tracking-[0.3em] mb-5"
                  style={{ fontFamily: "var(--font-syne)", color: brand.dim }}
                >
                  {brand.number}
                </div>
                <div
                  className="text-[10px] tracking-[0.22em] uppercase"
                  style={{ fontFamily: "var(--font-syne)", color: "rgba(242,238,231,0.4)" }}
                >
                  {brand.label}
                </div>
              </div>

              {/* Bottom: descriptor + CTA */}
              <div className="relative z-10">
                <p
                  className="italic mb-8 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-instrument)",
                    fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
                    color: "rgba(242,238,231,0.5)",
                  }}
                >
                  {brand.descriptor}
                </p>

                <div
                  className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase transition-all duration-300 group-hover:gap-5"
                  style={{ fontFamily: "var(--font-syne)", color: brand.accent }}
                >
                  <span>Explore</span>
                  <span className="text-sm">→</span>
                </div>

                {/* Accent underline on hover */}
                <div
                  className="mt-5 h-px w-0 group-hover:w-full transition-all duration-700"
                  style={{ backgroundColor: brand.accent }}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
