import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Target, Clock, ShieldCheck, Zap, HeartHandshake, Globe2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import deliveryVisual from "../assets/modern_delivery_visual.jpg";

export default function ProjectDelivery() {
    const stats = [
        { number: 100, suffix: "+", label: "Software Delivered", icon: Award, color: "text-[#0066FF]", bg: "bg-[#0066FF]/10" },
        { number: 99, suffix: "%", label: "Client Satisfaction", icon: HeartHandshake, color: "text-[#00B4D8]", bg: "bg-[#00B4D8]/10" },
        { number: 25, suffix: "K+", label: "Hours of Engineering", icon: Clock, color: "text-[#031B4E]", bg: "bg-[#031B4E]/10" },
        { number: 15, suffix: "+", label: "Countries Served", icon: Globe2, color: "text-[#0066FF]", bg: "bg-[#0066FF]/10" },
    ];

    const pillars = [
        {
            title: "Quality-First Architecture",
            desc: "We enforce strict code reviews, CI/CD automated testing, and zero-trust security standards.",
            icon: ShieldCheck,
            color: "text-[#0066FF]"
        },
        {
            title: "Agile Sprints & Rapid Delivery",
            desc: "Iterative sprint cycles ensure functional product milestones and rapid time-to-market.",
            icon: Zap,
            color: "text-[#00B4D8]"
        },
        {
            title: "Cloud & AI Powered",
            desc: "Architected using modern serverless databases, cloud infrastructure, and AI orchestration.",
            icon: Rocket,
            color: "text-[#031B4E]"
        }
    ];

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="py-16 lg:py-24 bg-[#FAFCFF] relative overflow-hidden"
        >
            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column (6 cols) */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="badge-logo mb-4">
                                <Target className="w-4 h-4" />
                                Our Delivery Excellence
                            </span>
                            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#0A1628] mb-6 leading-tight">
                                How We Turn Your <br />
                                <span className="text-gradient-logo font-black">Vision Into Reality</span>
                            </h2>
                            <p className="text-lg text-textMuted mb-10 max-w-xl leading-relaxed">
                                At Trucore Technologies, we don't just write code—we deliver measurable business impact through engineered precision, continuous delivery, and robust quality control.
                            </p>

                            <div className="space-y-6">
                                {pillars.map((pillar, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="flex gap-4 p-4 rounded-2xl bg-white border border-[#0066FF]/10 shadow-xs"
                                    >
                                        <div className="shrink-0 w-11 h-11 rounded-xl bg-[#0056C6]/10 flex items-center justify-center">
                                            <pillar.icon className={`w-5 h-5 ${pillar.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-lg font-bold text-[#0A1628] mb-1">{pillar.title}</h3>
                                            <p className="text-textMuted text-sm leading-relaxed">{pillar.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column (6 cols) */}
                    <div className="lg:col-span-6 flex flex-col gap-8">
                        {/* Delivery Dashboard Visual Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-3xl p-3 bg-gradient-to-br from-[#0066FF]/20 via-[#00B4D8]/10 to-transparent shadow-xl border border-[#0066FF]/15"
                        >
                            <img
                                src={deliveryVisual}
                                alt="Trucore Software Development Pipeline"
                                width="550"
                                height="380"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto object-cover rounded-2xl shadow-md transform transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.slice(0, 2).map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.3 + (idx * 0.1) }}
                                    className="bg-white border border-[#0066FF]/10 p-6 rounded-2xl shadow-xs text-center"
                                >
                                    <div className="flex justify-center mb-2">
                                        <Counter target={stat.number} suffix={stat.suffix} start={isInView} />
                                    </div>
                                    <p className="text-textMuted font-medium text-xs font-heading">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            className="bg-[#031B4E] rounded-2xl p-6 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-xl"
                        >
                            <div>
                                <h4 className="font-heading text-xl font-bold mb-1">Ready to Engineer Your System?</h4>
                                <p className="text-gray-300 text-xs">Book a technical discovery session with our engineers.</p>
                            </div>
                            <Link to="/contact" className="btn-primary px-6 py-3 text-sm font-bold shrink-0">
                                Book a Strategy Call
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

const Counter = ({ target, suffix, start }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const interval = duration / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, interval);

        return () => clearInterval(timer);
    }, [start, target]);

    return (
        <h4 className="text-4xl font-black text-gray-900 tracking-tight">
            {count}{suffix}
        </h4>
    );
};
