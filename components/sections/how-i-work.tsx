"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { howIWork } from "@/lib/data";

export function HowIWork() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 md:py-36 bg-surface/60 border-y border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-clay font-medium mb-4">How I Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink text-balance">
            A loop, not a one-off trick.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          {/* the loop */}
          <div className="relative flex md:block justify-center">
            <svg viewBox="0 0 220 220" className="w-56 h-56 md:w-64 md:h-64">
              <motion.circle
                cx="110"
                cy="110"
                r="90"
                fill="none"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              <motion.circle
                cx="110"
                cy="110"
                r="90"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray={`${(active + 1) * (2 * Math.PI * 90) / 4} ${2 * Math.PI * 90}`}
                strokeLinecap="round"
                initial={false}
                animate={{ strokeDasharray: `${(active + 1) * (2 * Math.PI * 90) / 4} ${2 * Math.PI * 90}` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                transform="rotate(-90 110 110)"
              />
            </svg>
            {howIWork.map((s, i) => {
              const angle = (i / howIWork.length) * 2 * Math.PI - Math.PI / 2;
              const r = 90;
              const x = 110 + r * Math.cos(angle);
              const y = 110 + r * Math.sin(angle);
              return (
                <button
                  key={s.step}
                  onClick={() => setActive(i)}
                  style={{ left: `${(x / 220) * 100}%`, top: `${(y / 220) * 100}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border text-xs font-medium flex items-center justify-center transition-all duration-300 ${
                    active === i
                      ? "bg-ink text-surface border-ink scale-110"
                      : "bg-paper text-ink border-line hover:border-clay/50"
                  }`}
                >
                  {s.step}
                </button>
              );
            })}
          </div>

          {/* the reveal */}
          <div className="min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-xs uppercase tracking-wide text-clay font-medium mb-3">
                  Step {active + 1} — {howIWork[active].step}
                </p>
                <h3 className="font-display text-xl font-semibold text-ink">{howIWork[active].body}</h3>
                <p className="mt-4 text-stone leading-relaxed max-w-md">
                  <span className="text-ink/70">From the work: </span>
                  {howIWork[active].example}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
