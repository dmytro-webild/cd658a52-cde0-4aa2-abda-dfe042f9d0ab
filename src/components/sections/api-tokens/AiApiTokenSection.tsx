"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Html, RoundedBox } from "@react-three/drei";
import { motion } from "motion/react";
import * as THREE from "three";
import { useLanguage } from "@/context/LanguageContext";
import HydraArrowPill from "@/components/kit/HydraArrowPill";

// -------------------------------------------------------------
// 3D Workflow Graphic (Business App -> API Token -> AI Models -> Result)
// -------------------------------------------------------------
function WorkflowNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const particleBeamRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.15;
    }
    if (particleBeamRef.current) {
      particleBeamRef.current.children.forEach((child, i) => {
        child.position.x = ((t * 1.5 + i * 0.8) % 6) - 3;
      });
    }
  });

  const nodes = [
    { x: -3, color: "#38bdf8", label: "Business App", badge: "ERP / CRM / Web" },
    { x: -1, color: "#44e6b5", label: "API Token", badge: "Auth & Usage Cap" },
    { x: 1, color: "#818cf8", label: "AI Models", badge: "Claude / GPT / DeepSeek" },
    { x: 3, color: "#f43f5e", label: "Business Result", badge: "Automated ROI" },
  ];

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[0, 0, 3]} intensity={2} color="#44e6b5" />

      {/* Connecting Pipe */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 6.2, 16]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} wireframe={false} />
      </mesh>

      {/* Pulsing Energy Beam Particles */}
      <group ref={particleBeamRef}>
        {[0, 1, 2, 3, 4, 5].map((idx) => (
          <mesh key={idx} position={[0, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#44e6b5" />
          </mesh>
        ))}
      </group>

      {/* Workflow Node Cubes & Spheres */}
      {nodes.map((node, i) => (
        <group key={node.label} position={[node.x, 0, 0]}>
          <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
            <RoundedBox args={[0.9, 0.9, 0.9]} radius={0.15} smoothness={4}>
              <meshStandardMaterial
                color={node.color}
                metalness={0.4}
                roughness={0.2}
                emissive={node.color}
                emissiveIntensity={0.25}
              />
            </RoundedBox>
            <Html position={[0, 0.75, 0]} center className="pointer-events-none select-none">
              <div className="flex flex-col items-center min-w-[110px] text-center">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider text-slate-900 bg-emerald-400 shadow-md uppercase">
                  Step {i + 1}
                </span>
                <span className="text-xs font-extrabold text-white mt-1 drop-shadow-md whitespace-nowrap">
                  {node.label}
                </span>
                <span className="text-[9px] text-slate-300 font-medium whitespace-nowrap bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-700/60 mt-0.5">
                  {node.badge}
                </span>
              </div>
            </Html>
          </Float>
        </group>
      ))}
    </group>
  );
}

// -------------------------------------------------------------
// 3D Cost-Comparison Graphic (Unmanaged vs BYITS Managed Tokens)
// -------------------------------------------------------------
function CostComparisonBars() {
  const barsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (barsRef.current) {
      barsRef.current.rotation.y = Math.sin(t * 0.3) * 0.2;
    }
  });

  return (
    <group ref={barsRef} position={[0, -0.6, 0]}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 6, 4]} intensity={1.8} />

      {/* Bar 1: Direct API Usage (High Cost) */}
      <group position={[-1.2, 0, 0]}>
        <mesh position={[0, 1.3, 0]}>
          <cylinderGeometry args={[0.45, 0.45, 2.6, 32]} />
          <meshStandardMaterial color="#ef4444" metalness={0.3} roughness={0.3} emissive="#ef4444" emissiveIntensity={0.2} />
        </mesh>
        <Html position={[0, 2.9, 0]} center className="pointer-events-none select-none">
          <div className="bg-slate-900/90 border border-red-500/50 p-2 rounded-lg text-center shadow-lg min-w-[120px]">
            <span className="text-[10px] text-red-400 font-semibold block uppercase">Direct API Usage</span>
            <span className="text-sm font-extrabold text-white">100% Cost</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">Uncapped & Spiky</span>
          </div>
        </Html>
      </group>

      {/* Bar 2: BYITS Managed Token (Optimized Cost) */}
      <group position={[1.2, 0, 0]}>
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.45, 0.45, 1.4, 32]} />
          <meshStandardMaterial color="#44e6b5" metalness={0.5} roughness={0.2} emissive="#44e6b5" emissiveIntensity={0.3} />
        </mesh>
        <Html position={[0, 1.7, 0]} center className="pointer-events-none select-none">
          <div className="bg-slate-900/90 border border-emerald-400/60 p-2 rounded-lg text-center shadow-lg min-w-[130px]">
            <span className="text-[10px] text-emerald-400 font-semibold block uppercase">BYITS API Token</span>
            <span className="text-sm font-extrabold text-emerald-300">Save Up To 40%</span>
            <span className="text-[9px] text-slate-300 block mt-0.5">Quota & Cost Capped</span>
          </div>
        </Html>
      </group>

      {/* Base Grid Floor */}
      <gridHelper args={[8, 12, "#334155", "#1e293b"]} position={[0, 0, 0]} />
    </group>
  );
}

export default function AiApiTokenSection() {
  const { t } = useLanguage();

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

        {/* 3D Graphics Grid (2 Columns: Workflow & Cost Comparison) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Graphic 1: Workflow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border p-6 md:p-8 flex flex-col justify-between shadow-2xl relative"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">
                  {t("3D Workflow Architecture", "3D Workflow Architecture")}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-sky-950 text-sky-400 border border-sky-800">
                  Business App → AI Model
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {t(
                  "แผนภูมิ 3 มิติ แสดงกระบวนการส่งผ่านข้อมูลจากแอปพลิเคชันธุรกิจ ผ่าน API Token เข้าสู่ AI Models",
                  "3D interactive graphic showing data flow from Business Apps through API Tokens to AI Models."
                )}
              </p>
            </div>

            {/* Canvas Container */}
            <div className="w-full h-72 md:h-80 rounded-xl bg-slate-950/80 border border-slate-800/80 overflow-hidden relative">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <Suspense fallback={null}>
                  <WorkflowNodes />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
              </Canvas>
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

          {/* Graphic 2: Cost Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border p-6 md:p-8 flex flex-col justify-between shadow-2xl relative"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">
                  {t("3D Cost Optimization Comparison", "3D Cost Optimization Comparison")}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Cost Savings & Control
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {t(
                  "เปรียบเทียบต้นทุนระหว่างการเรียกใช้ API โดยตรง กับการบริหารผ่าน BYITS Managed Token",
                  "3D cost model illustrating unmanaged direct API costs versus BYITS Token optimization."
                )}
              </p>
            </div>

            {/* Canvas Container */}
            <div className="w-full h-72 md:h-80 rounded-xl bg-slate-950/80 border border-slate-800/80 overflow-hidden relative">
              <Canvas camera={{ position: [0, 2, 4.5], fov: 45 }}>
                <Suspense fallback={null}>
                  <CostComparisonBars />
                  <OrbitControls enableZoom={false} />
                </Suspense>
              </Canvas>
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
