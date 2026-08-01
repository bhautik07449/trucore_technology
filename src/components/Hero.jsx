import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import hero from '../assets/hero1.png'
import { Link } from "react-router-dom";
import { trackEvent } from "../../AnalyticsTracker";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#e8f0ff] via-white to-[#dbeafe]/50"
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#1e68ff]/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-[#0d1b3e]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-[#1e68ff]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-white"></div>

      <div className="container relative w-full px-4 pt-24 pb-20 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-y-16 text-left">
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#1e68ff]/10 text-[#1e68ff] border border-[#1e68ff]/25 px-4 py-1.5 rounded-full text-sm font-medium mb-6 mx-auto lg:mx-0"
              >
                <span className="w-2 h-2 bg-[#1e68ff] rounded-full animate-pulse"></span>
                Trusted IT Solutions Partner
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-[#0d1b3e] leading-tight mb-6"
              >
                Transforming Business with <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-[#1e68ff]">
                    Next-Gen{" "}
                  </span>
                  <span className="text-[#0d1b3e]">AI Solutions</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-textMuted mb-10 leading-relaxed"
              >
                We turn your ideas into reality with innovative Web App and AI solutions. As a leading tech company, we focus on creating smart, high-quality digital experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/contact"
                  onClick={() => trackEvent("Hero", "Click", "Get Started")}
                  className="btn-primary px-7 py-3.5 text-base"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#services"
                  onClick={() => trackEvent("Hero", "Click", "Our Services")}
                  className="btn-ghost px-7 py-3.5 text-base"
                >
                  Our Services
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
              >
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "24/7", label: "Support Available" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-[700] text-[#0d2a63]">{stat.value}</div>
                    <div className="text-sm text-textMuted mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-[45%] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-70"></div>

              <img
                src={hero}
                alt="Hero — AI Solutions"
                width="600"
                height="500"
                className="relative w-full h-auto drop-shadow-xl"
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-2 lg:-right-8 top-1/4 bg-white p-3 lg:p-4 rounded-xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-sm font-semibold text-gray-800 capitalize">custom solutions</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-2 lg:-left-8 bottom-1/4 bg-white p-3 lg:p-4 rounded-xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-sm font-semibold text-gray-800">24/7 Support</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
