import { motion } from "framer-motion";
import {
    Users, Globe, Star, LayoutGrid
} from "lucide-react";

export default function TeamStats({className = ""}) {

    const data = [
        { icon: LayoutGrid, value: "100+", label: "Delivered Software Products" },
        { icon: Users, value: "50+", label: "Global Enterprise Clients" },
        { icon: Globe, value: "15+", label: "Countries Served" },
        { icon: Star, value: "99.8%", label: "Client SLA Satisfaction" },
    ];

    return (
        <section className={`py-12 bg-[#031B4E] text-white relative overflow-hidden ${className}`}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                        >
                            <div className="w-12 h-12 bg-[#0066FF]/20 border border-[#0066FF]/40 rounded-2xl flex items-center justify-center mb-3 text-[#00E5FF]">
                                <s.icon className="w-6 h-6 text-[#00E5FF]" />
                            </div>
                            <div className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-1">{s.value}</div>
                            <div className="text-xs text-gray-300 font-heading font-medium uppercase tracking-wider">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}