import { AnimatePresence, motion } from "framer-motion";
import { services } from "../data/services_data";

export default function ServicesOuttoClient() {

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="min-h-screen flex items-center py-8 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Serving Our Clients Across <br />
                        <span className="text-primary">Diverse Industries!</span>
                    </h2>
                    <p className="mt-2 text-lg lg:text-xl text-center text-textMuted">
                        A client-focused approach helps us to address the specific demands of businesses in various industries of the economy.
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:grid-cols-5 "
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={itemVariants} className="group">
                                <div className="h-full rounded-2xl border-2 border-gray-100 p-6 lg:p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div
                                        className="mx-auto flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                                    >
                                        <img src={service.icon} alt={service.name} className="h-16 lg:h-20 w-16 lg:w-20" />
                                    </div>
                                    <h3 className="text-md lg:text-lg md:text-xl font-semibold text-gray-900">
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
