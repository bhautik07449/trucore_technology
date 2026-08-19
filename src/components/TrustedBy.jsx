import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Cloud, Globe, Sparkles, Building2, Zap } from "lucide-react";

export default function TrustedBy() {
  const clients = [
    { name: "Global Enterprise AI", icon: Cpu },
    { name: "Apex Retail ERP", icon: Building2 },
    { name: "Nexus Cloud Systems", icon: Cloud },
    { name: "FinTech Quantum", icon: Zap },
    { name: "TeleHealth Global", icon: ShieldCheck },
    { name: "OmniChannel Tech", icon: Globe },
    { name: "AgriTech AI Labs", icon: Sparkles },
  ];

  return (
    <section className="py-8 bg-[#031B4E] border-y border-white/10 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-4 text-center">
        <p
          style={{ color: '#00E5FF' }}
          className="text-xs font-heading font-black uppercase tracking-widest text-[#00E5FF] !text-[#00E5FF]"
        >
          Trusted By Industry Innovators & Global Enterprises Worldwide
        </p>
      </div>

      {/* Ticker Marquee */}
      <div className="flex overflow-hidden select-none space-x-8 opacity-100 transition-opacity">
        <div className="flex shrink-0 animate-marquee space-x-8 items-center">
          {clients.concat(clients).concat(clients).map((item, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/15 border border-white/25 px-5 py-2.5 rounded-xl backdrop-blur-md shadow-sm">
              <item.icon className="w-5 h-5 text-[#00E5FF] shrink-0" />
              <span className="font-heading font-bold text-sm text-white whitespace-nowrap tracking-wide">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
