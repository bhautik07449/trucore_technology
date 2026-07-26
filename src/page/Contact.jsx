import ContactPage from "../components/Contact";
import logo from "../assets/named_logo.png";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight,
    CheckCircle, Zap, Users, Globe, Linkedin, Twitter, Instagram
} from "lucide-react";
import { Link } from "react-router-dom";
import FAQs from "../components/FAQs";

const contactMethods = [
    {
        icon: Phone,
        title: "Call Us",
        description: "Speak directly with our experts",
        detail: "+91 9512464749\n +91 9510353853",
        color: "bg-blue-50",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-100",
    },
    {
        icon: Mail,
        title: "Email Us",
        description: "Send us your inquiry anytime",
        detail: "trucoretechnology@gmail.com",
        color: "bg-purple-50",
        iconColor: "text-purple-600",
        iconBg: "bg-purple-100",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        description: "Come meet our team in person",
        detail: "303 Dhara Arcade, Surat,\nGujarat 395001, India",
        color: "bg-green-50",
        iconColor: "text-green-600",
        iconBg: "bg-green-100",
    },
    {
        icon: Clock,
        title: "Business Hours",
        description: "We're available during these hours",
        detail: "Mon – Sat: 9:00 AM – 8:00 PM\nSun: 10:00 AM – 2:00 PM",
        color: "bg-orange-50",
        iconColor: "text-orange-600",
        iconBg: "bg-orange-100",
    },
];

const whyContactUs = [
    { icon: Zap, title: "Fast Response", desc: "We reply to all inquiries within 24 hours on business days." },
    { icon: Users, title: "Expert Team", desc: "Get matched with the right specialist for your project needs." },
    { icon: Globe, title: "Global Reach", desc: "We work with clients across all time zones worldwide." },
    { icon: CheckCircle, title: "Free Consultation", desc: "Your first consultation and project estimate are completely free." },
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
                <title>Trucore Technology | Contact Us</title>
                <meta name="description" content="Get in touch with Trucore Technology. Have questions or want to learn more? Fill out the form below or reach us at trucoretechnology@gmail.com." />
                <meta name="keywords" content="contact Trucore, get in touch, inquiry form, software development inquiry" />
                <link rel="canonical" href="https://Trucore.com/contact" />
                <meta property="og:title" content="Trucore Technology | Contact Us" />
                <meta property="og:description" content="Get in touch with Trucore Technology. Have questions or want to learn more? Fill out the form below!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://Trucore.com/contact" />
                <meta property="og:image" content={logo} />
            </Helmet>

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
                <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

                <div className="container mx-auto px-4 relative pt-24 pb-16 lg:pt-0 lg:pb-0">
                    <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
                        {/* LEFT */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="w-full lg:w-1/2 text-left"
                        >
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Let's Start a <br />
                                <span className="text-primary">Conversation</span>
                            </h1>

                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                Have a project in mind? Looking for a tech partner? Or simply want to say hello?
                                We'd love to hear from you. Our team is always ready to help you turn ideas into reality.
                            </p>

                            {/* Why Contact Us grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto lg:mx-0 max-w-lg lg:max-w-none">
                                {[
                                    { title: "Fast Response", desc: "Replies within 24 hours" },
                                    { title: "Expert Advice", desc: "Consult with tech leads" },
                                    { title: "Global Support", desc: "Available for all timezones" },
                                    { title: "Project Inquiry", desc: "Get a free quote today" },
                                ].map((item, i) => (
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

                            {/* Social links */}
                            <div className="flex items-center gap-3 mt-12">
                                <span className="text-sm text-gray-500 font-medium">Follow us:</span>
                                {socialLinks.map((s, i) => (
                                    <a
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="w-9 h-9 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/40 hover:shadow-md transition-all duration-300"
                                    >
                                        <s.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* RIGHT – Contact info cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 lg:mt-0"
                        >
                            {contactMethods.map((method, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    className={`p-6 rounded-2xl ${method.color} border border-white/80 shadow-sm hover:shadow-md transition-all duration-300`}
                                >
                                    <div className={`w-12 h-12 ${method.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                        <method.icon className={`w-6 h-6 ${method.iconColor}`} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">{method.title}</h3>
                                    <p className="text-xs text-gray-500 mb-3">{method.description}</p>
                                    <p className="text-sm font-semibold text-gray-800 whitespace-pre-line leading-relaxed">{method.detail}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CONTACT FORM SECTION ── */}
            <ContactPage />

            {/* ── MAP / LOCATION SECTION ── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Find Us on the <span className="text-primary">Map</span>
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            We're based in Surat, Gujarat. Come visit us or reach out online — we're always happy to connect.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-xl overflow-hidden border border-gray-100"
                    >
                        <iframe
                            title="Trucore Technology Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8634106886343!2d72.88284837540276!3d21.23726428058431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1300c6e52f%3A0xf88307c9c18657e2!2sDhara%20Arcade!5e0!3m2!1sen!2sin!4v1777894336273!5m2!1sen!2sin"
                            width="100%"
                            height="420"
                            style={{ border: 0 }}
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
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -mt-32 -ml-32" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -mb-32 -mr-32" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Not Sure Where to Start?
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                            Book a free 30-minute discovery call with our team. We'll listen to your goals and suggest the best path forward — no strings attached.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/service"
                                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                            >
                                Explore Services
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/portfolio"
                                className="btn-primary px-7 py-3.5 text-base"
                            >
                                View Our Portfolio
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
