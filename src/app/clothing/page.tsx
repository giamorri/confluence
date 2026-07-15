"use client";

import { motion } from "motion/react";

const pieces = [
  { name: "Training Jacket", category: "Outerwear", season: "SS25" },
  { name: "Collective Tee", category: "Tops", season: "SS25" },
  { name: "Match Day Pant", category: "Bottoms", season: "SS25" },
  { name: "Crest Cap", category: "Accessories", season: "SS25" },
];

const TAN = "#C8BFA8";

export default function ClothingPage() {
  return (
    <main
      className="relative overflow-hidden"
      style={{ minHeight: "100dvh", backgroundColor: "#0B0B09" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${TAN}08 1px, transparent 1px), linear-gradient(90deg, ${TAN}08 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 pt-36 px-10 md:px-20 pb-24">
        <div className="max-w-5xl">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <p
              className="text-[10px] tracking-[0.4em] uppercase mb-5"
              style={{ fontFamily: "var(--font-syne)", color: `${TAN}60` }}
            >
              The Imprint
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
              <span style={{ color: TAN }}>Clothing</span>
            </h1>
          </motion.div>

          <motion.div
            style={{ height: "1px", backgroundColor: `${TAN}20`, marginBottom: "3.5rem" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.4 }}
          />

          {/* SS25 preview grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-8"
              style={{ fontFamily: "var(--font-syne)", color: "rgba(242,238,231,0.22)" }}
            >
              SS25 Preview
            </p>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-px"
              style={{ backgroundColor: `${TAN}12` }}
            >
              {pieces.map((piece, i) => (
                <motion.div
                  key={piece.name}
                  className="group cursor-pointer transition-colors duration-300"
                  style={{ backgroundColor: "#0B0B09", padding: "2rem" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "#111109";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "#0B0B09";
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.09 }}
                >
                  {/* Image placeholder */}
                  <div
                    className="w-full mb-5 flex items-center justify-center"
                    style={{
                      aspectRatio: "4/5",
                      backgroundColor: `${TAN}05`,
                      border: `1px solid ${TAN}10`,
                    }}
                  >
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-syne)", color: `${TAN}20` }}
                    >
                      Campaign Image
                    </span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <p
                        className="text-sm mb-1 group-hover:text-white transition-colors duration-200"
                        style={{ fontFamily: "var(--font-syne)", color: "rgba(242,238,231,0.75)" }}
                      >
                        {piece.name}
                      </p>
                      <p
                        className="italic text-xs"
                        style={{ fontFamily: "var(--font-instrument)", color: "rgba(242,238,231,0.28)" }}
                      >
                        {piece.category}
                      </p>
                    </div>
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-syne)", color: `${TAN}50` }}
                    >
                      {piece.season}
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
              color: "rgba(242,238,231,0.32)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1 }}
          >
            Dressed in the identity of the collective.
          </motion.p>
        </div>
      </div>
    </main>
  );
}
