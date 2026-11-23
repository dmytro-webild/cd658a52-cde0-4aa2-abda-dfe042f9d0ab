"use client";

import { motion } from "motion/react";
import { GraduationCap, Users, UserCheck, Sliders, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AiTrainingSection() {
  const { t } = useLanguage();

  const courses = [
    {
      id: "01",
      tag: "IN-HOUSE TRAINING",
      title: t("สำหรับทีมองค์กร", "For Enterprise Teams"),
      subtitle: t("GenAI ในงานจริง • Cybersecurity Awareness", "GenAI in Real Work • Cybersecurity Awareness"),
      icon: Users,
      badgeColor: "from-emerald-500/20 to-teal-500/30 text-emerald-300 border-emerald-500/40"
    },
    {
      id: "02",
      tag: "OPEN COURSES",
      title: t("สำหรับบุคคลและ SMEs", "For Individuals & SMEs"),
      subtitle: t("AI พื้นฐาน • รู้ทันภัยไซเบอร์", "AI Fundamentals • Cybersecurity Awareness"),
      icon: UserCheck,
      badgeColor: "from-cyan-500/20 to-sky-500/30 text-cyan-300 border-cyan-500/40"
    },
    {
      id: "03",
      tag: "CUSTOM WORKSHOP",
      title: t("สำหรับโจทย์เฉพาะองค์กร", "For Custom Enterprise Challenges"),
      subtitle: t("AI Workflow • Technical Lab • Use Case", "AI Workflow • Technical Lab • Use Case"),
      icon: Sliders,
      badgeColor: "from-teal-500/20 to-emerald-400/30 text-teal-300 border-teal-500/40"
    }
  ];

  const processSteps = ["LEARN", "APPLY", "IMPROVE"];

  const refImageSrc = "https://img.b2bpic.net/free-photo/3d-modern-background-with-rainbow-coloured-flowing-particles-design_1048-20453.jpg";

  return (
    <section id="training" className="relative py-24 bg-[#071727] text-foreground border-t border-border/60 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-[var(--container)] px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-teal-300 bg-teal-950/80 border border-teal-500/40 uppercase mb-4 shadow-sm"
          >
            <GraduationCap className="w-4 h-4 text-teal-400" />
            {t("AI & DIGITAL TRAINING", "AI & DIGITAL TRAINING")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            {t("Training That Leads to Adoption", "Training That Leads to Adoption")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg leading-relaxed"
          >
            {t(
              "เลือกหลักสูตรให้เหมาะกับคนเรียน แล้วนำไปใช้กับงานจริง",
              "Select tailored AI curricula designed for your team to drive real-world business adoption"
            )}
          </motion.p>
        </div>

        {/* Main 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: 3 Training Options */}
          <div className="lg:col-span-6 space-y-5">
            {courses.map((course, idx) => {
              const IconComponent = course.icon;
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-teal-500/50 hover:bg-slate-850 transition-all duration-200 group shadow-xl relative"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-sky-500/30 border border-emerald-500/40 text-emerald-300 font-mono font-extrabold text-lg flex items-center justify-center shrink-0 shadow-inner">
                    {course.id}
                  </div>
                  <div className="flex-grow space-y-1">
                    <span className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold font-mono tracking-wider border ${course.badgeColor}`}>
                      {course.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-medium leading-relaxed">
                      {course.subtitle}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-emerald-400 group-hover:scale-110 transition-transform shrink-0 self-end sm:self-center">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Hero Visual Image & Adoption Process Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col items-center justify-between h-full"
          >
            {/* Embedded Visual Image Container */}
            <div className="w-full rounded-2xl bg-slate-950/90 border border-teal-500/30 p-3 shadow-2xl relative overflow-hidden group">
              <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[16/9]">
                <img
                  src={refImageSrc}
                  alt="AI & Digital Training 3D Visualization"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end justify-between p-5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      {t("หลักสูตรพร้อมการนำไปใช้จริง 100%", "100% Practical Workflow Adoption")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Pill Badge Bar: LEARN -> APPLY -> IMPROVE */}
            <div className="mt-6 w-full rounded-full bg-slate-950/90 border border-emerald-500/40 p-2 sm:p-3 flex items-center justify-around shadow-xl">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-2 sm:gap-4">
                  <span className="text-xs sm:text-sm font-extrabold font-mono tracking-widest text-emerald-300">
                    {step}
                  </span>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-500 stroke-[2.5]" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal-400 text-slate-950 font-bold text-base hover:bg-teal-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all cursor-pointer shadow-lg"
          >
            {t("สอบถามและลงทะเบียนหลักสูตรอบรม AI", "Inquire & Register for AI Training")}
          </a>
        </div>
      </div>
    </section>
  );
}
