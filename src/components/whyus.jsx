import { motion } from "framer-motion";
import { Layers, HeartHandshake, ShieldCheck, CheckCircle2 } from "lucide-react";

const data = [
    { 
        icon: Layers, 
        title: "One-Stop Engineering", 
        description: "End-to-end software development, UI/UX architecture, cloud deployment, and continuous QA under one roof.",
        color: "text-[#0066FF]",
        bg: "bg-[#0066FF]/10"
    },
    { 
        icon: HeartHandshake, 
        title: "Customer-Centric Focus", 
        description: "Tailored strategic advisory and continuous support matching your business goals and market dynamics.",
        color: "text-[#00B4D8]",
        bg: "bg-[#00B4D8]/10"
    },
    { 
        icon: ShieldCheck, 
        title: "Uncompromising Commitment", 
        description: "We act as your dedicated long-term technology partner focused on maximum ROI and zero security risks.",
        color: "text-[#031B4E]",
        bg: "bg-[#031B4E]/10"
    }
];

export default function WhyUs() {
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
                    <span className="badge-logo mb-4">Why Partner With Us</span>
                    <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#0A1628] mb-4">
                        Why Choose <span className="text-gradient-logo font-black">Trucore Technologies?</span>
                    </h2>
                    <p className="text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
                        We leverage senior engineering talent and agile execution to craft scalable software systems globally.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group bg-[#FAFCFF] p-8 rounded-3xl border border-[#0066FF]/15 hover:border-[#0066FF]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className={`w-7 h-7 ${service.color}`} />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-[#0A1628] mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-textMuted text-sm leading-relaxed mb-6">{service.description}</p>
                            </div>

                            <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] font-heading">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>Guaranteed Quality Standard</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
