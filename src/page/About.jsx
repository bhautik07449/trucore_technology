import { Helmet } from "react-helmet-async";
import AboutCompany from "../components/AboutCompany";
import ApproachClient from "../components/ApproachClient";
import Corevalue from "../components/Corevalue";
import MissionVision from "../components/MissionVision";
import WhyUs from "../components/whyus";
import ProcessSteps from "../components/ProcessSteps";
import logo from "../assets/tru-core-logo.png";
import { motion } from "framer-motion";
import {
    Users, Globe, Star, LayoutGrid, ArrowRight, CheckCircle,
    Code2, Lightbulb, Handshake, TrendingUp, Zap, Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import teamImg from "../assets/team.jpg";
import TeamStats from "../components/TeamStats";

/* ── Inline data ── */
const milestones = [
    { year: "2022", title: "Founded", desc: "Trucore Technologies was founded with a mission to deliver impactful digital solutions for modern businesses." },
    { year: "2023", title: "First Major Clients", desc: "Onboarded our first enterprise clients and delivered ERP and web solutions across healthcare and retail." },
    { year: "2024", title: "AI & Automation", desc: "Expanded into AI-powered products, social media automation, and intelligent business systems." },
    { year: "2025", title: "Global Presence", desc: "Grew our team and client base globally, delivering 50+ projects across 8+ industry verticals." },
];

const teamValues = [
    { icon: Code2, title: "Technical Excellence", desc: "Our engineers stay current with the latest stacks and best practices to deliver world-class solutions." },
    { icon: Lightbulb, title: "Innovation Mindset", desc: "We challenge the status quo and bring creative ideas to every challenge we encounter." },
    { icon: Handshake, title: "True Partnership", desc: "We don't just build software — we become long-term partners invested in your growth and success." },
    { icon: TrendingUp, title: "Growth Driven", desc: "Every solution we deliver is designed with scalability and measurable business impact in mind." },
];

export default function About() {
    return (
        <>
            <Helmet>
                <title>Trucore Technologies | About Us</title>
                <meta name="description" content="Learn more about Trucore Technologies — our story, mission, vision, core values, and the team behind our innovative digital solutions." />
                <meta name="keywords" content="about Trucore, company info, mission, vision, core values, software team" />
                <link rel="canonical" href="https://www.trucoretechnology.com/about" />
                <meta property="og:title" content="Trucore Technologies | About Us" />
                <meta property="og:description" content="Learn more about Trucore Technologies, our mission, vision, and core values." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.trucoretechnology.com/about" />
                <meta property="og:image" content="https://www.trucoretechnology.com/logo.png" />
            </Helmet>

            {/* ── HERO (AboutCompany) ── */}
            <AboutCompany />

            {/* ── STATS STRIP ── */}
            <TeamStats className="border-y border-gray-100" />

            {/* ── OUR STORY / TIMELINE ── */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-60" />

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            The <span className="text-primary">Trucore Story</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            From a small team with big ambitions to a growing technology company trusted by businesses across industries — here's how we got here.
                        </p>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-12">
                            {milestones.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                                >
                                    {/* Content */}
                                    <div className="w-full md:w-[45%]">
                                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                                                {m.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{m.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="hidden md:flex w-[10%] justify-center">
                                        <div className="w-5 h-5 bg-primary rounded-full border-4 border-white shadow-lg" />
                                    </div>

                                    {/* Spacer */}
                                    <div className="hidden md:block w-[45%]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MISSION & VISION ── */}
            <MissionVision />

            {/* ── CORE VALUES ── */}
            <Corevalue />

            {/* ── WHAT DRIVES OUR TEAM ── */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50" />

                <div className="container mx-auto px-4 relative">
                    <div className="flex flex-col lg:flex-row gap-14 items-center">

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-[45%]"
                        >
                            <div className="relative">
                                <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-70" />
                                <div className="p-2 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/80 shadow-2xl overflow-hidden relative z-10">
                                    <img
                                        src={teamImg}
                                        alt="Trucore Technologies Team"
                                        className="w-full rounded-2xl object-cover"
                                    />
                                </div>
                                {/* Floating badge */}
                                <div className="absolute -bottom-5 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-3 z-20">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Users className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Our Team</p>
                                        <p className="text-sm font-bold text-gray-900">Passionate Builders</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text + Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-[55%]"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                A Team That <br />
                                <span className="text-primary">Builds with Purpose</span>
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Behind every project is a dedicated team of designers, developers, and strategists who are passionate about solving real problems. We thrive on collaboration, curiosity, and a shared commitment to excellence.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {teamValues.map((v, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md hover:bg-white transition-all duration-300 group"
                                    >
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <v.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm">{v.title}</h4>
                                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{v.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <WhyUs />

            {/* ── HOW WE WORK ── */}
            <ProcessSteps />

            {/* ── APPROACH & CUSTOM SOLUTIONS ── */}
            <ApproachClient />

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
                            Ready to Partner with <br />
                            <span className="text-primary">Trucore Technologies?</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                            Whether you have a project idea, a business challenge, or just want to say hello — our team is here and eager to help you move forward.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="btn-primary px-8 py-4 text-lg"
                            >
                                <Mail className="w-5 h-5" />
                                Get In Touch
                            </Link>
                            <Link
                                to="/service"
                                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-lg"
                            >
                                Explore Services
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
