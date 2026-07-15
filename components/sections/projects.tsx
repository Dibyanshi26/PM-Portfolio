"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Award } from "lucide-react";
import { projects, enablementTeaser } from "@/lib/data";

const tabs = ["Problem", "Decision", "Solution", "Outcome"] as const;

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Problem");
  const [flowStep, setFlowStep] = useState(0);

  const tabContent: Record<(typeof tabs)[number], string> = {
    Problem: project.problem,
    Decision: project.decision,
    Solution: project.solution,
    Outcome: project.outcome,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-[1.75rem] border border-line bg-surface overflow-hidden"
    >
      <div className="grid lg:grid-cols-2">
        {/* dark inset product-demo panel */}
        <div className="bg-ink text-surface p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-surface/60 text-sm max-w-sm">{project.tagline}</p>
            </div>
            {project.badge && (
              <span className="shrink-0 inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-clay/20 text-clay border border-clay/30">
                <Award size={12} /> {project.badge}
              </span>
            )}
          </div>

          {project.flow && (
            <div className="mt-10 flex flex-wrap items-center gap-2">
              {project.flow.map((step, i) => (
                <button
                  key={step}
                  onClick={() => setFlowStep(i)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${
                    flowStep === i
                      ? "bg-clay text-ink border-clay"
                      : "border-surface/20 text-surface/50 hover:border-surface/40"
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-surface/60 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* content: tabs */}
        <div className="p-8 md:p-10">
          <div className="flex flex-wrap gap-1 mb-6 border-b border-line">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`text-sm px-3 py-2 -mb-px border-b-2 transition-colors duration-300 ${
                  tab === t ? "border-clay text-ink font-medium" : "border-transparent text-stone hover:text-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <motion.p
            key={tab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-ink/80 leading-relaxed min-h-[80px]"
          >
            {tabContent[tab]}
          </motion.p>

          <div className="mt-6 pt-6 border-t border-line grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-clay font-medium mb-1">User</p>
              <p className="text-stone">{project.user}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-clay font-medium mb-1">My role</p>
              <p className="text-stone">{project.role}</p>
            </div>
          </div>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-clay transition-colors"
            >
              View live demo <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-clay font-medium mb-4">Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink text-balance">
            Systems built to be used, not just demoed.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-6 rounded-[1.75rem] border border-line bg-sand/50 p-8 md:p-10"
        >
          <p className="text-xs uppercase tracking-wide text-clay font-medium mb-2">{enablementTeaser.title}</p>
          <p className="text-ink/80 leading-relaxed max-w-2xl">{enablementTeaser.body}</p>
          <p className="mt-3 text-xs text-stone">{enablementTeaser.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
