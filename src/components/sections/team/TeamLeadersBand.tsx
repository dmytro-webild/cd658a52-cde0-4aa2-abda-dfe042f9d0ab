import { useRef, useSyncExternalStore } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import HydraArrowPill from "@/components/kit/HydraArrowPill";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";
import MaskedLineReveal from "@/components/animation/MaskedLineReveal";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Leader = { title: string; description?: string; imageSrc: string; imageAlt?: string };

type TeamLeadersBandProps = {
  title?: string;
  button?: { text: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  items?: Leader[];
  ariaLabel?: string;
  className?: string;
};

const px = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;
const wipe = [0.65, 0, 0.35, 1] as const;
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

const defaults: Leader[] = [
  { title: "Elena Marsh", description: "Chief executive", imageSrc: px(8790862) },
  { title: "Martin Hale", description: "Chief technology officer", imageSrc: px(39974543) },
  { title: "Sanne Bakker", description: "Head of operations", imageSrc: px(14055666) },
  { title: "Tomas Berg", description: "Director of grid storage", imageSrc: px(8801041) },
];

const SPEEDS = [-1, 1, -1.6, 0.6];

const queries = ["(min-width: 1280px)", "(min-width: 880px)"];
const subscribe = (onChange: () => void) => {
  const lists = queries.map((query) => window.matchMedia(query));
  lists.forEach((list) => list.addEventListener("change", onChange));
  return () => lists.forEach((list) => list.removeEventListener("change", onChange));
};
const readColumns = () => (window.matchMedia(queries[0]).matches ? 4 : window.matchMedia(queries[1]).matches ? 3 : 2);
const useColumns = () => useSyncExternalStore(subscribe, readColumns, () => 4);

type PortraitProps = { item: Leader; index: number; pass: MotionValue<number>; columns: number; reduce: boolean | null; slow: number; ease: [number, number, number, number] };

const Portrait = ({ item, index, pass, columns, reduce, slow, ease }: PortraitProps) => {
  const speed = SPEEDS[(index % columns) % SPEEDS.length] * (columns > 2 ? 5 : 2);
  const drift = useTransform(pass, (p) => `${(0.5 - clamp01(p)) * speed}rem`);

  return (
  <motion.li style={{ y: reduce ? 0 : drift }} className="flex min-w-0 flex-col gap-[0.75rem] will-change-transform">
    <motion.div initial={reduce ? false : "hidden"} whileInView="shown" viewport={{ once: true, amount: 0.05 }} className="relative aspect-[3/4] w-full overflow-hidden">
      <motion.div variants={{ hidden: { scale: 1.08 }, shown: { scale: 1, transition: { duration: slow, ease } } }} className="absolute inset-0">
        <ImageScrollParallax imageSrc={item.imageSrc} imageAlt={item.imageAlt ?? item.title} strength={0.22} className="absolute inset-0 aspect-auto h-full rounded-none" />
      </motion.div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid grid-cols-4">
        {[0, 1, 2, 3].map((column) => (
          <motion.div
            key={column}
            variants={{ hidden: { scaleY: 1 }, shown: { scaleY: 0, transition: { duration: slow * 0.7, ease: wipe, delay: (index % 4) * 0.06 + column * 0.05 } } }}
            className="h-full origin-top bg-background"
          />
        ))}
      </div>
    </motion.div>
    <div className="flex flex-col gap-[0.25rem]">
      <h3 className="text-[length:var(--text-body-lg)] leading-[1.25] tracking-[-0.02em] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]">{item.title}</h3>
      {item.description && (
        <p className="text-[length:var(--text-small)] leading-[1.4] text-muted-foreground [overflow-wrap:anywhere]">{item.description}</p>
      )}
    </div>
  </motion.li>
  );
};

const TeamLeadersBand = ({
  title = "Meet the people behind every project",
  button = { text: "View leadership", href: "#team" },
  imageSrc = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
  imageAlt = "",
  items = defaults,
  ariaLabel,
  className,
}: TeamLeadersBandProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const { scrollYProgress: rise } = useScroll({ target: gridRef, offset: ["start 0.9", "start 0.45"] });
  const { scrollYProgress: pass } = useScroll({ target: gridRef, offset: ["start end", "end start"] });
  const titleOpacity = useTransform(rise, (p) => 1 - clamp01(p));
  const titleY = useTransform(rise, (p) => `${clamp01(p) * -3}rem`);
  const { scrollYProgress: cover } = useScroll({ target: gridRef, offset: ["start end", "start start"] });
  const shade = useTransform(cover, (p) => clamp01(p) * 0.45);
  const columns = useColumns();

  return (
    <section aria-label={ariaLabel ?? title ?? "Team"} data-scene className={cn("relative overflow-x-clip bg-background text-foreground", className)}>
      <div data-nav-dark className="sticky top-0 h-svh w-full overflow-hidden">
        <ImageScrollParallax imageSrc={imageSrc} imageAlt={imageAlt} strength={0.38} className="absolute inset-0 aspect-auto h-full rounded-none" />
        <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
        {!reduce && <motion.div aria-hidden="true" style={{ opacity: shade }} className="pointer-events-none absolute inset-0 z-[2] bg-black" />}
        <motion.div
          style={reduce ? undefined : { opacity: titleOpacity, y: titleY }}
          className="absolute inset-0 mx-auto flex w-[var(--container)] flex-col items-center justify-center gap-[clamp(1.5rem,2.4vw,2rem)] text-center"
        >
          {title && (
            <MaskedLineReveal
              tag="h2"
              text={title}
              stagger={0.06}
              duration={kit.base}
              ease={kit.ease}
              className="max-w-[14em] text-balance text-[length:var(--text-h2)] leading-[1.1] tracking-[var(--heading-tracking)] text-white [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]"
            />
          )}
          {button && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: "1rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: kit.base, ease: kit.ease, delay: 0.2 }}
            >
              <HydraArrowPill text={button.text} href={button.href} tone="lime" />
            </motion.div>
          )}
        </motion.div>
      </div>
      {items.length > 0 && (
        <div ref={gridRef} className="relative z-10 bg-background py-[var(--section-space)]">
          <ul className="mx-auto grid w-[var(--container)] grid-cols-2 gap-x-[var(--gap)] gap-y-[clamp(2rem,4vw,3.5rem)] py-[clamp(1.5rem,4vw,4rem)] lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item, index) => (
              <Portrait key={index} item={item} index={index} pass={pass} columns={columns} reduce={reduce} slow={kit.slow} ease={kit.ease} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default TeamLeadersBand;
