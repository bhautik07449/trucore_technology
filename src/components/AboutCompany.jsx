import { motion } from "framer-motion";
import aboutVisual from "../assets/modern_about_visual.jpg";
import { ShieldCheck, Cpu, Globe, Rocket } from "lucide-react";

export default function AboutCompany() {
    return (
        <section className="relative py-16 lg:py-24 overflow-hidden bg-[#FAFCFF]">
            {/* Background Glow */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
                    
                    {/* Content Column Left (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <span className="badge-logo mb-4">Engineering Excellence</span>
                        <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#0A1628] leading-tight mb-6">
                            Pioneering Autonomous AI & <br />
                            <span className="text-gradient-logo font-black">Full-Stack Web/App Systems</span>
                        </h2>

                        <p className="text-textMuted text-lg leading-relaxed mb-8">
                            We are AI engineers, software architects, and technology partners dedicated to crafting high-throughput digital systems. By fusing deep machine learning models with scalable web and mobile frameworks, we engineer products that transform enterprise productivity and scale globally.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                            {[
                                { title: "Autonomous AI Agents", desc: "Custom LLMs, RAG pipelines & smart bots", icon: Cpu },
                                { title: "Full-Stack Web & Mobile", desc: "Next.js, React, Flutter & iOS/Android apps", icon: Rocket },
                                { title: "Enterprise ERP & Cloud", desc: "Zero-trust serverless backend architecture", icon: ShieldCheck },
                                { title: "Global AI Engineering", desc: "Delivering software to clients worldwide", icon: Globe },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-[#0066FF]/10 shadow-xs">
                                    <div className="w-9 h-9 bg-[#0056C6]/10 text-[#0056C6] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-[#0A1628] text-base">{item.title}</h3>
                                        <p className="text-xs text-textMuted mt-0.5">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Column Right (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-3xl p-3 bg-gradient-to-br from-[#0066FF]/20 via-[#00B4D8]/10 to-transparent shadow-xl border border-[#0066FF]/15">
                            <img
                                src={aboutVisual}
                                alt="About Trucore Technologies — Corporate Software Engineering"
                                width="550"
                                height="450"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto object-cover rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
