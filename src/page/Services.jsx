import Services from "../components/Services";
import { Helmet } from "react-helmet-async";
import logo from "../assets/named_logo.png";
import { motion } from "framer-motion";
import { Settings, ArrowRight, CheckCircle, Globe, Smartphone, Brain, Palette, ShieldCheck, Zap, Clock, Users, Star } from "lucide-react";
import customSoftwareui from "../assets/service_img/ui/custom_softwareui.png";
import { Link } from "react-router-dom";
import ProcessSteps from "../components/ProcessSteps";
import Technologies from "../components/Technologies";

const serviceHighlights = [
    { icon: Globe, title: "website and app", desc: "Custom React & Next.js apps built for performance and scale." },
    { icon: Brain, title: "AI & Automation", desc: "Smart automation, ML models & AI-powered workflows." },
    { icon: ShieldCheck, title: "ERP & CRM", desc: "Tailored enterprise software for operations & growth." },
    { icon: Zap, title: "Digital branding", desc: "Data-driven branding, SEO, and social media strategies." },
];

const trustStats = [
    { value: "50+", label: "Projects Delivered", icon: Star },
    { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
    { value: "24/7", label: "Support Available", icon: Clock },
    { value: "5+", label: "Years Experience", icon: Users },
];

export default function ServiceSection() {
    return (
        <>
            <Helmet>
                <title>Trucore Technology | Services - Custom Software & Web Solutions</title>
                <meta name="description" content="Discover the range of services offered by Trucore Technology, including web development, app development, UI/UX design, and custom software solutions." />
                <meta name="keywords" content="services, web development, app development, UI/UX design, custom software, AI automation, ERP CRM" />
                <link rel="canonical" href="https://Trucore.com/service" />
                <meta property="og:title" content="Trucore Technology" />
                <meta property="og:description" content="Discover the range of services offered by Trucore Technology, including web development, app development, UI/UX design, and custom software solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://Trucore.com/service" />
                <meta property="og:image" content={logo} />
            </Helmet>

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
                <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

                <div className="container mx-auto px-4 pt-24 lg:pt-40 pb-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16 w-full text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="w-full lg:w-[55%]"
                        >

                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Innovative Solutions for <br />
                                <span className="text-primary">Modern Businesses</span>
                            </h1>

                            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-10">
                                We provide a wide range of technology services designed to help your business scale, innovate, and lead in the digital age. From custom software to AI-driven applications, we have the expertise to bring your vision to life.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto lg:mx-0 max-w-lg lg:max-w-none">
                                {serviceHighlights.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 mt-12">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:bg-primary/90 hover:shadow-primary/30 hover:shadow-xl transition-all duration-300"
                                >
                                    Get a Free Consultation
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a
                                    href="#services"
                                    className="inline-flex items-center gap-2 bg-white border border-gray-200 px-7 py-3.5 rounded-xl font-semibold shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
                                >
                                    Explore Services
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-[45%] mt-12 lg:mt-0"
                        >
                            <div className="relative group">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-60" />

                                <motion.div
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10"
                                >
                                    <div className="bg-white/50 backdrop-blur-sm rounded-[2.5rem] shadow-2xl overflow-hidden">
                                        <img
                                            src={customSoftwareui}
                                            alt="Services Hero"
                                            className="w-full rounded-[2rem] object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── TRUST STATS STRIP ── */}
            <section className="bg-white py-10 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {trustStats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col items-center text-center gap-2"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-1">
                                    <s.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES GRID ── */}
            <div>
                <Services />
            </div>

            {/* ── HOW WE WORK ── */}
            <ProcessSteps />

            {/* ── TECHNOLOGIES ── */}
            <Technologies className="bg-gray-50" />

            {/* ── BOTTOM CTA ── */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -mt-32 -ml-32" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -mb-32 -mr-32" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Let's Build Your Next <br />
                            <span className="text-primary">Digital Masterpiece</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                            Whether you need a new website, a mobile app, or a complete digital transformation — our team is ready to make it happen.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-primary/90 hover:shadow-primary/30 hover:shadow-xl transition-all duration-300 text-lg"
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/portfolio"
                                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-lg"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
