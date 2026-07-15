"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { TextScramble } from "@/components/motion/text-scramble";
import { hero, proof } from "@/lib/data";

export function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const [, setHovering] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-40, 40], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-40, 40], [-6, 6]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = portraitRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - (rect.left + rect.width / 2));
    my.set(e.clientY - (rect.top + rect.height / 2));
  }

  return (
    <section className="relative pt-32 pb-16 md:pt-40">
      <div className="mx-auto max-w-content w-full px-6 md:px-10 grid md:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clay opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-clay" />
            </span>
            <span className="text-xs text-stone">{hero.availability}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-[2.3rem] leading-[1.14] md:text-[3.1rem] md:leading-[1.1] font-semibold tracking-tight text-ink"
          >
            {hero.headlinePrefix}{" "}
            <TextScramble as="span" duration={1} className="text-clay">
              {hero.headlineEmphasis}
            </TextScramble>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-stone max-w-xl leading-relaxed"
          >
            {hero.supporting}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-ink text-surface text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore my work
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/resume/dibyanshi-singh-resume.pdf"
              download
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-line text-sm text-ink hover:border-clay/50 transition-colors duration-300"
            >
              <Download size={15} /> Download résumé
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto md:mx-0 w-[260px] h-[320px] md:w-[320px] md:h-[400px]"
          style={{ perspective: 800 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => {
            setHovering(false);
            mx.set(0);
            my.set(0);
          }}
          ref={portraitRef}
        >
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[2.5rem] bg-clay/25" aria-hidden />

          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_24px_60px_rgba(23,23,20,0.15)] border border-white/50"
          >
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Dibyanshi Singh"
              fill
              sizes="(max-width: 768px) 260px, 320px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
          </motion.div>

          <svg className="absolute -left-10 top-10 hidden md:block" width="60" height="2" aria-hidden>
            <line x1="0" y1="1" x2="60" y2="1" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-content px-6 md:px-10 mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-line pt-8"
      >
        {proof.map((p) => (
          <div key={p.label}>
            <p className="font-display text-2xl md:text-3xl font-semibold text-ink">{p.value}</p>
            <p className="text-sm text-stone mt-1">{p.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
