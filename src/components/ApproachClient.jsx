import experience from "../assets/experience.jpg";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const cards = [
    { title: "End-to-End Services", desc: "We deliver complete IT solutions, from strategy and design to development and testing, ensuring smooth execution tailored to various business requirements." },
    { title: "Client-Centric Approach", desc: "We focus on understanding client needs and delivering personalized solutions that align with their goals and drive meaningful business growth." },
    { title: "Reliable Delivery", desc: "We are committed to delivering high-quality results while building strong relationships that support long-term collaboration and success." },
    { title: "Future-Ready Innovation", desc: "We leverage modern technologies to craft innovative solutions that help businesses adapt, evolve, and stay competitive in a dynamic market." },
];

export default function ApproachClient() {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center py-8 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="lg:flex gap-12 items-center w-full">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center w-full lg:w-[40%] mb-10 lg:mb-0"
                    >
                        <img
                            src={experience}
                            alt="How We Drive Client Success"
                            className="w-full h-full object-contain rounded-3xl drop-shadow-md"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-[60%]"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Experience the Power of <br />
                            <span className="text-primary">Custom Solutions</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {cards.map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-white border border-gray-100 p-5 rounded-xl transition-all duration-300"
                                >
                                    <div className="flex items-start gap-3 mb-4">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                                        <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                                    </div>
                                    <p className="text-textMuted text-sm leading-relaxed pl-8">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
