"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { capabilities } from "@/lib/data";

export function Skills() {
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
          <p className="text-sm uppercase tracking-[0.18em] text-clay font-medium mb-4">Capabilities</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink text-balance">
            What I actually bring to a team.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10">
          <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar">
            {capabilities.map((c, i) => (
              <button
                key={c.node}
                onClick={() => setActive(i)}
                className={`shrink-0 text-left px-5 py-4 rounded-2xl border transition-all duration-300 ${
                  active === i
                    ? "bg-ink text-surface border-ink"
                    : "bg-paper text-ink border-line hover:border-clay/40"
                }`}
              >
                <span className="text-sm font-medium whitespace-nowrap">{c.node}</span>
              </button>
            ))}
          </div>

          <div className="min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-2.5"
              >
                {capabilities[active].items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-4 py-2 rounded-full bg-sand/60 text-ink/80 border border-line"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
