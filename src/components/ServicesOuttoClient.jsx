import { AnimatePresence, motion } from "framer-motion";
import { services } from "../data/services_data";

export default function ServicesOuttoClient() {
    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <span className="badge-logo mb-4">Domain Expertise</span>
                    <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#0A1628] mb-6 leading-tight">
                        Serving Clients Across <br />
                        <span className="text-gradient-logo font-black">Diverse Global Industries</span>
                    </h2>
                    <p className="mt-2 text-lg text-textMuted max-w-2xl mx-auto">
                        Tailored software architecture and industry-specific solutions built to solve domain challenges.
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={itemVariants} className="group">
                                <div className="h-full bg-[#FAFCFF] rounded-2xl border border-[#0066FF]/10 p-6 text-center shadow-xs hover:shadow-xl hover:border-[#00B4D8]/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center justify-center">
                                    <div className="mb-4 mx-auto flex items-center justify-center rounded-2xl p-3 bg-white border border-[#0066FF]/10 shadow-xs group-hover:scale-110 transition-transform duration-300">
                                        <img src={service.icon} alt={service.name} width="64" height="64" loading="lazy" decoding="async" className="h-14 lg:h-16 w-14 lg:w-16 object-contain" />
                                    </div>
                                    <h3 className="font-heading font-bold text-sm md:text-base text-[#0A1628] group-hover:text-[#0066FF] transition-colors duration-200">
                                        {service.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};
