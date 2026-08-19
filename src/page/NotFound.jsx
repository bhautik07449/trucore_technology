import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft, Search, Layers, ShieldAlert, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFCFF] flex items-center justify-center pt-28 pb-20 px-4 relative overflow-hidden">
      <Helmet>
        <title>404 - Page Not Found | Trucore Technologies</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved." />
      </Helmet>

      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[24rem] h-[24rem] bg-[#00B4D8]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto max-w-3xl relative z-10 text-center">
        
        {/* Animated 404 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] font-heading font-bold text-xs uppercase tracking-widest mb-6"
        >
          <ShieldAlert className="w-4 h-4 text-[#0066FF]" />
          <span>Error 404 • Page Not Found</span>
        </motion.div>

        {/* Big 404 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-7xl sm:text-9xl font-black text-[#031B4E] tracking-tight leading-none mb-4"
        >
          4<span className="text-gradient-logo">0</span>4
        </motion.h1>

        {/* Subtitle & Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0A1628] mb-4"
        >
          Lost in Digital Space?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-textMuted max-w-xl mx-auto mb-10 leading-relaxed font-normal"
        >
          The page you are looking for doesn't exist or may have been relocated. Let's get you back on track to exploring our AI & software solutions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Link
            to="/"
            className="btn-primary px-7 py-3.5 text-sm font-bold shadow-xl"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>

          <Link
            to="/service"
            className="btn-ghost px-7 py-3.5 text-sm font-semibold bg-white border border-[#0066FF]/20 hover:border-[#0066FF]"
          >
            <Layers className="w-4 h-4 text-[#0066FF]" />
            Explore Services
          </Link>
        </motion.div>

        {/* Quick Links Footer Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-6 rounded-2xl bg-white border border-[#0066FF]/15 shadow-sm max-w-lg mx-auto"
        >
          <p className="text-xs uppercase font-bold font-heading text-[#031B4E] tracking-wider mb-3">Popular Navigation Destinations</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-[#0066FF]">
            <Link to="/about" className="hover:underline">About Us</Link>
            <span className="text-gray-300">•</span>
            <Link to="/service" className="hover:underline">AI & Web Services</Link>
            <span className="text-gray-300">•</span>
            <Link to="/portfolio" className="hover:underline">Portfolio</Link>
            <span className="text-gray-300">•</span>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
