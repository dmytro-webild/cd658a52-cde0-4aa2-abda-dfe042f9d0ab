"use client";

import { useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import useMenuDialog from "@/components/kit/useMenuDialog";
import HydraArrowPill from "@/components/kit/HydraArrowPill";
import { useLanguage } from "@/context/LanguageContext";

type NavItem = { name: string; href: string };
type Button = { text: string; href: string };

type NavbarBoxLinksProps = {
  brand?: string;
  logoSrc?: string;
  navItems?: NavItem[];
  primaryButton?: Button;
  menuText?: string;
  closeText?: string;
  introDelay?: number;
};

const EASE_OUT = [0.19, 1, 0.22, 1] as const;

const DEFAULT_ITEMS: NavItem[] = [
  { name: "Projects", href: "#projects" },
  { name: "Solutions", href: "#solutions" },
  { name: "Company", href: "#about" },
  { name: "News", href: "#news" },
];

const NavbarBoxLinks = ({
  brand = "©Solvar",
  logoSrc,
  navItems = DEFAULT_ITEMS,
  primaryButton = { text: "Contact us", href: "#contact" },
  menuText = "Menu",
  closeText = "Close",
  introDelay = 0,
}: NavbarBoxLinksProps) => {
  const { language, setLanguage } = useLanguage();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  useMenuDialog(open, panelRef, () => setOpen(false));

  const { scrollY } = useScroll();
  const shift = useMotionValue(0);
  const hidden = useRef(false);
  useMotionValueEvent(scrollY, "change", (value) => {
    const previous = scrollY.getPrevious() ?? 0;
    const hide = value > 120 && value > previous;
    if (hide === hidden.current) return;
    hidden.current = hide;
    animate(shift, hide ? -140 : 0, { duration: reduce ? 0 : 0.6, ease: EASE_OUT });
  });

  const logo = (
    <div className="flex items-center gap-2.5">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={`${brand} Logo Symbol`}
          loading="eager"
          decoding="async"
          className="h-7 md:h-8 w-auto object-contain shrink-0"
        />
      ) : (
        <span className="font-bold text-base text-white">{brand}</span>
      )}
      <div className="flex flex-col text-left justify-center">
        <span className="font-extrabold text-xs md:text-sm leading-tight tracking-tight text-white">{brand}</span>
        <span className="text-[8px] sm:text-[9px] md:text-[10px] text-primary font-semibold tracking-wider uppercase whitespace-nowrap leading-none mt-0.5">BEYOND IT SOLUTIONS CO.,LTD.</span>
      </div>
    </div>
  );

  const LangSwitcher = ({ className = "" }: { className?: string }) => (
    <div className={`inline-flex items-center rounded-full bg-card/90 border border-border p-0.5 text-xs font-mono shadow-sm shrink-0 ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage("th")}
        aria-label="สลับเป็นภาษาไทย"
        className={`px-2.5 py-1 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
          language === "th"
            ? "bg-primary text-primary-cta-text shadow"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        TH
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        className={`px-2.5 py-1 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
          language === "en"
            ? "bg-primary text-primary-cta-text shadow"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );

  return (
    <>
      <motion.nav
        aria-label="Main"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_OUT, delay: introDelay }}
        style={{ y: shift }}
        className="fixed inset-x-0 top-[var(--gutter)] z-50"
      >
        <div className="mx-auto flex w-[var(--container)] items-start justify-between gap-[1rem]">
          <div className="flex min-w-0 flex-1 items-center justify-between gap-[1.5rem] rounded-[0.5rem] bg-card p-[0.75rem] md:p-[1rem] text-card-foreground lg:flex-none lg:justify-start lg:py-[1rem]">
            <a href="#" className="group flex min-w-0 shrink-0 items-center py-1.5 px-3 md:px-3.5 rounded-lg bg-background/60 border border-border/60 hover:border-primary/50 hover:bg-background/90 transition-all shadow-xs mr-1 lg:mr-3">
              {logo}
            </a>
            {navItems.length > 0 && (
              <ul className="hidden items-center gap-[1.75rem] lg:flex">
                {navItems.map((item, i) => (
                  <li key={`${i}-${item.href}`}>
                    <a href={item.href} className="btn-link whitespace-nowrap pb-[0.2rem] font-normal">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <LangSwitcher className="hidden lg:inline-flex ml-2" />
            <div className="flex items-center gap-3 lg:hidden">
              <LangSwitcher />
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className="whitespace-nowrap font-[family-name:var(--font-label)] text-[length:var(--text-label)] uppercase leading-none"
              >
                {menuText}
              </button>
            </div>
          </div>
          {primaryButton && (
            <div className="hidden lg:block">
              <HydraArrowPill text={primaryButton.text} href={primaryButton.href} tone="deep" />
            </div>
          )}
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={menuText}
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[70] flex flex-col bg-background text-foreground lg:hidden"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 w-[var(--container)] -translate-x-1/2">
              {["0%", "25%", "50%", "75%"].map((left) => (
                <div key={left} style={{ left }} className="absolute inset-y-0 w-px bg-border" />
              ))}
              <div className="absolute inset-y-0 right-0 w-px bg-border" />
            </div>

            <div className="relative mx-auto mt-[var(--gutter)] flex w-[var(--container)] items-center justify-between gap-[1rem] rounded-[0.5rem] bg-card p-[0.75rem] md:p-[1rem] text-card-foreground">
              <a href="#" onClick={() => setOpen(false)} className="group flex min-w-0 shrink-0 items-center py-1.5 px-3 md:px-3.5 rounded-lg bg-background/60 border border-border/60 hover:border-primary/50 transition-all shadow-xs">
                {logo}
              </a>
              <div className="flex items-center gap-3">
                <LangSwitcher />
                <button type="button" onClick={() => setOpen(false)} className="whitespace-nowrap font-[family-name:var(--font-label)] text-[length:var(--text-label)] uppercase leading-none">
                  {closeText}
                </button>
              </div>
            </div>

            <ul className="relative mx-auto mt-[3rem] flex w-[var(--container)] flex-col gap-[0.5rem]">
              {navItems.map((item, i) => (
                <li key={`${i}-${item.href}`} className="overflow-hidden pb-[0.15em] -mb-[0.15em]">
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 + i * 0.05 }}
                    className="block font-[family-name:var(--font-heading)] text-[length:var(--text-h2)] leading-[1.1] tracking-[var(--heading-tracking)] [overflow-wrap:anywhere]"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>

            {primaryButton && (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: "1rem" }}
                animate={{ opacity: 1, y: "0rem" }}
                transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.5 }}
                className="relative mx-auto mt-auto w-[var(--container)] pb-[2rem]"
              >
                <HydraArrowPill text={primaryButton.text} href={primaryButton.href} tone="deep" />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarBoxLinks;
