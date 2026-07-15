# Dibyanshi Singh — Portfolio (v2, redesign)

Next.js 15 (App Router), TypeScript, Tailwind CSS, and the `motion` package (`motion/react` — the current name for Framer Motion).

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's in this version

- **Palette**: warm off-white background (`#f6f3ed`), dark charcoal text (`#171714`), restrained terracotta accent (`#cc7658`) — set as CSS variables in `app/globals.css` and mirrored in `tailwind.config.ts`.
- **Type**: Manrope (body) + DM Sans (display/headings) — a distinct editorial pairing, not Inter.
- **Hero**: asymmetric layout, a `TextScramble` effect on the emphasized headline phrase, a layered portrait (offset terracotta shape, thin annotation line, floating labels, subtle mouse-parallax tilt), and a résumé-backed proof strip (3+ years, 1M+ records, 25%, 20%).
- **Scroll-velocity marquee**: two opposing rows of your working themes, right after the hero and again (slower) in the footer — speeds up with scroll velocity.
- **About**: replaced the six identical cards with an editorial "career map" (Data → Systems → Product → Enablement), each stage backed by a real example and outcome from your résumé, with an animated connecting line.
- **How I Work**: an interactive circular loop (Listen → Trace → Build → Measure) — click a stage to reveal a real example (the $1,200/quarter fix at People360).
- **Projects**: rich cards with a dark "product panel," a clickable flow diagram (for AI Product Copilot), tabs for Problem / Decision / Solution / Outcome, and a "role" + "user" line. BrandE carries its Hackathon Runner-Up badge and the real validation numbers. An "AI Enablement Work" panel sits below as an experience teaser, not a public project — it doesn't expose confidential employer details.
- **Experience**: interactive accordion timeline, one line of impact visible collapsed, full challenge/actions/outcome/tech on expand. Includes the NUS internship (Oct 2019–Jan 2020).
- **Skills**: a capability map with four selectable nodes (Product Support, AI & Automation, Product Collaboration, Engineering) instead of a static grid — no unsupported skills (no HiveQL/HDFS/fine-tuning claims).
- **Writing**: horizontal editorial rows instead of a card grid, pulling your live Medium feed server-side with a static fallback.
- **Resume**: compact split section (description + buttons on the left, a real thumbnail of your résumé's first page on the right) instead of a large empty preview area.
- **Contact**: "Have a messy workflow worth fixing?" with a `TextScramble` on the closing line, plus email/LinkedIn/GitHub/Medium/résumé links.

## Before you deploy

1. **LinkedIn and GitHub URLs** in `lib/data.ts` (`contact.linkedin`, `contact.github`) are still placeholders — the résumé PDF only had the link *text* ("LinkedIn", "GitHub"), not the actual URLs, so I couldn't pull them from it. Swap in your real profile links.
2. Optional: add a real 1200×630 `public/images/og-image.png` for social share previews.
3. Optional: swap `public/images/projects/*.svg` for real product screenshots if you want the project panels to show actual UI instead of the stylized dark mockup panel.

## Notes / simplifications from the original redesign brief

- The redesign brief referenced a "supplied" `TextScramble` and `ScrollVelocity` component — those weren't literally attached to our conversation, so I built equivalent versions from scratch at `components/motion/text-scramble.tsx` and `components/motion/scroll-velocity.tsx`. They behave the same way (scramble-to-reveal text, scroll-responsive marquee).
- Project panels use a stylized dark "product mockup" panel with a clickable flow diagram rather than literal product screenshots, since none were provided. Swap in real screenshots any time (see above).
- Cursor-follow and "magnetic button" effects are simplified to a lighter tilt/hover treatment rather than full physics-based magnetism, to keep the interaction subtle rather than gimmicky per the brief's own "avoid animation on every element" instruction.
- Mobile project cards stack vertically (full-width tabs) rather than using a swipeable carousel — this keeps content fully accessible without an extra dependency, but I'm happy to add a swipe carousel if you want that specifically.

## Structure

- `app/layout.tsx` — fonts, SEO metadata, structured data
- `app/page.tsx` — assembles all sections in order
- `components/sections/` — one file per section
- `components/motion/` — `text-scramble.tsx`, `scroll-velocity.tsx`
- `lib/data.ts` — all copy and content
- `lib/medium.ts` — live Medium RSS fetch with fallback
