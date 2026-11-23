import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import MaskedLineReveal from "@/components/animation/MaskedLineReveal";
import HydraArrowPill from "@/components/kit/HydraArrowPill";
import { useKitMotion } from "@/components/kit/kitMotion";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type CtaPlusBandProps = {
  label?: string;
  title?: string;
  primaryButton?: { text: string; href?: string };
  secondaryButton?: { text: string; href?: string };
  ariaLabel?: string;
  className?: string;
};

const RINGS = Array.from({ length: 20 }, (_, index) => 120 + index * 84);

const CtaPlusBand = ({
  label = "Contact",
  title = "Let's shape the future of clean energy together",
  primaryButton = { text: "Get in touch", href: "#contact" },
  secondaryButton = { text: "See our projects", href: "#projects" },
  ariaLabel,
  className,
}: CtaPlusBandProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: grow } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const { scrollYProgress: pass } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const clipPath = useTransform(grow, (value) => {
    const k = 1 - Math.min(1, Math.max(0, value));
    return `inset(${k * 3}rem calc((100% - var(--container)) / 2 * ${k}) round ${k * 0.5}rem)`;
  });
  const ringScale = useTransform(pass, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} aria-label={ariaLabel ?? title} className={cn("relative bg-background text-accent-foreground", className)}>
      <div className="relative flex flex-col">
      <motion.div style={{ clipPath: reduce ? undefined : clipPath }} className="relative flex flex-col justify-center overflow-hidden bg-accent py-[var(--section-space)]">
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 1440 640"
          preserveAspectRatio="xMaxYMin slice"
          fill="none"
          style={{ scale: reduce ? 1 : ringScale }}
          className="absolute right-0 top-0 h-[110%] w-[110%] origin-top-right stroke-[color-mix(in_srgb,var(--accent-foreground)_10%,var(--accent))]"
        >
          {RINGS.map((radius) => (
            <circle key={radius} cx="1440" cy="0" r={radius} strokeWidth="36" />
          ))}
        </motion.svg>
        <div className="relative mx-auto flex w-[var(--container)] flex-col items-center gap-[clamp(1.5rem,2.5vw,2rem)] text-center">
          {label && (
            <motion.div initial={reduce ? false : "hidden"} whileInView="shown" viewport={{ once: true }} className="relative">
              <motion.div
                aria-hidden="true"
                variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1, transition: { duration: kit.base, ease: kit.easeInOut } } }}
                className="absolute inset-0 origin-left bg-deep"
              />
              <motion.p
                variants={{ hidden: { opacity: 0 }, shown: { opacity: 1, transition: { duration: kit.fast, delay: kit.base * 0.6 } } }}
                className="relative whitespace-nowrap px-2 py-2 font-mono text-[length:var(--text-label)] uppercase leading-[1.2] text-accent"
              >
                {label}
              </motion.p>
            </motion.div>
          )}
          <MaskedLineReveal tag="h2" text={title} delay={0.15} className="mx-auto max-w-[15em] text-balance text-[length:var(--text-h2)] leading-[1.15]" />
          {(primaryButton || secondaryButton) && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: kit.base, ease: kit.ease, delay: 0.35 }}
              className="flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row"
            >
              {primaryButton && <HydraArrowPill text={primaryButton.text} href={primaryButton.href} tone="deep" />}
              {secondaryButton && (
                <a href={secondaryButton.href ?? "#"} className="btn-link text-accent-foreground">
                  <p className="m-0">{secondaryButton.text}</p>
                </a>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default CtaPlusBand;
