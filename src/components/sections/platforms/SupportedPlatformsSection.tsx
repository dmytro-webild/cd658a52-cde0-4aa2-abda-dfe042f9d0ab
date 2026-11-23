"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import HydraArrowPill from "@/components/kit/HydraArrowPill";

type PlatformItem = {
  name: string;
  tagline: string;
  svgIcon: React.ReactNode;
};

type PlatformGroup = {
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  badge: string;
  items: PlatformItem[];
};

export default function SupportedPlatformsSection() {
  const { t } = useLanguage();

  const groups: PlatformGroup[] = [
    {
      category: "AI Platforms",
      categoryEn: "AI Platforms",
      badge: "Generative AI & LLMs",
      description: "เชื่อมต่อโมเดลปัญญาประดิษฐ์ระดับโลกเข้ากับงานองค์กร",
      descriptionEn: "Integrate leading enterprise AI models directly into business workflows",
      items: [
        {
          name: "Claude",
          tagline: "Anthropic Reasoning & Analysis",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          ),
        },
        {
          name: "ChatGPT",
          tagline: "OpenAI GPT-4o & Enterprise AI",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M22.28 10.74a5.9 5.9 0 0 0-.48-4.7 6.04 6.04 0 0 0-6.73-2.9 5.88 5.88 0 0 0-4.46-2A6.02 6.02 0 0 0 4.7 4.14a5.9 5.9 0 0 0-3.3 4.3 6.04 6.04 0 0 0 .7 7.33 5.88 5.88 0 0 0 .48 4.7 6.04 6.04 0 0 0 6.73 2.9 5.88 5.88 0 0 0 4.46 2 6.02 6.02 0 0 0 5.91-3.01 5.9 5.9 0 0 0 3.3-4.3 6.04 6.04 0 0 0-.7-7.32zM12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z" />
            </svg>
          ),
        },
        {
          name: "Gemini",
          tagline: "Google Multimodal Engine",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" />
            </svg>
          ),
        },
        {
          name: "Microsoft Copilot",
          tagline: "Workplace Copilot Studio",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <rect x="2" y="2" width="9.5" height="9.5" rx="1" />
              <rect x="12.5" y="2" width="9.5" height="9.5" rx="1" />
              <rect x="2" y="12.5" width="9.5" height="9.5" rx="1" />
              <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="1" />
            </svg>
          ),
        },
        {
          name: "DeepSeek",
          tagline: "Open Reasoning & Code Models",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.94 5 8.65v-3.23c-1.78-1.12-3-3.1-3-5.42 0-3.53 2.87-6.4 6.4-6.4s6.4 2.87 6.4 6.4c0 2.32-1.22 4.3-3 5.42v3.23c2.99-1.71 5-4.95 5-8.65 0-5.52-4.48-10-10-10z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Modern Work",
      categoryEn: "Modern Work",
      badge: "Cloud Workplace",
      description: "เครื่องมือระบบคลาวด์เพิ่มประสิทธิภาพการทำงานร่วมกัน",
      descriptionEn: "Cloud productivity and enterprise collaboration ecosystems",
      items: [
        {
          name: "Google Workspace",
          tagline: "Gmail, Drive, Docs & Cloud Services",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
          ),
        },
        {
          name: "Microsoft 365 Copilot",
          tagline: "Word, Excel, Teams & Enterprise AI",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" aria-hidden="true">
              <path d="M11.5 2h-7A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-7M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Backup & IT",
      categoryEn: "Backup & IT",
      badge: "Managed Infrastructure",
      description: "โซลูชันสำรองข้อมูลและบริหารจัดการระบบ IT ครบวงจร",
      descriptionEn: "Comprehensive data backup, recovery, and RMM solutions",
      items: [
        {
          name: "NinjaOne",
          tagline: "RMM & Unified Endpoint Management",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.6 4.8 8 12 4.8zM4 9.6l7 3.5v7.1l-7-3.5V9.6zm16 7.1l-7 3.5v-7.1l7-3.5v7.1z" />
            </svg>
          ),
        },
        {
          name: "Acronis",
          tagline: "Cyber Backup & Cloud Disaster Recovery",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
          ),
        },
        {
          name: "Commvault",
          tagline: "Enterprise Data Protection & Resilience",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Cyber Security",
      categoryEn: "Cyber Security",
      badge: "EDR & Threat Protection",
      description: "ระบบความปลอดภัยระดับเอ็นเทอร์ไพรส์ป้องกันภัยคุกคามไซเบอร์",
      descriptionEn: "Enterprise-grade endpoint security, EDR, and threat intelligence",
      items: [
        {
          name: "Bitdefender",
          tagline: "GravityZone Endpoint Security & XDR",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-8-3zm-1 6h2v3h3v2h-3v3h-2v-3H8v-2h3V8z" />
            </svg>
          ),
        },
        {
          name: "SentinelOne",
          tagline: "Singularity XDR Autonomous Security",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z" />
            </svg>
          ),
        },
        {
          name: "CrowdStrike",
          tagline: "Falcon Platform Cloud Security & MDR",
          svgIcon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
              <path d="M12 2L2 9l3.5 13L12 18l6.5 4L22 9 12 2zm0 4.2l6.2 4.3-1.8 6.8L12 14.7l-4.4 2.6-1.8-6.8L12 6.2z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section className="relative py-24 bg-background text-foreground border-t border-border/50">
      <div className="mx-auto w-[var(--container)] px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-primary bg-primary/10 border border-primary/20 uppercase mb-4"
          >
            {t("รองรับแพลตฟอร์มและเทคโนโลยีชั้นนำ", "Supported Platforms & Technology")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5"
          >
            {t("บูรณาการเข้ากับระบบและแอปพลิเคชันธุรกิจของคุณ", "Integrated with Enterprise Technology Systems")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            {t(
              "BYITS รองรับการเชื่อมต่อและดูแลระบบ IT, Cloud, Cybersecurity และ AI Models เพื่อยกระดับการทำงานอย่างเต็มประสิทธิภาพ",
              "BYITS supports seamless connection and management across IT, Cloud, Cybersecurity, and AI Model ecosystems."
            )}
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="rounded-2xl bg-card border border-border/80 p-6 md:p-8 flex flex-col justify-between hover:border-primary/40 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {t(group.category, group.categoryEn)}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t(group.description, group.descriptionEn)}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 shrink-0">
                    {group.badge}
                  </span>
                </div>

                {/* Logo Cards - Dark Navy Background with White Logos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="group/card rounded-xl bg-[#05111B] border border-white/10 text-white p-4 flex items-center gap-3.5 shadow-lg hover:border-primary/50 hover:bg-[#0A1929] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="p-2.5 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white group-hover/card:bg-white/20 transition-colors">
                        {item.svgIcon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm text-white truncate">
                          {item.name}
                        </div>
                        <div className="text-[11px] font-medium text-slate-300/80 truncate mt-0.5">
                          {item.tagline}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA & Note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
            {t(
              "* เครื่องหมายการค้า และโลโก้เป็นลิขสิทธิ์ของบริษัทผู้จัดทำแต่ละแห่ง โดย BYITS เป็นผู้ให้บริการเชี่ยวชาญด้าน System Integration และ IT Consulting",
              "* Trademarks and logos belong to their respective owners. BYITS delivers enterprise system integration, architecture design, and IT consulting services."
            )}
          </p>
          <HydraArrowPill
            text={t("ปรึกษาการเชื่อมต่อระบบ", "Consult System Integration")}
            href="#contact"
            tone="lime"
          />
        </div>
      </div>
    </section>
  );
}
