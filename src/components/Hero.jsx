import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Code2, Cpu, Globe2, Layers, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "../../AnalyticsTracker";
import heroVisual from "../assets/modern_hero_visual.jpg";

const Hero = () => {
  const marqueeItemsRow1 = [
    "TRUCORE TECHNOLOGIES",
    "SOFTWARE ENGINEERING",
    "TRUCORE TECHNOLOGIES",
    "AI & CLOUD SYSTEMS",
  ];

  const marqueeItemsRow2 = [
    "TRUCORE TECHNOLOGIES",
    "ENTERPRISE WEB APPS",
    "TRUCORE TECHNOLOGIES",
    "DIGITAL EXCELLENCE",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] lg:h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#FAFCFF] pt-24 pb-12"
    >
      {/* ── BLURRED BACKGROUND IMAGE LAYER ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroVisual}
          alt="Trucore Technologies Software Background"
          className="w-full h-full object-cover filter blur-[70px] opacity-10 scale-135"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFCFF]/92 via-[#FAFCFF]/85 to-[#FAFCFF]"></div>
      </div>
      {/* ── BACKGROUND SCROLLING COMPANY NAME MARQUEE ANIMATION ── */}
      <div className="absolute inset-0 flex flex-col justify-center gap-4 sm:gap-8 opacity-40 pointer-events-none overflow-hidden z-0 select-none">
        
        {/* Track 1: Scroll Left */}
        <div className="flex overflow-hidden w-full">
          <div className="marquee-track animate-marquee flex gap-12 shrink-0">
            {marqueeItemsRow1.concat(marqueeItemsRow1).concat(marqueeItemsRow1).map((text, idx) => (
              <span key={idx} className="hero-watermark-text text-stroke-navy">
                {text} <span className="text-[#0066FF] mx-6">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Track 2: Scroll Right */}
        <div className="flex overflow-hidden w-full">
          <div className="marquee-track animate-marquee-reverse flex gap-12 shrink-0">
            {marqueeItemsRow2.concat(marqueeItemsRow2).concat(marqueeItemsRow2).map((text, idx) => (
              <span key={idx} className="hero-watermark-text text-stroke-cyan">
                {text} <span className="text-[#00B4D8] mx-6">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Track 3: Scroll Left */}
        <div className="flex overflow-hidden w-full">
          <div className="marquee-track animate-marquee-fast flex gap-12 shrink-0">
            {marqueeItemsRow1.concat(marqueeItemsRow1).concat(marqueeItemsRow1).map((text, idx) => (
              <span key={idx} className="hero-watermark-text text-stroke-blue">
                {text} <span className="text-[#031B4E] mx-6">•</span>
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/4 -right-20 w-[32rem] h-[32rem] bg-[#0066FF]/12 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse-glow pointer-events-none"></div>
      <div className="absolute top-1/3 left-[-10%] w-[30rem] h-[30rem] bg-[#031B4E]/08 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#00B4D8]/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

      {/* Gradient Fade Mask at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent via-[#FAFCFF]/80 to-[#FAFCFF] pointer-events-none z-10"></div>

      {/* ── HERO CONTENT FOREGROUND ── */}
      <div className="container relative z-20 w-full px-4 py-4 lg:py-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Company Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="badge-logo mb-4 shadow-sm border-[#0066FF]/30 bg-white/90 backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 bg-[#0066FF] rounded-full animate-pulse"></span>
            <span className="tracking-widest uppercase text-xs font-bold font-heading">
              TRUCORE TECHNOLOGIES • ENTERPRISE IT & AI ARCHITECTURE
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-heading text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#0A1628] leading-[1.15] mb-4 tracking-tight"
          >
            Empowering Modern Enterprises With <br />
            <span className="relative inline-block mt-1">
              <span className="relative z-10 text-gradient-logo font-black">
                Next-Gen Web, Cloud & AI Systems
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-2.5 bg-gradient-to-r from-[#0066FF]/20 via-[#00B4D8]/30 to-transparent -z-10 rounded-sm"></span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-textMuted mb-6 max-w-2xl leading-relaxed font-normal"
          >
            At <strong className="text-[#031B4E] font-semibold">Trucore Technologies</strong>, we engineer high-throughput web applications, mobile platforms, and AI automation engines that drive operational speed and revenue growth.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-3.5 justify-center mb-8"
          >
            <Link
              to="/contact"
              onClick={() => trackEvent("Hero", "Click", "Start Project")}
              className="btn-primary px-7 py-3.5 text-sm font-bold shadow-xl"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#services"
              onClick={() => trackEvent("Hero", "Click", "Explore Services")}
              className="btn-ghost px-7 py-3.5 text-sm font-semibold bg-white/90 backdrop-blur-md"
            >
              Explore Capabilities
            </a>
          </motion.div>

          {/* Interactive Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2.5 mb-8"
          >
            {[
              { icon: Code2, label: "Custom Software" },
              { icon: Cpu, label: "AI & Neural Networks" },
              { icon: Globe2, label: "Cloud Microservices" },
              { icon: Layers, label: "Mobile Platforms" }
            ].map((pill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#0066FF]/15 backdrop-blur-md shadow-2xs text-xs font-bold text-[#031B4E] font-heading"
              >
                <pill.icon className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>{pill.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-3xl pt-5 border-t border-[#0066FF]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-xs border border-white/80"
          >
            {[
              { value: "100+", label: "Delivered Products", icon: ShieldCheck, color: "text-[#0066FF]" },
              { value: "99.8%", label: "Client Satisfaction", icon: Sparkles, color: "text-[#00B4D8]" },
              { value: "24/7", label: "Enterprise Support", icon: Zap, color: "text-[#031B4E]" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="font-heading text-2xl font-extrabold text-[#0A1628]">{stat.value}</span>
                </div>
                <span className="text-[11px] text-textMuted font-semibold font-heading uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
