"use client";

import { motion } from "motion/react";

const stats = [
  { label: "Founded", value: "2024" },
  { label: "League", value: "Lcl" },
  { label: "Honours", value: "—" },
  { label: "Squad", value: "11+" },
];

const FC_GREEN = "#B6FF00";

export default function FootballPage() {
  return (
    <main
      className="relative overflow-hidden"
      style={{ minHeight: "100dvh", backgroundColor: "#090E05" }}
    >
      {/* Pitch line background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(182,255,0,0.02) 60px, rgba(182,255,0,0.02) 61px)",
        }}
      />

      {/* Large ghost letters */}
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none font-extrabold"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(10rem, 28vw, 22rem)",
          color: FC_GREEN,
          opacity: 0.03,
          letterSpacing: "-0.04em",
        }}
      >
        FC
      </div>

      <div className="relative z-10 pt-36 px-10 md:px-20 pb-24">
        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-[10px] tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "var(--font-syne)", color: `${FC_GREEN}80` }}
          >
            The Club
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
            <span style={{ color: FC_GREEN }}>Football Club</span>
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-14"
          style={{ height: "1px", backgroundColor: `${FC_GREEN}25` }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="font-extrabold mb-1.5"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: FC_GREEN,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-[10px] tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-syne)", color: "rgba(242,238,231,0.35)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="italic max-w-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-instrument)",
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            color: "rgba(242,238,231,0.45)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.75 }}
        >
          More than a team. A movement built from the ground up.
        </motion.p>

        {/* Next match placeholder */}
        <motion.div
          className="mt-20 max-w-md"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-syne)", color: "rgba(242,238,231,0.25)" }}
          >
            Next Fixture
          </p>
          <div
            className="border p-6 flex items-center justify-between"
            style={{ borderColor: `${FC_GREEN}20`, backgroundColor: `${FC_GREEN}06` }}
          >
            <div>
              <div
                className="font-bold text-sm mb-1"
                style={{ fontFamily: "var(--font-syne)", color: "#F2EEE7" }}
              >
                TBA
              </div>
              <div
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-syne)", color: "rgba(242,238,231,0.3)" }}
              >
                vs. Confluence FC
              </div>
            </div>
            <div
              className="text-[10px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-syne)", color: `${FC_GREEN}70` }}
            >
              Season 2025
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
