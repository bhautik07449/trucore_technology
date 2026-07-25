import { motion } from "framer-motion";
import {
    Users, Globe, Star, LayoutGrid
} from "lucide-react";

export default function TeamStats({className}) {

    const data = [
        { icon: LayoutGrid, value: "50+", label: "Projects Delivered" },
        { icon: Users, value: "40+", label: "Happy Clients" },
        { icon: Globe, value: "8+", label: "Industries Served" },
        { icon: Star, value: "98%", label: "Client Satisfaction" },
    ];

    return (
        <section className={`py-10 bg-white ${className}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data.map((s, i) => (
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
    );
}