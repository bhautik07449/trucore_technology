import ContactPage from "../components/Contact";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    Mail, Phone, MapPin, Clock, ArrowRight,
    CheckCircle2, Zap, Users, Globe, Linkedin, Twitter, Instagram, Sparkles, ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import FAQs from "../components/FAQs";

const contactMethods = [
    {
        icon: Phone,
        title: "Call Us Direct",
        description: "Talk to senior solution engineers",
        detail: "+91 95377 91849",
        color: "bg-[#0066FF]/10 text-[#0066FF]",
    },
    {
        icon: Mail,
        title: "Send An Email",
        description: "Official enterprise desk",
        detail: "contact@trucoretechnology.com",
        color: "bg-[#00B4D8]/10 text-[#00B4D8]",
    },
    {
        icon: MapPin,
        title: "HQ Location",
        description: "Surat Development Hub",
        detail: "315 Raj Imperia, Surat, Gujarat, India",
        color: "bg-[#031B4E]/10 text-[#031B4E]",
    },
    {
        icon: Clock,
        title: "Business Hours",
        description: "Monday to Saturday",
        detail: "Mon – Sat: 9:00 AM – 8:00 PM\nSun: 10:00 AM – 2:00 PM",
        color: "bg-[#0066FF]/10 text-[#0066FF]",
    },
];

const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/Trucore-technology" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/Trucoretech" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/Trucore_tech" },
];

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Trucore Technologies | Contact & Project Inquiry</title>
                <meta name="description" content="Get in touch with Trucore Technologies. Consult with AI engineers, request custom web & mobile software estimates." />
                <link rel="canonical" href="https://www.trucoretechnology.com/contact" />
            </Helmet>

            {/* ── HERO ── */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-[#FAFCFF]">
                {/* Ambient Glowing Orbs */}
                <div className="absolute top-1/4 -right-20 w-[32rem] h-[32rem] bg-[#0066FF]/12 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                <div className="absolute bottom-10 left-[-10%] w-[30rem] h-[30rem] bg-[#031B4E]/08 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
                        
                        {/* LEFT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/2 text-left"
                        >
                            <div className="badge-logo mb-4 shadow-xs">
                                <span className="w-2 h-2 bg-[#0066FF] rounded-full animate-pulse"></span>
                                <span className="tracking-widest uppercase text-xs font-bold font-heading">
                                    TRUCORE CONNECT • ENTERPRISE CONSULTATION
                                </span>
                            </div>

                            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0A1628] leading-[1.15] mb-6 tracking-tight">
                                Let's Start a <br />
                                <span className="text-gradient-logo font-black">Technical Conversation</span>
                            </h1>

                            <p className="text-base sm:text-lg text-textMuted leading-relaxed mb-8 font-normal">
                                Planning a modern web app, mobile product, or AI automation pipeline? Consult directly with our tech leads and get a transparent project roadmap.
                            </p>

                            {/* Key Highlights */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    { title: "24-Hour SLA Response", desc: "Guaranteed initial reply" },
                                    { title: "Senior AI Specialists", desc: "Direct engineering consultation" },
                                    { title: "Worldwide Timezones", desc: "Flexible remote work" },
                                    { title: "Free Technical Audit", desc: "Detailed effort estimation" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-[#0066FF]/15 shadow-2xs">
                                        <div className="w-6 h-6 bg-[#0066FF]/10 text-[#0066FF] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="w-2 h-2 bg-[#0066FF] rounded-full"></span>
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-[#0A1628] text-xs">{item.title}</h4>
                                            <p className="text-[11px] text-textMuted font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-[#0A1628] font-bold font-heading uppercase tracking-wider">Social Channels:</span>
                                {socialLinks.map((s, i) => (
                                    <a
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="w-9 h-9 bg-white border border-[#0066FF]/20 rounded-xl flex items-center justify-center text-[#031B4E] hover:text-white hover:bg-[#0066FF] hover:border-transparent hover:shadow-md transition-all duration-300"
                                    >
                                        <s.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* RIGHT CONTACT METHODS */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5"
                        >
                            {contactMethods.map((method, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                                    className="p-6 rounded-3xl bg-white border border-[#0066FF]/15 shadow-xs hover:shadow-md transition-all duration-300"
                                >
                                    <div className={`w-11 h-11 rounded-2xl ${method.color} flex items-center justify-center mb-4`}>
                                        <method.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-heading font-bold text-[#0A1628] text-base mb-1">{method.title}</h3>
                                    <p className="text-xs text-textMuted mb-3 font-normal">{method.description}</p>
                                    <p className="text-xs sm:text-sm font-bold text-[#0A1628] whitespace-pre-line leading-relaxed">{method.detail}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── FORM SECTION ── */}
            <ContactPage />

            {/* ── MAP LOCATION ── */}
            <section className="py-20 bg-white border-t border-[#0066FF]/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <span className="badge-logo mb-3">PHYSICAL LOCATION</span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0A1628] mb-3">
                            Visit Our <span className="text-gradient-logo">Surat HQ</span>
                        </h2>
                        <p className="text-textMuted max-w-lg mx-auto text-base">
                            315 Raj Imperia, Surat, Gujarat, India. Meet our senior software engineering team in person.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-3xl overflow-hidden border border-[#0066FF]/20 shadow-2xl p-2 bg-[#FAFCFF]"
                    >
                        <iframe
                            title="Trucore Technologies Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2168809454342!2d72.90068787530629!3d21.22324668047522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04563b5cc7cfb%3A0xb4efc89904fdbc2d!2sRaj%20Imperia!5e0!3m2!1sen!2sin!4v1785084330754!5m2!1sen!2sin"
                            width="100%"
                            height="440"
                            style={{ border: 0, borderRadius: "1.25rem" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── FAQs ── */}
            <FAQs />

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
                        <span className="badge-logo mb-4 border-white/20 text-white bg-white/10">30-Min Discovery</span>
                        <h2 className="font-heading text-3xl sm:text-5xl font-black mb-6 leading-tight">
                            Not Sure Where to <span className="text-[#00E5FF]">Begin</span>?
                        </h2>
                        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-normal">
                            Book an introductory technical call. We'll evaluate your project scope, recommend tech stacks, and provide an initial timeline.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/service"
                                className="btn-primary px-8 py-4 text-base font-bold shadow-2xl"
                            >
                                Explore Services
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/portfolio"
                                className="btn-ghost px-8 py-4 text-base font-bold bg-white/10 text-white border-white/20 hover:bg-white/20"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
