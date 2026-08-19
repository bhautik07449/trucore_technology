import { motion } from "framer-motion";
import { Cpu, LayoutGrid, Code2, Cloud } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "AI Blueprint & Strategy",
    description: "Deep technical audit, data flow mapping, and architectural blueprinting aligned with business ROI.",
    icon: Cpu,
    color: "text-[#0066FF]",
    bg: "bg-[#0066FF]/10",
    borderColor: "border-[#0066FF]/20"
  },
  {
    number: "02",
    title: "AI Model & UI/UX Architecture",
    description: "High-fidelity interactive UI design, custom LLM prompt engineering, and database schema modeling.",
    icon: LayoutGrid,
    color: "text-[#00B4D8]",
    bg: "bg-[#00B4D8]/10",
    borderColor: "border-[#00B4D8]/20"
  },
  {
    number: "03",
    title: "Agile Sprint Engineering",
    description: "High-throughput development with CI/CD automated test pipelines and bi-weekly product milestones.",
    icon: Code2,
    color: "text-[#031B4E]",
    bg: "bg-[#031B4E]/10",
    borderColor: "border-[#031B4E]/20"
  },
  {
    number: "04",
    title: "Zero-Trust Cloud Launch",
    description: "Serverless cloud deployment, automated load monitoring, performance audit, and 24/7 SLA handoff.",
    icon: Cloud,
    color: "text-[#0066FF]",
    bg: "bg-[#0066FF]/10",
    borderColor: "border-[#0066FF]/20"
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFCFF] relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-logo mb-4">Engineering Framework</span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#0A1628] mb-4">
            Our 4-Phase <span className="text-gradient-logo font-black">AI & Software Pipeline</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-textMuted leading-relaxed">
            From initial strategy audit to zero-trust production launch—how we turn complex goals into high-performance software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`h-full bg-white border ${step.borderColor} p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:border-[#0066FF]/40 transition-all duration-500 relative flex flex-col justify-between pt-16`}>
                
                {/* Watermark Number */}
                <span className="absolute top-4 right-6 font-heading text-6xl font-black text-[#031B4E]/5 group-hover:text-[#0066FF]/10 transition-colors duration-500 select-none">
                  {step.number}
                </span>

                {/* Floating Icon Box */}
                <div className={`absolute -top-6 left-8 w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center shadow-md border border-white group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-7 h-7 ${step.color}`} />
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#0066FF] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-textMuted leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#0066FF] font-heading">
                  <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse"></span>
                  <span>Phase {step.number} Protocol</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
