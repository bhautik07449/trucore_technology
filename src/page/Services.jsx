import Services from "../components/Services";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Smartphone, Brain, ShieldCheck, Zap, Clock, Users, Star, Sparkles } from "lucide-react";
import customSoftwareui from "../assets/service_img/ui/custom_softwareui.png";
import { Link } from "react-router-dom";
import ProcessSteps from "../components/ProcessSteps";
import Technologies from "../components/Technologies";

const serviceHighlights = [
    { title: "Web & Mobile Platforms", desc: "Custom React, Next.js & Flutter apps engineered for high concurrency." },
    { title: "Autonomous AI Agents", desc: "Custom RAG pipelines, fine-tuned LLMs & neural workflow engines." },
    { title: "Enterprise ERP & Cloud", desc: "Zero-trust serverless backend architecture & ERP modernization." },
    { title: "Product UI/UX Engineering", desc: "Human-centric design systems tailored for rapid user adoption." },
];

const trustStats = [
    { value: "100+", label: "Delivered Products", icon: Star, color: "text-[#0066FF]" },
    { value: "99.8%", label: "Client Retention", icon: CheckCircle2, color: "text-[#00B4D8]" },
    { value: "24/7", label: "Enterprise Support", icon: Clock, color: "text-[#031B4E]" },
    { value: "5+", label: "Years Leadership", icon: Users, color: "text-[#0066FF]" },
];

export default function ServiceSection() {
    return (
        <>
            <Helmet>
                <title>Trucore Technologies | Enterprise Services & AI Solutions</title>
                <meta name="description" content="Discover enterprise software services by Trucore Technologies: AI agents, web engineering, mobile apps, ERP systems & cloud microservices." />
                <link rel="canonical" href="https://www.trucoretechnology.com/service" />
            </Helmet>

            {/* ── HERO ── */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#FAFCFF]">
                {/* Glowing Ambient Orbs */}
                <div className="absolute top-1/4 -right-20 w-[32rem] h-[32rem] bg-[#0066FF]/12 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                <div className="absolute top-1/3 left-[-10%] w-[30rem] h-[30rem] bg-[#031B4E]/08 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-7"
                        >
                            <div className="badge-logo mb-4 shadow-xs">
                                <span className="w-2 h-2 bg-[#0066FF] rounded-full animate-pulse"></span>
                                <span className="tracking-widest uppercase text-xs font-bold font-heading">
                                    TRUCORE CAPABILITY SUITE • ENTERPRISE ENGINEERING
                                </span>
                            </div>

                            <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#0A1628] leading-[1.15] mb-6 tracking-tight">
                                Engineering Next-Gen <br />
                                <span className="text-gradient-logo font-black">Cloud, Web & AI Systems</span>
                            </h1>

                            <p className="text-base sm:text-lg text-textMuted leading-relaxed mb-8 max-w-2xl font-normal">
                                At <strong className="text-[#031B4E] font-semibold">Trucore Technologies</strong>, we build mission-critical digital products that optimize enterprise workflows, accelerate market launch, and drive measurable revenue growth.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {serviceHighlights.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-[#0066FF]/15 shadow-xs">
                                        <div className="w-7 h-7 bg-[#0066FF]/10 text-[#0066FF] rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="w-2 h-2 bg-[#0066FF] rounded-full"></span>
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-[#0A1628] text-sm">{item.title}</h4>
                                            <p className="text-xs text-textMuted mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="btn-primary px-8 py-4 text-sm font-bold shadow-xl"
                                >
                                    Start Project Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="#services-grid"
                                    className="btn-ghost px-7 py-4 text-sm font-semibold bg-white border border-[#0066FF]/20"
                                >
                                    Explore Solutions Grid
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative rounded-3xl p-3 bg-gradient-to-br from-[#0066FF]/20 via-[#00B4D8]/10 to-transparent shadow-2xl border border-[#0066FF]/20">
                                <img
                                    src={customSoftwareui}
                                    alt="Services Capability Illustration"
                                    className="w-full h-auto object-cover rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── TRUST STATS STRIP ── */}
            <section className="bg-white py-12 border-y border-[#0066FF]/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {trustStats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#FAFCFF] border border-[#0066FF]/10 shadow-2xs"
                            >
                                <div className="w-10 h-10 bg-[#0066FF]/10 rounded-xl flex items-center justify-center mb-2">
                                    <s.icon className={`w-5 h-5 ${s.color}`} />
                                </div>
                                <div className="font-heading text-2xl font-extrabold text-[#0A1628]">{s.value}</div>
                                <div className="text-xs text-textMuted font-semibold font-heading uppercase tracking-wider mt-0.5">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES BENTO GRID ── */}
            <div id="services-grid">
                <Services />
            </div>

            {/* ── PROCESS PIPELINE ── */}
            <ProcessSteps />

            {/* ── TECH ECOSYSTEM ── */}
            <Technologies className="bg-[#FAFCFF]" />

            {/* ── BOTTOM CTA ── */}
            <section className="py-20 bg-gradient-to-br from-[#031B4E] via-[#0A1628] to-[#030A16] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00B4D8]/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="badge-logo mb-4 border-white/20 text-white bg-white/10">Build Your Advantage</span>
                        <h2 className="font-heading text-3xl sm:text-5xl font-black mb-6 leading-tight">
                            Ready to Transform Your <span className="text-[#00E5FF]">Digital Architecture</span>?
                        </h2>
                        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-normal">
                            Consult with our technical leaders and turn your product requirements into a scalable engineering blueprint.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="btn-primary px-9 py-4 text-base font-bold shadow-2xl"
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/portfolio"
                                className="btn-ghost px-9 py-4 text-base font-bold bg-white/10 text-white border-white/20 hover:bg-white/20"
                            >
                                View Case Studies
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
