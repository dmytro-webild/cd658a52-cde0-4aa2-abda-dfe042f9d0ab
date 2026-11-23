import { useId, useRef, useState, type KeyboardEvent } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useImageReady, useKitMotion } from "@/components/kit/kitMotion";
import MaskedLineReveal from "@/components/animation/MaskedLineReveal";
import HydraArrowPill from "@/components/kit/HydraArrowPill";
import { MotionMedia } from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Industry = { title: string; description?: string; facts?: string[]; imageSrc?: string; imageAlt?: string; href?: string };

type ServicesIndustryTilesProps = {
  label?: string;
  title?: string;
  description?: string;
  items?: Industry[];
  linkText?: string;
  ariaLabel?: string;
  className?: string;
};

const photo = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&w=800`;

const defaultItems: Industry[] = [
  { title: "Data centres", description: "Round the clock power with storage on site.", facts: ["Battery storage bridges grid dips", "Solar and storage on one contract", "Monitored daily from Rotterdam"], imageSrc: photo(4508751), imageAlt: "Server aisle in a data centre", href: "#contact" },
  { title: "Manufacturing", description: "Rooftop solar sized to your shift pattern.", facts: ["Rooftop arrays from 200 kWp", "Load matched to shift schedules", "Installed without stopping lines"], imageSrc: photo(5824883), imageAlt: "Workshop floor", href: "#contact" },
  { title: "Logistics", description: "Charging and power for fleets and hubs.", facts: ["Depot charging for electric trucks", "Peak shaving at busy loading hours", "Grid upgrades handled for you"], imageSrc: photo(13961751), imageAlt: "Fleet of trucks from above", href: "#contact" },
  { title: "Agriculture", description: "Field solar that shares land with crops.", facts: ["Panels raised above working crops", "Irrigation pumps run on daytime sun", "Land leases set for 25 years"], imageSrc: photo(1166209), imageAlt: "Field at sunset", href: "#contact" },
];

const strips = [0, 1, 2, 3];

const columns = (count: number) => {
  if (count <= 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-1 md:grid-cols-2";
  if (count === 3) return "grid-cols-1 md:grid-cols-3";
  if (count === 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
};

type FlipCardProps = { item: Industry; index: number; linkText: string; reduce: boolean };

const FlipCard = ({ item, index, linkText, reduce }: FlipCardProps) => {
  const kit = useKitMotion();
  const backId = useId();
  const liRef = useRef<HTMLLIElement>(null);
  const inView = useInView(liRef, { once: true, margin: "0px 0px -10% 0px" });
  const ready = useImageReady(liRef, inView);
  const [flipped, setFlipped] = useState(false);
  const frontRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const openCard = () => {
    setFlipped(true);
    requestAnimationFrame(() => closeRef.current?.focus({ preventScroll: true }));
  };

  const closeCard = () => {
    setFlipped(false);
    requestAnimationFrame(() => frontRef.current?.focus({ preventScroll: true }));
  };

  const onFrontKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCard();
    }
  };

  const onBackKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") closeCard();
  };

  return (
    <motion.li
      ref={liRef}
      initial={reduce ? false : "hidden"}
      animate={reduce || (inView && ready) ? "shown" : "hidden"}
      variants={{ hidden: { opacity: 0, y: "2rem" }, shown: { opacity: 1, y: 0, transition: { duration: kit.base, ease: kit.ease, delay: (index % 4) * 0.06 } } }}
      className="flex"
    >
      <div className="relative aspect-[4/5] w-full perspective-[1400px] lg:aspect-[3/4]">
        <div
          className={cn(
            "relative size-full transform-3d",
            !reduce && "transition-transform duration-[var(--dur-slow)] ease-[var(--ease-in-out)]",
            !reduce && flipped && "rotate-y-180"
          )}
        >
          {/* FRONT CARD */}
          <div
            ref={frontRef}
            role="button"
            tabIndex={flipped ? -1 : 0}
            aria-expanded={flipped}
            aria-controls={backId}
            aria-label={`Show details for ${item.title}`}
            aria-hidden={flipped}
            inert={flipped}
            onClick={openCard}
            onKeyDown={onFrontKey}
            className={cn(
              "kit-card group absolute inset-0 flex cursor-pointer flex-col justify-end overflow-hidden p-6 lg:p-7 text-left outline-none backface-hidden rounded-[var(--radius-card)] border border-border/80 hover:border-accent/60 transition-all duration-300 shadow-xl",
              flipped && "pointer-events-none",
              reduce && "transition-opacity duration-[var(--dur-base)] ease-[var(--ease-out)]",
              reduce && flipped && "opacity-0"
            )}
          >
            {/* FULL BLEED BACKGROUND IMAGE */}
            {item.imageSrc && (
              <div className="absolute inset-0 size-full overflow-hidden">
                <MotionMedia
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.title}
                  loading="lazy"
                  decoding="async"
                  variants={reduce ? undefined : { hidden: { scale: 1.15 }, shown: { scale: 1, transition: { duration: kit.slow, ease: kit.ease, delay: 0.15 } } }}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* GRADIENT OVERLAY FOR TEXT VISIBILITY & CONTRAST */}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/60 to-black/35 transition-colors duration-300 group-hover:from-deep group-hover:via-deep/75" />
                
                {/* ENTRY STRIP REVEAL ANIMATION */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid grid-cols-4 z-10">
                  {strips.map((strip) => (
                    <motion.div
                      key={strip}
                      variants={reduce ? undefined : { hidden: { scaleY: 1 }, shown: { scaleY: 0, transition: { duration: kit.base, ease: kit.easeInOut, delay: 0.15 + strip * 0.07 } } }}
                      initial={reduce ? { scaleY: 0 } : undefined}
                      className="h-full origin-top bg-card"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* PLUS (+) EXPAND ICON BUTTON */}
            <div
              aria-hidden="true"
              className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full bg-deep/80 text-foreground border border-white/20 backdrop-blur-md transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent shadow-lg"
            >
              <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M8 2.5v11M2.5 8h11" />
              </svg>
            </div>

            {/* FRONT CARD CONTENT WITH HIGH CONTRAST */}
            <div className="relative z-20 flex flex-col gap-2">
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-foreground drop-shadow-md group-hover:text-accent transition-colors duration-200">
                {item.title}
              </h3>
              {item.description && (
                <p className="line-clamp-2 text-sm text-foreground/90 leading-relaxed font-normal drop-shadow-sm">
                  {item.description}
                </p>
              )}
              <div className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
                <span>{linkText || "ดูรายละเอียด"}</span>
                <svg className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* BACK CARD */}
          <div
            id={backId}
            aria-hidden={!flipped}
            inert={!flipped}
            onKeyDown={onBackKey}
            className={cn(
              "absolute inset-0 z-30 flex flex-col justify-between gap-4 overflow-hidden rounded-[var(--radius-card)] bg-deep border border-accent/40 p-5 lg:p-6 pt-14 text-accent backface-hidden shadow-2xl",
              !flipped && "pointer-events-none",
              reduce ? cn("transition-opacity duration-[var(--dur-base)] ease-[var(--ease-out)]", flipped ? "opacity-100" : "opacity-0") : "rotate-y-180"
            )}
          >
            <button
              ref={closeRef}
              type="button"
              aria-label="Close details"
              onClick={closeCard}
              className="absolute right-4 top-4 grid size-10 cursor-pointer place-items-center rounded-full bg-accent text-accent-foreground outline-none transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-deep shadow-lg z-40"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 rotate-45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M8 2.5v11M2.5 8h11" />
              </svg>
            </button>

            <div className="flex flex-col gap-2">
              <p className="text-xl lg:text-2xl font-bold tracking-tight text-accent">{item.title}</p>
              {item.description && (
                <p className="text-sm lg:text-base leading-relaxed text-foreground/90 font-medium">
                  {item.description}
                </p>
              )}
            </div>

            {item.facts && item.facts.length > 0 && (
              <ul className="flex flex-col border-t border-accent/20 my-1">
                {item.facts.map((fact, factIndex) => (
                  <li key={factIndex} className="border-b border-accent/20 py-2 flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <p className="text-xs lg:text-sm leading-snug text-foreground/90 font-medium">{fact}</p>
                  </li>
                ))}
              </ul>
            )}

            <HydraArrowPill text={linkText} href={item.href ?? "#"} tone="lime" className="self-start" />
          </div>
        </div>
      </div>
    </motion.li>
  );
};

const ServicesIndustryTiles = ({ label, title = "Industries we serve", description, items = defaultItems, linkText = "Learn more", ariaLabel, className }: ServicesIndustryTilesProps) => {
  const reduce = useReducedMotion() ?? false;
  const kit = useKitMotion();

  return (
    <section aria-label={ariaLabel ?? title ?? "Industries"} className={cn("relative overflow-x-clip bg-background py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto w-[var(--container)]">
        {(label || title || description) && (
          <div className="flex flex-col items-start gap-[clamp(1rem,1.6vw,1.5rem)] lg:flex-row lg:items-end lg:justify-between">
            <div className="flex w-full min-w-0 flex-col items-start gap-[clamp(1rem,1.6vw,1.5rem)]">
              {label && (
                <motion.div
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: kit.fast, ease: kit.easeInOut }}
                  className="origin-left bg-accent px-[0.5rem] py-[0.25rem] text-accent-foreground"
                >
                  <motion.p
                    initial={reduce ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: kit.fast, delay: kit.fast }}
                    className="whitespace-nowrap font-[family-name:var(--font-label)] text-[length:var(--text-label)] uppercase"
                  >
                    {label}
                  </motion.p>
                </motion.div>
              )}
              {title && (
                <MaskedLineReveal
                  tag="h2"
                  text={title}
                  stagger={0.06}
                  duration={kit.base}
                  ease={kit.ease}
                  className="max-w-[14em] text-balance text-[length:var(--text-h2)] leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]"
                />
              )}
            </div>
            {description && (
              <motion.p
                initial={reduce ? false : { opacity: 0, y: "1rem" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: kit.base, ease: kit.ease, delay: 0.1 }}
                className="max-w-[34rem] text-balance text-[length:var(--text-body)] leading-[1.5] text-muted-foreground lg:max-w-[22rem]"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}

        <ul className={cn("mt-[clamp(1.5rem,3vw,3rem)] grid gap-[0.5rem]", columns(items.length))}>
          {items.map((item, index) => (
            <FlipCard key={index} item={item} index={index} linkText={linkText} reduce={reduce} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesIndustryTiles;
