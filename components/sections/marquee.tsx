import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/motion/scroll-velocity";
import { marqueeThemes } from "@/lib/data";

export function Marquee() {
  return (
    <ScrollVelocityContainer className="border-y border-line py-6">
      <ScrollVelocityRow baseVelocity={2.2} direction={1}>
        {marqueeThemes.map((item) => (
          <span key={item} className="mx-8 inline-flex items-center">
            <span className="text-sm uppercase tracking-[0.2em] text-stone/70">{item}</span>
            <span className="ml-8 text-clay">&#10022;</span>
          </span>
        ))}
      </ScrollVelocityRow>
      <ScrollVelocityRow baseVelocity={1.6} direction={-1} className="mt-3">
        {marqueeThemes
          .slice()
          .reverse()
          .map((item) => (
            <span key={item} className="mx-8 inline-flex items-center">
              <span className="text-sm uppercase tracking-[0.2em] text-stone/50">{item}</span>
              <span className="ml-8 text-clay/70">&#10022;</span>
            </span>
          ))}
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
}
