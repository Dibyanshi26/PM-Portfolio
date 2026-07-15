"use client";

import { motion } from "motion/react";
import { careerMap } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-clay font-medium mb-4">About</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink text-balance">
            Not a straight line — a route from data to adoption.
          </h2>
        </motion.div>

        <div className="relative">
          {/* connecting line, animates in as the section enters view */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute top-[22px] left-0 right-0 h-px bg-line origin-left"
          />

          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {careerMap.map((stage, i) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 flex items-center gap-3 md:block">
                  <span className="inline-flex h-[11px] w-[11px] rounded-full bg-clay ring-4 ring-paper shrink-0" />
                  <h3 className="font-display text-lg font-semibold text-ink md:mt-4">{stage.stage}</h3>
                </div>
                <p className="mt-3 text-ink/80 leading-relaxed">{stage.sentence}</p>
                <p className="mt-3 text-sm text-stone leading-relaxed">{stage.example}</p>
                <p className="mt-3 text-sm font-medium text-clay">{stage.outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
