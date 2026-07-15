"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { nav } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-paper/75 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-clay origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className="mx-auto max-w-content px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-[15px] font-semibold tracking-tight text-ink">
          Dibyanshi Singh
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-stone hover:text-ink transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#resume"
          className="inline-flex items-center h-10 px-5 rounded-full border border-line bg-surface/70 text-sm text-ink hover:border-clay/50 transition-colors duration-300"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
