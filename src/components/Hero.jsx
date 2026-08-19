import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Cpu, 
  Globe2, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  Play, 
  Copy, 
  Check, 
  Server, 
  Database,
  Activity,
  Bot
} from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "../../AnalyticsTracker";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const [copied, setCopied] = useState(false);

  const marqueeItemsRow1 = [
    "TRUCORE TECHNOLOGIES",
    "SOFTWARE ENGINEERING",
    "AI & CLOUD SYSTEMS",
    "ENTERPRISE SOLUTIONS",
  ];

  const marqueeItemsRow2 = [
    "DIGITAL EXCELLENCE",
    "FULLSTACK ARCHITECTURE",
    "AUTOMATION ENGINES",
    "NEXT-GEN IT PLATFORMS",
  ];

  const codeExamples = {
    ai: `// Trucore Neural AI Engine Initializer
import { TruCoreAI, CloudMesh } from "@trucore/core";

const aiMesh = new TruCoreAI({
  model: "trucore-neural-v4",
  autoScale: true,
  latencyTarget: "<15ms"
});

// Run real-time enterprise workflow
const result = await aiMesh.executeWorkflow({
  inputData: stream,
  securityLevel: "SOC2_ENCRYPTED"
});`,
    cloud: `// Cloud Infrastructure Auto-Scaler
import { CloudCluster } from "@trucore/cloud";

export const deployment = new CloudCluster({
  region: "multi-region-global",
  maxInstances: 500,
  zeroDowntimeDeploy: true
});

deployment.onLoadSpike((event) => {
  event.spinUpMicroservices();
});`,
    fullstack: `// Enterprise React & Next.js Architecture
import { ModernUIProvider, Analytics } from "@trucore/ui";

export default function App() {
  return (
    <ModernUIProvider theme="ultra-modern">
      <GlobalDashboard analytics={Analytics.REALTIME} />
    </ModernUIProvider>
  );
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#FAFCFF] pt-28 pb-20"
    >
      {/* ── BACKGROUND GRID & GLOW LAYERS ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF08_1px,transparent_1px),linear-gradient(to_bottom,#0066FF08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/4 -right-20 w-[36rem] h-[36rem] bg-[#0066FF]/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[34rem] h-[34rem] bg-[#00B4D8]/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-tr from-[#0066FF]/10 to-[#00E5FF]/10 rounded-full filter blur-[120px] opacity-70 pointer-events-none" />

      {/* ── BACKGROUND WATERMARK MARQUEE ANIMATION ── */}
      <div className="absolute inset-0 flex flex-col justify-center gap-6 opacity-30 pointer-events-none overflow-hidden z-0 select-none">
        <div className="flex overflow-hidden w-full">
          <div className="marquee-track animate-marquee flex gap-12 shrink-0">
            {marqueeItemsRow1.concat(marqueeItemsRow1).concat(marqueeItemsRow1).map((text, idx) => (
              <span key={idx} className="hero-watermark-text text-stroke-navy">
                {text} <span className="text-[#0066FF] mx-6">•</span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden w-full">
          <div className="marquee-track animate-marquee-reverse flex gap-12 shrink-0">
            {marqueeItemsRow2.concat(marqueeItemsRow2).concat(marqueeItemsRow2).map((text, idx) => (
              <span key={idx} className="hero-watermark-text text-stroke-cyan">
                {text} <span className="text-[#00B4D8] mx-6">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── HERO CONTENT CONTAINER ── */}
      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* Top Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#0066FF]/20 shadow-md backdrop-blur-md mb-6 hover:border-[#0066FF]/40 transition-all duration-300"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0066FF]"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#031B4E] tracking-wide font-heading flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            NEXT-GEN ENTERPRISE IT & AI ARCHITECTURE
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0A1628] leading-[1.1] mb-6 tracking-tight max-w-4xl"
        >
          Architecting High-Scale <br />
          <span className="relative inline-block mt-1">
            <span className="text-gradient-logo font-black">
              Web, Cloud & AI Systems
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#0066FF]/30"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9C50 3 150 3 297 9"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-[#475569] mb-8 max-w-2xl leading-relaxed font-normal"
        >
          At <strong className="text-[#031B4E] font-semibold">Trucore Technologies</strong>, we design, build, and scale mission-critical software engines, cloud platforms, and custom AI tools for growing enterprises.
        </motion.p>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <Link
            to="/contact"
            onClick={() => trackEvent("Hero", "Click", "Start Project")}
            className="btn-primary px-8 py-4 text-base font-bold shadow-xl rounded-xl flex items-center gap-2 group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#services"
            onClick={() => trackEvent("Hero", "Click", "Explore Services")}
            className="btn-ghost px-8 py-4 text-base font-semibold bg-white/90 backdrop-blur-md rounded-xl border border-[#0066FF]/25 shadow-sm"
          >
            Explore Capabilities
          </a>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          {[
            { icon: Code2, label: "Custom Fullstack Apps" },
            { icon: Cpu, label: "Neural AI Models" },
            { icon: Globe2, label: "Cloud Microservices" },
            { icon: Layers, label: "Enterprise Security" }
          ].map((pill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#0066FF]/15 backdrop-blur-md shadow-xs text-xs sm:text-sm font-semibold text-[#031B4E] font-heading"
            >
              <pill.icon className="w-4 h-4 text-[#0066FF]" />
              <span>{pill.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── ULTRA MODERN INTERACTIVE CODE / SYSTEM PREVIEW FRAME ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-4xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-[#0066FF]/30 via-[#00B4D8]/20 to-transparent shadow-2xl backdrop-blur-xl mb-16"
        >
          {/* Floating Badges Left & Right */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex items-center gap-3 absolute -left-12 top-16 bg-white/90 backdrop-blur-md border border-[#0066FF]/20 px-4 py-3 rounded-2xl shadow-xl z-20"
          >
            <div className="p-2.5 rounded-xl bg-[#0066FF]/10 text-[#0066FF]">
              <Activity className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 font-semibold">Performance</p>
              <p className="text-sm font-extrabold text-[#031B4E]">99.9% Latency Optimization</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex items-center gap-3 absolute -right-12 bottom-12 bg-white/90 backdrop-blur-md border border-[#00B4D8]/20 px-4 py-3 rounded-2xl shadow-xl z-20"
          >
            <div className="p-2.5 rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
              <Bot className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 font-semibold">AI Automation</p>
              <p className="text-sm font-extrabold text-[#031B4E]">Real-Time Data Pipeline</p>
            </div>
          </motion.div>

          {/* Window Frame Container */}
          <div className="w-full bg-[#070F1E] rounded-xl overflow-hidden shadow-inner text-left border border-white/10">
            
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0A1628] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs text-slate-400 font-mono flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#00B4D8]" />
                  trucore-engine.config.ts
                </span>
              </div>

              {/* Code Tab Switcher */}
              <div className="flex items-center gap-1 bg-[#070F1E] p-1 rounded-lg border border-white/10">
                {[
                  { id: "ai", label: "AI Engine", icon: Cpu },
                  { id: "cloud", label: "Cloud Microservices", icon: Server },
                  { id: "fullstack", label: "React App", icon: Code2 }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold font-heading transition-all ${
                      activeTab === tab.id
                        ? "bg-[#0066FF] text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <tab.icon className="w-3 h-3" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopyCode}
                className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                title="Copy snippet"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-5 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-200 min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono"
                >
                  <code>
                    {codeExamples[activeTab].split("\n").map((line, i) => (
                      <div key={i} className="table-row">
                        <span className="table-cell pr-4 select-none opacity-30 text-right">{i + 1}</span>
                        <span className="table-cell">
                          {line.startsWith("//") ? (
                            <span className="text-slate-500 italic">{line}</span>
                          ) : (
                            line
                              .replace(/import|from|const|await|new|export|return|default|function/g, (m) => `###KEYWORD:${m}###`)
                              .split("###")
                              .map((part, idx) => {
                                if (part.startsWith("KEYWORD:")) {
                                  return (
                                    <span key={idx} className="text-[#00E5FF] font-bold">
                                      {part.replace("KEYWORD:", "")}
                                    </span>
                                  );
                                }
                                return part;
                              })
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </motion.pre>
              </AnimatePresence>
            </div>

            {/* Status Footer */}
            <div className="px-5 py-2.5 bg-[#0A1628]/80 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>System Status: <strong className="text-emerald-400 font-semibold">100% Operational</strong></span>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <span>Latency: <strong className="text-white">12ms</strong></span>
                <span>Region: <strong className="text-white">Global Edge</strong></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white/80 border border-[#0066FF]/15 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
        >
          {[
            { value: "100+", label: "Enterprise Projects Delivered", icon: ShieldCheck, color: "text-[#0066FF]" },
            { value: "99.9%", label: "Client Satisfaction Rate", icon: Sparkles, color: "text-[#00B4D8]" },
            { value: "24/7", label: "Dedicated Support & Monitoring", icon: Zap, color: "text-[#031B4E]" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center sm:border-r last:border-r-0 border-slate-200/60 pr-2">
              <div className="flex items-center gap-2 mb-1">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="font-heading text-3xl font-black text-[#0A1628]">{stat.value}</span>
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-heading">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

