import { motion } from "framer-motion";
import w1 from '../assets/whyus/1.svg'
import w2 from '../assets/whyus/2.svg'
import w3 from '../assets/whyus/3.svg'

const data = [
    { icon: w3, title: "One - Stop Solution", description: "We offer end-to-end IT services, design, development, quality assurance with a dedicated group of experts for various industry domains and technologies." },
    { icon: w2, title: "Customer Focus", description: "In this constantly changing and challenging business world, we aim to provide competent advice as per the custom needs of the client to meet their business goals." },
    { icon: w1, title: "Commitment", description: "We deliver the maximum value to our customers by becoming their reliable technology partner. Our success is defined by the success of our customer." }
]

export default function WhyUs() {
    return (
        <section
            className="min-h-screen flex items-center py-12 bg-gray-50 relative overflow-hidden"
        >

            <div className="container mx-auto relative px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        <span className="text-primary">Why </span> Choose Us?
                    </h2>
                    <p className="mt-4 text-lg text-textMuted">
                        We leverage our extensive experience and talented resource pool to deliver the top-notch IT services for businesses globally. Over the years, we have succeeded in keeping up the trust placed in us by our customers and established long term relations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {data.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white p-6 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="rounded-2xl h-full">
                                <img
                                    src={service?.icon}
                                    alt={service?.title}
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-textMuted mb-6">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
