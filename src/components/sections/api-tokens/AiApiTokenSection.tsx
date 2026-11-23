"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import HydraArrowPill from "@/components/kit/HydraArrowPill";

export default function AiApiTokenSection() {
  const { t } = useLanguage();

  const workflowSteps = [
    {
      step: "01",
      title: t("Business App", "Business App"),
      subtitle: t("ERP / CRM / Web", "ERP / CRM / Web"),
      badge: t("Step 1", "Step 1"),
      color: "sky",
      borderClass: "border-sky-500/30 bg-sky-950/40 text-sky-400",
      pillClass: "bg-sky-500/20 text-sky-300 border-sky-500/40",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      step: "02",
      title: t("API Token Auth", "API Token Auth"),
      subtitle: t("Auth & Usage Cap", "Auth & Usage Cap"),
      badge: t("Step 2", "Step 2"),
      color: "emerald",
      borderClass: "border-emerald-500/40 bg-emerald-950/40 text-emerald-400",
      pillClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      )
    },
    {
      step: "03",
      title: t("AI Models", "AI Models"),
      subtitle: t("Claude / GPT / DeepSeek", "Claude / GPT / DeepSeek"),
      badge: t("Step 3", "Step 3"),
      color: "indigo",
      borderClass: "border-indigo-500/30 bg-indigo-950/40 text-indigo-400",
      pillClass: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M6.75 6.75h10.5a1.5 1.5 0 011.5 1.5v8.5a1.5 1.5 0 01-1.5 1.5H6.75a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5z" />
        </svg>
      )
    },
    {
      step: "04",
      title: t("Business Result", "Business Result"),
      subtitle: t("Automated ROI", "Automated ROI"),
      badge: t("Step 4", "Step 4"),
      color: "rose",
      borderClass: "border-rose-500/30 bg-rose-950/40 text-rose-400",
      pillClass: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      icon: (
        <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 005.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    }
  ];

  return (
    <section id="api-tokens" className="relative py-24 bg-[#071521] text-foreground border-t border-border/60 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-[var(--container)] px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 uppercase mb-4 shadow-sm"
          >
            {t("บริการ AI API & TOKEN SERVICES", "AI API & TOKEN SERVICES")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            {t(
              "เชื่อมต่อแอปพลิเคชันธุรกิจกับ AI Models ด้วย API Tokens อย่างคุ้มค่าและปลอดภัย",
              "Connect Enterprise Apps to AI Models via Smart API Tokens"
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg leading-relaxed"
          >
            {t(
              "ช่วยให้องค์กรของคุณเชื่อมต่อระบบ ERP, CRM และแอปพลิเคชันภายในเข้ากับ Claude, ChatGPT และ DeepSeek ได้ทันที ควบคุมโควต้าจำกัดวงเงิน ป้องกันงบบานปลาย และวางแผนงบประมาณ AI ได้อย่างแม่นยำ",
              "Seamlessly connect internal business applications, ERPs, and CRMs with Claude, ChatGPT, and DeepSeek using unified API Tokens. Manage usage, enforce budget caps, and control AI operational expenses."
            )}
          </motion.p>
        </div>

        {/* 2D Graphics Grid (2 Columns: 2D Workflow & 2D Cost Comparison) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Graphic 1: Clean 2D Workflow Architecture */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border p-6 md:p-8 flex flex-col justify-between shadow-2xl relative"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">
                  {t("ขั้นตอนการทำงาน AI API Token", "AI API Token Workflow Architecture")}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-sky-950 text-sky-400 border border-sky-800">
                  Business App → AI Model
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                {t(
                  "ภาพกราฟิก 2 มิติ แสดงขั้นตอนการส่งผ่านข้อมูลจากแอปพลิเคชันธุรกิจ ผ่าน API Token เข้าสู่ AI Models อย่างชัดเจน",
                  "Clean 2D workflow diagram showing data flow from Business Apps through API Tokens to AI Models."
                )}
              </p>
            </div>

            {/* 2D Workflow Graphic Visual Container */}
            <div className="w-full rounded-xl bg-slate-950/90 border border-slate-800/90 p-5 relative overflow-hidden flex flex-col justify-between gap-5">
              {/* Header Status Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-mono tracking-wider font-semibold text-emerald-400 uppercase">
                    {t("2D LIVE PIPELINE FLOW", "2D LIVE PIPELINE FLOW")}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  REST / JSON API
                </span>
              </div>

              {/* 4 Step Diagram Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                {workflowSteps.map((item, idx) => (
                  <div
                    key={item.step}
                    className={`rounded-xl border ${item.borderClass} p-3.5 flex flex-col justify-between relative transition-all duration-200 hover:border-slate-600 hover:translate-y-[-2px] shadow-lg`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.pillClass}`}>
                        {item.badge}
                      </span>
                      <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                      <p className="text-[11px] text-slate-300 font-medium">{item.subtitle}</p>
                    </div>

                    {/* Step Connection Indicator */}
                    {idx < workflowSteps.length - 1 && (
                      <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                        <span className="text-slate-500 text-xs font-bold">→</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Flow Progress Line */}
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden relative border border-slate-800">
                <div className="h-full bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-400 rounded-full w-full animate-pulse opacity-80" />
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                {t("รองรับ REST API & Webhooks", "REST API & Webhooks Support")}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {t("การจัดการ Token & API Key", "Token & API Key Management")}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                {t("เชื่อมต่อ Multi-LLM Routing", "Multi-LLM Smart Routing")}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                {t("แดชบอร์ดติดตาม Real-time", "Real-time Analytics Dashboard")}
              </li>
            </ul>
          </motion.div>

          {/* Graphic 2: Clean 2D Cost Optimization Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border p-6 md:p-8 flex flex-col justify-between shadow-2xl relative"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">
                  {t("การเปรียบเทียบต้นทุนแบบ 2D", "2D Cost Optimization Comparison")}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Cost Savings & Control
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                {t(
                  "เปรียบเทียบต้นทุนระหว่างการเรียกใช้ API โดยตรง กับการบริหารผ่าน BYITS Managed Token",
                  "Clean 2D cost model illustrating unmanaged direct API costs versus BYITS Token optimization."
                )}
              </p>
            </div>

            {/* 2D Cost Comparison Visual Container */}
            <div className="w-full rounded-xl bg-slate-950/90 border border-slate-800/90 p-5 relative overflow-hidden flex flex-col justify-between gap-5">
              {/* Header Status Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <span className="text-[11px] font-mono tracking-wider font-semibold text-slate-300 uppercase">
                  {t("API COST EFFICIENCY ANALYSIS", "API COST EFFICIENCY ANALYSIS")}
                </span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-700/60">
                  {t("ประหยัดสูงสุด 40%", "UP TO 40% SAVINGS")}
                </span>
              </div>

              {/* Bar 1: Direct API Usage */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-red-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    {t("Direct API Usage (ไม่ผ่านการควบคุม)", "Direct API Usage (Unmanaged)")}
                  </span>
                  <span className="font-mono font-bold text-white">100% {t("งบเต็ม", "Cost")}</span>
                </div>
                <div className="w-full bg-slate-900 h-7 rounded-lg overflow-hidden p-1 border border-slate-800 relative">
                  <div className="h-full bg-gradient-to-r from-red-800 via-red-600 to-rose-500 rounded-md w-full flex items-center justify-end px-3">
                    <span className="text-[10px] font-extrabold text-white tracking-wider uppercase drop-shadow">
                      {t("เสี่ยงงบบานปลาย & ไม่มี Cap", "High Cost & Uncapped")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bar 2: BYITS Managed API Token */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {t("BYITS Managed API Token", "BYITS Managed API Token")}
                  </span>
                  <span className="font-mono font-bold text-emerald-300">~60% {t("งบที่ใช้จริง", "Cost")}</span>
                </div>
                <div className="w-full bg-slate-900 h-7 rounded-lg overflow-hidden p-1 border border-slate-800 relative">
                  <div className="h-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400 rounded-md w-[60%] flex items-center justify-end px-3 shadow-[0_0_12px_rgba(52,211,153,0.4)]">
                    <span className="text-[10px] font-extrabold text-slate-950 tracking-wider uppercase">
                      {t("ควบคุมงบ & ปลอดภัย", "Quota & Cost Capped")}
                    </span>
                  </div>
                </div>
              </div>

              {/* 2D Metrics Callout Grid */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center">
                <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{t("การจำกัดวงเงิน", "Budget Cap")}</span>
                  <span className="text-xs font-bold text-emerald-400">{t("จำกัดได้ 100%", "Enforced")}</span>
                </div>
                <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{t("โมเดล AI", "AI Routing")}</span>
                  <span className="text-xs font-bold text-sky-400">{t("Smart Multi-LLM", "Multi-LLM")}</span>
                </div>
                <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{t("การแจ้งเตือน", "Alerts")}</span>
                  <span className="text-xs font-bold text-amber-400">{t("Real-time", "Real-time")}</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-4 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300 block mb-0.5">
                {t("ข้อความปฏิเสธความรับผิดชอบ (Disclaimer):", "Disclaimer regarding savings:")}
              </span>
              {t(
                "ตัวเลขการประหยัดค่าใช้จ่ายเป็นการประเมินเปรียบเทียบในสภาวะจำลอง การประหยัดจริงขึ้นอยู่กับปริมาณการใช้งาน ชนิดโมเดล โครงสร้างคำสั่ง (Prompt) และรูปแบบการใช้งานของแต่ละองค์กร",
                "Actual savings vary based on workload volume, model selection, prompt engineering optimization, and enterprise usage patterns."
              )}
            </div>
          </motion.div>
        </div>

        {/* Action Callout & Prominent Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-emerald-950/60 via-card to-slate-900 border border-emerald-500/30 p-8 md:p-12 text-center shadow-2xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            {t(
              "พร้อมยกระดับระบบ AI และควบคุมค่าใช้จ่าย API ขององค์กรหรือยัง?",
              "Ready to Streamline Enterprise AI & Optimize API Costs?"
            )}
          </h3>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            {t(
              "รับคำปรึกษาจากทีมผู้เชี่ยวชาญ BYITS ในการประเมินการใช้งาน AI API Token ออกแบบสถาปัตยกรรมระบบ และเริ่มใช้งานได้อย่างรวดเร็ว",
              "Get expert consultation from BYITS specialists to assess your AI API Token needs, design system architecture, and get started efficiently."
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-cta-text font-bold text-base md:text-lg shadow-lg hover:bg-emerald-300 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
            >
              {t("ปรึกษาเรื่อง AI API Token", "Consult on AI API Token")}
            </a>
            <HydraArrowPill
              text={t("ดูโซลูชันระบบ AI ทั้งหมด", "Explore All AI Solutions")}
              href="#services"
              tone="deep"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
