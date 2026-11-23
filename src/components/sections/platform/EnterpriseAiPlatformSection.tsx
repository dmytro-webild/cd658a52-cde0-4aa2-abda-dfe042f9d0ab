"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  MessageSquare,
  FileText,
  Smartphone,
  Mic,
  Eye,
  Bot,
  Brain,
  Headphones,
  Sparkles,
  Maximize2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function EnterpriseAiPlatformSection() {
  const { t } = useLanguage();
  const [showImageModal, setShowImageModal] = useState(false);

  const leftModules = [
    {
      id: "01",
      title: t("Knowledge Chatbot", "Knowledge Chatbot"),
      description: t("ตอบคำถามจากข้อมูลขององค์กร", "Answers queries using enterprise knowledge bases"),
      icon: MessageSquare,
      color: "from-teal-500 to-emerald-400"
    },
    {
      id: "02",
      title: t("Document OCR", "Document OCR"),
      description: t("อ่านเอกสารไทยและอังกฤษ", "Reads and extracts Thai & English document data"),
      icon: FileText,
      color: "from-sky-500 to-cyan-400"
    },
    {
      id: "03",
      title: t("LINE AI Assistant", "LINE AI Assistant"),
      description: t("รับคำขอและตอบกลับผ่าน LINE", "Processes inquiries & automated responses via LINE"),
      icon: Smartphone,
      color: "from-emerald-400 to-green-500"
    },
    {
      id: "04",
      title: t("Voice to Text", "Voice to Text"),
      description: t("ถอดเสียงและสรุปประเด็น", "Transcribes speech & summarizes key discussions"),
      icon: Mic,
      color: "from-blue-500 to-indigo-400"
    }
  ];

  const rightModules = [
    {
      id: "05",
      title: t("Computer Vision", "Computer Vision"),
      description: t("วิเคราะห์ภาพและวิดีโอ", "Analyzes image & video media automatically"),
      icon: Eye,
      color: "from-cyan-400 to-teal-400"
    },
    {
      id: "06",
      title: t("RPA", "RPA Automation"),
      description: t("จัดการงานซ้ำใน Workflow", "Automates repetitive tasks in operational workflows"),
      icon: Bot,
      color: "from-emerald-500 to-sky-400"
    },
    {
      id: "07",
      title: t("Enterprise LLM", "Enterprise LLM"),
      description: t("ค้นหาและสร้างเนื้อหา", "Intelligent search & automated content generation"),
      icon: Brain,
      color: "from-indigo-400 to-purple-400"
    },
    {
      id: "08",
      title: t("Voice AI", "Voice AI"),
      description: t("รับสายและตอบคำถามอัตโนมัติ", "Automated call answering & interactive voice response"),
      icon: Headphones,
      color: "from-sky-400 to-blue-500"
    }
  ];

  const imageSrc = "https://storage.googleapis.com/webild/users/user_3MVXxuJnaQd6WXXoRiQdmiVZRX7/uploaded-1795451278301-ac6r7g40.png";

  return (
    <section id="enterprise-platform" className="relative py-24 bg-[#05111b] text-foreground border-t border-border/60 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto w-[var(--container)] px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            {t("ENTERPRISE AI PLATFORM", "ENTERPRISE AI PLATFORM")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            {t("BYITS Enterprise AI Platform", "BYITS Enterprise AI Platform")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg leading-relaxed"
          >
            {t(
              "8 โมดูลที่เชื่อม AI เข้ากับข้อมูลและงานขององค์กรอย่างสมบูรณ์แบบ",
              "8 Core Modules Seamlessly Connecting AI to Enterprise Data & Workflows"
            )}
          </motion.p>
        </div>

        {/* Original Diagram Image Showcase (Featured Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-slate-950/80 p-2 shadow-2xl group"
        >
          <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[2/1] max-h-[480px]">
            <img
              src={imageSrc}
              alt="BYITS Enterprise AI Platform Architecture"
              className="w-full h-full object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end justify-between p-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider block mb-1">
                  {t("ARCHITECTURAL OVERVIEW", "ARCHITECTURAL OVERVIEW")}
                </span>
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  {t("BYITS Enterprise AI Platform 8 Modules Diagram", "BYITS Enterprise AI Platform 8 Modules Diagram")}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowImageModal(true)}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-800/90 text-xs font-bold transition-all cursor-pointer shadow-lg"
              >
                <Maximize2 className="w-4 h-4" />
                {t("ขยายภาพพรีวิว", "Expand Diagram")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* 8 Interactive Module Cards Grid (4 Left - Orb Center - 4 Right layout on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
          {/* Left Column: 01 to 04 */}
          <div className="lg:col-span-5 space-y-4">
            {leftModules.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 md:p-5 flex items-center justify-between gap-4 hover:border-emerald-500/50 hover:bg-slate-850 transition-all duration-200 group shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/30 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      {item.id}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">{item.description}</p>
                    </div>
                  </div>
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} text-slate-950 shrink-0 shadow-md transform group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Glowing Orb (Desktop Centerpiece) */}
          <div className="lg:col-span-1 flex items-center justify-center py-6 lg:py-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center p-4 text-center"
            >
              {/* Outer Pulsing Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-emerald-500/40 animate-ping opacity-25" />
              <div className="absolute -inset-3 rounded-full border border-sky-400/30 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-500 to-sky-400 blur-md opacity-40 animate-pulse" />

              {/* Core Orb Container */}
              <div className="relative w-full h-full rounded-full bg-slate-950 border-2 border-emerald-400/60 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.35)]">
                <Sparkles className="w-6 h-6 text-emerald-400 mb-1 animate-spin" style={{ animationDuration: '8s' }} />
                <span className="text-sm font-extrabold font-mono tracking-wider text-white">
                  BYITS AI
                </span>
                <span className="text-[10px] text-emerald-300 font-semibold uppercase mt-0.5">
                  CORE PLATFORM
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 05 to 08 */}
          <div className="lg:col-span-5 space-y-4">
            {rightModules.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 md:p-5 flex items-center justify-between gap-4 hover:border-emerald-500/50 hover:bg-slate-850 transition-all duration-200 group shadow-lg"
                >
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} text-slate-950 shrink-0 shadow-md transform group-hover:scale-110 transition-transform order-last sm:order-first`}>
                    <IconComp className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="flex-grow text-left sm:text-right">
                    <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">{item.description}</p>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/20 to-sky-500/30 border border-teal-500/40 text-teal-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                    {item.id}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Footer inside Section */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-slate-950 font-bold text-base hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all cursor-pointer shadow-lg"
          >
            {t("ขอคำปรึกษา BYITS Enterprise AI Platform", "Consult on BYITS Enterprise AI Platform")}
          </a>
        </div>
      </div>

      {/* Lightbox / Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-2xl p-4 border border-emerald-500/40">
            <button
              type="button"
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-400 font-bold text-xs border border-emerald-700"
            >
              {t("ปิด", "Close")}
            </button>
            <img src={imageSrc} alt="Platform Diagram Full" className="w-full rounded-xl" />
          </div>
        </div>
      )}
    </section>
  );
}
