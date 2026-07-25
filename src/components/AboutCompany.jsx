import { motion } from "framer-motion";
import about from "../assets/about.png";

export default function AboutCompany() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

            <div className="container mx-auto px-4 relative pt-24 pb-16 lg:pt-14 lg:pb-0">
                <div className="flex flex-col lg:flex-row gap-12 items-center w-full text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-[60%]"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Where Strategy Meets <br />
                            <span className="text-primary mt-2">Scalable Software.</span>
                        </h1>

                        <p className="text-gray-700 text-lg leading-relaxed mb-10">
                            We are a team of problem solvers who turn ideas into impactful digital solutions. By understanding your vision and business challenges, we add real value through smart planning, thoughtful design, and scalable execution—helping your business grow, adapt, and succeed in a digital world.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 mx-auto lg:mx-0 max-w-lg lg:max-w-none">
                            {[
                                { title: "Strategy First", desc: "Built for your goals" },
                                { title: "Agile Process", desc: "Fast & iterative delivery" },
                                { title: "Tech Mastery", desc: "Modern stack experts" },
                                { title: "Global Reach", desc: "Serving clients worldwide" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start">
                            {[
                                { value: "50+", label: "Projects Delivered" },
                                { value: "5+", label: "Years Experience" },
                                { value: "98%", label: "Client Satisfaction" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl font-[700]">{stat.value}</div>
                                    <div className="text-sm text-textMuted mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex justify-center md:justify-end w-full lg:w-[40%] mt-10 lg:mt-0"
                    >
                        <img
                            src={about}
                            alt="About Trucore Technology"
                            className="w-full max-w-[300px] lg:max-w-full h-auto object-contain drop-shadow-md"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
