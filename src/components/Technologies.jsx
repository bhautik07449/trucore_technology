import { AnimatePresence, motion } from "framer-motion";
import { techs } from "../data/technology_data";
import { useState } from "react";
import { Cpu, Globe, Smartphone, Server, Database, ShoppingCart, Sparkles } from "lucide-react";

const Technologies = ({ className = "bg-[#FAFCFF]" }) => {
  const [activeCategory, setActiveCategory] = useState("AI & ML");

  const filteredTechs = techs.filter(
    (p) => p.category === activeCategory
  );

  const categoryDetails = [
    { name: "AI & ML", icon: Cpu, label: "AI Models & RAG" },
    { name: "Web App", icon: Globe, label: "Frontend & Full-Stack" },
    { name: "Mobile App", icon: Smartphone, label: "iOS & Android Apps" },
    { name: "Backend", icon: Server, label: "Cloud Microservices" },
    { name: "Database", icon: Database, label: "Relational & NoSQL" },
    { name: "eCommerce", icon: ShoppingCart, label: "Headless Commerce" }
  ];

  return (
    <section className={`py-20 lg:py-28 relative overflow-hidden ${className}`}>
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#0066FF 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-logo mb-4">Cutting-Edge Tech Hub</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#0A1628] mb-4">
              Our Modern <span className="text-gradient-logo font-black">Tech Ecosystem</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-textMuted leading-relaxed">
              We leverage battle-tested open-source frameworks, high-throughput cloud databases, and state-of-the-art AI tooling.
            </p>
          </motion.div>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryDetails.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-heading font-bold text-xs sm:text-sm transition-all duration-300 shadow-xs border ${
                  isActive
                    ? "bg-gradient-to-r from-[#031B4E] via-[#0056C6] to-[#00B4D8] text-white border-transparent shadow-lg shadow-[#0066FF]/25 scale-105"
                    : "bg-white/90 text-[#031B4E] border-[#0066FF]/15 hover:border-[#00B4D8] hover:bg-[#FAFCFF]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#00E5FF]" : "text-[#0066FF]"}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {filteredTechs.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="group"
              >
                <div className="h-full bg-white/90 backdrop-blur-md rounded-3xl border border-[#0066FF]/15 p-6 text-center shadow-sm hover:shadow-2xl hover:border-[#00B4D8] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between items-center relative overflow-hidden">
                  
                  {/* Subtle Top Glow Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0066FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0056C6]/5 to-[#00B4D8]/10 group-hover:from-[#0056C6]/15 group-hover:to-[#00B4D8]/20 border border-[#0066FF]/10 transition-all duration-300 shadow-xs">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      width="40"
                      height="40"
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-[#0A1628] group-hover:text-[#0066FF] transition-colors duration-300 text-base mb-1">
                      {tech.name}
                    </h3>
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0066FF]/5 text-[10px] font-heading font-semibold text-[#0066FF]">
                      <Sparkles className="w-2.5 h-2.5 text-[#00B4D8]" />
                      <span>Enterprise Ready</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Technologies;
