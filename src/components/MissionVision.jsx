import { motion } from "framer-motion";
import mission from "../../src/assets/missionVision/our-mission.svg"
import vision from "../../src/assets/missionVision/our-vision.svg"
import { Target, Eye, ArrowRight } from "lucide-react";

export default function MissionVision() {
    return (
        <section className="min-h-screen flex items-center py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative">
                            <span className="absolute -top-20 -left-10 text-[150px] font-bold text-gray-50 -z-10 select-none">01</span>

                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                                <Target className="w-4 h-4" />
                                OUR PURPOSE
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Our <span className="text-primary">Mission</span> to <br />
                                Empower Businesses
                            </h2>

                            <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-gray-100 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -z-10 group-hover:scale-110 transition-transform duration-500"></div>

                                <p className="text-textMuted text-lg lg:text-xl leading-relaxed mb-8">
                                    We believe in empowering businesses with complete digital transformation by engineering groundbreaking and scalable solutions. Our mission is to tackle every tech challenge and pave the path for fresh opportunities and positive ROIs.
                                </p>

                                <div className="flex items-center gap-4">
                                    <img src={mission} alt="Mission" className="w-16 h-16 object-contain" />
                                    <div className="h-0.5 flex-grow bg-gray-100"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative lg:mt-24"
                    >
                        <div className="relative">
                            <span className="absolute -top-20 -left-10 text-[150px] font-bold text-gray-50 -z-10 select-none">02</span>

                            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                                <Eye className="w-4 h-4" />
                                OUR GOAL
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Our <span className="text-primary">Vision</span> for <br />
                                Global Innovation
                            </h2>

                            <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-gray-100 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[5rem] -z-10 group-hover:scale-110 transition-transform duration-500"></div>

                                <p className="text-textMuted text-lg lg:text-xl leading-relaxed mb-8">
                                    We believe in charting the path to technological innovation in every aspect. From driving business growth to pioneering cutting-edge solutions that transform industries, we catalyze the tech revolution globally.
                                </p>

                                <div className="flex items-center gap-4">
                                    <img src={vision} alt="Vision" className="w-16 h-16 object-contain" />
                                    <div className="h-0.5 flex-grow bg-gray-100"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 flex justify-center"
                >
                    <div className="bg-gray-900 text-white px-8 py-4 rounded-2xl flex items-center gap-4 shadow-xl">
                        <span className="w-3 h-3 bg-primary rounded-full animate-ping"></span>
                        <p className="font-medium">Driving the future of digital excellence</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
