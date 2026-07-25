import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Target, Clock, ShieldCheck, Zap, HeartHandshake, Globe2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectDelivery() {
    const stats = [
        { number: 50, suffix: "+", label: "Projects Delivered", icon: Award, color: "text-blue-600", bg: "bg-blue-50" },
        { number: 100, suffix: "%", label: "Client Satisfaction", icon: HeartHandshake, color: "text-rose-600", bg: "bg-rose-50" },
        { number: 25, suffix: "K+", label: "Hours of Coding", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
        { number: 12, suffix: "+", label: "Countries Served", icon: Globe2, color: "text-emerald-600", bg: "bg-emerald-50" },
    ];

    const pillars = [
        {
            title: "Quality First",
            desc: "We follow industry-leading standards to ensure your product is bug-free and highly scalable.",
            icon: ShieldCheck,
            color: "text-blue-600"
        },
        {
            title: "Rapid Execution",
            desc: "Agile methodology allows us to deliver functional prototypes and updates faster than competitors.",
            icon: Zap,
            color: "text-amber-500"
        },
        {
            title: "Future Ready",
            desc: "Built with the latest technologies like AI, Cloud, and Web3 to keep you ahead of the curve.",
            icon: Rocket,
            color: "text-purple-600"
        }
    ];

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center py-20 lg:py-32 bg-gray-50 relative overflow-hidden"
        >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6 mx-auto lg:mx-0">
                                <Target className="w-4 h-4" />
                                Our Delivery Excellence
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                How We Turn Your <br />
                                <span className="text-primary">Vision into Reality</span>
                            </h2>
                            <p className="text-lg text-textMuted mb-12 max-w-xl">
                                At Trucore Technology, we don't just build software; we deliver growth. Our proven framework ensures every project is delivered with precision, speed, and uncompromising quality.
                            </p>

                            <div className="space-y-8">
                                {pillars.map((pillar, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + (idx * 0.1) }}
                                        className="flex gap-6"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                                            <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                                            <p className="text-textMuted leading-relaxed">{pillar.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.4 + (idx * 0.1), type: "spring", stiffness: 100 }}
                                className="group relative bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>

                                <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <Counter target={stat.number} suffix={stat.suffix} start={isInView} />
                                    </div>
                                    <p className="text-textMuted font-medium">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8 }}
                            className="sm:col-span-2 bg-gray-900 rounded-[2.5rem] p-8 mt-4 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Ready to Start?</h4>
                                    <p className="text-gray-400">Let's discuss your next breakthrough project.</p>
                                </div>
                                <Link to="/contact" className="btn-primary px-8 py-3 font-bold">
                                    Book a Call
                                </Link>
                            </div>
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
