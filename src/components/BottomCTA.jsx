import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function BottomCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#031B4E] text-white relative overflow-hidden">
      {/* Background Animated Gradient Glowing Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0066FF]/30 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00B4D8]/20 rounded-full blur-3xl pointer-events-none animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 sm:p-12 lg:p-16 rounded-3xl backdrop-blur-md shadow-2xl relative"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0066FF]/20 border border-[#00B4D8]/40 text-[#00E5FF] text-xs font-heading font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span>Ready to Build Next-Gen AI & Web Systems?</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Let's Engineer Your Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00B4D8] to-white font-black">
              Competitive Advantage
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Partner with top software architects, AI engineers, and web development experts. Schedule a free strategic consultation to bring your product vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00B4D8] hover:from-[#0056C6] hover:to-[#0090B0] text-white font-heading font-bold rounded-2xl shadow-xl shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Schedule Strategic Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+919537791849"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5 text-[#00B4D8]" />
              <span>+91 95377 91849</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
