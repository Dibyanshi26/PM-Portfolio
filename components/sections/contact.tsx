"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Github, PenLine, MapPin, Download } from "lucide-react";
import { TextScramble } from "@/components/motion/text-scramble";
import { contact } from "@/lib/data";

const links = [
  { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
  { label: "GitHub", href: contact.github, icon: Github },
  { label: "Medium", href: contact.medium, icon: PenLine },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="mx-auto max-w-content px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.18em] text-clay font-medium mb-4">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-ink text-balance max-w-2xl mx-auto">
            Have a messy workflow worth fixing?
          </h2>

          <p className="mt-6 text-lg text-stone">
            <TextScramble as="span" duration={0.9} triggerOnView>
              Let&apos;s build something useful.
            </TextScramble>
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-stone text-sm">
            <MapPin size={14} /> {contact.location}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line bg-surface/70 text-sm text-ink hover:border-clay/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon size={16} /> {label}
              </a>
            ))}
            <a
              href="/resume/dibyanshi-singh-resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-surface text-sm hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download size={16} /> Résumé
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
