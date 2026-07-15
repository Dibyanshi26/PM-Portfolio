"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";

// If you remove the PDF and thumbnail from /public, this section quietly
// collapses to just the text + download button — no dev instructions shown.
const HAS_RESUME = true;

export function Resume() {
  return (
    <section id="resume" className="py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={`grid ${HAS_RESUME ? "md:grid-cols-[1.3fr_0.7fr]" : ""} gap-10 items-center`}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-clay font-medium mb-4">Resume</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink text-balance">
              The one-page version.
            </h2>
            <p className="mt-4 text-stone leading-relaxed max-w-md">
              Everything above, condensed to what fits on a page — roles, dates, and the
              numbers behind them.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume/dibyanshi-singh-resume.pdf"
                download
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-ink text-surface text-sm font-medium hover:-translate-y-0.5 transition-transform duration-300"
              >
                <Download size={15} /> Download résumé
              </a>
              <a
                href="/resume/dibyanshi-singh-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-line text-sm text-ink hover:border-clay/50 transition-colors duration-300"
              >
                <ExternalLink size={15} /> Open résumé
              </a>
            </div>
          </div>

          {HAS_RESUME && (
            <a
              href="/resume/dibyanshi-singh-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mx-auto md:mx-0 w-40 md:w-full max-w-[220px] aspect-[3/4] rounded-2xl overflow-hidden border border-line shadow-[0_16px_40px_rgba(23,23,20,0.1)] transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.03]"
            >
              <Image
                src="/images/resume-thumb.png"
                alt="Résumé preview"
                fill
                className="object-cover object-top"
                sizes="220px"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-300" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
