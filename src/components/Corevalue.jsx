import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Award } from "lucide-react";

export default function Corevalue() {

    const data = [
        {
            title: "Technical Transparency",
            description: "We enforce clear communication, open repository code reviews, and zero-trust security standards at every step of project delivery.",
            icon: ShieldCheck,
            color: "text-[#0066FF]",
            bg: "bg-[#0066FF]/10"
        },
        {
            title: "Autonomous Innovation",
            description: "We continuously master cutting-edge LLM architectures, RAG frameworks, and serverless cloud systems to keep clients ahead.",
            icon: Cpu,
            color: "text-[#00B4D8]",
            bg: "bg-[#00B4D8]/10"
        },
        {
            title: "Engineering Excellence",
            description: "We hold every line of code to rigorous benchmark standards—ensuring sub-second load speeds, high concurrency, and zero downtime.",
            icon: Award,
            color: "text-[#031B4E]",
            bg: "bg-[#031B4E]/10"
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto relative px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="badge-logo mb-4">Core Principles</span>
                    <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#0A1628] mb-4">
                        Guiding <span className="text-gradient-logo font-black">Engineering Values</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-textMuted leading-relaxed">
                        The core principles that drive our engineering team and long-term client partnerships globally.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full bg-[#FAFCFF] p-8 lg:p-10 rounded-3xl border border-[#0066FF]/15 shadow-sm hover:shadow-xl hover:border-[#0066FF]/40 transition-all duration-500 relative flex flex-col items-center text-center">
                                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-[#0A1628] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-textMuted leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
