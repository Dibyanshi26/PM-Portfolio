"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { experience } from "@/lib/data";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-28 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-clay font-medium mb-4">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink text-balance">
            Where the story actually happened.
          </h2>
        </motion.div>

        <div className="border-t border-line">
          {experience.map((role, i) => {
            const open = openIndex === i;
            return (
              <div key={role.company} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                >
                  <div>
                    <p className="font-display text-lg font-semibold text-ink">{role.role}</p>
                    <p className="text-sm text-stone mt-1">{role.company}</p>
                    {!open && (
                      <p className="text-sm text-ink/60 mt-2 max-w-lg">{role.impact}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="text-sm text-stone hidden sm:block">{role.dates}</span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-stone group-hover:text-clay"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 grid md:grid-cols-3 gap-6 max-w-3xl">
                        <div>
                          <p className="text-xs uppercase tracking-wide text-clay font-medium mb-2">Challenge</p>
                          <p className="text-sm text-ink/80 leading-relaxed">{role.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wide text-clay font-medium mb-2">Actions</p>
                          <p className="text-sm text-ink/80 leading-relaxed">{role.actions}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wide text-clay font-medium mb-2">Outcome</p>
                          <p className="text-sm text-ink/80 leading-relaxed">{role.outcome}</p>
                        </div>
                      </div>
                      <div className="pb-8 flex flex-wrap gap-2">
                        {role.tech.map((t) => (
                          <span key={t} className="text-xs px-3 py-1 rounded-full bg-sand/60 text-ink/70 border border-line">
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
