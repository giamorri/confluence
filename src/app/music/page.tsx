"use client";

import { motion } from "motion/react";

const releases = [
  { title: "Untitled Vol. I", artist: "TBA", type: "LP", status: "Coming Soon" },
  { title: "First Light", artist: "TBA", type: "EP", status: "Coming Soon" },
  { title: "Signal / Noise", artist: "TBA", type: "Single", status: "Coming Soon" },
  { title: "Collective Mix 001", artist: "Various", type: "Mix", status: "Coming Soon" },
];

const RED = "#E8302A";

export default function MusicPage() {
  return (
    <main
      className="relative overflow-hidden"
      style={{ minHeight: "100dvh", backgroundColor: "#0E0505" }}
    >
      {/* Radial bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 80%, ${RED}12 0%, transparent 70%)`,
        }}
      />

      {/* Vinyl ring pattern */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ opacity: 0.04 }}
      >
        {[120, 200, 280, 360, 440].map((size) => (
          <div
            key={size}
            className="absolute rounded-full border"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderColor: RED,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-36 px-10 md:px-20 pb-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p
            className="text-[10px] tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "var(--font-syne)", color: `${RED}70` }}
          >
            The Label
          </p>
          <h1
            className="font-extrabold leading-none uppercase tracking-tight"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              color: "#F2EEE7",
            }}
          >
            Confluence
            <br />
            <span style={{ color: RED }}>Music</span>
          </h1>
        </motion.div>

        <motion.div
          style={{ height: "1px", backgroundColor: `${RED}22` }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.4 }}
        />

        {/* Catalogue list */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-8"
            style={{ fontFamily: "var(--font-syne)", color: "rgba(242,238,231,0.25)" }}
          >
            Catalogue
          </p>

          <div>
            {releases.map((r, i) => (
              <motion.div
                key={r.title}
                className="flex items-center justify-between py-5 group cursor-pointer"
                style={{ borderBottom: "1px solid rgba(242,238,231,0.06)" }}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.09 }}
              >
                <div className="flex items-center gap-7">
                  <span
                    className="text-xs w-6 shrink-0"
                    style={{ fontFamily: "var(--font-syne)", color: `${RED}50` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-sm transition-colors duration-200 group-hover:text-white"
                    style={{ fontFamily: "var(--font-syne)", color: "rgba(242,238,231,0.55)" }}
                  >
                    {r.title}
                  </span>
                </div>

                <div className="flex items-center gap-10">
                  <span
                    className="italic text-sm hidden sm:block"
                    style={{ fontFamily: "var(--font-instrument)", color: "rgba(242,238,231,0.25)" }}
                  >
                    {r.artist}
                  </span>
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase w-14 text-right"
                    style={{ fontFamily: "var(--font-syne)", color: `${RED}60` }}
                  >
                    {r.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="italic mt-16 max-w-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-instrument)",
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            color: "rgba(242,238,231,0.35)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          Sound without borders. Music rooted in the collective.
        </motion.p>
      </div>
    </main>
  );
}
