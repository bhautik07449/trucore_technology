import { motion } from "framer-motion";
import { ShieldCheck, Heart, Award } from "lucide-react";

export default function Corevalue() {

    const data = [
        {
            title: "Integrity",
            description: "We uphold honesty and transparency in everything we do, building trust with our clients through ethical practices and clear communication at every stage.",
            icon: ShieldCheck,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Customer Commitment",
            description: "We put our clients at the center, understanding their needs and delivering tailored solutions that help them achieve their goals effectively and consistently.",
            icon: Heart,
            color: "text-pink-600",
            bg: "bg-pink-50"
        },
        {
            title: "Excellence",
            description: "We strive for excellence by delivering high-quality solutions, continuously improving our processes, and ensuring the best outcomes for our clients.",
            icon: Award,
            color: "text-amber-600",
            bg: "bg-amber-50"
        }
    ]

    return (
        <section className="min-h-screen flex items-center py-16 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto relative px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Core <span className="text-primary">Values</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-textMuted leading-relaxed">
                        We leverage our extensive experience and talented resource pool to deliver top-notch IT services. Our success is built on the trust we've established with our global clients.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full bg-white p-10 rounded-3xl border-2 border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-500 relative flex flex-col items-center text-center">
                                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-all duration-300`}>
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-textMuted leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
