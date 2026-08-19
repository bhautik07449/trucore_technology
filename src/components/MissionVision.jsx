import { motion } from "framer-motion";
import missionVisual from "../assets/modern_mission_visual.jpg";
import visionVisual from "../assets/modern_vision_visual.jpg";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
    return (
        <section className="py-20 bg-[#FAFCFF] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                    {/* Mission Card Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-white p-8 lg:p-10 rounded-3xl border border-[#0066FF]/15 shadow-xl h-full flex flex-col justify-between relative overflow-hidden group hover:border-[#0066FF]/40 transition-colors duration-300">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#0066FF]/5 rounded-bl-[6rem] -z-10 group-hover:scale-110 transition-transform duration-500"></div>

                            <div>
                                <div className="badge-logo mb-6">
                                    <Target className="w-4 h-4 text-[#0066FF]" />
                                    <span>OUR MISSION</span>
                                </div>

                                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-6 leading-tight">
                                    Engineering High-Impact <br />
                                    <span className="text-gradient-logo font-black">Digital Products</span>
                                </h2>

                                <p className="text-textMuted text-base lg:text-lg leading-relaxed mb-8">
                                    Empower organizations globally by crafting secure, scalable software architectures. We solve complex technical bottlenecks and deliver measurable ROI through transparent Agile engineering.
                                </p>
                            </div>

                            <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                                <img
                                    src={missionVisual}
                                    alt="Trucore Mission Visual"
                                    width="64"
                                    height="64"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-16 h-16 rounded-2xl object-cover shadow-md border border-[#0066FF]/20 shrink-0"
                                />
                                <div className="h-0.5 flex-grow bg-gradient-to-r from-[#0066FF]/20 to-transparent"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision Card Right */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-white p-8 lg:p-10 rounded-3xl border border-[#00B4D8]/20 shadow-xl h-full flex flex-col justify-between relative overflow-hidden group hover:border-[#00B4D8]/50 transition-colors duration-300">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00B4D8]/5 rounded-bl-[6rem] -z-10 group-hover:scale-110 transition-transform duration-500"></div>

                            <div>
                                <div className="badge-logo mb-6 border-[#00B4D8]/30 bg-[#00B4D8]/10 text-[#00B4D8]">
                                    <Eye className="w-4 h-4 text-[#00B4D8]" />
                                    <span>OUR VISION</span>
                                </div>

                                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-6 leading-tight">
                                    Pioneering Global <br />
                                    <span className="text-gradient-cyan font-black">AI & Tech Innovation</span>
                                </h2>

                                <p className="text-textMuted text-base lg:text-lg leading-relaxed mb-8">
                                    Become the premiere international technology partner recognized for advancing enterprise AI integration, cloud microservices, and sustainable software ecosystems.
                                </p>
                            </div>

                            <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                                <img
                                    src={visionVisual}
                                    alt="Trucore Vision Visual"
                                    width="64"
                                    height="64"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-16 h-16 rounded-2xl object-cover shadow-md border border-[#00B4D8]/30 shrink-0"
                                />
                                <div className="h-0.5 flex-grow bg-gradient-to-r from-[#00B4D8]/30 to-transparent"></div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
