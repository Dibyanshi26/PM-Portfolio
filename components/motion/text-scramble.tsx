"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export function TextScramble({
  children,
  as = "span",
  duration = 0.9,
  className = "",
  triggerOnView = false,
}: {
  children: string;
  as?: "span" | "p" | "h1" | "h2" | "h3";
  duration?: number;
  className?: string;
  triggerOnView?: boolean;
}) {
  const [display, setDisplay] = useState(children);
  const ref = useRef<HTMLSpanElement>(null);
  const played = useRef(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (played.current || reduce) return;
      played.current = true;

      const target = children;
      const totalFrames = Math.max(8, Math.round((duration * 1000) / 35));
      let frame = 0;

      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const revealCount = Math.floor(progress * target.length);

        setDisplay(
          target
            .split("")
            .map((ch, i) => {
              if (ch === " ") return " ";
              if (i < revealCount) return ch;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (frame >= totalFrames) {
          clearInterval(interval);
          setDisplay(target);
        }
      }, 35);
    };

    if (!triggerOnView) {
      run();
      return;
    }

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) run();
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Tag = as;

  return (
    <Tag ref={ref as React.Ref<never>} className={className} aria-label={children}>
      {display}
    </Tag>
  );
}
