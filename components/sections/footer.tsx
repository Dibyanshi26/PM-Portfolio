import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/motion/scroll-velocity";
import { footerMarquee } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <ScrollVelocityContainer className="py-5">
        <ScrollVelocityRow baseVelocity={1.2} direction={1}>
          {footerMarquee.map((item) => (
            <span key={item} className="mx-8 inline-flex items-center">
              <span className="text-xs uppercase tracking-[0.2em] text-stone/50">{item}</span>
              <span className="ml-8 text-clay/60">&#10022;</span>
            </span>
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="mx-auto max-w-content px-6 md:px-10 py-8 flex items-center justify-center gap-3 text-xs text-stone border-t border-line">
        <p>© {new Date().getFullYear()} Dibyanshi Singh. Built with Next.js.</p>
      </div>
    </footer>
  );
}
