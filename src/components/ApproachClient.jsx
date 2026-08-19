import solutionsVisual from "../assets/modern_solutions_visual.jpg";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

const cards = [
    { title: "End-to-End Software Lifecycle", desc: "Complete digital product development from solution architecture and UI/UX design to automated deployment.", icon: Layers },
    { title: "Client-Centric Engineering", desc: "Customized digital experiences tailored specifically to your unique workflows, security needs, and business objectives.", icon: ShieldCheck },
    { title: "High-Performance Delivery", desc: "Agile sprints, robust unit testing, and rigorous code reviews to guarantee bug-free, enterprise-grade releases.", icon: Zap },
    { title: "Future-Ready Innovation", desc: "Integrating cloud scalability, microservices, and AI integrations to keep your organization ahead of competition.", icon: Sparkles },
];

export default function ApproachClient() {
    return (
        <section className="bg-[#FAFCFF] py-16 lg:py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0066FF]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Image Column Left (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-[#0066FF]/20 via-[#00B4D8]/10 to-transparent shadow-xl border border-[#0066FF]/15">
                            <img
                                src={solutionsVisual}
                                alt="How Trucore Drives Client Success"
                                width="500"
                                height="400"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto object-cover rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </motion.div>

                    {/* Content Column Right (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <span className="badge-logo mb-4">Why Partner With Us</span>
                        <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#0A1628] mb-8 leading-tight">
                            Experience The Power Of <br />
                            <span className="text-gradient-logo font-black">Tailored Technology Solutions</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {cards.map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: i * 0.08 }}
                                    className="bg-white border border-[#0066FF]/10 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#00B4D8]/40 transition-all duration-300 group"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#0056C6]/10 text-[#0056C6] group-hover:bg-[#0056C6] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                                            <card.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-heading text-lg font-bold text-[#0A1628] group-hover:text-[#0066FF] transition-colors">{card.title}</h3>
                                    </div>
                                    <p className="text-textMuted text-sm leading-relaxed">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
